"use client";

import {useAppSelector} from "@/store/hook";
import {useEffect} from "react";
import HeroSection from "./components/HeroSection";
import IntegrationsSection from "./components/IntegrationsSection";
import Platform from "./components/Platform";

export default function Home() {

    const state = useAppSelector((state) => state)
    useEffect(() => {
        console.log(state)
    }, [state])


    return (
        <div>
            <HeroSection/>
            <IntegrationsSection/>
            <Platform/>
        </div>
    );
}
