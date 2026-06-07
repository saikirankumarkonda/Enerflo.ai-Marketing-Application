'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  BarChart3,
  Building2,
  CalendarCheck,
  Check,
  CheckCircle2,
  ClipboardList,
  Coins,
  Database,
  FileCheck2,
  FileText,
  HelpCircle,
  LockKeyhole,
  Mail,
  MapPinned,
  Menu,
  Play,
  Rocket,
  Scale,
  ShieldCheck,
  Sparkles,
  UploadCloud,
  UsersRound,
  WandSparkles,
  X
} from 'lucide-react';

const navItems = [
  { label: 'Features', href: '/features' },
  { label: 'Use Cases', href: '/use-cases' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'About', href: '/about' },
  { label: 'Help', href: '/help' }
];

const featureCards = [
  {
    icon: UsersRound,
    title: 'Customer CRM',
    text: 'Centralise customer and contact information with complete history.'
  },
  {
    icon: MapPinned,
    title: 'Sites & Meters',
    text: 'Manage multiple sites, MPANs, MPRNs and usage in one place.'
  },
  {
    icon: FileText,
    title: 'Quotes & Proposals',
    text: 'Compare supplier quotes and create professional proposals.'
  },
  {
    icon: CalendarCheck,
    title: 'Contracts & Renewals',
    text: 'Track contracts, expiry dates and timely renewal alerts.'
  },
  {
    icon: ClipboardList,
    title: 'Tasks & Follow-ups',
    text: 'Stay on top of every follow-up and key activity.'
  },
  {
    icon: BarChart3,
    title: 'Dashboards & Reports',
    text: 'Real-time insights to make better business decisions.'
  }
];

const workflowItems = [
  {
    icon: WandSparkles,
    title: 'Capture & Manage Leads',
    text: 'Organise leads and turn opportunities into real business.'
  },
  {
    icon: Scale,
    title: 'Compare & Propose Best Options',
    text: 'Request, compare and select the best supplier quotes.'
  },
  {
    icon: FileCheck2,
    title: 'Win & Manage Contracts',
    text: 'Store contracts and documents securely with key dates.'
  },
  {
    icon: CalendarCheck,
    title: 'Renew & Grow Relationships',
    text: 'Never miss renewals and grow long-term customer value.'
  },
  {
    icon: BarChart3,
    title: 'Track Performance & Commissions',
    text: 'Monitor commissions and brokerage performance.'
  }
];

const pricingPlans = [
  {
    name: 'Starter',
    label: 'For independent brokers',
    priceMonthly: '149',
    priceAnnual: '119',
    users: '2 users included',
    cta: 'Get Started',
    href: '/book-demo',
    features: [
      'Customer CRM',
      'Sites & Meter Records',
      'Document Uploads',
      'Personal Dashboard',
      'Basic Admin Settings',
      'Email Support'
    ]
  },
  {
    name: 'Growth',
    label: 'For broker teams',
    priceMonthly: '499',
    priceAnnual: '399',
    users: '5 users included',
    cta: 'Book a Demo',
    href: '/book-demo',
    highlight: true,
    features: [
      'Everything in Starter',
      'Contracts & Renewal Pipeline',
      'Quotes Comparison & Proposals',
      'Tasks & Follow-ups',
      'Commission Tracking (Basic)',
      'CSV Import & Export',
      'Role-based Access',
      'Priority Support'
    ]
  },
  {
    name: 'Scale',
    label: 'For growing brokerages',
    priceMonthly: '999',
    priceAnnual: '799',
    users: '10 users included',
    cta: 'Talk to Sales',
    href: '/book-demo',
    features: [
      'Everything in Growth',
      'Advanced User Management',
      'Supplier & Tariff Import',
      'Advanced Reporting & KPIs',
      'Enhanced Audit Trail',
      'Priority Roadmap Access',
      'Quarterly Success Review',
      'Priority Support'
    ]
  }
];

const complianceCards = [
  {
    icon: ShieldCheck,
    title: 'Ofgem Aware',
    text: 'Supports brokers in meeting Ofgem expectations and industry best practices.'
  },
  {
    icon: LockKeyhole,
    title: 'Data Security',
    text: 'Role-based access, secure storage and audit trails help protect your data.'
  },
  {
    icon: GdprBadge,
    title: 'GDPR Conscious',
    text: 'Designed with privacy-first data handling and documentation workflows.'
  },
  {
    icon: UKFlag,
    title: 'UK Based Support',
    text: 'Friendly UK-based support when your brokerage needs help.'
  }
];

