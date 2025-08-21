import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Download, Building, Phone, Mail, Globe, MapPin, FileText, Calendar } from "lucide-react"

export function DocumentsContacts() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-foreground">Documentos & Contatos</h1>
        <p className="text-muted-foreground">Informações institucionais e downloads</p>
      </div>

      {/* Document Download */}
      <Card className="bg-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-card-foreground">
            <FileText className="h-5 w-5" />
            Documentos Disponíveis
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-muted rounded-lg">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                <FileText className="h-5 w-5 text-accent" />
              </div>
              <div>
                <h4 className="font-semibold text-card-foreground">Boletim Mensal G&G - Julho/2025</h4>
                <p className="text-sm text-muted-foreground">Versão completa em PDF</p>
                <div className="flex items-center gap-2 mt-1">
                  <Badge variant="outline" className="text-xs">
                    PDF
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    2.3 MB
                  </Badge>
                  <span className="text-xs text-muted-foreground">Atualizado em 20/08/2025</span>
                </div>
              </div>
            </div>
            <Button className="bg-secondary text-secondary-foreground">
              <Download className="h-4 w-4 mr-2" />
              Download
            </Button>
          </div>

          <div className="flex items-center justify-between p-4 bg-muted rounded-lg">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-chart-2/10 rounded-lg flex items-center justify-center">
                <Calendar className="h-5 w-5 text-chart-2" />
              </div>
              <div>
                <h4 className="font-semibold text-card-foreground">Relatório Executivo - Resumo</h4>
                <p className="text-sm text-muted-foreground">Principais indicadores e métricas</p>
                <div className="flex items-center gap-2 mt-1">
                  <Badge variant="outline" className="text-xs">
                    PDF
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    850 KB
                  </Badge>
                </div>
              </div>
            </div>
            <Button variant="outline">
              <Download className="h-4 w-4 mr-2" />
              Download
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Company Information */}
      <Card className="bg-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-card-foreground">
            <Building className="h-5 w-5" />
            Informações Institucionais
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Company Details */}
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-card-foreground mb-3">Dados da Empresa</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Building className="h-4 w-4 text-muted-foreground mt-1" />
                    <div>
                      <p className="font-medium text-card-foreground">
                        UMI SAN Serviços de Apoio à Navegação e Engenharia Ltda.
                      </p>
                      <p className="text-sm text-muted-foreground">CNPJ: 03.290.647/0001-93</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="h-4 w-4 text-muted-foreground mt-1" />
                    <div>
                      <p className="text-card-foreground">Rodovia do Sol, nº 2780, 12º Andar</p>
                      <p className="text-card-foreground">Ed. Itaparica Top Business</p>
                      <p className="text-card-foreground">Praia de Itaparica, Vila Velha/ES</p>
                      <p className="text-card-foreground">CEP 29102-020</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-card-foreground mb-3">Contatos</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-muted rounded-lg">
                    <Phone className="h-4 w-4 text-accent" />
                    <div>
                      <p className="font-medium text-card-foreground">Telefone</p>
                      <p className="text-sm text-muted-foreground">27 3075 9450</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3 bg-muted rounded-lg">
                    <Mail className="h-4 w-4 text-accent" />
                    <div>
                      <p className="font-medium text-card-foreground">E-mail</p>
                      <p className="text-sm text-muted-foreground">comercial@umi.com.br</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3 bg-muted rounded-lg">
                    <Globe className="h-4 w-4 text-accent" />
                    <div>
                      <p className="font-medium text-card-foreground">Website</p>
                      <p className="text-sm text-muted-foreground">www.umi.com.br</p>
                    </div>
                  </div>
                </div>
              </div>
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
              <Mail className="h-4 w-4 mr-2" />
              Enviar Feedback sobre o Boletim
            </Button>
            <Button variant="outline" className="w-full justify-start bg-transparent">
              <FileText className="h-4 w-4 mr-2" />
              Solicitar Relatório Personalizado
            </Button>
            <Button variant="outline" className="w-full justify-start bg-transparent">
              <Calendar className="h-4 w-4 mr-2" />
              Agendar Reunião G&G
            </Button>
          </CardContent>
        </Card>

        <Card className="bg-card">
          <CardHeader>
            <CardTitle className="text-card-foreground">Suporte</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="text-center space-y-2">
              <p className="text-sm text-muted-foreground">
                Para suporte técnico ou dúvidas sobre o sistema, entre em contato com a equipe de TI.
              </p>
              <Button className="bg-secondary text-secondary-foreground">
                <Phone className="h-4 w-4 mr-2" />
                Contatar Suporte
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Footer Information */}
      <Card className="bg-card border-accent/20">
        <CardContent className="pt-6">
          <div className="text-center space-y-2">
            <p className="text-sm text-muted-foreground">
              Este boletim é atualizado mensalmente pela equipe de Gente & Gestão da UMI SAN.
            </p>
            <p className="text-xs text-muted-foreground">
              Última atualização: 20/08/2025 | Próxima atualização prevista: 20/09/2025
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
