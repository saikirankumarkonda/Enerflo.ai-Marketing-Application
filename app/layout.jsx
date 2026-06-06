import './globals.css';
import { Poppins, Caveat } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['400', '500', '600', '700', '800']
});

const caveat = Caveat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-caveat',
  weight: ['600', '700']
});

const siteUrl = 'https://enerflo-ai.co.uk';

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Enerflo.ai | CRM for UK Energy Brokers',
    template: '%s | Enerflo.ai'
  },
  description:
    'Enerflo.ai is the CRM built for UK energy brokers to manage customers, sites, meters, quotes, contracts, renewals, documents and commissions in one simple platform.',
  applicationName: 'Enerflo.ai',
  authors: [{ name: 'IronWolfe Technologies' }],
  creator: 'IronWolfe Technologies',
  publisher: 'IronWolfe Technologies Ltd',
  keywords: [
    'energy broker CRM',
    'UK energy broker software',
    'energy brokerage CRM',
    'utility broker CRM',
    'contract renewal management',
    'MPAN MPRN management',
    'commission tracking software',
    'Enerflo.ai'
  ],
  category: 'business software',
  formatDetection: {
    email: false,
    address: false,
    telephone: false
  },
  alternates: {
    canonical: '/'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1
    }
  },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: siteUrl,
    siteName: 'Enerflo.ai',
    title: 'Enerflo.ai | CRM for UK Energy Brokers',
    description: 'Your brokerage. On autopilot. The CRM built for UK energy brokers.'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Enerflo.ai | CRM for UK Energy Brokers',
    description: 'Your brokerage. On autopilot. The CRM built for UK energy brokers.'
  }
};

export const viewport = {
  themeColor: '#10B981',
  width: 'device-width',
  initialScale: 1
};

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${siteUrl}/#organization`,
      name: 'Enerflo.ai',
      url: siteUrl,
      description:
        'CRM platform built specifically for UK energy brokers, developed by IronWolfe Technologies.',
      parentOrganization: {
        '@type': 'Organization',
        name: 'IronWolfe Technologies'
      },
      areaServed: {
        '@type': 'Country',
        name: 'United Kingdom'
      }
    },
    {
      '@type': 'WebSite',
      '@id': `${siteUrl}/#website`,
      url: siteUrl,
      name: 'Enerflo.ai',
      publisher: { '@id': `${siteUrl}/#organization` },
      inLanguage: 'en-GB'
    },
    {
      '@type': 'SoftwareApplication',
      name: 'Enerflo.ai',
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Web',
      offers: {
        '@type': 'Offer',
        price: '119',
        priceCurrency: 'GBP'
      }
    }
  ]
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-GB" className={`${poppins.variable} ${caveat.variable}`}>
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </body>
    </html>
  );
}
