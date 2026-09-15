import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-white dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-800 py-12 mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="relative w-8 h-8 rounded-lg overflow-hidden shadow-md bg-white flex items-center justify-center">
                <Image src="/logo.jpg" alt="SuperOferta Logo" fill className="object-cover" />
              </div>
              <span className="font-bold text-xl tracking-tight">
                SuperOferta<span className="text-brand-600">.online</span>
              </span>
            </Link>
            <p className="text-zinc-500 dark:text-zinc-400 max-w-sm">
              Ofertas e soluções selecionadas para facilitar sua vida e ajudar você a encontrar exatamente o que procura.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Navegação</h4>
            <ul className="space-y-3 text-sm text-zinc-500 dark:text-zinc-400">
              <li>
                <Link href="/ofertas" className="hover:text-brand-600 transition-colors">Ofertas</Link>
              </li>
              <li>
                <Link href="/sobre" className="hover:text-brand-600 transition-colors">Sobre nós</Link>
              </li>
              <li>
                <Link href="/contato" className="hover:text-brand-600 transition-colors">Contato</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-3 text-sm text-zinc-500 dark:text-zinc-400">
              <li>
                <Link href="/politica-de-privacidade" className="hover:text-brand-600 transition-colors">Política de Privacidade</Link>
              </li>
              <li>
                <Link href="/termos-de-uso" className="hover:text-brand-600 transition-colors">Termos de Uso</Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-zinc-200 dark:border-zinc-800 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-zinc-500 dark:text-zinc-400">
          <p>© {new Date().getFullYear()} SuperOferta. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
