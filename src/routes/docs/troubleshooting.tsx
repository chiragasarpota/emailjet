import { createFileRoute } from '@tanstack/react-router'
import Breadcrumbs from '../../components/Breadcrumbs'

export const Route = createFileRoute('/docs/troubleshooting')({
  component: TroubleshootingPage,
})

function TroubleshootingPage() {
  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <Breadcrumbs items={[{ label: 'Docs', href: '/docs' }, { label: 'Troubleshooting' }]} />
        <h1 className="text-5xl font-bold text-gray-900 mb-6">API Troubleshooting</h1>
        <p className="text-xl text-gray-600">Common issues and solutions - Content coming soon</p>
      </div>
    </div>
  )
}
