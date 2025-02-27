"use client"; // Next.js 13+ için gerekli
import { ThemeProvider } from "next-themes";

export default function Providers({ children }) {
  return <ThemeProvider attribute="class"  enableSystem={true}>{children}</ThemeProvider>;
}
