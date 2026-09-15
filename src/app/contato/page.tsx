import { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Contato",
  description: "Fale conosco. Estamos aqui para ajudar com qualquer dúvida sobre as ofertas.",
};

export default function ContatoPage() {
  return (
    <>
      <Header />
      <main className="flex-1 bg-white dark:bg-zinc-950 py-16">
        <div className="container mx-auto px-4 max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight mb-4">Entre em Contato</h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8">
            Tem alguma dúvida sobre alguma oferta? Preencha o formulário abaixo e nossa equipe entrará em contato.
          </p>
          
          <div className="bg-zinc-50 dark:bg-zinc-900/50 p-8 rounded-3xl border border-zinc-100 dark:border-zinc-800">
            <form className="space-y-6" action="#">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Nome Completo</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-4 py-3 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 focus:outline-none focus:ring-2 focus:ring-brand-500" 
                  placeholder="Seu nome"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">E-mail</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-3 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 focus:outline-none focus:ring-2 focus:ring-brand-500" 
                  placeholder="seu@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Mensagem</label>
                <textarea 
                  id="message" 
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 focus:outline-none focus:ring-2 focus:ring-brand-500 resize-none" 
                  placeholder="Como podemos ajudar?"
                />
              </div>
              <Button type="button" fullWidth size="lg">
                Enviar Mensagem
              </Button>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
