import { AboutPage } from '@/components/Marketing';

export const metadata = {
  title: 'About',
  description:
    'Enerflo.ai is a specialist CRM for UK energy brokers, developed by IronWolfe Technologies to replace scattered spreadsheets with one organised operating platform.',
  alternates: { canonical: '/about' }
};

export default function Page() {
  return <AboutPage />;
}
