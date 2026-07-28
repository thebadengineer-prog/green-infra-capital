import { ShieldCheck, Target, Compass, Award, Building2, GraduationCap, Calendar, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "About Us | GreenInfraCapital",
  description: "Learn about GreenInfraCapital's mission to advance project finance, sustainable infrastructure investment, and climate finance intelligence globally.",
};

export default function AboutPage() {
  const timeline = [
    {
      year: "2024 - Present",
      title: "GreenInfraCapital Intelligence Platform",
      role: "Founder & Executive Editor",
      description: "Established the platform to bridge knowledge gaps in complex project debt structuring, climate risk pricing, and PPP concession design.",
    },
    {
      year: "2019 - 2024",
      title: "Global Infrastructure Investment Banking",
      role: "Senior Project Finance Director",
      description: "Led debt syndications and deal structuring for over $4.2B in utility-scale renewable energy assets and transport concessions across emerging markets.",
    },
    {
      year: "2014 - 2019",
      title: "Multilateral Development Finance",
      role: "Infrastructure Risk Specialist",
      description: "Advised sovereign governments and private developers on non-recourse debt guarantees, blended finance structures, and PPP risk allocation.",
    },
  ];

  const values = [
    {
      title: "Institutional Rigor",
      description: "Every model, article, and case study is grounded in institutional debt underwriting standards and empirical market data.",
      icon: ShieldCheck,
    },
    {
      title: "Bankable Clarity",
      description: "Demystifying cash flow waterfalls, sculpting mechanics, and legal covenants for practitioners and decision-makers.",
      icon: Target,
    },
    {
      title: "Climate Capital Catalyst",
      description: "Accelerating capital deployment toward net-zero infrastructure through actionable financial engineering framework.",
      icon: Compass,
    },
  ];

  return (
    <div className="bg-white dark:bg-[#050A11] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* Page Header / Biography */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-extrabold uppercase tracking-widest text-secondary dark:text-accent">
              About the Platform
            </span>
            <h1 className="font-heading text-4xl sm:text-5xl font-extrabold text-primary dark:text-white leading-tight">
              Pioneering Knowledge in <span className="text-accent">Sustainable Project Finance</span>
            </h1>
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
              GreenInfraCapital is a premier financial research and advisory intelligence platform dedicated to senior investment bankers, project developers, multilateral agencies, and institutional investors active in sustainable infrastructure.
            </p>
            <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed">
              We specialize in non-recourse debt engineering, Debt Service Coverage Ratio (DSCR) optimization, blended climate finance frameworks, and Public-Private Partnership (PPP) concessions.
            </p>
          </div>

          <div className="lg:col-span-5">
            <div className="relative rounded-2xl bg-gradient-to-br from-primary via-primary-dark to-[#08182E] p-8 text-white shadow-soft-lg border border-white/10">
              <div className="w-20 h-20 rounded-2xl bg-accent/20 border border-accent/40 flex items-center justify-center text-accent mb-6">
                <Building2 className="w-10 h-10" />
              </div>
              <h2 className="font-heading text-2xl font-bold text-white mb-2">GreenInfraCapital.in</h2>
              <p className="text-accent text-xs font-semibold uppercase tracking-wider mb-6">Institutional Standard</p>
              <div className="space-y-3 text-sm text-gray-300">
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>50+ Non-recourse deal frameworks</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Audited financial modeling tools</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Global MDB & sponsor audience</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mission, Vision & Values */}
        <div className="pt-12 border-t border-gray-200 dark:border-gray-800">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-heading text-3xl font-bold text-primary dark:text-white">Our Core Principles</h2>
            <p className="text-gray-600 dark:text-gray-400 text-sm mt-2">Built on analytical excellence and institutional integrity.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <div key={i} className="bg-gray-50 dark:bg-[#0A1422] p-8 rounded-2xl border border-gray-200/80 dark:border-gray-800/80 space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 dark:bg-accent/10 flex items-center justify-center text-primary dark:text-accent">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-primary dark:text-white">{v.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{v.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Experience Timeline */}
        <div className="pt-12 border-t border-gray-200 dark:border-gray-800">
          <h2 className="font-heading text-3xl font-bold text-primary dark:text-white mb-8">Professional Timeline</h2>
          <div className="space-y-8">
            {timeline.map((item, idx) => (
              <div key={idx} className="flex flex-col md:flex-row md:items-start gap-4 p-6 bg-gray-50 dark:bg-[#0A1422] rounded-xl border border-gray-200/60 dark:border-gray-800/60">
                <div className="md:w-1/4 flex items-center space-x-2 text-accent font-semibold text-sm">
                  <Calendar className="w-4 h-4" />
                  <span>{item.year}</span>
                </div>
                <div className="md:w-3/4 space-y-1">
                  <h3 className="font-heading text-lg font-bold text-primary dark:text-white">{item.title}</h3>
                  <p className="text-xs font-semibold uppercase tracking-wider text-secondary dark:text-emerald-400">{item.role}</p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm pt-2 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Credentials & Education */}
        <div className="pt-12 border-t border-gray-200 dark:border-gray-800 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 bg-gray-50 dark:bg-[#0A1422] rounded-2xl border border-gray-200/80 dark:border-gray-800/80 space-y-4">
            <div className="flex items-center space-x-3 text-primary dark:text-accent">
              <GraduationCap className="w-6 h-6" />
              <h3 className="font-heading text-xl font-bold">Education</h3>
            </div>
            <ul className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
              <li className="pb-2 border-b border-gray-200 dark:border-gray-800">
                <span className="font-bold">Master of Science in Infrastructure Finance</span>
                <p className="text-xs text-gray-500">London School of Economics / Imperial College</p>
              </li>
              <li>
                <span className="font-bold">Bachelor of Technology in Civil Engineering</span>
                <p className="text-xs text-gray-500">Indian Institute of Technology (IIT)</p>
              </li>
            </ul>
          </div>

          <div className="p-8 bg-gray-50 dark:bg-[#0A1422] rounded-2xl border border-gray-200/80 dark:border-gray-800/80 space-y-4">
            <div className="flex items-center space-x-3 text-primary dark:text-accent">
              <Award className="w-6 h-6" />
              <h3 className="font-heading text-xl font-bold">Certifications</h3>
            </div>
            <ul className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
              <li className="pb-2 border-b border-gray-200 dark:border-gray-800">
                <span className="font-bold">Certified Financial Analyst (CFA)</span>
                <p className="text-xs text-gray-500">CFA Institute</p>
              </li>
              <li>
                <span className="font-bold">Project Finance Modeling Specialist (FAST Standard)</span>
                <p className="text-xs text-gray-500">Financial Modeling Institute</p>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
}
