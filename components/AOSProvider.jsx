"use client";

import { useEffect } from "react";
import "aos/dist/aos.css";
import Aos from "aos";

export default function AOSProvider({ children }) {
    useEffect(() => {
        Aos.init({
            duration: 1500,
            easing: 'ease-in-out',
            once: true, mirror: false
        });

        window.scrollTo(0, 0);
    }, []);

    return <>{children}</>
}