function UKFlag({ size = 38 }) {
  const w = size * 1.55;
  const h = size;
  return (
    <span
      className="quirky-sticker uk-flag-sticker"
      role="img"
      aria-label="UK Based Support"
    >
      <svg
        width={w}
        height={h}
        viewBox="0 0 60 36"
        aria-hidden="true"
      >
        <defs>
          <clipPath id="uk-flag-clip">
            <rect x="0.5" y="0.5" width="59" height="35" rx="5" />
          </clipPath>
        </defs>
        <g clipPath="url(#uk-flag-clip)">
          {/* Blue field */}
          <rect width="60" height="36" fill="#012169" />
          {/* White diagonals */}
          <path
            d="M0,0 L60,36 M60,0 L0,36"
            stroke="#fff"
            strokeWidth="8"
            strokeLinecap="round"
          />
          {/* Red diagonals on top */}
          <path
            d="M0,0 L60,36 M60,0 L0,36"
            stroke="#C8102E"
            strokeWidth="3.4"
            strokeLinecap="round"
          />
          {/* White cross */}
          <path
            d="M30,0 V36 M0,18 H60"
            stroke="#fff"
            strokeWidth="11"
            strokeLinecap="butt"
          />
          {/* Red cross */}
          <path
            d="M30,0 V36 M0,18 H60"
            stroke="#C8102E"
            strokeWidth="5"
            strokeLinecap="butt"
          />
        </g>
        {/* Quirky chunky border */}
        <rect
          x="1"
          y="1"
          width="58"
          height="34"
          rx="5"
          fill="none"
          stroke="#0b1e39"
          strokeWidth="2"
        />
      </svg>
    </span>
  );
}

function GdprBadge({ size = 96 }) {
  const stars = Array.from({ length: 12 }, (_, i) => {
    const angle = (i / 12) * Math.PI * 2 - Math.PI / 2;
    const r = 38;
    const cx = 50 + Math.cos(angle) * r;
    const cy = 50 + Math.sin(angle) * r;
    return { cx, cy };
  });
  return (
    <span
      className="quirky-sticker gdpr-sticker"
      role="img"
      aria-label="GDPR Compliant"
    >
      <svg width={size} height={size} viewBox="0 0 100 100" aria-hidden="true">
        {/* Outer ring */}
        <circle cx="50" cy="50" r="48" fill="#003399" />
        <circle
          cx="50"
          cy="50"
          r="48"
          fill="none"
          stroke="#0b1e39"
          strokeWidth="2"
        />
        {/* Yellow stars in a ring */}
        {stars.map((s, i) => (
          <Star key={i} cx={s.cx} cy={s.cy} r={4.4} fill="#FFCC00" />
        ))}
        {/* Inner sticker label */}
        <circle cx="50" cy="50" r="22" fill="#fff" />
        <circle
          cx="50"
          cy="50"
          r="22"
          fill="none"
          stroke="#0b1e39"
          strokeWidth="2"
        />
        <text
          x="50"
          y="48"
          textAnchor="middle"
          fontFamily="inherit"
          fontWeight="900"
          fontSize="11"
          fill="#003399"
        >
          GDPR
        </text>
        <text
          x="50"
          y="60"
          textAnchor="middle"
          fontFamily="inherit"
          fontWeight="700"
          fontSize="6"
          fill="#0b1e39"
          letterSpacing="0.5"
        >
          COMPLIANT
        </text>
      </svg>
    </span>
  );
}

function Star({ cx, cy, r, fill }) {
  const points = Array.from({ length: 10 }, (_, i) => {
    const angle = (Math.PI / 5) * i - Math.PI / 2;
    const radius = i % 2 === 0 ? r : r / 2.4;
    const x = cx + Math.cos(angle) * radius;
    const y = cy + Math.sin(angle) * radius;
    return `${x.toFixed(2)},${y.toFixed(2)}`;
  }).join(' ');
  return <polygon points={points} fill={fill} />;
}

function Logo({ footer = false }) {
  const className = footer
    ? 'brand-logo brand-logo--small brand-logo--footer'
    : 'brand-logo brand-logo--small';
  return (
    <Link className={className} href="/" aria-label="enerflo.ai home">
      <span className="brand-mark" aria-hidden="true">
        <Image
          src="/enerflo-ai-icon.png"
          alt=""
          width={64}
          height={64}
          priority
        />
      </span>
      <span className="brand-text">
        <span className="brand-title">
          <span className="brand-name">enerflo.</span>
          <span className="brand-ai">ai</span>
        </span>
        <span className="brand-caption">CRM for Energy Brokers</span>
      </span>
    </Link>
  );
}

