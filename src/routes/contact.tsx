import { createFileRoute } from '@tanstack/react-router'
import { Mail, MessageCircle, Phone, Clock, MapPin, FileText } from 'lucide-react'
import Card from '../components/Card'
import Breadcrumbs from '../components/Breadcrumbs'

export const Route = createFileRoute('/contact')({
  component: ContactPage,
})

function ContactPage() {
  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <Breadcrumbs items={[{ label: 'Contact' }]} />

        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Get in Touch</h1>
          <p className="text-2xl text-gray-600 max-w-3xl mx-auto">
            Have questions? Need help getting started? Our team is here to support you.
          </p>
        </div>

        {/* Contact Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <Card icon={<MessageCircle size={32} />} title="Live Chat">
            <p className="mb-4">
              Get instant help from our support team. Available during business hours for all customers.
            </p>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-semibold transition-colors">
              Start Chat
            </button>
          </Card>

          <Card icon={<Mail size={32} />} title="Email Support">
            <p className="mb-4">
              Send us an email and we'll respond within our SLA timeframe based on your plan.
            </p>
            <a
              href="mailto:support@emailjet.com"
              className="text-blue-600 hover:underline font-semibold"
            >
              support@emailjet.com
            </a>
          </Card>

          <Card icon={<Phone size={32} />} title="Phone Support">
            <p className="mb-4">
              Growth and Business plan customers can call us directly for urgent issues.
            </p>
            <a
              href="tel:+18005551234"
              className="text-blue-600 hover:underline font-semibold"
            >
              +1 (800) 555-1234
            </a>
          </Card>
        </div>

        {/* Contact Form */}
        <div className="max-w-3xl mx-auto mb-16">
          <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Send Us a Message</h2>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject *
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                >
                  <option value="">Select a topic</option>
                  <option value="sales">Sales Inquiry</option>
                  <option value="support">Technical Support</option>
                  <option value="billing">Billing Question</option>
                  <option value="partnership">Partnership Opportunity</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  placeholder="Tell us how we can help..."
                />
              </div>

              <div className="flex items-start gap-2">
                <input
                  type="checkbox"
                  id="newsletter"
                  name="newsletter"
                  className="mt-1"
                />
                <label htmlFor="newsletter" className="text-sm text-gray-600">
                  I'd like to receive product updates, best practices, and promotional emails from EmailJet.
                  You can unsubscribe at any time.
                </label>
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-semibold transition-colors"
              >
                Send Message
              </button>

              <p className="text-sm text-gray-500 text-center">
                By submitting this form, you agree to our{' '}
                <a href="#" className="text-blue-600 hover:underline">
                  Privacy Policy
                </a>{' '}
                and{' '}
                <a href="#" className="text-blue-600 hover:underline">
                  Terms of Service
                </a>
                .
              </p>
            </form>
          </div>
        </div>

        {/* Additional Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <Card icon={<Clock size={32} />} title="Support Hours">
            <div className="space-y-2 text-gray-700">
              <p>
                <strong>Live Chat & Phone:</strong>
                <br />
                Monday - Friday: 9am - 6pm EST
                <br />
                Saturday: 10am - 4pm EST
                <br />
                Sunday: Closed
              </p>
              <p>
                <strong>Email Support:</strong>
                <br />
                24/7 (responses based on your plan's SLA)
              </p>
            </div>
          </Card>

          <Card icon={<MapPin size={32} />} title="Headquarters">
            <p className="text-gray-700">
              EmailJet Inc.
              <br />
              123 Tech Street, Suite 400
              <br />
              San Francisco, CA 94105
              <br />
              United States
            </p>
          </Card>
        </div>

        {/* Documentation & Resources */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Before You Reach Out
          </h2>
          <p className="text-xl text-gray-600 text-center mb-8">
            You might find what you need in our documentation and resources
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <a
              href="/docs"
              className="bg-white border border-gray-200 rounded-lg p-6 hover:border-blue-600 transition-all hover:shadow-md"
            >
              <FileText size={32} className="text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Documentation
              </h3>
              <p className="text-gray-600 mb-4">
                Comprehensive guides, API references, and tutorials to get you started.
              </p>
              <span className="text-blue-600 font-semibold">Browse Docs →</span>
            </a>

            <a
              href="/docs/troubleshooting"
              className="bg-white border border-gray-200 rounded-lg p-6 hover:border-blue-600 transition-all hover:shadow-md"
            >
              <MessageCircle size={32} className="text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Troubleshooting
              </h3>
              <p className="text-gray-600 mb-4">
                Common issues and their solutions. Debug API errors, delivery problems, and more.
              </p>
              <span className="text-blue-600 font-semibold">View Guide →</span>
            </a>

            <a
              href="/status"
              className="bg-white border border-gray-200 rounded-lg p-6 hover:border-blue-600 transition-all hover:shadow-md"
            >
              <Clock size={32} className="text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">System Status</h3>
              <p className="text-gray-600 mb-4">
                Check EmailJet's current status, uptime history, and scheduled maintenance.
              </p>
              <span className="text-blue-600 font-semibold">View Status →</span>
            </a>
          </div>
        </div>

        {/* Response Time Expectations */}
        <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Response Time Expectations
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">48h</div>
              <div className="text-sm text-gray-600 font-semibold mb-1">Free Plan</div>
              <div className="text-xs text-gray-500">Email support</div>
            </div>

            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">24h</div>
              <div className="text-sm text-gray-600 font-semibold mb-1">Starter Plan</div>
              <div className="text-xs text-gray-500">Email support</div>
            </div>

            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">4h</div>
              <div className="text-sm text-gray-600 font-semibold mb-1">Growth Plan</div>
              <div className="text-xs text-gray-500">Priority email & phone</div>
            </div>

            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">1h</div>
              <div className="text-sm text-gray-600 font-semibold mb-1">Business Plan</div>
              <div className="text-xs text-gray-500">Priority all channels</div>
            </div>
          </div>

          <p className="text-sm text-gray-600 text-center mt-6">
            Response times are measured during business hours. Critical issues may receive faster responses.
          </p>
        </div>
      </div>
    </div>
  )
}
