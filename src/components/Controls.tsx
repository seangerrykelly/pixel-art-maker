import type { ReactNode } from "react"

type ControlsProps = {
    children: ReactNode
}

export const Controls = ({ children }: ControlsProps) => {
    return (
        <div className="flex flex-col gap-2 w-fit h-full shadow-xl p-4 rounded justify-self-start">
            {children}
        </div>
    )
}