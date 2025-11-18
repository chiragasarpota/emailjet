import { createFileRoute } from '@tanstack/react-router'
import Breadcrumbs from '../../components/Breadcrumbs'
import CodeBlock from '../../components/CodeBlock'
import Card from '../../components/Card'
import {
  Layout,
  Palette,
  Code2,
  Eye,
  Smartphone,
  Monitor,
  Zap,
  GitBranch,
  Database,
  CheckCircle,
} from 'lucide-react'

export const Route = createFileRoute('/product/template-builder')({
  component: TemplateBuilderPage,
})

function TemplateBuilderPage() {
  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <Breadcrumbs items={[{ label: 'Product', href: '/product' }, { label: 'Template Builder' }]} />

        <div className="mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Template Builder</h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Create beautiful, responsive email templates with our intuitive drag-and-drop editor. No coding required, but full
            HTML/CSS customization available for developers.
          </p>
        </div>

        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card icon={<Layout size={24} />} title="Drag & Drop">
              <p className="text-sm text-gray-600">
                Build emails visually with pre-built content blocks. Add text, images, buttons, and more.
              </p>
            </Card>
            <Card icon={<Smartphone size={24} />} title="Mobile Responsive">
              <p className="text-sm text-gray-600">
                All templates automatically adapt to mobile devices. Preview on any screen size.
              </p>
            </Card>
            <Card icon={<Code2 size={24} />} title="HTML/CSS Access">
              <p className="text-sm text-gray-600">
                Switch to code view anytime for complete control over your template design.
              </p>
            </Card>
            <Card icon={<GitBranch size={24} />} title="Version Control">
              <p className="text-sm text-gray-600">
                Save versions, roll back changes, and A/B test different template variations.
              </p>
            </Card>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Key Features</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <Palette size={20} className="text-blue-600" />
                Pre-built Templates
              </h3>
              <p className="text-gray-700 mb-4">
                Start with professional templates designed for common use cases: welcome emails, password resets, order
                confirmations, newsletters, and more. Customize colors, fonts, and content to match your brand.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle size={16} className="text-green-600 mt-1 flex-shrink-0" />
                  <span>50+ professionally designed templates</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={16} className="text-green-600 mt-1 flex-shrink-0" />
                  <span>Industry-specific layouts (e-commerce, SaaS, etc.)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={16} className="text-green-600 mt-1 flex-shrink-0" />
                  <span>Tested across 90+ email clients</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <Database size={20} className="text-blue-600" />
                Dynamic Variables
              </h3>
              <p className="text-gray-700 mb-4">
                Personalize emails at scale with dynamic variables. Insert user data, conditional content, and dynamic
                sections that change based on recipient attributes.
              </p>
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                <code className="text-sm text-gray-800">
                  <div>Hello {'{{firstName}}'}, </div>
                  <div className="mt-2">{'{{#if isPremium}}'}</div>
                  <div className="ml-4">Thank you for being a premium member!</div>
                  <div>{'{{/if}}'}</div>
                </code>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <Eye size={20} className="text-blue-600" />
                Live Preview
              </h3>
              <p className="text-gray-700 mb-4">
                See exactly how your email will look as you build it. Toggle between desktop and mobile views. Test with
                real data before sending.
              </p>
              <div className="flex gap-3">
                <div className="flex items-center gap-2 bg-gray-50 px-3 py-2 rounded border border-gray-200">
                  <Monitor size={16} className="text-gray-600" />
                  <span className="text-sm text-gray-700">Desktop</span>
                </div>
                <div className="flex items-center gap-2 bg-gray-50 px-3 py-2 rounded border border-gray-200">
                  <Smartphone size={16} className="text-gray-600" />
                  <span className="text-sm text-gray-700">Mobile</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <Zap size={20} className="text-blue-600" />
                Reusable Components
              </h3>
              <p className="text-gray-700 mb-4">
                Create branded components (headers, footers, CTAs) once and reuse them across all templates. Update once,
                changes apply everywhere.
              </p>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Headers and navigation bars</li>
                <li>• Call-to-action buttons</li>
                <li>• Social media footers</li>
                <li>• Unsubscribe sections</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Using Templates via API</h2>

          <p className="text-gray-700 mb-6">
            Templates created in the builder can be used programmatically via our API. Reference templates by ID and pass
            dynamic variables at send time.
          </p>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Send with Template (Node.js)</h3>
              <CodeBlock
                language="javascript"
                filename="send-template.js"
                code={`const emailjet = require('emailjet-sdk');

const client = emailjet.createClient({
  apiKey: process.env.EMAILJET_API_KEY
});

async function sendWelcomeEmail(user) {
  const result = await client.emails.send({
    from: 'welcome@yourapp.com',
    to: user.email,
    templateId: 'welcome-email-v3',
    variables: {
      firstName: user.firstName,
      verifyUrl: \`https://yourapp.com/verify?token=\${user.verifyToken}\`,
      supportEmail: 'support@yourapp.com'
    }
  });

  console.log(\`Email sent: \${result.messageId}\`);
  return result;
}

// Usage
sendWelcomeEmail({
  email: 'newuser@example.com',
  firstName: 'Sarah',
  verifyToken: 'abc123xyz'
});`}
              />
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Send with Template (Python)</h3>
              <CodeBlock
                language="python"
                filename="send_template.py"
                code={`from emailjet import EmailJetClient

client = EmailJetClient(api_key=os.environ['EMAILJET_API_KEY'])

def send_order_confirmation(order, customer):
    result = client.emails.send(
        from_email='orders@yourstore.com',
        to=customer['email'],
        template_id='order-confirmation-v2',
        variables=${"{"}'customerName': customer['name'],
            'orderId': order['id'],
            'orderTotal': f"$$${"{"}order['total']:.2f${"}"}",
            'orderItems': order['items'],
            'trackingUrl': order['trackingUrl']
        ${"}"}
    )

    print(f"Confirmation sent: $${"{"}result['messageId']${"}"}")
    return result

# Usage
send_order_confirmation(
    order=${"{"}'id': '12345', 'total': 89.99, 'items': [...], 'trackingUrl': '...'${"}"},
    customer=${"{"}'name': 'John Doe', 'email': 'john@example.com'${"}"}
)`}
              />
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Template Management API</h2>

          <p className="text-gray-700 mb-6">
            Manage templates programmatically: create, update, duplicate, and delete templates via API. Great for
            agencies managing multiple clients or automated workflows.
          </p>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Create Template</h3>
              <CodeBlock
                language="bash"
                code={`curl -X POST https://api.emailjet.com/v1/templates \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "name": "Monthly Newsletter",
    "subject": "{{companyName}} - {{monthName}} Updates",
    "html": "<html>...</html>",
    "variables": ["companyName", "monthName", "articles"],
    "category": "newsletter"
  }'`}
              />
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Update Template</h3>
              <CodeBlock
                language="bash"
                code={`curl -X PATCH https://api.emailjet.com/v1/templates/tpl_abc123 \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "subject": "{{companyName}} - {{monthName}} Newsletter",
    "html": "<html>...updated content...</html>"
  }'`}
              />
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">List All Templates</h3>
              <CodeBlock
                language="bash"
                code={`curl https://api.emailjet.com/v1/templates?category=transactional \\
  -H "Authorization: Bearer YOUR_API_KEY"`}
              />
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Best Practices</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card title="Keep It Simple">
              <p className="text-sm text-gray-600 mb-3">
                Simple layouts perform better. Use single-column layouts for mobile, clear hierarchy, and plenty of white
                space.
              </p>
            </Card>

            <Card title="Test Across Clients">
              <p className="text-sm text-gray-600 mb-3">
                Use our built-in email client preview tool to test your templates across Gmail, Outlook, Apple Mail, and
                more.
              </p>
            </Card>

            <Card title="Optimize Images">
              <p className="text-sm text-gray-600 mb-3">
                Compress images, use appropriate file formats (PNG for graphics, JPG for photos), and always include alt
                text.
              </p>
            </Card>

            <Card title="Version Your Templates">
              <p className="text-sm text-gray-600 mb-3">
                Create new versions instead of overwriting. This allows you to roll back changes and compare performance.
              </p>
            </Card>

            <Card title="Use Semantic HTML">
              <p className="text-sm text-gray-600 mb-3">
                Proper HTML structure improves deliverability and accessibility. Use headings, paragraphs, and semantic
                tags correctly.
              </p>
            </Card>

            <Card title="Include Plain Text">
              <p className="text-sm text-gray-600 mb-3">
                Always include a plain text version. Our builder auto-generates one, or customize it manually for best
                results.
              </p>
            </Card>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Template Variables Reference</h2>

          <p className="text-gray-700 mb-6">
            Variables allow you to inject dynamic content into your templates. Use double curly braces for simple
            substitution and conditional blocks for logic.
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="min-w-full border border-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 border-b">Syntax</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 border-b">Description</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 border-b">Example</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 text-sm font-mono text-gray-900">{'{{variable}}'}</td>
                  <td className="px-6 py-4 text-sm text-gray-700">Simple substitution</td>
                  <td className="px-6 py-4 text-sm font-mono text-gray-600">{'{{userName}}'}</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-mono text-gray-900">{'{{#if condition}}'}</td>
                  <td className="px-6 py-4 text-sm text-gray-700">Conditional block</td>
                  <td className="px-6 py-4 text-sm font-mono text-gray-600">{'{{#if isPremium}}'}</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-mono text-gray-900">{'{{#each items}}'}</td>
                  <td className="px-6 py-4 text-sm text-gray-700">Loop over array</td>
                  <td className="px-6 py-4 text-sm font-mono text-gray-600">{'{{#each products}}'}</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-mono text-gray-900">{'{{formatDate date}}'}</td>
                  <td className="px-6 py-4 text-sm text-gray-700">Date formatting</td>
                  <td className="px-6 py-4 text-sm font-mono text-gray-600">
                    {'{{formatDate orderDate "MMM DD, YYYY"}}'}
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-mono text-gray-900">{'{{currency amount}}'}</td>
                  <td className="px-6 py-4 text-sm text-gray-700">Currency formatting</td>
                  <td className="px-6 py-4 text-sm font-mono text-gray-600">{'{{currency total "USD"}}'}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
            <h4 className="font-semibold text-gray-900 mb-2">Example: E-commerce Order Confirmation</h4>
            <CodeBlock
              language="html"
              code={`<h1>Order Confirmation</h1>
<p>Hi {{customerName}},</p>

<p>Thank you for your order #{{orderId}}!</p>

{{#if hasShipping}}
  <p>Your order will ship to:</p>
  <address>
    {{shippingAddress.street}}<br>
    {{shippingAddress.city}}, {{shippingAddress.state}} {{shippingAddress.zip}}
  </address>
{{/if}}

<h2>Order Details</h2>
<table>
  {{#each items}}
    <tr>
      <td>{{this.name}}</td>
      <td>{{this.quantity}}</td>
      <td>{{currency this.price "USD"}}</td>
    </tr>
  {{/each}}
</table>

<p><strong>Total: {{currency total "USD"}}</strong></p>

{{#if trackingNumber}}
  <p><a href="{{trackingUrl}}">Track your shipment</a></p>
{{/if}}`}
            />
          </div>
        </section>

        <section className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Build Beautiful Emails?</h2>
          <p className="text-gray-700 mb-6">
            Start creating professional email templates with our drag-and-drop builder. No credit card required.
          </p>
          <div className="flex gap-4">
            <a
              href="/contact"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Try Template Builder
            </a>
            <a
              href="/docs"
              className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold border-2 border-blue-600 hover:bg-blue-50 transition-colors"
            >
              View Documentation
            </a>
          </div>
        </section>
      </div>
    </div>
  )
}
