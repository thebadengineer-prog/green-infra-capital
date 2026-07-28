import Link from "next/link";
import { ArrowRight, Sparkles, BookOpen } from "lucide-react";
import { HeroSection } from "@/components/sections/hero-section";
import { FeaturedCategories } from "@/components/sections/featured-categories";
import { NewsletterSection } from "@/components/sections/newsletter-section";
import { ArticleCard } from "@/components/cards/article-card";
import { CaseStudyCard } from "@/components/cards/case-study-card";
import { FEATURED_ARTICLES, FEATURED_CASE_STUDIES } from "@/lib/data";

export default function HomePage() {
  const heroArticle = FEATURED_ARTICLES[0];
  const gridArticles = FEATURED_ARTICLES.slice(1, 5);

  return (
    <div className="space-y-0">
      
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Featured Categories */}
      <FeaturedCategories />

      {/* 3. Featured Article & Latest Insights */}
      <section className="py-20 bg-white dark:bg-[#050A11]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-4 border-b border-gray-200 dark:border-gray-800">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-widest text-secondary dark:text-accent">
                Latest Publications
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary dark:text-white mt-1">
                Executive Analysis & Technical Guides
              </h2>
            </div>
            <Link
              href="/blog"
              className="inline-flex items-center space-x-1 text-sm font-bold text-primary dark:text-accent hover:underline mt-2 md:mt-0"
            >
              <span>View All 100+ Articles</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Hero Featured Article */}
          <div className="mb-10">
            <ArticleCard article={heroArticle} featured={true} />
          </div>

          {/* Secondary Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {gridArticles.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>

        </div>
      </section>

      {/* 4. Featured Case Studies Section */}
      <section className="py-20 bg-gray-50 dark:bg-[#0A1422] border-t border-b border-gray-200/80 dark:border-gray-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-widest text-accent">
                Deal Intelligence
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary dark:text-white mt-1">
                Global Case Studies
              </h2>
            </div>
            <Link
              href="/case-studies"
              className="inline-flex items-center space-x-1 text-sm font-bold text-primary dark:text-accent hover:underline mt-2 md:mt-0"
            >
              <span>Explore All Case Studies</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {FEATURED_CASE_STUDIES.map((cs) => (
              <CaseStudyCard key={cs.id} caseStudy={cs} />
            ))}
          </div>

        </div>
      </section>

      {/* 5. Institutional Trust Placeholder / Quote */}
      <section className="py-16 bg-primary-dark text-white text-center border-t border-gray-800">
        <div className="max-w-4xl mx-auto px-4">
          <Sparkles className="w-8 h-8 text-accent mx-auto mb-4" />
          <blockquote className="font-heading text-xl md:text-2xl font-semibold leading-relaxed text-gray-200 mb-6">
            &ldquo;GreenInfraCapital bridge the gap between complex non-recourse debt engineering and actionable institutional intelligence across emerging and developed infrastructure markets.&rdquo;
          </blockquote>
          <div className="text-xs font-bold uppercase tracking-widest text-accent">
            GreenInfraCapital Research & Editorial Committee
          </div>
        </div>
      </section>

      {/* 6. Newsletter Subscription Capture */}
      <NewsletterSection />

    </div>
  );
}
