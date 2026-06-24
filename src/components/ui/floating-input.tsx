import * as React from "react"
import { cn } from "@/lib/utils"

export interface FloatingInputProps extends React.ComponentProps<"input"> {
  label: string
}

const FloatingInput = React.forwardRef<HTMLInputElement, FloatingInputProps>(
  ({ className, label, type, ...props }, ref) => {
    return (
      <div className="relative z-0 w-full group">
        <input
          type={type}
          ref={ref}
          placeholder=" "
          className={cn(
            "block py-3 px-0 w-full text-base bg-transparent border-t-0 border-l-0 border-r-0 border-b border-border appearance-none focus:outline-none focus:ring-0 focus:border-gold peer transition-colors duration-300 font-hanken text-on-surface placeholder:text-transparent",
            className
          )}
          {...props}
        />
        <label
          className={cn(
            "absolute text-sm text-on-surface-variant duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-gold peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 select-none font-hanken"
          )}
        >
          {label}
        </label>
      </div>
    )
  }
)

FloatingInput.displayName = "FloatingInput"

export { FloatingInput }
