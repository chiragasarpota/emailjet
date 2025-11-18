import { createFileRoute } from '@tanstack/react-router'
import { ShoppingCart, Building2, GraduationCap, Heart, DollarSign, Users } from 'lucide-react'
import Card from '../components/Card'
import CodeBlock from '../components/CodeBlock'
import Breadcrumbs from '../components/Breadcrumbs'

export const Route = createFileRoute('/use-cases')({
  component: UseCasesPage,
})

function UseCasesPage() {
  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <Breadcrumbs items={[{ label: 'Use Cases' }]} />

        {/* Hero */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            EmailJet for Every Industry
          </h1>
          <p className="text-2xl text-gray-600 max-w-3xl mx-auto">
            From e-commerce to healthcare, developers trust EmailJet for mission-critical transactional emails.
            See how teams like yours use our platform.
          </p>
        </div>

        {/* Use Case Grid */}
        <div className="space-y-20">
          {/* E-commerce */}
          <section>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <ShoppingCart size={40} className="text-blue-600" />
                  <h2 className="text-3xl font-bold text-gray-900">E-commerce</h2>
                </div>
                <p className="text-xl text-gray-600 mb-6">
                  Send order confirmations, shipping notifications, and abandoned cart recovery emails
                  that customers actually read.
                </p>
                <div className="space-y-3 text-gray-700 mb-6">
                  <div className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">✓</span>
                    <div>
                      <strong>Order Confirmations:</strong> Instant receipts with order details and tracking
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">✓</span>
                    <div>
                      <strong>Shipping Updates:</strong> Real-time notifications with carrier tracking links
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">✓</span>
                    <div>
                      <strong>Cart Recovery:</strong> Automated reminders for abandoned checkouts
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">✓</span>
                    <div>
                      <strong>Review Requests:</strong> Post-purchase feedback collection
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                  <p className="text-sm text-gray-700">
                    <strong>Customer:</strong> "We migrated from SendGrid and saw 18% higher open rates on shipping notifications.
                    EmailJet's templates made it easy."
                  </p>
                  <p className="text-sm text-gray-500 mt-2">— Shopify Plus Store, 50k orders/month</p>
                </div>
              </div>
              <div>
                <CodeBlock
                  language="javascript"
                  filename="order-confirmation.js"
                  code={`// Send order confirmation
await emailjet.send({
  to: customer.email,
  templateId: 'order-confirmation',
  variables: {
    orderNumber: order.id,
    customerName: customer.name,
    items: order.items.map(item => ({
      name: item.product.name,
      quantity: item.quantity,
      price: item.price
    })),
    subtotal: order.subtotal,
    shipping: order.shipping,
    tax: order.tax,
    total: order.total,
    trackingUrl: order.trackingUrl
  }
});`}
                />
              </div>
            </div>
          </section>

          {/* SaaS */}
          <section className="bg-gray-50 rounded-lg p-12 border border-gray-200">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <CodeBlock
                  language="python"
                  filename="trial_expiring.py"
                  code={`# Send trial expiring notification
client.send(
    to=user.email,
    template_id='trial-expiring',
    variables={
        'user_name': user.name,
        'trial_end_date': user.trial_end.strftime('%B %d'),
        'days_remaining': (user.trial_end - datetime.now()).days,
        'upgrade_url': f'https://app.com/upgrade?user={user.id}'
    },
    tags=['lifecycle', 'trial']
)`}
                />
              </div>
              <div className="order-1 lg:order-2">
                <div className="flex items-center gap-3 mb-4">
                  <Building2 size={40} className="text-blue-600" />
                  <h2 className="text-3xl font-bold text-gray-900">SaaS Platforms</h2>
                </div>
                <p className="text-xl text-gray-600 mb-6">
                  Automate user onboarding, feature announcements, and billing notifications.
                  Keep users engaged throughout their lifecycle.
                </p>
                <div className="space-y-3 text-gray-700 mb-6">
                  <div className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">✓</span>
                    <div>
                      <strong>Welcome Emails:</strong> Onboarding sequences that drive activation
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">✓</span>
                    <div>
                      <strong>Trial Reminders:</strong> Automated expiry notifications
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">✓</span>
                    <div>
                      <strong>Billing Receipts:</strong> Instant invoices and payment confirmations
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">✓</span>
                    <div>
                      <strong>Usage Alerts:</strong> Notify users before hitting limits
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Education */}
          <section>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <GraduationCap size={40} className="text-blue-600" />
                  <h2 className="text-3xl font-bold text-gray-900">Education</h2>
                </div>
                <p className="text-xl text-gray-600 mb-6">
                  Deliver course materials, exam results, and administrative notifications to students and faculty.
                </p>
                <div className="space-y-3 text-gray-700">
                  <div className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">✓</span>
                    <div><strong>Enrollment Confirmations:</strong> Class registration receipts</div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">✓</span>
                    <div><strong>Grade Notifications:</strong> Secure grade delivery to students</div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">✓</span>
                    <div><strong>Assignment Reminders:</strong> Due date notifications</div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">✓</span>
                    <div><strong>Event Announcements:</strong> Campus-wide communications</div>
                  </div>
                </div>
              </div>
              <div>
                <Card className="bg-blue-50 border-blue-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Key Requirements</h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• <strong>FERPA Compliance:</strong> Secure student data handling</li>
                    <li>• <strong>High Volume:</strong> Handle semester-start email surges</li>
                    <li>• <strong>Reliability:</strong> Critical deadline notifications</li>
                    <li>• <strong>Templates:</strong> Consistent institutional branding</li>
                  </ul>
                </Card>
              </div>
            </div>
          </section>

          {/* Healthcare */}
          <section className="bg-gray-50 rounded-lg p-12 border border-gray-200">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <Card className="bg-white border-gray-300">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Compliance Features</h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• <strong>HIPAA Compliant:</strong> BAA available for enterprise customers</li>
                    <li>• <strong>Encryption:</strong> TLS 1.2+ for all communications</li>
                    <li>• <strong>Audit Logs:</strong> Complete message history and tracking</li>
                    <li>• <strong>Data Residency:</strong> US-based infrastructure options</li>
                  </ul>
                </Card>
              </div>
              <div className="order-1 lg:order-2">
                <div className="flex items-center gap-3 mb-4">
                  <Heart size={40} className="text-blue-600" />
                  <h2 className="text-3xl font-bold text-gray-900">Healthcare</h2>
                </div>
                <p className="text-xl text-gray-600 mb-6">
                  Send appointment reminders, test results, and prescription notifications with HIPAA-compliant infrastructure.
                </p>
                <div className="space-y-3 text-gray-700">
                  <div className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">✓</span>
                    <div><strong>Appointment Reminders:</strong> Reduce no-shows by 40%</div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">✓</span>
                    <div><strong>Lab Results:</strong> Secure delivery to patient portals</div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">✓</span>
                    <div><strong>Rx Notifications:</strong> Prescription ready alerts</div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">✓</span>
                    <div><strong>Billing Statements:</strong> Secure invoice delivery</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Finance */}
          <section>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <DollarSign size={40} className="text-blue-600" />
                  <h2 className="text-3xl font-bold text-gray-900">Financial Services</h2>
                </div>
                <p className="text-xl text-gray-600 mb-6">
                  Deliver transaction alerts, statements, and security notifications with bank-grade reliability.
                </p>
                <div className="space-y-3 text-gray-700 mb-6">
                  <div className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">✓</span>
                    <div><strong>Transaction Alerts:</strong> Real-time payment notifications</div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">✓</span>
                    <div><strong>Security Alerts:</strong> Login and fraud detection emails</div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">✓</span>
                    <div><strong>Statements:</strong> Monthly account summaries</div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">✓</span>
                    <div><strong>2FA Codes:</strong> One-time password delivery</div>
                  </div>
                </div>
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <p className="text-sm text-gray-700">
                    <strong>Critical:</strong> 99.99% uptime SLA ensures security alerts always reach users.
                    Average delivery time: &lt;3 seconds.
                  </p>
                </div>
              </div>
              <div>
                <CodeBlock
                  language="javascript"
                  code={`// Send transaction alert
await emailjet.send({
  to: user.email,
  templateId: 'transaction-alert',
  variables: {
    amount: transaction.amount,
    currency: transaction.currency,
    merchant: transaction.merchant,
    time: transaction.timestamp,
    balance: account.balance,
    alertUrl: \`https://app.com/alert/\${transaction.id}\`
  },
  priority: 'high' // Expedited delivery
});`}
                />
              </div>
            </div>
          </section>

          {/* Non-Profit */}
          <section className="bg-gray-50 rounded-lg p-12 border border-gray-200">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <Card className="bg-white border-gray-300">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Non-Profit Benefits</h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• <strong>50% Discount:</strong> Special pricing for registered 501(c)(3) organizations</li>
                    <li>• <strong>Free Tier:</strong> Generous free allowance for small non-profits</li>
                    <li>• <strong>Donation Receipts:</strong> IRS-compliant receipt templates</li>
                    <li>• <strong>Campaign Support:</strong> High-volume sending for fundraising</li>
                  </ul>
                </Card>
              </div>
              <div className="order-1 lg:order-2">
                <div className="flex items-center gap-3 mb-4">
                  <Users size={40} className="text-blue-600" />
                  <h2 className="text-3xl font-bold text-gray-900">Non-Profit Organizations</h2>
                </div>
                <p className="text-xl text-gray-600 mb-6">
                  Engage donors, volunteers, and beneficiaries with professional email communications.
                </p>
                <div className="space-y-3 text-gray-700">
                  <div className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">✓</span>
                    <div><strong>Donation Receipts:</strong> Instant tax-deductible confirmations</div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">✓</span>
                    <div><strong>Volunteer Coordination:</strong> Event and shift notifications</div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">✓</span>
                    <div><strong>Impact Reports:</strong> Share success stories with supporters</div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">✓</span>
                    <div><strong>Event Invitations:</strong> Fundraiser and gala announcements</div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* CTA */}
        <div className="mt-20 bg-blue-50 rounded-lg p-12 text-center border border-blue-200">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to See EmailJet in Action?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Start your free 30-day trial. No credit card required.
          </p>
          <div className="flex gap-4 justify-center">
            <a
              href="/contact"
              className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-semibold transition-colors"
            >
              Start Free Trial
            </a>
            <a
              href="/pricing"
              className="px-8 py-4 bg-white text-gray-900 rounded-lg hover:bg-gray-50 font-semibold border border-gray-300 transition-colors"
            >
              View Pricing
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
