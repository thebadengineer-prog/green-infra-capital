import { FileSpreadsheet, Download, ShieldCheck, Check, Sparkles } from "lucide-react";

export const metadata = {
  title: "Financial Models | GreenInfraCapital",
  description: "Download audited, institutional-grade financial models for Solar PV, Offshore Wind, Battery Energy Storage, Green Hydrogen, Transmission Lines, and PPP Concessions.",
};

const MODELS = [
  {
    id: "solar",
    title: "Utility-Scale Solar PV Model",
    category: "Renewable Energy",
    version: "v4.2 (FAST Standard)",
    description: "25-year non-recourse cash flow model featuring debt sculpting, seasonal P50/P90 generation, degraded output, and PPA tariff escalations.",
    features: ["Sculpted Amortization (DSCR target)", "P50 / P90 Generation Scenarios", "Tax Equity & Depreciation Schedules"],
    filename: "GreenInfra_Solar_PV_Model_v4.2.xlsx",
  },
  {
    id: "wind",
    title: "Offshore & Onshore Wind Model",
    category: "Renewable Energy",
    version: "v3.8",
    description: "Dual-tranche debt model including corporate and ECA guarantees, wind Weibull distribution inputs, and curtailment sensitivity analysis.",
    features: ["Multi-tranche Senior Debt", "ECA Guarantee Pricing", "Turbine O&M Reserve Accounts"],
    filename: "GreenInfra_Wind_Energy_Model_v3.8.xlsx",
  },
  {
    id: "bess",
    title: "Battery Energy Storage System (BESS)",
    category: "Clean Tech",
    version: "v2.5",
    description: "Flexible storage model incorporating tolling agreements, merchant arbitrage revenue stacks, cell degradation replacement CapEx, and ancillary services.",
    features: ["Multi-revenue Stream Stack", "Battery Augmentation Schedule", "IRR Sensitivity Matrix"],
    filename: "GreenInfra_BESS_Financial_Model_v2.5.xlsx",
  },
  {
    id: "hydrogen",
    title: "Green Hydrogen & Electrolyzer Model",
    category: "Climate Finance",
    version: "v1.9",
    description: "Giga-watt scale hydrogen model factoring water power purchase costs, electrolyzer stack efficiency curves, off-take indexing, and government subsidy grants.",
    features: ["Levelized Cost of Hydrogen (LCOH)", "Subsidy & Tax Credit Inputs", "Electrolyzer Replacement CapEx"],
    filename: "GreenInfra_Green_Hydrogen_Model_v1.9.xlsx",
  },
  {
    id: "transmission",
    title: "High-Voltage Transmission Line Model",
    category: "Infrastructure",
    version: "v3.1",
    description: "Regulated asset base (RAB) model for long-haul HVDC transmission lines with availability payments, line loss mechanics, and inflation indexing.",
    features: ["Regulated Asset Base (RAB) Calculations", "Availability Risk Mitigation", "30-Year Concession Horizon"],
    filename: "GreenInfra_HVDC_Transmission_Model_v3.1.xlsx",
  },
  {
    id: "ppp",
    title: "PPP Highway Concession (BOT/DBFOM)",
    category: "Public-Private Partnerships",
    version: "v5.0",
    description: "Dual-mode highway model handling both user-pay toll volume risks and government availability payment shadow-toll mechanics.",
    features: ["Shadow Toll vs User Toll Options", "Major Maintenance Reserve Fund", "Public Sector Viability Gap Funding"],
    filename: "GreenInfra_PPP_Highway_Model_v5.0.xlsx",
  },
];

export default function FinancialModelsPage() {
  return (
    <div className="bg-white dark:bg-[#050A11] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <span className="text-xs font-extrabold uppercase tracking-widest text-secondary dark:text-accent">
            Institutional Modeling Suite
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl font-extrabold text-primary dark:text-white">
            Audited Financial Models
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
            Bank-ready Excel financial models built in alignment with international project finance modeling standards. Designed for investment committees, lenders, and sponsors.
          </p>
        </div>

        {/* Models Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {MODELS.map((model) => (
            <div
              key={model.id}
              className="group bg-gray-50 dark:bg-[#0A1422] rounded-2xl border border-gray-200/80 dark:border-gray-800/80 p-7 shadow-sm hover:shadow-soft hover:border-secondary/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-white dark:bg-gray-800 text-secondary dark:text-accent border border-gray-100 dark:border-gray-700">
                    <FileSpreadsheet className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-mono font-semibold text-gray-500 bg-gray-200 dark:bg-gray-800 px-2.5 py-1 rounded">
                    {model.version}
                  </span>
                </div>

                <span className="text-xs font-semibold text-secondary dark:text-accent uppercase tracking-wider">
                  {model.category}
                </span>

                <h2 className="font-heading font-bold text-xl text-primary dark:text-white mt-1 mb-3 group-hover:text-secondary dark:group-hover:text-accent transition-colors">
                  {model.title}
                </h2>

                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6">
                  {model.description}
                </p>

                <div className="space-y-2 mb-6 pt-4 border-t border-gray-200/60 dark:border-gray-800">
                  {model.features.map((feat, i) => (
                    <div key={i} className="flex items-center space-x-2 text-xs text-gray-700 dark:text-gray-300">
                      <Check className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-gray-200/60 dark:border-gray-800">
                <a
                  href={`#download-${model.id}`}
                  className="w-full inline-flex items-center justify-center space-x-2 px-4 py-3 text-xs font-bold rounded-xl text-primary dark:text-white bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 hover:bg-primary hover:text-white dark:hover:bg-accent dark:hover:text-black transition-all shadow-sm"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Model Placeholder</span>
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
