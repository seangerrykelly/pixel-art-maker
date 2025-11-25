import { Button } from "@/components/ui/button"
import { Eraser, PencilIcon, type LucideIcon } from "lucide-react"

export type DrawingTool = 'PENCIL' | 'ERASER'

type DrawingToolsProps = {
    currentTool: DrawingTool
    handleChange: (e: DrawingTool) => void
}

const drawingTools: { toolName: DrawingTool; icon: LucideIcon }[] = [
  { toolName: "PENCIL", icon: PencilIcon },
  { toolName: "ERASER", icon: Eraser },
]

export const DrawingTools = ({ currentTool, handleChange }: DrawingToolsProps) => {

    return (
        <div className="flex flex-row gap-2">
            {drawingTools.map((tool, index) => (
                <Button 
                    key={`drawing-tool-${index}`}
                    size="icon-sm"
                    variant={`${currentTool === tool.toolName ? 'default' : 'outline'}`}
                    onClick={() => handleChange(tool.toolName)}
                >
                    <tool.icon />
                </Button>
            ))}
        </div>
    )
}