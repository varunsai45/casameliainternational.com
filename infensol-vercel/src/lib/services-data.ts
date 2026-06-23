import villa from "@/assets/project-villa.jpg";
import kitchen from "@/assets/project-kitchen.jpg";
import hotel from "@/assets/project-hotel.jpg";
import exterior from "@/assets/project-exterior.jpg";
import materials from "@/assets/materials.jpg";
import factory from "@/assets/german-factory.jpg";
import hardware from "@/assets/german-hardware.jpg";
import veneer from "@/assets/german-materials.jpg";
import hero from "@/assets/hero-villa.jpg";

export type Service = {
  slug: string;
  n: string;
  title: string;
  tagline: string;
  description: string;
  hero: string;
  gallery: { src: string; caption: string }[];
  features: string[];
};

export const services: Service[] = [
  {
    slug: "luxury-home-interiors",
    n: "01",
    title: "Luxury Home Interiors",
    tagline: "Crafted residences. European soul.",
    description:
      "Bespoke residential interiors composed in stone, veneer, brass and light — every surface considered, every joinery imported from Germany.",
    hero: hero,
    gallery: [
      { src: villa, caption: "Living Pavilion · Whitefield" },
      { src: materials, caption: "Material Palette · Travertine + Walnut" },
      { src: exterior, caption: "Evening Light · Lakeside" },
      { src: kitchen, caption: "Open Kitchen Continuum" },
    ],
    features: ["Hand-selected materials", "Imported German hardware", "Smart lighting integration", "Bespoke joinery"],
  },
  {
    slug: "villa-interiors",
    n: "02",
    title: "Villa Interiors",
    tagline: "Cinematic spaces for private living.",
    description:
      "End-to-end villa design with spatial choreography — entrance dramas, double-height voids, private wellness suites and curated outdoor flow.",
    hero: villa,
    gallery: [
      { src: villa, caption: "Sky Villa · Whitefield" },
      { src: exterior, caption: "Lakeside Estate" },
      { src: materials, caption: "Onyx & Bronze Detail" },
      { src: hero, caption: "Master Suite" },
    ],
    features: ["12,000+ sqft villas", "Architectural lighting", "Private wellness suites", "Indoor-outdoor flow"],
  },
  {
    slug: "modular-kitchens",
    n: "03",
    title: "Modular Kitchens",
    tagline: "German engineering. Indian craft.",
    description:
      "Modular kitchens engineered to 0.1mm tolerance with imported German hinges, drawers and hardware — built in our 30,000 sq ft Bidadi atelier.",
    hero: kitchen,
    gallery: [
      { src: kitchen, caption: "Obsidian Culinary Suite" },
      { src: hardware, caption: "German Hardware · Brass + Steel" },
      { src: factory, caption: "In-house Manufacturing" },
      { src: veneer, caption: "Veneer Library" },
    ],
    features: ["100% in-house build", "German hinges & runners", "Lifetime hardware warranty", "0.1mm tolerance"],
  },
  {
    slug: "architecture",
    n: "04",
    title: "Architecture",
    tagline: "Structural elegance from concept to key.",
    description:
      "Concept to completion architecture — site studies, massing, facade design and structural detailing for villas, estates and boutique hospitality.",
    hero: exterior,
    gallery: [
      { src: exterior, caption: "Lakeside Estate · Devanahalli" },
      { src: hero, caption: "Hillside Villa Concept" },
      { src: hotel, caption: "Boutique Hospitality" },
      { src: villa, caption: "Sky Villa Massing" },
    ],
    features: ["Site & climate studies", "Facade engineering", "Structural detailing", "Landscape integration"],
  },
  {
    slug: "commercial-interiors",
    n: "05",
    title: "Commercial Interiors",
    tagline: "Brand-led environments with presence.",
    description:
      "Premium offices, showrooms and flagship environments — designed to communicate brand authority through restraint, material and light.",
    hero: hotel,
    gallery: [
      { src: hotel, caption: "Flagship Lobby" },
      { src: materials, caption: "Stone & Metal Detail" },
      { src: exterior, caption: "Facade Treatment" },
      { src: hardware, caption: "Custom Hardware" },
    ],
    features: ["Brand environment design", "Premium material palettes", "Acoustic engineering", "Lighting design"],
  },
  {
    slug: "hotels-restaurants",
    n: "06",
    title: "Hotels & Restaurants",
    tagline: "Hospitality with a signature material narrative.",
    description:
      "Hotel lobbies, suites, fine-dining restaurants and lounges — choreographed material journeys that guests remember.",
    hero: hotel,
    gallery: [
      { src: hotel, caption: "Aurum Hospitality Lobby · Dubai Marina" },
      { src: materials, caption: "Onyx Reception Wall" },
      { src: kitchen, caption: "Chef's Suite" },
      { src: hero, caption: "Presidential Suite" },
    ],
    features: ["Lobby & suite design", "Restaurant + bar interiors", "Spa & wellness", "Hospitality lighting"],
  },
  {
    slug: "smart-home-interiors",
    n: "07",
    title: "Smart Home Interiors",
    tagline: "Intelligent living, invisibly integrated.",
    description:
      "Integrated lighting, climate, audio, blinds and security — controlled with a single panel and engineered into the architecture from day one.",
    hero: hero,
    gallery: [
      { src: hero, caption: "Smart Living Wall" },
      { src: villa, caption: "Mood-scene Lighting" },
      { src: hardware, caption: "Concealed Controls" },
      { src: materials, caption: "Hidden Acoustics" },
    ],
    features: ["Lighting scenes", "Climate zoning", "Multi-room audio", "Security & access"],
  },
  {
    slug: "office-interiors",
    n: "08",
    title: "Office Interiors",
    tagline: "Workplaces tuned for executive presence.",
    description:
      "Boardrooms, founder offices and executive floors designed with the same material discipline as our private residences.",
    hero: hotel,
    gallery: [
      { src: hotel, caption: "Founder's Office" },
      { src: materials, caption: "Walnut Boardroom" },
      { src: kitchen, caption: "Executive Pantry" },
      { src: exterior, caption: "Lounge & Breakout" },
    ],
    features: ["Founder & C-suite offices", "Boardroom design", "Acoustic privacy", "Brand integration"],
  },
  {
    slug: "exterior-elevations",
    n: "09",
    title: "Exterior Elevations",
    tagline: "Architectural facades with a signature.",
    description:
      "Facade studies, material composition and elevation design for villas and bungalows — engineered for shadow, depth and weathering.",
    hero: exterior,
    gallery: [
      { src: exterior, caption: "Lakeside Facade" },
      { src: hero, caption: "Stone + Bronze Massing" },
      { src: villa, caption: "Cantilever Detail" },
      { src: materials, caption: "Material Composition" },
    ],
    features: ["Facade design", "Material composition", "Lighting on architecture", "Landscape interface"],
  },
  {
    slug: "furniture",
    n: "10",
    title: "Furniture",
    tagline: "Custom pieces. Premium materials.",
    description:
      "Custom furniture built in our atelier — solid wood, premium veneers, hand-stitched leathers and German hardware.",
    hero: materials,
    gallery: [
      { src: materials, caption: "Veneer & Leather Library" },
      { src: factory, caption: "Atelier Build" },
      { src: hardware, caption: "Brass Hardware" },
      { src: kitchen, caption: "Bespoke Joinery" },
    ],
    features: ["Custom sofas & beds", "Solid wood dining", "Leather upholstery", "Built-in shelving"],
  },
  {
    slug: "wardrobes",
    n: "11",
    title: "Wardrobes",
    tagline: "Walk-in dressing rooms, engineered.",
    description:
      "Walk-in dressing rooms and bespoke wardrobe systems — backlit glass, soft-close drawers and integrated lighting.",
    hero: villa,
    gallery: [
      { src: villa, caption: "Walk-in Dressing Suite" },
      { src: hardware, caption: "Soft-close German Runners" },
      { src: materials, caption: "Veneer Selection" },
      { src: factory, caption: "Manufacturing" },
    ],
    features: ["Walk-in dressing rooms", "Backlit glass shutters", "Integrated lighting", "German runners & hinges"],
  },
  {
    slug: "turnkey-projects",
    n: "12",
    title: "Turnkey Projects",
    tagline: "Design. Build. Install. Style. Handover.",
    description:
      "Complete turnkey delivery — one team, one timeline, one accountable handover. Keys delivered, styled and ready to live in.",
    hero: hero,
    gallery: [
      { src: hero, caption: "Styled Handover" },
      { src: villa, caption: "Sky Villa Delivery" },
      { src: hotel, caption: "Hospitality Handover" },
      { src: factory, caption: "Atelier Coordination" },
    ],
    features: ["Single accountable team", "Fixed timelines", "Styled handover", "Post-handover care"],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
