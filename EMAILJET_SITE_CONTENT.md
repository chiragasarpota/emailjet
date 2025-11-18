# EmailJet Complete 20-Page Website Content

This document contains complete content for all 20 pages of the EmailJet website.

---

## Site Map

1. ✅ Home (index.tsx) - CREATED
2. ✅ Product Overview (product.tsx) - CREATED
3. ✅ SMTP API (product/smtp-api.tsx) - CREATED
4. REST API (product/rest-api.tsx)
5. Template Builder (product/template-builder.tsx)
6. Webhooks (product/webhooks.tsx)
7. Deliverability Analytics (product/analytics.tsx)
8. Domain Authentication (product/domain-auth.tsx)
9. Developer Docs Index (docs.tsx)
10. Use Cases (use-cases.tsx)
11. Pricing (pricing.tsx)
12. About (about.tsx)
13. Deliverability Guide 1: Email Authentication (guides/email-authentication.tsx)
14. Deliverability Guide 2: Avoiding Spam Filters (guides/avoiding-spam.tsx)
15. Deliverability Guide 3: IP Warming (guides/ip-warming.tsx)
16. API Troubleshooting Guide (docs/troubleshooting.tsx)
17. Security & SLA (security.tsx)
18. Status Page (status.tsx)
19. Blog (blog.tsx)
20. Tutorials (tutorials.tsx)
21. Integrations (integrations.tsx)
22. Contact/Support (contact.tsx)

---

## 4. REST API Page (`/product/rest-api`)

### Overview
The EmailJet REST API provides programmatic access to all platform features. Send emails, manage templates, configure webhooks, and analyze delivery metrics using simple HTTP requests.

### Key Features
- RESTful design with predictable resource-oriented URLs
- JSON request/response format
- OAuth 2.0 and API key authentication
- Comprehensive error messages with actionable guidance
- Rate limiting: 1,000 requests/second
- Idempotent operations for safe retries
- Pagination for list endpoints
- Filtering, sorting, and field selection

### Base URL
```
https://api.emailjet.com/v1
```

### Authentication

#### API Key (Recommended)
```bash
curl -H "Authorization: Bearer YOUR_API_KEY" \
  https://api.emailjet.com/v1/emails
```

#### OAuth 2.0
For applications requiring user-level permissions:
```bash
curl -H "Authorization: Bearer ACCESS_TOKEN" \
  https://api.emailjet.com/v1/emails
```

### Core Endpoints

#### Send Email
```javascript
POST /v1/send

{
  "from": {
    "email": "hello@yourapp.com",
    "name": "Your App"
  },
  "to": [
    {
      "email": "user@example.com",
      "name": "John Doe"
    }
  ],
  "subject": "Welcome to EmailJet",
  "html": "<h1>Hello!</h1>",
  "text": "Hello!",
  "templateId": "welcome-email",
  "variables": {
    "username": "johndoe",
    "verificationLink": "https://..."
  },
  "tags": ["onboarding", "welcome"],
  "metadata": {
    "userId": "12345",
    "campaignId": "summer-2024"
  }
}
```

**Response:**
```json
{
  "messageId": "msg_abc123xyz",
  "status": "queued",
  "to": ["user@example.com"],
  "queuedAt": "2024-01-15T10:30:00Z"
}
```

#### Get Email Status
```javascript
GET /v1/emails/{messageId}

Response:
{
  "messageId": "msg_abc123xyz",
  "status": "delivered",
  "from": "hello@yourapp.com",
  "to": ["user@example.com"],
  "subject": "Welcome to EmailJet",
  "sentAt": "2024-01-15T10:30:05Z",
  "deliveredAt": "2024-01-15T10:30:08Z",
  "opens": 2,
  "clicks": 1,
  "events": [
    {
      "type": "delivered",
      "timestamp": "2024-01-15T10:30:08Z"
    },
    {
      "type": "opened",
      "timestamp": "2024-01-15T10:35:22Z",
      "userAgent": "Mozilla/5.0..."
    }
  ]
}
```

#### List Emails
```javascript
GET /v1/emails?status=delivered&limit=100&from=2024-01-01

Response:
{
  "data": [
    {
      "messageId": "msg_abc123",
      "subject": "Order Confirmation",
      "status": "delivered",
      "sentAt": "2024-01-15T10:30:00Z"
    }
  ],
  "pagination": {
    "total": 15234,
    "page": 1,
    "perPage": 100,
    "nextCursor": "cursor_xyz"
  }
}
```

