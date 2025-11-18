import { createFileRoute, Link } from '@tanstack/react-router'
import { Check, X, Zap } from 'lucide-react'
import Breadcrumbs from '../components/Breadcrumbs'

export const Route = createFileRoute('/pricing')({
  component: PricingPage,
})

function PricingPage() {
  const plans = [
    {
      name: 'Free',
      price: '$0',
      period: '/month',
      description: 'Perfect for testing and small projects',
      emails: '1,000 emails/month',
      features: [
        { name: 'SMTP & REST API access', included: true },
        { name: 'Basic email templates', included: true },
        { name: 'Real-time analytics', included: true },
        { name: 'Webhook notifications', included: true },
        { name: 'Email support (48h response)', included: true },
        { name: 'Custom sending domain', included: false },
        { name: 'Dedicated IP address', included: false },
        { name: 'Priority support', included: false },
        { name: 'SLA guarantee', included: false },
      ],
      cta: 'Start Free',
      ctaLink: '/contact',
      popular: false,
    },
    {
      name: 'Starter',
      price: '$29',
      period: '/month',
      description: 'For growing startups and small businesses',
      emails: '50,000 emails/month',
      features: [
        { name: 'Everything in Free, plus:', included: true, bold: true },
        { name: 'Advanced templates & editor', included: true },
        { name: 'Custom sending domain', included: true },
        { name: 'A/B testing', included: true },
        { name: 'Team collaboration (3 users)', included: true },
        { name: 'Email support (24h response)', included: true },
        { name: 'Dedicated IP address', included: false },
        { name: 'Priority support', included: false },
        { name: '99.99% SLA', included: false },
      ],
      cta: 'Start Trial',
      ctaLink: '/contact',
      popular: true,
    },
    {
      name: 'Growth',
      price: '$99',
      period: '/month',
      description: 'For scaling companies with serious volume',
      emails: '250,000 emails/month',
      features: [
        { name: 'Everything in Starter, plus:', included: true, bold: true },
        { name: 'Team collaboration (10 users)', included: true },
        { name: 'Advanced deliverability tools', included: true },
        { name: 'Custom DMARC monitoring', included: true },
        { name: 'Dedicated account manager', included: true },
        { name: 'Priority support (4h response)', included: true },
        { name: 'Phone support', included: true },
        { name: 'Dedicated IP (add-on available)', included: true },
        { name: '99.99% SLA', included: true },
      ],
      cta: 'Start Trial',
      ctaLink: '/contact',
      popular: false,
    },
    {
      name: 'Business',
      price: '$299',
      period: '/month',
      description: 'For enterprises needing maximum reliability',
      emails: '1,000,000 emails/month',
      features: [
        { name: 'Everything in Growth, plus:', included: true, bold: true },
        { name: 'Unlimited team members', included: true },
        { name: '2 dedicated IP addresses', included: true },
        { name: 'Custom integrations & webhooks', included: true },
        { name: 'Advanced API rate limits', included: true },
        { name: 'Priority support (1h response)', included: true },
        { name: 'Dedicated Slack channel', included: true },
        { name: 'Quarterly business reviews', included: true },
        { name: '99.995% SLA', included: true },
      ],
      cta: 'Contact Sales',
      ctaLink: '/contact',
      popular: false,
    },
  ]

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <Breadcrumbs items={[{ label: 'Pricing' }]} />

        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Simple, Transparent Pricing
          </h1>
          <p className="text-2xl text-gray-600 max-w-3xl mx-auto mb-4">
            Start free and scale as you grow. All plans include core features with no hidden fees.
          </p>
          <p className="text-lg text-gray-500">
            Need more than 1M emails/month?{' '}
            <Link to="/contact" className="text-blue-600 hover:underline">
              Contact us
            </Link>{' '}
            for enterprise pricing.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-lg border-2 p-8 flex flex-col ${
                plan.popular
                  ? 'border-blue-600 shadow-xl scale-105'
                  : 'border-gray-200 shadow-sm'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                    <Zap size={16} /> Most Popular
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {plan.name}
                </h3>
                <div className="flex items-baseline mb-2">
                  <span className="text-5xl font-bold text-gray-900">
                    {plan.price}
                  </span>
                  <span className="text-gray-500 ml-2">{plan.period}</span>
                </div>
                <p className="text-gray-600 mb-2">{plan.description}</p>
                <p className="text-sm font-semibold text-blue-600">{plan.emails}</p>
              </div>

              <ul className="space-y-3 mb-8 flex-grow">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    {feature.included ? (
                      <Check size={20} className="text-green-600 flex-shrink-0 mt-0.5" />
                    ) : (
                      <X size={20} className="text-gray-300 flex-shrink-0 mt-0.5" />
                    )}
                    <span
                      className={`text-sm ${
                        feature.included ? 'text-gray-700' : 'text-gray-400'
                      } ${feature.bold ? 'font-semibold' : ''}`}
                    >
                      {feature.name}
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                to={plan.ctaLink}
                className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-colors ${
                  plan.popular
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200 border border-gray-300'
                }`}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>

        {/* Feature Comparison Table */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Detailed Feature Comparison
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full border border-gray-200 rounded-lg">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                    Feature
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">
                    Free
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">
                    Starter
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">
                    Growth
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">
                    Business
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-gray-50">
                  <td className="px-6 py-3 text-sm font-semibold text-gray-900" colSpan={5}>
                    Core Features
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-700">Monthly emails</td>
                  <td className="px-6 py-4 text-sm text-center text-gray-700">1,000</td>
                  <td className="px-6 py-4 text-sm text-center text-gray-700">50,000</td>
                  <td className="px-6 py-4 text-sm text-center text-gray-700">250,000</td>
                  <td className="px-6 py-4 text-sm text-center text-gray-700">1,000,000</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-700">API requests/second</td>
                  <td className="px-6 py-4 text-sm text-center text-gray-700">10</td>
                  <td className="px-6 py-4 text-sm text-center text-gray-700">100</td>
                  <td className="px-6 py-4 text-sm text-center text-gray-700">500</td>
                  <td className="px-6 py-4 text-sm text-center text-gray-700">1,000</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-700">Team members</td>
                  <td className="px-6 py-4 text-sm text-center text-gray-700">1</td>
                  <td className="px-6 py-4 text-sm text-center text-gray-700">3</td>
                  <td className="px-6 py-4 text-sm text-center text-gray-700">10</td>
                  <td className="px-6 py-4 text-sm text-center text-gray-700">Unlimited</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-700">Email templates</td>
                  <td className="px-6 py-4 text-sm text-center text-gray-700">10</td>
                  <td className="px-6 py-4 text-sm text-center text-gray-700">50</td>
                  <td className="px-6 py-4 text-sm text-center text-gray-700">Unlimited</td>
                  <td className="px-6 py-4 text-sm text-center text-gray-700">Unlimited</td>
                </tr>

                <tr className="bg-gray-50">
                  <td className="px-6 py-3 text-sm font-semibold text-gray-900" colSpan={5}>
                    Deliverability
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-700">Custom sending domain</td>
                  <td className="px-6 py-4 text-center">
                    <X size={20} className="text-gray-300 mx-auto" />
                  </td>
                  <td className="px-6 py-4 text-center">
                    <Check size={20} className="text-green-600 mx-auto" />
                  </td>
                  <td className="px-6 py-4 text-center">
                    <Check size={20} className="text-green-600 mx-auto" />
                  </td>
                  <td className="px-6 py-4 text-center">
                    <Check size={20} className="text-green-600 mx-auto" />
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-700">Dedicated IP</td>
                  <td className="px-6 py-4 text-center">
                    <X size={20} className="text-gray-300 mx-auto" />
                  </td>
                  <td className="px-6 py-4 text-center">
                    <X size={20} className="text-gray-300 mx-auto" />
                  </td>
                  <td className="px-6 py-4 text-sm text-center text-gray-700">Add-on</td>
                  <td className="px-6 py-4 text-sm text-center text-gray-700">2 included</td>
                </tr>

                <tr className="bg-gray-50">
                  <td className="px-6 py-3 text-sm font-semibold text-gray-900" colSpan={5}>
                    Support & SLA
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-700">Support response time</td>
                  <td className="px-6 py-4 text-sm text-center text-gray-700">48h</td>
                  <td className="px-6 py-4 text-sm text-center text-gray-700">24h</td>
                  <td className="px-6 py-4 text-sm text-center text-gray-700">4h</td>
                  <td className="px-6 py-4 text-sm text-center text-gray-700">1h</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-700">Uptime SLA</td>
                  <td className="px-6 py-4 text-sm text-center text-gray-700">-</td>
                  <td className="px-6 py-4 text-sm text-center text-gray-700">-</td>
                  <td className="px-6 py-4 text-sm text-center text-gray-700">99.99%</td>
                  <td className="px-6 py-4 text-sm text-center text-gray-700">99.995%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Frequently Asked Questions
          </h2>

          <div className="max-w-3xl mx-auto space-y-6">
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                What happens if I exceed my plan limit?
              </h3>
              <p className="text-gray-700">
                We'll send you a notification when you reach 80% of your limit. If you exceed your limit,
                additional emails cost $1 per 1,000 emails. Alternatively, you can upgrade to the next plan
                at any time.
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Can I cancel anytime?
              </h3>
              <p className="text-gray-700">
                Yes, you can cancel your subscription at any time from your dashboard. There are no cancellation
                fees, and you'll retain access until the end of your billing period.
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Do you offer annual billing?
              </h3>
              <p className="text-gray-700">
                Yes! Pay annually and save 20%. For example, the Starter plan is $278/year (vs $348 monthly),
                Growth is $950/year (vs $1,188 monthly), and Business is $2,870/year (vs $3,588 monthly).
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                What payment methods do you accept?
              </h3>
              <p className="text-gray-700">
                We accept all major credit cards (Visa, MasterCard, American Express) and ACH bank transfers
                for annual plans. Enterprise customers can pay via invoice.
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Is there a free trial?
              </h3>
              <p className="text-gray-700">
                Yes! All paid plans include a 30-day free trial. No credit card required. You get full access
                to all plan features during the trial period.
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Can I upgrade or downgrade my plan?
              </h3>
              <p className="text-gray-700">
                Yes, you can change your plan at any time. Upgrades take effect immediately. Downgrades take
                effect at the end of your current billing period. We'll prorate any credits owed.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-blue-50 rounded-lg p-12 text-center border border-blue-200">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Still have questions?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Our team is here to help you choose the right plan for your needs.
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-semibold transition-colors"
            >
              Contact Sales
            </Link>
            <Link
              to="/docs"
              className="px-8 py-4 bg-white text-gray-900 rounded-lg hover:bg-gray-50 font-semibold border border-gray-300 transition-colors"
            >
              View Documentation
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
