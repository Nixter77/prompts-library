import { createHash, timingSafeEqual } from 'crypto';
import { NextResponse } from 'next/server';

/**
 * Extracts the admin token from `Authorization: Bearer <token>` or `x-admin-token`.
 */
function getRequestToken(request: Request): string | null {
  const authHeader = request.headers.get('authorization');
  if (authHeader && authHeader.toLowerCase().startsWith('bearer ')) {
    const token = authHeader.slice(7).trim();
    if (token) return token;
  }

  const headerToken = request.headers.get('x-admin-token');
  if (headerToken && headerToken.trim()) return headerToken.trim();

  return null;
}

function safeEqual(a: string, b: string): boolean {
  // Hash both values so the comparison is constant-time regardless of length.
  const aHash = createHash('sha256').update(a).digest();
  const bHash = createHash('sha256').update(b).digest();
  return timingSafeEqual(aHash, bHash);
}

/**
 * Returns a 401 response if the request is not authorized as admin, otherwise null.
 * Fails closed when ADMIN_TOKEN is not configured.
 */
export function requireAdmin(request: Request): NextResponse | null {
  const expected = process.env.ADMIN_TOKEN;
  if (!expected) {
    return NextResponse.json(
      { message: 'Unauthorized: admin access is not configured on the server.' },
      { status: 401 }
    );
  }

  const provided = getRequestToken(request);
  if (!provided || !safeEqual(provided, expected)) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }

  return null;
}
