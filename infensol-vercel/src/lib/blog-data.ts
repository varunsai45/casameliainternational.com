import villa from "@/assets/project-villa.jpg";
import kitchen from "@/assets/project-kitchen.jpg";
import hotel from "@/assets/project-hotel.jpg";
import exterior from "@/assets/project-exterior.jpg";
import materials from "@/assets/materials.jpg";
import factory from "@/assets/german-factory.jpg";
import hardware from "@/assets/german-hardware.jpg";
import hero from "@/assets/hero-villa.jpg";

export type BlogPost = {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  metaDescription: string;
  image: string;
  readTime: string;
  sections: { heading: string; body: string }[];
};

export const blogCategories = [
  "Luxury Interiors", "Villa Design", "Modular Kitchens", "German Manufacturing",
  "Architecture Trends", "Commercial Interiors", "Smart Homes", "Interior Materials",
  "Turnkey Projects", "Design Inspiration",
];

export const blogPosts: BlogPost[] = [
  {
    slug: "complete-guide-luxury-home-interiors",
    title: "Complete Guide to Luxury Home Interiors",
    category: "Luxury Interiors",
    excerpt: "A considered guide to creating a refined home through space, material, light and bespoke craft.",
    metaDescription: "Explore CASAMELIA's complete guide to luxury home interiors, from spatial planning and materials to lighting, furniture and execution.",
    image: hero,
    readTime: "8 min read",
    sections: [
      { heading: "Luxury begins with planning", body: "A truly luxurious interior is not defined by ornament alone. It begins with intelligent circulation, balanced proportions and a clear understanding of how each room will be lived in. Early planning allows architecture, services, furniture and lighting to become one coherent composition." },
      { heading: "Materials with depth", body: "Natural stone, premium veneers, metal, glass and tactile fabrics create richness when used with restraint. The finest schemes repeat a disciplined palette across the residence while allowing one or two signature materials to define each space." },
      { heading: "Craft, light and longevity", body: "Precision joinery and layered lighting turn a beautiful concept into an enduring home. Concealed hardware, clean junctions and maintainable finishes matter as much as visual impact. Every detail should feel effortless today and remain relevant for years." },
    ],
  },
  {
    slug: "why-german-hardware-matters",
    title: "Why German Hardware Matters in Interior Design",
    category: "German Manufacturing",
    excerpt: "The hidden engineering behind quieter movement, longer life and a more precise luxury interior.",
    metaDescription: "Learn why German hinges, runners and interior hardware improve precision, durability and everyday comfort in luxury interiors.",
    image: hardware,
    readTime: "6 min read",
    sections: [
      { heading: "Performance you feel every day", body: "Premium hardware determines how shutters close, drawers travel and tall units remain aligned. German systems are engineered for repeatable movement under load, delivering the quiet and controlled experience expected from luxury furniture." },
      { heading: "Precision supports design", body: "Reliable hinges, lift systems and runners allow designers to create larger shutters, cleaner fronts and concealed storage without compromising usability. Fine adjustment also helps installers achieve consistent reveals across an entire room." },
      { heading: "A long-term investment", body: "Hardware is one of the most frequently used parts of an interior. Choosing tested systems reduces maintenance and protects the cabinetry around them, making quality hardware a practical investment rather than a decorative upgrade." },
    ],
  },
  {
    slug: "villa-interior-design-trends-bangalore",
    title: "Villa Interior Design Trends in Bangalore",
    category: "Villa Design",
    excerpt: "How Bangalore villas are evolving through warm minimalism, integrated landscapes and intelligent living.",
    metaDescription: "Discover leading villa interior design trends in Bangalore, including warm minimalism, natural materials, smart homes and indoor-outdoor living.",
    image: villa,
    readTime: "7 min read",
    sections: [
      { heading: "Warm, architectural minimalism", body: "Bangalore homeowners are moving toward calm interiors with stronger architectural definition. Fluted timber, softly veined stone and warm neutral finishes replace visual clutter while retaining depth and individuality." },
      { heading: "Indoor-outdoor continuity", body: "Courtyards, decks and landscaped edges are increasingly treated as extensions of the living room. Consistent flooring tones, broad openings and considered lighting make these transitions feel natural throughout the day." },
      { heading: "Technology without visual noise", body: "Lighting, climate, security and entertainment are being integrated at the planning stage. The result is a responsive villa where controls are intuitive and technology remains discreet." },
    ],
  },
  {
    slug: "modular-kitchen-planning-guide",
    title: "Modular Kitchen Planning Guide",
    category: "Modular Kitchens",
    excerpt: "A practical framework for planning an ergonomic, precise and beautifully resolved kitchen.",
    metaDescription: "Plan a luxury modular kitchen with guidance on layouts, ergonomics, storage, materials, hardware, lighting and appliance integration.",
    image: kitchen,
    readTime: "9 min read",
    sections: [
      { heading: "Start with movement", body: "The best kitchen layout follows the sequence of storing, washing, preparing and cooking. Clear work zones and comfortable aisle widths reduce unnecessary movement and allow more than one person to use the kitchen with ease." },
      { heading: "Design storage around routines", body: "Drawers, tall units and internal accessories should reflect real household habits. Frequently used tools belong within easy reach, while bulk storage and occasional appliances can be consolidated into full-height cabinetry." },
      { heading: "Resolve finishes and services together", body: "Worktops, shutters, lighting and appliances must be coordinated before manufacturing begins. Precise service points and workshop drawings prevent compromises during installation and preserve the intended finish." },
    ],
  },
  {
    slug: "smart-home-integration-luxury-homes",
    title: "Smart Home Integration for Luxury Homes",
    category: "Smart Homes",
    excerpt: "A discreet approach to lighting, climate, security and entertainment that supports daily life.",
    metaDescription: "Understand how to integrate smart lighting, climate, security, audio and shading into a luxury home without visual clutter.",
    image: exterior,
    readTime: "6 min read",
    sections: [
      { heading: "Plan technology with architecture", body: "Smart systems perform best when planned before ceilings, wall finishes and joinery are finalized. Early coordination creates clean control locations and allows sensors, speakers and access points to remain visually quiet." },
      { heading: "Build meaningful scenes", body: "A good smart home simplifies routines rather than adding complexity. Arrival, evening, entertaining and away scenes can coordinate lighting, climate, blinds and security through one intuitive action." },
      { heading: "Keep the system adaptable", body: "Reliable infrastructure and open integration standards make future upgrades easier. The goal is a system that remains serviceable and useful as devices and household needs evolve." },
    ],
  },
  {
    slug: "interior-design-cost-guide",
    title: "Interior Design Cost Guide",
    category: "Interior Materials",
    excerpt: "What shapes the investment in a premium interior—and where quality creates lasting value.",
    metaDescription: "Understand luxury interior design costs, including scope, materials, custom furniture, services, site conditions and turnkey execution.",
    image: materials,
    readTime: "7 min read",
    sections: [
      { heading: "Scope defines the starting point", body: "The investment depends first on whether the project includes design consultancy, modular furniture, civil work, lighting, automation, loose furniture or complete turnkey delivery. A clear scope makes quotations comparable and transparent." },
      { heading: "Material and detail drive variation", body: "Natural stone, premium veneers, specialized finishes and imported hardware vary significantly in cost. Custom curves, large-format panels and intricate junctions also require more engineering and skilled execution." },
      { heading: "Evaluate total value", body: "A lower initial price can hide compromises in substrates, hardware or installation. Evaluate design quality, manufacturing capability, project management and post-handover support alongside the quoted amount." },
    ],
  },
  {
    slug: "choosing-right-interior-company",
    title: "Choosing the Right Interior Company",
    category: "Design Inspiration",
    excerpt: "The essential questions to ask before entrusting a studio with your home or commercial space.",
    metaDescription: "Learn how to choose the right interior design company by evaluating portfolio, process, manufacturing, transparency and project support.",
    image: hotel,
    readTime: "6 min read",
    sections: [
      { heading: "Look beyond the portfolio", body: "Beautiful images demonstrate taste, but a successful project also requires documentation, procurement and site coordination. Ask how the team converts concepts into drawings, approvals and accountable milestones." },
      { heading: "Understand who makes what", body: "In-house manufacturing gives a studio greater control over quality, customization and timelines. Visit the factory where possible and review the machinery, materials and quality checks behind the finished work." },
      { heading: "Choose clarity and accountability", body: "The right partner communicates scope, exclusions, payment stages and responsibilities clearly. A single accountable team can reduce coordination gaps and protect the design intent through handover." },
    ],
  },
  {
    slug: "luxury-wardrobe-design-ideas",
    title: "Luxury Wardrobe Design Ideas",
    category: "Luxury Interiors",
    excerpt: "Refined wardrobe concepts that combine tailored storage, lighting and material sophistication.",
    metaDescription: "Explore luxury wardrobe design ideas including walk-in layouts, glass shutters, integrated lighting, accessories and premium finishes.",
    image: villa,
    readTime: "5 min read",
    sections: [
      { heading: "Design from the inside out", body: "A luxury wardrobe begins with an inventory of clothing, accessories and daily routines. Internal widths, hanging heights, drawers and pull-outs should be tailored before the external composition is finalized." },
      { heading: "Use light as a material", body: "Integrated linear lighting improves visibility and creates a gallery-like experience. Sensors and concealed profiles keep the effect seamless while preserving the calm exterior of the cabinetry." },
      { heading: "Balance display and privacy", body: "Tinted glass, open niches and solid shutters can be combined to display selected pieces while concealing everyday storage. Repeated proportions and restrained finishes keep the room visually composed." },
    ],
  },
  {
    slug: "turnkey-interiors-explained",
    title: "Turnkey Interiors Explained",
    category: "Turnkey Projects",
    excerpt: "How one coordinated team can take a project from initial concept to a styled, ready-to-use handover.",
    metaDescription: "Discover how turnkey interior projects work, from design and approvals to manufacturing, site execution, styling and handover.",
    image: factory,
    readTime: "7 min read",
    sections: [
      { heading: "One complete scope", body: "Turnkey delivery combines design, documentation, procurement, manufacturing, civil work, services, installation and styling within one coordinated project structure. The client receives a finished space ready to use." },
      { heading: "Coordination protects quality", body: "When designers, factory teams and site managers work from the same drawings, fewer details are lost between vendors. Decisions can be tracked against a single program and resolved before they affect the finish." },
      { heading: "A more accountable handover", body: "One team remains responsible for the complete outcome, including testing, snag resolution and final styling. This simplifies communication and creates a clearer path for post-project support." },
    ],
  },
  {
    slug: "interior-design-mistakes-to-avoid",
    title: "Interior Design Mistakes to Avoid",
    category: "Design Inspiration",
    excerpt: "Common planning and execution decisions that can compromise comfort, quality and long-term value.",
    metaDescription: "Avoid common interior design mistakes involving planning, lighting, scale, storage, materials, budgets and execution coordination.",
    image: materials,
    readTime: "6 min read",
    sections: [
      { heading: "Designing rooms in isolation", body: "A home feels fragmented when each room follows a separate visual idea. Establishing an overall material, lighting and proportion strategy creates continuity while still allowing individual spaces to have character." },
      { heading: "Leaving services too late", body: "Electrical, plumbing, air-conditioning and automation decisions affect every finish. Coordinating them after furniture or ceilings are designed often leads to visible compromises and costly changes." },
      { heading: "Prioritizing appearance over use", body: "Scale, storage and maintenance must support the people using the space. Mock-ups, samples and detailed drawings help ensure that a refined visual concept also works comfortably in daily life." },
    ],
  },
];

export const getBlogPost = (slug: string) => blogPosts.find((post) => post.slug === slug);