import { PrivacyPage } from '@/components/Marketing';

export const metadata = {
  title: 'Privacy Policy',
  description:
    'How Enerflo.ai collects, uses and protects personal data in line with UK GDPR and the Data Protection Act 2018.',
  alternates: { canonical: '/privacy' }
};

export default function Page() {
  return <PrivacyPage />;
}
