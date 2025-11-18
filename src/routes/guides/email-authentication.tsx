import { createFileRoute } from '@tanstack/react-router'
import { AlertTriangle, Check, Info, Shield } from 'lucide-react'
import CodeBlock from '../../components/CodeBlock'
import Card from '../../components/Card'
import Breadcrumbs from '../../components/Breadcrumbs'
import TOC from '../../components/TOC'

export const Route = createFileRoute('/guides/email-authentication')({
  component: EmailAuthenticationGuide,
})

function EmailAuthenticationGuide() {
  const tocItems = [
    { id: 'introduction', title: 'Introduction', level: 1 },
    { id: 'why-authenticate', title: 'Why Authentication Matters', level: 1 },
    { id: 'spf', title: 'SPF: Sender Policy Framework', level: 1 },
    { id: 'spf-setup', title: 'Setting Up SPF', level: 2 },
    { id: 'spf-advanced', title: 'Advanced SPF Configuration', level: 2 },
    { id: 'dkim', title: 'DKIM: DomainKeys Identified Mail', level: 1 },
    { id: 'dkim-setup', title: 'Setting Up DKIM', level: 2 },
    { id: 'dkim-rotation', title: 'Key Rotation Strategy', level: 2 },
    { id: 'dmarc', title: 'DMARC: Domain-based Message Authentication', level: 1 },
    { id: 'dmarc-setup', title: 'Setting Up DMARC', level: 2 },
    { id: 'dmarc-monitoring', title: 'DMARC Monitoring & Reports', level: 2 },
    { id: 'testing', title: 'Testing Your Configuration', level: 1 },
    { id: 'common-issues', title: 'Common Issues', level: 1 },
    { id: 'best-practices', title: 'Best Practices', level: 1 },
  ]

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <Breadcrumbs
          items={[
            { label: 'Guides', href: '/docs' },
            { label: 'Email Authentication' },
          ]}
        />

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-3">
            {/* Hero */}
            <div className="mb-12">
              <div className="flex items-center gap-4 mb-4">
                <Shield size={48} className="text-blue-600" />
                <h1 className="text-5xl font-bold text-gray-900">
                  Email Authentication Deep Dive
                </h1>
              </div>
              <p className="text-2xl text-gray-600">
                A comprehensive guide to SPF, DKIM, and DMARC—the three pillars of email authentication
                that protect your domain and improve deliverability.
              </p>
              <div className="mt-4 flex items-center gap-2 text-gray-500">
                <Clock size={16} />
                <span>15 min read</span>
              </div>
            </div>

            {/* Introduction */}
            <section id="introduction" className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Introduction</h2>
              <div className="prose max-w-none text-gray-700 space-y-4">
                <p>
                  Email authentication is the foundation of modern email deliverability. Without proper authentication,
                  your emails face an uphill battle: they're more likely to land in spam folders, get rejected entirely,
                  or worse—allow attackers to impersonate your domain in phishing attacks.
                </p>
                <p>
                  This guide covers the three critical email authentication protocols: SPF (Sender Policy Framework),
                  DKIM (DomainKeys Identified Mail), and DMARC (Domain-based Message Authentication, Reporting, and Conformance).
                  By the end, you'll understand not just how to implement them, but why they work and how to troubleshoot issues.
                </p>
              </div>

              <Card icon={<Info size={24} />} className="mt-6 bg-blue-50 border-blue-200">
                <p className="text-gray-700">
                  <strong>Quick Win:</strong> Implementing all three protocols can improve inbox placement rates by 15-25%
                  according to industry studies. Major email providers (Gmail, Outlook, Yahoo) require authentication for bulk senders.
                </p>
              </Card>
            </section>

            {/* Why Authentication Matters */}
            <section id="why-authenticate" className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Authentication Matters</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">The Email Trust Problem</h3>
                  <p className="text-gray-700 mb-4">
                    SMTP (Simple Mail Transfer Protocol), the protocol that powers email, was designed in 1982—before
                    the internet was widely used and security wasn't a primary concern. SMTP has no built-in way to verify
                    that an email actually came from the domain it claims to be from.
                  </p>
                  <p className="text-gray-700 mb-4">
                    This means anyone can send an email claiming to be from <code className="bg-gray-100 px-2 py-1 rounded">ceo@yourcompany.com</code>,
                    and without authentication, receiving servers have no way to verify it's legitimate. This is why email
                    spoofing and phishing are so prevalent.
                  </p>
                </div>

                <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                  <h4 className="font-semibold text-red-900 mb-3 flex items-center gap-2">
                    <AlertTriangle size={20} />
                    Real-World Impact
                  </h4>
                  <p className="text-gray-700 mb-3">
                    Without authentication, attackers can:
                  </p>
                  <ul className="space-y-2 text-gray-700 ml-6">
                    <li>• Send phishing emails that appear to come from your domain</li>
                    <li>• Damage your brand reputation when users receive fake emails</li>
                    <li>• Get your legitimate emails blocked by ISPs detecting spoofing</li>
                    <li>• Conduct business email compromise (BEC) attacks</li>
                    <li>• Harvest credentials from employees and customers</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Deliverability Benefits</h3>
                  <p className="text-gray-700 mb-4">
                    Beyond security, authentication dramatically improves deliverability:
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                      <div className="font-semibold text-green-900 mb-2">With Authentication</div>
                      <ul className="space-y-1 text-sm text-green-800">
                        <li>• 85-95% inbox placement</li>
                        <li>• Trusted sender reputation</li>
                        <li>• Images load by default</li>
                        <li>• Domain protection from spoofing</li>
                      </ul>
                    </div>

                    <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                      <div className="font-semibold text-red-900 mb-2">Without Authentication</div>
                      <ul className="space-y-1 text-sm text-red-800">
                        <li>• 30-50% spam folder placement</li>
                        <li>• Unknown sender warnings</li>
                        <li>• Images blocked by default</li>
                        <li>• Vulnerable to domain spoofing</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* SPF Section */}
            <section id="spf" className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">SPF: Sender Policy Framework</h2>

              <p className="text-gray-700 mb-6">
                SPF allows you to publish a list of mail servers authorized to send email on behalf of your domain.
                When a receiving server gets an email from yourapp.com, it checks the DNS record to see if the sending
                server is on your approved list.
              </p>

              <div id="spf-setup" className="mb-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Setting Up SPF</h3>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Step 1: Identify Your Sending Sources</h4>
                    <p className="text-gray-700 mb-3">
                      List all services that send email from your domain:
                    </p>
                    <ul className="space-y-1 text-gray-700 ml-6 mb-4">
                      <li>• EmailJet (include:spf.emailjet.com)</li>
                      <li>• Google Workspace (include:_spf.google.com)</li>
                      <li>• Office 365 (include:spf.protection.outlook.com)</li>
                      <li>• Your own mail servers (ip4:203.0.113.0/24)</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Step 2: Build Your SPF Record</h4>
                    <p className="text-gray-700 mb-3">
                      Basic SPF record structure:
                    </p>
                    <CodeBlock
                      language="dns"
                      code={`Type: TXT
Host: @
Value: v=spf1 [mechanisms] [qualifier]

Example:
v=spf1 include:spf.emailjet.com include:_spf.google.com ~all`}
                    />

                    <div className="mt-4 bg-gray-50 border border-gray-200 rounded-lg p-4">
                      <p className="text-sm font-semibold text-gray-900 mb-2">SPF Components Explained:</p>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li>
                          <code className="bg-white px-2 py-1 rounded">v=spf1</code> - SPF version (always v=spf1)
                        </li>
                        <li>
                          <code className="bg-white px-2 py-1 rounded">include:</code> - Check another domain's SPF record
                        </li>
                        <li>
                          <code className="bg-white px-2 py-1 rounded">ip4:</code> - Authorize specific IPv4 address/range
                        </li>
                        <li>
                          <code className="bg-white px-2 py-1 rounded">ip6:</code> - Authorize specific IPv6 address/range
                        </li>
                        <li>
                          <code className="bg-white px-2 py-1 rounded">a</code> - Authorize your domain's A record IPs
                        </li>
                        <li>
                          <code className="bg-white px-2 py-1 rounded">mx</code> - Authorize your domain's MX record IPs
                        </li>
                        <li>
                          <code className="bg-white px-2 py-1 rounded">~all</code> - Soft fail (reject but don't bounce)
                        </li>
                        <li>
                          <code className="bg-white px-2 py-1 rounded">-all</code> - Hard fail (reject and bounce)
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Step 3: Add to DNS</h4>
                    <p className="text-gray-700 mb-3">
                      Add a TXT record to your domain's DNS:
                    </p>
                    <CodeBlock
                      language="text"
                      code={`# Cloudflare, GoDaddy, etc.
Type: TXT
Name: @ (or leave blank for root domain)
Value: v=spf1 include:spf.emailjet.com ~all
TTL: 3600 (1 hour)`}
                    />
                  </div>
                </div>
              </div>

              <div id="spf-advanced" className="mb-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Advanced SPF Configuration</h3>

                <div className="space-y-6">
                  <Card title="The 10 DNS Lookup Limit">
                    <p className="text-gray-700 mb-3">
                      SPF has a critical limitation: maximum 10 DNS lookups. Each <code className="bg-gray-100 px-2 py-1 rounded">include:</code> counts
                      as a lookup, and some includes trigger additional lookups.
                    </p>
                    <p className="text-gray-700 mb-3">
                      <strong>Example of exceeding the limit:</strong>
                    </p>
                    <CodeBlock
                      language="text"
                      code={`# BAD - Too many includes (likely exceeds 10 lookups)
v=spf1 \\
  include:_spf.google.com \\      # 3 lookups
  include:spf.emailjet.com \\     # 2 lookups
  include:sendgrid.net \\         # 2 lookups
  include:amazonses.com \\        # 3 lookups
  include:mailgun.org \\          # 2 lookups
  ~all
# Total: 12 lookups - WILL FAIL`}
                    />

                    <p className="text-gray-700 mb-3 mt-4">
                      <strong>Solution: Use IP addresses instead of includes</strong>
                    </p>
                    <CodeBlock
                      language="text"
                      code={`# GOOD - Reduced lookups
v=spf1 \\
  include:_spf.google.com \\
  ip4:203.0.113.0/24 \\           # EmailJet IPs (0 lookups)
  ip4:192.0.2.0/24 \\              # SendGrid IPs (0 lookups)
  ~all`}
                    />
                  </Card>

                  <Card title="Qualifier Choices: ~all vs -all">
                    <div className="space-y-4 text-gray-700">
                      <div>
                        <p className="font-semibold mb-2">~all (Soft Fail) - Recommended</p>
                        <p className="mb-2">
                          Tells receivers "this probably isn't legitimate, but don't reject it outright." Most ISPs will
                          mark it as spam but not bounce it.
                        </p>
                        <CodeBlock
                          language="text"
                          code="v=spf1 include:spf.emailjet.com ~all"
                        />
                      </div>

                      <div>
                        <p className="font-semibold mb-2">-all (Hard Fail) - Use with Caution</p>
                        <p className="mb-2">
                          Tells receivers "reject anything that doesn't match." Only use this if you're 100% certain your
                          SPF record includes all legitimate senders. One missing include = bounced emails.
                        </p>
                        <CodeBlock
                          language="text"
                          code="v=spf1 include:spf.emailjet.com -all"
                        />
                      </div>

                      <div className="bg-yellow-50 border border-yellow-200 rounded p-4">
                        <p className="text-sm">
                          <strong>Pro Tip:</strong> Start with <code className="bg-white px-2 py-1 rounded">~all</code>, monitor for a few weeks,
                          then switch to <code className="bg-white px-2 py-1 rounded">-all</code> once you're confident everything is working.
                        </p>
                      </div>
                    </div>
                  </Card>

                  <Card title="Multiple Domains & Subdomains">
                    <p className="text-gray-700 mb-3">
                      SPF records don't inherit. If you send email from subdomains, each needs its own SPF record:
                    </p>
                    <CodeBlock
                      language="text"
                      code={`# Main domain (yourapp.com)
v=spf1 include:spf.emailjet.com ~all

# Marketing subdomain (marketing.yourapp.com)
v=spf1 include:spf.emailjet.com ~all

# Notifications subdomain (notify.yourapp.com)
v=spf1 include:spf.emailjet.com ~all`}
                    />
                  </Card>
                </div>
              </div>
            </section>

            {/* DKIM Section */}
            <section id="dkim" className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">DKIM: DomainKeys Identified Mail</h2>

              <p className="text-gray-700 mb-6">
                DKIM adds a digital signature to your emails using cryptographic keys. When you send an email, EmailJet
                signs it with a private key. The receiving server verifies the signature using the public key published
                in your DNS. If the signature matches, the email hasn't been tampered with.
              </p>

              <div id="dkim-setup" className="mb-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Setting Up DKIM</h3>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Step 1: Generate DKIM Keys</h4>
                    <p className="text-gray-700 mb-3">
                      EmailJet generates a 2048-bit RSA key pair for you automatically. You'll see the public key in your dashboard:
                    </p>
                    <CodeBlock
                      language="text"
                      code={`# Example DKIM public key
v=DKIM1; k=rsa; p=MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA0...`}
                    />
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Step 2: Add DNS Records</h4>
                    <p className="text-gray-700 mb-3">
                      Add the DKIM TXT record to your DNS:
                    </p>
                    <CodeBlock
                      language="text"
                      code={`Type: TXT
Host: emailjet._domainkey
Value: v=DKIM1; k=rsa; p=MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8A...
TTL: 3600

# Note: Some DNS providers require different formats:
# - GoDaddy: emailjet._domainkey.yourapp.com
# - Cloudflare: emailjet._domainkey
# - AWS Route 53: emailjet._domainkey.yourapp.com`}
                    />
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Step 3: Verify</h4>
                    <p className="text-gray-700 mb-3">
                      Test your DKIM setup:
                    </p>
                    <CodeBlock
                      language="bash"
                      code={`# Query DNS for DKIM record
dig TXT emailjet._domainkey.yourapp.com

# Or use nslookup
nslookup -type=TXT emailjet._domainkey.yourapp.com

# Expected response should show your public key`}
                    />
                  </div>
                </div>
              </div>

              <div id="dkim-rotation" className="mb-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Key Rotation Strategy</h3>

                <p className="text-gray-700 mb-4">
                  EmailJet automatically rotates DKIM keys every 90 days for security. This prevents key compromise and
                  follows industry best practices. Here's how it works:
                </p>

                <Card className="bg-blue-50 border-blue-200">
                  <ol className="space-y-3 text-gray-700">
                    <li>
                      <strong>1. New Key Generation:</strong> We generate a new key pair 7 days before rotation
                    </li>
                    <li>
                      <strong>2. DNS Update:</strong> Add the new public key as <code className="bg-white px-2 py-1 rounded">emailjet-selector2._domainkey</code>
                    </li>
                    <li>
                      <strong>3. Propagation:</strong> Wait 72 hours for DNS propagation worldwide
                    </li>
                    <li>
                      <strong>4. Signing Switch:</strong> EmailJet starts signing with the new key
                    </li>
                    <li>
                      <strong>5. Old Key Retention:</strong> Keep the old key active for 30 days for emails still in flight
                    </li>
                    <li>
                      <strong>6. Cleanup:</strong> After 30 days, you can remove the old DNS record
                    </li>
                  </ol>
                </Card>
              </div>
            </section>

            {/* DMARC Section */}
            <section id="dmarc" className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">DMARC: Domain-based Message Authentication</h2>

              <p className="text-gray-700 mb-6">
                DMARC ties SPF and DKIM together and tells receiving servers what to do when authentication fails. It also
                provides reporting so you can monitor who's sending email from your domain—both legitimate and spoofed.
              </p>

              <div id="dmarc-setup" className="mb-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Setting Up DMARC</h3>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">DMARC Policy Progression</h4>
                    <p className="text-gray-700 mb-4">
                      Start with <code className="bg-gray-100 px-2 py-1 rounded">p=none</code> for monitoring, then gradually tighten:
                    </p>

                    <div className="space-y-4">
                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                        <p className="font-semibold text-blue-900 mb-2">Phase 1: Monitoring (Week 1-2)</p>
                        <CodeBlock
                          language="text"
                          code="v=DMARC1; p=none; rua=mailto:dmarc@yourapp.com"
                        />
                        <p className="text-sm text-blue-800 mt-2">
                          Collect data without affecting delivery. Review reports to identify all legitimate senders.
                        </p>
                      </div>

                      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                        <p className="font-semibold text-yellow-900 mb-2">Phase 2: Quarantine (Week 3-6)</p>
                        <CodeBlock
                          language="text"
                          code="v=DMARC1; p=quarantine; pct=10; rua=mailto:dmarc@yourapp.com"
                        />
                        <p className="text-sm text-yellow-800 mt-2">
                          Start with 10% of failing emails quarantined. Gradually increase <code className="bg-white px-2 py-1 rounded">pct</code> to 100%.
                        </p>
                      </div>

                      <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                        <p className="font-semibold text-green-900 mb-2">Phase 3: Reject (Week 7+)</p>
                        <CodeBlock
                          language="text"
                          code="v=DMARC1; p=reject; pct=100; rua=mailto:dmarc@yourapp.com; ruf=mailto:forensic@yourapp.com"
                        />
                        <p className="text-sm text-green-800 mt-2">
                          Maximum protection. Failing emails are rejected. Only implement after monitoring confirms no legitimate email is failing.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Complete DMARC Record</h4>
                    <CodeBlock
                      language="text"
                      code={`Type: TXT
Host: _dmarc
Value: v=DMARC1; p=quarantine; pct=100; rua=mailto:dmarc@yourapp.com; ruf=mailto:forensic@yourapp.com; fo=1; adkim=s; aspf=s; rf=afrf; pct=100; ri=86400

# Tag breakdown:
# v=DMARC1          - DMARC version
# p=quarantine      - Policy (none, quarantine, reject)
# pct=100           - Percentage of emails to apply policy to
# rua=mailto:...    - Aggregate report email
# ruf=mailto:...    - Forensic report email
# fo=1              - Forensic report options
# adkim=s           - DKIM alignment mode (s=strict, r=relaxed)
# aspf=s            - SPF alignment mode (s=strict, r=relaxed)
# rf=afrf           - Report format
# ri=86400          - Report interval in seconds (86400 = daily)`}
                    />
                  </div>
                </div>
              </div>

              <div id="dmarc-monitoring" className="mb-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">DMARC Monitoring & Reports</h3>

                <p className="text-gray-700 mb-4">
                  DMARC reports are sent in XML format daily by major ISPs. EmailJet's dashboard parses these reports
                  and presents actionable insights:
                </p>

                <Card title="What DMARC Reports Tell You">
                  <ul className="space-y-2 text-gray-700">
                    <li>• <strong>Volume:</strong> How many emails were sent from your domain</li>
                    <li>• <strong>Sources:</strong> IP addresses and domains sending on your behalf</li>
                    <li>• <strong>Authentication:</strong> SPF and DKIM pass/fail rates</li>
                    <li>• <strong>Alignment:</strong> Whether the from domain matches SPF/DKIM domains</li>
                    <li>• <strong>Disposition:</strong> What receiving servers did (accept, quarantine, reject)</li>
                    <li>• <strong>ISP Breakdown:</strong> Results by Gmail, Outlook, Yahoo, etc.</li>
                  </ul>
                </Card>

                <Card title="Identifying Spoofing Attempts" className="mt-6 bg-red-50 border-red-200">
                  <p className="text-gray-700 mb-3">
                    DMARC reports reveal unauthorized senders:
                  </p>
                  <CodeBlock
                    language="text"
                    code={`# Example: Unknown IP sending from your domain
Source IP: 185.234.218.45
Messages: 1,247
SPF: fail
DKIM: fail
Disposition: reject

Action: This is likely a spammer. Your domain is being spoofed.
Good news: With DMARC p=reject, these emails are being blocked.`}
                  />
                </Card>
              </div>
            </section>

            {/* Testing Section */}
            <section id="testing" className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Testing Your Configuration</h2>

              <div className="space-y-6">
                <Card title="Send a Test Email">
                  <ol className="space-y-3 text-gray-700">
                    <li>1. Send an email through EmailJet to your personal Gmail account</li>
                    <li>2. Open the email in Gmail</li>
                    <li>3. Click the three dots menu → "Show original"</li>
                    <li>4. Look for authentication results</li>
                  </ol>

                  <CodeBlock
                    language="text"
                    code={`# Good Authentication Results
Authentication-Results: mx.google.com;
  spf=pass (google.com: domain of hello@yourapp.com designates 203.0.113.10 as permitted sender)
  smtp.mailfrom=yourapp.com;
  dkim=pass header.i=@yourapp.com header.s=emailjet header.b=abc123;
  dmarc=pass (p=QUARANTINE sp=NONE dis=NONE) header.from=yourapp.com`}
                  />
                </Card>

                <Card title="Online Testing Tools">
                  <p className="text-gray-700 mb-3">
                    Use these free tools to verify your setup:
                  </p>
                  <ul className="space-y-2 text-gray-700 ml-6">
                    <li>• <strong>MXToolbox SPF Check:</strong> mxtoolbox.com/spf.aspx</li>
                    <li>• <strong>DKIM Validator:</strong> dkimvalidator.com</li>
                    <li>• <strong>DMARC Inspector:</strong> dmarcian.com/dmarc-inspector/</li>
                    <li>• <strong>Mail Tester:</strong> mail-tester.com (complete email test)</li>
                  </ul>
                </Card>

                <Card title="Command Line Testing">
                  <CodeBlock
                    language="bash"
                    code={`# Test SPF
dig TXT yourapp.com +short | grep "v=spf1"

# Test DKIM
dig TXT emailjet._domainkey.yourapp.com +short

# Test DMARC
dig TXT _dmarc.yourapp.com +short

# Expected outputs should show your records`}
                  />
                </Card>
              </div>
            </section>

            {/* Common Issues */}
            <section id="common-issues" className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Common Issues</h2>

              <div className="space-y-6">
                <Card icon={<AlertTriangle size={24} />} title="SPF Record Not Found">
                  <div className="space-y-3 text-gray-700">
                    <p><strong>Symptom:</strong> Emails fail SPF checks</p>
                    <p><strong>Causes:</strong></p>
                    <ul className="ml-6 space-y-1">
                      <li>• DNS propagation delay (wait 24-48 hours)</li>
                      <li>• Wrong DNS record type (must be TXT, not SPF type)</li>
                      <li>• Multiple SPF records (only one is allowed)</li>
                      <li>• Wrong hostname (should be @ or root domain)</li>
                    </ul>
                    <p><strong>Solution:</strong> Use <code className="bg-gray-100 px-2 py-1 rounded">dig TXT yourapp.com</code> to verify</p>
                  </div>
                </Card>

                <Card icon={<AlertTriangle size={24} />} title="DKIM Signature Verification Failed">
                  <div className="space-y-3 text-gray-700">
                    <p><strong>Symptom:</strong> Emails show <code className="bg-gray-100 px-2 py-1 rounded">dkim=fail</code></p>
                    <p><strong>Causes:</strong></p>
                    <ul className="ml-6 space-y-1">
                      <li>• Public key not yet propagated (wait 24 hours)</li>
                      <li>• Extra characters in DNS record (line breaks, spaces)</li>
                      <li>• Wrong selector name in DNS</li>
                      <li>• Email was modified in transit (mailing lists)</li>
                    </ul>
                    <p><strong>Solution:</strong> Copy the public key exactly as shown in EmailJet dashboard</p>
                  </div>
                </Card>

                <Card icon={<AlertTriangle size={24} />} title="DMARC Reports Not Arriving">
                  <div className="space-y-3 text-gray-700">
                    <p><strong>Symptom:</strong> No reports after 48 hours</p>
                    <p><strong>Causes:</strong></p>
                    <ul className="ml-6 space-y-1">
                      <li>• Low email volume (ISPs may not send reports for small volumes)</li>
                      <li>• Wrong email address format (must be mailto:address@domain.com)</li>
                      <li>• Spam filtering reports (check spam folder)</li>
                    </ul>
                    <p><strong>Solution:</strong> Use EmailJet's DMARC report aggregation service</p>
                  </div>
                </Card>
              </div>
            </section>

            {/* Best Practices */}
            <section id="best-practices" className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Best Practices</h2>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Check size={24} className="text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold text-gray-900">Start with Monitoring</div>
                    <div className="text-gray-700">
                      Always begin with DMARC <code className="bg-gray-100 px-2 py-1 rounded">p=none</code> to collect data without affecting delivery.
                      Review reports for at least 2 weeks before tightening policy.
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Check size={24} className="text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold text-gray-900">Document All Sending Sources</div>
                    <div className="text-gray-700">
                      Maintain a list of every service that sends email from your domain: transactional email services,
                      marketing platforms, CRM systems, HR software, etc.
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Check size={24} className="text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold text-gray-900">Use Subdomain Segmentation</div>
                    <div className="text-gray-700">
                      Send different types of email from different subdomains: transactional emails from notify.yourapp.com,
                      marketing from marketing.yourapp.com. This isolates reputation and simplifies authentication.
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Check size={24} className="text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold text-gray-900">Monitor Authentication Status</div>
                    <div className="text-gray-700">
                      Set up alerts in EmailJet dashboard for authentication failures. A sudden spike in failures may
                      indicate DNS issues or unauthorized sending.
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Check size={24} className="text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold text-gray-900">Keep DNS Records Updated</div>
                    <div className="text-gray-700">
                      When you stop using an email service, remove it from your SPF record immediately. Unnecessary includes
                      count against the 10 lookup limit and may cause authentication to break.
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Check size={24} className="text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold text-gray-900">Test After Changes</div>
                    <div className="text-gray-700">
                      Always send test emails after modifying DNS records. Wait 24-48 hours for propagation, then verify
                      authentication passes before deploying to production.
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Conclusion */}
            <section className="mb-12">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Summary</h2>
                <p className="text-gray-700 mb-4">
                  Email authentication isn't optional anymore. SPF, DKIM, and DMARC work together to:
                </p>
                <ul className="space-y-2 text-gray-700 ml-6 mb-4">
                  <li>• Protect your domain from spoofing and phishing attacks</li>
                  <li>• Dramatically improve inbox placement rates</li>
                  <li>• Build sender reputation with ISPs</li>
                  <li>• Provide visibility into email sending sources</li>
                  <li>• Meet requirements from Gmail, Yahoo, and other major providers</li>
                </ul>
                <p className="text-gray-700">
                  Start today: implement SPF and DKIM, then gradually roll out DMARC monitoring. Within a few weeks,
                  you'll have complete visibility and protection for your email domain.
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

function Clock({ size }: { size: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  )
}