function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const closeMenu = () => setOpen(false);

  return (
    <header className="site-header">
      <div className="container nav-shell">
        <Logo />
        <button
          type="button"
          className="nav-toggle"
          aria-expanded={open}
          aria-controls="primary-navigation"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
        </button>
        <nav
          id="primary-navigation"
          className={open ? 'nav-links is-open' : 'nav-links'}
          aria-label="Primary"
        >
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive ? 'page' : undefined}
                onClick={closeMenu}
              >
                {item.label}
              </Link>
            );
          })}
          <Link href="/book-demo" className="btn btn-primary nav-cta-mobile" onClick={closeMenu}>
            Book a Demo
          </Link>
        </nav>
        <Link href="/book-demo" className="btn btn-primary nav-cta">Book a Demo</Link>
      </div>
    </header>
  );
}

function VideoCard() {
  return (
    <div className="hero-video-wrap">
      <div className="sticky-note note-one">
        <span>Smarter<br />Workflows</span>
        <Check size={18} />
      </div>
      <div className="sticky-note note-two">
        <span>Never Miss<br />a Renewal</span>
        <CalendarCheck size={18} />
      </div>
      <div className="sticky-note note-three">
        <span>Better<br />Decisions</span>
        <BarChart3 size={18} />
      </div>
      <div className="sticky-note note-four">
        <span>More<br />Commissions</span>
        <Sparkles size={18} />
      </div>

      <div className="video-card">
        <div className="video-doodles">
          <span className="dash dash-a" />
          <span className="dash dash-b" />
          <span className="dash dash-c" />
        </div>
        <p className="video-title">See Enerflo.ai<br />in action</p>
        <button className="play-button" aria-label="Play feature video">
          <Play fill="currentColor" size={34} />
        </button>
        <div className="video-icons">
          <span><UsersRound size={24} /> Customers</span>
          <span><FileText size={24} /> Quotes</span>
          <span><CalendarCheck size={24} /> Renewals</span>
          <span><Coins size={24} /> Commission</span>
        </div>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section className="hero-section">
      <div className="container hero-grid">
        <div className="hero-copy">
          <h1>
            Your brokerage.<br />
            On <span>autopilot.</span>
          </h1>
          <p>
            Enerflo.ai helps UK energy brokers manage customers, sites, quotes, contracts,
            renewals and commissions - all in one intelligent CRM.
          </p>
          <div className="hero-actions">
            <Link href="/book-demo" className="btn btn-primary">Book a Demo <span aria-hidden="true">-&gt;</span></Link>
            <Link href="/features" className="btn btn-secondary">Explore Features</Link>
          </div>
          <div className="micro-badges" aria-label="Key benefits">
            {['Save Time', 'Increase Renewals', 'Grow Revenue', 'Stay Compliant'].map((label) => (
              <span key={label}><CheckCircle2 size={16} /> {label}</span>
            ))}
          </div>
        </div>
        <VideoCard />
      </div>
    </section>
  );
}

