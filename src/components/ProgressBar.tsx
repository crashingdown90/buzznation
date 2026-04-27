"use client";
import { useEffect, useState } from "react";

export default function ProgressBar() {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const currentPercentage = (scrollPosition / windowHeight) * 100;
      setScrollPercentage(currentPercentage);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        height: "4px",
        width: `${scrollPercentage}%`,
        background: "linear-gradient(90deg, #2563eb, #3b82f6, #60a5fa)",
        zIndex: 9999,
        transition: "width 0.1s ease-out",
        borderTopRightRadius: "4px",
        borderBottomRightRadius: "4px",
      }}
    />
  );
}
