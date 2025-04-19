"use client";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "../components/ui/button";
export function ModeToggle() {
    const { theme, setTheme } = useTheme();
    return (<div>
      <Button variant="secondary" size="sm" onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        {theme === "light" ? <Sun size={64}/> : <Moon size={64}/>}
      </Button>
    </div>);
}
