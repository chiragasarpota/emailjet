import { createFileRoute } from '@tanstack/react-router'
import Breadcrumbs from '../components/Breadcrumbs'

export const Route = createFileRoute('/about')({
  component: AboutPage,
})

function AboutPage() {
  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <Breadcrumbs items={[{ label: 'About Us' }]} />
        <h1 className="text-5xl font-bold text-gray-900 mb-6">About EmailJet</h1>
        <p className="text-xl text-gray-600">Our mission and team - Content coming soon</p>
      </div>
    </div>
  )
}
