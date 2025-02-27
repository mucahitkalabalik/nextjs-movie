"use client";
import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { CiDark, CiLight } from "react-icons/ci";

const Theme = () => {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // İlk render'dan sonra sadece bir kez çalışacak
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // SSR sırasında hatayı önler

  // Eğer tema "system" ise, işletim sistemine göre belirle
  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <div className="mx-4">
      {currentTheme === "light" ? (
        <CiDark
          className="cursor-pointer text-black"
          size={25}
          onClick={() => setTheme("dark")}
        />
      ) : (
        <CiLight
          className="cursor-pointer text-white"
          size={25}
          onClick={() => setTheme("light")}
        />
      )}
    </div>
  );
};

export default Theme;
