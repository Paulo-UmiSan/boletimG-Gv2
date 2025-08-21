"use client"

import { useState } from "react"
import { Sidebar } from "@/components/sidebar"
import { Header } from "@/components/header"
import { Dashboard } from "@/components/dashboard"
import { TeamStructure } from "@/components/team-structure"
import { WorkforceVacancies } from "@/components/workforce-vacancies"
import { Projects2025 } from "@/components/projects-2025"
import { ReportsPanels } from "@/components/reports-panels"
import { Governance } from "@/components/governance"
import { DocumentsContacts } from "@/components/documents-contacts"

export default function Home() {
  const [activeSection, setActiveSection] = useState("dashboard")
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const renderContent = () => {
    switch (activeSection) {
      case "dashboard":
        return <Dashboard />
      case "team":
        return <TeamStructure />
      case "workforce":
        return <WorkforceVacancies />
      case "projects":
        return <Projects2025 />
      case "reports":
        return <ReportsPanels />
      case "governance":
        return <Governance />
      case "documents":
        return <DocumentsContacts />
      default:
        return <Dashboard />
    }
  }

  return (
    <div className="flex h-screen bg-background">
      <Sidebar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        isOpen={sidebarOpen}
        setIsOpen={setSidebarOpen}
      />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header setSidebarOpen={setSidebarOpen} />
        <main className="flex-1 overflow-y-auto p-4 md:p-6">{renderContent()}</main>
      </div>
    </div>
  )
}
