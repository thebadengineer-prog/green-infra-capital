import Link from "next/link";
import { Globe, Linkedin, Twitter, Mail, ArrowRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#08182E] text-white border-t border-gray-800 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-gray-800">
          
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-white font-heading font-bold text-xl border border-accent/30">
                G
              </div>
              <span className="font-heading font-bold text-xl tracking-tight text-white">
                GreenInfra<span className="text-accent">Capital</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              The premier knowledge platform for Project Finance, Sustainable Infrastructure Investment, Renewable Energy Structuring, and Climate Finance.
            </p>
            <div className="flex items-center space-x-4 pt-2">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-white/5 hover:bg-accent/20 hover:text-accent transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-white/5 hover:bg-accent/20 hover:text-accent transition-colors" aria-label="Twitter">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="mailto:contact@greeninfracapital.in" className="p-2 rounded-full bg-white/5 hover:bg-accent/20 hover:text-accent transition-colors" aria-label="Email">
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links Column 1 */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-accent mb-4">
              Core Disciplines
            </h3>
            <ul className="space-y-2.5 text-sm text-gray-300">
              <li><Link href="/categories/project-finance" className="hover:text-white transition-colors">Project Finance</Link></li>
              <li><Link href="/categories/infrastructure" className="hover:text-white transition-colors">Infrastructure</Link></li>
              <li><Link href="/categories/renewable-energy" className="hover:text-white transition-colors">Renewable Energy</Link></li>
              <li><Link href="/categories/climate-finance" className="hover:text-white transition-colors">Climate Finance</Link></li>
              <li><Link href="/categories/ppp" className="hover:text-white transition-colors">Public-Private Partnerships</Link></li>
            </ul>
          </div>

          {/* Quick Links Column 2 */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-accent mb-4">
              Resources & Tools
            </h3>
            <ul className="space-y-2.5 text-sm text-gray-300">
              <li><Link href="/financial-models" className="hover:text-white transition-colors">Financial Models</Link></li>
              <li><Link href="/case-studies" className="hover:text-white transition-colors">Case Studies</Link></li>
              <li><Link href="/resources" className="hover:text-white transition-colors">DSCR Calculator</Link></li>
              <li><Link href="/resources" className="hover:text-white transition-colors">PPP Risk Matrix</Link></li>
              <li><Link href="/blog" className="hover:text-white transition-colors">All Articles</Link></li>
            </ul>
          </div>

          {/* Quick Links Column 3 */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-accent mb-4">
              Institutional
            </h3>
            <ul className="space-y-2.5 text-sm text-gray-300">
              <li><Link href="/about" className="hover:text-white transition-colors">About the Platform</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link href="/legal/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/legal/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
            </ul>
          </div>

        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-gray-400 gap-4">
          <p>© {new Date().getFullYear()} GreenInfraCapital.in. All rights reserved.</p>
          <div className="flex items-center space-x-6">
            <span>Domain: https://GreenInfraCapital.in</span>
            <span>•</span>
            <span className="flex items-center space-x-1">
              <Globe className="w-3.5 h-3.5 text-secondary-light" />
              <span>Global Intelligence Standard</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
