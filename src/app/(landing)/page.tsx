"use client";

import { useAppSelector } from "@/store/hook";
import Image from "next/image";
import { useEffect } from "react";
import HeroSection from "./components/HeroSection";
import IntegrationsSection from "./components/IntegrationsSection";

export default function Home() {

  const state = useAppSelector((state) => state)
  useEffect(() => {
    console.log(state)
  }, [state])
  

  return (
    <div>
      <HeroSection/>
      <IntegrationsSection/>
    </div>
  );
}