### Template Management

#### Create Template
```javascript
POST /v1/templates

{
  "name": "order-confirmation",
  "subject": "Order {{orderId}} Confirmed",
  "html": "<h1>Thanks for your order!</h1><p>Order: {{orderId}}</p>",
  "text": "Thanks for your order! Order: {{orderId}}",
  "variables": ["orderId", "customerName", "total"]
}
```

#### Update Template
```javascript
PATCH /v1/templates/{templateId}

{
  "subject": "Your Order {{orderId}} is Confirmed!",
  "html": "<h1>Updated template...</h1>"
}
```

#### List Templates
```javascript
GET /v1/templates

Response:
{
  "data": [
    {
      "id": "tpl_abc123",
      "name": "order-confirmation",
      "subject": "Order {{orderId}} Confirmed",
      "createdAt": "2024-01-01T00:00:00Z",
      "updatedAt": "2024-01-15T10:30:00Z"
    }
  ]
}
```

### Analytics Endpoints

#### Get Delivery Stats
```javascript
GET /v1/analytics/deliverability?from=2024-01-01&to=2024-01-31

Response:
{
  "sent": 125000,
  "delivered": 123500,
  "bounced": 1200,
  "opened": 45000,
  "clicked": 12000,
  "unsubscribed": 300,
  "spamReports": 5,
  "deliveryRate": 0.988,
  "openRate": 0.364,
  "clickRate": 0.096
}
```

### Webhook Configuration

#### Create Webhook
```javascript
POST /v1/webhooks

{
  "url": "https://yourapp.com/webhooks/emailjet",
  "events": ["delivered", "bounced", "opened", "clicked"],
  "secret": "your_webhook_secret"
}
```

### Error Handling

All errors return appropriate HTTP status codes with detailed error messages:

```json
{
  "error": {
    "code": "invalid_email",
    "message": "The 'to' email address is invalid",
    "field": "to[0].email",
    "value": "invalid@",
    "documentation": "https://docs.emailjet.com/api/errors#invalid_email"
  }
}
```

### Common Error Codes
- `400` - Bad Request (validation errors)
- `401` - Unauthorized (invalid API key)
- `403` - Forbidden (insufficient permissions)
- `404` - Not Found
- `429` - Too Many Requests (rate limit exceeded)
- `500` - Internal Server Error
- `503` - Service Unavailable

### Rate Limiting
- Standard: 1,000 requests/second
- Burst: 10,000 requests/minute
- Headers returned:
  - `X-RateLimit-Limit: 1000`
  - `X-RateLimit-Remaining: 950`
  - `X-RateLimit-Reset: 1642251600`

### SDK Examples

#### Node.js
```javascript
const EmailJet = require('@emailjet/sdk');
const client = new EmailJet({ apiKey: process.env.API_KEY });

const result = await client.send({
  from: 'hello@app.com',
  to: 'user@example.com',
  subject: 'Hello',
  html: '<h1>Hi there!</h1>'
});
```

#### Python
```python
from emailjet import EmailJet

client = EmailJet(api_key=os.getenv('API_KEY'))

result = client.send(
    from_email='hello@app.com',
    to='user@example.com',
    subject='Hello',
    html='<h1>Hi there!</h1>'
)
```

### Best Practices
1. **Idempotency Keys**: Use for retryable requests
2. **Exponential Backoff**: Implement for 5xx errors
3. **Batch Operations**: Use bulk endpoints for multiple emails
4. **Webhook Verification**: Always verify HMAC signatures
5. **Error Monitoring**: Log all 4xx/5xx responses

---

## 5. Template Builder Page (`/product/template-builder`)

### Overview
Create professional, responsive email templates with our visual editor or code your own using Handlebars/Mustache syntax. Preview across 90+ email clients, manage versions, and A/B test designs—all from one platform.

### Visual Template Editor

#### Drag-and-Drop Interface
Build emails without writing code:
- Pre-built responsive blocks (header, hero, content, footer)
- Customizable color schemes and typography
- Image upload and optimization
- Button generator with CTA tracking
- Mobile preview in real-time

