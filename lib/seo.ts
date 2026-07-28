import { Metadata } from "next";

export const SITE_CONFIG = {
  name: "GreenInfraCapital",
  domain: "https://greeninfracapital.in",
  description:
    "Institutional research, non-recourse debt financial modeling, and climate finance intelligence for sustainable infrastructure.",
  author: "GreenInfraCapital Intelligence Desk",
  twitterHandle: "@GreenInfraCap",
  defaultOgImage: "https://greeninfracapital.in/og-image.jpg",
};

interface MetadataProps {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  type?: "website" | "article";
  publishedTime?: string;
  authors?: string[];
}

export function constructMetadata({
  title,
  description = SITE_CONFIG.description,
  path = "",
  image = SITE_CONFIG.defaultOgImage,
  type = "website",
  publishedTime,
  authors,
}: MetadataProps = {}): Metadata {
  const canonicalUrl = `${SITE_CONFIG.domain}${path}`;
  const fullTitle = title
    ? `${title} | ${SITE_CONFIG.name}`
    : `${SITE_CONFIG.name} | Sustainable Infrastructure & Climate Finance`;

  return {
    title: fullTitle,
    description,
    metadataBase: new URL(SITE_CONFIG.domain),
    alternates: {
      canonical: canonicalUrl,
    },
    authors: authors ? authors.map((name) => ({ name })) : [{ name: SITE_CONFIG.author }],
    openGraph: {
      title: fullTitle,
      description,
      url: canonicalUrl,
      siteName: SITE_CONFIG.name,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title || SITE_CONFIG.name,
        },
      ],
      type,
      ...(publishedTime && { publishedTime }),
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image],
      creator: SITE_CONFIG.twitterHandle,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}
