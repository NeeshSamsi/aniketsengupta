import { type KeyTextField } from "@prismicio/client"
import { cn } from "@/lib/utils"

export function SidebarItem({
  text,
  selected,
  className,
  onClick,
}: {
  text: KeyTextField | string
  selected: boolean
  className?: string
  onClick?: () => void
}) {
  return (
    <button
      className={cn(
        "transition-all duration-300 hover:font-medium hover:text-primary-800",
        className,
        {
          "font-semibold text-primary-800 hover:font-semibold": selected,
        },
      )}
      onClick={onClick}
    >
      {selected && <span>• </span>}
      {text}
    </button>
  )
}
