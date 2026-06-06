import { HelpPage } from '@/components/Marketing';

export const metadata = {
  title: 'Help Centre',
  description:
    'Setup guidance, workflow tips and UK-based support resources for your Enerflo.ai brokerage team. Find help with customers, meters, quotes, contracts and more.',
  alternates: { canonical: '/help' }
};

export default function Page() {
  return <HelpPage />;
}
