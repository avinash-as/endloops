import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '../lib/cn'

export function Accordion({
  items,
}: {
  items: { question: string; answer: string }[]
}) {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <div className="divide-y divide-line rounded-2xl border border-line bg-white">
      {items.map((item, i) => {
        const isOpen = open === i
        return (
          <div key={item.question}>
            <button
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
            >
              <span className="font-semibold text-navy">{item.question}</span>
              <ChevronDown
                size={18}
                className={cn('shrink-0 text-muted transition-transform', isOpen && 'rotate-180')}
              />
            </button>
            {isOpen && (
              <div className="px-6 pb-5 text-sm leading-relaxed text-muted">{item.answer}</div>
            )}
          </div>
        )
      })}
    </div>
  )
}