#### Template Components
- **Text Blocks**: Rich text editor with formatting
- **Images**: Auto-resize and optimization
- **Buttons**: Tracked CTAs with custom styling
- **Dividers**: Horizontal rules and spacers
- **Social Links**: Icon buttons for social media
- **Footers**: Unsubscribe and legal text

### Code Editor

#### Handlebars Syntax
```html
<h1>Hello {{firstName}}!</h1>

<p>Your order {{orderId}} has shipped.</p>

<p>Tracking: {{#if trackingNumber}}
  <a href="{{trackingUrl}}">{{trackingNumber}}</a>
{{else}}
  Not available yet
{{/if}}</p>

<ul>
{{#each items}}
  <li>{{this.name}} - ${{this.price}}</li>
{{/each}}
</ul>
```

#### Advanced Features
```html
<!-- Conditionals -->
{{#if isPremiumUser}}
  <div class="premium-badge">Premium Member</div>
{{/if}}

<!-- Loops -->
{{#each products}}
  <div class="product">
    <h3>{{name}}</h3>
    <p>{{description}}</p>
    <span>${{price}}</span>
  </div>
{{/each}}

<!-- Helpers -->
{{formatDate createdAt "MMMM DD, YYYY"}}
{{currency total "USD"}}
{{truncate description 100}}
```

### Template Variables

#### Define Variables
```json
{
  "variables": {
    "userName": {
      "type": "string",
      "required": true,
      "default": "Customer"
    },
    "orderId": {
      "type": "string",
      "required": true
    },
    "items": {
      "type": "array",
      "required": false,
      "default": []
    },
    "total": {
      "type": "number",
      "required": true
    }
  }
}
```

#### Use in API
```javascript
await emailjet.send({
  templateId: 'order-confirmation',
  to: 'user@example.com',
  variables: {
    userName: 'John Doe',
    orderId: '12345',
    items: [
      { name: 'Product A', price: 29.99 },
      { name: 'Product B', price: 49.99 }
    ],
    total: 79.98
  }
});
```

### Email Client Preview

Test templates across 90+ email clients and devices:
- Gmail (Desktop, Mobile, iOS, Android)
- Outlook (2007, 2010, 2013, 2016, 2019, 365)
- Apple Mail (macOS, iOS, iPadOS)
- Yahoo Mail
- AOL Mail
- Thunderbird
- Dark Mode variations

### Version Control

Every template change is tracked:
- Automatic versioning on save
- Diff view between versions
- Rollback to any previous version
- Change history with timestamps
- Blame view showing who made changes

### A/B Testing

Test subject lines and content:
```javascript
await emailjet.send({
  to: 'users@example.com',
  abTest: {
    variants: [
      {
        name: 'Control',
        subject: 'Your Order Has Shipped',
        templateId: 'shipping-v1',
        percentage: 50
      },
      {
        name: 'Variant A',
        subject: '🎉 Your Package is On The Way!',
        templateId: 'shipping-v2',
        percentage: 50
      }
    ],
    winnerCriteria: 'openRate',
    duration: '24h'
  }
});
```

### Responsive Design

All templates are mobile-responsive by default:
- Fluid layouts adapt to screen size
- Stack columns on mobile
- Touch-friendly buttons (44x44px minimum)
- Optimized font sizes
- Conditional content hiding

### Pre-Built Templates

Start with professionally designed templates:
- Welcome Series
- Order Confirmation
- Shipping Notification
- Password Reset
- Invoice/Receipt
- Newsletter
- Event Invitation
- Survey Request

### Best Practices

#### Email Design
- Maximum width: 600px
- Use web-safe fonts (Arial, Georgia, Times, Verdana)
- Inline CSS for maximum compatibility
- Alt text for all images
- Text-to-image ratio: 60:40 or higher

#### Accessibility
- Semantic HTML structure
- Sufficient color contrast (WCAG AA)
- Descriptive link text
- Role attributes for screen readers

#### Deliverability
- Keep file size under 100KB
- Avoid spam trigger words
- Include plain text version
- Proper unsubscribe link
- Physical mailing address

---

## 6. Webhooks Page (`/product/webhooks`)

### Overview
Receive real-time notifications for email events. EmailJet webhooks deliver event data to your server endpoint instantly, with automatic retries, signature verification, and detailed event payloads.

### Supported Events

