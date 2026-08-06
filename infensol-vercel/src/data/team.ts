export type Employee = {
  name: string;
  designation: string;
  intro: string;
  linkedin?: string;
};

export function normalizeName(name: string): string {
  return name.toLowerCase().replace(/\./g, "").replace(/\s+/g, " ").trim();
}

const linkedinProfiles: Record<string, string> = {
  "mohammed saif": "https://www.linkedin.com/in/mohammed-saif-b7bb80209",
  "mamata rathod": "https://www.linkedin.com/in/mamatarathod",
  "vidya r": "https://www.linkedin.com/in/vid-44-vid",
  "pallavi kumar sadalagi": "https://www.linkedin.com/in/pallavi-sadalage-219187382",
  "mahmed jakeer": "https://www.linkedin.com/in/mahmedjakeer",
  "karthik s": "https://www.linkedin.com/in/karthik-jerry-61293a36",
  "manoj s jogi": "https://www.linkedin.com/in/manoj-jogi-2676a91b7",
  "shilpa patil": "https://www.linkedin.com/in/shilpa0628",
  "varun sai m": "https://www.linkedin.com/in/varun-sai-m-71986b370",
};

const employees: Omit<Employee, "linkedin">[] = [
  {
    name: "Mohammed Saif",
    designation: "Sales Manager",
    intro:
      "Leads the sales team with a customer-first approach, building lasting client relationships and delivering exceptional luxury interior experiences from consultation to project completion.",
  },
  {
    name: "Mamata Rathod",
    designation: "Design Manager",
    intro:
      "Leads creative design with a focus on elegant, functional, and luxury living spaces, guiding every project from concept to a refined, client-tailored finish.",
  },
  {
    name: "Vidya R",
    designation: "Assistant Sales Manager",
    intro:
      "Supports the sales process by assisting clients, coordinating with internal teams, and ensuring a seamless customer experience throughout every stage of the project.",
  },
  {
    name: "Pallavi Kumar Sadalagi",
    designation: "Associate Designer",
    intro:
      "Assists in transforming creative concepts into functional and visually refined interior spaces while maintaining attention to detail and design excellence.",
  },
  {
    name: "Chethana R",
    designation: "Associate Interior Designer",
    intro:
      "Creates elegant and functional interior concepts that balance aesthetics, innovation, and practical living solutions tailored to each client's vision.",
  },
  {
    name: "Oswald Jonathan For",
    designation: "Business Development Executive",
    intro:
      "Identifies new business opportunities, develops strategic partnerships, and builds lasting client relationships that contribute to the company's continued growth.",
  },
  {
    name: "Mahmed Jakeer",
    designation: "Design Engineer",
    intro:
      "Bridges creativity with technical precision by developing innovative, execution-ready design solutions that ensure quality and efficiency throughout every project.",
  },
  {
    name: "Karthik S",
    designation: "Admin & Accounts Manager",
    intro:
      "Oversees administrative operations and financial management, ensuring accuracy, efficiency, and smooth day-to-day business operations.",
  },
  {
    name: "Mahanthesh Naik H",
    designation: "Operations Executive",
    intro:
      "Coordinates day-to-day project operations, ensuring timely execution, operational efficiency, and adherence to Casamelia's quality standards.",
  },
  {
    name: "Manoj S. Jogi",
    designation: "Presales & Business Development Associate",
    intro:
      "Works closely with prospective clients to understand project requirements, provide tailored solutions, and build strong long-term business relationships.",
  },
  {
    name: "Shuyalb Ahmed",
    designation: "Assistant Sales Manager",
    intro:
      "Supports the sales team by assisting clients, coordinating project requirements, and delivering a smooth and professional customer journey.",
  },
  {
    name: "Mahendra B G",
    designation: "Interior Designer",
    intro:
      "Designs elegant and functional interior environments by combining aesthetic excellence with practical living solutions. He oversees the creative process from concept development to material selection, space planning, and final design execution.",
  },
  {
    name: "Shilpa Patil",
    designation: "Manager – Operations",
    intro:
      "Oversees pre-production, procurement, project execution, and cross-functional team coordination to ensure every project is delivered efficiently, on time, and to the highest quality standards.",
  },
  {
    name: "Varun Sai M",
    designation: "Data Analytics & Digital Marketing",
    intro:
      "Supports business growth through data analytics, digital marketing strategies, performance tracking, and brand positioning to strengthen Casamelia's online presence.",
  },
];

const employeeByName = new Map(
  employees.map((employee) => [normalizeName(employee.name), employee]),
);

export const featuredTeam = ["Mohammed Saif", "Mamata Rathod", "Karthik S"];

export const remainingTeam = [
  "Vidya R",
  "Pallavi Kumar Sadalagi",
  "Chethana R",
  "Oswald Jonathan For",
  "Mahmed Jakeer",
  "Mahanthesh Naik H",
  "Manoj S. Jogi",
  "Shuyalb Ahmed",
  "Mahendra B G",
  "Shilpa Patil",
  "Varun Sai M",
];

const resolveEmployee = (name: string): Employee => {
  const employee = employeeByName.get(normalizeName(name));
  if (!employee) throw new Error(`Team member not found: ${name}`);
  return { ...employee, linkedin: linkedinProfiles[normalizeName(name)] };
};

export const teamMembers: Employee[] = [...featuredTeam, ...remainingTeam].map(
  resolveEmployee,
);
