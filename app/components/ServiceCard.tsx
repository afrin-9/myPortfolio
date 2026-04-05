// components/ServiceCard.tsx
interface ServiceProps {
  title: string;
  description: string;
  tools: string[];
  features: string[];
}

export default function ServiceCard({
  title,
  description,
  tools,
  features,
}: ServiceProps) {
  return (
    <div className="w-full mr-15 rounded-3xl p-px bg-linear-to-br from-green-500/40 via-transparent to-transparent hover:scale-[1.02] transition duration-300 border-t border-green-500/40">
      <div className="bg-linear-to-r from-black to-[#162c23] rounded-3xl p-4 md:p-8 h-full">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-400 mb-6">{description}</p>

        {/* tools */}
        <div className="flex gap-3 mb-6">
          {tools.map((tool, i) => (
            <span
              key={i}
              className="px-3 py-1 text-sm border border-gray-700 rounded-full"
            >
              {tool}
            </span>
          ))}
        </div>

        <div className="border-t border-gray-800 my-6" />

        {/* features */}
        <div className="flex flex-wrap gap-3">
          {features.map((feature, i) => (
            <span
              key={i}
              className="px-4 py-2 text-sm bg-green-600/20 rounded-full"
            >
              {feature}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
