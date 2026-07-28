"use client";

import { useState } from "react";
import { Calculator, FileText, CheckSquare, ShieldAlert, ArrowRight, BookOpen } from "lucide-react";

export default function ResourcesPage() {
  // Live Interactive DSCR State
  const [cfads, setCfads] = useState<number>(15000000); // Cash Flow Available for Debt Service ($15M)
  const [principal, setPrincipal] = useState<number>(8000000); // Debt Principal Repayment ($8M)
  const [interest, setInterest] = useState<number>(4000000); // Interest Payment ($4M)

  const totalDebtService = principal + interest;
  const dscr = totalDebtService > 0 ? (cfads / totalDebtService).toFixed(2) : "0.00";

  const getDscrStatus = (val: number) => {
    if (val >= 1.35) return { label: "Strong Credit Profile", color: "text-emerald-500 bg-emerald-50 dark:bg-emerald-950/40 border-emerald-200" };
    if (val >= 1.15) return { label: "Acceptable Bankable Range", color: "text-amber-600 bg-amber-50 dark:bg-amber-950/40 border-amber-200" };
    return { label: "Default / Covenant Breach Risk", color: "text-red-600 bg-red-50 dark:bg-red-950/40 border-red-200" };
  };

  const status = getDscrStatus(parseFloat(dscr));

  return (
    <div className="bg-white dark:bg-[#050A11] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <span className="text-xs font-extrabold uppercase tracking-widest text-secondary dark:text-accent">
            Executive Tooling & Guides
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl font-extrabold text-primary dark:text-white">
            Infrastructure Knowledge Resources
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
            Essential reference materials, interactive calculators, risk mitigation matrices, and due diligence checklists for project finance practitioners.
          </p>
        </div>

        {/* Live DSCR Calculator Tool */}
        <div className="bg-gray-50 dark:bg-[#0A1422] rounded-3xl p-8 md:p-10 border border-gray-200 dark:border-gray-800 shadow-soft">
          <div className="flex items-center space-x-3 mb-6">
            <div className="p-3 rounded-xl bg-primary text-white">
              <Calculator className="w-6 h-6" />
            </div>
            <div>
              <h2 className="font-heading text-2xl font-bold text-primary dark:text-white">
                Interactive DSCR Calculator
              </h2>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Calculate Debt Service Coverage Ratio: $\text{DSCR} = \frac{\text{CFADS}}{\text{Principal} + \text{Interest}}$
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Input Controls */}
            <div className="lg:col-span-7 space-y-5">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 dark:text-gray-300 mb-2">
                  Cash Flow Available for Debt Service (CFADS): ${cfads.toLocaleString()}
                </label>
                <input
                  type="range"
                  min="1000000"
                  max="50000000"
                  step="500000"
                  value={cfads}
                  onChange={(e) => setCfads(Number(e.target.value))}
                  className="w-full accent-primary dark:accent-accent cursor-pointer"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 dark:text-gray-300 mb-2">
                  Annual Principal Repayment: ${principal.toLocaleString()}
                </label>
                <input
                  type="range"
                  min="500000"
                  max="25000000"
                  step="250000"
                  value={principal}
                  onChange={(e) => setPrincipal(Number(e.target.value))}
                  className="w-full accent-primary dark:accent-accent cursor-pointer"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 dark:text-gray-300 mb-2">
                  Annual Interest Payment: ${interest.toLocaleString()}
                </label>
                <input
                  type="range"
                  min="250000"
                  max="15000000"
                  step="250000"
                  value={interest}
                  onChange={(e) => setInterest(Number(e.target.value))}
                  className="w-full accent-primary dark:accent-accent cursor-pointer"
                />
              </div>
            </div>

            {/* Live Calculation Output Display */}
            <div className="lg:col-span-5 bg-white dark:bg-[#050A11] p-8 rounded-2xl border border-gray-200 dark:border-gray-800 text-center space-y-4 shadow-sm">
              <span className="text-xs font-bold uppercase tracking-widest text-gray-400">Calculated Ratio</span>
              <div className="font-heading font-extrabold text-5xl md:text-6xl text-primary dark:text-accent">
                {dscr}x
              </div>
              <div className={`inline-block px-3.5 py-1.5 rounded-full text-xs font-bold border ${status.color}`}>
                {status.label}
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400 pt-2 border-t border-gray-100 dark:border-gray-800">
                Total Annual Debt Service: <strong>${totalDebtService.toLocaleString()}</strong>
              </p>
            </div>
          </div>
        </div>

        {/* Static Knowledge Resource Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-50 dark:bg-[#0A1422] rounded-2xl p-7 border border-gray-200 dark:border-gray-800 space-y-4">
            <FileText className="w-8 h-8 text-secondary dark:text-accent" />
            <h3 className="font-heading text-xl font-bold text-primary dark:text-white">Debt Sculpting Strategy Guide</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              Step-by-step mathematical guide to calculating variable principal amortization to achieve constant target DSCR ratios.
            </p>
            <button className="text-xs font-bold text-primary dark:text-accent inline-flex items-center space-x-1 hover:underline pt-2">
              <span>Read Guide</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="bg-gray-50 dark:bg-[#0A1422] rounded-2xl p-7 border border-gray-200 dark:border-gray-800 space-y-4">
            <ShieldAlert className="w-8 h-8 text-amber-500" />
            <h3 className="font-heading text-xl font-bold text-primary dark:text-white">PPP Risk Allocation Matrix</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              Comprehensive institutional matrix mapping Construction, Demand, Regulatory, Force Majeure, and Refinancing risks.
            </p>
            <button className="text-xs font-bold text-primary dark:text-accent inline-flex items-center space-x-1 hover:underline pt-2">
              <span>Download Matrix</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="bg-gray-50 dark:bg-[#0A1422] rounded-2xl p-7 border border-gray-200 dark:border-gray-800 space-y-4">
            <CheckSquare className="w-8 h-8 text-emerald-500" />
            <h3 className="font-heading text-xl font-bold text-primary dark:text-white">PPA Bankability Checklist</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              45-point due diligence checklist for assessing off-taker creditworthiness, curtailment compensation, and termination payments.
            </p>
            <button className="text-xs font-bold text-primary dark:text-accent inline-flex items-center space-x-1 hover:underline pt-2">
              <span>View Checklist</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
