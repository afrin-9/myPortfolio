"use client";

const items = [
  "Website Design",
  "App Design",
  "Product Design",
  "Research",
  "UI Design",
  "UX Design",
  "Mobile Application Development",
  "Web Development",
];

export default function Marquee() {
  return (
    <div className="mt-10 w-full overflow-hidden  py-3 z-10">
      <div className="flex gap-10 animate-[marquee_20s_linear_infinite] whitespace-nowrap ">
        {[...items, ...items].map((item, i) => (
          <span key={i} className="text-gray-400 text-sm">
           <div
            className="px-4 py-2 rounded-full border border-green-500/20  hover:bg-green-400/20 transition">
             {item}
            </div> 
          </span>
        ))}
      </div>
    </div>
  );
}