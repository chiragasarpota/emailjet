import { Link } from '@tanstack/react-router'
import { useState, useRef } from 'react'
import {
  Book,
  BookOpen,
  ChevronDown,
  ChevronRight,
  FileText,
  Home,
  Mail,
  Menu,
  Package,
  Server,
  Shield,
  Users,
  Webhook,
  X,
  Zap,
  Layout,
  Activity,
  Lock,
  Code2,
} from 'lucide-react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [expandedGroups, setExpandedGroups] = useState<Record<string, boolean>>({})
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const closeTimeoutRef = useRef<number | null>(null)

  const toggleGroup = (group: string) => {
    setExpandedGroups((prev) => ({
      ...prev,
      [group]: !prev[group],
    }))
  }

  const handleMouseEnter = (dropdown: string) => {
    // Clear any pending close timeout
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current)
      closeTimeoutRef.current = null
    }
    setActiveDropdown(dropdown)
  }

  const handleMouseLeave = () => {
    // Delay closing the dropdown to allow mouse movement
    closeTimeoutRef.current = window.setTimeout(() => {
      setActiveDropdown(null)
    }, 300) // 300ms delay
  }

  return (
    <>
      <header className="sticky top-0 z-40 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo & Mobile Menu */}
            <div className="flex items-center gap-4">
              <button
                onClick={() => setIsOpen(true)}
                className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
                aria-label="Open menu"
              >
                <Menu size={24} />
              </button>
              <Link to="/" className="flex items-center gap-2">
                <Mail size={32} className="text-blue-600" />
                <span className="text-2xl font-bold text-gray-900">EmailJet</span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-2">
              {/* Product Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter('product')}
                onMouseLeave={handleMouseLeave}
              >
                <button className="px-4 py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors flex items-center gap-1 rounded-lg hover:bg-gray-50">
                  Product
                  <ChevronDown size={16} />
                </button>
                {activeDropdown === 'product' && (
                  <div className="absolute left-0 top-full mt-1 w-80 bg-white border border-gray-200 rounded-lg shadow-lg py-2">
                    <Link
                      to="/product"
                      className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors"
                    >
                      <Package size={20} className="text-blue-600" />
                      <div>
                        <div className="font-semibold text-gray-900">Product Overview</div>
                        <div className="text-xs text-gray-500">Complete platform features</div>
                      </div>
                    </Link>
                    <div className="border-t border-gray-100 my-2" />
                    <Link
                      to="/product/smtp-api"
                      className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors"
                    >
                      <Server size={20} className="text-blue-600" />
                      <div>
                        <div className="font-semibold text-gray-900">SMTP API</div>
                        <div className="text-xs text-gray-500">Drop-in SMTP relay</div>
                      </div>
                    </Link>
                    <Link
                      to="/product/rest-api"
                      className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors"
                    >
                      <Code2 size={20} className="text-blue-600" />
                      <div>
                        <div className="font-semibold text-gray-900">REST API</div>
                        <div className="text-xs text-gray-500">Modern HTTP API</div>
                      </div>
                    </Link>
                    <Link
                      to="/product/template-builder"
                      className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors"
                    >
                      <Layout size={20} className="text-blue-600" />
                      <div>
                        <div className="font-semibold text-gray-900">Template Builder</div>
                        <div className="text-xs text-gray-500">Visual email editor</div>
                      </div>
                    </Link>
                    <Link
                      to="/product/webhooks"
                      className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors"
                    >
                      <Webhook size={20} className="text-blue-600" />
                      <div>
                        <div className="font-semibold text-gray-900">Webhooks</div>
                        <div className="text-xs text-gray-500">Real-time events</div>
                      </div>
                    </Link>
                    <Link
                      to="/product/analytics"
                      className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors"
                    >
                      <Activity size={20} className="text-blue-600" />
                      <div>
                        <div className="font-semibold text-gray-900">Analytics</div>
                        <div className="text-xs text-gray-500">Deliverability insights</div>
                      </div>
                    </Link>
                    <Link
                      to="/product/domain-auth"
                      className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors"
                    >
                      <Lock size={20} className="text-blue-600" />
                      <div>
                        <div className="font-semibold text-gray-900">Domain Authentication</div>
                        <div className="text-xs text-gray-500">SPF, DKIM, DMARC</div>
                      </div>
                    </Link>
                  </div>
                )}
              </div>

              {/* Developers Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter('developers')}
                onMouseLeave={handleMouseLeave}
              >
                <button className="px-4 py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors flex items-center gap-1 rounded-lg hover:bg-gray-50">
                  Developers
                  <ChevronDown size={16} />
                </button>
                {activeDropdown === 'developers' && (
                  <div className="absolute left-0 top-full mt-1 w-80 bg-white border border-gray-200 rounded-lg shadow-lg py-2">
                    <Link
                      to="/docs"
                      className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors"
                    >
                      <BookOpen size={20} className="text-blue-600" />
                      <div>
                        <div className="font-semibold text-gray-900">Documentation</div>
                        <div className="text-xs text-gray-500">API reference & guides</div>
                      </div>
                    </Link>
                    <div className="border-t border-gray-100 my-2" />
                    <Link
                      to="/guides/email-authentication"
                      className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors"
                    >
                      <Shield size={20} className="text-blue-600" />
                      <div>
                        <div className="font-semibold text-gray-900">Email Authentication</div>
                        <div className="text-xs text-gray-500">SPF, DKIM, DMARC guide</div>
                      </div>
                    </Link>
                    <Link
                      to="/guides/avoiding-spam"
                      className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors"
                    >
                      <Shield size={20} className="text-blue-600" />
                      <div>
                        <div className="font-semibold text-gray-900">Avoiding Spam Filters</div>
                        <div className="text-xs text-gray-500">Best practices</div>
                      </div>
                    </Link>
                    <Link
                      to="/guides/ip-warming"
                      className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors"
                    >
                      <Zap size={20} className="text-blue-600" />
                      <div>
                        <div className="font-semibold text-gray-900">IP Warming</div>
                        <div className="text-xs text-gray-500">Build sender reputation</div>
                      </div>
                    </Link>
                    <Link
                      to="/docs/troubleshooting"
                      className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors"
                    >
                      <FileText size={20} className="text-blue-600" />
                      <div>
                        <div className="font-semibold text-gray-900">Troubleshooting</div>
                        <div className="text-xs text-gray-500">Common issues & solutions</div>
                      </div>
                    </Link>
                    <Link
                      to="/tutorials"
                      className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors"
                    >
                      <Book size={20} className="text-blue-600" />
                      <div>
                        <div className="font-semibold text-gray-900">Tutorials</div>
                        <div className="text-xs text-gray-500">Step-by-step guides</div>
                      </div>
                    </Link>
                  </div>
                )}
              </div>

              {/* Resources Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter('resources')}
                onMouseLeave={handleMouseLeave}
              >
                <button className="px-4 py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors flex items-center gap-1 rounded-lg hover:bg-gray-50">
                  Resources
                  <ChevronDown size={16} />
                </button>
                {activeDropdown === 'resources' && (
                  <div className="absolute left-0 top-full mt-1 w-64 bg-white border border-gray-200 rounded-lg shadow-lg py-2">
                    <Link
                      to="/use-cases"
                      className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors"
                    >
                      <Zap size={20} className="text-blue-600" />
                      <div>
                        <div className="font-semibold text-gray-900">Use Cases</div>
                        <div className="text-xs text-gray-500">Real-world examples</div>
                      </div>
                    </Link>
                    <Link
                      to="/integrations"
                      className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors"
                    >
                      <Webhook size={20} className="text-blue-600" />
                      <div>
                        <div className="font-semibold text-gray-900">Integrations</div>
                        <div className="text-xs text-gray-500">Connect your tools</div>
                      </div>
                    </Link>
                    <Link
                      to="/blog"
                      className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors"
                    >
                      <FileText size={20} className="text-blue-600" />
                      <div>
                        <div className="font-semibold text-gray-900">Blog</div>
                        <div className="text-xs text-gray-500">Latest updates</div>
                      </div>
                    </Link>
                    <Link
                      to="/status"
                      className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors"
                    >
                      <Activity size={20} className="text-blue-600" />
                      <div>
                        <div className="font-semibold text-gray-900">Status</div>
                        <div className="text-xs text-gray-500">System uptime</div>
                      </div>
                    </Link>
                  </div>
                )}
              </div>

              {/* Company Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter('company')}
                onMouseLeave={handleMouseLeave}
              >
                <button className="px-4 py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors flex items-center gap-1 rounded-lg hover:bg-gray-50">
                  Company
                  <ChevronDown size={16} />
                </button>
                {activeDropdown === 'company' && (
                  <div className="absolute left-0 top-full mt-1 w-56 bg-white border border-gray-200 rounded-lg shadow-lg py-2">
                    <Link
                      to="/about"
                      className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors"
                    >
                      <Users size={20} className="text-blue-600" />
                      <div className="font-semibold text-gray-900">About Us</div>
                    </Link>
                    <Link
                      to="/security"
                      className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors"
                    >
                      <Shield size={20} className="text-blue-600" />
                      <div className="font-semibold text-gray-900">Security & SLA</div>
                    </Link>
                    <Link
                      to="/contact"
                      className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors"
                    >
                      <Mail size={20} className="text-blue-600" />
                      <div className="font-semibold text-gray-900">Contact Us</div>
                    </Link>
                  </div>
                )}
              </div>

              {/* Pricing */}
              <Link
                to="/pricing"
                className="px-4 py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors rounded-lg hover:bg-gray-50"
              >
                Pricing
              </Link>

              {/* CTA Button */}
              <Link
                to="/contact"
                className="ml-2 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-semibold transition-colors"
              >
                Get Started
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Mobile Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-80 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out flex flex-col ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <div className="flex items-center gap-2">
            <Mail size={24} className="text-blue-600" />
            <h2 className="text-xl font-bold text-gray-900">EmailJet</h2>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>

        <nav className="flex-1 p-4 overflow-y-auto">
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 transition-colors mb-2"
            activeProps={{
              className: 'flex items-center gap-3 p-3 rounded-lg bg-blue-50 text-blue-600 transition-colors mb-2',
            }}
          >
            <Home size={20} />
            <span className="font-medium">Home</span>
          </Link>

          {/* Product Section */}
          <div className="mb-2">
            <div className="flex items-center justify-between">
              <Link
                to="/product"
                onClick={() => setIsOpen(false)}
                className="flex-1 flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 transition-colors"
                activeProps={{
                  className: 'flex-1 flex items-center gap-3 p-3 rounded-lg bg-blue-50 text-blue-600 transition-colors',
                }}
              >
                <Package size={20} />
                <span className="font-medium">Product</span>
              </Link>
              <button
                className="p-3 hover:bg-gray-100 rounded-lg transition-colors"
                onClick={() => toggleGroup('product')}
              >
                {expandedGroups.product ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
              </button>
            </div>
            {expandedGroups.product && (
              <div className="ml-6 space-y-1 mt-1">
                <Link
                  to="/product/smtp-api"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-2 p-2 text-sm rounded hover:bg-gray-100"
                >
                  SMTP API
                </Link>
                <Link
                  to="/product/rest-api"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-2 p-2 text-sm rounded hover:bg-gray-100"
                >
                  REST API
                </Link>
                <Link
                  to="/product/template-builder"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-2 p-2 text-sm rounded hover:bg-gray-100"
                >
                  Template Builder
                </Link>
                <Link
                  to="/product/webhooks"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-2 p-2 text-sm rounded hover:bg-gray-100"
                >
                  Webhooks
                </Link>
                <Link
                  to="/product/analytics"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-2 p-2 text-sm rounded hover:bg-gray-100"
                >
                  Analytics
                </Link>
                <Link
                  to="/product/domain-auth"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-2 p-2 text-sm rounded hover:bg-gray-100"
                >
                  Domain Authentication
                </Link>
              </div>
            )}
          </div>

          {/* Documentation Section */}
          <div className="mb-2">
            <div className="flex items-center justify-between">
              <Link
                to="/docs"
                onClick={() => setIsOpen(false)}
                className="flex-1 flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 transition-colors"
                activeProps={{
                  className: 'flex-1 flex items-center gap-3 p-3 rounded-lg bg-blue-50 text-blue-600 transition-colors',
                }}
              >
                <BookOpen size={20} />
                <span className="font-medium">Documentation</span>
              </Link>
              <button
                className="p-3 hover:bg-gray-100 rounded-lg transition-colors"
                onClick={() => toggleGroup('docs')}
              >
                {expandedGroups.docs ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
              </button>
            </div>
            {expandedGroups.docs && (
              <div className="ml-6 space-y-1 mt-1">
                <Link
                  to="/docs/troubleshooting"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-2 p-2 text-sm rounded hover:bg-gray-100"
                >
                  Troubleshooting
                </Link>
                <Link
                  to="/guides/email-authentication"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-2 p-2 text-sm rounded hover:bg-gray-100"
                >
                  Email Authentication
                </Link>
                <Link
                  to="/guides/avoiding-spam"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-2 p-2 text-sm rounded hover:bg-gray-100"
                >
                  Avoiding Spam
                </Link>
                <Link
                  to="/guides/ip-warming"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-2 p-2 text-sm rounded hover:bg-gray-100"
                >
                  IP Warming
                </Link>
              </div>
            )}
          </div>

          <Link
            to="/use-cases"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 transition-colors mb-2"
            activeProps={{
              className: 'flex items-center gap-3 p-3 rounded-lg bg-blue-50 text-blue-600 transition-colors mb-2',
            }}
          >
            <Zap size={20} />
            <span className="font-medium">Use Cases</span>
          </Link>

          <Link
            to="/integrations"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 transition-colors mb-2"
            activeProps={{
              className: 'flex items-center gap-3 p-3 rounded-lg bg-blue-50 text-blue-600 transition-colors mb-2',
            }}
          >
            <Webhook size={20} />
            <span className="font-medium">Integrations</span>
          </Link>

          <Link
            to="/tutorials"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 transition-colors mb-2"
            activeProps={{
              className: 'flex items-center gap-3 p-3 rounded-lg bg-blue-50 text-blue-600 transition-colors mb-2',
            }}
          >
            <Book size={20} />
            <span className="font-medium">Tutorials</span>
          </Link>

          <Link
            to="/pricing"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 transition-colors mb-2"
            activeProps={{
              className: 'flex items-center gap-3 p-3 rounded-lg bg-blue-50 text-blue-600 transition-colors mb-2',
            }}
          >
            <FileText size={20} />
            <span className="font-medium">Pricing</span>
          </Link>

          <Link
            to="/security"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 transition-colors mb-2"
            activeProps={{
              className: 'flex items-center gap-3 p-3 rounded-lg bg-blue-50 text-blue-600 transition-colors mb-2',
            }}
          >
            <Shield size={20} />
            <span className="font-medium">Security & SLA</span>
          </Link>

          <Link
            to="/status"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 transition-colors mb-2"
            activeProps={{
              className: 'flex items-center gap-3 p-3 rounded-lg bg-blue-50 text-blue-600 transition-colors mb-2',
            }}
          >
            <Activity size={20} />
            <span className="font-medium">Status</span>
          </Link>

          <Link
            to="/blog"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 transition-colors mb-2"
            activeProps={{
              className: 'flex items-center gap-3 p-3 rounded-lg bg-blue-50 text-blue-600 transition-colors mb-2',
            }}
          >
            <FileText size={20} />
            <span className="font-medium">Blog</span>
          </Link>

          <Link
            to="/about"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 transition-colors mb-2"
            activeProps={{
              className: 'flex items-center gap-3 p-3 rounded-lg bg-blue-50 text-blue-600 transition-colors mb-2',
            }}
          >
            <Users size={20} />
            <span className="font-medium">About</span>
          </Link>

          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 p-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors mb-2 mt-4"
          >
            <Mail size={20} />
            <span className="font-medium">Contact Us</span>
          </Link>
        </nav>
      </aside>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  )
}
