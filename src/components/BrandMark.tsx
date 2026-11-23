export function BrandMark({ className = '' }: { className?: string }) {
  return (
    <span className={`brand-mark ${className}`.trim()} aria-hidden="true">
      J<span className="brand-mark__registered">®</span>
    </span>
  )
}
