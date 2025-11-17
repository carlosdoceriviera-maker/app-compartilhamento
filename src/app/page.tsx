"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Rocket, Gift, Users, Share2, Trophy, Download, Check } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center space-y-6 max-w-4xl mx-auto">
          <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white border-0 px-4 py-2 text-sm">
            <Sparkles className="w-4 h-4 mr-2 inline" />
            Revolucione sua Rotina
          </Badge>
          
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent leading-tight">
            Descubra o Sucesso com Apenas um Clique!
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto">
            Seja um dos primeiros a experimentar a plataforma que vai revolucionar o seu dia a dia! 
            Com design intuitivo e funcionalidades inovadoras.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
            <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-6 text-lg shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105">
              <Download className="w-5 h-5 mr-2" />
              Baixe Agora Grátis
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-purple-600 text-purple-600 hover:bg-purple-50 px-8 py-6 text-lg">
              <Share2 className="w-5 h-5 mr-2" />
              Compartilhar com Amigos
            </Button>
          </div>
          
          <div className="flex items-center justify-center gap-8 pt-8 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5 text-green-500" />
              <span>Primeiro mês grátis</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5 text-green-500" />
              <span>Sem cartão de crédito</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5 text-green-500" />
              <span>Cancele quando quiser</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Recursos Incríveis
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Tudo que você precisa para transformar sua vida em um só lugar
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card className="border-2 hover:border-purple-500 transition-all duration-300 hover:shadow-2xl hover:scale-105 bg-white/80 backdrop-blur">
            <CardHeader>
              <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                <Rocket className="w-7 h-7 text-white" />
              </div>
              <CardTitle className="text-2xl">Conteúdo Exclusivo</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 text-lg">
                Acesse dicas, tutoriais e recursos que você não encontrará em nenhum outro lugar. 
                Conteúdo premium criado por especialistas.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 hover:border-pink-500 transition-all duration-300 hover:shadow-2xl hover:scale-105 bg-white/80 backdrop-blur">
            <CardHeader>
              <div className="w-14 h-14 bg-gradient-to-br from-pink-500 to-orange-500 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                <Share2 className="w-7 h-7 text-white" />
              </div>
              <CardTitle className="text-2xl">Compartilhamento Instantâneo</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 text-lg">
                Conecte-se com amigos e familiares, compartilhe suas conquistas! 
                Quanto mais você compartilha, mais benefícios você ganha!
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 hover:border-orange-500 transition-all duration-300 hover:shadow-2xl hover:scale-105 bg-white/80 backdrop-blur">
            <CardHeader>
              <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                <Trophy className="w-7 h-7 text-white" />
              </div>
              <CardTitle className="text-2xl">Desafios e Recompensas</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 text-lg">
                Participe de desafios emocionantes e ganhe prêmios incríveis. 
                Quanto mais você participa, mais você ganha!
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="container mx-auto px-4 py-16 md:py-24 bg-gradient-to-br from-purple-100 via-pink-100 to-orange-100 -mx-4">
        <div className="text-center mb-16">
          <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white border-0 px-4 py-2 text-sm mb-6">
            <Gift className="w-4 h-4 mr-2 inline" />
            Oferta Especial
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Plano de Assinatura Especial
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Aproveite recursos premium grátis durante o primeiro mês!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="border-2 hover:shadow-xl transition-all duration-300 bg-white">
            <CardHeader>
              <CardTitle className="text-3xl">Plano Gratuito</CardTitle>
              <CardDescription className="text-lg">Perfeito para começar</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-4xl font-bold text-gray-900">
                R$ 0<span className="text-lg text-gray-500">/mês</span>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-green-500" />
                  <span>Acesso a conteúdo básico</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-green-500" />
                  <span>Compartilhamento limitado</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-green-500" />
                  <span>Desafios básicos</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full border-2 border-purple-600 text-purple-600 hover:bg-purple-50">
                Começar Grátis
              </Button>
            </CardFooter>
          </Card>

          <Card className="border-4 border-purple-500 hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-purple-50 to-pink-50 relative overflow-hidden">
            <div className="absolute top-4 right-4">
              <Badge className="bg-gradient-to-r from-purple-600 to-pink-600 text-white border-0">
                Mais Popular
              </Badge>
            </div>
            <CardHeader>
              <CardTitle className="text-3xl">Plano Premium</CardTitle>
              <CardDescription className="text-lg">Acesso total + bônus</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                R$ 29,90<span className="text-lg text-gray-500">/mês</span>
              </div>
              <Badge className="bg-green-500 text-white border-0">
                1º mês GRÁTIS
              </Badge>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-purple-600" />
                  <span className="font-semibold">Tudo do plano gratuito</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-purple-600" />
                  <span>Conteúdo exclusivo premium</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-purple-600" />
                  <span>Compartilhamento ilimitado</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-purple-600" />
                  <span>Todos os desafios e recompensas</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-purple-600" />
                  <span>Descontos por indicação</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-lg hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105">
                Começar Teste Grátis
              </Button>
            </CardFooter>
          </Card>
        </div>
      </section>

      {/* Community Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <Card className="border-4 border-purple-500 bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 text-white shadow-2xl">
          <CardContent className="p-12 text-center space-y-6">
            <Users className="w-16 h-16 mx-auto" />
            <h2 className="text-4xl md:text-5xl font-bold">
              Juntos Somos Mais Fortes!
            </h2>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-95">
              Convide seus amigos e faça parte de uma comunidade vibrante. 
              Quanto mais amigos você trouxer, mais recompensas você e eles recebem!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-6 text-lg shadow-xl hover:scale-105 transition-all duration-300">
                <Share2 className="w-5 h-5 mr-2" />
                Convidar Amigos Agora
              </Button>
            </div>
            <p className="text-sm opacity-90">
              🎁 Ganhe 1 mês grátis para cada 3 amigos que se cadastrarem!
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Final CTA */}
      <section className="container mx-auto px-4 py-16 md:py-24 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            O Futuro Está a Apenas um Click!
          </h2>
          <p className="text-xl text-gray-600">
            Não fique de fora da melhor experiência. Baixe agora e comece sua jornada!
          </p>
          <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-12 py-8 text-xl shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105">
            <Download className="w-6 h-6 mr-2" />
            Baixar Agora Grátis
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-white/50 backdrop-blur">
        <div className="container mx-auto px-4 py-8 text-center text-gray-600">
          <p>© 2024 - Transforme sua vida com apenas um clique! 🚀</p>
        </div>
      </footer>
    </div>
  );
}
