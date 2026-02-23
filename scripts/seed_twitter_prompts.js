const fs = require('fs');
const path = require('path');
const { createClient } = require('@supabase/supabase-js');

// 1. Read .env.local
const envFilePath = path.join(__dirname, '../.env.local');
const envFile = fs.readFileSync(envFilePath, 'utf-8');
const env = {};
envFile.split('\n').forEach(line => {
  const match = line.match(/^([^#=]+)=(.*)$/);
  if (match) env[match[1].trim()] = match[2].trim();
});

const supabaseUrl = env['NEXT_PUBLIC_SUPABASE_URL'];
const supabaseKey = env['SUPABASE_SERVICE_ROLE_KEY'];

if (!supabaseUrl || !supabaseKey) {
  console.error("Missing Supabase URL or Key in .env.local");
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

const prompts = [
  // --- DESIGN PROMPTS (Apple-level Creative Director) ---
  {
    title: "Product Vision & Core Identity",
    description: "Defines the core product identity using high-end, minimalist Apple-style principles.",
    category: "Design",
    tags: ["apple", "branding", "vision", "creative-director"],
    prompt_text: "Act as an elite Creative Director at Apple. Define the core product vision and identity for my new product [INSERT PRODUCT NAME]. Focus on extreme minimalism, emotional resonance, and a 'less but better' philosophy. Outline: 1. The Core Belief (Why it exists), 2. The One-Sentence Pitch, 3. The 3 Pillars of Experience, 4. The Antithesis (What we are NOT). Keep the language ambitious, sleek, and definitive."
  },
  {
    title: "Minimalist Brand Guidelines System",
    description: "Generates comprehensive, high-end brand guidelines.",
    category: "Design",
    tags: ["design-system", "branding", "guidelines"],
    prompt_text: "Act as a world-class Brand Strategist. Create a comprehensive but highly minimalist brand guideline summary for [INSERT BRAND NAME]. I need you to define: 1. Brand Voice & Tone (with Do's and Don'ts), 2. Logo utilization rules (clear space, sizing), 3. Photographic Style (lighting, subjects, mood), and 4. Motion/Animation philosophy. The result should read like an internal document for a premium consumer technology brand."
  },
  {
    title: "Typographic Hierarchy Playbook",
    description: "Builds a sleek and professional typographic scale for web and mobile.",
    category: "Design",
    tags: ["typography", "ui-ux", "design-system"],
    prompt_text: "Act as an expert Typography Director. Design a strict typographic hierarchy for a modern app interface [INSERT INDUSTRY/VIBE]. Define the font pairings (using modern, clean sans-serifs like Inter, SF Pro, or Helvetica Now). Provide exact specifications for: Display H1, H2, H3, Body Text, and Micro-copy. Include Font Size (in rem/px), Weight, Line Height, and Letter Spacing. Ensure the contrast creates a premium, airy, and highly readable experience."
  },
  {
    title: "Cinematic Copywriting Framework",
    description: "Creates marketing copy that feels like a premium product launch.",
    category: "Marketing",
    tags: ["copywriting", "apple-style", "launch", "marketing"],
    prompt_text: "Act as a Lead Copywriter for a high-end tech firm. Write the copy for a product landing page for [INSERT PRODUCT]. The style must be punchy, rhythmic, and poetic—using very short sentences. Focus on the transformation and the feeling, not just the features. Include: 1. A Hero Headline (max 4 words), 2. A Sub-headline (max 10 words), 3. Three feature blocks structured as 'Feature-to-Emotion-Translation', and 4. A decisive call to action."
  },
  {
    title: "UI Component Library Architect",
    description: "Formulates a cohesive design system for digital interfaces.",
    category: "UI/UX",
    tags: ["ui", "design-system", "components", "css"],
    prompt_text: "Act as a Lead UI/UX Designer. Architect a foundational UI Component library for [INSERT APP TYPE]. Outline the rules for: 1. Buttons (Primary, Secondary, Ghost - including padding, border-radius, hover states), 2. Form Inputs (Active, Inactive, Error, Success), 3. Cards & Surfaces (Elevation, shadows, borders). Ensure the design language prioritizes whitespace, subtle glassmorphism if applicable, and high accessibility."
  },
  {
    title: "Emotional Color Psychology Matrix",
    description: "Develops a color palette rooted in minimalism and emotional impact.",
    category: "Design",
    tags: ["color", "psychology", "palette", "branding"],
    prompt_text: "Act as a Color Theorist and Creative Director. Develop a color palette for [INSERT BRAND PURPOSE] that evokes [INSERT DESIRED EMOTION]. Provide HEX codes for: a Primary Brand Color, a Secondary Accent Color, a Neutral Background Scale (3 shades), and Semantic Colors (Error, Success). For each color, provide a 1-sentence explanation of its psychological impact and how it supports a luxury, premium feel."
  },
  {
    title: "Product Packaging Experience",
    description: "Designs a physical packaging concept prioritizing the unboxing experience.",
    category: "Design",
    tags: ["packaging", "industrial-design", "experience"],
    prompt_text: "Act as an Industrial Designer specializing in the unboxing experience. Design the packaging flow for [INSERT PHYSICAL PRODUCT]. Detail the tactile journey from the moment the user holds the box. Describe the materials (e.g., matte finish, soft-touch, precise friction). Outline the exact sequence of unveiling: 1. The exterior, 2. The opening mechanism (suction, tear-strip, magnetic), 3. The immediate interior presentation, 4. The accessory placement."
  },
  {
    title: "High-End Pitch Deck Structurer",
    description: "Drafts the flow of a sleek, persuasive investor pitch deck.",
    category: "Business",
    tags: ["pitch-deck", "investor", "presentation", "startup"],
    prompt_text: "Act as a Presentation Designer for top-tier startups. Structure a 10-slide pitch deck for [INSERT STARTUP CONCEPT]. Emphasize visual storytelling over text-heavy slides. For each slide, write the exact Headline, the core argument (1 bullet point), and a description of the central visual graphic that should accompany it (e.g., 'A stark timeline graph showing exponential adoption'). The goal is a deck that is undeniable and visually minimal."
  },
  {
    title: "Visual Metaphors & Iconography",
    description: "Defines a set of coherent, bespoke visual metaphors for complex features.",
    category: "UI/UX",
    tags: ["iconography", "visuals", "ux", "creative-director"],
    prompt_text: "Act as a Lead Visual Designer. I need to explain [INSERT COMPLEX FEATURE/CONCEPT] to ordinary users. Develop 3 distinct visual metaphors or iconography concepts we can use in the UI to make this instantly understandable. For each concept, describe the metaphor, the visual aesthetic of the icon (e.g., line-art, 3D clay, abstract geometry), and why it intellectually maps to the feature without feeling patronizing."
  },
  {
    title: "Social Media Grid Strategy & Assets",
    description: "Plans a high-end 9-grid Instagram or social media strategy.",
    category: "Marketing",
    tags: ["social-media", "content-strategy", "grid", "branding"],
    prompt_text: "Act as a Social Media Art Director. Plan a launch sequence of 9 posts (a 3x3 grid) for [INSERT CAMPAIGN]. The grid together must form a cohesive aesthetic. Describe the visual content of each post (1 through 9) and the accompanying minimal caption. Ensure a balance of close-up product shots, lifestyle imagery, typographic quotes, and negative space to create a visually striking social presence."
  },

  // --- FINANCE PROMPTS (Goldman Sachs Analyst) ---
  {
    title: "3-Statement Financial Model Generator",
    description: "Constructs the framework for an integrated 3-statement model.",
    category: "Finance",
    tags: ["financial-modeling", "goldman-sachs", "3-statement", "excel"],
    prompt_text: "Act as a Senior Investment Banking Analyst. Provide a step-by-step schematic to build a fully integrated 3-statement financial model (Income Statement, Balance Sheet, Cash Flow Statement) for [INSERT COMPANY/INDUSTRY]. Detail how the statements link together, focusing specifically on the corkscrews for Debt, PP&E/Depreciation, and Working Capital. List the standard assumptions needed to project 5 years into the future."
  },
  {
    title: "Discounted Cash Flow (DCF) Valuator",
    description: "Step-by-step DCF valuation model methodology and calculation.",
    category: "Finance",
    tags: ["valuation", "dcf", "cash-flow", "corporate-finance"],
    prompt_text: "Act as a Valuations Expert at a top-tier investment bank. I am building a DCF model for [INSERT COMPANY]. Explain how to calculate UFCF (Unlevered Free Cash Flow) from EBITDA, step-by-step. Then, explain how to determine the optimal Terminal Value using both the Gordon Growth Method and the Exit Multiple Method. Provide a list of typical pitfalls analysts make when arriving at the Implied Share Price."
  },
  {
    title: "Leveraged Buyout (LBO) Screener & Assumptions",
    description: "Determines the core assumptions for assessing an LBO target.",
    category: "Finance",
    tags: ["private-equity", "lbo", "buyout", "finance"],
    prompt_text: "Act as a Private Equity Associate. We are evaluating an LBO target in the [INSERT INDUSTRY] sector. Outline the core assumptions I need for a paper LBO model. Define the typical capital structure (Senior Debt vs. Subordinated Debt percentages), entry and exit multiples, and the ideal IRR target (e.g., 20%+ over 5 years). Create a quick-math framework to determine if this company is a viable candidate based on its cash flow conversion."
  },
  {
    title: "M&A Accretion / Dilution Analyzer",
    description: "Framework for analyzing M&A transactions and EPS impact.",
    category: "Finance",
    tags: ["m&a", "mergers", "acquisitions", "eps"],
    prompt_text: "Act as an M&A Director. Explain how to set up an Accretion/Dilution (A/D) analysis for [INSERT BUYER] acquiring [INSERT TARGET]. Detail the components: calculating purchase price, allocating purchase price (goodwill creation), adjusting for synergies, accounting for the new interest expense (if debt funded) or foregone interest (if cash funded). Provide an output structure to show the standalone vs. pro-forma EPS."
  },
  {
    title: "Scenario & Sensitivity Tester",
    description: "Designs a sensitivity analysis framework for risk assessment in models.",
    category: "Finance",
    tags: ["risk", "sensitivity", "scenario-analysis", "excel"],
    prompt_text: "Act as a Risk Assessment Analyst. I have built a base-case financial model for [INSERT PROJECT/COMPANY]. Design an advanced sensitivity and scenario analysis framework. Define the 'Bear', 'Base', and 'Bull' case drivers. Instruct me on the exact structure for 2-variable data tables in Excel you would use to shock WACC against Terminal Multiple to show the implied valuation range in a 'football field' chart."
  },
  {
    title: "Earnings Call Transcript Extractor",
    description: "Analyzes earnings calls for sentiment and core financial drivers.",
    category: "Finance",
    tags: ["earnings", "research", "sentiment-analysis", "stocks"],
    prompt_text: "Act as an Equity Research Analyst. I will provide an earnings call transcript for [INSERT COMPANY]. Your task is to extract: 1. Forward-looking guidance revisions, 2. Management's tone regarding macro headwinds or tailwinds, 3. Capital allocation changes (buybacks, dividends, CAPEX), and 4. The 3 most critical Analyst Q&A interactions. Format the output as an actionable 1-page morning note for portfolio managers. [ATTACH TRANSCRIPT HERE]"
  },
  {
    title: "Weighted Average Cost of Capital (WACC) Builder",
    description: "Calculates the cost of capital with precision.",
    category: "Finance",
    tags: ["wacc", "cost-of-capital", "valuation"],
    prompt_text: "Act as a Corporate Finance Expert. Walk me through calculating the WACC for [INSERT COMPANY]. Specifically, tell me how to find the Risk-Free Rate, determine the Equity Risk Premium, and un-lever/re-lever Beta using comps. Then explain the determination of the Cost of Debt and the effective tax rate. Present this calculation as a clear, step-by-step formula map."
  },
  {
    title: "Comparable Company Analysis (Comps)",
    description: "Generates a strict methodology for peer valuation.",
    category: "Finance",
    tags: ["valuation", "comps", "trading-comps", "ibd"],
    prompt_text: "Act as an Investment Banking Analyst. Create a framework for a Trading Comps analysis for [INSERT TARGET COMPANY]. List the exact criteria for selecting the peer group (e.g., geography, margins, end-markets). Specify which metrics to use (LTM vs NTM EV/EBITDA, P/E) and explain why anomalies might occur (e.g., non-recurring charges) requiring 'scrubbing' of the financials. Provide a template structure for the output table."
  },
  {
    title: "Precedent Transactions Modeler",
    description: "Template and methodology for precedent M&A transaction valuation.",
    category: "Finance",
    tags: ["transaction-comps", "m&a", "valuation", "finance"],
    prompt_text: "Act as an M&A Advisor. I need to run a Precedent Transactions analysis for [INSERT INDUSTRY]. Detail the steps to identify relevant past deals, screen out irrelevant factors, and extract the deal value (Equity Value vs. Enterprise Value). Explain how a 'control premium' affects these multiples compared to Trading Comps and how to format the data to present to the client in a transaction overview slide."
  },
  {
    title: "Working Capital Forecaster",
    description: "Detailed modeling of short-term liquidity and cash conversion.",
    category: "Finance",
    tags: ["working-capital", "liquidity", "operations", "cash-flow"],
    prompt_text: "Act as a Corporate FP&A Manager. Provide an intricate methodology to forecast Working Capital for [INSERT COMPANY]. Define how to project Accounts Receivable (Days Sales Outstanding), Inventory (Days Inventory Outstanding), and Accounts Payable (Days Payable Outstanding). Explain how changes in Net Working Capital directly impact free cash flow generation in the model."
  },
  {
    title: "Capitalization Table Constructor",
    description: "Builds a multi-round VC/startup capitalization scenario.",
    category: "Finance",
    tags: ["venture-capital", "cap-table", "equity", "startup"],
    prompt_text: "Act as a Venture Capital Analyst. Guide me through building a dynamic Cap Table for a startup [INSERT STARTUP NAME]. Include sections for Founders, Seed Investors, Series A, and an Employee Option Pool (ESOP). Show how to calculate pre-money vs. post-money valuation, price per share, and the exact ownership dilution at each funding round. Provide a summary waterfall analysis structure."
  },
  {
    title: "Pitch Book Content Strategist",
    description: "Structures the narrative arc of an investment banking pitch book.",
    category: "Finance",
    tags: ["pitch-book", "presentations", "investment-banking", "advisory"],
    prompt_text: "Act as an Investment Banking VP. Structure the narrative arc of a 20-page strategic advisory pitch book for [INSERT POTENTIAL CLIENT]. Break down the presentation into: 1. Executive Summary & Strategy, 2. Market Overview & Positioning, 3. Target Screening / Valuation overview, and 4. Credentials & Tombstones. Tell me what visual (chart, table, text box) must dominate the real estate of each specific section."
  }
];

function slugify(val) {
  return val.trim().toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
}

async function run() {
  console.log(`Inserting ${prompts.length} Twitter-inspired prompts...`);
  let success = 0;
  for (const p of prompts) {
    const { data, error } = await supabase
      .from('prompts')
      .insert({
        title: p.title,
        description: p.description,
        category: slugify(p.category),
        prompt_text: p.prompt_text,
        tags: p.tags
      })
      .select('id')
      .single();
      
    if (error) {
      if (error.code === '23505') { // postgres unique violation
        console.log(`[SKIPPED] "${p.title}" already exists.`);
      } else {
        console.error(`[ERROR] Failed to insert "${p.title}": ${error.message}`);
      }
    } else {
      console.log(`[SUCCESS] Inserted "${p.title}" with ID ${data.id}`);
      success++;
    }
  }
  console.log(`Done! ${success} prompts inserted successfully.`);
}

run();
