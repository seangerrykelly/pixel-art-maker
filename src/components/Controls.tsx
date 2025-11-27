import type { ReactNode } from "react"

type ControlsProps = {
    children: ReactNode
}

export const Controls = ({ children }: ControlsProps) => {
    return (
        <div className="flex flex-col gap-2 sm:w-fit w-full sm:h-full h-auto shadow-xl p-4 rounded justify-self-start sm:border-r-2 sm:border-t-0 border-t-2">
            {children}
        </div>
    )
}