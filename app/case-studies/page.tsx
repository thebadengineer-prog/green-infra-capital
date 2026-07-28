import { FEATURED_CASE_STUDIES } from "@/lib/data";
import { CaseStudyCard } from "@/components/cards/case-study-card";

export const metadata = {
  title: "Case Studies | GreenInfraCapital",
  description: "Explore global project finance deal structures across solar parks, transit concessions, offshore wind, transmission, and waste-to-energy assets.",
};

export default function CaseStudiesPage() {
  return (
    <div className="bg-white dark:bg-[#050A11] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <span className="text-xs font-extrabold uppercase tracking-widest text-secondary dark:text-accent">
            Deal Intelligence Archives
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl font-extrabold text-primary dark:text-white">
            Infrastructure Case Studies
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
            In-depth analysis of landmark project debt syndications, PPP concessions, and climate finance capital structures executed worldwide.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURED_CASE_STUDIES.map((cs) => (
            <CaseStudyCard key={cs.id} caseStudy={cs} />
          ))}
        </div>

      </div>
    </div>
  );
}
