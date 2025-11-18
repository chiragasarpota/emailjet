import { createFileRoute, Link } from '@tanstack/react-router'
import { Book, Code2, FileText, Server, Shield, Zap } from 'lucide-react'
import Card from '../components/Card'
import Breadcrumbs from '../components/Breadcrumbs'

export const Route = createFileRoute('/docs')({
  component: DocsPage,
})

function DocsPage() {
  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <Breadcrumbs items={[{ label: 'Documentation' }]} />

        {/* Hero */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Developer Documentation
          </h1>
          <p className="text-2xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to integrate EmailJet into your application. Comprehensive guides, API references, and best practices.
          </p>
        </div>

        {/* Quick Start */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Getting Started</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Link to="/product/rest-api">
              <Card icon={<Code2 size={32} />} title="REST API" className="hover:border-blue-600 cursor-pointer transition-all">
                <p className="mb-3">
                  Send emails via modern HTTP API with JSON payloads. Perfect for any application or programming language.
                </p>
                <span className="text-blue-600 font-semibold">View REST API docs →</span>
              </Card>
            </Link>
            <Link to="/product/smtp-api">
              <Card icon={<Server size={32} />} title="SMTP API" className="hover:border-blue-600 cursor-pointer transition-all">
                <p className="mb-3">
                  Use standard SMTP protocol with your existing email libraries. Drop-in replacement with zero code changes.
                </p>
                <span className="text-blue-600 font-semibold">View SMTP API docs →</span>
              </Card>
            </Link>
          </div>
        </div>

        {/* Core Features */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Core Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link to="/product/webhooks">
              <Card title="Webhooks" className="hover:border-blue-600 cursor-pointer transition-all h-full">
                <p className="text-sm text-gray-600 mb-3">
                  Receive real-time notifications for email events: delivered, opened, clicked, bounced.
                </p>
                <span className="text-blue-600 font-semibold text-sm">Learn more →</span>
              </Card>
            </Link>
            <Link to="/product/template-builder">
              <Card title="Template Builder" className="hover:border-blue-600 cursor-pointer transition-all h-full">
                <p className="text-sm text-gray-600 mb-3">
                  Create responsive email templates with visual editor or Handlebars/Mustache syntax.
                </p>
                <span className="text-blue-600 font-semibold text-sm">Learn more →</span>
              </Card>
            </Link>
            <Link to="/product/analytics">
              <Card title="Analytics" className="hover:border-blue-600 cursor-pointer transition-all h-full">
                <p className="text-sm text-gray-600 mb-3">
                  Track delivery rates, opens, clicks, and bounces in real-time with detailed insights.
                </p>
                <span className="text-blue-600 font-semibold text-sm">Learn more →</span>
              </Card>
            </Link>
          </div>
        </div>

        {/* Deliverability Guides */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Deliverability Guides</h2>
          <p className="text-xl text-gray-600 mb-8">
            Master email deliverability with our comprehensive guides. Learn how to configure authentication, avoid spam filters, and build sender reputation.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link to="/guides/email-authentication">
              <Card icon={<Shield size={24} />} className="hover:border-blue-600 cursor-pointer transition-all h-full">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Email Authentication</h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Complete guide to SPF, DKIM, and DMARC setup. Protect your domain and improve deliverability by 15-25%.
                  </p>
                  <div className="text-xs text-gray-500 mb-3">15 min read</div>
                  <span className="text-blue-600 font-semibold text-sm">Read guide →</span>
                </div>
              </Card>
            </Link>
            <Link to="/guides/avoiding-spam">
              <Card icon={<Shield size={24} />} className="hover:border-blue-600 cursor-pointer transition-all h-full">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Avoiding Spam Filters</h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Best practices for inbox placement. Content guidelines, sending patterns, and technical configuration.
                  </p>
                  <div className="text-xs text-gray-500 mb-3">12 min read</div>
                  <span className="text-blue-600 font-semibold text-sm">Read guide →</span>
                </div>
              </Card>
            </Link>
            <Link to="/guides/ip-warming">
              <Card icon={<Zap size={24} />} className="hover:border-blue-600 cursor-pointer transition-all h-full">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">IP Warming Strategy</h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Build sender reputation gradually with dedicated IPs. Step-by-step warming schedule for high-volume senders.
                  </p>
                  <div className="text-xs text-gray-500 mb-3">10 min read</div>
                  <span className="text-blue-600 font-semibold text-sm">Read guide →</span>
                </div>
              </Card>
            </Link>
          </div>
        </div>

        {/* Development Resources */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Development Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link to="/docs/troubleshooting">
              <Card icon={<FileText size={24} />} title="API Troubleshooting" className="hover:border-blue-600 cursor-pointer transition-all">
                <p className="text-sm text-gray-600 mb-3">
                  Common issues and their solutions. Debug API errors, delivery problems, authentication failures, and more.
                </p>
                <span className="text-blue-600 font-semibold text-sm">View troubleshooting →</span>
              </Card>
            </Link>
            <Link to="/tutorials">
              <Card icon={<Book size={24} />} title="Tutorials" className="hover:border-blue-600 cursor-pointer transition-all">
                <p className="text-sm text-gray-600 mb-3">
                  Step-by-step integration guides for popular platforms: WordPress, Shopify, Rails, Django, and more.
                </p>
                <span className="text-blue-600 font-semibold text-sm">Browse tutorials →</span>
              </Card>
            </Link>
          </div>
        </div>

        {/* SDKs */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Official SDKs</h2>
          <p className="text-xl text-gray-600 mb-8">
            First-class libraries for the most popular programming languages. All SDKs are open-source and maintained by our team.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: 'Node.js', package: '@emailjet/sdk', lang: 'JavaScript' },
              { name: 'Python', package: 'emailjet', lang: 'Python' },
              { name: 'Go', package: 'emailjet-go', lang: 'Go' },
              { name: 'Ruby', package: 'emailjet-ruby', lang: 'Ruby' },
              { name: 'PHP', package: 'emailjet/emailjet-php', lang: 'PHP' },
              { name: 'Java', package: 'com.emailjet:sdk', lang: 'Java' },
              { name: 'C#/.NET', package: 'EmailJet.SDK', lang: 'C#' },
              { name: 'Rust', package: 'emailjet-rs', lang: 'Rust' },
            ].map((sdk) => (
              <div key={sdk.name} className="bg-white border border-gray-200 rounded-lg p-4 hover:border-blue-600 transition-colors">
                <div className="font-semibold text-gray-900 mb-1">{sdk.name}</div>
                <div className="text-xs text-gray-500 font-mono mb-2">{sdk.package}</div>
                <div className="text-xs text-blue-600">Install →</div>
              </div>
            ))}
          </div>
        </div>

        {/* API Reference Quick Links */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">API Reference</h2>
          <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Send Email</h3>
                <code className="text-sm bg-white px-3 py-1 rounded border border-gray-200 block mb-2">
                  POST /v1/send
                </code>
                <p className="text-sm text-gray-600">Send a single email or batch of emails with templates and variables.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Get Email Status</h3>
                <code className="text-sm bg-white px-3 py-1 rounded border border-gray-200 block mb-2">
                  GET /v1/emails/:id
                </code>
                <p className="text-sm text-gray-600">Check delivery status, opens, clicks, and event timeline.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">List Emails</h3>
                <code className="text-sm bg-white px-3 py-1 rounded border border-gray-200 block mb-2">
                  GET /v1/emails
                </code>
                <p className="text-sm text-gray-600">Query sent emails with filtering, sorting, and pagination.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Create Webhook</h3>
                <code className="text-sm bg-white px-3 py-1 rounded border border-gray-200 block mb-2">
                  POST /v1/webhooks
                </code>
                <p className="text-sm text-gray-600">Configure real-time event notifications to your server.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Support Section */}
        <div className="bg-blue-50 rounded-lg p-12 text-center border border-blue-200">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Need Help?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Can't find what you're looking for? Our support team is here to help you get started.
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-semibold transition-colors"
            >
              Contact Support
            </Link>
            <Link
              to="/status"
              className="px-8 py-4 bg-white text-gray-900 rounded-lg hover:bg-gray-50 font-semibold border border-gray-300 transition-colors"
            >
              System Status
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
