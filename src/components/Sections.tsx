"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  ChevronLeft,
  ChevronRight,
  Play,
  X,
} from "lucide-react";

// Helper component for reveal animations
interface SectionWrapperProps {
  children: React.ReactNode;
  id: string;
  className?: string;
}

const SectionWrapper = ({ children, id, className = "" }: SectionWrapperProps) => {
  return (
    <section
      id={id}
      className={`min-h-screen w-full flex items-center justify-center py-24 px-6 md:px-12 lg:px-24 relative overflow-hidden select-none pointer-events-none ${className}`}
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: "-120px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-7xl z-10 flex flex-col justify-center pointer-events-none"
      >
        {children}
      </motion.div>
    </section>
  );
};

// ==========================================
// SECTION 1: HOME
// ==========================================
export const HomeSection = () => {
  return (
    <SectionWrapper id="home" className="pt-32">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left Side */}
        <div className="flex flex-col justify-center text-left">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-md mb-6 w-fit"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
            <span className="text-[10px] font-semibold tracking-widest text-zinc-300 uppercase">
              Specialized Consulting & Technology
            </span>
          </motion.div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-white leading-tight">
            Bridging the gap between business and technology since 2013
          </h1>
        </div>

        {/* Right Side */}
        <div className="flex flex-col justify-center text-left relative">
          {/* Ambient dark glow overlay behind the text to increase contrast */}
          <div className="absolute -inset-8 bg-zinc-950/50 rounded-3xl blur-3xl pointer-events-none -z-10"></div>

          <p className="text-base md:text-lg lg:text-xl text-zinc-400 font-light leading-relaxed max-w-xl mb-10">
            We help governments and enterprises design and implement tailored systems using AI, simulation, and emerging technologies. We bring the most effective solutions to solve real problems.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pointer-events-auto">
            <a
              href="#products"
              className="flex items-center justify-center px-8 py-3.5 rounded-full bg-white text-zinc-950 hover:bg-zinc-200 text-sm font-semibold tracking-wide transition-all duration-300 shadow-sm"
            >
              Explore Products
            </a>
            <a
              href="#contacts"
              className="flex items-center justify-center px-8 py-3.5 rounded-full border border-white/10 bg-white/[0.02] hover:bg-white/[0.06] hover:border-white/20 text-white text-sm font-medium tracking-wide transition-all duration-300 backdrop-blur-sm"
            >
              Contact Advisory
            </a>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

// ==========================================
// SECTION 2: OUR PRODUCTS AND SERVICES
// ==========================================
export const ProductsSection = () => {
  const [selectedProduct, setSelectedProduct] = useState<{
    img: string;
    title: string;
    desc: string;
  } | null>(null);

  const products = [
    {
      img: "/vr_simulation_minimal.png",
      title: "Virtual Reality Curriculum + Simulation",
      desc: "Immersive virtual environments designed to bridge academic theory with practical application, allowing trainees to test tactical maneuvers, handle critical incidents, and build muscle memory in a secure, repeatable digital space."
    },
    {
      img: "/digital_twins_minimal.png",
      title: "Digital Twins and 3D Maps + Realistic Environment",
      desc: "Large-scale GIS data integration and procedural environment generation to map physical infrastructure into precise, interactive simulated models."
    },
    {
      img: "/simulators_minimal.png",
      title: "Simulators",
      desc: "Hardware-in-the-loop emulation combining physical control interfaces with custom telemetry processing software."
    },
    {
      img: "/elearning_minimal.png",
      title: "e-learning and Learning Management System",
      desc: "SCORM-compliant cloud and on-premise SaaS learning portals featuring secure authentication, automated progress monitoring, and interactive knowledge checks."
    },
    {
      img: "/accreditation_minimal.png",
      title: "Accreditation (International Affiliation + KHDA)",
      desc: "Automated reporting engines and standard-compliant curriculum mapping tools built to verify institutional training alignment with external regulatory benchmarks."
    }
  ];

  const handleLearnMore = () => {
    setSelectedProduct(null);
    setTimeout(() => {
      const el = document.getElementById("contacts");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <SectionWrapper id="products">
      <div className="text-center mb-16 relative">
        {/* Ambient dark glow overlay behind header */}
        <div className="absolute inset-0 max-w-lg mx-auto bg-zinc-950/60 rounded-full blur-3xl pointer-events-none -z-10"></div>
        <h2 className="text-xs font-semibold tracking-widest text-zinc-500 uppercase mb-3">
          Our Capabilities
        </h2>
        <h3 className="text-3xl md:text-5xl font-light text-white tracking-tight">
          OUR PRODUCTS AND SERVICES
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 pointer-events-auto">
        {products.map((item, index) => (
          <div
            key={index}
            onClick={() => setSelectedProduct(item)}
            className="flex flex-col rounded-2xl bg-black/45 border border-white/[0.06] backdrop-blur-md overflow-hidden hover:bg-black/60 hover:border-white/[0.12] transition-all duration-300 group cursor-pointer"
          >
            {/* Image Wrapper */}
            <div className="aspect-[16/10] w-full relative overflow-hidden bg-zinc-900 border-b border-white/[0.06]">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
              />
            </div>
            {/* Text Area */}
            <div className="p-5 flex-1 flex flex-col justify-between">
              <div>
                <h4 className="text-sm font-semibold text-white mb-2 leading-tight group-hover:text-zinc-200 transition-colors">
                  {item.title}
                </h4>
                <p className="text-xs text-zinc-400 leading-relaxed font-light mt-1">
                  {item.desc}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProduct(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 bg-black/85 backdrop-blur-md cursor-pointer pointer-events-auto"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: "spring", duration: 0.5, bounce: 0.15 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-3xl rounded-3xl border border-white/10 bg-zinc-950/90 backdrop-blur-2xl p-6 md:p-8 cursor-default overflow-hidden flex flex-col md:flex-row gap-8 shadow-2xl"
            >
              {/* Ambient background glow inside modal */}
              <div className="absolute -inset-10 bg-gradient-to-tr from-white/[0.02] via-transparent to-white/[0.02] pointer-events-none -z-10" />

              {/* Close Button */}
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 p-2 rounded-full border border-white/10 bg-white/[0.02] hover:bg-white/[0.08] hover:border-white/20 text-zinc-400 hover:text-white transition-all cursor-pointer z-10"
                aria-label="Close details"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Left side: Large picture */}
              <div className="w-full md:w-1/2 aspect-[16/10] md:aspect-square rounded-2xl overflow-hidden bg-zinc-900 border border-white/10 relative shrink-0">
                <img
                  src={selectedProduct.img}
                  alt={selectedProduct.title}
                  className="w-full h-full object-cover opacity-90"
                />
              </div>

              {/* Right side: Title, Text, Button */}
              <div className="flex flex-col justify-between flex-1 text-left py-2">
                <div>
                  <span className="text-[10px] font-semibold tracking-widest text-zinc-500 uppercase">
                    Product Details
                  </span>
                  <h3 className="text-2xl md:text-3xl font-light text-white tracking-tight mt-2 mb-4">
                    {selectedProduct.title}
                  </h3>
                  <p className="text-sm md:text-base text-zinc-300 font-light leading-relaxed mb-6">
                    {selectedProduct.desc}
                  </p>

                  {/* Detailed specs */}
                  <div className="border-t border-white/[0.06] pt-4 mt-4 text-[11px] text-zinc-450 leading-relaxed font-light space-y-2">
                    <div className="flex justify-between">
                      <span className="text-zinc-500">Service Category:</span>
                      <span className="text-zinc-300">Enterprise Solutions</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-zinc-500">Technology Stack:</span>
                      <span className="text-zinc-300">Modern Custom Architectures</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-zinc-500">Target User Base:</span>
                      <span className="text-zinc-300">Governments & Corporates</span>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <button
                    onClick={handleLearnMore}
                    className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-white text-zinc-950 hover:bg-zinc-200 transition-all font-semibold text-sm shadow-md cursor-pointer"
                  >
                    Learn more <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </SectionWrapper>
  );
};

// ==========================================
// SECTION 3: AI AGENTS AND TOOLS
// ==========================================
export const AIAgentsSection = () => {
  const [selectedAgent, setSelectedAgent] = useState<{
    img: string;
    title: string;
    desc: string;
  } | null>(null);

  const agents = [
    {
      img: "/agent_excellence.png",
      title: "Excellence Officer",
      desc: "Deployed in operational departments to maintain institutional excellence models and ensure adherence to international best practices."
    },
    {
      img: "/agent_finance.png",
      title: "Financial Compliance Agent",
      desc: "Implemented by banking institutions and government finance offices to maintain transparent audit trails."
    },
    {
      img: "/agent_hr.png",
      title: "HR Officer",
      desc: "Integrated within high-volume human resource departments to manage shifting shift schedules and policy updates."
    },
    {
      img: "/agent_assistant.png",
      title: "Personal Assistant",
      desc: "Tailored for C-suite executives and project managers handling highly dense daily information flows."
    }
  ];

  return (
    <SectionWrapper id="agents">
      <div className="text-center mb-16 relative">
        {/* Ambient dark glow overlay behind header */}
        <div className="absolute inset-0 max-w-lg mx-auto bg-zinc-950/60 rounded-full blur-3xl pointer-events-none -z-10"></div>
        <h2 className="text-xs font-semibold tracking-widest text-zinc-500 uppercase mb-3">
          Artificial Intelligence
        </h2>
        <h3 className="text-3xl md:text-5xl font-light text-white tracking-tight">
          AI AGENTS AND TOOLS
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pointer-events-auto">
        {agents.map((agent, index) => (
          <div
            key={index}
            onClick={() => setSelectedAgent(agent)}
            className="rounded-2xl bg-black/45 border border-white/[0.06] backdrop-blur-md p-6 flex flex-col hover:bg-black/60 hover:border-white/[0.12] transition-all duration-300 group cursor-pointer"
          >
            {/* Image Container */}
            <div className="aspect-[4/3] w-full rounded-xl overflow-hidden mb-6 bg-zinc-900 border border-white/[0.06] relative">
              <img
                src={agent.img}
                alt={agent.title}
                className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <h4 className="text-lg font-medium text-white mb-2 leading-snug group-hover:text-zinc-200 transition-colors">
              {agent.title}
            </h4>
            <p className="text-sm text-zinc-400 font-light leading-relaxed">
              {agent.desc}
            </p>
          </div>
        ))}
      </div>

      <AnimatePresence>
        {selectedAgent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedAgent(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 bg-black/85 backdrop-blur-md cursor-pointer pointer-events-auto"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: "spring", duration: 0.5, bounce: 0.15 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-3xl rounded-3xl border border-white/10 bg-zinc-950/90 backdrop-blur-2xl p-6 md:p-8 cursor-default overflow-hidden flex flex-col md:flex-row gap-8 shadow-2xl"
            >
              {/* Ambient background glow inside modal */}
              <div className="absolute -inset-10 bg-gradient-to-tr from-white/[0.02] via-transparent to-white/[0.02] pointer-events-none -z-10" />

              {/* Close Button */}
              <button
                onClick={() => setSelectedAgent(null)}
                className="absolute top-4 right-4 p-2 rounded-full border border-white/10 bg-white/[0.02] hover:bg-white/[0.08] hover:border-white/20 text-zinc-400 hover:text-white transition-all cursor-pointer z-10"
                aria-label="Close details"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Left side: Large picture */}
              <div className="w-full md:w-1/2 aspect-[4/3] md:aspect-square rounded-2xl overflow-hidden bg-zinc-900 border border-white/10 relative shrink-0">
                <img
                  src={selectedAgent.img}
                  alt={selectedAgent.title}
                  className="w-full h-full object-cover opacity-90"
                />
              </div>

              {/* Right side: Title, Text, Button */}
              <div className="flex flex-col justify-between flex-1 text-left py-2">
                <div>
                  <span className="text-[10px] font-semibold tracking-widest text-zinc-500 uppercase">
                    AI Agent Profile
                  </span>
                  <h3 className="text-2xl md:text-3xl font-light text-white tracking-tight mt-2 mb-4">
                    {selectedAgent.title}
                  </h3>
                  <p className="text-sm md:text-base text-zinc-300 font-light leading-relaxed mb-6">
                    {selectedAgent.desc}
                  </p>

                  {/* Detailed specs */}
                  <div className="border-t border-white/[0.06] pt-4 mt-4 text-[11px] text-zinc-450 leading-relaxed font-light space-y-2">
                    <div className="flex justify-between">
                      <span className="text-zinc-500">Integration Method:</span>
                      <span className="text-zinc-300">API/SaaS Gateway</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-zinc-500">Deployment Architecture:</span>
                      <span className="text-zinc-300">Hybrid On-Prem / Cloud</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-zinc-500">Compliance Benchmark:</span>
                      <span className="text-zinc-300">ISO-27001 Certified</span>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <a
                    href="https://www.aasmartsystems.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-white text-zinc-950 hover:bg-zinc-200 transition-all font-semibold text-sm shadow-md cursor-pointer"
                  >
                    Run a Demo <Play className="w-4 h-4 fill-zinc-950" />
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </SectionWrapper>
  );
};

// ==========================================
// SECTION 4: VIDEO ANALYTICS & FACIAL RECOGNITION
// ==========================================
export const VideoAnalyticsSection = () => {
  const [isPlayingDemo, setIsPlayingDemo] = useState(false);

  return (
    <SectionWrapper id="analytics">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left Side: Description */}
        <div>
          <h2 className="text-xs font-semibold tracking-widest text-zinc-500 uppercase mb-3">
            Computer Vision
          </h2>
          <h3 className="text-3xl md:text-5xl font-light text-white tracking-tight mb-6">
            VIDEO ANALYTICS & FACIAL RECOGNITION
          </h3>
          <p className="text-lg text-zinc-300 font-light leading-relaxed mb-4">
            Utilized in crowded event security, public transit hubs, and access-controlled government facilities to maintain active surveillance.
          </p>
          <p className="text-sm text-zinc-450 font-light leading-relaxed mb-8">
            Deep neural networks applied to security feeds to enable real-time human behavior analysis, predictive hazard forecasting, crowd density metrics, and secure biometric access tracking.
          </p>
          <div className="pointer-events-auto">
            <button
              onClick={() => setIsPlayingDemo(!isPlayingDemo)}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white text-zinc-950 hover:bg-zinc-200 transition-all font-semibold text-sm shadow-md"
            >
              {isPlayingDemo ? (
                <>
                  Stop Simulator <X className="w-4 h-4" />
                </>
              ) : (
                <>
                  Launch Demo Simulator <Play className="w-4 h-4 fill-zinc-950" />
                </>
              )}
            </button>
          </div>
        </div>

        {/* Right Side: Visual Demo Preview */}
        <div className="rounded-2xl overflow-hidden border border-white/[0.08] bg-zinc-900/20 backdrop-blur-md p-4 relative group pointer-events-auto">
          <div className="aspect-[16/10] w-full rounded-xl overflow-hidden relative">
            <img
              src="/video_analytics.png"
              alt="Video Analytics Dashboard representation"
              className="w-full h-full object-cover opacity-90 transition-transform duration-700"
            />

            {/* Overlay scanning effect if simulator is active */}
            <AnimatePresence>
              {isPlayingDemo && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 bg-black/40 backdrop-blur-[1px] flex flex-col justify-between p-6 pointer-events-none select-none"
                >
                  {/* Moving scanner line */}
                  <motion.div
                    animate={{ y: ["0%", "450%"] }}
                    transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
                    className="absolute left-0 right-0 h-0.5 bg-white/70 shadow-[0_0_8px_#ffffff] z-20"
                  ></motion.div>

                  {/* UI Boxes overlay */}
                  <div className="flex justify-between items-start z-10">
                    <span className="px-2 py-0.5 text-[9px] font-mono uppercase tracking-widest text-white bg-black/60 rounded border border-white/20">
                      LIVE_FEED_SYS
                    </span>
                    <span className="flex items-center gap-1.5 px-2 py-0.5 text-[9px] font-mono text-white bg-black/60 rounded border border-white/20">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-ping"></span>
                      RECORDING
                    </span>
                  </div>

                  {/* Simulated target box */}
                  <div className="absolute top-[35%] left-[40%] w-24 h-24 border-2 border-dashed border-white flex flex-col justify-between p-1 z-10">
                    <span className="text-[8px] font-mono text-white bg-black/40 px-1 w-fit">
                      ID_USER_983
                    </span>
                    <span className="text-[8px] font-mono text-white align-right text-right">
                      MATCH: 99.4%
                    </span>
                  </div>

                  <div className="absolute top-[20%] left-[15%] w-16 h-16 border border-white flex flex-col justify-between p-1 z-10">
                    <span className="text-[8px] font-mono text-white bg-black/40 px-1 w-fit">
                      ID_USER_402
                    </span>
                  </div>

                  <div className="flex justify-between items-end z-10 font-mono text-[9px] text-zinc-300">
                    <div className="flex flex-col">
                      <span>FPS: 60.00</span>
                      <span>DENSITY: NORMAL (0.12 p/m2)</span>
                    </div>
                    <div className="flex flex-col text-right">
                      <span>HAZARD_INDEX: 0.02</span>
                      <span>SECURE_ACCESS: ALLOWED</span>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {!isPlayingDemo && (
              <span className="absolute top-4 left-4 px-3 py-1 text-[10px] uppercase font-bold tracking-widest text-zinc-350 bg-black/60 backdrop-blur-md rounded-full border border-white/10">
                Interactive Preview
              </span>
            )}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

// ==========================================
// SECTION 5: CYBER SECURITY CERTIFICATION
// ==========================================
export const CyberSecuritySection = () => {
  const tracks = [
    {
      video: "/cyber_security.mp4",
      isGif: false,
      title: "Cybersecurity foundations",
      desc: "Essential training programs designed to build a corporate culture of security awareness and data safety."
    },
    {
      video: "/Cybersecurity.mp4",
      isGif: false,
      title: "Level 2 & 3 (NX/ZX - Defensive & Offensive Security)",
      desc: "Intensive labs focused on teaching security teams how to isolate active network breaches and neutralize system threats."
    },
    {
      video: "/CYber-Security-2.gif",
      isGif: true,
      title: "Level 4 & 5 (Advanced Specialization)",
      desc: "Elite training modules that simulate complex corporate attacks, teaching advanced personnel how to fix deep-seated system vulnerabilities."
    }
  ];

  return (
    <SectionWrapper id="cyber">
      <div className="text-center mb-16">
        <h2 className="text-xs font-semibold tracking-widest text-zinc-500 uppercase mb-3">
          Professional Certification
        </h2>
        <h3 className="text-3xl md:text-5xl font-light text-white tracking-tight">
          CYBER SECURITY CERTIFICATION
        </h3>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pointer-events-auto">
        {tracks.map((track, index) => (
          <div
            key={index}
            className="rounded-2xl bg-black/45 border border-white/[0.06] backdrop-blur-md overflow-hidden hover:bg-black/60 hover:border-white/[0.12] transition-all duration-300 flex flex-col h-full group"
          >
            {/* Visual Media Container */}
            <div className="aspect-[16/10] w-full bg-zinc-950 relative overflow-hidden border-b border-white/[0.06] flex items-center justify-center">
              {track.isGif ? (
                <img
                  src={track.video}
                  alt={track.title}
                  className="w-full h-full object-cover opacity-80"
                />
              ) : (
                <video
                  src={track.video}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover opacity-85"
                />
              )}
            </div>
            {/* Content Container */}
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <h4 className="text-base font-semibold text-white mb-2 leading-snug group-hover:text-zinc-200 transition-colors">
                  {track.title}
                </h4>
                <p className="text-xs text-zinc-450 font-light leading-relaxed mt-1">
                  {track.desc}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

// ==========================================
// SECTION 6: LATEST WORK & ACTIVITIES
// ==========================================
export const ActivitiesSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const activities = [
    {
      img: "/Activity/1.jpeg",
      text: "Participation in exhibitions representing Dubai Police"
    },
    {
      img: "/Activity/2.jpeg",
      text: "Participation in exhibitions representing Dubai Police"
    },
    {
      img: "/Activity/6.jpeg",
      text: "Organization of a workshop on optimizing the bank's business processes"
    },
    {
      img: "/Activity/3.jpeg",
      text: "Cooperation and partnership discussions for smart city initiatives"
    },
    {
      img: "/Activity/4.jpeg",
      text: "Strategic planning session with corporate partners and delegates"
    }
  ];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? activities.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === activities.length - 1 ? 0 : prev + 1));
  };

  return (
    <SectionWrapper id="work">
      <div className="text-center mb-12">
        <h2 className="text-xs font-semibold tracking-widest text-zinc-500 uppercase mb-3">
          Our Impact
        </h2>
        <h3 className="text-3xl md:text-5xl font-light text-white tracking-tight">
          LATEST WORK & ACTIVITIES
        </h3>
      </div>

      <div className="max-w-4xl mx-auto w-full">
        {/* Carousel Container */}
        <div className="relative rounded-2xl border border-white/[0.08] bg-zinc-900/10 backdrop-blur-md overflow-hidden aspect-[16/9] flex items-center justify-center group pointer-events-auto">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentIndex}
              src={activities[currentIndex].img}
              alt={activities[currentIndex].text}
              initial={{ opacity: 0, scale: 1.01 }}
              animate={{ opacity: 0.9, scale: 1 }}
              exit={{ opacity: 0, scale: 0.99 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="w-full h-full object-cover"
            />
          </AnimatePresence>

          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            className="absolute left-4 w-10 h-10 rounded-full bg-black/60 hover:bg-black/85 border border-white/10 flex items-center justify-center text-white transition-all opacity-0 group-hover:opacity-100 cursor-pointer hover:scale-105 z-10"
            aria-label="Previous Slide"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-4 w-10 h-10 rounded-full bg-black/60 hover:bg-black/85 border border-white/10 flex items-center justify-center text-white transition-all opacity-0 group-hover:opacity-100 cursor-pointer hover:scale-105 z-10"
            aria-label="Next Slide"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Dots Indicator */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            {activities.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-1.5 h-1.5 rounded-full transition-all cursor-pointer ${currentIndex === index ? "bg-white scale-125 shadow-sm" : "bg-white/30"
                  }`}
                aria-label={`Go to slide ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>

        {/* Text Below Carousel */}
        <div className="mt-6 text-center h-12">
          <AnimatePresence mode="wait">
            <motion.p
              key={currentIndex}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              transition={{ duration: 0.25 }}
              className="text-base md:text-lg text-white font-light"
            >
              {activities[currentIndex].text}
            </motion.p>
          </AnimatePresence>
        </div>
      </div>
    </SectionWrapper>
  );
};

// ==========================================
// SECTION 7: CONTACTS
// ==========================================
export const ContactSection = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Message sent successfully. Our team will contact you shortly.");
  };

  return (
    <SectionWrapper id="contacts">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        {/* Left Side: Details */}
        <div className="text-left relative">
          {/* Ambient dark glow overlay behind text details */}
          <div className="absolute -inset-8 bg-zinc-950/50 rounded-3xl blur-3xl pointer-events-none -z-10"></div>
          <h2 className="text-xs font-semibold tracking-widest text-zinc-500 uppercase mb-3">
            Connect
          </h2>
          <h3 className="text-3xl md:text-5xl font-light text-white tracking-tight mb-6">
            Partner With Us
          </h3>
          <p className="text-base text-zinc-350 font-light leading-relaxed mb-10">
            Ready to drive real change in your organization? Reach out for a specialized consultation. Let&apos;s build a practical roadmap together.
          </p>

          <div className="space-y-6 pointer-events-auto">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-white/[0.02] border border-white/[0.06] flex items-center justify-center text-white shrink-0">
                <Mail className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-[10px] text-zinc-500 uppercase tracking-wider font-semibold">Direct Advisory Contact</h4>
                <p className="text-sm text-zinc-300 font-medium mt-0.5">johanna@applause.ae</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-white/[0.02] border border-white/[0.06] flex items-center justify-center text-white shrink-0">
                <Phone className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-[10px] text-zinc-500 uppercase tracking-wider font-semibold">Consulting Support</h4>
                <p className="text-sm text-zinc-300 font-medium mt-0.5">+971 50 9009795</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-white/[0.02] border border-white/[0.06] flex items-center justify-center text-white shrink-0">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-[10px] text-zinc-500 uppercase tracking-wider font-semibold">UAE Head Office</h4>
                <p className="text-sm text-zinc-300 font-medium mt-0.5">Clover Bay, Business Bay, Dubai</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Clean Apple form */}
        <form
          onSubmit={handleSubmit}
          className="p-8 rounded-2xl border border-white/[0.06] bg-white/[0.01] backdrop-blur-md space-y-4 w-full text-left pointer-events-auto"
        >
          <div>
            <label className="block text-[10px] font-semibold text-zinc-400 uppercase tracking-wider mb-2">
              Full Name
            </label>
            <input
              type="text"
              required
              className="w-full px-4 py-3 rounded-lg bg-zinc-950/40 border border-white/[0.06] text-white placeholder-zinc-600 focus:outline-none focus:border-white/20 text-sm transition-all font-light"
              placeholder="e.g. Sarah Jenkins"
            />
          </div>
          <div>
            <label className="block text-[10px] font-semibold text-zinc-400 uppercase tracking-wider mb-2">
              Organization Email
            </label>
            <input
              type="email"
              required
              className="w-full px-4 py-3 rounded-lg bg-zinc-950/40 border border-white/[0.06] text-white placeholder-zinc-600 focus:outline-none focus:border-white/20 text-sm transition-all font-light"
              placeholder="e.g. sjenkins@agency.gov"
            />
          </div>
          <div>
            <label className="block text-[10px] font-semibold text-zinc-400 uppercase tracking-wider mb-2">
              How can we assist you?
            </label>
            <textarea
              required
              rows={4}
              className="w-full px-4 py-3 rounded-lg bg-zinc-950/40 border border-white/[0.06] text-white placeholder-zinc-600 focus:outline-none focus:border-white/20 text-sm transition-all resize-none font-light"
              placeholder="Describe your transformation or strategy challenge..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 py-4 rounded-full bg-white text-zinc-950 font-bold tracking-wider hover:bg-zinc-200 transition-all shadow-sm cursor-pointer"
          >
            Submit Request
            <Send className="w-4 h-4" />
          </button>
        </form>
      </div>
    </SectionWrapper>
  );
};
