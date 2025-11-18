# Quick Start: Complete Remaining Pages in 30 Minutes Each

This guide provides **copy-paste templates** for the remaining 14 pages. Each template is ready to use—just copy, paste, and customize with content from `EMAILJET_SITE_CONTENT.md`.

---

## Template 1: Product Feature Pages

Use this for: REST API, Template Builder, Webhooks, Analytics, Domain Auth

### File: `src/routes/product/[feature-name].tsx`

```typescript
import { createFileRoute } from '@tanstack/react-router'
import { SERVER_ICON } from 'lucide-react' // Change icon
import CodeBlock from '../../components/CodeBlock'
import Card from '../../components/Card'
import Breadcrumbs from '../../components/Breadcrumbs'
import TOC from '../../components/TOC'

export const Route = createFileRoute('/product/[feature-name]')({
  component: FeaturePage,
})

function FeaturePage() {
  const tocItems = [
    { id: 'overview', title: 'Overview', level: 1 },
    { id: 'quick-start', title: 'Quick Start', level: 1 },
    { id: 'examples', title: 'Examples', level: 1 },
    { id: 'advanced', title: 'Advanced Usage', level: 1 },
    { id: 'best-practices', title: 'Best Practices', level: 1 },
  ]

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <Breadcrumbs items={[{ label: 'Product', href: '/product' }, { label: 'Feature Name' }]} />

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-3">
            {/* Hero */}
            <div className="mb-12">
              <div className="flex items-center gap-4 mb-4">
                <SERVER_ICON size={48} className="text-blue-600" />
                <h1 className="text-5xl font-bold text-gray-900">Feature Name</h1>
              </div>
              <p className="text-2xl text-gray-600">
                Brief description of what this feature does and why it matters.
              </p>
            </div>

            {/* Overview */}
            <section id="overview" className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Overview</h2>
              <p className="text-gray-700 mb-4">
                [Copy content from EMAILJET_SITE_CONTENT.md]
              </p>
            </section>

            {/* Quick Start */}
            <section id="quick-start" className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Quick Start</h2>
              <CodeBlock
                language="javascript"
                code={`// Example code here`}
              />
            </section>

            {/* Examples */}
            <section id="examples" className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Examples</h2>
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Node.js</h3>
                  <CodeBlock language="javascript" code={`// Node.js example`} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Python</h3>
                  <CodeBlock language="python" code={`# Python example`} />
                </div>
              </div>
            </section>

            {/* Advanced Usage */}
            <section id="advanced" className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Advanced Usage</h2>
              <Card title="Advanced Feature">
                <p className="text-gray-700">Details about advanced usage...</p>
              </Card>
            </section>

            {/* Best Practices */}
            <section id="best-practices" className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Best Practices</h2>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-green-600">✓</span>
                  <span className="text-gray-700">Best practice item 1</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600">✓</span>
                  <span className="text-gray-700">Best practice item 2</span>
                </li>
              </ul>
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
```

---

## Template 2: Guide Pages (1000-2000 words)

Use this for: Avoiding Spam, IP Warming, API Troubleshooting

### File: `src/routes/guides/[guide-name].tsx`

```typescript
import { createFileRoute } from '@tanstack/react-router'
import { Shield, AlertTriangle, Info } from 'lucide-react'
import CodeBlock from '../../components/CodeBlock'
import Card from '../../components/Card'
import Breadcrumbs from '../../components/Breadcrumbs'
import TOC from '../../components/TOC'

export const Route = createFileRoute('/guides/[guide-name]')({
  component: GuidePage,
})

