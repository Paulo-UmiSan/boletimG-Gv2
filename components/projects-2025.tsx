import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  Target,
  Database,
  GraduationCap,
  Heart,
  Users,
  MessageSquare,
  CheckCircle,
  Clock,
  AlertTriangle,
} from "lucide-react"

const projects = [
  {
    id: 1,
    title: "Sankhya ERP",
    description: "Sistema integrado para Financeiro, Contabilidade e Suprimentos",
    purpose: "Centralizar e automatizar processos administrativos",
    strategy: "Implementação modular com treinamento contínuo",
    challenges: "Migração de dados legados e adaptação de usuários",
    status: "Em implantação",
    progress: 65,
    nextSteps: "Finalizar módulo de Suprimentos e iniciar testes integrados",
    icon: Database,
  },
  {
    id: 2,
    title: "PCS - Plano de Cargos & Salários",
    description: "Estruturação de trilha de carreira x remuneração",
    purpose: "Estabelecer critérios claros de progressão profissional",
    strategy: "Mapeamento de competências e benchmarking salarial",
    challenges: "Alinhamento com orçamento e expectativas dos colaboradores",
    status: "Concluído",
    progress: 100,
    nextSteps: "Implementação e comunicação para toda a organização",
    icon: Target,
  },
  {
    id: 3,
    title: "Treinamentos & PAT + Onboarding Digital",
    description: "Programa auditado ISO com alcance nacional",
    purpose: "Padronizar processos de integração e capacitação",
    strategy: "Plataforma digital com trilhas personalizadas",
    challenges: "Cobertura para equipes em campo fora do ES",
    status: "Em implantação",
    progress: 45,
    nextSteps: "Desenvolver módulos para operações remotas",
    icon: GraduationCap,
  },
  {
    id: 4,
    title: "UMI Bem-Estar (Saúde Mental)",
    description: "DSS diários, emociograma, palestras e canal de escuta",
    purpose: "Promover saúde mental e bem-estar dos colaboradores",
    strategy: "Abordagem preventiva com monitoramento contínuo",
    challenges: "Engajamento e quebra de tabus sobre saúde mental",
    status: "Em implantação",
    progress: 30,
    nextSteps: "Lançar campanha de conscientização e ampliar canais",
    icon: Heart,
  },
  {
    id: 5,
    title: "Mindsight 2025",
    description: "R&S, Clima, Metas e Avaliação de Desempenho",
    purpose: "Modernizar gestão de pessoas com dados e analytics",
    strategy: "Plataforma integrada com dashboards executivos",
    challenges: "Integração com sistemas legados",
    status: "Em risco",
    progress: 20,
    nextSteps: "Revisar cronograma e recursos necessários",
    icon: Users,
  },
  {
    id: 6,
    title: "Entrevistas de Desligamento",
    description: "Processo sistematizado com indicadores",
    purpose: "Capturar insights para melhoria contínua",
    strategy: "Formulário digital com análise de tendências",
    challenges: "Garantir feedback honesto e construtivo",
    status: "Concluído",
    progress: 100,
    nextSteps: "Análise mensal de dados e ações corretivas",
    icon: MessageSquare,
  },
]

export function Projects2025() {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Concluído":
        return <CheckCircle className="h-4 w-4 text-accent" />
      case "Em implantação":
        return <Clock className="h-4 w-4 text-chart-4" />
      case "Em risco":
        return <AlertTriangle className="h-4 w-4 text-destructive" />
      default:
        return <Clock className="h-4 w-4 text-muted-foreground" />
    }
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Concluído":
        return <Badge className="bg-accent text-accent-foreground">✅ Concluído</Badge>
      case "Em implantação":
        return (
          <Badge variant="secondary" className="bg-chart-4/10 text-chart-4 border-chart-4">
            ⏳ Em implantação
          </Badge>
        )
      case "Em risco":
        return (
          <Badge variant="destructive" className="bg-destructive/10 text-destructive border-destructive">
            ⚠️ Em risco
          </Badge>
        )
      default:
        return <Badge variant="outline">{status}</Badge>
    }
  }

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-foreground">Projetos & Ações 2025</h1>
        <p className="text-muted-foreground">Iniciativas estratégicas em andamento</p>
      </div>

      {/* Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="bg-card">
          <CardContent className="pt-6">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-accent" />
              <div>
                <div className="text-2xl font-bold text-card-foreground">2</div>
                <p className="text-sm text-muted-foreground">Projetos Concluídos</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card">
          <CardContent className="pt-6">
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-chart-4" />
              <div>
                <div className="text-2xl font-bold text-card-foreground">3</div>
                <p className="text-sm text-muted-foreground">Em Implantação</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card">
          <CardContent className="pt-6">
            <div className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-destructive" />
              <div>
                <div className="text-2xl font-bold text-card-foreground">1</div>
                <p className="text-sm text-muted-foreground">Em Risco</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {projects.map((project) => {
          const Icon = project.icon
          return (
            <Card key={project.id} className="bg-card">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-accent/10 rounded-lg">
                      <Icon className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <CardTitle className="text-lg text-card-foreground">{project.title}</CardTitle>
                      <p className="text-sm text-muted-foreground">{project.description}</p>
                    </div>
                  </div>
                  {getStatusIcon(project.status)}
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium text-card-foreground mb-1">Finalidade</h4>
                    <p className="text-sm text-muted-foreground">{project.purpose}</p>
                  </div>

                  <div>
                    <h4 className="font-medium text-card-foreground mb-1">Ação Estratégica</h4>
                    <p className="text-sm text-muted-foreground">{project.strategy}</p>
                  </div>

                  <div>
                    <h4 className="font-medium text-card-foreground mb-1">Desafios</h4>
                    <p className="text-sm text-muted-foreground">{project.challenges}</p>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-card-foreground">Progresso</span>
                    <span className="text-sm text-muted-foreground">{project.progress}%</span>
                  </div>
                  <Progress value={project.progress} className="h-2" />
                </div>

                <div className="flex items-center justify-between pt-2">{getStatusBadge(project.status)}</div>

                <div className="border-t pt-3">
                  <h4 className="font-medium text-card-foreground mb-2">Próximos Passos</h4>
                  <p className="text-sm text-muted-foreground">{project.nextSteps}</p>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
