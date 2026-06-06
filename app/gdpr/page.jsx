import { GdprPage } from '@/components/Marketing';

export const metadata = {
  title: 'GDPR Compliance',
  description:
    'How Enerflo.ai is designed to help UK energy brokers handle customer data in line with UK GDPR and the Data Protection Act 2018.',
  alternates: { canonical: '/gdpr' }
};

export default function Page() {
  return <GdprPage />;
}
