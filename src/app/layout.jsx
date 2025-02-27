import React from "react";
import Header from "@/components/Header";
import Providers from "./Providers";
import SafeComponent from "@/components/SafeComponent";
import "./globals.css";
import Tabs from "@/components/Tabs";

const Layout = ({ children }) => {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body>
        <Providers>
          <SafeComponent>
            <Header />
            <Tabs />
          </SafeComponent>
          {children}
        </Providers>
      </body>
    </html>
  );
};

export default Layout;
