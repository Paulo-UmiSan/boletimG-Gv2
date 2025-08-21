"use client"

import { Menu, Bell, User } from "lucide-react"
import { Button } from "@/components/ui/button"

interface HeaderProps {
  setSidebarOpen: (open: boolean) => void
}

export function Header({ setSidebarOpen }: HeaderProps) {
  return (
    <header className="bg-primary text-primary-foreground shadow-sm border-b border-border">
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setSidebarOpen(true)}
            className="md:hidden text-primary-foreground hover:bg-primary/90"
          >
            <Menu className="h-5 w-5" />
          </Button>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
              <span className="text-accent-foreground font-bold text-sm">UMI</span>
            </div>
            <div>
              <h1 className="font-bold text-lg">UMI SAN</h1>
              <p className="text-xs opacity-90">Intranet Corporativa</p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" className="text-primary-foreground hover:bg-primary/90">
            <Bell className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="sm" className="text-primary-foreground hover:bg-primary/90">
            <User className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </header>
  )
}