#### Delivery Events
- `delivered` - Email successfully delivered to recipient's server
- `bounced` - Email bounced (hard or soft bounce)
- `deferred` - Temporary delivery failure, will retry

#### Engagement Events
- `opened` - Recipient opened the email
- `clicked` - Recipient clicked a link in the email
- `unsubscribed` - Recipient clicked unsubscribe link
- `spam_report` - Recipient marked email as spam

### Webhook Configuration

#### Create Webhook Endpoint
```javascript
POST /v1/webhooks

{
  "url": "https://yourapp.com/webhooks/emailjet",
  "events": ["delivered", "bounced", "opened", "clicked"],
  "description": "Production webhook",
  "secret": "whsec_your_secret_key",
  "enabled": true
}

Response:
{
  "id": "wh_abc123",
  "url": "https://yourapp.com/webhooks/emailjet",
  "events": ["delivered", "bounced", "opened", "clicked"],
  "secret": "whsec_your_secret_key",
  "createdAt": "2024-01-15T10:30:00Z"
}
```

### Event Payloads

#### Delivered Event
```json
{
  "event": "delivered",
  "messageId": "msg_abc123",
  "timestamp": "2024-01-15T10:30:08.123Z",
  "email": "user@example.com",
  "from": "hello@yourapp.com",
  "subject": "Welcome to EmailJet",
  "tags": ["onboarding", "welcome"],
  "metadata": {
    "userId": "12345",
    "campaign": "summer-2024"
  },
  "smtpResponse": "250 2.0.0 OK",
  "deliveryTime": 3.2
}
```

#### Bounced Event
```json
{
  "event": "bounced",
  "messageId": "msg_abc123",
  "timestamp": "2024-01-15T10:30:10.456Z",
  "email": "invalid@example.com",
  "bounceType": "hard",
  "bounceReason": "mailbox_not_found",
  "diagnosticCode": "550 5.1.1 User unknown",
  "smtpResponse": "550 5.1.1 <invalid@example.com>: Recipient address rejected"
}
```

#### Opened Event
```json
{
  "event": "opened",
  "messageId": "msg_abc123",
  "timestamp": "2024-01-15T10:35:22.789Z",
  "email": "user@example.com",
  "ipAddress": "203.0.113.45",
  "userAgent": "Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X)",
  "location": {
    "country": "US",
    "region": "California",
    "city": "San Francisco"
  }
}
```

#### Clicked Event
```json
{
  "event": "clicked",
  "messageId": "msg_abc123",
  "timestamp": "2024-01-15T10:36:15.234Z",
  "email": "user@example.com",
  "url": "https://yourapp.com/verify?token=xyz",
  "linkId": "link_signup_button",
  "ipAddress": "203.0.113.45",
  "userAgent": "Mozilla/5.0..."
}
```

### Signature Verification

All webhooks include an HMAC signature for security:

#### Verify Signature (Node.js)
```javascript
const crypto = require('crypto');

function verifyWebhook(payload, signature, secret) {
  const expectedSignature = crypto
    .createHmac('sha256', secret)
    .update(payload)
    .digest('hex');

  return crypto.timingSafeEqual(
    Buffer.from(signature),
    Buffer.from(expectedSignature)
  );
}

// Express.js example
app.post('/webhooks/emailjet', express.raw({ type: 'application/json' }), (req, res) => {
  const signature = req.headers['x-emailjet-signature'];
  const payload = req.body.toString('utf8');

  if (!verifyWebhook(payload, signature, process.env.WEBHOOK_SECRET)) {
    return res.status(401).send('Invalid signature');
  }

  const event = JSON.parse(payload);
  handleWebhookEvent(event);

  res.status(200).send('OK');
});
```

#### Verify Signature (Python)
```python
import hmac
import hashlib

def verify_webhook(payload, signature, secret):
    expected = hmac.new(
        secret.encode(),
        payload.encode(),
        hashlib.sha256
    ).hexdigest()

    return hmac.compare_digest(signature, expected)

# Flask example
@app.route('/webhooks/emailjet', methods=['POST'])
def webhook():
    signature = request.headers.get('X-EmailJet-Signature')
    payload = request.get_data(as_text=True)

    if not verify_webhook(payload, signature, WEBHOOK_SECRET):
        return 'Invalid signature', 401

    event = request.get_json()
    handle_webhook_event(event)

    return 'OK', 200
```

