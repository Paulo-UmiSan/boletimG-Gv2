import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, UserCheck, Shield } from "lucide-react"

export function TeamStructure() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-foreground">Equipe & Estrutura</h1>
        <p className="text-muted-foreground">Organização e evolução do setor de Gente & Gestão</p>
      </div>

      {/* Evolution Summary */}
      <Card className="bg-card">
        <CardHeader>
          <CardTitle className="text-card-foreground">Evolução do Setor</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-card-foreground">
            O setor evoluiu de um departamento pessoal tradicional (DP) para uma área integrada de Recursos Humanos +
            SMS (Segurança, Meio Ambiente e Saúde), visando uma gestão mais estratégica e alinhada aos objetivos
            organizacionais.
          </p>
          <div className="flex flex-wrap gap-2">
            <Badge variant="outline">Gestão Estratégica</Badge>
            <Badge variant="outline">Integração SMS</Badge>
            <Badge variant="outline">Certificações ISO</Badge>
          </div>
        </CardContent>
      </Card>

      {/* Team Organization */}
      <Card className="bg-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-card-foreground">
            <Users className="h-5 w-5" />
            Organização do Time G&G (21 pessoas)
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* RH/DP Section */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <UserCheck className="h-4 w-4 text-accent" />
              <h3 className="font-semibold text-card-foreground">RH/DP</h3>
              <Badge variant="secondary">4 pessoas</Badge>
            </div>
            <div className="ml-6 space-y-2">
              <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                <span className="text-card-foreground">1 Coordenadora</span>
                <Badge variant="outline">Liderança</Badge>
              </div>
              <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                <span className="text-card-foreground">2 Analistas (RH e DP)</span>
                <Badge variant="outline">Especialistas</Badge>
              </div>
              <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                <span className="text-card-foreground">1 Assistente</span>
                <Badge variant="outline">Suporte</Badge>
              </div>
            </div>
          </div>

          {/* Support Section */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4 text-accent" />
              <h3 className="font-semibold text-card-foreground">Aprendizes e Apoio</h3>
              <Badge variant="secondary">4 pessoas</Badge>
            </div>
            <div className="ml-6 space-y-2">
              <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                <span className="text-card-foreground">3 Aprendizes</span>
                <Badge variant="outline">Desenvolvimento</Badge>
              </div>
              <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                <span className="text-card-foreground">1 Arquivista</span>
                <Badge variant="outline">Documentação</Badge>
              </div>
            </div>
          </div>

          {/* SMS Section */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4 text-accent" />
              <h3 className="font-semibold text-card-foreground">SMS (Segurança, Meio Ambiente e Saúde)</h3>
              <Badge variant="secondary">13 pessoas</Badge>
            </div>
            <div className="ml-6 space-y-2">
              <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                <span className="text-card-foreground">1 Coordenador SMS</span>
                <Badge variant="outline">Liderança</Badge>
              </div>
              <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                <span className="text-card-foreground">9 TSTs (Técnicos de Segurança)</span>
                <Badge variant="outline">Configuração variável</Badge>
              </div>
              <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                <span className="text-card-foreground">1 Técnica de Enfermagem</span>
                <Badge variant="outline">Saúde</Badge>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Integration Note */}
      <Card className="bg-card border-accent/20">
        <CardContent className="pt-6">
          <div className="flex items-start gap-3">
            <Shield className="h-5 w-5 text-accent mt-1" />
            <div>
              <h4 className="font-semibold text-card-foreground mb-2">Integração SMS</h4>
              <p className="text-card-foreground">
                A integração da área de SMS visa o fortalecimento das certificações ISO 45001 (Gestão de Segurança e
                Saúde Ocupacional) e ISO 14001 (Gestão Ambiental), promovendo uma cultura organizacional mais segura e
                sustentável.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
