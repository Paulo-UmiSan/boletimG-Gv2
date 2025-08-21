"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Users, Briefcase, Clock, CheckCircle } from "lucide-react"

export function Dashboard() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-foreground">Boletim Mensal G&G — Julho/2025</h1>
        <p className="text-muted-foreground">Última atualização: 20/08/2025</p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="bg-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-card-foreground">Vagas em Aberto</CardTitle>
            <Briefcase className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-card-foreground">18</div>
            <p className="text-xs text-muted-foreground">Posições disponíveis</p>
          </CardContent>
        </Card>

        <Card className="bg-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-card-foreground">Efetivo Total</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-card-foreground">277</div>
            <p className="text-xs text-muted-foreground">CLT, Prestadores e Sócios</p>
          </CardContent>
        </Card>

        <Card className="bg-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-card-foreground">Time G&G</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-card-foreground">21</div>
            <p className="text-xs text-muted-foreground">Pessoas na equipe</p>
          </CardContent>
        </Card>

        <Card className="bg-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-card-foreground">Status Sankhya</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2">
              <Badge variant="secondary" className="bg-accent text-accent-foreground">
                ⏳ Em implantação
              </Badge>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Links */}
      <Card className="bg-card">
        <CardHeader>
          <CardTitle className="text-card-foreground">Links Rápidos</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <Button
              variant="outline"
              className="h-auto p-4 text-left justify-start bg-transparent"
              onClick={() =>
                window.open(
                  "https://app.powerbi.com/groups/d512cba1-18fa-418f-989b-ea2b6b1a0b60/reports/0d271a60-f9ee-4950-95f3-bfa733b57d4e/ff605f1f82406480629e?experience=power-bi",
                  "_blank",
                )
              }
            >
              <div>
                <div className="font-medium">Painel MO/Organograma</div>
                <div className="text-sm text-muted-foreground">Power BI (Novo)</div>
              </div>
            </Button>

            <Button
              variant="outline"
              className="h-auto p-4 text-left justify-start bg-transparent"
              onClick={() =>
                window.open(
                  "https://app.powerbi.com/groups/e1e34a54-3ee2-449f-a65f-e2eb2d2f2e0d/reports/aeee9bac-af95-4e04-becc-53856aa27f03/ReportSection1792b21e0c749b70a893?experience=power-bi",
                  "_blank",
                )
              }
            >
              <div>
                <div className="font-medium">Painel Anterior</div>
                <div className="text-sm text-muted-foreground">Pré-Sankhya</div>
              </div>
            </Button>

            <Button
              variant="default"
              className="h-auto p-4 text-left justify-start bg-secondary text-secondary-foreground"
            >
              <div>
                <div className="font-medium">Ações 2025</div>
                <div className="text-sm opacity-90">Projetos em andamento</div>
              </div>
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Recent Updates */}
      <Card className="bg-card">
        <CardHeader>
          <CardTitle className="text-card-foreground">Atualizações Recentes</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-start gap-3">
            <CheckCircle className="h-5 w-5 text-accent mt-0.5" />
            <div>
              <p className="font-medium text-card-foreground">Integração SMS concluída</p>
              <p className="text-sm text-muted-foreground">Certificações ISO 45001/14001 em andamento</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Clock className="h-5 w-5 text-muted-foreground mt-0.5" />
            <div>
              <p className="font-medium text-card-foreground">Sankhya ERP em implantação</p>
              <p className="text-sm text-muted-foreground">Integração Financeiro, Contabilidade e Suprimentos</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
