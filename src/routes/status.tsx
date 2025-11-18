import { createFileRoute } from '@tanstack/react-router'
import Breadcrumbs from '../components/Breadcrumbs'

export const Route = createFileRoute('/status')({
  component: StatusPage,
})

function StatusPage() {
  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <Breadcrumbs items={[{ label: 'Status' }]} />
        <h1 className="text-5xl font-bold text-gray-900 mb-6">System Status</h1>
        <p className="text-xl text-gray-600">Real-time system health monitoring - Content coming soon</p>
      </div>
    </div>
  )
}
