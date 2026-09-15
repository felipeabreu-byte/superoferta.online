import { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Termos de Uso",
};

export default function TermosUsoPage() {
  return (
    <>
      <Header />
      <main className="flex-1 bg-white dark:bg-zinc-950 py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight mb-8">Termos de Uso</h1>
          <div className="prose prose-zinc dark:prose-invert max-w-none">
            <p><strong>Última atualização: [DATA_PLACEHOLDER]</strong></p>
            <h2>1. Termos</h2>
            <p>
              Ao acessar ao site SuperOferta, concorda em cumprir estes termos de serviço, todas as leis e regulamentos aplicáveis e concorda que é responsável pelo cumprimento de todas as leis locais aplicáveis.
            </p>
            <h2>2. Uso de Licença</h2>
            <p>
              É concedida permissão para baixar temporariamente uma cópia dos materiais (informações ou software) no site SuperOferta , apenas para visualização transitória pessoal e não comercial.
            </p>
            <h2>3. Isenção de responsabilidade</h2>
            <p>
              Os materiais no site da SuperOferta são fornecidos 'como estão'. SuperOferta não oferece garantias, expressas ou implícitas, e, por este meio, isenta e nega todas as outras garantias.
            </p>
            <h2>4. Limitações</h2>
            <p>
              Em nenhum caso a SuperOferta ou seus fornecedores serão responsáveis por quaisquer danos (incluindo, sem limitação, danos por perda de dados ou lucro ou devido a interrupção dos negócios) decorrentes do uso ou da incapacidade de usar os materiais em SuperOferta.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