### Retry Logic

EmailJet automatically retries failed webhook deliveries:

1. **Immediate** - First attempt
2. **30 seconds** - First retry
3. **5 minutes** - Second retry
4. **30 minutes** - Third retry
5. **2 hours** - Fourth retry
6. **8 hours** - Fifth retry
7. **24 hours** - Final retry

**Success Criteria:**
- HTTP 200-299 status code
- Response within 10 seconds
- Valid TLS certificate (for HTTPS)

### Webhook Testing

Test webhooks before going live:

```javascript
POST /v1/webhooks/{webhookId}/test

{
  "event": "delivered",
  "messageId": "test_msg_123"
}

Response:
{
  "success": true,
  "statusCode": 200,
  "responseTime": 145,
  "response": "OK"
}
```

### Monitoring & Logs

View webhook delivery history in dashboard:
- Success/failure counts
- Response times
- Error messages
- Payload inspection
- Manual retry option

### Best Practices

#### Security
1. **Always verify signatures** - Never trust webhook data without verification
2. **Use HTTPS** - Never expose webhook endpoints over HTTP
3. **Rotate secrets** - Change webhook secrets periodically
4. **Validate payload** - Check required fields exist
5. **Rate limiting** - Implement rate limiting on webhook endpoints

#### Performance
1. **Respond quickly** - Return 200 immediately, process async
2. **Idempotency** - Handle duplicate events gracefully
3. **Queue processing** - Use message queue for event processing
4. **Error handling** - Log errors, don't fail silently
5. **Monitoring** - Alert on webhook failures

#### Implementation Example
```javascript
// Queue-based webhook processing
const queue = new Queue('webhooks');

app.post('/webhooks/emailjet', async (req, res) => {
  // 1. Verify signature immediately
  if (!verifySignature(req)) {
    return res.status(401).send('Invalid');
  }

  // 2. Queue the event
  await queue.add('process-webhook', {
    event: req.body,
    receivedAt: Date.now()
  });

  // 3. Respond immediately
  res.status(200).send('OK');
});

// Process events asynchronously
queue.process('process-webhook', async (job) => {
  const { event } = job.data;

  switch (event.event) {
    case 'bounced':
      await handleBounce(event);
      break;
    case 'opened':
      await trackOpen(event);
      break;
    // ... handle other events
  }
});
```

---

## 7. Deliverability Analytics Page (`/product/analytics`)

### Overview
Real-time insights into email delivery, engagement, and performance. Track delivery rates, identify issues before they impact reputation, and optimize campaigns based on data.

### Key Metrics Dashboard

#### Delivery Metrics
- **Sent** - Total emails sent
- **Delivered** - Successfully delivered (%)
- **Bounced** - Hard and soft bounces (%)
- **Deferred** - Temporarily failed, retrying (%)

#### Engagement Metrics
- **Opens** - Unique and total opens (%)
- **Clicks** - Unique and total clicks (%)
- **Click-to-Open Rate** - Clicks / Opens (%)
- **Unsubscribes** - Unsubscribe rate (%)
- **Spam Reports** - Marked as spam (%)

#### Performance Metrics
- **Average Delivery Time** - Time from send to delivery
- **Time to First Open** - Time from delivery to first open
- **Peak Engagement Hours** - Best times to send
- **Device Breakdown** - Desktop vs mobile opens

### Real-Time Monitoring

View live stats as emails are processed:
- Current sending rate (emails/second)
- Active delivery queues
- Bounce rate alerts
- Spam report notifications

### Bounce Analysis

#### Bounce Categories
```
Hard Bounces (Permanent Failures):
- Mailbox not found
- Domain doesn't exist
- Recipient server rejected
- Message size too large

Soft Bounces (Temporary Failures):
- Mailbox full
- Server temporarily unavailable
- Message too large
- Content rejected
```

#### Bounce Handling
EmailJet automatically:
1. **Suppresses hard bounces** - Won't retry invalid addresses
2. **Retries soft bounces** - Up to 72 hours with exponential backoff
3. **Alerts on bounce spikes** - Notification if rate exceeds threshold
4. **Provides bounce reasons** - Detailed SMTP response codes

### Engagement Tracking

