import { BookDemoPage } from '@/components/Marketing';

export const metadata = {
  title: 'Book a Demo',
  description:
    'See how Enerflo.ai fits your brokerage. Book a personalised demo to review your workflow, find the right plan and discuss onboarding and data migration.',
  alternates: { canonical: '/book-demo' }
};

export default function Page() {
  return <BookDemoPage />;
}
