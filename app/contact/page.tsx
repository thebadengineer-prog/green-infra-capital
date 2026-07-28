"use client";

import { useState } from "react";
import { Mail, MapPin, Linkedin, Send, CheckCircle2, Globe, Building } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    country: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.email && formData.name) {
      setSubmitted(true);
    }
  };

  return (
    <div className="bg-white dark:bg-[#050A11] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <span className="text-xs font-extrabold uppercase tracking-widest text-secondary dark:text-accent">
            Institutional Engagement
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl font-extrabold text-primary dark:text-white">
            Contact GreenInfraCapital
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
            For research inquiries, executive briefings, advisory partnerships, or speaking engagements, reach out to our editorial and research team.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Contact Form */}
          <div className="lg:col-span-7 bg-gray-50 dark:bg-[#0A1422] rounded-3xl p-8 md:p-10 border border-gray-200/80 dark:border-gray-800/80 shadow-soft">
            {submitted ? (
              <div className="py-12 text-center space-y-4 animate-fade-in">
                <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto" />
                <h2 className="font-heading text-2xl font-bold text-primary dark:text-white">Message Transmitted</h2>
                <p className="text-sm text-gray-600 dark:text-gray-300 max-w-md mx-auto">
                  Thank you for reaching out. A senior member of our research team will respond within 24 business hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 dark:text-gray-300 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Vikram Malhotra"
                      className="w-full px-4 py-3 rounded-xl bg-white dark:bg-gray-800/80 border border-gray-300 dark:border-gray-700 text-primary dark:text-white focus:ring-2 focus:ring-accent focus:outline-none text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 dark:text-gray-300 mb-2">
                      Institutional Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@institution.com"
                      className="w-full px-4 py-3 rounded-xl bg-white dark:bg-gray-800/80 border border-gray-300 dark:border-gray-700 text-primary dark:text-white focus:ring-2 focus:ring-accent focus:outline-none text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 dark:text-gray-300 mb-2">
                      Company / Organization
                    </label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="e.g. Global Infrastructure Fund"
                      className="w-full px-4 py-3 rounded-xl bg-white dark:bg-gray-800/80 border border-gray-300 dark:border-gray-700 text-primary dark:text-white focus:ring-2 focus:ring-accent focus:outline-none text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 dark:text-gray-300 mb-2">
                      Country
                    </label>
                    <input
                      type="text"
                      value={formData.country}
                      onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                      placeholder="e.g. India / United Kingdom"
                      className="w-full px-4 py-3 rounded-xl bg-white dark:bg-gray-800/80 border border-gray-300 dark:border-gray-700 text-primary dark:text-white focus:ring-2 focus:ring-accent focus:outline-none text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 dark:text-gray-300 mb-2">
                    Inquiry Details *
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your research, deal inquiry, or partnership requirements..."
                    className="w-full px-4 py-3 rounded-xl bg-white dark:bg-gray-800/80 border border-gray-300 dark:border-gray-700 text-primary dark:text-white focus:ring-2 focus:ring-accent focus:outline-none text-sm"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-8 py-4 text-sm font-bold text-white bg-primary hover:bg-primary-light dark:bg-accent dark:text-black dark:hover:bg-accent-light rounded-xl transition-all shadow-md"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Inquiry</span>
                </button>
              </form>
            )}
          </div>

          {/* Contact Details & Google Maps Placeholder */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-primary text-white p-8 rounded-3xl space-y-6">
              <h3 className="font-heading text-2xl font-bold">Contact Intelligence Desk</h3>
              
              <div className="space-y-4 text-sm text-gray-300">
                <div className="flex items-start space-x-3">
                  <Mail className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs uppercase tracking-wider text-gray-400 font-bold block">Email</span>
                    <a href="mailto:contact@greeninfracapital.in" className="hover:text-white transition-colors">contact@greeninfracapital.in</a>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Globe className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs uppercase tracking-wider text-gray-400 font-bold block">Domain</span>
                    <span>https://GreenInfraCapital.in</span>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Linkedin className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs uppercase tracking-wider text-gray-400 font-bold block">LinkedIn</span>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GreenInfraCapital Official</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Maps / Office Location Visual Placeholder */}
            <div className="bg-gray-100 dark:bg-[#0A1422] rounded-3xl p-6 border border-gray-200 dark:border-gray-800 text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-secondary/10 dark:bg-accent/10 flex items-center justify-center text-secondary dark:text-accent mx-auto">
                <MapPin className="w-6 h-6" />
              </div>
              <h4 className="font-heading font-bold text-primary dark:text-white">Institutional Presence</h4>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                New Delhi • Mumbai • London • Singapore
              </p>
              <div className="w-full h-32 rounded-xl bg-gray-200 dark:bg-gray-800 flex items-center justify-center text-xs text-gray-400 font-mono">
                [ Interactive Map View Placeholder ]
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
