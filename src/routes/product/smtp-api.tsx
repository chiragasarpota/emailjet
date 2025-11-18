import { createFileRoute } from '@tanstack/react-router'
import { AlertTriangle, Check, Info, Server } from 'lucide-react'
import CodeBlock from '../../components/CodeBlock'
import Card from '../../components/Card'
import Breadcrumbs from '../../components/Breadcrumbs'
import TOC from '../../components/TOC'

export const Route = createFileRoute('/product/smtp-api')({
  component: SMTPAPIPage,
})

function SMTPAPIPage() {
  const tocItems = [
    { id: 'overview', title: 'Overview', level: 1 },
    { id: 'quick-start', title: 'Quick Start', level: 1 },
    { id: 'configuration', title: 'Configuration', level: 1 },
    { id: 'authentication', title: 'Authentication', level: 1 },
    { id: 'examples', title: 'Language Examples', level: 1 },
    { id: 'advanced', title: 'Advanced Usage', level: 1 },
    { id: 'troubleshooting', title: 'Troubleshooting', level: 1 },
  ]

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <Breadcrumbs items={[{ label: 'Product', href: '/product' }, { label: 'SMTP API' }]} />

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-3">
            {/* Hero */}
            <div className="mb-12">
              <div className="flex items-center gap-4 mb-4">
                <Server size={48} className="text-blue-600" />
                <h1 className="text-5xl font-bold text-gray-900">SMTP API</h1>
              </div>
              <p className="text-2xl text-gray-600">
                Use EmailJet as a drop-in SMTP relay. Compatible with any application or library that supports SMTP.
                No code changes required.
              </p>
            </div>

            {/* Overview */}
            <section id="overview" className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Overview</h2>
              <div className="prose max-w-none text-gray-700 space-y-4">
                <p>
                  EmailJet's SMTP API provides a standards-compliant SMTP server that acts as a relay for your outbound emails.
                  Whether you're using legacy applications, off-the-shelf software, or modern frameworks with built-in email libraries,
                  our SMTP service seamlessly integrates without requiring code changes.
                </p>
                <p>
                  Unlike traditional SMTP servers, EmailJet adds powerful features like real-time analytics, webhook notifications,
                  bounce handling, and deliverability optimization—all while maintaining full backward compatibility with the SMTP protocol.
                </p>
              </div>

              <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <div className="font-semibold text-blue-900 mb-1">99.99% Uptime</div>
                  <div className="text-sm text-blue-700">Enterprise-grade reliability</div>
                </div>
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <div className="font-semibold text-green-900 mb-1">TLS 1.2+</div>
                  <div className="text-sm text-green-700">Encrypted connections</div>
                </div>
                <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                  <div className="font-semibold text-purple-900 mb-1">No Rate Limits</div>
                  <div className="text-sm text-purple-700">Based on your plan</div>
                </div>
              </div>
            </section>

            {/* Quick Start */}
            <section id="quick-start" className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Quick Start</h2>
              <Card icon={<Info size={24} />} className="mb-6 bg-blue-50 border-blue-200">
                <p className="text-gray-700">
                  <strong>Prerequisites:</strong> You need an EmailJet API key. Get one by signing up at{' '}
                  <a href="#" className="text-blue-600 hover:underline">dashboard.emailjet.com</a>.
                </p>
              </Card>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Connection Details</h3>
                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 space-y-3">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <div className="text-sm text-gray-500 mb-1">SMTP Host</div>
                        <div className="font-mono text-gray-900">smtp.emailjet.com</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-500 mb-1">Ports</div>
                        <div className="font-mono text-gray-900">587 (TLS), 2525 (TLS), 465 (SSL)</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-500 mb-1">Username</div>
                        <div className="font-mono text-gray-900">emailjet</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-500 mb-1">Password</div>
                        <div className="font-mono text-gray-900">YOUR_API_KEY</div>
                      </div>
                    </div>
                  </div>
                </div>

                <Card icon={<Check size={24} />} title="Test Your Connection" className="bg-green-50 border-green-200">
                  <CodeBlock
                    language="bash"
                    code={`# Test SMTP connection using telnet
telnet smtp.emailjet.com 587

# Or use openssl for TLS testing
openssl s_client -connect smtp.emailjet.com:587 -starttls smtp`}
                  />
                </Card>
              </div>
            </section>

            {/* Configuration */}
            <section id="configuration" className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Configuration</h2>
              <div className="space-y-6">
                <Card title="Port Selection">
                  <p className="text-gray-700 mb-4">Choose the port based on your network environment:</p>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="font-mono text-sm bg-gray-100 px-3 py-1 rounded">587</div>
                      <div className="flex-1">
                        <div className="font-semibold text-gray-900">STARTTLS (Recommended)</div>
                        <div className="text-sm text-gray-600">
                          Standard submission port with STARTTLS encryption. Works with most firewalls.
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="font-mono text-sm bg-gray-100 px-3 py-1 rounded">2525</div>
                      <div className="flex-1">
                        <div className="font-semibold text-gray-900">Alternative STARTTLS</div>
                        <div className="text-sm text-gray-600">
                          Use if port 587 is blocked by your ISP or corporate firewall.
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="font-mono text-sm bg-gray-100 px-3 py-1 rounded">465</div>
                      <div className="flex-1">
                        <div className="font-semibold text-gray-900">SSL/TLS</div>
                        <div className="text-sm text-gray-600">
                          Implicit TLS from the start. Required by some legacy systems.
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>

                <Card title="TLS/SSL Requirements" icon={<Info size={24} />}>
                  <ul className="space-y-2 text-gray-700">
                    <li>• TLS 1.2 or higher is required (TLS 1.0/1.1 are disabled for security)</li>
                    <li>• Certificate verification is enforced (no self-signed certificates)</li>
                    <li>• SNI (Server Name Indication) must be supported</li>
                    <li>• Connection timeout: 30 seconds</li>
                    <li>• Idle timeout: 5 minutes</li>
                  </ul>
                </Card>
              </div>
            </section>

            {/* Authentication */}
            <section id="authentication" className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Authentication</h2>
              <p className="text-gray-700 mb-6">
                EmailJet uses your API key as the SMTP password. The username is always <code className="bg-gray-100 px-2 py-1 rounded font-mono text-sm">emailjet</code>.
                This approach allows you to rotate keys without changing your SMTP configuration.
              </p>

              <div className="space-y-4">
                <Card title="Supported AUTH Methods">
                  <ul className="space-y-2 text-gray-700">
                    <li>• <code className="bg-gray-100 px-2 py-1 rounded font-mono text-sm">PLAIN</code> - Simple username/password authentication</li>
                    <li>• <code className="bg-gray-100 px-2 py-1 rounded font-mono text-sm">LOGIN</code> - Legacy authentication method (for compatibility)</li>
                  </ul>
                </Card>

                <Card icon={<AlertTriangle size={24} />} className="bg-yellow-50 border-yellow-200">
                  <p className="text-gray-700">
                    <strong>Security Best Practice:</strong> Always use environment variables or secure secret management
                    for your API keys. Never commit keys to version control.
                  </p>
                </Card>
              </div>
            </section>

            {/* Examples */}
            <section id="examples" className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Language Examples</h2>

              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Node.js (Nodemailer)</h3>
                  <CodeBlock
                    language="javascript"
                    filename="sendmail.js"
                    code={`const nodemailer = require('nodemailer');

// Create transporter
const transporter = nodemailer.createTransporter({
  host: 'smtp.emailjet.com',
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: 'emailjet',
    pass: process.env.EMAILJET_API_KEY
  }
});

// Send email
async function sendEmail() {
  const info = await transporter.sendMail({
    from: '"Your App" <hello@yourapp.com>',
    to: 'user@example.com',
    subject: 'Welcome to Our Service',
    text: 'Thanks for signing up!',
    html: '<h1>Welcome!</h1><p>Thanks for signing up!</p>'
  });

  console.log('Message sent:', info.messageId);
}

sendEmail().catch(console.error);`}
                  />
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Python (smtplib)</h3>
                  <CodeBlock
                    language="python"
                    filename="sendmail.py"
                    code={`import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
import os

# Email configuration
SMTP_HOST = 'smtp.emailjet.com'
SMTP_PORT = 587
SMTP_USER = 'emailjet'
SMTP_PASS = os.getenv('EMAILJET_API_KEY')

# Create message
msg = MIMEMultipart('alternative')
msg['Subject'] = 'Welcome to Our Service'
msg['From'] = 'hello@yourapp.com'
msg['To'] = 'user@example.com'

# Add text and HTML parts
text = 'Thanks for signing up!'
html = '<h1>Welcome!</h1><p>Thanks for signing up!</p>'
msg.attach(MIMEText(text, 'plain'))
msg.attach(MIMEText(html, 'html'))

# Send email
with smtplib.SMTP(SMTP_HOST, SMTP_PORT) as server:
    server.starttls()
    server.login(SMTP_USER, SMTP_PASS)
    server.send_message(msg)
    print('Email sent successfully!')}`}
                  />
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">PHP (PHPMailer)</h3>
                  <CodeBlock
                    language="php"
                    filename="sendmail.php"
                    code={`<?php
use PHPMailer\\PHPMailer\\PHPMailer;
use PHPMailer\\PHPMailer\\Exception;

require 'vendor/autoload.php';

$mail = new PHPMailer(true);

try {
    // SMTP configuration
    $mail->isSMTP();
    $mail->Host       = 'smtp.emailjet.com';
    $mail->SMTPAuth   = true;
    $mail->Username   = 'emailjet';
    $mail->Password   = getenv('EMAILJET_API_KEY');
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port       = 587;

    // Email content
    $mail->setFrom('hello@yourapp.com', 'Your App');
    $mail->addAddress('user@example.com', 'John Doe');
    $mail->Subject = 'Welcome to Our Service';
    $mail->isHTML(true);
    $mail->Body    = '<h1>Welcome!</h1><p>Thanks for signing up!</p>';
    $mail->AltBody = 'Thanks for signing up!';

    $mail->send();
    echo 'Message sent successfully!';
} catch (Exception $e) {
    echo "Message could not be sent. Error: {$mail->ErrorInfo}";
}
?>`}
                  />
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Go (net/smtp)</h3>
                  <CodeBlock
                    language="go"
                    filename="sendmail.go"
                    code={`package main

import (
    "fmt"
    "net/smtp"
    "os"
)

func main() {
    // SMTP configuration
    smtpHost := "smtp.emailjet.com"
    smtpPort := "587"
    smtpUser := "emailjet"
    smtpPass := os.Getenv("EMAILJET_API_KEY")

    // Email message
    from := "hello@yourapp.com"
    to := []string{"user@example.com"}
    subject := "Subject: Welcome to Our Service\\n"
    body := "Thanks for signing up!"
    message := []byte(subject + "\\n" + body)

    // Authentication
    auth := smtp.PlainAuth("", smtpUser, smtpPass, smtpHost)

    // Send email
    err := smtp.SendMail(
        smtpHost+":"+smtpPort,
        auth,
        from,
        to,
        message,
    )

    if err != nil {
        fmt.Printf("Error sending email: %v\\n", err)
        return
    }

    fmt.Println("Email sent successfully!")
}`}
                  />
                </div>
              </div>
            </section>

            {/* Advanced Usage */}
            <section id="advanced" className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Advanced Usage</h2>

              <div className="space-y-6">
                <Card title="Connection Pooling">
                  <p className="text-gray-700 mb-4">
                    For high-volume sending, maintain persistent SMTP connections instead of creating a new connection for each email.
                    Most SMTP libraries support connection pooling:
                  </p>
                  <CodeBlock
                    language="javascript"
                    code={`// Nodemailer with connection pool
const transporter = nodemailer.createTransporter({
  host: 'smtp.emailjet.com',
  port: 587,
  pool: true,           // Enable pooling
  maxConnections: 5,    // Max concurrent connections
  maxMessages: 100,     // Max messages per connection
  auth: {
    user: 'emailjet',
    pass: process.env.EMAILJET_API_KEY
  }
});`}
                  />
                </Card>

                <Card title="Custom Headers">
                  <p className="text-gray-700 mb-4">
                    Add custom headers for tracking, categorization, or triggering EmailJet features:
                  </p>
                  <CodeBlock
                    language="javascript"
                    code={`await transporter.sendMail({
  from: 'hello@yourapp.com',
  to: 'user@example.com',
  subject: 'Order Confirmation',
  html: '<h1>Order #12345</h1>',
  headers: {
    'X-EmailJet-Tags': 'order-confirmation,transactional',
    'X-EmailJet-Campaign': 'summer-2024',
    'X-EmailJet-Priority': 'high'
  }
});`}
                  />
                </Card>

                <Card title="Bulk Sending">
                  <p className="text-gray-700 mb-4">
                    Send multiple emails efficiently using pipelining:
                  </p>
                  <CodeBlock
                    language="python"
                    code={`# Python bulk sending with connection reuse
with smtplib.SMTP('smtp.emailjet.com', 587) as server:
    server.starttls()
    server.login('emailjet', os.getenv('EMAILJET_API_KEY'))

    for user in users:
        msg = create_message(user)
        server.send_message(msg)
        print(f'Sent to {user.email}')

    print(f'Sent {len(users)} emails using single connection')`}
                  />
                </Card>
              </div>
            </section>

            {/* Troubleshooting */}
            <section id="troubleshooting" className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Troubleshooting</h2>

              <div className="space-y-6">
                <Card icon={<AlertTriangle size={24} />} title="Common Issues" className="bg-yellow-50 border-yellow-200">
                  <div className="space-y-4">
                    <div>
                      <div className="font-semibold text-gray-900 mb-2">Connection Timeout</div>
                      <ul className="text-sm text-gray-700 space-y-1 ml-4">
                        <li>• Check if your firewall blocks outbound SMTP ports (587, 2525, 465)</li>
                        <li>• Some ISPs block port 25 and 587 - try port 2525</li>
                        <li>• Verify DNS resolution for smtp.emailjet.com</li>
                      </ul>
                    </div>

                    <div>
                      <div className="font-semibold text-gray-900 mb-2">Authentication Failed</div>
                      <ul className="text-sm text-gray-700 space-y-1 ml-4">
                        <li>• Verify API key is correct (check for whitespace)</li>
                        <li>• Ensure username is exactly "emailjet" (lowercase)</li>
                        <li>• Confirm API key hasn't been revoked in dashboard</li>
                      </ul>
                    </div>

                    <div>
                      <div className="font-semibold text-gray-900 mb-2">TLS/SSL Errors</div>
                      <ul className="text-sm text-gray-700 space-y-1 ml-4">
                        <li>• Update your SMTP library to support TLS 1.2+</li>
                        <li>• Check system CA certificates are up to date</li>
                        <li>• For port 465, set secure: true in your client</li>
                      </ul>
                    </div>

                    <div>
                      <div className="font-semibold text-gray-900 mb-2">Rate Limiting</div>
                      <ul className="text-sm text-gray-700 space-y-1 ml-4">
                        <li>• Current plan limits shown in dashboard</li>
                        <li>• Implement exponential backoff for retries</li>
                        <li>• Consider upgrading plan for higher limits</li>
                      </ul>
                    </div>
                  </div>
                </Card>

                <Card title="Enable Debug Logging">
                  <p className="text-gray-700 mb-4">Enable detailed SMTP logging in your application:</p>
                  <CodeBlock
                    language="javascript"
                    code={`// Nodemailer debug mode
const transporter = nodemailer.createTransporter({
  host: 'smtp.emailjet.com',
  port: 587,
  debug: true,           // Show SMTP traffic
  logger: true,          // Log to console
  auth: {
    user: 'emailjet',
    pass: process.env.EMAILJET_API_KEY
  }
});`}
                  />
                </Card>
              </div>
            </section>

            {/* Best Practices */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Best Practices</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Check size={24} className="text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold text-gray-900">Use Connection Pooling</div>
                    <div className="text-gray-700">Reuse SMTP connections for better performance and reduced latency.</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check size={24} className="text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold text-gray-900">Implement Retry Logic</div>
                    <div className="text-gray-700">Handle temporary failures with exponential backoff (1s, 2s, 4s, 8s).</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check size={24} className="text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold text-gray-900">Monitor Delivery</div>
                    <div className="text-gray-700">Use webhooks to track bounces and failures in real-time.</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check size={24} className="text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold text-gray-900">Validate Email Addresses</div>
                    <div className="text-gray-700">Check syntax before sending to avoid bounces and preserve reputation.</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check size={24} className="text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold text-gray-900">Use TLS Encryption</div>
                    <div className="text-gray-700">Always enable STARTTLS or SSL/TLS for secure email transmission.</div>
                  </div>
                </div>
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
