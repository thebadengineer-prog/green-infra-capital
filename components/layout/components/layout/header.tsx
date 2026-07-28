"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { 
  Menu, 
  X, 
  Sun, 
  Moon, 
  ChevronDown, 
  Search, 
  TrendingUp, 
  ShieldCheck, 
  Zap, 
  Building2, 
  Layers 
} from "lucide-react";

const navigation = {
  main: [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { 
      name: "Categories", 
      href: "/categories",
      children: [
        { name: "Project Finance", href: "/categories/project-finance", icon: TrendingUp },
        { name: "Infrastructure", href: "/categories/infrastructure", icon: Building2 },
        { name: "Renewable Energy", href: "/categories/renewable-energy", icon: Zap },
        { name: "Climate Finance", href: "/categories/climate-finance", icon: ShieldCheck },
        { name: "Public-Private Partnerships (PPP)", href: "/categories/ppp", icon: Layers },
      ]
    },
    { name: "Financial Models", href: "/financial-models" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Resources", href: "/resources" },
  ],
};

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-white/90 dark:bg-[#050A11]/90 backdrop-blur-md shadow-soft border-b border-gray-200/50 dark:border-gray-800/50 py-3" 
          : "bg-white dark:bg-[#050A11] border-b border-gray-100 dark:border-gray-900 py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 rounded-lg bg-primary dark:bg-primary-light flex items-center justify-center text-white font-heading font-bold text-xl shadow-md border border-accent/20 transition-transform group-hover:scale-105">
              G
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-bold text-lg leading-none tracking-tight text-primary dark:text-white">
                GreenInfra<span className="text-accent">Capital</span>
              </span>
              <span className="text-[10px] tracking-wider uppercase text-secondary font-semibold mt-1">
                Knowledge Platform
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigation.main.map((item) => {
              const isActive = pathname === item.href;
              
              if (item.children) {
                return (
                  <div 
                    key={item.name} 
                    className="relative"
                    onMouseEnter={() => setDropdownOpen(true)}
                    onMouseLeave={() => setDropdownOpen(false)}
                  >
                    <button 
                      className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                        pathname.startsWith("/categories") 
                          ? "text-primary dark:text-white font-semibold bg-gray-100 dark:bg-gray-800/60" 
                          : "text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800/40"
                      }`}
                    >
                      <span>{item.name}</span>
                      <ChevronDown className="w-4 h-4 text-gray-400 group-hover:text-primary" />
                    </button>

                    {/* Category Dropdown Menu */}
                    {dropdownOpen && (
                      <div className="absolute top-full left-0 w-72 bg-white dark:bg-[#0A1422] rounded-xl shadow-soft-lg border border-gray-100 dark:border-gray-800 py-2 z-50 animate-fade-in">
                        <div className="px-3 py-1.5 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                          Sectors & Disciplines
                        </div>
                        {item.children.map((child) => {
                          const Icon = child.icon;
                          return (
                            <Link
                              key={child.name}
                              href={child.href}
                              className="flex items-center space-x-3 px-4 py-2.5 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800/60 hover:text-primary dark:hover:text-white transition-colors"
                            >
                              <Icon className="w-4 h-4 text-secondary dark:text-accent" />
                              <span>{child.name}</span>
                            </Link>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive 
                      ? "text-primary dark:text-white font-semibold bg-gray-100 dark:bg-gray-800/60" 
                      : "text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800/40"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Bar */}
          <div className="hidden sm:flex items-center space-x-3">
            {/* Dark Mode Toggle */}
            {mounted && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label="Toggle Theme"
              >
                {theme === "dark" ? <Sun className="w-5 h-5 text-accent" /> : <Moon className="w-5 h-5 text-primary" />}
              </button>
            )}

            {/* Newsletter CTA Button */}
            <Link
              href="#newsletter"
              className="inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-white bg-primary hover:bg-primary-light dark:bg-secondary dark:hover:bg-secondary-light rounded-lg shadow-sm transition-all duration-200"
            >
              Subscribe
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center space-x-2">
            {mounted && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-2 rounded-lg text-gray-600 dark:text-gray-300"
                aria-label="Toggle Theme"
              >
                {theme === "dark" ? <Sun className="w-5 h-5 text-accent" /> : <Moon className="w-5 h-5 text-primary" />}
              </button>
            )}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
              aria-label="Open Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-[#050A11] px-4 pt-2 pb-6 space-y-2">
          {navigation.main.map((item) => (
            <div key={item.name}>
              <Link
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 text-base font-medium text-gray-800 dark:text-gray-200 hover:text-primary"
              >
                {item.name}
              </Link>
              {item.children && (
                <div className="pl-4 space-y-1 border-l-2 border-secondary/30 ml-2">
                  {item.children.map((child) => (
                    <Link
                      key={child.name}
                      href={child.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-1.5 text-sm text-gray-600 dark:text-gray-400 hover:text-primary"
                    >
                      {child.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="pt-4">
            <Link
              href="#newsletter"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full block text-center px-4 py-2.5 text-sm font-semibold text-white bg-primary rounded-lg"
            >
              Subscribe to Publication
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
