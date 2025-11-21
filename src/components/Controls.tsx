import type { ReactNode } from "react"

type ControlsProps = {
    children: ReactNode
}

export const Controls = ({ children }: ControlsProps) => {
    return (
        <div className="flex flex-col gap-2 w-full">
            {children}
        </div>
    )
}