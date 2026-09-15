import { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Política de Privacidade",
};

export default function PoliticaPrivacidadePage() {
  return (
    <>
      <Header />
      <main className="flex-1 bg-white dark:bg-zinc-950 py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight mb-8">Política de Privacidade</h1>
          <div className="prose prose-zinc dark:prose-invert max-w-none">
            <p><strong>Última atualização: [DATA_PLACEHOLDER]</strong></p>
            <p>
              A sua privacidade é importante para nós. É política da SuperOferta respeitar a sua privacidade em relação a qualquer informação sua que possamos coletar no site SuperOferta.online e outros sites que possuímos e operamos.
            </p>
            <h2>Informações que Coletamos</h2>
            <p>
              Solicitamos informações pessoais apenas quando realmente precisamos delas para lhe fornecer um serviço. Fazemo-lo por meios justos e legais, com o seu conhecimento e consentimento. Também informamos por que estamos coletando e como será usado.
            </p>
            <h2>Uso da Informação</h2>
            <p>
              Apenas retemos as informações coletadas pelo tempo necessário para fornecer o serviço solicitado. Quando armazenamos dados, protegemos dentro de meios comercialmente aceitáveis para evitar perdas e roubos, bem como acesso, divulgação, cópia, uso ou modificação não autorizados.
            </p>
            <h2>Compartilhamento de Dados</h2>
            <p>
              Não compartilhamos informações de identificação pessoal publicamente ou com terceiros, exceto quando exigido por lei.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