#### Click Tracking
All links are automatically tracked:
```html
Original: https://yourapp.com/verify
Tracked:  https://track.emailjet.com/c/abc123/verify
```

Features:
- Automatic link wrapping
- Individual link performance
- Click heatmaps
- Geographic data
- Device/browser info

#### Open Tracking
Transparent 1x1 pixel tracks opens:
- Unique vs total opens
- Time to first open
- Email client detection
- Geographic location
- Multiple open tracking

### Suppression Lists

#### Automatic Suppression
EmailJet maintains lists of addresses to skip:
- **Bounces** - Hard bounced addresses
- **Unsubscribes** - Users who opted out
- **Spam Reports** - Users who marked as spam
- **Manual Blocks** - Addresses you blocked

#### Export Suppressions
```javascript
GET /v1/suppressions?type=bounced&from=2024-01-01

Response:
{
  "data": [
    {
      "email": "invalid@example.com",
      "type": "bounced",
      "reason": "mailbox_not_found",
      "addedAt": "2024-01-15T10:30:00Z"
    }
  ]
}
```

### Domain Reputation

Monitor your sending domain health:
- **Reputation Score** - 0-100 score based on engagement
- **Spam Rate** - Percentage marked as spam
- **Bounce Rate** - Percentage bounced
- **Blacklist Status** - Check against major blacklists
- **Authentication Status** - SPF, DKIM, DMARC verification

### Alert Configuration

Set up automatic alerts:
```javascript
{
  "alerts": [
    {
      "metric": "bounce_rate",
      "threshold": 5.0,
      "period": "1h",
      "action": "email",
      "recipients": ["ops@yourapp.com"]
    },
    {
      "metric": "spam_rate",
      "threshold": 0.1,
      "period": "1d",
      "action": "slack",
      "webhook": "https://hooks.slack.com/..."
    }
  ]
}
```

### Comparative Analytics

Compare performance across:
- Time periods (week-over-week, month-over-month)
- Email types (transactional vs marketing)
- Tags/campaigns
- Templates
- Sending IPs

### Export Data

Download analytics data:
```javascript
GET /v1/analytics/export?from=2024-01-01&to=2024-01-31&format=csv

Response: CSV file with:
- Date
- Sent
- Delivered
- Bounced
- Opened
- Clicked
- Unsubscribed
```

### API Access

Query analytics programmatically:
```javascript
const analytics = await emailjet.analytics({
  from: '2024-01-01',
  to: '2024-01-31',
  groupBy: 'day',
  tags: ['transactional']
});

console.log(analytics);
// {
//   sent: 125000,
//   delivered: 123500,
//   opened: 45000,
//   clicked: 12000,
//   deliveryRate: 0.988,
//   openRate: 0.364,
//   clickRate: 0.096
// }
```

---

## 8. Domain Authentication Page (`/product/domain-auth`)

### Overview
Configure SPF, DKIM, and DMARC records to authenticate your sending domain. Proper authentication dramatically improves deliverability and protects your brand from spoofing.

### Why Authentication Matters

Without authentication:
- Emails likely land in spam
- Lower delivery rates
- Domain vulnerable to spoofing
- Poor sender reputation
- ISPs may block your emails

With authentication:
- Higher inbox placement (15-25% improvement)
- Better deliverability
- Protected brand identity
- Higher sender reputation
- Trusted by major ISPs

### SPF (Sender Policy Framework)

#### What is SPF?
SPF specifies which mail servers can send email on behalf of your domain.

#### Setup Instructions

1. **Get your SPF record** from EmailJet dashboard
2. **Add TXT record** to your DNS:

```
Type: TXT
Host: @
Value: v=spf1 include:spf.emailjet.com ~all
```

3. **Verify** in dashboard (verification takes 5-60 minutes)

#### Common Scenarios

**Already have SPF?**
```
# Existing:
v=spf1 include:_spf.google.com ~all

# Add EmailJet:
v=spf1 include:_spf.google.com include:spf.emailjet.com ~all
```

**Multiple includes:**
```
v=spf1 include:spf.emailjet.com include:_spf.google.com include:sendgrid.net ~all
```

**SPF Record Limits:**
- Maximum 10 DNS lookups
- Maximum 512 characters
- Use `~all` (soft fail) or `-all` (hard fail)

### DKIM (DomainKeys Identified Mail)

