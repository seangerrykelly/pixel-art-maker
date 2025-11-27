import { Button } from "@/components/ui/button"
import { useTheme } from "@/components/ThemeProvider"

export const Header = () => {
    const { setTheme, theme } = useTheme()

    const toggleTheme = () => {
        if (theme === 'dark') {
            setTheme('light')
        } else {
            setTheme('dark')
        }
    }

    return (
        <div className="p-1 shadow-md w-full flex items-center justify-center border">
            Pixel Art Maker
            <Button onClick={toggleTheme}>Toggle theme</Button>
        </div>
    )
}