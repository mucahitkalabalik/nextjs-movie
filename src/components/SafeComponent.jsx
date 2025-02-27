"use client"; // Bileşeni yalnızca client tarafında render et
import React, { useState, useEffect } from "react";

const SafeComponent = ({ children }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // SSR sırasında HTML üretme

  return <>{children}</>;
};

export default SafeComponent;
