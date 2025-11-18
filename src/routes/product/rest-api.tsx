import { createFileRoute } from '@tanstack/react-router'
import Breadcrumbs from '../../components/Breadcrumbs'
import CodeBlock from '../../components/CodeBlock'
import Card from '../../components/Card'
import TOC from '../../components/TOC'
import { AlertCircle, CheckCircle, Clock, Code2, Key, Shield, Zap } from 'lucide-react'

export const Route = createFileRoute('/product/rest-api')({
  component: RestAPIPage,
})

function RestAPIPage() {
  const tocItems = [
    { id: 'overview', title: 'Overview', level: 1 },
    { id: 'authentication', title: 'Authentication', level: 1 },
    { id: 'rate-limits', title: 'Rate Limits', level: 1 },
    { id: 'quick-start', title: 'Quick Start', level: 1 },
    { id: 'send-email', title: 'Send Email', level: 1 },
    { id: 'send-template', title: 'Send with Template', level: 2 },
    { id: 'batch-send', title: 'Batch Send', level: 2 },
    { id: 'templates', title: 'Template Management', level: 1 },
    { id: 'errors', title: 'Error Handling', level: 1 },
    { id: 'webhooks', title: 'Webhooks Integration', level: 1 },
    { id: 'best-practices', title: 'Best Practices', level: 1 },
  ]

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <Breadcrumbs items={[{ label: 'Product', href: '/product' }, { label: 'REST API' }]} />

        <div className="mb-8">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">REST API</h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Modern, developer-friendly RESTful API for sending transactional emails with advanced features like templating, batch processing, and real-time tracking.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <section id="overview" className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Overview</h2>

              <p className="text-gray-700 mb-6">
                The EmailJet REST API provides a straightforward HTTP interface for sending emails programmatically. It supports JSON payloads, comprehensive error responses, and automatic retry handling. Our API is designed with developer experience in mind, featuring clear endpoints, predictable responses, and extensive documentation.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <Card icon={<Zap size={24} />}>
                  <div className="font-semibold mb-2">Fast Responses</div>
                  <div className="text-sm text-gray-600">Average API response time under 100ms</div>
                </Card>
                <Card icon={<Shield size={24} />}>
                  <div className="font-semibold mb-2">Secure by Default</div>
                  <div className="text-sm text-gray-600">TLS 1.3, API key authentication</div>
                </Card>
                <Card icon={<CheckCircle size={24} />}>
                  <div className="font-semibold mb-2">99.99% Uptime</div>
                  <div className="text-sm text-gray-600">Enterprise-grade reliability SLA</div>
                </Card>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-4 mb-6">
                <div className="flex items-start gap-3">
                  <Code2 className="text-blue-600 mt-1" size={20} />
                  <div>
                    <div className="font-semibold text-blue-900 mb-1">Base URL</div>
                    <code className="text-sm text-blue-800">https://api.emailjet.com/v1</code>
                  </div>
                </div>
              </div>
            </section>

            <section id="authentication" className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Authentication</h2>

              <p className="text-gray-700 mb-4">
                All API requests must be authenticated using an API key sent in the <code className="bg-gray-100 px-2 py-1 rounded text-sm">Authorization</code> header. You can create and manage API keys from your EmailJet dashboard.
              </p>

              <CodeBlock
                language="bash"
                code={`curl -X POST https://api.emailjet.com/v1/emails/send \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "from": "sender@example.com",
    "to": "recipient@example.com",
    "subject": "Hello World",
    "html": "<h1>Hello from EmailJet!</h1>"
  }'`}
              />

              <div className="bg-yellow-50 border-l-4 border-yellow-600 p-4 mt-6">
                <div className="flex items-start gap-3">
                  <AlertCircle className="text-yellow-600 mt-1" size={20} />
                  <div>
                    <div className="font-semibold text-yellow-900 mb-1">Security Best Practice</div>
                    <div className="text-sm text-yellow-800">
                      Never expose your API keys in client-side code or public repositories. Use environment variables and keep keys secure.
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section id="rate-limits" className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Rate Limits</h2>

              <p className="text-gray-700 mb-4">
                API requests are rate limited to ensure fair usage and platform stability. Rate limit information is included in response headers.
              </p>

              <div className="overflow-x-auto mb-6">
                <table className="min-w-full border border-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 border-b">Plan</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 border-b">Requests/Second</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 border-b">Burst</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white">
                    <tr className="border-b">
                      <td className="px-6 py-4 text-sm text-gray-900">Free</td>
                      <td className="px-6 py-4 text-sm text-gray-700">10</td>
                      <td className="px-6 py-4 text-sm text-gray-700">20</td>
                    </tr>
                    <tr className="border-b">
                      <td className="px-6 py-4 text-sm text-gray-900">Starter</td>
                      <td className="px-6 py-4 text-sm text-gray-700">50</td>
                      <td className="px-6 py-4 text-sm text-gray-700">100</td>
                    </tr>
                    <tr className="border-b">
                      <td className="px-6 py-4 text-sm text-gray-900">Growth</td>
                      <td className="px-6 py-4 text-sm text-gray-700">200</td>
                      <td className="px-6 py-4 text-sm text-gray-700">400</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm text-gray-900">Business</td>
                      <td className="px-6 py-4 text-sm text-gray-700">500</td>
                      <td className="px-6 py-4 text-sm text-gray-700">1000</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-gray-700 text-sm">
                Response headers include: <code className="bg-gray-100 px-2 py-1 rounded">X-RateLimit-Limit</code>,
                <code className="bg-gray-100 px-2 py-1 rounded ml-2">X-RateLimit-Remaining</code>, and
                <code className="bg-gray-100 px-2 py-1 rounded ml-2">X-RateLimit-Reset</code>
              </p>
            </section>

            <section id="quick-start" className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Quick Start</h2>

              <p className="text-gray-700 mb-6">
                Get started in minutes with our official SDKs or direct HTTP requests. Here are examples in popular languages:
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Node.js</h3>
                  <CodeBlock
                    language="javascript"
                    filename="send-email.js"
                    code={`const fetch = require('node-fetch');

async function sendEmail() {
  const response = await fetch('https://api.emailjet.com/v1/emails/send', {
    method: 'POST',
    headers: {
      'Authorization': \`Bearer \${process.env.EMAILJET_API_KEY}\`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      from: 'notifications@yourapp.com',
      to: 'user@example.com',
      subject: 'Welcome to Our Platform',
      html: '<h1>Welcome!</h1><p>Thanks for signing up.</p>',
      tags: ['welcome', 'onboarding']
    })
  });

  const result = await response.json();
  console.log('Email sent:', result.messageId);
  return result;
}

sendEmail().catch(console.error);`}
                  />
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Python</h3>
                  <CodeBlock
                    language="python"
                    filename="send_email.py"
                    code={`import requests
import os

def send_email():
    response = requests.post(
        'https://api.emailjet.com/v1/emails/send',
        headers={
            'Authorization': f'Bearer {os.environ["EMAILJET_API_KEY"]}',
            'Content-Type': 'application/json'
        },
        json={
            'from': 'notifications@yourapp.com',
            'to': 'user@example.com',
            'subject': 'Welcome to Our Platform',
            'html': '<h1>Welcome!</h1><p>Thanks for signing up.</p>',
            'tags': ['welcome', 'onboarding']
        }
    )

    result = response.json()
    print(f"Email sent: {result['messageId']}")
    return result

if __name__ == '__main__':
    send_email()`}
                  />
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Go</h3>
                  <CodeBlock
                    language="go"
                    filename="send_email.go"
                    code={`package main

import (
    "bytes"
    "encoding/json"
    "fmt"
    "net/http"
    "os"
)

type EmailRequest struct {
    From    string   \`json:"from"\`
    To      string   \`json:"to"\`
    Subject string   \`json:"subject"\`
    HTML    string   \`json:"html"\`
    Tags    []string \`json:"tags"\`
}

func sendEmail() error {
    payload := EmailRequest{
        From:    "notifications@yourapp.com",
        To:      "user@example.com",
        Subject: "Welcome to Our Platform",
        HTML:    "<h1>Welcome!</h1><p>Thanks for signing up.</p>",
        Tags:    []string{"welcome", "onboarding"},
    }

    jsonData, _ := json.Marshal(payload)

    req, _ := http.NewRequest("POST",
        "https://api.emailjet.com/v1/emails/send",
        bytes.NewBuffer(jsonData))

    req.Header.Set("Authorization", "Bearer "+os.Getenv("EMAILJET_API_KEY"))
    req.Header.Set("Content-Type", "application/json")

    client := &http.Client{}
    resp, err := client.Do(req)
    if err != nil {
        return err
    }
    defer resp.Body.Close()

    var result map[string]interface{}
    json.NewDecoder(resp.Body).Decode(&result)
    fmt.Printf("Email sent: %v\\n", result["messageId"])

    return nil
}

func main() {
    sendEmail()
}`}
                  />
                </div>
              </div>
            </section>

            <section id="send-email" className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Send Email</h2>

              <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-4">
                <div className="font-mono text-sm">
                  <span className="text-green-600 font-semibold">POST</span> /v1/emails/send
                </div>
              </div>

              <p className="text-gray-700 mb-6">
                Send a single transactional email with full control over headers, attachments, and tracking options.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">Request Body Parameters</h3>

              <div className="overflow-x-auto mb-6">
                <table className="min-w-full border border-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 border-b">Parameter</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 border-b">Type</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 border-b">Required</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 border-b">Description</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white">
                    <tr className="border-b">
                      <td className="px-6 py-4 text-sm font-mono text-gray-900">from</td>
                      <td className="px-6 py-4 text-sm text-gray-700">string</td>
                      <td className="px-6 py-4 text-sm text-gray-700">Yes</td>
                      <td className="px-6 py-4 text-sm text-gray-700">Sender email address</td>
                    </tr>
                    <tr className="border-b">
                      <td className="px-6 py-4 text-sm font-mono text-gray-900">to</td>
                      <td className="px-6 py-4 text-sm text-gray-700">string</td>
                      <td className="px-6 py-4 text-sm text-gray-700">Yes</td>
                      <td className="px-6 py-4 text-sm text-gray-700">Recipient email address</td>
                    </tr>
                    <tr className="border-b">
                      <td className="px-6 py-4 text-sm font-mono text-gray-900">subject</td>
                      <td className="px-6 py-4 text-sm text-gray-700">string</td>
                      <td className="px-6 py-4 text-sm text-gray-700">Yes</td>
                      <td className="px-6 py-4 text-sm text-gray-700">Email subject line</td>
                    </tr>
                    <tr className="border-b">
                      <td className="px-6 py-4 text-sm font-mono text-gray-900">html</td>
                      <td className="px-6 py-4 text-sm text-gray-700">string</td>
                      <td className="px-6 py-4 text-sm text-gray-700">No*</td>
                      <td className="px-6 py-4 text-sm text-gray-700">HTML email body</td>
                    </tr>
                    <tr className="border-b">
                      <td className="px-6 py-4 text-sm font-mono text-gray-900">text</td>
                      <td className="px-6 py-4 text-sm text-gray-700">string</td>
                      <td className="px-6 py-4 text-sm text-gray-700">No*</td>
                      <td className="px-6 py-4 text-sm text-gray-700">Plain text email body</td>
                    </tr>
                    <tr className="border-b">
                      <td className="px-6 py-4 text-sm font-mono text-gray-900">cc</td>
                      <td className="px-6 py-4 text-sm text-gray-700">string[]</td>
                      <td className="px-6 py-4 text-sm text-gray-700">No</td>
                      <td className="px-6 py-4 text-sm text-gray-700">CC recipients</td>
                    </tr>
                    <tr className="border-b">
                      <td className="px-6 py-4 text-sm font-mono text-gray-900">bcc</td>
                      <td className="px-6 py-4 text-sm text-gray-700">string[]</td>
                      <td className="px-6 py-4 text-sm text-gray-700">No</td>
                      <td className="px-6 py-4 text-sm text-gray-700">BCC recipients</td>
                    </tr>
                    <tr className="border-b">
                      <td className="px-6 py-4 text-sm font-mono text-gray-900">replyTo</td>
                      <td className="px-6 py-4 text-sm text-gray-700">string</td>
                      <td className="px-6 py-4 text-sm text-gray-700">No</td>
                      <td className="px-6 py-4 text-sm text-gray-700">Reply-To address</td>
                    </tr>
                    <tr className="border-b">
                      <td className="px-6 py-4 text-sm font-mono text-gray-900">tags</td>
                      <td className="px-6 py-4 text-sm text-gray-700">string[]</td>
                      <td className="px-6 py-4 text-sm text-gray-700">No</td>
                      <td className="px-6 py-4 text-sm text-gray-700">Tags for categorization</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm font-mono text-gray-900">metadata</td>
                      <td className="px-6 py-4 text-sm text-gray-700">object</td>
                      <td className="px-6 py-4 text-sm text-gray-700">No</td>
                      <td className="px-6 py-4 text-sm text-gray-700">Custom metadata object</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-sm text-gray-600 mb-6">* Either <code className="bg-gray-100 px-2 py-1 rounded">html</code> or <code className="bg-gray-100 px-2 py-1 rounded">text</code> is required</p>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">Response</h3>

              <CodeBlock
                language="json"
                code={`{
  "success": true,
  "messageId": "msg_a1b2c3d4e5f6",
  "status": "queued",
  "to": "user@example.com",
  "timestamp": "2025-01-18T10:30:00Z"
}`}
              />
            </section>

            <section id="send-template" className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send with Template</h3>

              <p className="text-gray-700 mb-6">
                Use predefined templates with dynamic variables for consistent branding and easier maintenance.
              </p>

              <CodeBlock
                language="javascript"
                code={`const response = await fetch('https://api.emailjet.com/v1/emails/send', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    from: 'notifications@yourapp.com',
    to: 'user@example.com',
    templateId: 'welcome-email-v2',
    variables: {
      userName: 'John Doe',
      verificationLink: 'https://yourapp.com/verify?token=abc123',
      expiresIn: '24 hours'
    }
  })
});`}
              />
            </section>

            <section id="batch-send" className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Batch Send</h3>

              <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-4">
                <div className="font-mono text-sm">
                  <span className="text-green-600 font-semibold">POST</span> /v1/emails/batch
                </div>
              </div>

              <p className="text-gray-700 mb-6">
                Send multiple personalized emails in a single API call. Supports up to 1,000 recipients per batch.
              </p>

              <CodeBlock
                language="python"
                code={`import requests

response = requests.post(
    'https://api.emailjet.com/v1/emails/batch',
    headers={
        'Authorization': f'Bearer {API_KEY}',
        'Content-Type': 'application/json'
    },
    json={
        'from': 'updates@yourapp.com',
        'templateId': 'monthly-newsletter',
        'recipients': [
            {
                'to': 'user1@example.com',
                'variables': {'name': 'Alice', 'plan': 'Pro'}
            },
            {
                'to': 'user2@example.com',
                'variables': {'name': 'Bob', 'plan': 'Enterprise'}
            }
        ]
    }
)

result = response.json()
print(f"Batch sent: {result['batchId']}")`}
              />
            </section>

            <section id="templates" className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Template Management</h2>

              <p className="text-gray-700 mb-6">
                Manage email templates programmatically through the API. Create, update, and version your templates.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">Create Template</h3>

              <CodeBlock
                language="bash"
                code={`curl -X POST https://api.emailjet.com/v1/templates \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "name": "password-reset",
    "subject": "Reset your {{appName}} password",
    "html": "<h1>Reset Password</h1><p>Click here: {{resetLink}}</p>",
    "variables": ["appName", "resetLink"]
  }'`}
              />

              <h3 className="text-xl font-semibold text-gray-900 mb-4 mt-8">List Templates</h3>

              <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-4">
                <div className="font-mono text-sm">
                  <span className="text-blue-600 font-semibold">GET</span> /v1/templates
                </div>
              </div>

              <p className="text-gray-700 mb-4">Returns all templates for your account with pagination support.</p>
            </section>

            <section id="errors" className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Error Handling</h2>

              <p className="text-gray-700 mb-6">
                EmailJet uses conventional HTTP response codes and returns detailed error information in JSON format.
              </p>

              <div className="overflow-x-auto mb-6">
                <table className="min-w-full border border-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 border-b">Status Code</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 border-b">Meaning</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 border-b">Description</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white">
                    <tr className="border-b">
                      <td className="px-6 py-4 text-sm font-mono text-green-600">200</td>
                      <td className="px-6 py-4 text-sm font-semibold">OK</td>
                      <td className="px-6 py-4 text-sm text-gray-700">Request succeeded</td>
                    </tr>
                    <tr className="border-b">
                      <td className="px-6 py-4 text-sm font-mono text-red-600">400</td>
                      <td className="px-6 py-4 text-sm font-semibold">Bad Request</td>
                      <td className="px-6 py-4 text-sm text-gray-700">Invalid parameters</td>
                    </tr>
                    <tr className="border-b">
                      <td className="px-6 py-4 text-sm font-mono text-red-600">401</td>
                      <td className="px-6 py-4 text-sm font-semibold">Unauthorized</td>
                      <td className="px-6 py-4 text-sm text-gray-700">Invalid or missing API key</td>
                    </tr>
                    <tr className="border-b">
                      <td className="px-6 py-4 text-sm font-mono text-red-600">429</td>
                      <td className="px-6 py-4 text-sm font-semibold">Too Many Requests</td>
                      <td className="px-6 py-4 text-sm text-gray-700">Rate limit exceeded</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm font-mono text-red-600">500</td>
                      <td className="px-6 py-4 text-sm font-semibold">Server Error</td>
                      <td className="px-6 py-4 text-sm text-gray-700">Something went wrong on our end</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">Error Response Format</h3>

              <CodeBlock
                language="json"
                code={`{
  "success": false,
  "error": {
    "code": "INVALID_RECIPIENT",
    "message": "The recipient email address is not valid",
    "field": "to",
    "documentation": "https://docs.emailjet.com/errors#invalid-recipient"
  }
}`}
              />
            </section>

            <section id="webhooks" className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Webhooks Integration</h2>

              <p className="text-gray-700 mb-4">
                Receive real-time notifications about email events like deliveries, opens, clicks, and bounces. Configure webhooks in your dashboard or via API.
              </p>

              <CodeBlock
                language="javascript"
                code={`// Example webhook payload for email delivered event
{
  "event": "email.delivered",
  "timestamp": "2025-01-18T10:35:22Z",
  "messageId": "msg_a1b2c3d4e5f6",
  "recipient": "user@example.com",
  "tags": ["welcome"],
  "metadata": {
    "userId": "12345"
  }
}`}
              />

              <p className="text-gray-700 mt-4">
                Learn more in our <a href="/product/webhooks" className="text-blue-600 hover:underline">Webhooks documentation</a>.
              </p>
            </section>

            <section id="best-practices" className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Best Practices</h2>

              <div className="space-y-6">
                <Card icon={<Key size={24} />} title="Use Environment Variables">
                  <p className="text-sm">
                    Never hardcode API keys in your source code. Use environment variables or secret management services.
                  </p>
                </Card>

                <Card icon={<Clock size={24} />} title="Implement Retry Logic">
                  <p className="text-sm">
                    Use exponential backoff for retries. Our SDKs handle this automatically, but implement it for direct HTTP calls.
                  </p>
                </Card>

                <Card icon={<Shield size={24} />} title="Validate Email Addresses">
                  <p className="text-sm">
                    Validate email format client-side before making API calls to reduce errors and improve deliverability.
                  </p>
                </Card>

                <Card icon={<Zap size={24} />} title="Use Batch Endpoints">
                  <p className="text-sm">
                    When sending to multiple recipients, use the batch endpoint instead of individual calls for better performance.
                  </p>
                </Card>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-4 mt-8">
                <div className="font-semibold text-blue-900 mb-2">Need Help?</div>
                <p className="text-sm text-blue-800">
                  Check out our <a href="/docs" className="underline">Developer Documentation</a> for more examples,
                  or visit the <a href="/docs/troubleshooting" className="underline">Troubleshooting Guide</a> for common issues.
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
