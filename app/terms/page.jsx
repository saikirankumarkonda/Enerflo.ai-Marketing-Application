import { TermsPage } from '@/components/Marketing';

export const metadata = {
  title: 'Terms of Service',
  description:
    'The terms that govern your access to and use of the Enerflo.ai platform for UK energy broker teams.',
  alternates: { canonical: '/terms' }
};

export default function Page() {
  return <TermsPage />;
}
