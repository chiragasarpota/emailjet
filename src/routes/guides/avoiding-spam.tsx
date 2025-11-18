import { createFileRoute } from '@tanstack/react-router'
import Breadcrumbs from '../../components/Breadcrumbs'
import Card from '../../components/Card'
import TOC from '../../components/TOC'
import { Shield, CheckCircle, AlertCircle, Mail, Users, FileText, TrendingUp, Eye } from 'lucide-react'

export const Route = createFileRoute('/guides/avoiding-spam')({
  component: AvoidingSpamPage,
})

function AvoidingSpamPage() {
  const tocItems = [
    { id: 'introduction', title: 'Introduction', level: 1 },
    { id: 'authentication', title: 'Authentication Setup', level: 1 },
    { id: 'list-quality', title: 'List Quality', level: 1 },
    { id: 'content', title: 'Content Best Practices', level: 1 },
    { id: 'engagement', title: 'Engagement Signals', level: 1 },
    { id: 'technical', title: 'Technical Factors', level: 1 },
    { id: 'monitoring', title: 'Monitoring & Testing', level: 1 },
    { id: 'common-mistakes', title: 'Common Mistakes', level: 1 },
  ]

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <Breadcrumbs items={[{ label: 'Guides', href: '/docs' }, { label: 'Avoiding Spam Filters' }]} />

        <div className="mb-8">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Avoiding Spam Filters</h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Master email deliverability with proven strategies to avoid spam filters and maximize inbox placement. Learn what
            mailbox providers look for and how to maintain a strong sender reputation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <section id="introduction" className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Introduction</h2>

              <p className="text-gray-700 mb-4">
                Getting emails into the inbox instead of spam requires understanding how mailbox providers (Gmail, Outlook,
                Yahoo, etc.) evaluate incoming mail. They use sophisticated algorithms that consider hundreds of factors, from
                authentication to engagement metrics.
              </p>

              <p className="text-gray-700 mb-6">
                The good news: deliverability is entirely within your control. By following industry best practices and
                maintaining list hygiene, you can consistently achieve 95%+ inbox placement rates.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-4 mb-6">
                <div className="flex items-start gap-3">
                  <Shield className="text-blue-600 mt-1" size={20} />
                  <div>
                    <div className="font-semibold text-blue-900 mb-1">Key Insight</div>
                    <div className="text-sm text-blue-800">
                      Modern spam filters focus on engagement more than content. Sending relevant emails to engaged subscribers
                      is the single most important factor for inbox placement.
                    </div>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">What Spam Filters Evaluate</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card icon={<Shield size={24} />} title="Sender Reputation">
                  <p className="text-sm text-gray-600">Your domain and IP address history, complaint rates, and bounce rates</p>
                </Card>
                <Card icon={<Users size={24} />} title="Engagement Metrics">
                  <p className="text-sm text-gray-600">Open rates, click rates, replies, and time spent reading</p>
                </Card>
                <Card icon={<FileText size={24} />} title="Content Quality">
                  <p className="text-sm text-gray-600">Subject lines, body text, HTML quality, and spam trigger words</p>
                </Card>
                <Card icon={<CheckCircle size={24} />} title="Authentication">
                  <p className="text-sm text-gray-600">SPF, DKIM, and DMARC configuration and alignment</p>
                </Card>
              </div>
            </section>

            <section id="authentication" className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Authentication Setup</h2>

              <p className="text-gray-700 mb-4">
                <strong>This is your foundation.</strong> Without proper authentication (SPF, DKIM, DMARC), even perfect
                content may land in spam. Authentication proves you're a legitimate sender and protects your domain from
                spoofing.
              </p>

              <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6">
                <h3 className="text-lg font-semibold text-green-900 mb-4">Authentication Checklist</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-green-900">SPF Record</div>
                      <div className="text-sm text-green-800">
                        Add <code className="bg-white px-2 py-1 rounded">include:spf.emailjet.com</code> to your SPF record
                      </div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-green-900">DKIM Signing</div>
                      <div className="text-sm text-green-800">Generate keys in EmailJet dashboard and add CNAME records</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-green-900">DMARC Policy</div>
                      <div className="text-sm text-green-800">
                        Start with p=none, monitor reports, then move to p=quarantine or p=reject
                      </div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-green-900">Custom Domain</div>
                      <div className="text-sm text-green-800">
                        Use your own domain, not a shared one. Consider subdomain for marketing emails
                      </div>
                    </div>
                  </li>
                </ul>
              </div>

              <p className="text-gray-700 text-sm">
                Need help?{' '}
                <a href="/product/domain-auth" className="text-blue-600 hover:underline">
                  See our domain authentication guide
                </a>
              </p>
            </section>

            <section id="list-quality" className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">List Quality & Hygiene</h2>

              <p className="text-gray-700 mb-6">
                <strong>Your email list is your most valuable asset.</strong> Quality always beats quantity. A small,
                engaged list will dramatically outperform a large, unengaged one in both deliverability and business results.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">Acquisition Best Practices</h3>

              <div className="space-y-6 mb-8">
                <div className="border-l-4 border-green-600 pl-4">
                  <h4 className="font-semibold text-gray-900 mb-2">✓ DO: Double Opt-In</h4>
                  <p className="text-sm text-gray-700">
                    Require email confirmation before adding subscribers. This ensures valid addresses and proves consent,
                    dramatically reducing bounce and complaint rates.
                  </p>
                </div>

                <div className="border-l-4 border-green-600 pl-4">
                  <h4 className="font-semibold text-gray-900 mb-2">✓ DO: Clear Value Proposition</h4>
                  <p className="text-sm text-gray-700">
                    Tell subscribers exactly what they'll receive and how often. Set expectations upfront to maintain
                    engagement.
                  </p>
                </div>

                <div className="border-l-4 border-red-600 pl-4">
                  <h4 className="font-semibold text-gray-900 mb-2">✗ DON'T: Purchase Lists</h4>
                  <p className="text-sm text-gray-700">
                    Never buy, rent, or scrape email lists. This guarantees high bounce and complaint rates, damaging your
                    sender reputation permanently.
                  </p>
                </div>

                <div className="border-l-4 border-red-600 pl-4">
                  <h4 className="font-semibold text-gray-900 mb-2">✗ DON'T: Pre-Checked Boxes</h4>
                  <p className="text-sm text-gray-700">
                    Require explicit opt-in. Pre-checked boxes lead to unengaged subscribers who mark emails as spam.
                  </p>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">List Maintenance</h3>

              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                <h4 className="font-semibold text-gray-900 mb-4">Monthly Hygiene Tasks:</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="font-mono text-blue-600 mt-1">→</span>
                    <span>
                      <strong>Remove hard bounces immediately</strong> - Invalid addresses hurt reputation
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-mono text-blue-600 mt-1">→</span>
                    <span>
                      <strong>Suppress complainers</strong> - Anyone who marks you as spam should never receive email again
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-mono text-blue-600 mt-1">→</span>
                    <span>
                      <strong>Re-engage inactive subscribers</strong> - Send win-back campaigns to non-openers (6+ months)
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-mono text-blue-600 mt-1">→</span>
                    <span>
                      <strong>Remove non-engagers</strong> - After re-engagement attempts fail, remove unresponsive subscribers
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-mono text-blue-600 mt-1">→</span>
                    <span>
                      <strong>Validate new addresses</strong> - Use email validation services for bulk imports
                    </span>
                  </li>
                </ul>
              </div>
            </section>

            <section id="content" className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Content Best Practices</h2>

              <p className="text-gray-700 mb-6">
                While engagement matters most, content still plays a role in spam filtering. Modern filters are sophisticated
                and look beyond simple "spam words" to evaluate overall quality and intent.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">Subject Line Guidelines</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div>
                  <h4 className="font-semibold text-green-900 mb-3">✓ Good Practices</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• Keep it under 50 characters</li>
                    <li>• Personalize when relevant</li>
                    <li>• Be specific and descriptive</li>
                    <li>• Match subject to content</li>
                    <li>• A/B test different approaches</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-red-900 mb-3">✗ Avoid</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• ALL CAPS or excessive punctuation!!!</li>
                    <li>• Deceptive subject lines</li>
                    <li>• Words like "FREE", "WINNER", "GUARANTEED"</li>
                    <li>• Excessive emojis (1-2 max)</li>
                    <li>• Misleading preview text</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">Email Body Content</h3>

              <div className="space-y-4">
                <Card title="Balance Text and Images">
                  <p className="text-sm text-gray-600 mb-2">
                    Aim for 60% text, 40% images. Image-only emails often trigger spam filters. Always include alt text for
                    images.
                  </p>
                </Card>

                <Card title="Clean HTML">
                  <p className="text-sm text-gray-600 mb-2">
                    Use modern, valid HTML. Avoid excessive tables, inline styles everywhere, and broken markup. EmailJet's
                    template builder ensures clean code.
                  </p>
                </Card>

                <Card title="Clear Unsubscribe">
                  <p className="text-sm text-gray-600 mb-2">
                    Make unsubscribe links obvious and easy to find. Hidden or broken unsubscribe links lead to spam complaints.
                    Include physical mailing address (required by CAN-SPAM).
                  </p>
                </Card>

                <Card title="Consistent Branding">
                  <p className="text-sm text-gray-600 mb-2">
                    Use recognizable from names and sender addresses. Consistency builds trust and recognition, improving open
                    rates.
                  </p>
                </Card>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-600 p-4 mt-6">
                <div className="flex items-start gap-3">
                  <AlertCircle className="text-yellow-600 mt-1" size={20} />
                  <div>
                    <div className="font-semibold text-yellow-900 mb-1">Spam Trigger Words</div>
                    <div className="text-sm text-yellow-800 mb-2">
                      While not as impactful as they used to be, avoid excessive use of:
                    </div>
                    <div className="text-sm text-yellow-800">
                      Free, Guarantee, Act now, Limited time, Click here, Winner, Congratulations, Cash, $$$, Viagra, Weight
                      loss, Make money, Risk free
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section id="engagement" className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Engagement Signals</h2>

              <p className="text-gray-700 mb-6">
                <strong>This is the #1 factor for modern deliverability.</strong> Gmail, Outlook, and other providers track
                how recipients interact with your emails. High engagement signals you're a wanted sender.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">Positive Signals</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="border border-green-200 bg-green-50 rounded-lg p-4">
                  <div className="font-semibold text-green-900 mb-2">Strong Signals</div>
                  <ul className="text-sm text-green-800 space-y-1">
                    <li>• Recipient replies to your email</li>
                    <li>• Email marked as "not spam"</li>
                    <li>• Added to contacts/address book</li>
                    <li>• Forwarded to others</li>
                  </ul>
                </div>
                <div className="border border-blue-200 bg-blue-50 rounded-lg p-4">
                  <div className="font-semibold text-blue-900 mb-2">Moderate Signals</div>
                  <ul className="text-sm text-blue-800 space-y-1">
                    <li>• Email opened within 1 hour</li>
                    <li>• Link clicked</li>
                    <li>• Read for 15+ seconds</li>
                    <li>• Moved to important/priority</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">Negative Signals</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="border border-red-200 bg-red-50 rounded-lg p-4">
                  <div className="font-semibold text-red-900 mb-2">Very Bad</div>
                  <ul className="text-sm text-red-800 space-y-1">
                    <li>• Marked as spam</li>
                    <li>• Deleted without opening (repeatedly)</li>
                    <li>• Bounced email</li>
                    <li>• Unsubscribed</li>
                  </ul>
                </div>
                <div className="border border-orange-200 bg-orange-50 rounded-lg p-4">
                  <div className="font-semibold text-orange-900 mb-2">Mildly Negative</div>
                  <ul className="text-sm text-orange-800 space-y-1">
                    <li>• Never opened (6+ emails)</li>
                    <li>• Opened but immediately deleted</li>
                    <li>• Moved to promotions tab</li>
                    <li>• No interaction over time</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">Improving Engagement</h3>

              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <TrendingUp size={20} className="text-blue-600 mt-1 flex-shrink-0" />
                  <span>
                    <strong>Segment your list</strong> - Send targeted content to specific groups based on behavior, preferences,
                    or demographics
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Eye size={20} className="text-blue-600 mt-1 flex-shrink-0" />
                  <span>
                    <strong>Optimize send times</strong> - Test different times/days. Engagement varies by audience and industry
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Mail size={20} className="text-blue-600 mt-1 flex-shrink-0" />
                  <span>
                    <strong>Personalize content</strong> - Use subscriber data to make emails relevant. Generic blasts
                    underperform
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Users size={20} className="text-blue-600 mt-1 flex-shrink-0" />
                  <span>
                    <strong>Sunset inactive subscribers</strong> - Remove non-engagers after re-engagement attempts. They hurt
                    overall metrics
                  </span>
                </li>
              </ul>
            </section>

            <section id="technical" className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Technical Factors</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Consistent Sending Patterns</h3>
                  <p className="text-gray-700 mb-3">
                    Sudden volume spikes trigger scrutiny. If you normally send 1,000 emails/day, don't suddenly send 50,000.
                    Ramp up gradually over weeks.
                  </p>
                  <div className="bg-blue-50 border border-blue-200 rounded p-3 text-sm text-blue-800">
                    <strong>Tip:</strong> When sending to a new list segment, start with your most engaged subscribers first.
                    Their positive engagement helps establish reputation.
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Monitor Blacklists</h3>
                  <p className="text-gray-700 mb-2">
                    Check if your domain or IP is blacklisted using tools like MXToolbox. EmailJet automatically monitors major
                    blacklists and alerts you.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Use Dedicated IPs (For High Volume)</h3>
                  <p className="text-gray-700">
                    If sending 100,000+ emails/month, consider a dedicated IP. This gives you full control over reputation,
                    though it requires proper warmup and maintenance.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Link Reputation</h3>
                  <p className="text-gray-700">
                    URLs in your emails are checked against blacklists. Use reputable domains, avoid URL shorteners (bit.ly,
                    tinyurl), and monitor link safety.
                  </p>
                </div>
              </div>
            </section>

            <section id="monitoring" className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Monitoring & Testing</h2>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Metrics to Track</h3>

              <div className="overflow-x-auto mb-6">
                <table className="min-w-full border border-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 border-b">Metric</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 border-b">Healthy Range</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 border-b">Action If Outside</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 text-sm font-semibold text-gray-900">Bounce Rate</td>
                      <td className="px-6 py-4 text-sm text-gray-700">{"< 2%"}</td>
                      <td className="px-6 py-4 text-sm text-gray-700">Clean list, use validation</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm font-semibold text-gray-900">Complaint Rate</td>
                      <td className="px-6 py-4 text-sm text-gray-700">{"< 0.1%"}</td>
                      <td className="px-6 py-4 text-sm text-gray-700">Review content, improve targeting</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm font-semibold text-gray-900">Open Rate</td>
                      <td className="px-6 py-4 text-sm text-gray-700">{"> 15%"}</td>
                      <td className="px-6 py-4 text-sm text-gray-700">Test subject lines, clean inactive</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm font-semibold text-gray-900">Unsubscribe Rate</td>
                      <td className="px-6 py-4 text-sm text-gray-700">{"< 0.5%"}</td>
                      <td className="px-6 py-4 text-sm text-gray-700">Reduce frequency, improve relevance</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">Inbox Placement Testing</h3>

              <p className="text-gray-700 mb-4">
                Regularly test where your emails land across different providers. EmailJet's analytics show delivery vs.
                acceptance rates, but third-party tools can test actual inbox placement.
              </p>

              <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Recommended Tools:</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• GlockApps - Comprehensive inbox placement testing</li>
                  <li>• Mail-Tester - Quick spam score check</li>
                  <li>• Postmark - Spam score and content analysis</li>
                </ul>
              </div>
            </section>

            <section id="common-mistakes" className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Common Mistakes to Avoid</h2>

              <div className="space-y-4">
                <div className="border-l-4 border-red-600 bg-red-50 p-4">
                  <h3 className="font-semibold text-red-900 mb-2">1. Buying Email Lists</h3>
                  <p className="text-sm text-red-800">
                    The fastest way to ruin your sender reputation. Purchased lists have invalid addresses, spam traps, and
                    people who never consented to your emails.
                  </p>
                </div>

                <div className="border-l-4 border-red-600 bg-red-50 p-4">
                  <h3 className="font-semibold text-red-900 mb-2">2. Ignoring Bounce Management</h3>
                  <p className="text-sm text-red-800">
                    Continuing to send to addresses that hard bounce damages reputation. EmailJet automatically suppresses hard
                    bounces.
                  </p>
                </div>

                <div className="border-l-4 border-red-600 bg-red-50 p-4">
                  <h3 className="font-semibold text-red-900 mb-2">3. No Unsubscribe Link</h3>
                  <p className="text-sm text-red-800">
                    Making it hard to unsubscribe leads to spam complaints. Always include a clear, one-click unsubscribe option.
                  </p>
                </div>

                <div className="border-l-4 border-red-600 bg-red-50 p-4">
                  <h3 className="font-semibold text-red-900 mb-2">4. Sending to Old Lists</h3>
                  <p className="text-sm text-red-800">
                    That 5-year-old list? Full of dead addresses and people who forgot about you. Re-engage or remove inactive
                    subscribers.
                  </p>
                </div>

                <div className="border-l-4 border-red-600 bg-red-50 p-4">
                  <h3 className="font-semibold text-red-900 mb-2">5. Inconsistent From Addresses</h3>
                  <p className="text-sm text-red-800">
                    Changing your from address confuses recipients and filters. Use consistent sender names and addresses for
                    brand recognition.
                  </p>
                </div>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-4 mt-8">
                <div className="font-semibold text-blue-900 mb-2">Need Help?</div>
                <p className="text-sm text-blue-800">
                  Our deliverability team can review your setup and provide personalized recommendations.{' '}
                  <a href="/contact" className="underline">
                    Contact support
                  </a>{' '}
                  or check our{' '}
                  <a href="/product/analytics" className="underline">
                    analytics dashboard
                  </a>{' '}
                  for real-time deliverability metrics.
                </p>
              </div>
            </section>
          </div>

          <div className="lg:col-span-1">
            <TOC items={tocItems} />
          </div>
        </div>
      </div>
    </div>
  )
}
