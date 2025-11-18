import { createFileRoute } from '@tanstack/react-router'
import Breadcrumbs from '../../components/Breadcrumbs'

export const Route = createFileRoute('/guides/ip-warming')({
  component: IPWarmingPage,
})

function IPWarmingPage() {
  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <Breadcrumbs items={[{ label: 'Guides', href: '/docs' }, { label: 'IP Warming' }]} />
        <h1 className="text-5xl font-bold text-gray-900 mb-6">IP Warming Strategy</h1>
        <p className="text-xl text-gray-600">Build sender reputation gradually - Content coming soon</p>
      </div>
    </div>
  )
}
