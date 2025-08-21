import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Shield, Building, AlertTriangle, Scale, Users, FileText } from "lucide-react"

export function Governance() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-foreground">Governança & Conformidade</h1>
        <p className="text-muted-foreground">Estrutura organizacional e pontos de atenção</p>
      </div>

      {/* CNPJ Redistribution */}
      <Card className="bg-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-card-foreground">
            <Building className="h-5 w-5" />
            Proposta de Redistribuição de Pessoal entre CNPJs
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card className="bg-muted">
              <CardContent className="pt-4">
                <div className="text-center space-y-2">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto">
                    <Shield className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="font-semibold text-card-foreground">HDS</h3>
                  <p className="text-sm text-muted-foreground">Atividades marítimas</p>
                  <Badge variant="outline">Especializado</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-muted">
              <CardContent className="pt-4">
                <div className="text-center space-y-2">
                  <div className="w-12 h-12 bg-chart-2/10 rounded-lg flex items-center justify-center mx-auto">
                    <Building className="h-6 w-6 text-chart-2" />
                  </div>
                  <h3 className="font-semibold text-card-foreground">TON TON</h3>
                  <p className="text-sm text-muted-foreground">Manutenção</p>
                  <Badge variant="outline">Técnico</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-muted">
              <CardContent className="pt-4">
                <div className="text-center space-y-2">
                  <div className="w-12 h-12 bg-chart-3/10 rounded-lg flex items-center justify-center mx-auto">
                    <Scale className="h-6 w-6 text-chart-3" />
                  </div>
                  <h3 className="font-semibold text-card-foreground">Filial GEO</h3>
                  <p className="text-sm text-muted-foreground">Sondagem</p>
                  <Badge variant="outline">Operacional</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-muted">
              <CardContent className="pt-4">
                <div className="text-center space-y-2">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-card-foreground">UMI SAN</h3>
                  <p className="text-sm text-muted-foreground">Demais equipes</p>
                  <Badge variant="outline">Corporativo</Badge>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-card-foreground">Pontos a Avaliar:</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <div className="flex items-start gap-3 p-3 bg-muted rounded-lg">
                  <FileText className="h-4 w-4 text-muted-foreground mt-1" />
                  <div>
                    <p className="font-medium text-card-foreground">INSS/FMM</p>
                    <p className="text-sm text-muted-foreground">Adequação tributária por atividade</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-muted rounded-lg">
                  <Users className="h-4 w-4 text-muted-foreground mt-1" />
                  <div>
                    <p className="font-medium text-card-foreground">Sindicato/Atividade Preponderante</p>
                    <p className="text-sm text-muted-foreground">Classificação por setor de atuação</p>
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3 p-3 bg-muted rounded-lg">
                  <Scale className="h-4 w-4 text-muted-foreground mt-1" />
                  <div>
                    <p className="font-medium text-card-foreground">Remuneração e Benefícios</p>
                    <p className="text-sm text-muted-foreground">Diferenciação por categoria</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-muted rounded-lg">
                  <Shield className="h-4 w-4 text-muted-foreground mt-1" />
                  <div>
                    <p className="font-medium text-card-foreground">CIPA/PCD/Aprendizes</p>
                    <p className="text-sm text-muted-foreground">Conformidade por porte e risco</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Alert>
            <AlertTriangle className="h-4 w-4" />
            <AlertDescription>
              <strong>Riscos identificados:</strong> Integração de grupo econômico e necessidade de avaliar alternativas
              de transferência (com/sem rescisão contratual).
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Sensitive Points */}
      <Card className="bg-card border-destructive/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-card-foreground">
            <AlertTriangle className="h-5 w-5 text-destructive" />
            Pontos de Atenção
            <Badge variant="destructive" className="ml-2">
              Acesso Restrito
            </Badge>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Alert className="border-destructive/20">
            <Shield className="h-4 w-4" />
            <AlertDescription>
              <strong>Área Sensível:</strong> Esta seção contém informações confidenciais sobre tratamentos
              abusivos/discriminatórios e mapeamento de riscos (saúde mental, vícios, etc.). Acesso restrito a Conselho
              e Diretoria.
            </AlertDescription>
          </Alert>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="bg-muted">
              <CardContent className="pt-4">
                <div className="space-y-2">
                  <h4 className="font-semibold text-card-foreground">Registros de Tratamento</h4>
                  <p className="text-sm text-muted-foreground">
                    Monitoramento de casos de tratamento abusivo ou discriminatório no ambiente de trabalho.
                  </p>
                  <Badge variant="outline" className="text-xs">
                    Confidencial
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-muted">
              <CardContent className="pt-4">
                <div className="space-y-2">
                  <h4 className="font-semibold text-card-foreground">Mapeamento de Riscos</h4>
                  <p className="text-sm text-muted-foreground">
                    Identificação de riscos relacionados à saúde mental, vícios e outros fatores críticos.
                  </p>
                  <Badge variant="outline" className="text-xs">
                    Confidencial
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>

      {/* Action Button */}
      <Card className="bg-card">
        <CardContent className="pt-6">
          <div className="text-center space-y-4">
            <h3 className="font-semibold text-card-foreground">Próximos Passos</h3>
            <p className="text-muted-foreground">
              A proposta de redistribuição requer análise detalhada dos aspectos jurídicos e operacionais.
            </p>
            <Button className="bg-secondary text-secondary-foreground">
              <FileText className="h-4 w-4 mr-2" />
              Encaminhar para Avaliação Jurídica e Operacional
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
