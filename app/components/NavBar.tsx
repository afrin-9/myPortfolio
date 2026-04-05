import Link from "next/link";
import { COLORS } from "../lib/colors";
import { personalInfo } from "../data/portfolioData";


export default function Navbar() {
  return (
    <nav className="relative z-10 flex justify-end items-center px-12 py-6">
      
      {/* <div className="flex items-center gap-3 font-bold text-white">
        <div
          className="w-9 h-9 rounded-lg flex items-center justify-center text-white font-extrabold shadow-lg"
          style={{
            background: `linear-gradient(135deg, ${COLORS.greenMid}, ${COLORS.greenDark})`,
            boxShadow: `0 0 18px ${COLORS.greenGlow}`,
          }}
        >
          D
        </div>
        Design Dot
      </div> */}

      <div 
      className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2"
      style={{
        boxShadow:`0 0 18px ${COLORS.greenGlow}`,
      }}
      >
       {[
  { label: "Profile", href: "/" },
  { label: "About", href: "/about" },
  { label: "Project", href: "/project" },
  { label: "Resume", href: "/resume" },
].map((item, i) => (
  <Link
    key={i}
    href={item.href}
    className="text-sm px-4 py-1 text-gray-400 hover:text-green-500 transition"
  >
    {item.label}
  </Link>
))}

        <div
          className="rounded-full flex items-center justify-center text-white font-extrabold shadow-lg hover:scale-105 transition"
          style={{
            background: `linear-gradient(135deg, ${COLORS.greenMid}, ${COLORS.greenDark})`,
            boxShadow: `0 0 18px ${COLORS.greenGlow}`,
          }}
        >
         <Link
          href={`mailto:${personalInfo.email}`}
          className="px-10 py-3 rounded-full shadow-lg hover:scale-105 transition"
        >
          Get in touch
        </Link>
        </div>
      </div>
    </nav>
  );
}

// export default function Navbar() {
//   return (
//     <nav className="flex justify-between items-center px-10 py-6 relative z-10">

//       {/* Logo */}
//       <div className="flex items-center gap-3 text-white font-semibold">
//         <div className="w-9 h-9 rounded-xl bg-green-500 flex items-center justify-center shadow-lg">
//           D
//         </div>
//         Design Dot
//       </div>

//       {/* Menu */}
//       <div className="flex items-center gap-6 bg-white/5 border border-white/10 px-6 py-2 rounded-full backdrop-blur-md">

//         <span className="text-white text-sm">Profile •</span>
//         <span className="text-gray-400 text-sm">Project</span>
//         <span className="text-gray-400 text-sm">Service</span>

//         <button className="ml-4 px-5 py-2 bg-green-600 rounded-full text-sm hover:scale-105 transition">
//           Get in touch
//         </button>
//       </div>
//     </nav>
//   );
// }


// import Link from "next/link";
// const navLinks = [
//   { label: "Profile", href: "/" },
//   { label: "About", href: "/about" },
//   { label: "Project", href: "/project" },
//   { label: "Resume", href: "/resume" },
// ];

// export default function Navbar() {
//   return (
//     <nav className="flex gap-4">
//       {navLinks.map((item, i) => (
//         <Link
//           key={i}
//           href={item.href}
//           className="text-sm px-4 py-1 text-gray-400 hover:text-green-500 transition"
//         >
//           {item.label}
//         </Link>
//       ))}
//     </nav>
//   );
// }
        