function GuidePage() {
  const tocItems = [
    { id: 'introduction', title: 'Introduction', level: 1 },
    { id: 'why-matters', title: 'Why This Matters', level: 1 },
    { id: 'step-by-step', title: 'Step-by-Step Guide', level: 1 },
    { id: 'common-issues', title: 'Common Issues', level: 1 },
    { id: 'best-practices', title: 'Best Practices', level: 1 },
  ]

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <Breadcrumbs items={[{ label: 'Guides', href: '/docs' }, { label: 'Guide Name' }]} />

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-3">
            {/* Hero */}
            <div className="mb-12">
              <div className="flex items-center gap-4 mb-4">
                <Shield size={48} className="text-blue-600" />
                <h1 className="text-5xl font-bold text-gray-900">Guide Title</h1>
              </div>
              <p className="text-2xl text-gray-600">
                Comprehensive guide description (1-2 sentences)
              </p>
            </div>

            {/* Introduction */}
            <section id="introduction" className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Introduction</h2>
              <p className="text-gray-700 mb-4">
                [Copy 300-400 words of introduction from EMAILJET_SITE_CONTENT.md]
              </p>
              <Card icon={<Info size={24} />} className="bg-blue-50 border-blue-200">
                <p className="text-gray-700">
                  <strong>Quick Tip:</strong> Summary of key takeaway
                </p>
              </Card>
            </section>

            {/* Why This Matters */}
            <section id="why-matters" className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Why This Matters</h2>
              <p className="text-gray-700 mb-4">
                [Copy 200-300 words explaining importance]
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <div className="font-semibold text-green-900 mb-2">With Best Practices</div>
                  <ul className="space-y-1 text-sm text-green-800">
                    <li>• Benefit 1</li>
                    <li>• Benefit 2</li>
                    <li>• Benefit 3</li>
                  </ul>
                </div>
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <div className="font-semibold text-red-900 mb-2">Without Best Practices</div>
                  <ul className="space-y-1 text-sm text-red-800">
                    <li>• Problem 1</li>
                    <li>• Problem 2</li>
                    <li>• Problem 3</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Step-by-Step */}
            <section id="step-by-step" className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Step-by-Step Guide</h2>
              <div className="space-y-8">
                <Card title="Step 1: First Step">
                  <p className="text-gray-700 mb-4">Description of step...</p>
                  <CodeBlock language="bash" code={`# Example command`} />
                </Card>

                <Card title="Step 2: Second Step">
                  <p className="text-gray-700 mb-4">Description of step...</p>
                  <CodeBlock language="javascript" code={`// Example code`} />
                </Card>

                <Card title="Step 3: Third Step">
                  <p className="text-gray-700">Description of step...</p>
                </Card>
              </div>
            </section>

            {/* Common Issues */}
            <section id="common-issues" className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Common Issues</h2>
              <div className="space-y-6">
                <Card icon={<AlertTriangle size={24} />} title="Issue 1" className="bg-yellow-50 border-yellow-200">
                  <div className="space-y-3 text-gray-700">
                    <p><strong>Symptom:</strong> Description of the problem</p>
                    <p><strong>Cause:</strong> Why this happens</p>
                    <p><strong>Solution:</strong> How to fix it</p>
                  </div>
                </Card>

                <Card icon={<AlertTriangle size={24} />} title="Issue 2" className="bg-yellow-50 border-yellow-200">
                  <div className="space-y-3 text-gray-700">
                    <p><strong>Symptom:</strong> Description of the problem</p>
                    <p><strong>Cause:</strong> Why this happens</p>
                    <p><strong>Solution:</strong> How to fix it</p>
                  </div>
                </Card>
              </div>
            </section>

            {/* Best Practices */}
            <section id="best-practices" className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Best Practices</h2>
              <div className="space-y-4">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="text-green-600 text-xl">✓</span>
                    <div>
                      <div className="font-semibold text-gray-900">Best Practice {i}</div>
                      <div className="text-gray-700">Description of the best practice...</div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Summary */}
            <section className="mb-12">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Summary</h2>
                <p className="text-gray-700">
                  [Copy 100-200 word summary from EMAILJET_SITE_CONTENT.md]
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
```

---

## Template 3: Simple Content Pages

Use this for: About, Security, Status, Blog, Tutorials, Integrations

### File: `src/routes/[page-name].tsx`

```typescript
import { createFileRoute, Link } from '@tanstack/react-router'
import { Shield, Users, CheckCircle } from 'lucide-react' // Choose relevant icon
import Card from '../components/Card'
import Breadcrumbs from '../components/Breadcrumbs'

export const Route = createFileRoute('/[page-name]')({
  component: PageName,
})

