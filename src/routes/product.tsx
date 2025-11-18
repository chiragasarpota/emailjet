import { createFileRoute, Link } from '@tanstack/react-router'
import { Activity, Code2, Layout, Lock, Mail, Server, Shield, Webhook, Zap } from 'lucide-react'
import Card from '../components/Card'
import Breadcrumbs from '../components/Breadcrumbs'

export const Route = createFileRoute('/product')({
  component: ProductPage,
})

function ProductPage() {
  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <Breadcrumbs items={[{ label: 'Product' }]} />

        {/* Hero Section */}
        <div className="mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Complete Email Delivery Platform
          </h1>
          <p className="text-2xl text-gray-600 max-w-4xl">
            EmailJet provides everything you need to send, track, and optimize transactional emails.
            From API to analytics, we handle the complexity so you can focus on your product.
          </p>
        </div>

        {/* Core Features Grid */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Core Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Link to="/product/smtp-api">
              <Card icon={<Server size={40} />} title="SMTP API" className="hover:border-blue-600 cursor-pointer transition-all">
                <p className="mb-4">
                  Drop-in replacement for existing SMTP servers. Use your favorite email library with zero code changes.
                  Full TLS/SSL support, connection pooling, and automatic retry logic.
                </p>
                <div className="text-blue-600 font-semibold">Learn more →</div>
              </Card>
            </Link>

            <Link to="/product/rest-api">
              <Card icon={<Code2 size={40} />} title="REST API" className="hover:border-blue-600 cursor-pointer transition-all">
                <p className="mb-4">
                  Modern RESTful API with comprehensive documentation. Send emails, manage templates, query analytics,
                  and configure webhooks programmatically. Rate limiting: 1000 req/sec.
                </p>
                <div className="text-blue-600 font-semibold">Learn more →</div>
              </Card>
            </Link>

            <Link to="/product/template-builder">
              <Card icon={<Layout size={40} />} title="Template Builder" className="hover:border-blue-600 cursor-pointer transition-all">
                <p className="mb-4">
                  Visual template editor with live preview. Support for Handlebars, Mustache, and custom variables.
                  Test across 90+ email clients before sending. Version control built-in.
                </p>
                <div className="text-blue-600 font-semibold">Learn more →</div>
              </Card>
            </Link>

            <Link to="/product/webhooks">
              <Card icon={<Webhook size={40} />} title="Webhooks" className="hover:border-blue-600 cursor-pointer transition-all">
                <p className="mb-4">
                  Real-time event notifications for delivered, opened, clicked, bounced, and spam reports.
                  Automatic retries with exponential backoff. HMAC signature verification.
                </p>
                <div className="text-blue-600 font-semibold">Learn more →</div>
              </Card>
            </Link>

            <Link to="/product/analytics">
              <Card icon={<Activity size={40} />} title="Deliverability Analytics" className="hover:border-blue-600 cursor-pointer transition-all">
                <p className="mb-4">
                  Real-time dashboards showing delivery rates, open rates, click rates, and bounce analysis.
                  Identify issues before they impact your reputation. Export data via API.
                </p>
                <div className="text-blue-600 font-semibold">Learn more →</div>
              </Card>
            </Link>

            <Link to="/product/domain-auth">
              <Card icon={<Lock size={40} />} title="Domain Authentication" className="hover:border-blue-600 cursor-pointer transition-all">
                <p className="mb-4">
                  Automatic SPF, DKIM, and DMARC configuration. One-click DNS setup with verification.
                  Dedicated IP addresses available. Monitor authentication health in real-time.
                </p>
                <div className="text-blue-600 font-semibold">Learn more →</div>
              </Card>
            </Link>
          </div>
        </div>

        {/* Technical Specifications */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Technical Specifications</h2>
          <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <Zap size={24} className="text-blue-600" />
                  Performance
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• API Response Time: &lt;50ms (p99)</li>
                  <li>• Email Processing: &lt;200ms average</li>
                  <li>• Throughput: 10,000+ emails/second</li>
                  <li>• Rate Limiting: 1,000 requests/second per account</li>
                  <li>• Webhook Delivery: &lt;1 second (p95)</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <Shield size={24} className="text-blue-600" />
                  Reliability
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• 99.99% Uptime SLA</li>
                  <li>• Automatic Failover</li>
                  <li>• Multi-region Redundancy</li>
                  <li>• 7-day Message Retention</li>
                  <li>• Zero-downtime Deployments</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <Lock size={24} className="text-blue-600" />
                  Security
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• TLS 1.2+ Encryption</li>
                  <li>• SOC 2 Type II Certified</li>
                  <li>• GDPR Compliant</li>
                  <li>• API Key Rotation</li>
                  <li>• IP Whitelisting Available</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <Mail size={24} className="text-blue-600" />
                  Email Standards
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• SPF, DKIM, DMARC Support</li>
                  <li>• SMTP/SMTPS on ports 25, 587, 2525</li>
                  <li>• Bounce Handling (RFC 3464)</li>
                  <li>• List-Unsubscribe Headers</li>
                  <li>• UTF-8 Message Bodies</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* SDK Support */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Official SDKs</h2>
          <p className="text-xl text-gray-600 mb-8">
            First-class libraries for the most popular programming languages. All SDKs are open-source, fully documented,
            and maintained by our team.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: 'Node.js', package: '@emailjet/sdk' },
              { name: 'Python', package: 'emailjet' },
              { name: 'Go', package: 'emailjet-go' },
              { name: 'Ruby', package: 'emailjet-ruby' },
              { name: 'PHP', package: 'emailjet/emailjet-php' },
              { name: 'Java', package: 'com.emailjet:sdk' },
              { name: 'C#/.NET', package: 'EmailJet.SDK' },
              { name: 'Rust', package: 'emailjet-rs' },
            ].map((sdk) => (
              <div key={sdk.name} className="bg-white border border-gray-200 rounded-lg p-4 hover:border-blue-600 transition-colors">
                <div className="font-semibold text-gray-900 mb-1">{sdk.name}</div>
                <div className="text-sm text-gray-500 font-mono">{sdk.package}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Integration Patterns */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Common Integration Patterns</h2>
          <div className="space-y-6">
            <Card title="Queue-Based Processing">
              <p className="text-gray-700 mb-4">
                Use EmailJet with your existing message queue (RabbitMQ, Kafka, SQS). Our APIs are designed for high-throughput
                batch processing with idempotent message IDs to prevent duplicates.
              </p>
              <div className="bg-gray-50 p-4 rounded border border-gray-200 font-mono text-sm">
                Queue → Worker → EmailJet API → Track via Webhooks
              </div>
            </Card>

            <Card title="Serverless Functions">
              <p className="text-gray-700 mb-4">
                Perfect for AWS Lambda, Google Cloud Functions, and Azure Functions. Lightweight SDK with minimal cold-start overhead.
                Connection pooling handled automatically.
              </p>
              <div className="bg-gray-50 p-4 rounded border border-gray-200 font-mono text-sm">
                Trigger Event → Lambda Function → EmailJet → CloudWatch Logs
              </div>
            </Card>

            <Card title="Microservices Architecture">
              <p className="text-gray-700 mb-4">
                Deploy a dedicated email service that other microservices can call. Centralize email logic, templates,
                and delivery monitoring in one place.
              </p>
              <div className="bg-gray-50 p-4 rounded border border-gray-200 font-mono text-sm">
                Service A, B, C → Email Service → EmailJet → Analytics Dashboard
              </div>
            </Card>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-blue-50 rounded-lg p-8 text-center border border-blue-200">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-600 mb-6">
            Try EmailJet free for 30 days. No credit card required.
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              to="/contact"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-semibold transition-colors"
            >
              Start Free Trial
            </Link>
            <Link
              to="/docs"
              className="px-6 py-3 bg-white text-gray-900 rounded-lg hover:bg-gray-50 font-semibold border border-gray-300 transition-colors"
            >
              View Documentation
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
