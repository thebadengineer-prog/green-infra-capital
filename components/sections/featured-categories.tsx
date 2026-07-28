import Link from "next/link";
import { ArrowUpRight, TrendingUp, Building2, Zap, ShieldCheck, Layers } from "lucide-react";
import { CATEGORIES_LIST } from "@/lib/data";

const iconMap: Record<string, any> = {
  "project-finance": TrendingUp,
  "infrastructure": Building2,
  "renewable-energy": Zap,
  "climate-finance": ShieldCheck,
  "ppp": Layers,
};

export function FeaturedCategories() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-[#050A11] border-b border-gray-200/60 dark:border-gray-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-xs font-extrabold uppercase tracking-widest text-secondary dark:text-accent">
              Core Disciplines
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary dark:text-white mt-1">
              Explore Industry Knowledge
            </h2>
          </div>
          <p className="text-gray-600 dark:text-gray-400 text-sm max-w-md mt-2 md:mt-0">
            Targeted intelligence tailored for infrastructure lenders, equity sponsors, MDBs, and government authorities.
          </p>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CATEGORIES_LIST.map((category) => {
            const Icon = iconMap[category.slug] || TrendingUp;
            return (
              <Link
                key={category.slug}
                href={`/categories/${category.slug}`}
                className="group relative bg-white dark:bg-[#0A1422] rounded-2xl p-7 border border-gray-200/80 dark:border-gray-800/80 shadow-sm hover:shadow-soft hover:border-secondary/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-primary/5 dark:bg-white/5 flex items-center justify-center text-primary dark:text-accent group-hover:bg-primary group-hover:text-white dark:group-hover:bg-accent dark:group-hover:text-black transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-semibold text-gray-400 bg-gray-100 dark:bg-gray-800 px-2.5 py-1 rounded-md">
                      {category.count}
                    </span>
                  </div>

                  <h3 className="font-heading font-bold text-xl text-primary dark:text-white mb-2.5 group-hover:text-secondary dark:group-hover:text-accent transition-colors">
                    {category.name}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6">
                    {category.description}
                  </p>
                </div>

                <div className="flex items-center space-x-1 text-xs font-bold text-primary dark:text-accent group-hover:underline pt-4 border-t border-gray-100 dark:border-gray-800">
                  <span>Browse Sector Insights</span>
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </Link>
            );
          })}
        </div>

      </div>
    </section>
  );
}
