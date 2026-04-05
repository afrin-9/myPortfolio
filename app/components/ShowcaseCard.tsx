// components/ShowcaseCard.tsx
import Image from "next/image";
import Link from "next/link";

interface Props {
  title: string;
  tags: string[];
  image: string;
github: string;
}

export default function ShowcaseCard({ title, tags, image, github }: Props) {
  return (
    <div className="group relative rounded-3xl overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 p-[1px] hover:scale-[1.02] transition">
      <div className="bg-gradient-to-r from-[#0a110e] to-[#162c23] rounded-3xl p-4 h-full  shadow-lg hover:shadow-green-500/20 hover:border-2 hover:border-green-500/20 hover:scale-105 transition rounded-3xl p-6">
        <div className="rounded-2xl overflow-hidden mb-5">
          <Image
            src={image}
            alt={title}
            width={700}
            height={400}
            className="object-cover w-full h-100 group-hover:scale-105 transition duration-500"
          />
        </div>

        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold max-w-[80%]">
            {title}
          </h2>
          <Link href={github} target="_blank">
          <button className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center hover:bg-green-600/20 hover:border-2 hover:border-green-500/20  transition">
            ↗
          </button>
          </Link>
        </div>

        <div className="flex gap-3 mt-4 flex-wrap">
          {tags.map((tag, i) => (
            <span
              key={i}
              className="text-sm px-4 py-1 rounded-full border border-gray-700"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
