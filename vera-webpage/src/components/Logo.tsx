export function Logo({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <img
      src="/logo.vera.jpeg"
      alt="Vēra Logo"
      className={className}
    />
  )
}