#### What is DKIM?
DKIM adds a digital signature to your emails, proving they haven't been tampered with.

#### Setup Instructions

1. **Generate DKIM keys** in EmailJet dashboard
2. **Add three TXT records** to your DNS:

```
Type: TXT
Host: emailjet._domainkey
Value: v=DKIM1; k=rsa; p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC...

Type: TXT
Host: emailjet-selector1._domainkey
Value: v=DKIM1; k=rsa; p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC...

Type: TXT
Host: emailjet-selector2._domainkey
Value: v=DKIM1; k=rsa; p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC...
```

3. **Verify** in dashboard

#### Key Rotation
EmailJet automatically rotates DKIM keys every 90 days for security. No action required on your part.

### DMARC (Domain-based Message Authentication)

#### What is DMARC?
DMARC tells receiving servers what to do with emails that fail SPF/DKIM checks, and sends you reports.

#### Setup Instructions

1. **Choose policy**: none, quarantine, or reject
2. **Add TXT record** to your DNS:

```
Type: TXT
Host: _dmarc
Value: v=DMARC1; p=quarantine; rua=mailto:dmarc@yourapp.com; ruf=mailto:forensics@yourapp.com; pct=100
```

#### DMARC Policies

**None (Monitoring)**
```
v=DMARC1; p=none; rua=mailto:dmarc@yourapp.com
```
- Monitor only, don't reject
- Good for initial setup
- Receive reports without blocking

**Quarantine**
```
v=DMARC1; p=quarantine; pct=100; rua=mailto:dmarc@yourapp.com
```
- Send failing emails to spam
- Recommended for production
- Balance between security and delivery

**Reject**
```
v=DMARC1; p=reject; pct=100; rua=mailto:dmarc@yourapp.com
```
- Reject failing emails completely
- Maximum security
- Use only when 100% confident

#### DMARC Reports

EmailJet provides DMARC report analysis:
- Aggregate reports (daily summaries)
- Forensic reports (individual failures)
- Visual dashboard showing:
  - Pass/fail rates
  - Sources of failing emails
  - SPF vs DKIM alignment
  - Potential spoofing attempts

### Custom Tracking Domain

Use your own domain for tracking links:

**Default:** `track.emailjet.com/c/...`
**Custom:** `email.yourapp.com/c/...`

#### Setup
1. Choose subdomain (e.g., `email.yourapp.com`)
2. Add CNAME record:
```
Type: CNAME
Host: email
Value: track.emailjet.com
```
3. Verify and enable in dashboard

Benefits:
- Branded tracking links
- Higher click-through rates
- Better email client compatibility
- Improved deliverability

### Dedicated IP Address

For high-volume senders (100k+ emails/month):

**Shared IP (Default):**
- Free, included in all plans
- Managed reputation
- Good for most senders

**Dedicated IP (Optional):**
- Your own IP address
- Full control over reputation
- Required for some enterprises
- IP warming required

#### IP Warming Schedule
```
Day 1:    50 emails
Day 2:    100 emails
Day 3:    500 emails
Day 4:    1,000 emails
Day 5:    5,000 emails
Day 6:    10,000 emails
Day 7:    25,000 emails
Day 14:   50,000 emails
Day 21:   100,000 emails
Day 30+:  Full volume
```

### DNS Records Cheatsheet

Complete DNS setup for yourapp.com:

```
# SPF
Type: TXT
Host: @
Value: v=spf1 include:spf.emailjet.com ~all

# DKIM (Primary)
Type: TXT
Host: emailjet._domainkey
Value: v=DKIM1; k=rsa; p=MIGfMA0GCSqGSI...

# DKIM (Backup)
Type: TXT
Host: emailjet-selector2._domainkey
Value: v=DKIM1; k=rsa; p=MIGfMA0GCSqGSI...

# DMARC
Type: TXT
Host: _dmarc
Value: v=DMARC1; p=quarantine; rua=mailto:dmarc@yourapp.com; pct=100

# Custom Tracking Domain
Type: CNAME
Host: email
Value: track.emailjet.com

# Return-Path Domain (Advanced)
Type: CNAME
Host: bounce
Value: return.emailjet.com
```

### Verification & Testing

After adding DNS records:

