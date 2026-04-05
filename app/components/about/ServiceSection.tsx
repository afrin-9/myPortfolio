// components/ServicesSection.tsx

import ServiceCard from "./ServiceCard";



const services = [
  {
    title: "Complete website",
    description:
      "Scalable custom website design in Figma and development in Next.js",
    tools: ["Figma"],
    features: [
      "Figma ",
      "Multi-page",
      "SEO Optimization",
      "CMS setup",
      "Responsive",
      "Design + Development",
    ],
  },
  {
    title: "UI UX Design",
    description: "Looking to design a web or app product?",
    tools: ["Figma"],
    features: [
      "User research",
      "Wireframing & Prototyping",
      "Design system",
      "Visual UI design",
      "Design only",
    ],
  },
  {
    title: "Mobile App Design",
    description: "Clean mobile UI that delivers value on every device",
    tools: ["Figma"],
    features: ["Multi-page", "Design system", "App prototype"],
  },
  {
    title: "Web Development",
    description: "Custom web applications built with the MERN stack",
    tools: ["MongoDB", "Express", "React", "Node.js"],
    features: ["API integration", "Database architecture", "Authentication", "Deployment-ready"],
  },
  {
    title: "Mobile App Development",
    description: "Native and cross-platform mobile apps built with React Native and Flutter",
    tools: ["React Native", "Flutter"],
    features: ["Cross-platform UI", "Performance optimization", "App store readiness"],
  },
  
];

export default function ServicesSection() {
  return (
    <section className="mt-20">
      <h2 className="text-3xl font-bold mb-10 ml-20 text-green-700">How can I help</h2>
      <div className="w-full flex flex-col mx-30 mr-20 items-center gap-8">
        {services.map((service, i) => (
          <ServiceCard key={i} {...service} />
        ))}
      </div>
    </section>
  );
}


