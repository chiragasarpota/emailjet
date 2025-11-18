import { createFileRoute } from '@tanstack/react-router'
import Breadcrumbs from '../../components/Breadcrumbs'
import CodeBlock from '../../components/CodeBlock'
import Card from '../../components/Card'
import TOC from '../../components/TOC'
import { Webhook, Shield, Zap, Bell, CheckCircle, AlertCircle, Clock, Lock } from 'lucide-react'

export const Route = createFileRoute('/product/webhooks')({
  component: WebhooksPage,
})

function WebhooksPage() {
  const tocItems = [
    { id: 'overview', title: 'Overview', level: 1 },
    { id: 'event-types', title: 'Event Types', level: 1 },
    { id: 'setup', title: 'Setting Up Webhooks', level: 1 },
    { id: 'payload', title: 'Payload Structure', level: 1 },
    { id: 'security', title: 'Security & Verification', level: 1 },
    { id: 'handling', title: 'Handling Events', level: 1 },
    { id: 'retry', title: 'Retry Logic', level: 1 },
    { id: 'testing', title: 'Testing Webhooks', level: 1 },
    { id: 'best-practices', title: 'Best Practices', level: 1 },
  ]

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <Breadcrumbs items={[{ label: 'Product', href: '/product' }, { label: 'Webhooks' }]} />

        <div className="mb-8">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Webhooks</h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Receive real-time notifications about email events. Track deliveries, opens, clicks, bounces, complaints, and more
            to power your application's workflows.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <section id="overview" className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Overview</h2>

              <p className="text-gray-700 mb-6">
                Webhooks provide real-time event notifications for your email activity. Instead of polling our API for status
                updates, EmailJet will push event data to your server as events occur. This enables you to build responsive
                applications that react immediately to email events.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <Card icon={<Zap size={24} />}>
                  <div className="font-semibold mb-2">Real-time Updates</div>
                  <div className="text-sm text-gray-600">Events delivered within seconds of occurrence</div>
                </Card>
                <Card icon={<Shield size={24} />}>
                  <div className="font-semibold mb-2">Secure Delivery</div>
                  <div className="text-sm text-gray-600">HMAC signature verification included</div>
                </Card>
                <Card icon={<Clock size={24} />}>
                  <div className="font-semibold mb-2">Automatic Retries</div>
                  <div className="text-sm text-gray-600">Failed deliveries retried up to 3 times</div>
                </Card>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-4">
                <div className="flex items-start gap-3">
                  <Bell className="text-blue-600 mt-1" size={20} />
                  <div>
                    <div className="font-semibold text-blue-900 mb-1">Common Use Cases</div>
                    <ul className="text-sm text-blue-800 space-y-1">
                      <li>• Update user dashboard with delivery status</li>
                      <li>• Trigger follow-up workflows based on opens/clicks</li>
                      <li>• Maintain email reputation with bounce tracking</li>
                      <li>• Monitor and alert on complaint rates</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section id="event-types" className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Event Types</h2>

              <p className="text-gray-700 mb-6">
                EmailJet tracks comprehensive email lifecycle events. Subscribe to only the events you need for your application.
              </p>

              <div className="overflow-x-auto mb-6">
                <table className="min-w-full border border-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 border-b">Event</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 border-b">Description</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 border-b">Typical Timing</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 text-sm font-mono text-gray-900">email.queued</td>
                      <td className="px-6 py-4 text-sm text-gray-700">Email accepted and queued for sending</td>
                      <td className="px-6 py-4 text-sm text-gray-600">Immediate</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm font-mono text-gray-900">email.sent</td>
                      <td className="px-6 py-4 text-sm text-gray-700">Email sent to recipient's mail server</td>
                      <td className="px-6 py-4 text-sm text-gray-600">{"< 1 min"}</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm font-mono text-gray-900">email.delivered</td>
                      <td className="px-6 py-4 text-sm text-gray-700">Successfully delivered to recipient inbox</td>
                      <td className="px-6 py-4 text-sm text-gray-600">1-5 mins</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm font-mono text-gray-900">email.opened</td>
                      <td className="px-6 py-4 text-sm text-gray-700">Recipient opened the email</td>
                      <td className="px-6 py-4 text-sm text-gray-600">Variable</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm font-mono text-gray-900">email.clicked</td>
                      <td className="px-6 py-4 text-sm text-gray-700">Recipient clicked a tracked link</td>
                      <td className="px-6 py-4 text-sm text-gray-600">Variable</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm font-mono text-gray-900">email.bounced</td>
                      <td className="px-6 py-4 text-sm text-gray-700">Email bounced (hard or soft)</td>
                      <td className="px-6 py-4 text-sm text-gray-600">1-5 mins</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm font-mono text-gray-900">email.complained</td>
                      <td className="px-6 py-4 text-sm text-gray-700">Recipient marked email as spam</td>
                      <td className="px-6 py-4 text-sm text-gray-600">Variable</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm font-mono text-gray-900">email.unsubscribed</td>
                      <td className="px-6 py-4 text-sm text-gray-700">Recipient clicked unsubscribe link</td>
                      <td className="px-6 py-4 text-sm text-gray-600">Immediate</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section id="setup" className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Setting Up Webhooks</h2>

              <p className="text-gray-700 mb-6">
                Configure webhooks through the dashboard or programmatically via our API. You can set up multiple webhook
                endpoints for different events.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">Via Dashboard</h3>
              <ol className="list-decimal list-inside space-y-3 text-gray-700 mb-8">
                <li>Navigate to Settings {">"} Webhooks in your EmailJet dashboard</li>
                <li>Click "Add Webhook Endpoint"</li>
                <li>Enter your endpoint URL (must be HTTPS)</li>
                <li>Select events to subscribe to</li>
                <li>Save and copy your webhook signing secret</li>
              </ol>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">Via API</h3>
              <CodeBlock
                language="bash"
                code={`curl -X POST https://api.emailjet.com/v1/webhooks \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "url": "https://yourapp.com/api/emailjet/webhook",
    "events": [
      "email.delivered",
      "email.bounced",
      "email.complained",
      "email.opened",
      "email.clicked"
    ],
    "enabled": true
  }'`}
              />

              <div className="bg-yellow-50 border-l-4 border-yellow-600 p-4 mt-6">
                <div className="flex items-start gap-3">
                  <AlertCircle className="text-yellow-600 mt-1" size={20} />
                  <div>
                    <div className="font-semibold text-yellow-900 mb-1">HTTPS Required</div>
                    <div className="text-sm text-yellow-800">
                      Webhook endpoints must use HTTPS for security. HTTP endpoints will be rejected.
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section id="payload" className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Payload Structure</h2>

              <p className="text-gray-700 mb-6">
                All webhook payloads follow a consistent JSON structure. The <code className="bg-gray-100 px-2 py-1 rounded text-sm">event</code> field indicates the event type,
                and the <code className="bg-gray-100 px-2 py-1 rounded text-sm">data</code> object contains event-specific information.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">Delivered Event</h3>
              <CodeBlock
                language="json"
                code={`{
  "id": "evt_a1b2c3d4e5f6",
  "event": "email.delivered",
  "timestamp": "2025-01-18T10:35:22Z",
  "data": {
    "messageId": "msg_xyz789",
    "recipient": "user@example.com",
    "from": "notifications@yourapp.com",
    "subject": "Welcome to Our Platform",
    "tags": ["welcome", "onboarding"],
    "metadata": {
      "userId": "12345",
      "signupDate": "2025-01-18"
    },
    "smtpResponse": "250 2.0.0 OK"
  }
}`}
              />

              <h3 className="text-xl font-semibold text-gray-900 mb-4 mt-8">Bounced Event</h3>
              <CodeBlock
                language="json"
                code={`{
  "id": "evt_b7c8d9e0f1g2",
  "event": "email.bounced",
  "timestamp": "2025-01-18T10:36:15Z",
  "data": {
    "messageId": "msg_abc456",
    "recipient": "invalid@example.com",
    "from": "notifications@yourapp.com",
    "bounceType": "hard",
    "bounceReason": "mailbox_not_found",
    "smtpResponse": "550 5.1.1 User unknown",
    "tags": ["welcome"],
    "metadata": {
      "userId": "67890"
    }
  }
}`}
              />

              <h3 className="text-xl font-semibold text-gray-900 mb-4 mt-8">Opened Event</h3>
              <CodeBlock
                language="json"
                code={`{
  "id": "evt_c3d4e5f6g7h8",
  "event": "email.opened",
  "timestamp": "2025-01-18T11:45:30Z",
  "data": {
    "messageId": "msg_def123",
    "recipient": "user@example.com",
    "userAgent": "Mozilla/5.0 (iPhone; CPU iPhone OS 16_0...",
    "ipAddress": "203.0.113.42",
    "location": {
      "city": "San Francisco",
      "region": "CA",
      "country": "US"
    },
    "tags": ["newsletter"],
    "metadata": {
      "campaignId": "summer-2025"
    }
  }
}`}
              />

              <h3 className="text-xl font-semibold text-gray-900 mb-4 mt-8">Clicked Event</h3>
              <CodeBlock
                language="json"
                code={`{
  "id": "evt_d5e6f7g8h9i0",
  "event": "email.clicked",
  "timestamp": "2025-01-18T11:47:22Z",
  "data": {
    "messageId": "msg_def123",
    "recipient": "user@example.com",
    "url": "https://yourapp.com/pricing",
    "linkText": "View Pricing",
    "userAgent": "Mozilla/5.0...",
    "ipAddress": "203.0.113.42",
    "tags": ["newsletter"],
    "metadata": {
      "campaignId": "summer-2025"
    }
  }
}`}
              />
            </section>

            <section id="security" className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Security & Verification</h2>

              <p className="text-gray-700 mb-6">
                Every webhook request includes an HMAC signature in the <code className="bg-gray-100 px-2 py-1 rounded text-sm">X-EmailJet-Signature</code> header.
                Always verify this signature to ensure the request came from EmailJet.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">Node.js Verification</h3>
              <CodeBlock
                language="javascript"
                filename="verify-webhook.js"
                code={`const crypto = require('crypto');

function verifyWebhookSignature(payload, signature, secret) {
  const hmac = crypto.createHmac('sha256', secret);
  const digest = hmac.update(payload).digest('hex');

  return crypto.timingSafeEqual(
    Buffer.from(signature),
    Buffer.from(digest)
  );
}

// Express.js middleware example
app.post('/api/emailjet/webhook', express.raw({ type: 'application/json' }), (req, res) => {
  const signature = req.headers['x-emailjet-signature'];
  const payload = req.body;
  const secret = process.env.EMAILJET_WEBHOOK_SECRET;

  if (!verifyWebhookSignature(payload, signature, secret)) {
    return res.status(401).send('Invalid signature');
  }

  const event = JSON.parse(payload);

  // Process the event
  console.log(\`Received event: \${event.event}\`);

  res.status(200).send('OK');
});`}
              />

              <h3 className="text-xl font-semibold text-gray-900 mb-4 mt-8">Python Verification</h3>
              <CodeBlock
                language="python"
                filename="verify_webhook.py"
                code={`import hmac
import hashlib
from flask import Flask, request, abort

app = Flask(__name__)

def verify_webhook_signature(payload, signature, secret):
    expected_sig = hmac.new(
        secret.encode('utf-8'),
        payload,
        hashlib.sha256
    ).hexdigest()

    return hmac.compare_digest(signature, expected_sig)

@app.route('/api/emailjet/webhook', methods=['POST'])
def webhook():
    signature = request.headers.get('X-EmailJet-Signature')
    payload = request.get_data()
    secret = os.environ['EMAILJET_WEBHOOK_SECRET']

    if not verify_webhook_signature(payload, signature, secret):
        abort(401, 'Invalid signature')

    event = request.get_json()

    # Process the event
    print(f"Received event: {event['event']}")

    return 'OK', 200`}
              />
            </section>

            <section id="handling" className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Handling Events</h2>

              <p className="text-gray-700 mb-6">
                Your webhook endpoint should process events quickly and return a 2xx status code. For long-running tasks, queue
                the event for asynchronous processing.
              </p>

              <CodeBlock
                language="javascript"
                filename="handle-events.js"
                code={`// Good: Quick processing with queuing
app.post('/webhook', async (req, res) => {
  const event = req.body;

  // Verify signature first
  if (!verifySignature(req)) {
    return res.status(401).send('Invalid signature');
  }

  // Quickly acknowledge receipt
  res.status(200).send('OK');

  // Queue for async processing
  await eventQueue.add('process-email-event', {
    eventId: event.id,
    eventType: event.event,
    data: event.data
  });
});

// Process events asynchronously
eventQueue.process('process-email-event', async (job) => {
  const { eventType, data } = job.data;

  switch (eventType) {
    case 'email.delivered':
      await updateUserEmailStatus(data.metadata.userId, 'delivered');
      break;

    case 'email.bounced':
      await handleBounce(data);
      if (data.bounceType === 'hard') {
        await disableUserEmail(data.metadata.userId);
      }
      break;

    case 'email.opened':
      await trackEngagement(data.metadata.userId, 'open');
      break;

    case 'email.clicked':
      await trackEngagement(data.metadata.userId, 'click', data.url);
      break;

    case 'email.complained':
      await handleComplaint(data);
      await unsubscribeUser(data.metadata.userId);
      break;
  }
});`}
              />
            </section>

            <section id="retry" className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Retry Logic</h2>

              <p className="text-gray-700 mb-6">
                If your endpoint returns a non-2xx status code or times out (10 second timeout), EmailJet will automatically
                retry the delivery with exponential backoff.
              </p>

              <div className="overflow-x-auto mb-6">
                <table className="min-w-full border border-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 border-b">Attempt</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 border-b">Delay</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 border-b">Total Elapsed</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 text-sm text-gray-900">1 (initial)</td>
                      <td className="px-6 py-4 text-sm text-gray-700">-</td>
                      <td className="px-6 py-4 text-sm text-gray-700">0s</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm text-gray-900">2</td>
                      <td className="px-6 py-4 text-sm text-gray-700">5 minutes</td>
                      <td className="px-6 py-4 text-sm text-gray-700">5 min</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm text-gray-900">3</td>
                      <td className="px-6 py-4 text-sm text-gray-700">30 minutes</td>
                      <td className="px-6 py-4 text-sm text-gray-700">35 min</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm text-gray-900">4</td>
                      <td className="px-6 py-4 text-sm text-gray-700">2 hours</td>
                      <td className="px-6 py-4 text-sm text-gray-700">2h 35min</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-sm text-gray-600">
                After 4 failed attempts, the webhook will be marked as failed. You can view failed webhooks in your dashboard
                and manually retry them.
              </p>
            </section>

            <section id="testing" className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Testing Webhooks</h2>

              <p className="text-gray-700 mb-6">
                Test your webhook integration locally using tools like ngrok or our webhook testing feature in the dashboard.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">Send Test Event</h3>
              <CodeBlock
                language="bash"
                code={`curl -X POST https://api.emailjet.com/v1/webhooks/wh_abc123/test \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "event": "email.delivered"
  }'`}
              />

              <h3 className="text-xl font-semibold text-gray-900 mb-4 mt-6">Local Development with ngrok</h3>
              <CodeBlock
                language="bash"
                code={`# 1. Start your local server
npm start  # Running on localhost:3000

# 2. In another terminal, start ngrok
ngrok http 3000

# 3. Copy the HTTPS URL (e.g., https://abc123.ngrok.io)
# 4. Add this URL to your EmailJet webhook configuration
# 5. Send test events from the dashboard`}
              />
            </section>

            <section id="best-practices" className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Best Practices</h2>

              <div className="space-y-6">
                <Card icon={<CheckCircle size={24} />} title="Return 200 Quickly">
                  <p className="text-sm text-gray-600">
                    Respond with 200 status immediately. Process events asynchronously using a job queue to avoid timeouts.
                  </p>
                </Card>

                <Card icon={<Lock size={24} />} title="Always Verify Signatures">
                  <p className="text-sm text-gray-600">
                    Validate the HMAC signature on every request to prevent unauthorized webhook calls to your endpoint.
                  </p>
                </Card>

                <Card icon={<Shield size={24} />} title="Use HTTPS">
                  <p className="text-sm text-gray-600">
                    Webhook endpoints must use HTTPS. Use a valid SSL certificate from a trusted certificate authority.
                  </p>
                </Card>

                <Card icon={<Webhook size={24} />} title="Handle Duplicates">
                  <p className="text-sm text-gray-600">
                    Due to retries, you may receive the same event multiple times. Use the event ID to deduplicate.
                  </p>
                </Card>

                <Card icon={<Clock size={24} />} title="Implement Idempotency">
                  <p className="text-sm text-gray-600">
                    Design your event handlers to be idempotent. Processing the same event multiple times should be safe.
                  </p>
                </Card>

                <Card icon={<Bell size={24} />} title="Monitor Failures">
                  <p className="text-sm text-gray-600">
                    Set up alerts for webhook failures. Check the dashboard regularly for any delivery issues.
                  </p>
                </Card>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-4 mt-8">
                <div className="font-semibold text-blue-900 mb-2">Need Help?</div>
                <p className="text-sm text-blue-800">
                  Check out our{' '}
                  <a href="/docs" className="underline">
                    Developer Documentation
                  </a>{' '}
                  for more webhook examples, or contact{' '}
                  <a href="/contact" className="underline">
                    support
                  </a>{' '}
                  if you encounter any issues.
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
