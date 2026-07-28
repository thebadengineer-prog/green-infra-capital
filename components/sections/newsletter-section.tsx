"use client";

import { useState } from "react";
import { Mail, CheckCircle2, Shield } from "lucide-react";

export function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
    }
  };

  return (
    <section id="newsletter" className="py-20 bg-primary text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(#C9A227_1px,transparent_1px)] [background-size:24px_24px] opacity-10" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto bg-primary-dark/80 rounded-3xl p-8 md:p-12 border border-white/10 shadow-2xl backdrop-blur-md">
          
          <div className="text-center space-y-4 mb-8">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-secondary/30 text-emerald-300 text-xs font-semibold uppercase tracking-wider border border-secondary/50">
              <Mail className="w-3.5 h-3.5" />
              <span>Weekly Briefing</span>
            </div>

            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white">
              Financial Intelligence in Your Inbox
            </h2>

            <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-xl mx-auto">
              Join 15,000+ infrastructure sponsors, investment bankers, and project finance professionals receiving our weekly analysis on market trends, DSCR structuring, and deal intelligence.
            </p>
          </div>

          {submitted ? (
            <div className="bg-emerald-950/60 border border-emerald-500/40 rounded-2xl p-6 text-center space-y-2 animate-fade-in">
              <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
              <h3 className="font-heading font-bold text-lg text-white">Subscription Confirmed</h3>
              <p className="text-xs text-emerald-200">
                You have been subscribed to GreenInfraCapital Executive Intelligence.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your institutional email address"
                className="flex-grow px-4 py-3.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent text-sm"
              />
              <button
                type="submit"
                className="px-6 py-3.5 rounded-xl bg-accent text-primary font-bold hover:bg-accent-light transition-all text-sm whitespace-nowrap shadow-md"
              >
                Subscribe Now
              </button>
            </form>
          )}

          <div className="flex items-center justify-center space-x-2 text-[11px] text-gray-400 mt-6">
            <Shield className="w-3.5 h-3.5 text-accent" />
            <span>Zero spam. Unsubscribe anytime. Strictly institutional insights.</span>
          </div>

        </div>
      </div>
    </section>
  );
}
