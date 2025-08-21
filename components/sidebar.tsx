"use client"

import { X, Home, Users, Briefcase, Target, BarChart3, Shield, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface SidebarProps {
  activeSection: string
  setActiveSection: (section: string) => void
  isOpen: boolean
  setIsOpen: (open: boolean) => void
}

const menuItems = [
  { id: "dashboard", label: "Início (Dashboard)", icon: Home },
  { id: "team", label: "Equipe & Estrutura", icon: Users },
  { id: "workforce", label: "Mão de Obra & Vagas", icon: Briefcase },
  { id: "projects", label: "Projetos & Ações 2025", icon: Target },
  { id: "reports", label: "Relatórios & Painéis", icon: BarChart3 },
  { id: "governance", label: "Governança & Conformidade", icon: Shield },
  { id: "documents", label: "Documentos & Contatos", icon: FileText },
]

export function Sidebar({ activeSection, setActiveSection, isOpen, setIsOpen }: SidebarProps) {
  return (
    <>
      {/* Mobile overlay */}
      {isOpen && <div className="fixed inset-0 bg-black/50 z-40 md:hidden" onClick={() => setIsOpen(false)} />}

      {/* Sidebar */}
      <div
        className={cn(
          "fixed left-0 top-0 z-50 h-full w-64 bg-sidebar border-r border-sidebar-border transform transition-transform duration-200 ease-in-out md:relative md:translate-x-0",
          isOpen ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <div className="flex items-center justify-between p-4 border-b border-sidebar-border md:hidden">
          <span className="font-bold text-sidebar-foreground">Menu</span>
          <Button variant="ghost" size="sm" onClick={() => setIsOpen(false)} className="text-sidebar-foreground">
            <X className="h-4 w-4" />
          </Button>
        </div>

        <nav className="p-4 space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon
            return (
              <Button
                key={item.id}
                variant={activeSection === item.id ? "default" : "ghost"}
                className={cn(
                  "w-full justify-start text-left h-auto py-3 px-3",
                  activeSection === item.id
                    ? "bg-sidebar-accent text-sidebar-accent-foreground"
                    : "text-sidebar-foreground hover:bg-sidebar-primary hover:text-sidebar-primary-foreground",
                )}
                onClick={() => {
                  setActiveSection(item.id)
                  setIsOpen(false)
                }}
              >
                <Icon className="h-4 w-4 mr-3 flex-shrink-0" />
                <span className="text-sm">{item.label}</span>
              </Button>
            )
          })}
        </nav>
      </div>
    </>
  )
}
