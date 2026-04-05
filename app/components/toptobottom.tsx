"use client"; // <-- Add this at the very top

import { useState, useEffect } from "react";
import { COLORS } from "../lib/colors";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  // Show button after scrolling down 300px
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) setVisible(true);
      else setVisible(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {visible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-3 px-5 rounded-full shadow-lg text-white hover:scale-110 transition-transform z-50"
          style={{
            background: `linear-gradient(135deg, ${COLORS.greenMid}, ${COLORS.greenDark})`,
          }}
        >
          ↑
        </button>
      )}
    </>
  );
}