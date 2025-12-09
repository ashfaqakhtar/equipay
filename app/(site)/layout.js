"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AOSProvider from "@/components/AOSProvider";
import { Toaster } from "react-hot-toast";

export default function SiteLayout({ children }) {
    return (
        <AOSProvider>
            <Navbar />
            <main className="overflow-x-hidden">{children}</main>
            <Footer />

            <Toaster position="top-right" toastOptions={{
                success: { style: { background: "green", color: "white" } },
                error: { style: { background: "red", color: "white" } },
            }} />
        </AOSProvider>
    );
}