function PageName() {
  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <Breadcrumbs items={[{ label: 'Page Name' }]} />

        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Page Title
          </h1>
          <p className="text-2xl text-gray-600 max-w-3xl mx-auto">
            Page description explaining what this page is about.
          </p>
        </div>

        {/* Main Content Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Section Title</h2>
          <div className="prose max-w-none text-gray-700 space-y-4">
            <p>
              [Copy 300-600 words of content from EMAILJET_SITE_CONTENT.md]
            </p>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card icon={<CheckCircle size={32} />} title="Feature 1">
              <p>Description of feature 1...</p>
            </Card>
            <Card icon={<Shield size={32} />} title="Feature 2">
              <p>Description of feature 2...</p>
            </Card>
            <Card icon={<Users size={32} />} title="Feature 3">
              <p>Description of feature 3...</p>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-blue-50 rounded-lg p-12 text-center border border-blue-200">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Start your free 30-day trial today.
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-semibold transition-colors"
            >
              Start Free Trial
            </Link>
            <Link
              to="/docs"
              className="px-8 py-4 bg-white text-gray-900 rounded-lg hover:bg-gray-50 font-semibold border border-gray-300 transition-colors"
            >
              View Documentation
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
```

---

## Template 4: Docs Index Page

### File: `src/routes/docs.tsx`

```typescript
import { createFileRoute, Link } from '@tanstack/react-router'
import { Book, Code, FileText, Zap } from 'lucide-react'
import Card from '../components/Card'
import Breadcrumbs from '../components/Breadcrumbs'

export const Route = createFileRoute('/docs')({
  component: DocsPage,
})

function DocsPage() {
  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <Breadcrumbs items={[{ label: 'Documentation' }]} />

        {/* Hero */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Developer Documentation
          </h1>
          <p className="text-2xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to integrate EmailJet into your application
          </p>
        </div>

        {/* Getting Started */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Getting Started</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Link to="/product/rest-api">
              <Card icon={<Code size={32} />} title="REST API" className="hover:border-blue-600 cursor-pointer">
                <p>Send emails via HTTP API with JSON payloads</p>
              </Card>
            </Link>
            <Link to="/product/smtp-api">
              <Card icon={<Zap size={32} />} title="SMTP API" className="hover:border-blue-600 cursor-pointer">
                <p>Use standard SMTP protocol with your existing tools</p>
              </Card>
            </Link>
          </div>
        </div>

        {/* Guides */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Deliverability Guides</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link to="/guides/email-authentication">
              <Card title="Email Authentication" className="hover:border-blue-600 cursor-pointer">
                <p className="text-sm text-gray-600">
                  SPF, DKIM, and DMARC setup guide
                </p>
              </Card>
            </Link>
            <Link to="/guides/avoiding-spam">
              <Card title="Avoiding Spam Filters" className="hover:border-blue-600 cursor-pointer">
                <p className="text-sm text-gray-600">
                  Best practices for inbox placement
                </p>
              </Card>
            </Link>
            <Link to="/guides/ip-warming">
              <Card title="IP Warming" className="hover:border-blue-600 cursor-pointer">
                <p className="text-sm text-gray-600">
                  Build sender reputation gradually
                </p>
              </Card>
            </Link>
          </div>
        </div>

        {/* Support */}
        <div className="bg-gray-50 rounded-lg p-12 text-center border border-gray-200">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Need Help?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Can't find what you're looking for? Our support team is here to help.
          </p>
          <Link
            to="/contact"
            className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-semibold transition-colors inline-block"
          >
            Contact Support
          </Link>
        </div>
      </div>
    </div>
  )
}
```

---

## Quick Checklist for Each New Page

1. ☐ Create file in correct directory (`src/routes/...`)
2. ☐ Copy appropriate template from above
3. ☐ Update route name in `createFileRoute('...')`
4. ☐ Update component function name
5. ☐ Change icon imports as needed
6. ☐ Update breadcrumbs with correct path
7. ☐ Copy content from `EMAILJET_SITE_CONTENT.md`
8. ☐ Add code examples where relevant
9. ☐ Test page in browser (`pnpm dev`)
10. ☐ Verify navigation links work

---

## Time Estimates

- **Product Feature Page:** 20-30 minutes
- **Guide Page (1000-2000 words):** 40-60 minutes
- **Simple Content Page:** 15-20 minutes
- **Docs Index:** 15 minutes

**Total time for remaining 14 pages: 5-7 hours**

---

## Pro Tips

1. **Work in batches:** Complete all product pages first, then all guides, then simple pages
2. **Use Find & Replace:** When copying templates, use your editor's find/replace to quickly update names
3. **Test incrementally:** Run `pnpm dev` after each page to catch errors early
4. **Reference completed pages:** Look at `smtp-api.tsx` and `email-authentication.tsx` for examples

---

## Need Even Faster?

### Ultra-Quick Method (5 minutes per page):

1. Copy entire template
2. Find/replace `[feature-name]` with actual name
3. Copy/paste 2-3 paragraphs from `EMAILJET_SITE_CONTENT.md`
4. Add 1-2 code examples
5. Done!

You don't need perfection on first pass. Get all pages created, then refine content later.

---

**You've got this! 🚀**

With these templates, completing the remaining pages is straightforward copy-paste-customize work. The hard part (structure, components, design system) is already done.
