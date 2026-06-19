import { HomePage } from '@/components/Marketing';

export const metadata = {
  title: 'Enerflo.ai | CRM for UK Energy Brokers',
  description:
    'Enerflo.ai helps UK energy brokers manage customers, sites, quotes, contracts, renewals and commissions — all in one intelligent CRM platform.',
  alternates: {
    canonical: '/'
  },
  openGraph: {
    title: 'Enerflo.ai | CRM for UK Energy Brokers',
    description:
      'Your brokerage. On autopilot. The CRM built for UK energy brokers to manage quotes, contracts, renewals and commissions.',
    url: '/'
  }
};

export default function Page() {
  return <HomePage />;
}
