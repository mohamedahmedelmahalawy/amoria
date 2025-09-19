"use client";
import { HeroUIProvider } from "@heroui/react";
import { ReactNode } from "react";

function Providers({ children }: { children: ReactNode }) {
  return (
    <div>
      <HeroUIProvider>{children}</HeroUIProvider>
    </div>
  );
}

export default Providers;
