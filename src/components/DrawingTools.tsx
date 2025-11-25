import { Button } from "@/components/ui/button"
import { Eraser, PencilIcon } from "lucide-react"

type DrawingToolsProps = {}

export const DrawingTools = ({}: DrawingToolsProps) => {
    return (
        <div className="flex flex-row gap-2">
            <Button><PencilIcon /></Button>
            <Button><Eraser /></Button>
        </div>
    )
}