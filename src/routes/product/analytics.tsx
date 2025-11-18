import { createFileRoute } from '@tanstack/react-router'
import Breadcrumbs from '../../components/Breadcrumbs'
import CodeBlock from '../../components/CodeBlock'
import Card from '../../components/Card'
import {
  BarChart3,
  TrendingUp,
  Eye,
  MousePointer,
  AlertTriangle,
  CheckCircle,
  Users,
  Mail,
  PieChart,
  Activity,
} from 'lucide-react'

export const Route = createFileRoute('/product/analytics')({
  component: AnalyticsPage,
})

function AnalyticsPage() {
  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <Breadcrumbs items={[{ label: 'Product', href: '/product' }, { label: 'Analytics' }]} />

        <div className="mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Deliverability Analytics</h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Track email performance with real-time analytics. Monitor deliverability, engagement, and reputation metrics to
            optimize your email campaigns and maintain high inbox placement rates.
          </p>
        </div>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Key Metrics</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card icon={<Mail size={24} />}>
              <div className="text-sm font-semibold text-gray-600 mb-1">Delivery Rate</div>
              <div className="text-3xl font-bold text-gray-900">98.7%</div>
              <div className="text-sm text-green-600 mt-2">↑ 0.3% from last week</div>
            </Card>

            <Card icon={<Eye size={24} />}>
              <div className="text-sm font-semibold text-gray-600 mb-1">Open Rate</div>
              <div className="text-3xl font-bold text-gray-900">24.5%</div>
              <div className="text-sm text-green-600 mt-2">↑ 1.2% from last week</div>
            </Card>

            <Card icon={<MousePointer size={24} />}>
              <div className="text-sm font-semibold text-gray-600 mb-1">Click Rate</div>
              <div className="text-3xl font-bold text-gray-900">3.8%</div>
              <div className="text-sm text-red-600 mt-2">↓ 0.2% from last week</div>
            </Card>

            <Card icon={<AlertTriangle size={24} />}>
              <div className="text-sm font-semibold text-gray-600 mb-1">Bounce Rate</div>
              <div className="text-3xl font-bold text-gray-900">1.3%</div>
              <div className="text-sm text-green-600 mt-2">↓ 0.3% from last week</div>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <BarChart3 size={20} className="text-blue-600" />
                Core Metrics Tracked
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle size={16} className="text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-gray-900">Sent & Delivered</div>
                    <div className="text-sm text-gray-600">Total emails sent vs. successfully delivered to inbox</div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle size={16} className="text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-gray-900">Opens & Clicks</div>
                    <div className="text-sm text-gray-600">Unique and total opens, click-through rates, link performance</div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle size={16} className="text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-gray-900">Bounces</div>
                    <div className="text-sm text-gray-600">Hard and soft bounces with detailed error codes</div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle size={16} className="text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-gray-900">Complaints & Unsubscribes</div>
                    <div className="text-sm text-gray-600">Spam complaints and unsubscribe tracking</div>
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <TrendingUp size={20} className="text-blue-600" />
                Advanced Analytics
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle size={16} className="text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-gray-900">Geographic Insights</div>
                    <div className="text-sm text-gray-600">Opens and clicks by country, city, and timezone</div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle size={16} className="text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-gray-900">Device & Client Breakdown</div>
                    <div className="text-sm text-gray-600">Desktop vs mobile, email client distribution</div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle size={16} className="text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-gray-900">Engagement Timeline</div>
                    <div className="text-sm text-gray-600">Hour-by-hour open and click patterns</div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle size={16} className="text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-gray-900">Domain Reputation</div>
                    <div className="text-sm text-gray-600">Monitor your sending domain health score</div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Dashboard Features</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card icon={<PieChart size={24} />} title="Visual Reports">
              <p className="text-sm text-gray-600 mb-3">
                Interactive charts and graphs for all metrics. Filter by date range, tags, and custom segments.
              </p>
            </Card>

            <Card icon={<Activity size={24} />} title="Real-time Updates">
              <p className="text-sm text-gray-600 mb-3">
                Live dashboard updates as events occur. No delay between sending and seeing results.
              </p>
            </Card>

            <Card icon={<Users size={24} />} title="Cohort Analysis">
              <p className="text-sm text-gray-600 mb-3">
                Group recipients by behavior, send time, or custom attributes to identify patterns.
              </p>
            </Card>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Analytics API</h2>

          <p className="text-gray-700 mb-6">
            Access your analytics data programmatically to build custom dashboards, integrate with BI tools, or automate
            reporting workflows.
          </p>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Get Overall Statistics</h3>
              <CodeBlock
                language="bash"
                code={`curl https://api.emailjet.com/v1/analytics/summary?from=2025-01-01&to=2025-01-31 \\
  -H "Authorization: Bearer YOUR_API_KEY"`}
              />

              <div className="mt-4">
                <h4 className="text-sm font-semibold text-gray-900 mb-2">Response:</h4>
                <CodeBlock
                  language="json"
                  code={`{
  "period": {
    "from": "2025-01-01T00:00:00Z",
    "to": "2025-01-31T23:59:59Z"
  },
  "metrics": {
    "sent": 125430,
    "delivered": 123845,
    "deliveryRate": 0.987,
    "opened": 30342,
    "openRate": 0.245,
    "clicked": 4726,
    "clickRate": 0.038,
    "bounced": 1585,
    "bounceRate": 0.013,
    "complained": 24,
    "complaintRate": 0.0002,
    "unsubscribed": 156,
    "unsubscribeRate": 0.0013
  }
}`}
                />
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Get Engagement by Tag</h3>
              <CodeBlock
                language="javascript"
                filename="analytics-by-tag.js"
                code={`const response = await fetch(
  'https://api.emailjet.com/v1/analytics/by-tag?from=2025-01-01&to=2025-01-31',
  {
    headers: {
      'Authorization': \`Bearer \${process.env.EMAILJET_API_KEY}\`
    }
  }
);

const data = await response.json();

// Response structure:
// {
//   "tags": [
//     {
//       "tag": "welcome",
//       "sent": 15234,
//       "deliveryRate": 0.991,
//       "openRate": 0.412,
//       "clickRate": 0.087
//     },
//     {
//       "tag": "newsletter",
//       "sent": 45120,
//       "deliveryRate": 0.985,
//       "openRate": 0.231,
//       "clickRate": 0.034
//     }
//   ]
// }`}
              />
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Get Geographic Distribution</h3>
              <CodeBlock
                language="python"
                filename="geo_analytics.py"
                code={`import requests

response = requests.get(
    'https://api.emailjet.com/v1/analytics/geography',
    headers={'Authorization': f'Bearer {API_KEY}'},
    params={
        'from': '2025-01-01',
        'to': '2025-01-31',
        'metric': 'opens'
    }
)

data = response.json()

# Response structure:
# {
#   "countries": [
#     {
#       "code": "US",
#       "name": "United States",
#       "opens": 18234,
#       "clicks": 2891,
#       "percentage": 0.452
#     },
#     {
#       "code": "GB",
#       "name": "United Kingdom",
#       "opens": 6789,
#       "clicks": 1023,
#       "percentage": 0.168
#     }
#   ]
# }`}
              />
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Get Link Performance</h3>
              <CodeBlock
                language="bash"
                code={`curl "https://api.emailjet.com/v1/analytics/links?messageId=msg_abc123" \\
  -H "Authorization: Bearer YOUR_API_KEY"

# Response:
# {
#   "messageId": "msg_abc123",
#   "links": [
#     {
#       "url": "https://yourapp.com/pricing",
#       "clicks": 342,
#       "uniqueClicks": 298,
#       "clickRate": 0.067
#     },
#     {
#       "url": "https://yourapp.com/features",
#       "clicks": 156,
#       "uniqueClicks": 142,
#       "clickRate": 0.032
#     }
#   ]
# }`}
              />
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Reporting & Exports</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Scheduled Reports</h3>
              <p className="text-gray-700 mb-4">
                Automatically send analytics reports to your team via email on a daily, weekly, or monthly schedule.
              </p>

              <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Report Options</h4>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>• PDF, CSV, or JSON format</li>
                  <li>• Custom date ranges and filters</li>
                  <li>• Include charts and visualizations</li>
                  <li>• Multiple email recipients</li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Data Exports</h3>
              <p className="text-gray-700 mb-4">
                Export raw event data for custom analysis in your preferred BI tool or data warehouse.
              </p>

              <CodeBlock
                language="bash"
                code={`# Export all events for a date range
curl -X POST https://api.emailjet.com/v1/analytics/export \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "from": "2025-01-01",
    "to": "2025-01-31",
    "format": "csv",
    "events": ["delivered", "opened", "clicked"]
  }'`}
              />
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Domain Reputation Monitoring</h2>

          <p className="text-gray-700 mb-6">
            Track your sending domain's reputation score and identify potential deliverability issues before they impact your
            inbox placement.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <Card title="Reputation Score">
              <div className="flex items-baseline gap-2 mb-2">
                <div className="text-4xl font-bold text-green-600">94</div>
                <div className="text-sm text-gray-600">/ 100</div>
              </div>
              <div className="text-sm text-gray-600">Excellent reputation - no action needed</div>
            </Card>

            <Card title="Blacklist Monitoring">
              <div className="flex items-baseline gap-2 mb-2">
                <div className="text-4xl font-bold text-green-600">0</div>
                <div className="text-sm text-gray-600">listings found</div>
              </div>
              <div className="text-sm text-gray-600">Checked against 50+ major blacklists</div>
            </Card>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-4">
            <div className="font-semibold text-blue-900 mb-2">Reputation Factors Tracked</div>
            <ul className="text-sm text-blue-800 space-y-1">
              <li>• Bounce rate trends</li>
              <li>• Complaint rate monitoring</li>
              <li>• Engagement metrics (opens, clicks)</li>
              <li>• Sending volume consistency</li>
              <li>• Authentication (SPF, DKIM, DMARC) status</li>
            </ul>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Webhook Integration</h2>

          <p className="text-gray-700 mb-6">
            Stream analytics events to your own systems in real-time using webhooks. Build custom dashboards or trigger
            automated workflows based on email performance.
          </p>

          <CodeBlock
            language="javascript"
            code={`// Webhook payload example for engagement event
{
  "event": "email.opened",
  "timestamp": "2025-01-18T14:23:15Z",
  "data": {
    "messageId": "msg_xyz789",
    "recipient": "user@example.com",
    "location": {
      "country": "US",
      "city": "San Francisco",
      "region": "CA"
    },
    "device": {
      "type": "mobile",
      "os": "iOS",
      "client": "Apple Mail"
    },
    "tags": ["newsletter", "january-2025"],
    "metadata": {
      "campaignId": "winter-promo",
      "userId": "12345"
    }
  }
}`}
          />

          <p className="text-gray-700 mt-4">
            Learn more in our{' '}
            <a href="/product/webhooks" className="text-blue-600 hover:underline">
              Webhooks documentation
            </a>
            .
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Best Practices</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card title="Monitor Trends, Not Just Numbers">
              <p className="text-sm text-gray-600">
                Look for patterns over time. A sudden drop in open rates or spike in bounces indicates an issue that needs
                attention.
              </p>
            </Card>

            <Card title="Segment Your Analysis">
              <p className="text-sm text-gray-600">
                Use tags to compare performance across different email types (transactional vs marketing, welcome vs
                re-engagement).
              </p>
            </Card>

            <Card title="Set Up Alerts">
              <p className="text-sm text-gray-600">
                Configure alerts for abnormal metrics: bounce rate {">"} 5%, complaint rate {">"} 0.1%, or sudden delivery rate
                drops.
              </p>
            </Card>

            <Card title="A/B Test Everything">
              <p className="text-sm text-gray-600">
                Test subject lines, send times, and content variations. Use analytics to identify what resonates with your
                audience.
              </p>
            </Card>

            <Card title="Clean Your List Regularly">
              <p className="text-sm text-gray-600">
                Remove hard bounces immediately and suppress inactive subscribers to maintain high engagement rates.
              </p>
            </Card>

            <Card title="Benchmark Against Industry">
              <p className="text-sm text-gray-600">
                Compare your metrics to industry averages for your sector. Our dashboard shows benchmarks for context.
              </p>
            </Card>
          </div>
        </section>

        <section className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Start Tracking Your Email Performance</h2>
          <p className="text-gray-700 mb-6">
            Get detailed analytics and insights for every email you send. Monitor deliverability, engagement, and reputation in
            real-time.
          </p>
          <div className="flex gap-4">
            <a
              href="/contact"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              View Live Demo
            </a>
            <a
              href="/docs"
              className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold border-2 border-blue-600 hover:bg-blue-50 transition-colors"
            >
              API Documentation
            </a>
          </div>
        </section>
      </div>
    </div>
  )
}
