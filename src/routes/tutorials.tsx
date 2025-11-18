import { createFileRoute } from '@tanstack/react-router'
import Breadcrumbs from '../components/Breadcrumbs'

export const Route = createFileRoute('/tutorials')({
  component: TutorialsPage,
})

function TutorialsPage() {
  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <Breadcrumbs items={[{ label: 'Tutorials' }]} />
        <h1 className="text-5xl font-bold text-gray-900 mb-6">Tutorials</h1>
        <p className="text-xl text-gray-600">Step-by-step integration guides - Content coming soon</p>
      </div>
    </div>
  )
}