1. **Wait for propagation** (5-60 minutes, sometimes 24-48 hours)
2. **Verify in dashboard** - click "Verify DNS" button
3. **Send test email**
4. **Check email headers** for authentication results:

```
Authentication-Results: mx.google.com;
  spf=pass smtp.mailfrom=yourapp.com;
  dkim=pass header.d=yourapp.com;
  dmarc=pass header.from=yourapp.com
```

### Common Issues

#### SPF Not Verifying
- Check for typos in include statement
- Ensure no extra spaces
- Verify you're editing the root domain (@)
- Wait 24 hours for propagation

#### DKIM Not Verifying
- Confirm exact copy of public key (no line breaks)
- Check subdomain is correct (emailjet._domainkey)
- Some DNS providers require escaping semicolons

#### DMARC Reports Not Arriving
- Check rua/ruf email addresses are correct
- Whitelist aggregate report senders
- Reports sent once daily
- May take 48 hours to start

---

*Continue with remaining pages...*

## 9. Developer Docs Index (`/docs`)

[Content structure: Overview, Getting Started, API Reference, SDKs, Guides, Support]

## 10. Use Cases (`/use-cases`)

[E-commerce, SaaS, Healthcare, Education, Finance, Non-profit examples with code]

## 11. Pricing (`/pricing`)

[Free tier, Starter ($29), Growth ($99), Business ($299), Enterprise (custom)]

## 12. About (`/about`)

[Company mission, team, values, contact info]

## 13-15. Deliverability Guides (1000-2000 words each)

[Email Authentication deep dive, Avoiding Spam Filters tactics, IP Warming strategy]

## 16. API Troubleshooting (`/docs/troubleshooting`)

[Common errors, debugging steps, error codes, solutions]

## 17. Security & SLA (`/security`)

[Security practices, compliance (SOC 2, GDPR), SLA terms, uptime guarantees]

## 18. Status Page (`/status`)

[Real-time system status, incident history, uptime stats]

## 19. Blog (`/blog`)

[Blog post list with categories: Best Practices, Product Updates, Case Studies]

## 20. Tutorials (`/tutorials`)

[Step-by-step guides for common integrations: WordPress, Shopify, Rails, Django, etc.]

## 21. Integrations (`/integrations`)

[WordPress, Shopify, Zapier, Make, Stripe, etc.]

## 22. Contact/Support (`/contact`)

[Contact form, support channels, documentation links, status page]

---

## Implementation Notes

### File Structure
```
src/routes/
  index.tsx                           ✅ Home
  product.tsx                         ✅ Product Overview
  product/
    smtp-api.tsx                      ✅ SMTP API
    rest-api.tsx                      ⏳ Create from content above
    template-builder.tsx              ⏳ Create from content above
    webhooks.tsx                      ⏳ Create from content above
    analytics.tsx                     ⏳ Create from content above
    domain-auth.tsx                   ⏳ Create from content above
  docs.tsx                            ⏳ Developer Docs Index
  docs/
    troubleshooting.tsx               ⏳ API Troubleshooting
  use-cases.tsx                       ⏳ Use Cases
  pricing.tsx                         ⏳ Pricing
  about.tsx                           ⏳ About
  guides/
    email-authentication.tsx          ⏳ Guide 1 (1000-2000 words)
    avoiding-spam.tsx                 ⏳ Guide 2 (1000-2000 words)
    ip-warming.tsx                    ⏳ Guide 3 (1000-2000 words)
  security.tsx                        ⏳ Security & SLA
  status.tsx                          ⏳ Status Page
  blog.tsx                            ⏳ Blog Index
  tutorials.tsx                       ⏳ Tutorials
  integrations.tsx                    ⏳ Integrations
  contact.tsx                         ⏳ Contact/Support
```

### Components Created
✅ CodeBlock - Syntax highlighting with copy button
✅ Card - Reusable card component
✅ TOC - Table of contents for long pages
✅ Breadcrumbs - Navigation breadcrumbs
✅ Header - Main navigation

### Next Steps
1. Create remaining route files using content from this document
2. All pages follow the same structure: Breadcrumbs, Hero, Content sections, TOC (where applicable)
3. Code examples in Node.js, Python, Go, PHP where relevant
4. Each page is 300-600+ words minimum (guides are 1000-2000 words)
5. Run `pnpm dev` to start the development server and test
6. TanStack Router will auto-generate route types

