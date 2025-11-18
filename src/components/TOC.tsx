interface TOCItem {
  id: string
  title: string
  level: number
}

interface TOCProps {
  items: TOCItem[]
}

export default function TOC({ items }: TOCProps) {
  return (
    <nav className="sticky top-24 bg-gray-50 border border-gray-200 rounded-lg p-4">
      <h4 className="font-semibold text-gray-900 mb-3 text-sm uppercase tracking-wide">
        Table of Contents
      </h4>
      <ul className="space-y-2">
        {items.map((item) => (
          <li
            key={item.id}
            style={{ marginLeft: `${(item.level - 1) * 12}px` }}
          >
            <a
              href={`#${item.id}`}
              className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
            >
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
