import { createFileRoute } from '@tanstack/react-router'
import Breadcrumbs from '../components/Breadcrumbs'

export const Route = createFileRoute('/integrations')({
  component: IntegrationsPage,
})

function IntegrationsPage() {
  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <Breadcrumbs items={[{ label: 'Integrations' }]} />
        <h1 className="text-5xl font-bold text-gray-900 mb-6">Integrations</h1>
        <p className="text-xl text-gray-600">Connect with your favorite tools - Content coming soon</p>
      </div>
    </div>
  )
}
