import Link from "next/link";
import { Building2, Globe, DollarSign, ArrowUpRight } from "lucide-react";

export interface CaseStudy {
  id: string;
  title: string;
  sector: string;
  location: string;
  dealSize: string;
  summary: string;
  slug: string;
  impactMetrics: string[];
}

interface CaseStudyCardProps {
  caseStudy: CaseStudy;
}

export function CaseStudyCard({ caseStudy }: CaseStudyCardProps) {
  return (
    <div className="group bg-white dark:bg-[#0A1422] rounded-xl border border-gray-200/80 dark:border-gray-800/80 p-6 shadow-sm hover:shadow-soft-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
      <div>
        {/* Header Metadata */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-4 pb-3 border-b border-gray-100 dark:border-gray-800/60 text-xs text-gray-500 dark:text-gray-400">
          <span className="flex items-center space-x-1.5 font-semibold text-secondary dark:text-accent">
            <Building2 className="w-3.5 h-3.5" />
            <span>{caseStudy.sector}</span>
          </span>
          <span className="flex items-center space-x-1">
            <Globe className="w-3.5 h-3.5 text-gray-400" />
            <span>{caseStudy.location}</span>
          </span>
          <span className="flex items-center space-x-0.5 font-bold text-primary dark:text-white bg-gray-100 dark:bg-gray-800 px-2 py-0.5 rounded">
            <DollarSign className="w-3 h-3" />
            <span>{caseStudy.dealSize}</span>
          </span>
        </div>

        <Link href={`/case-studies/${caseStudy.slug}`}>
          <h3 className="font-heading font-bold text-xl text-primary dark:text-white group-hover:text-secondary dark:group-hover:text-accent transition-colors mb-3 leading-snug">
            {caseStudy.title}
          </h3>
        </Link>

        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-5">
          {caseStudy.summary}
        </p>

        {/* Impact Highlights */}
        <div className="space-y-1.5 mb-6">
          {caseStudy.impactMetrics.map((metric, idx) => (
            <div key={idx} className="flex items-center space-x-2 text-xs text-gray-700 dark:text-gray-300">
              <div className="w-1.5 h-1.5 rounded-full bg-accent" />
              <span>{metric}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="pt-4 border-t border-gray-100 dark:border-gray-800">
        <Link
          href={`/case-studies/${caseStudy.slug}`}
          className="inline-flex items-center justify-between w-full text-xs font-bold text-primary dark:text-accent group-hover:underline"
        >
          <span>Read Full Case Study</span>
          <ArrowUpRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
