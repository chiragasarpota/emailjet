import { ReactNode } from 'react'

interface CardProps {
  title?: string
  children: ReactNode
  icon?: ReactNode
  className?: string
}

export default function Card({ title, children, icon, className = '' }: CardProps) {
  return (
    <div className={`bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow ${className}`}>
      {(title || icon) && (
        <div className="flex items-center gap-3 mb-4">
          {icon && <div className="text-blue-600">{icon}</div>}
          {title && <h3 className="text-xl font-semibold text-gray-900">{title}</h3>}
        </div>
      )}
      <div className="text-gray-700">{children}</div>
    </div>
  )
}
