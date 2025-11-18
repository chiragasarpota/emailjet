import { createFileRoute } from '@tanstack/react-router'
import Breadcrumbs from '../components/Breadcrumbs'

export const Route = createFileRoute('/blog')({
  component: BlogPage,
})

function BlogPage() {
  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <Breadcrumbs items={[{ label: 'Blog' }]} />
        <h1 className="text-5xl font-bold text-gray-900 mb-6">EmailJet Blog</h1>
        <p className="text-xl text-gray-600">Latest updates and best practices - Content coming soon</p>
      </div>
    </div>
  )
}
