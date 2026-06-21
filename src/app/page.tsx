"use client";

import React, { useState, useEffect } from "react";
import SplineBackground from "@/components/SplineBackground";
import {
  HomeSection,
  ProductsSection,
  AIAgentsSection,
  VideoAnalyticsSection,
  CyberSecuritySection,
  ActivitiesSection,
  ContactSection,
} from "@/components/Sections";

const sections = [
  { id: "home", label: "Home" },
  { id: "products", label: "Products" },
  { id: "agents", label: "AI Agents" },
  { id: "analytics", label: "Video Analytics" },
  { id: "cyber", label: "Cyber Security" },
  { id: "work", label: "Latest Work" },
  { id: "contacts", label: "Contacts" },
];

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  // 1. Detect scroll position to add header background
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 2. Intersection Observer to highlight active section in sidebar and navigation
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-40% 0px -40% 0px", // Detect active when section occupies center of screen
      threshold: 0.1,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((sec) => {
      const el = document.getElementById(sec.id);
      if (el) observer.observe(el);
    });

    return () => {
      sections.forEach((sec) => {
        const el = document.getElementById(sec.id);
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative min-h-screen text-white font-sans selection:bg-white/10 selection:text-white">
      {/* 1. Spline 3D Scene fixed in the background */}
      <SplineBackground />

      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 pointer-events-none ${scrolled
            ? "py-3 bg-black/60 backdrop-blur-xl border-b border-white/[0.06] shadow-sm"
            : "py-5 bg-transparent"
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between pointer-events-auto">
          <div
            onClick={() => scrollToSection("home")}
            className="flex items-center gap-3 cursor-pointer group"
            id="nav-logo"
          >
            <img
              src="/Logo.png"
              alt="ApplauseSIM Logo"
              className="h-8 md:h-10 w-auto object-contain transition-opacity duration-300 group-hover:opacity-80"
            />
            <span className="text-base md:text-lg font-bold tracking-widest uppercase select-none transition-opacity duration-300 group-hover:opacity-80">
              <span className="text-zinc-400">APPLAUSE</span>
              <span className="text-white">SIM</span>
            </span>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 p-0.5 rounded-full border border-white/[0.06] bg-black/30 backdrop-blur-md">
            {sections.map((sec) => (
              <button
                key={sec.id}
                id={`nav-link-${sec.id}`}
                onClick={() => scrollToSection(sec.id)}
                className={`px-4 py-2 rounded-full text-[10px] font-medium tracking-wider uppercase transition-all duration-350 cursor-pointer ${activeSection === sec.id
                    ? "bg-white text-zinc-950 font-bold"
                    : "text-zinc-400 hover:text-white"
                  }`}
              >
                {sec.label}
              </button>
            ))}
          </nav>

          <a
            href="#contacts"
            className="px-5 py-2 rounded-full bg-white/5 border border-white/10 hover:border-white/20 text-[10px] font-semibold uppercase tracking-widest text-zinc-350 hover:text-white transition-all backdrop-blur-sm cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("contacts");
            }}
            id="nav-cta"
          >
            Get Support
          </a>
        </div>
      </header>

      {/* 3. Floating Sidebar Navigation Indicator */}
      <div className="fixed right-6 md:right-8 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col gap-5 p-3 rounded-2xl border border-white/[0.06] bg-black/20 backdrop-blur-md">
        {sections.map((sec) => (
          <button
            key={sec.id}
            onClick={() => scrollToSection(sec.id)}
            className="group relative flex items-center justify-end cursor-pointer"
            aria-label={`Scroll to ${sec.label}`}
            id={`sidebar-dot-${sec.id}`}
          >
            {/* Tooltip Label */}
            <span className="absolute right-8 scale-0 group-hover:scale-100 px-3 py-1 rounded bg-zinc-950 border border-white/[0.08] text-[10px] uppercase font-semibold tracking-widest text-white whitespace-nowrap origin-right transition-all duration-200">
              {sec.label}
            </span>
            {/* Dot Graphic */}
            <span
              className={`w-2 h-2 rounded-full transition-all duration-350 ${activeSection === sec.id
                  ? "bg-white scale-125 shadow-[0_0_8px_rgba(255,255,255,0.6)]"
                  : "bg-zinc-650 group-hover:bg-zinc-300 group-hover:scale-110"
                }`}
            ></span>
          </button>
        ))}
      </div>

      {/* 4. Page Sections (7 scrollable regions) */}
      <main className="relative z-10 pointer-events-none">
        <HomeSection />
        <div className="h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
        <ProductsSection />
        <div className="h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
        <AIAgentsSection />
        <div className="h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
        <VideoAnalyticsSection />
        <div className="h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
        <CyberSecuritySection />
        <div className="h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
        <ActivitiesSection />
        <div className="h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
        <ContactSection />
      </main>

      {/* 5. Footer */}
      <footer className="relative z-10 border-t border-white/[0.06] bg-black py-12 px-6 pointer-events-auto">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <img
              src="/Logo.png"
              alt="ApplauseSIM Logo"
              className="h-6 w-auto object-contain opacity-70"
            />
          </div>
          <p className="text-xs text-zinc-500" suppressHydrationWarning>
            &copy; {new Date().getFullYear()} Applause Simulation. All rights reserved. High Tech Design Intelligence.
          </p>
          <div className="flex gap-4 text-xs text-zinc-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
