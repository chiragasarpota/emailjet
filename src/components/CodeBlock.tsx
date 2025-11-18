import { useState } from 'react'
import { Check, Copy } from 'lucide-react'

interface CodeBlockProps {
  code: string
  language: string
  filename?: string
}

export default function CodeBlock({ code, language, filename }: CodeBlockProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="relative my-6 rounded-lg overflow-hidden border border-gray-700 bg-gray-900">
      {filename && (
        <div className="px-4 py-2 bg-gray-800 border-b border-gray-700 text-sm text-gray-300 font-mono">
          {filename}
        </div>
      )}
      <div className="relative">
        <button
          onClick={handleCopy}
          className="absolute top-3 right-3 p-2 rounded bg-gray-800 hover:bg-gray-700 transition-colors text-gray-300"
          aria-label="Copy code"
        >
          {copied ? <Check size={16} /> : <Copy size={16} />}
        </button>
        <pre className="p-4 overflow-x-auto text-sm">
          <code className={`language-${language} text-gray-100`}>
            {code}
          </code>
        </pre>
      </div>
    </div>
  )
}
