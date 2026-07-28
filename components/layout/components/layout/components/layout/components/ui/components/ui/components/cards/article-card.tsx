import Link from "next/link";
import { Clock, Calendar, ArrowUpRight } from "lucide-react";
import { CategoryBadge } from "@/components/ui/category-badge";

export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  author: {
    name: string;
    role?: string;
  };
  featured?: boolean;
}

interface ArticleCardProps {
  article: Article;
  featured?: boolean;
}

export function ArticleCard({ article, featured = false }: ArticleCardProps) {
  if (featured) {
    return (
      <article className="group relative bg-white dark:bg-[#0A1422] rounded-2xl border border-gray-200/80 dark:border-gray-800/80 p-8 shadow-soft hover:shadow-soft-lg transition-all duration-300 flex flex-col justify-between overflow-hidden">
        <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-primary via-secondary to-accent" />
        
        <div>
          <div className="flex items-center space-x-3 mb-4">
            <CategoryBadge category={article.category} size="md" />
            <span className="text-xs font-semibold uppercase tracking-widest text-accent">
              Featured Insight
            </span>
          </div>

          <Link href={`/blog/${article.slug}`}>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary dark:text-white group-hover:text-secondary dark:group-hover:text-accent transition-colors leading-tight mb-4">
              {article.title}
            </h2>
          </Link>

          <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed mb-6 line-clamp-3">
            {article.excerpt}
          </p>
        </div>

        <div className="flex items-center justify-between pt-6 border-t border-gray-100 dark:border-gray-800 text-xs text-gray-500 dark:text-gray-400">
          <div className="flex items-center space-x-4">
            <span className="font-medium text-gray-900 dark:text-gray-200">
              By {article.author.name}
            </span>
            <span className="flex items-center space-x-1">
              <Calendar className="w-3.5 h-3.5 text-gray-400" />
              <span>{article.date}</span>
            </span>
            <span className="flex items-center space-x-1">
              <Clock className="w-3.5 h-3.5 text-gray-400" />
              <span>{article.readTime}</span>
            </span>
          </div>

          <Link
            href={`/blog/${article.slug}`}
            className="inline-flex items-center space-x-1 text-primary dark:text-accent font-semibold group-hover:translate-x-0.5 transition-transform"
          >
            <span>Read Analysis</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </article>
    );
  }

  return (
    <article className="group bg-white dark:bg-[#0A1422] rounded-xl border border-gray-200/80 dark:border-gray-800/80 p-6 shadow-sm hover:shadow-soft hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between mb-3">
          <CategoryBadge category={article.category} />
          <span className="text-xs text-gray-400 flex items-center space-x-1">
            <Clock className="w-3 h-3" />
            <span>{article.readTime}</span>
          </span>
        </div>

        <Link href={`/blog/${article.slug}`}>
          <h3 className="font-heading font-semibold text-lg text-primary dark:text-white group-hover:text-secondary dark:group-hover:text-accent transition-colors line-clamp-2 mb-2.5">
            {article.title}
          </h3>
        </Link>

        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed line-clamp-2 mb-4">
          {article.excerpt}
        </p>
      </div>

      <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-800/60 text-xs text-gray-500 dark:text-gray-400">
        <span className="font-medium text-gray-700 dark:text-gray-300">
          {article.author.name}
        </span>
        <span className="flex items-center space-x-1">
          <Calendar className="w-3 h-3" />
          <span>{article.date}</span>
        </span>
      </div>
    </article>
  );
}
