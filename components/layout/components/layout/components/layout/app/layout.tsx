import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/layout/providers";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://GreenInfraCapital.in"),
  title: {
    default: "GreenInfraCapital | Project Finance & Sustainable Infrastructure",
    template: "%s | GreenInfraCapital",
  },
  description: "Leading knowledge platform for Project Finance, Infrastructure Investment, Renewable Energy Finance, Climate Finance and Public-Private Partnerships.",
  keywords: [
    "Project Finance",
    "Infrastructure Investment",
    "Renewable Energy Finance",
    "Climate Finance",
    "Public-Private Partnerships",
    "DSCR",
    "Debt Sculpting",
  ],
  authors: [{ name: "GreenInfraCapital Editorial Team" }],
  creator: "GreenInfraCapital",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://GreenInfraCapital.in",
    title: "GreenInfraCapital | Project Finance & Sustainable Infrastructure",
    description: "Financing the Future of Sustainable Infrastructure. Expert insights, financial models, and case studies.",
    siteName: "GreenInfraCapital",
  },
  twitter: {
    card: "summary_large_image",
    title: "GreenInfraCapital | Sustainable Infrastructure Finance",
    description: "Expert insights on Project Finance, Renewable Energy, Climate Finance, and PPPs.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${poppins.variable}`}>
      <body className="flex flex-col min-h-screen bg-background text-foreground font-sans antialiased">
        <Providers>
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
