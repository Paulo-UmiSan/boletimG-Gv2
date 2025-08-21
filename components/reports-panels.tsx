"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { BarChart3, ExternalLink, Info } from "lucide-react"

export function ReportsPanels() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-foreground">Relatórios & Painéis</h1>
        <p className="text-muted-foreground">Dashboards interativos e análises de dados</p>
      </div>

      {/* Important Notice */}
      <Card className="bg-card border-accent/20">
        <CardContent className="pt-6">
          <div className="flex items-start gap-3">
            <Info className="h-5 w-5 text-accent mt-1" />
            <div>
              <h4 className="font-semibold text-card-foreground mb-2">Aviso Importante</h4>
              <p className="text-card-foreground">
                O <strong>Painel MO/Organograma (novo)</strong> é a referência principal para dados atualizados. O
                painel anterior (pré-Sankhya) deve ser usado apenas para comparações históricas.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Main Panel */}
      <Card className="bg-card">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <BarChart3 className="h-6 w-6 text-accent" />
              <div>
                <CardTitle className="text-card-foreground">Painel MO/Organograma</CardTitle>
                <p className="text-sm text-muted-foreground">Dashboard principal - Dados atualizados via Sankhya</p>
              </div>
            </div>
            <Badge className="bg-accent text-accent-foreground">Novo</Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
            <div className="text-center space-y-2">
              <BarChart3 className="h-12 w-12 text-muted-foreground mx-auto" />
              <p className="text-muted-foreground">Dashboard Power BI será carregado aqui</p>
              <Button
                onClick={() =>
                  window.open(
                    "https://app.powerbi.com/groups/d512cba1-18fa-418f-989b-ea2b6b1a0b60/reports/0d271a60-f9ee-4950-95f3-bfa733b57d4e/ff605f1f82406480629e?experience=power-bi",
                    "_blank",
                  )
                }
                className="bg-secondary text-secondary-foreground"
              >
                <ExternalLink className="h-4 w-4 mr-2" />
                Abrir em Nova Aba
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-card-foreground">277</div>
              <p className="text-sm text-muted-foreground">Colaboradores Totais</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-card-foreground">18</div>
              <p className="text-sm text-muted-foreground">Vagas Abertas</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-card-foreground">5</div>
              <p className="text-sm text-muted-foreground">Diretorias Ativas</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Legacy Panel */}
      <Card className="bg-card">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <BarChart3 className="h-6 w-6 text-muted-foreground" />
              <div>
                <CardTitle className="text-card-foreground">Painel Anterior (Pré-Sankhya)</CardTitle>
                <p className="text-sm text-muted-foreground">Dashboard legado - Para consultas históricas</p>
              </div>
            </div>
            <Badge variant="outline">Legado</Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
            <div className="text-center space-y-2">
              <BarChart3 className="h-12 w-12 text-muted-foreground mx-auto" />
              <p className="text-muted-foreground">Dashboard Power BI legado</p>
              <Button
                variant="outline"
                onClick={() =>
                  window.open(
                    "https://app.powerbi.com/groups/e1e34a54-3ee2-449f-a65f-e2eb2d2f2e0d/reports/aeee9bac-af95-4e04-becc-53856aa27f03/ReportSection1792b21e0c749b70a893?experience=power-bi",
                    "_blank",
                  )
                }
              >
                <ExternalLink className="h-4 w-4 mr-2" />
                Acessar Painel Legado
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className="bg-card">
          <CardHeader>
            <CardTitle className="text-card-foreground">Ações Rápidas</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button variant="outline" className="w-full justify-start bg-transparent">
              Exportar Relatório Mensal
            </Button>
            <Button variant="outline" className="w-full justify-start bg-transparent">
              Gerar Análise de Tendências
            </Button>
            <Button variant="outline" className="w-full justify-start bg-transparent">
              Comparativo Anual
            </Button>
          </CardContent>
        </Card>

        <Card className="bg-card">
          <CardHeader>
            <CardTitle className="text-card-foreground">Métricas em Destaque</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">Taxa de Crescimento</span>
              <span className="font-semibold text-accent">+12%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">Turnover</span>
              <span className="font-semibold text-card-foreground">8.5%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">Satisfação Interna</span>
              <span className="font-semibold text-accent">87%</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
