import { createFileRoute } from '@tanstack/react-router'
import Breadcrumbs from '../../components/Breadcrumbs'
import CodeBlock from '../../components/CodeBlock'
import Card from '../../components/Card'
import TOC from '../../components/TOC'
import { Shield, CheckCircle, AlertCircle, Lock, Key, FileText, Globe, TrendingUp } from 'lucide-react'

export const Route = createFileRoute('/product/domain-auth')({
  component: DomainAuthPage,
})

function DomainAuthPage() {
  const tocItems = [
    { id: 'overview', title: 'Overview', level: 1 },
    { id: 'why-authenticate', title: 'Why Authenticate Your Domain', level: 1 },
    { id: 'spf', title: 'SPF Setup', level: 1 },
    { id: 'dkim', title: 'DKIM Setup', level: 1 },
    { id: 'dmarc', title: 'DMARC Setup', level: 1 },
    { id: 'verification', title: 'Verification & Testing', level: 1 },
    { id: 'troubleshooting', title: 'Troubleshooting', level: 1 },
    { id: 'best-practices', title: 'Best Practices', level: 1 },
  ]

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <Breadcrumbs items={[{ label: 'Product', href: '/product' }, { label: 'Domain Authentication' }]} />

        <div className="mb-8">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Domain Authentication</h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Protect your sender reputation and improve deliverability with SPF, DKIM, and DMARC authentication. Prove your
            emails are legitimate and prevent spoofing attacks.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <section id="overview" className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Overview</h2>

              <p className="text-gray-700 mb-6">
                Email authentication protocols (SPF, DKIM, and DMARC) are industry-standard methods to verify that emails sent
                from your domain are legitimate. Proper authentication dramatically improves deliverability, protects your
                brand from phishing attacks, and builds trust with mailbox providers.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <Card icon={<Shield size={24} />}>
                  <div className="font-semibold mb-2">Prevent Spoofing</div>
                  <div className="text-sm text-gray-600">Stop attackers from sending emails impersonating your domain</div>
                </Card>
                <Card icon={<TrendingUp size={24} />}>
                  <div className="font-semibold mb-2">Better Deliverability</div>
                  <div className="text-sm text-gray-600">Authenticated emails have higher inbox placement rates</div>
                </Card>
                <Card icon={<CheckCircle size={24} />}>
                  <div className="font-semibold mb-2">Build Trust</div>
                  <div className="text-sm text-gray-600">Show mailbox providers your emails are legitimate</div>
                </Card>
              </div>
            </section>

            <section id="why-authenticate" className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Authenticate Your Domain</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Without Authentication</h3>
                  <div className="bg-red-50 border-l-4 border-red-600 p-4">
                    <ul className="space-y-2 text-sm text-red-800">
                      <li className="flex items-start gap-2">
                        <AlertCircle size={16} className="mt-0.5 flex-shrink-0" />
                        <span>Emails may be flagged as spam or rejected entirely</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <AlertCircle size={16} className="mt-0.5 flex-shrink-0" />
                        <span>Your domain is vulnerable to phishing and spoofing attacks</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <AlertCircle size={16} className="mt-0.5 flex-shrink-0" />
                        <span>Lower sender reputation and deliverability rates</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <AlertCircle size={16} className="mt-0.5 flex-shrink-0" />
                        <span>No visibility into delivery failures or abuse</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">With Full Authentication</h3>
                  <div className="bg-green-50 border-l-4 border-green-600 p-4">
                    <ul className="space-y-2 text-sm text-green-800">
                      <li className="flex items-start gap-2">
                        <CheckCircle size={16} className="mt-0.5 flex-shrink-0" />
                        <span>Up to 10% improvement in inbox placement rates</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle size={16} className="mt-0.5 flex-shrink-0" />
                        <span>Protection against domain spoofing and phishing</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle size={16} className="mt-0.5 flex-shrink-0" />
                        <span>Better sender reputation with major mailbox providers</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle size={16} className="mt-0.5 flex-shrink-0" />
                        <span>DMARC reports provide insights into email traffic and abuse</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section id="spf" className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">SPF Setup</h2>

              <p className="text-gray-700 mb-4">
                SPF (Sender Policy Framework) allows you to specify which mail servers are authorized to send email on behalf
                of your domain. It's a DNS TXT record that lists approved sending IPs and domains.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-4 mb-6">
                <div className="flex items-start gap-3">
                  <FileText className="text-blue-600 mt-1" size={20} />
                  <div>
                    <div className="font-semibold text-blue-900 mb-1">Your SPF Record</div>
                    <code className="text-sm text-blue-800 block bg-white px-3 py-2 rounded mt-2">
                      v=spf1 include:spf.emailjet.com ~all
                    </code>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">Step-by-Step Setup</h3>

              <ol className="list-decimal list-inside space-y-4 text-gray-700 mb-6">
                <li>
                  <strong>Access your DNS provider</strong> (GoDaddy, Cloudflare, Route 53, etc.)
                </li>
                <li>
                  <strong>Create a new TXT record</strong> for your domain
                  <div className="ml-6 mt-2 bg-gray-50 border border-gray-200 rounded p-3 text-sm">
                    <div className="grid grid-cols-2 gap-2">
                      <div className="font-semibold">Name:</div>
                      <div className="font-mono">@ (or leave blank)</div>
                      <div className="font-semibold">Type:</div>
                      <div className="font-mono">TXT</div>
                      <div className="font-semibold">Value:</div>
                      <div className="font-mono">v=spf1 include:spf.emailjet.com ~all</div>
                      <div className="font-semibold">TTL:</div>
                      <div className="font-mono">3600 (1 hour)</div>
                    </div>
                  </div>
                </li>
                <li>
                  <strong>If you have an existing SPF record,</strong> add our include:
                  <CodeBlock
                    language="text"
                    code={`Before: v=spf1 include:_spf.google.com ~all
After:  v=spf1 include:_spf.google.com include:spf.emailjet.com ~all`}
                  />
                </li>
                <li>
                  <strong>Save the record</strong> and wait for DNS propagation (usually 5-30 minutes)
                </li>
                <li>
                  <strong>Verify in your EmailJet dashboard</strong> under Settings → Domain Authentication
                </li>
              </ol>

              <div className="bg-yellow-50 border-l-4 border-yellow-600 p-4">
                <div className="flex items-start gap-3">
                  <AlertCircle className="text-yellow-600 mt-1" size={20} />
                  <div>
                    <div className="font-semibold text-yellow-900 mb-1">Important Notes</div>
                    <ul className="text-sm text-yellow-800 space-y-1">
                      <li>• Only one SPF record is allowed per domain</li>
                      <li>• SPF records have a 10 DNS lookup limit</li>
                      <li>• Use ~all (soft fail) or -all (hard fail), never +all</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section id="dkim" className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">DKIM Setup</h2>

              <p className="text-gray-700 mb-4">
                DKIM (DomainKeys Identified Mail) adds a digital signature to your emails. This signature proves the email
                hasn't been tampered with in transit and verifies it came from your domain.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">Generate Your DKIM Keys</h3>

              <ol className="list-decimal list-inside space-y-4 text-gray-700 mb-6">
                <li>
                  <strong>Go to EmailJet Dashboard</strong> → Settings → Domain Authentication
                </li>
                <li>
                  <strong>Click "Generate DKIM Keys"</strong> for your domain
                </li>
                <li>
                  <strong>Copy the provided DNS records.</strong> You'll get 3 CNAME records like:
                  <div className="mt-3 space-y-3">
                    <div className="bg-gray-50 border border-gray-200 rounded p-3 text-sm">
                      <div className="grid grid-cols-2 gap-2">
                        <div className="font-semibold">Name:</div>
                        <div className="font-mono text-xs">emailjet._domainkey.yourdomain.com</div>
                        <div className="font-semibold">Type:</div>
                        <div className="font-mono">CNAME</div>
                        <div className="font-semibold">Value:</div>
                        <div className="font-mono text-xs">dkim1.emailjet.com</div>
                      </div>
                    </div>
                    <div className="bg-gray-50 border border-gray-200 rounded p-3 text-sm">
                      <div className="grid grid-cols-2 gap-2">
                        <div className="font-semibold">Name:</div>
                        <div className="font-mono text-xs">emailjet2._domainkey.yourdomain.com</div>
                        <div className="font-semibold">Type:</div>
                        <div className="font-mono">CNAME</div>
                        <div className="font-semibold">Value:</div>
                        <div className="font-mono text-xs">dkim2.emailjet.com</div>
                      </div>
                    </div>
                    <div className="bg-gray-50 border border-gray-200 rounded p-3 text-sm">
                      <div className="grid grid-cols-2 gap-2">
                        <div className="font-semibold">Name:</div>
                        <div className="font-mono text-xs">emailjet3._domainkey.yourdomain.com</div>
                        <div className="font-semibold">Type:</div>
                        <div className="font-mono">CNAME</div>
                        <div className="font-semibold">Value:</div>
                        <div className="font-mono text-xs">dkim3.emailjet.com</div>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <strong>Add these CNAME records</strong> to your DNS provider
                </li>
                <li>
                  <strong>Wait for DNS propagation</strong> (5-30 minutes)
                </li>
                <li>
                  <strong>Verify in EmailJet dashboard</strong> - the status will change to "Verified"
                </li>
              </ol>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-4">
                <div className="flex items-start gap-3">
                  <Key className="text-blue-600 mt-1" size={20} />
                  <div>
                    <div className="font-semibold text-blue-900 mb-1">Why 3 DKIM Keys?</div>
                    <div className="text-sm text-blue-800">
                      EmailJet uses key rotation for security. We automatically rotate between keys to prevent replay attacks
                      and maintain strong security.
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section id="dmarc" className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">DMARC Setup</h2>

              <p className="text-gray-700 mb-4">
                DMARC (Domain-based Message Authentication, Reporting & Conformance) builds on SPF and DKIM. It tells receiving
                servers what to do if an email fails authentication and provides reports on email activity.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">DMARC Policy Options</h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="font-semibold text-gray-900 mb-2">p=none (Monitor)</div>
                  <div className="text-sm text-gray-600 mb-3">
                    Monitor only. Collect reports but don't reject emails.
                  </div>
                  <div className="text-xs text-green-600">✓ Recommended for new setups</div>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="font-semibold text-gray-900 mb-2">p=quarantine</div>
                  <div className="text-sm text-gray-600 mb-3">Send failing emails to spam/junk folder.</div>
                  <div className="text-xs text-blue-600">→ After monitoring phase</div>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="font-semibold text-gray-900 mb-2">p=reject</div>
                  <div className="text-sm text-gray-600 mb-3">Reject failing emails completely.</div>
                  <div className="text-xs text-orange-600">⚠ Maximum protection</div>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">Recommended DMARC Record</h3>

              <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-4">
                <div className="font-mono text-sm text-gray-800 mb-3">
                  v=DMARC1; p=none; rua=mailto:dmarc@yourdomain.com; ruf=mailto:dmarc@yourdomain.com; fo=1
                </div>
                <div className="text-sm text-gray-600">
                  <strong>Name:</strong> _dmarc.yourdomain.com <strong className="ml-4">Type:</strong> TXT
                </div>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">Setup Steps</h3>

              <ol className="list-decimal list-inside space-y-3 text-gray-700 mb-6">
                <li>Create a mailbox to receive DMARC reports (e.g., dmarc@yourdomain.com)</li>
                <li>Add the TXT record to your DNS with p=none to start monitoring</li>
                <li>
                  Wait 24-48 hours and check your reports to ensure SPF and DKIM are passing for legitimate emails
                </li>
                <li>
                  Once confident, upgrade to p=quarantine, then eventually p=reject for maximum protection
                </li>
              </ol>

              <div className="space-y-4">
                <h4 className="font-semibold text-gray-900">DMARC Record Breakdown:</h4>
                <div className="overflow-x-auto">
                  <table className="min-w-full border border-gray-200 text-sm">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-4 py-2 text-left font-semibold text-gray-900 border-b">Tag</th>
                        <th className="px-4 py-2 text-left font-semibold text-gray-900 border-b">Description</th>
                        <th className="px-4 py-2 text-left font-semibold text-gray-900 border-b">Example</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      <tr>
                        <td className="px-4 py-2 font-mono">v</td>
                        <td className="px-4 py-2 text-gray-700">DMARC version</td>
                        <td className="px-4 py-2 font-mono">DMARC1</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 font-mono">p</td>
                        <td className="px-4 py-2 text-gray-700">Policy (none/quarantine/reject)</td>
                        <td className="px-4 py-2 font-mono">none</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 font-mono">rua</td>
                        <td className="px-4 py-2 text-gray-700">Aggregate report email</td>
                        <td className="px-4 py-2 font-mono">mailto:dmarc@yourdomain.com</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 font-mono">ruf</td>
                        <td className="px-4 py-2 text-gray-700">Forensic report email</td>
                        <td className="px-4 py-2 font-mono">mailto:dmarc@yourdomain.com</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 font-mono">pct</td>
                        <td className="px-4 py-2 text-gray-700">Percentage of emails to filter</td>
                        <td className="px-4 py-2 font-mono">100</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            <section id="verification" className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Verification & Testing</h2>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">EmailJet Dashboard</h3>
              <p className="text-gray-700 mb-4">
                The easiest way to verify your authentication setup is through the EmailJet dashboard. Go to Settings → Domain
                Authentication to see real-time verification status.
              </p>

              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle size={20} className="text-green-600" />
                    <span className="font-semibold text-gray-900">SPF</span>
                  </div>
                  <div className="text-sm text-green-600">Verified</div>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle size={20} className="text-green-600" />
                    <span className="font-semibold text-gray-900">DKIM</span>
                  </div>
                  <div className="text-sm text-green-600">Verified</div>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle size={20} className="text-green-600" />
                    <span className="font-semibold text-gray-900">DMARC</span>
                  </div>
                  <div className="text-sm text-green-600">Active</div>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">Command Line Testing</h3>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Check SPF Record:</h4>
                  <CodeBlock
                    language="bash"
                    code={`dig TXT yourdomain.com +short | grep spf

# Expected output:
# "v=spf1 include:spf.emailjet.com ~all"`}
                  />
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Check DKIM Record:</h4>
                  <CodeBlock
                    language="bash"
                    code={`dig CNAME emailjet._domainkey.yourdomain.com +short

# Expected output:
# dkim1.emailjet.com`}
                  />
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Check DMARC Record:</h4>
                  <CodeBlock
                    language="bash"
                    code={`dig TXT _dmarc.yourdomain.com +short

# Expected output:
# "v=DMARC1; p=none; rua=mailto:dmarc@yourdomain.com"`}
                  />
                </div>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-4 mt-8">Online Testing Tools</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center gap-2">
                  <Globe size={16} className="text-blue-600" />
                  <a href="https://mxtoolbox.com/spf.aspx" className="text-blue-600 hover:underline">
                    MXToolbox SPF Checker
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Globe size={16} className="text-blue-600" />
                  <a href="https://mxtoolbox.com/dkim.aspx" className="text-blue-600 hover:underline">
                    MXToolbox DKIM Checker
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Globe size={16} className="text-blue-600" />
                  <a href="https://dmarcian.com/dmarc-inspector/" className="text-blue-600 hover:underline">
                    Dmarcian DMARC Inspector
                  </a>
                </li>
              </ul>
            </section>

            <section id="troubleshooting" className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Troubleshooting</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">SPF Not Verifying</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Wait 30-60 minutes for DNS propagation</li>
                    <li>Ensure you only have ONE SPF record for your domain</li>
                    <li>Check that you're adding the record to the root domain, not a subdomain</li>
                    <li>Verify the record format exactly matches: v=spf1 include:spf.emailjet.com ~all</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">DKIM Not Verifying</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Double-check you added CNAME records, not TXT records</li>
                    <li>Verify the subdomain name matches exactly (including underscores)</li>
                    <li>Some DNS providers automatically append the domain - check for duplicates</li>
                    <li>Wait up to 24 hours for global DNS propagation</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">DMARC Reports Not Arriving</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Check spam folder for initial reports</li>
                    <li>Reports are sent daily, wait 24-48 hours after setup</li>
                    <li>Verify the email address in rua= tag is correct and accepts external emails</li>
                    <li>Some providers require you to verify ownership - check for verification emails</li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="best-practices" className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Best Practices</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card icon={<Shield size={24} />} title="Start with Monitoring">
                  <p className="text-sm text-gray-600">
                    Always start DMARC with p=none to monitor for a few weeks. This prevents accidentally blocking legitimate
                    emails.
                  </p>
                </Card>

                <Card icon={<Lock size={24} />} title="Rotate DKIM Keys Annually">
                  <p className="text-sm text-gray-600">
                    Generate new DKIM keys every 12 months for security. EmailJet makes this easy with one-click rotation.
                  </p>
                </Card>

                <Card icon={<FileText size={24} />} title="Monitor DMARC Reports">
                  <p className="text-sm text-gray-600">
                    Review weekly DMARC reports to identify unauthorized senders and ensure authentication is working properly.
                  </p>
                </Card>

                <Card icon={<CheckCircle size={24} />} title="Use Subdomains for Marketing">
                  <p className="text-sm text-gray-600">
                    Send marketing emails from a subdomain (mail.yourdomain.com) to protect your main domain's reputation.
                  </p>
                </Card>

                <Card icon={<Globe size={24} />} title="Test After Changes">
                  <p className="text-sm text-gray-600">
                    Always verify authentication after DNS changes. Send test emails and check headers for SPF/DKIM pass.
                  </p>
                </Card>

                <Card icon={<TrendingUp size={24} />} title="Gradually Enforce Policy">
                  <p className="text-sm text-gray-600">
                    Move from p=none → p=quarantine → p=reject over several weeks, monitoring reports at each stage.
                  </p>
                </Card>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-4 mt-8">
                <div className="font-semibold text-blue-900 mb-2">Need Help?</div>
                <p className="text-sm text-blue-800">
                  Our support team can help with DNS configuration and troubleshooting.{' '}
                  <a href="/contact" className="underline">
                    Contact us
                  </a>{' '}
                  or check our{' '}
                  <a href="/guides/email-authentication" className="underline">
                    detailed authentication guide
                  </a>
                  .
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
