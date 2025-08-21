"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Briefcase, TrendingUp, MapPin, Filter } from "lucide-react"
import { useState } from "react"

const vacanciesData = [
  {
    id: 1,
    position: "Engenheiro Civil",
    diretoria: "Engenharia",
    projeto: "Porto Sul",
    local: "Vitória/ES",
    status: "Aberta",
  },
  {
    id: 2,
    position: "Técnico de Segurança",
    diretoria: "SMS",
    projeto: "Múltiplos",
    local: "Vila Velha/ES",
    status: "Em processo",
  },
  {
    id: 3,
    position: "Analista Financeiro",
    diretoria: "Financeiro",
    projeto: "Corporativo",
    local: "Vitória/ES",
    status: "Aberta",
  },
  {
    id: 4,
    position: "Soldador Naval",
    diretoria: "Operações",
    projeto: "Estaleiro",
    local: "Aracruz/ES",
    status: "Urgente",
  },
  {
    id: 5,
    position: "Coordenador de Projetos",
    diretoria: "Engenharia",
    projeto: "Infraestrutura",
    local: "Vitória/ES",
    status: "Aberta",
  },
]

export function WorkforceVacancies() {
  const [filterDiretoria, setFilterDiretoria] = useState("all")
  const [filterProjeto, setFilterProjeto] = useState("all")
  const [searchTerm, setSearchTerm] = useState("")

  const filteredVacancies = vacanciesData.filter((vacancy) => {
    return (
      (filterDiretoria === "all" || vacancy.diretoria === filterDiretoria) &&
      (filterProjeto === "all" || vacancy.projeto === filterProjeto) &&
      (searchTerm === "" || vacancy.position.toLowerCase().includes(searchTerm.toLowerCase()))
    )
  })

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Aberta":
        return (
          <Badge variant="outline" className="bg-accent/10 text-accent border-accent">
            Aberta
          </Badge>
        )
      case "Em processo":
        return (
          <Badge variant="outline" className="bg-chart-4/10 text-chart-4 border-chart-4">
            Em processo
          </Badge>
        )
      case "Urgente":
        return (
          <Badge variant="outline" className="bg-destructive/10 text-destructive border-destructive">
            Urgente
          </Badge>
        )
      default:
        return <Badge variant="outline">{status}</Badge>
    }
  }

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-foreground">Mão de Obra & Vagas</h1>
        <p className="text-muted-foreground">Gestão de colaboradores e posições em aberto</p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="bg-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-card-foreground">Vagas Ativas</CardTitle>
            <Briefcase className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-card-foreground">18</div>
            <p className="text-xs text-muted-foreground">Posições em 20/08/2025</p>
          </CardContent>
        </Card>

        <Card className="bg-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-card-foreground">Crescimento</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-accent">+12%</div>
            <p className="text-xs text-muted-foreground">Efetivo em 2025</p>
          </CardContent>
        </Card>

        <Card className="bg-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-card-foreground">Localidades</CardTitle>
            <MapPin className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-card-foreground">5</div>
            <p className="text-xs text-muted-foreground">Cidades ativas</p>
          </CardContent>
        </Card>
      </div>

      {/* Vacancies Table */}
      <Card className="bg-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-card-foreground">
            <Filter className="h-5 w-5" />
            Vagas em 20/08/2025 (18)
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Filters */}
          <div className="flex flex-col md:flex-row gap-4">
            <Input
              placeholder="Buscar por cargo..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="md:max-w-xs"
            />
            <Select value={filterDiretoria} onValueChange={setFilterDiretoria}>
              <SelectTrigger className="md:max-w-xs">
                <SelectValue placeholder="Filtrar por diretoria" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todas as diretorias</SelectItem>
                <SelectItem value="Engenharia">Engenharia</SelectItem>
                <SelectItem value="SMS">SMS</SelectItem>
                <SelectItem value="Financeiro">Financeiro</SelectItem>
                <SelectItem value="Operações">Operações</SelectItem>
              </SelectContent>
            </Select>
            <Select value={filterProjeto} onValueChange={setFilterProjeto}>
              <SelectTrigger className="md:max-w-xs">
                <SelectValue placeholder="Filtrar por projeto" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos os projetos</SelectItem>
                <SelectItem value="Porto Sul">Porto Sul</SelectItem>
                <SelectItem value="Múltiplos">Múltiplos</SelectItem>
                <SelectItem value="Corporativo">Corporativo</SelectItem>
                <SelectItem value="Estaleiro">Estaleiro</SelectItem>
                <SelectItem value="Infraestrutura">Infraestrutura</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Table */}
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Cargo</TableHead>
                  <TableHead>Diretoria</TableHead>
                  <TableHead>Projeto</TableHead>
                  <TableHead>Local</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredVacancies.map((vacancy) => (
                  <TableRow key={vacancy.id}>
                    <TableCell className="font-medium">{vacancy.position}</TableCell>
                    <TableCell>{vacancy.diretoria}</TableCell>
                    <TableCell>{vacancy.projeto}</TableCell>
                    <TableCell>{vacancy.local}</TableCell>
                    <TableCell>{getStatusBadge(vacancy.status)}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      {/* Data Source Note */}
      <Card className="bg-card border-accent/20">
        <CardContent className="pt-6">
          <div className="flex items-start gap-3">
            <TrendingUp className="h-5 w-5 text-accent mt-1" />
            <div>
              <h4 className="font-semibold text-card-foreground mb-2">Fonte de Dados</h4>
              <p className="text-card-foreground">
                Os dados são atualizados dinamicamente através da integração com Sankhya/Power BI. Gráficos de evolução
                e distribuição por área estão disponíveis nos painéis interativos.
              </p>
              <Button variant="outline" className="mt-3 bg-transparent" size="sm">
                Acessar Painéis Power BI
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
