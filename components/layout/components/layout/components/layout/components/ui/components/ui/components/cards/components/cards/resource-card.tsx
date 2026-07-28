import { Download, FileSpreadsheet, FileText, Calculator, Shield, ArrowRight } from "lucide-react";

export interface ResourceItem {
  id: string;
  title: string;
  description: string;
  category: string;
  type: "Excel Model" | "PDF Guide" | "Interactive Tool" | "Checklist";
  format?: string;
  downloadUrl?: string;
}

interface ResourceCardProps {
  resource: ResourceItem;
}

export function ResourceCard({ resource }: ResourceCardProps) {
  const getIcon = (type: ResourceItem["type"]) => {
    switch (type) {
      case "Excel Model":
        return <FileSpreadsheet className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />;
      case "Interactive Tool":
        return <Calculator className="w-6 h-6 text-blue-600 dark:text-blue-400" />;
      case "PDF Guide":
        return <FileText className="w-6 h-6 text-amber-600 dark:text-amber-400" />;
      default:
        return <Shield className="w-6 h-6 text-primary dark:text-accent" />;
    }
  };

  return (
    <div className="group bg-white dark:bg-[#0A1422] rounded-xl border border-gray-200/80 dark:border-gray-800/80 p-6 shadow-sm hover:shadow-soft hover:border-secondary/40 transition-all duration-200 flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="p-3 rounded-lg bg-gray-50 dark:bg-gray-800/80 border border-gray-100 dark:border-gray-700">
            {getIcon(resource.type)}
          </div>
          <span className="text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300">
            {resource.type}
          </span>
        </div>

        <h3 className="font-heading font-semibold text-lg text-primary dark:text-white mb-2 group-hover:text-secondary dark:group-hover:text-accent transition-colors">
          {resource.title}
        </h3>

        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6">
          {resource.description}
        </p>
      </div>

      <div className="pt-4 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between">
        <span className="text-xs font-medium text-gray-400">
          {resource.category}
        </span>
        <button className="inline-flex items-center space-x-2 px-3.5 py-2 text-xs font-semibold rounded-lg text-primary dark:text-white bg-gray-100 dark:bg-gray-800 group-hover:bg-primary group-hover:text-white dark:group-hover:bg-accent dark:group-hover:text-black transition-all">
          <span>Access Tool</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
