import { PricingPage } from '@/components/Marketing';

export const metadata = {
  title: 'Pricing',
  description:
    'Simple, transparent pricing for UK energy broker teams. Starter, Growth and Scale plans with annual savings. Start small and scale as your brokerage grows.',
  alternates: { canonical: '/pricing' }
};

export default function Page() {
  return <PricingPage />;
}