function FeatureGrid() {
  return (
    <section className="feature-strip" id="features">
      <div className="container feature-grid">
        {featureCards.map((card) => {
          const Icon = card.icon;
          return (
            <article className="feature-mini" key={card.title}>
              <div className="feature-icon"><Icon size={34} /></div>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}

function Workflow() {
  return (
    <section className="section section-flow">
      <div className="container flow-card">
        <div className="flow-intro">
          <h2>Built for the way<br />energy <span>brokers</span> work</h2>
          <p>From lead to renewal - everything connected, everything in one place.</p>
        </div>
        <div className="flow-steps">
          {workflowItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <article className="flow-step" key={item.title}>
                <div className="flow-top">
                  <Icon size={42} />
                  {index < workflowItems.length - 1 && <span className="flow-arrow" aria-hidden="true">-&gt;</span>}
                </div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Pricing({ compact = false }) {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <section className={compact ? 'section pricing-section compact-pricing' : 'section pricing-section'} id="pricing">
      <div className="container">
        <div className="section-heading pricing-heading">
          <div>
            <h2>Simple pricing. <span>Real value.</span></h2>
            <p>Choose the plan that fits your team today.</p>
          </div>
          <div className="billing-toggle" role="group" aria-label="Billing period">
            <button
              type="button"
              className={!isAnnual ? 'toggle-btn active' : 'toggle-btn'}
              onClick={() => setIsAnnual(false)}
            >
              Monthly
            </button>
            <button
              type="button"
              className={isAnnual ? 'toggle-btn active' : 'toggle-btn'}
              onClick={() => setIsAnnual(true)}
            >
              Annual <em>Save 20%</em>
            </button>
            <span className="billing-hint">Save more with annual billing!</span>
          </div>
        </div>

        <div className="pricing-grid">
          {pricingPlans.map((plan) => (
            <article className={plan.highlight ? 'pricing-card popular' : 'pricing-card'} key={plan.name}>
              {plan.highlight && <div className="popular-label">Most Popular</div>}
              <h3>{plan.name}</h3>
              <p className="plan-label">{plan.label}</p>
              <div className="price-row">
                <span className="currency">&pound;</span>
                <strong>{isAnnual ? plan.priceAnnual : plan.priceMonthly}</strong>
                <span className="per">/month{isAnnual && <><br />billed annually</>}</span>
              </div>
              <div className="users-pill">{plan.users}</div>
              <ul className="plan-features">
                {plan.features.map((feature) => (
                  <li key={feature}><CheckCircle2 size={16} /> {feature}</li>
                ))}
              </ul>
              <Link href={plan.href} className={plan.highlight ? 'btn btn-primary full' : 'btn btn-outline full'}>
                {plan.cta}
              </Link>
            </article>
          ))}
        </div>

        <div className="pricing-note">
          <HelpCircle size={18} />
          <span>Extra users: Growth &pound;69/user/month</span>
          <span>Scale &pound;89/user/month</span>
          <span>All prices exclude VAT.</span>
        </div>
      </div>
    </section>
  );
}

function Compliance() {
  return (
    <section className="section compliance-section">
      <div className="container compliance-card">
        <div className="compliance-intro">
          <h2>Built with compliance in mind</h2>
          <p>Enerflo.ai is designed to help brokers meet regulatory expectations and operate with confidence.</p>
        </div>
        <div className="compliance-grid">
          {complianceCards.map((card) => {
            const Icon = card.icon;
            return (
              <article className="compliance-item" key={card.title}>
                <Icon size={38} />
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="cta-section">
      <div className="container cta-card">
        <div className="rocket-doodle">
          <Rocket size={84} />
          <span className="cloud cloud-a" />
          <span className="cloud cloud-b" />
        </div>
        <h2>Ready to transform<br /><span>your brokerage?</span></h2>
        <p>Join energy brokers across the UK who want to save time, reduce risk and grow revenue with Enerflo.ai.</p>
        <Link href="/book-demo" className="btn btn-primary">Book Your Demo <span aria-hidden="true">-&gt;</span></Link>
      </div>
    </section>
  );
}

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Logo footer />
          <p>Enerflo.ai is a CRM platform built specifically for UK energy brokers to simplify operations, improve visibility and drive growth.</p>
          <div className="socials" aria-label="Social links">
            <span>in</span><span>@</span><span>yt</span><span>x</span>
          </div>
        </div>
        <div className="footer-col">
          <h3>Product</h3>
          <Link href="/features">Features</Link>
          <Link href="/use-cases">Use Cases</Link>
          <Link href="/pricing">Pricing</Link>
          <Link href="/book-demo">Book a Demo</Link>
        </div>
        <div className="footer-col">
          <h3>Resources</h3>
          <Link href="/help">Help Centre</Link>
          <Link href="/gdpr">GDPR Compliance</Link>
          <Link href="/help#faqs">FAQs</Link>
          <Link href="/help#support">Support</Link>
        </div>
        <div className="footer-col">
          <h3>Company</h3>
          <Link href="/about">About Us</Link>
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/terms">Terms of Service</Link>
          <Link href="/book-demo">Contact Us</Link>
        </div>
        <div className="footer-parent">
          <p>Built by</p>
          <strong>IronWolfe Technologies</strong>
          <p className="copyright">&copy; {year} IronWolfe Technologies Ltd.<br />All rights reserved.</p>
        </div>
      </div>
      <div className="container footer-bottom">
        <p className="footer-trademark">
          <span className="brand-title brand-title--inline">
            <span className="brand-name">enerflo.</span>
            <span className="brand-ai">ai</span>
          </span>
          <span className="footer-trademark-text">
            &copy; {year} enerflo.ai. The enerflo.ai name, logo and icon are trademarks of IronWolfe Technologies Ltd. All rights reserved.
          </span>
        </p>
      </div>
    </footer>
  );
}

function PageShell({ children }) {
  return (
    <>
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <Header />
      {children}
      <Footer />
    </>
  );
}

export function HomePage() {
  return (
    <PageShell>
      <main id="main-content">
        <Hero />
        <FeatureGrid />
        <Workflow />
        <Pricing />
        <Compliance />
        <CTA />
      </main>
    </PageShell>
  );
}

export function FeaturesPage() {
  return (
    <PageShell>
      <main id="main-content" className="inner-page">
        <div className="container inner-hero">
          <span className="eyebrow">Features</span>
          <h1>Everything your brokerage needs in one place.</h1>
          <p>Organise customer data, quotes, contracts, renewals, tasks, documents and commissions without spreadsheet chaos.</p>
        </div>
        <FeatureGrid />
        <Workflow />
        <Compliance />
        <CTA />
      </main>
    </PageShell>
  );
}

export function PricingPage() {
  return (
    <PageShell>
      <main id="main-content" className="inner-page">
        <div className="container inner-hero center">
          <span className="eyebrow">Pricing</span>
          <h1>Simple plans for energy broker teams.</h1>
          <p>Start with the plan that fits today, then scale as your team and renewal pipeline grow.</p>
        </div>
        <Pricing />
        <OnboardingBlock />
        <CTA />
      </main>
    </PageShell>
  );
}

function OnboardingBlock() {
  return (
    <section className="section onboarding-section">
      <div className="container onboarding-card">
        <div>
          <span className="eyebrow">Onboarding</span>
          <h2>Setup tailored to your data and workflow.</h2>
          <p>One-time onboarding may apply depending on your data, users, migration and setup requirements.</p>
        </div>
        <div className="onboarding-grid">
          <article><strong>Starter Setup</strong><span>From &pound;299</span><p>Basic account setup, one training session and 7 days post-live support.</p></article>
          <article><strong>Growth Launch</strong><span>From &pound;999</span><p>Data import support, workflow setup, two training sessions and 30 days support.</p></article>
          <article><strong>Scale Migration</strong><span>From &pound;2,499</span><p>Advanced migration, user setup, reporting configuration and 60 days support.</p></article>
        </div>
      </div>
    </section>
  );
}

export function UseCasesPage() {
  const cases = [
    ['Independent Broker', 'A cleaner way to manage customers, sites, meters and documents.'],
    ['Small Broker Team', 'Manage quotes, contracts, renewals and follow-ups together.'],
    ['Growing Brokerage', 'Add reporting, imports, team controls and operational visibility.']
  ];
  return (
    <PageShell>
      <main id="main-content" className="inner-page">
        <div className="container inner-hero">
          <span className="eyebrow">Use Cases</span>
          <h1>Built for different broker workflows.</h1>
          <p>Whether you are a solo broker or a growing firm, Enerflo.ai helps you work in a clearer, more connected way.</p>
        </div>
        <section className="section">
          <div className="container usecase-grid">
            {cases.map(([title, text]) => (
              <article className="usecase-card" key={title}>
                <Building2 size={36} />
                <h2>{title}</h2>
                <p>{text}</p>
                <Link href="/book-demo">Discuss this use case -&gt;</Link>
              </article>
            ))}
          </div>
        </section>
        <CTA />
      </main>
    </PageShell>
  );
}

export function AboutPage() {
  return (
    <PageShell>
      <main id="main-content" className="inner-page">
        <div className="container inner-hero">
          <span className="eyebrow">About Enerflo.ai</span>
          <h1>A specialist CRM for UK energy brokers.</h1>
          <p>Enerflo.ai is developed by IronWolfe Technologies to help broker teams replace scattered spreadsheets with one organised operating platform.</p>
        </div>
        <section className="section">
          <div className="container about-card">
            <Database size={42} />
            <h2>Designed around broker reality.</h2>
            <p>Customers, sites, meters, quotes, contracts, renewals, tasks, documents and commissions all belong together. Enerflo.ai brings them into one carefully designed CRM experience.</p>
          </div>
        </section>
        <CTA />
      </main>
    </PageShell>
  );
}

export function HelpPage() {
  const topics = ['Getting started', 'Customers and contacts', 'Sites and meters', 'Quotes and proposals', 'Contracts and renewals', 'Tasks and follow-ups', 'Imports and exports', 'Billing and pricing'];
  const faqs = [
    {
      q: 'Is Enerflo.ai built for UK energy brokers?',
      a: 'Yes. Every workflow - from MPAN/MPRN site records to contract renewals and commission tracking - is designed around UK energy brokerage operations.'
    },
    {
      q: 'How long does onboarding take?',
      a: 'Most brokerages are up and running within 1-2 weeks. Larger teams with migrations from spreadsheets or other CRMs typically take 3-6 weeks with our Growth Launch or Scale Migration packages.'
    },
    {
      q: 'Can I import my existing customer data?',
      a: 'Yes. Growth and Scale plans include CSV import and export, and our team can help with mapping data from spreadsheets or other tools.'
    },
    {
      q: 'Is my data secure and GDPR compliant?',
      a: 'Data is encrypted in transit and at rest, role-based access controls limit who sees what, and audit trails capture sensitive actions. See our GDPR Compliance page for details.'
    },
    {
      q: 'Do you offer a free trial?',
      a: 'We offer a personalised demo so we can show you Enerflo.ai against your real workflow. Book a demo and we will tailor it to your brokerage.'
    }
  ];
  return (
    <PageShell>
      <main id="main-content" className="inner-page">
        <div className="container inner-hero">
          <span className="eyebrow">Help Centre</span>
          <h1>Support for your Enerflo.ai journey.</h1>
          <p>Find setup guidance, workflow tips and support resources for your brokerage team.</p>
        </div>
        <section className="section">
          <div className="container help-grid">
            {topics.map((topic) => (
              <article className="help-card" key={topic}>
                <HelpCircle size={28} />
                <h2>{topic}</h2>
                <p>Guides and support articles coming soon.</p>
              </article>
            ))}
          </div>
        </section>
        <section className="section" id="faqs">
          <div className="container faq-wrap">
            <div className="faq-intro">
              <span className="eyebrow">FAQs</span>
              <h2>Frequently asked questions.</h2>
              <p>Short answers to the questions broker teams ask before getting started.</p>
            </div>
            <div className="faq-list">
              {faqs.map((item) => (
                <details className="faq-item" key={item.q}>
                  <summary>{item.q}</summary>
                  <p>{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
        <section className="section" id="support">
          <div className="container support-card">
            <Mail size={34} />
            <h2>Need help?</h2>
            <p>Email us at <strong>hello@enerflo-ai.co.uk</strong></p>
          </div>
        </section>
      </main>
    </PageShell>
  );
}

export function BookDemoPage() {
  return (
    <PageShell>
      <main id="main-content" className="inner-page demo-page">
        <div className="container demo-grid">
          <div className="inner-hero demo-copy">
            <span className="eyebrow">Book a Demo</span>
            <h1>See how Enerflo.ai fits your brokerage.</h1>
            <p>Tell us about your current workflow and we will show you how Enerflo.ai can help manage customers, quotes, contracts, renewals and commissions.</p>
            <ul className="demo-list">
              <li><CheckCircle2 size={18} /> Review your current workflow</li>
              <li><CheckCircle2 size={18} /> Recommend the right plan</li>
              <li><CheckCircle2 size={18} /> Discuss onboarding and data migration</li>
            </ul>
          </div>
          <DemoForm />
        </div>
      </main>
    </PageShell>
  );
}

function DemoForm() {
  const [values, setValues] = useState({
    name: '',
    business: '',
    email: '',
    users: '',
    challenge: ''
  });
  const [company, setCompany] = useState(''); // honeypot, never shown to humans
  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState('');

  const update = (field) => (event) =>
    setValues((prev) => ({ ...prev, [field]: event.target.value }));

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (status === 'submitting') return;

    setStatus('submitting');
    setErrorMessage('');

    try {
      const response = await fetch('/api/book-demo', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ ...values, company })
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok || !data.ok) {
        setErrorMessage(data.error || 'Something went wrong. Please try again.');
        setStatus('error');
        return;
      }

      setStatus('success');
    } catch {
      setErrorMessage('Network error. Please check your connection and try again.');
      setStatus('error');
    }
  };

  const reset = () => {
    setValues({ name: '', business: '', email: '', users: '', challenge: '' });
    setCompany('');
    setErrorMessage('');
    setStatus('idle');
  };

  if (status === 'success') {
    return (
      <div className="demo-form demo-success" role="status" aria-live="polite">
        <CheckCircle2 size={48} />
        <h2>Thanks, {values.name.split(' ')[0] || 'we got it'}!</h2>
        <p>
          Your demo request is in. We have emailed you a confirmation at{' '}
          <strong>{values.email}</strong> and a member of the team will be in
          touch within one business day. If you do not see the confirmation,
          please check your spam folder.
        </p>
        <button type="button" className="btn btn-outline full" onClick={reset}>
          Send another request
        </button>
      </div>
    );
  }

  const isSubmitting = status === 'submitting';

  return (
    <form
      className="demo-form"
      aria-labelledby="demo-form-heading"
      onSubmit={handleSubmit}
      noValidate
    >
      <h2 id="demo-form-heading" className="demo-form-heading">Request your demo</h2>
      {/* Honeypot: hidden from real users, bots tend to fill it in. */}
      <div aria-hidden="true" style={{ position: 'absolute', left: '-9999px', width: 1, height: 1, overflow: 'hidden' }}>
        <label htmlFor="demo-company">
          Company (leave blank)
          <input
            id="demo-company"
            name="company"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            value={company}
            onChange={(event) => setCompany(event.target.value)}
          />
        </label>
      </div>
      <label htmlFor="demo-name">
        Name
        <input
          id="demo-name"
          name="name"
          type="text"
          autoComplete="name"
          placeholder="Your name"
          required
          value={values.name}
          onChange={update('name')}
        />
      </label>
      <label htmlFor="demo-business">
        Business name
        <input
          id="demo-business"
          name="business"
          type="text"
          autoComplete="organization"
          placeholder="Brokerage name"
          required
          value={values.business}
          onChange={update('business')}
        />
      </label>
      <label htmlFor="demo-email">
        Email
        <input
          id="demo-email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="you@company.co.uk"
          required
          value={values.email}
          onChange={update('email')}
        />
      </label>
      <label htmlFor="demo-users">
        Number of users
        <select
          id="demo-users"
          name="users"
          required
          value={values.users}
          onChange={update('users')}
        >
          <option value="" disabled>Select range</option>
          <option>1-2</option>
          <option>3-5</option>
          <option>6-10</option>
          <option>10+</option>
        </select>
      </label>
      <label htmlFor="demo-challenge">
        Main challenge
        <select
          id="demo-challenge"
          name="challenge"
          required
          value={values.challenge}
          onChange={update('challenge')}
        >
          <option value="" disabled>Select challenge</option>
          <option>Renewals</option>
          <option>Quotes</option>
          <option>Contracts</option>
          <option>Commissions</option>
          <option>Spreadsheets</option>
        </select>
      </label>
      {status === 'error' && errorMessage && (
        <p className="form-note" role="alert" style={{ color: '#b91c1c' }}>
          {errorMessage}
        </p>
      )}
      <button
        className="btn btn-primary full"
        type="submit"
        disabled={isSubmitting}
        aria-busy={isSubmitting}
      >
        {isSubmitting ? 'Sending…' : 'Submit Request'}
      </button>
      <p className="form-note">
        We will only use these details to contact you about your demo.
      </p>
    </form>
  );
}

function LegalPage({ eyebrow, title, intro, updated, sections, badge }) {
  return (
    <PageShell>
      <main id="main-content" className="inner-page legal-page">
        <div className="container inner-hero">
          {badge && <div className="legal-hero-badge">{badge}</div>}
          <span className="eyebrow">{eyebrow}</span>
          <h1>{title}</h1>
          {intro && <p>{intro}</p>}
          {updated && <p className="legal-meta">Last updated: {updated}</p>}
        </div>
        <section className="section">
          <div className="container legal-card">
            {sections.map((section) => (
              <article className="legal-section" key={section.heading}>
                <h2>{section.heading}</h2>
                {section.body.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
                {section.list && (
                  <ul className="legal-list">
                    {section.list.map((item) => (
                      <li key={item}><CheckCircle2 size={16} /> {item}</li>
                    ))}
                  </ul>
                )}
              </article>
            ))}
            <article className="legal-section legal-contact">
              <h2>Questions?</h2>
              <p>Email us at <strong>hello@enerflo-ai.co.uk</strong> and our team will get back to you.</p>
            </article>
          </div>
        </section>
        <CTA />
      </main>
    </PageShell>
  );
}

export function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="Privacy Policy"
      title="How we handle your data."
      intro="Enerflo.ai is operated by IronWolfe Technologies Ltd. We respect your privacy and protect the personal data you share with us."
      updated="6 June 2026"
      sections={[
        {
          heading: 'Information we collect',
          body: [
            'We collect information you provide directly to us, such as when you book a demo, contact support, or use the Enerflo.ai platform. This includes name, business details, email address and any details you submit through our forms.'
          ],
          list: [
            'Account and contact information',
            'Brokerage and team information you upload',
            'Usage and diagnostic data to improve the service',
            'Communications you exchange with our support team'
          ]
        },
        {
          heading: 'How we use information',
          body: [
            'We use your information to provide, maintain and improve Enerflo.ai, to communicate with you about your account, and to comply with our legal obligations under UK GDPR and the Data Protection Act 2018.'
          ]
        },
        {
          heading: 'Sharing and disclosure',
          body: [
            'We do not sell your personal data. We share information only with trusted processors who help us operate the service, and only when required by law or with your consent.'
          ]
        },
        {
          heading: 'Your rights',
          body: [
            'Under UK GDPR you have the right to access, correct or delete your personal data, restrict or object to processing, and request data portability.'
          ]
        },
        {
          heading: 'Data retention',
          body: [
            'We retain personal data only for as long as necessary to deliver the service, meet our legal obligations and resolve disputes.'
          ]
        }
      ]}
    />
  );
}

export function TermsPage() {
  return (
    <LegalPage
      eyebrow="Terms of Service"
      title="The basics of using Enerflo.ai."
      intro="These Terms govern your access to and use of Enerflo.ai. By using the platform you agree to these Terms."
      updated="6 June 2026"
      sections={[
        {
          heading: 'Your account',
          body: [
            'You are responsible for the activity that happens on your account and for keeping your credentials confidential. You must provide accurate information and notify us of any unauthorised use.'
          ]
        },
        {
          heading: 'Acceptable use',
          body: [
            'You agree to use Enerflo.ai in compliance with applicable laws, including UK GDPR, Ofgem guidance and industry best practices. You will not misuse the service, interfere with its operation, or attempt to access it through means other than the interface we provide.'
          ]
        },
        {
          heading: 'Subscriptions and billing',
          body: [
            'Paid plans are billed monthly or annually in advance. Prices exclude VAT. You can change or cancel your plan in line with the terms of your subscription.'
          ]
        },
        {
          heading: 'Your data',
          body: [
            'You retain ownership of the data you upload to Enerflo.ai. We process it on your behalf in accordance with our Privacy Policy and Data Processing terms.'
          ]
        },
        {
          heading: 'Service availability',
          body: [
            'We work hard to keep Enerflo.ai available, but the service is provided on an "as available" basis. We are not liable for indirect or consequential losses arising from use of the platform.'
          ]
        },
        {
          heading: 'Changes to these terms',
          body: [
            'We may update these Terms from time to time. We will notify you of material changes and post the updated version on this page.'
          ]
        }
      ]}
    />
  );
}

export function GdprPage() {
  return (
    <LegalPage
      eyebrow="GDPR Compliance"
      title="Built with UK GDPR in mind."
      intro="Enerflo.ai is designed to help broker teams handle customer data with care, in line with UK GDPR and the Data Protection Act 2018."
      updated="6 June 2026"
      badge={<GdprBadge size={120} />}
      sections={[
        {
          heading: 'Roles',
          body: [
            'When you use Enerflo.ai to manage your customer records, you are the data controller and IronWolfe Technologies Ltd acts as your data processor.'
          ]
        },
        {
          heading: 'Lawful basis and consent',
          body: [
            'Enerflo.ai supports broker workflows where lawful basis for processing customer data is established through contract, legal obligation or legitimate interest. The platform includes fields to record consent and communication preferences.'
          ]
        },
        {
          heading: 'Security measures',
          body: [
            'We apply organisational and technical safeguards to protect personal data.'
          ],
          list: [
            'Role-based access controls',
            'Encryption in transit and at rest',
            'Audit trails for sensitive actions',
            'Regular backups and tested restores',
            'Least-privilege access for staff'
          ]
        },
        {
          heading: 'Data subject rights',
          body: [
            'The platform provides tools to help you respond to subject access, rectification and erasure requests within statutory deadlines.'
          ]
        },
        {
          heading: 'Sub-processors',
          body: [
            'We use a limited set of vetted sub-processors to host and operate the service. A current list is available on request.'
          ]
        },
        {
          heading: 'International transfers',
          body: [
            'Customer data is hosted in the United Kingdom. Where any limited transfers occur, they are protected by appropriate safeguards such as the UK International Data Transfer Addendum.'
          ]
        }
      ]}
    />
  );
}
