import { FeaturesPage } from '@/components/Marketing';

export const metadata = {
  title: 'Features',
  description:
    'Manage customer CRM, sites and meters, quotes, contracts, renewals, tasks, documents and commissions in one connected platform built for UK energy brokers.',
  alternates: { canonical: '/features' }
};

export default function Page() {
  return <FeaturesPage />;
}
