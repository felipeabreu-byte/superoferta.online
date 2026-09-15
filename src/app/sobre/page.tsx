import { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Sobre",
  description: "Conheça a SuperOferta.online e nossa missão de conectar você às melhores oportunidades do mercado.",
};

export default function SobrePage() {
  return (
    <>
      <Header />
      <main className="flex-1 bg-white dark:bg-zinc-950 py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight mb-8">Sobre a SuperOferta</h1>
          <div className="prose prose-zinc dark:prose-invert max-w-none">
            <p className="text-lg">
              A <strong>SuperOferta.online</strong> nasceu com um propósito claro: simplificar a forma como você encontra produtos, serviços e soluções de alta qualidade na internet.
            </p>
            <h2 className="text-2xl font-semibold mt-8 mb-4">Nossa Missão</h2>
            <p>
              Nossa missão é curar e selecionar as melhores oportunidades do mercado, garantindo que você tenha acesso a ofertas reais e confiáveis em um único lugar.
            </p>
            <h2 className="text-2xl font-semibold mt-8 mb-4">Como Funciona</h2>
            <p>
              Não somos uma loja comum. Somos uma plataforma que conecta criadores, empresas e prestadores de serviços diretamente a você, oferecendo páginas otimizadas para que você possa entender todos os benefícios da oferta antes de tomar sua decisão.
            </p>
            <p className="mt-8 p-6 bg-zinc-50 dark:bg-zinc-900/50 rounded-2xl text-center font-medium">
              Transparência, velocidade e excelência são os pilares da nossa atuação.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
