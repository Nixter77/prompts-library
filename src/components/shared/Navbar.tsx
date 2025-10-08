import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-4 bg-white shadow-md">
      <div className="text-2xl font-bold">
        <Link href="/">Prompts Library</Link>
      </div>
      <div className="flex gap-4">
        <Link href="/">Home</Link>
        <Link href="/prompts/categories">Categories</Link>
        <Link href="/about">About</Link>
        <Link href="/add-prompt">Add Prompt</Link>
      </div>
    </nav>
  );
};

export default Navbar;
