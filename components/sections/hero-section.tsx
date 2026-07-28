"use client";

import Link from "next/link";
import { ArrowRight, BookOpen, ShieldCheck, TrendingUp, Layers, Award } from "lucide-react";
import { AnimatedCounter } from "@/components/ui/animated-counter";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-primary-dark via-primary to-[#08182E] text-white pt-20 pb-24 md:pt-28 md:pb-32">
      {/* Background Subtle Mesh Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#C9A227_1px,transparent_1px)] [background-size:32px_32px] opacity-10" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          
          {/* Institution Badge */}
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-xs font-semibold uppercase tracking-widest text-accent shadow-inner">
            <ShieldCheck className="w-4 h-4 text-accent" />
            <span>Institutional Infrastructure Intelligence</span>
          </div>

          {/* Main Headline */}
          <h1 className="font-heading font-extrabold text-4xl sm:text-5xl md:text-6xl tracking-tight leading-[1.1] text-white">
            Financing the Future of{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-amber-200 to-emerald-400">
              Sustainable Infrastructure
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-gray-300 font-normal leading-relaxed max-w-3xl mx-auto">
            Deep technical insights, non-recourse financial models, and strategic analysis across{" "}
            <strong className="text-white font-semibold">Project Finance</strong>,{" "}
            <strong className="text-white font-semibold">Renewable Energy</strong>,{" "}
            <strong className="text-white font-semibold">Climate Finance</strong>, and{" "}
            <strong className="text-white font-semibold">Public-Private Partnerships (PPP)</strong>.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              href="/blog"
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-8 py-4 text-base font-bold rounded-xl text-primary bg-accent hover:bg-accent-light transition-all shadow-lg hover:shadow-accent/20 hover:-translate-y-0.5"
            >
              <BookOpen className="w-5 h-5" />
              <span>Read Articles</span>
            </Link>

            <Link
              href="/resources"
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-8 py-4 text-base font-bold rounded-xl text-white bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md transition-all hover:-translate-y-0.5"
            >
              <span>Explore Resources & Models</span>
              <ArrowRight className="w-5 h-5 text-accent" />
            </Link>
          </div>

          {/* Animated Statistics Banner */}
          <div className="pt-16 grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-white/10 mt-12">
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div className="font-heading font-extrabold text-3xl md:text-4xl text-accent">
                <AnimatedCounter value={100} suffix="+" />
              </div>
              <div className="text-xs uppercase tracking-wider text-gray-400 font-semibold mt-1">
                Technical Articles
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div className="font-heading font-extrabold text-3xl md:text-4xl text-emerald-400">
                <AnimatedCounter value={20} suffix="+" />
              </div>
              <div className="text-xs uppercase tracking-wider text-gray-400 font-semibold mt-1">
                Global Case Studies
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div className="font-heading font-extrabold text-3xl md:text-4xl text-blue-300">
                <AnimatedCounter value={50} suffix="+" />
              </div>
              <div className="text-xs uppercase tracking-wider text-gray-400 font-semibold mt-1">
                Financial Models & Tools
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div className="font-heading font-extrabold text-3xl md:text-4xl text-white">
                <AnimatedCounter value={50} prefix="$" suffix="B+" />
              </div>
              <div className="text-xs uppercase tracking-wider text-gray-400 font-semibold mt-1">
                Capital Modeled
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
