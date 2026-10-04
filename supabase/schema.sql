CREATE TABLE prompts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  description TEXT,
  category TEXT NOT NULL,
  prompt_text TEXT NOT NULL,
  tags TEXT[],
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Row Level Security: public read-only access, no anon/authenticated write policies.
-- Writes go through the server API (service-role key, protected by ADMIN_TOKEN).
ALTER TABLE prompts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public read access to prompts"
  ON prompts
  FOR SELECT
  TO anon, authenticated
  USING (true);

INSERT INTO prompts (title, description, category, prompt_text, tags) VALUES
('Generate a React component', 'Creates a functional React component with props.', 'programming', 'Generate a React functional component called MyComponent that accepts the following props: name (string), age (number).', '{"react", "typescript"}'),
('A futuristic cityscape', 'Generate a cyberpunk-style cityscape.', 'images', 'A sprawling, neon-lit futuristic cityscape at night, with flying vehicles and towering skyscrapers. Style: Cyberpunk, Blade Runner.', '{"midjourney", "cyberpunk"}'),
('Analyze sales data', 'Analyze sales data using pandas.', 'data-analysis', 'Given a pandas DataFrame with columns ['Date', 'Product', 'Sales'], calculate the total sales for each product.', '{"pandas", "python"}');