import { type KeyTextField } from "@prismicio/client"
import { cn } from "@/lib/utils"

export function SidebarItem({
  text,
  selected,
  className,
}: {
  text: KeyTextField | string
  selected: boolean
  className?: string
}) {
  return (
    <button
      className={cn(
        "transition-all hover:font-medium hover:text-primary-800",
        className,
        {
          "font-semibold text-primary-800 hover:font-semibold": selected,
        },
      )}
    >
      {selected && <span>• </span>}
      {text}
    </button>
  )
}
