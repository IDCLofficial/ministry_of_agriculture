import { Metadata } from 'next';

const siteName = 'Imo State Ministry of Agriculture';
const siteDescription = 'Promoting sustainable agricultural development, farmer empowerment, and agribusiness support in Imo State for food security and economic growth.';
const siteUrl = 'https://imoagric.gov.ng';
const twitterHandle = '@ImoAgricMinistry';

// Default SEO configuration
export const defaultMetadata: Metadata = {
  title: {
    default: siteName,
    template: `%s | ${siteName}`
  },
  description: siteDescription,
  keywords: [
    'Imo State',
    'Agriculture',
    'Farming',
    'Nigeria',
    'Agribusiness',
    'Farmers',
    'Food Security',
    'Rural Development',
    'Agricultural Programs',
    'Farm Inputs',
    'Agricultural Training'
  ],
  authors: [{ name: 'Imo State Ministry of Agriculture' }],
  creator: 'Imo Digital City Limited',
  publisher: 'Imo Digital City Limited',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_NG',
    url: siteUrl,
    title: siteName,
    description: siteDescription,
    siteName: siteName,
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'Imo State Farmland',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteName,
    description: siteDescription,
    creator: twitterHandle,
    images: ['/logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
    shortcut: '/favicon-32x32.png',
  },
  manifest: '/site.webmanifest',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#1a1a1a' },
  ],
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
};

// Helper function to generate page-specific metadata
export const generatePageMetadata = ({
  title,
  description,
  path = '/',
  image = '/images/agriculture.jpg',
}: {
  title: string;
  description: string;
  path?: string;
  image?: string;
}): Metadata => ({
  title: `${title} | ${siteName}`,
  description,
  alternates: {
    canonical: path,
  },
  openGraph: {
    ...defaultMetadata.openGraph,
    title: `${title} | ${siteName}`,
    description,
    url: `${siteUrl}${path}`,
    images: [
      {
        url: image.startsWith('http') ? image : `${siteUrl}${image}`,
        width: 1200,
        height: 630,
        alt: title,
      },
    ],
  },
  twitter: {
    ...defaultMetadata.twitter,
    title: `${title} | ${siteName}`,
    description,
    images: [image.startsWith('http') ? image : `${siteUrl}${image}`],
  },
});