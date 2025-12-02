import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"

type GridLineToggleProps = {
    handleToggleChange: (checked: boolean) => void
}

export const GridLineToggle = ({ handleToggleChange }: GridLineToggleProps) => {
    return (
        <div className="flex items-center space-x-2">
            <Label htmlFor="grid-line-toggle">Toggle Grid Lines</Label>
            <Switch id="grid-line-toggle" defaultChecked onCheckedChange={handleToggleChange}/>
        </div>
    )
}