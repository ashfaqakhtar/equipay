"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AOSProvider from "@/components/AOSProvider";

export default function SiteLayout({ children }) {
    return (
        <AOSProvider>
            <Navbar />
            <main className="overflow-x-hidden">{children}</main>
            <Footer />
        </AOSProvider>
    );
}
