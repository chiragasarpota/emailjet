import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowRight, CheckCircle, Code, Mail, Shield, Zap } from 'lucide-react'
import CodeBlock from '../components/CodeBlock'
import Card from '../components/Card'

export const Route = createFileRoute('/')({
  component: HomePage,
})

function HomePage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 py-20 sm:py-32">
          <div className="text-center">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
              Transactional Email API
              <span className="block text-blue-600">Built for Developers</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Send transactional emails at scale with a simple, powerful API. No complexity, no surprises.
              Just reliable email delivery with 99.99% uptime SLA.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-semibold text-lg flex items-center justify-center gap-2 transition-colors"
              >
                Start Free Trial <ArrowRight size={20} />
              </Link>
              <Link
                to="/docs"
                className="px-8 py-4 bg-white border-2 border-gray-300 text-gray-900 rounded-lg hover:border-blue-600 font-semibold text-lg transition-colors"
              >
                View Documentation
              </Link>
            </div>
            <p className="mt-4 text-sm text-gray-500">
              Free 30-day trial • No credit card required • 10,000 emails included
            </p>
          </div>

          {/* Quick Start Code Example */}
          <div className="mt-16 max-w-4xl mx-auto">
            <CodeBlock
              language="javascript"
              code={`// Send your first email in 3 lines
const emailjet = require('emailjet');
emailjet.init({ apiKey: process.env.EMAILJET_API_KEY });

await emailjet.send({
  from: 'hello@yourapp.com',
  to: 'user@example.com',
  subject: 'Welcome to EmailJet!',
  html: '<h1>Hello from EmailJet!</h1><p>Your email is on its way.</p>'
});`}
            />
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Developers Choose EmailJet
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Focus on building your product. We handle the complexity of email delivery, authentication, and deliverability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card icon={<Zap size={32} />} title="Lightning Fast Integration">
              <p>
                Get started in minutes with our RESTful API or SMTP relay. SDKs available for Node.js, Python, Go, Ruby, PHP, and more.
                No vendor lock-in, no complex setup.
              </p>
            </Card>

            <Card icon={<Shield size={32} />} title="99.99% Uptime SLA">
              <p>
                Enterprise-grade infrastructure with automatic failover, redundant systems, and global delivery networks.
                We monitor every email, every millisecond.
              </p>
            </Card>

            <Card icon={<Code size={32} />} title="Developer-First Experience">
              <p>
                Comprehensive API docs, interactive examples, and detailed error messages. Test mode, webhooks, and real-time analytics
                make debugging effortless.
              </p>
            </Card>

            <Card icon={<Mail size={32} />} title="Built-In Template Engine">
              <p>
                Create responsive email templates with our visual builder or use Handlebars/Mustache syntax. Version control, A/B testing,
                and preview across 90+ email clients.
              </p>
            </Card>

            <Card icon={<CheckCircle size={32} />} title="Deliverability Optimization">
              <p>
                Automatic SPF, DKIM, and DMARC setup. Real-time bounce handling, suppression lists, and spam score analysis.
                Get your emails into the inbox, not spam.
              </p>
            </Card>

            <Card icon={<Zap size={32} />} title="Real-Time Webhooks">
              <p>
                Track every event: delivered, opened, clicked, bounced, spam reported. Webhooks with retry logic and
                signature verification for secure event handling.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold mb-2">10B+</div>
              <div className="text-blue-100">Emails Delivered</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">99.99%</div>
              <div className="text-blue-100">Uptime Guaranteed</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">15k+</div>
              <div className="text-blue-100">Happy Developers</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">&lt;50ms</div>
              <div className="text-blue-100">API Response Time</div>
            </div>
          </div>
        </div>
      </section>

      {/* Code Examples */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Simple, Powerful API
            </h2>
            <p className="text-xl text-gray-600">
              Send emails using your favorite programming language
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Node.js</h3>
              <CodeBlock
                language="javascript"
                code={`const EmailJet = require('@emailjet/sdk');

const client = new EmailJet({
  apiKey: process.env.EMAILJET_API_KEY
});

const result = await client.send({
  from: { email: 'noreply@app.com', name: 'Your App' },
  to: [{ email: 'user@example.com', name: 'John Doe' }],
  subject: 'Order Confirmation #12345',
  templateId: 'order-confirmation',
  variables: {
    orderId: '12345',
    total: '$99.99'
  }
});

console.log('Email sent:', result.messageId);`}
              />
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Python</h3>
              <CodeBlock
                language="python"
                code={`from emailjet import EmailJet

client = EmailJet(api_key=os.getenv('EMAILJET_API_KEY'))

result = client.send(
    from_email={'email': 'noreply@app.com', 'name': 'Your App'},
    to=[{'email': 'user@example.com', 'name': 'John Doe'}],
    subject='Order Confirmation #12345',
    template_id='order-confirmation',
    variables={
        'orderId': '12345',
        'total': '$99.99'
    }
)

print(f'Email sent: {result.message_id}')`}
              />
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Go</h3>
              <CodeBlock
                language="go"
                code={`package main

import (
    "github.com/emailjet/emailjet-go"
    "os"
)

func main() {
    client := emailjet.NewClient(os.Getenv("EMAILJET_API_KEY"))

    result, err := client.Send(&emailjet.Message{
        From: emailjet.Address{
            Email: "noreply@app.com",
            Name:  "Your App",
        },
        To: []emailjet.Address{
            {Email: "user@example.com", Name: "John Doe"},
        },
        Subject:    "Order Confirmation #12345",
        TemplateID: "order-confirmation",
        Variables: map[string]interface{}{
            "orderId": "12345",
            "total":   "$99.99",
        },
    })

    fmt.Printf("Email sent: %s\\n", result.MessageID)
}`}
              />
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">cURL</h3>
              <CodeBlock
                language="bash"
                code={`curl -X POST https://api.emailjet.com/v1/send \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "from": {
      "email": "noreply@app.com",
      "name": "Your App"
    },
    "to": [{
      "email": "user@example.com",
      "name": "John Doe"
    }],
    "subject": "Order Confirmation #12345",
    "templateId": "order-confirmation",
    "variables": {
      "orderId": "12345",
      "total": "$99.99"
    }
  }'`}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Trusted by Companies Worldwide
            </h2>
            <p className="text-xl text-gray-600">
              From startups to enterprises, developers trust EmailJet for mission-critical transactional emails
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <div className="flex items-start gap-4">
                <div className="text-blue-600 text-4xl font-bold">"</div>
                <div>
                  <p className="text-gray-700 mb-4">
                    EmailJet's API is the simplest I've worked with. We migrated from our previous provider in under 2 hours.
                    Deliverability improved by 15% immediately.
                  </p>
                  <p className="font-semibold text-gray-900">Sarah Chen</p>
                  <p className="text-sm text-gray-500">CTO, TechStartup Inc.</p>
                </div>
              </div>
            </Card>

            <Card>
              <div className="flex items-start gap-4">
                <div className="text-blue-600 text-4xl font-bold">"</div>
                <div>
                  <p className="text-gray-700 mb-4">
                    The webhook system is rock solid. We process millions of events per day with zero issues.
                    Customer support actually understands DNS records.
                  </p>
                  <p className="font-semibold text-gray-900">Marcus Johnson</p>
                  <p className="text-sm text-gray-500">Lead Engineer, SaaS Platform</p>
                </div>
              </div>
            </Card>

            <Card>
              <div className="flex items-start gap-4">
                <div className="text-blue-600 text-4xl font-bold">"</div>
                <div>
                  <p className="text-gray-700 mb-4">
                    We switched to EmailJet for the debugging tools alone. Error messages that actually help,
                    test mode that works, and analytics that make sense.
                  </p>
                  <p className="font-semibold text-gray-900">Emily Rodriguez</p>
                  <p className="text-sm text-gray-500">Senior Developer, FinTech App</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Send Better Emails?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Start your free 30-day trial. No credit card required. 10,000 emails included.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 font-semibold text-lg transition-colors"
            >
              Start Free Trial
            </Link>
            <Link
              to="/pricing"
              className="px-8 py-4 bg-blue-700 text-white rounded-lg hover:bg-blue-800 font-semibold text-lg border-2 border-blue-500 transition-colors"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
