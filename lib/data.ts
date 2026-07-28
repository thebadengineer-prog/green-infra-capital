import { Article } from "@/components/cards/article-card";
import { CaseStudy } from "@/components/cards/case-study-card";
import { ResourceItem } from "@/components/cards/resource-card";

export const FEATURED_ARTICLES: Article[] = [
  {
    slug: "what-is-project-finance",
    title: "What is Project Finance? Non-Recourse Structuring & Risk Allocation",
    excerpt: "A comprehensive analysis of non-recourse project debt, special purpose vehicles (SPVs), cash flow waterfall dynamics, and lender risk mitigation in global infrastructure.",
    category: "Project Finance",
    date: "Jul 24, 2026",
    readTime: "8 min read",
    author: { name: "Vikram Malhotra", role: "Managing Director" },
    featured: true,
  },
  {
    slug: "debt-sculpting-explained",
    title: "Debt Sculpting Explained: Optimizing Debt Service Coverage Ratios",
    excerpt: "How financial engineers match principal and interest repayment schedules with seasonal or variable cash flows in solar, wind, and toll road assets.",
    category: "Project Finance",
    date: "Jul 20, 2026",
    readTime: "6 min read",
    author: { name: "Sarah Jenkins", role: "VP Financial Modelling" },
  },
  {
    slug: "understanding-dscr",
    title: "Understanding DSCR, LLCR, and PLCR in Infrastructure Debt",
    excerpt: "Comparing Debt Service Coverage Ratio (DSCR), Loan Life Coverage Ratio (LLCR), and Project Life Coverage Ratio (PLCR) for institutional credit committees.",
    category: "Project Finance",
    date: "Jul 15, 2026",
    readTime: "7 min read",
    author: { name: "Ananth Subramanian", role: "Senior Risk Analyst" },
  },
  {
    slug: "solar-project-finance",
    title: "Utility-Scale Solar Project Finance: Tariff Structures & PPA Risk",
    excerpt: "Evaluating long-term Power Purchase Agreements (PPAs), merchant curve exposure, curtailment risks, and degradation factors in utility-scale solar utility debt.",
    category: "Renewable Energy",
    date: "Jul 11, 2026",
    readTime: "9 min read",
    author: { name: "Elena Rostova", role: "Clean Energy Lead" },
  },
  {
    slug: "ppp-explained",
    title: "Public-Private Partnerships (PPP) Explained: BOT, DBFOM & Concession Models",
    excerpt: "Deconstructing Build-Operate-Transfer (BOT), Availability Payment models, and demand-risk concession frameworks in national transport and social infrastructure.",
    category: "Public-Private Partnerships",
    date: "Jul 05, 2026",
    readTime: "10 min read",
    author: { name: "Marcus Vance", role: "PPP Policy Advisor" },
  },
  {
    slug: "green-hydrogen-finance",
    title: "Green Hydrogen Bankability: Offtake Contracts & Electrolyzer Economics",
    excerpt: "Analyzing the cost stack of green hydrogen production, government subsidy structures, and securing debt for giga-watt scale electrolyzer facilities.",
    category: "Climate Finance",
    date: "Jun 28, 2026",
    readTime: "11 min read",
    author: { name: "Dr. Aris Thorne", role: "Chief Energy Transition Strategist" },
  },
];

export const FEATURED_CASE_STUDIES: CaseStudy[] = [
  {
    id: "cs-1",
    title: "1.2 GW Solar & Battery Storage Hybrid Complex - Rajasthan, India",
    sector: "Renewable Energy",
    location: "India",
    dealSize: "$850M",
    slug: "rajasthan-solar-bess-complex",
    summary: "Structured $620M in non-recourse senior debt with a syndicate of multilateral development banks and commercial lenders under a 25-year sovereign-backed PPA.",
    impactMetrics: [
      "1.8 TWh Clean Electricity / Year",
      "Debt Amortization Sculpted to Solar Seasonality",
      "Blend of USD Senior & Local Currency Tranches",
    ],
  },
  {
    id: "cs-2",
    title: "Metro Rail Phase III Concession & Transit-Oriented Development",
    sector: "Public-Private Partnerships",
    location: "Southeast Asia",
    dealSize: "$1.4B",
    slug: "metro-rail-concession-tod",
    summary: "Hybrid availability payment and land-monetization model mitigating traffic volume risk while delivering high-capacity urban mass transit.",
    impactMetrics: [
      "42 km Dual-Track Metro Line",
      "30-Year DBFOM Concession Agreement",
      "1.2M Daily Commuter Capacity",
    ],
  },
  {
    id: "cs-3",
    title: "Deepwater Offshore Wind & Transmission Interconnector",
    sector: "Infrastructure",
    location: "North Sea, Europe",
    dealSize: "$2.1B",
    slug: "north-sea-wind-interconnector",
    summary: "Commercial bank debt facility with EIB co-financing featuring a tailored DSCR hurdle rate and inflation-linked tariff escalators.",
    impactMetrics: [
      "800 MW Generation + High-Voltage DC Cable",
      "12 Commercial Bank Debt Syndicate",
      "First-Loss Climate Fund Guarantee",
    ],
  },
];

export const CATEGORIES_LIST = [
  {
    name: "Project Finance",
    slug: "project-finance",
    description: "Non-recourse debt, cash flow waterfalls, SPV structuring, DSCR modeling, and credit enhancement mechanisms.",
    count: "34 Articles",
  },
  {
    name: "Infrastructure",
    slug: "infrastructure",
    description: "Transport, digital infrastructure, water networks, social concessions, and core asset capital allocation.",
    count: "28 Articles",
  },
  {
    name: "Renewable Energy",
    slug: "renewable-energy",
    description: "Solar PV, onshore/offshore wind, battery energy storage systems (BESS), and green hydrogen bankability.",
    count: "42 Articles",
  },
  {
    name: "Climate Finance",
    slug: "climate-finance",
    description: "Blended finance, green bonds, sovereign carbon credits, Article 6, and multilateral climate funds.",
    count: "22 Articles",
  },
  {
    name: "Public-Private Partnerships",
    slug: "ppp",
    description: "DBFOM concessions, availability payments, user-pay tolling, regulatory risk allocation, and VFM evaluation.",
    count: "19 Articles",
  },
];
