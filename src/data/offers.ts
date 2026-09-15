export interface Offer {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  category: string;
  imageUrl: string;
  originalPrice: number;
  currentPrice: number;
  discountPercentage: number;
  benefits: string[];
  ctaText: string;
  checkoutUrl: string;
  
  // Extended high-converting fields
  preHeadline?: string;
  problemSection?: {
    title: string;
    bullets: string[];
    conclusion: string;
  };
  features?: {
    iconName?: string;
    title: string;
    description: string;
  }[];
  guarantee?: {
    title: string;
    description: string;
  };
  
  testimonials?: {
    name: string;
    role: string;
    content: string;
    avatarUrl?: string;
  }[];
  faq?: {
    question: string;
    answer: string;
  }[];
  metaPixelId?: string;
  theme?: {
    primaryColor: string;
    secondaryColor: string;
  };
}

export const offers: Offer[] = [
  {
    slug: "sistema-clinicas",
    title: "Gestão Completa para Clínicas",
    subtitle: "Aumente seus agendamentos e organize seus pacientes em um só lugar",
    description: "Um software focado em simplificar a gestão de consultórios, com agendamento online, prontuário eletrônico e controle financeiro integrado.",
    category: "Software",
    imageUrl: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1200",
    originalPrice: 197.00,
    currentPrice: 97.00,
    discountPercentage: 50,
    benefits: [
      "Agenda online 24h",
      "Prontuário eletrônico seguro",
      "Controle financeiro automatizado",
      "Lembretes por WhatsApp"
    ],
    ctaText: "Começar Agora",
    checkoutUrl: "https://checkout.exemplo.com/clinicas",
    testimonials: [
      {
        name: "Dra. Ana Silva",
        role: "Dermatologista",
        content: "Desde que comecei a usar, reduzi as faltas em 30% graças aos lembretes automáticos."
      }
    ],
    faq: [
      {
        question: "Preciso instalar algo no meu computador?",
        answer: "Não, o sistema é 100% online e você pode acessar de qualquer lugar."
      }
    ],
    metaPixelId: "1234567890",
  },
  {
    slug: "curso-design-ux",
    title: "Mestre em Design UX/UI",
    subtitle: "Aprenda a criar interfaces que encantam e convertem",
    description: "Curso intensivo com 40 horas de conteúdo focado na prática do mercado para transformar você em um designer de elite.",
    category: "Educação",
    imageUrl: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=1200",
    originalPrice: 497.00,
    currentPrice: 197.00,
    discountPercentage: 60,
    benefits: [
      "Acesso vitalício",
      "Suporte exclusivo",
      "Certificado reconhecido",
      "Projetos reais para portfólio"
    ],
    ctaText: "Garantir Minha Vaga",
    checkoutUrl: "https://checkout.exemplo.com/curso-ux",
    faq: [
      {
        question: "Por quanto tempo terei acesso?",
        answer: "O acesso ao curso é vitalício."
      }
    ]
  },
  {
    slug: "kit-produtividade",
    title: "Kit Produtividade Extrema",
    subtitle: "Templates e ferramentas para dobrar seus resultados",
    description: "Uma coleção curada de templates para Notion, planilhas e guias de organização pessoal para profissionais de alta performance.",
    category: "Templates",
    imageUrl: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&q=80&w=1200",
    originalPrice: 97.00,
    currentPrice: 47.00,
    discountPercentage: 51,
    benefits: [
      "Dashboard Notion completo",
      "Planilha financeira",
      "Guia de gestão de tempo",
      "Atualizações gratuitas"
    ],
    ctaText: "Comprar Kit Agora",
    checkoutUrl: "https://checkout.exemplo.com/produtividade"
  },
  {
    slug: "receitas-zero",
    title: "Você Não Precisa Comer *Comida Sem Graça* Para Ter Uma *Vida Saudável*.",
    subtitle: "Descubra como voltar a comer pães, bolos, tortas e doces deliciosos sem se preocupar com glúten ou açúcar refinado.",
    description: "Um pacote completo com mais de 350 receitas sem glúten e sem açúcar para transformar a sua alimentação.",
    category: "Saúde e Bem-estar",
    imageUrl: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=1200",
    originalPrice: 97.00,
    currentPrice: 29.90,
    discountPercentage: 69,
    benefits: [], // Empty to use features instead
    ctaText: "QUERO LIBERAR MEU ACESSO POR APENAS R$ 29,90",
    checkoutUrl: "https://checkout.exemplo.com/receitas-zero",
    preHeadline: "PARA QUEM DESEJA SAÚDE SEM ABRIR MÃO DO SABOR",
    problemSection: {
      title: "A dieta restritiva falha porque ignora o prazer.",
      bullets: [
        "Pratos sem sabor e com texturas estranhas.",
        "A sensação de estar 'de castigo' na mesa e sem energia.",
        "Ingredientes caros e difíceis de encontrar."
      ],
      conclusion: "Isso acaba hoje. Nós reunimos mais de 350 receitas culinárias das melhores nutricionistas para provar que uma cozinha limpa pode (e deve) ser incrivelmente saborosa, além de dois e-books bônus."
    },
    features: [
      {
        iconName: "Croissant",
        title: "Pães e Massas Saborosas",
        description: "Aprenda o pão camponês, pão de alho, macarrão festivo e até crepes de palmito totalmente livres de glúten."
      },
      {
        iconName: "Star",
        title: "Pizzas e Salgados",
        description: "O segredo da massa crocante na 'Pizza sappore d'Itália', croquetes de bacalhau e deliciosas tortas-suflê."
      },
      {
        iconName: "Coffee",
        title: "Sobremesas Inesquecíveis",
        description: "Bolo especial de maracujá, sorvete de nozes com cacau e bolo de caneca sem açúcar que derretem na boca."
      }
    ],
    testimonials: [
      {
        name: "Juliana Martins",
        role: "Empreendedora",
        content: "Achei que nunca mais comeria um bolo de verdade depois do diagnóstico. A receita de bolo de maracujá é idêntica à normal! As receitas são práticas, não exigem ingredientes caros e mudaram a minha rotina."
      },
      {
        name: "Carlos Eduardo",
        role: "Representante Comercial",
        content: "Minha família toda começou a comer as pizzas e os crepes sem nem perceber que eram sem glúten! É muito saboroso e perdi 4kg no primeiro mês só cortando o açúcar refinado seguindo o livro."
      },
      {
        name: "Mariana Costa",
        role: "Mãe de Dois",
        content: "A parte mais difícil para mim era o pão do café da manhã. O pão rústico desse material me salvou. Faço toda semana, os meninos adoram e eu como sem peso na consciência e sem inchaço."
      }
    ],
    guarantee: {
      title: "Risco Zero: Garantia Incondicional de 7 Dias.",
      description: "Acesse o material, teste as receitas e prove os sabores. Se em 7 dias não gostar, devolvemos 100% do seu dinheiro."
    }
  },
  {
    slug: "planilha-gestao-financeira",
    title: "Planilha de Gestão Financeira",
    subtitle: "Assuma o controle do seu dinheiro de forma definitiva",
    description: "A planilha mais completa e automatizada do mercado. Registre seus gastos, estabeleça orçamentos e veja gráficos interativos de para onde seu dinheiro está indo.",
    category: "Finanças",
    imageUrl: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=1200",
    originalPrice: 99.00,
    currentPrice: 39.00,
    discountPercentage: 61,
    benefits: [
      "Dashboard automático",
      "Categorização inteligente",
      "Previsão de fluxo de caixa",
      "Funciona no Excel e Google Sheets"
    ],
    ctaText: "Baixar Planilha Agora",
    checkoutUrl: "https://checkout.exemplo.com/planilha-financeira"
  },
  {
    slug: "mentoria-vendas",
    title: "Mentoria de Aceleração de Vendas",
    subtitle: "Escale seu faturamento com estratégias validadas",
    description: "Programa de acompanhamento online por 4 semanas para empreendedores que desejam estruturar um funil de vendas previsível e multiplicar seus lucros.",
    category: "Negócios",
    imageUrl: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200",
    originalPrice: 1997.00,
    currentPrice: 997.00,
    discountPercentage: 50,
    benefits: [
      "4 Encontros ao vivo",
      "Análise de métricas individual",
      "Scripts de vendas prontos",
      "Grupo de networking exclusivo"
    ],
    ctaText: "Aplicar para a Mentoria",
    checkoutUrl: "https://checkout.exemplo.com/mentoria-vendas",
    testimonials: [
      {
        name: "Carlos Eduardo",
        role: "CEO de Agência",
        content: "O faturamento da agência triplicou no segundo mês aplicando as estratégias do funil."
      }
    ]
  },
  {
    slug: "curso-ingles-viagens",
    title: "Inglês Prático para Viagens",
    subtitle: "Viaje o mundo sem medo da barreira do idioma",
    description: "Curso rápido com o vocabulário exato que você precisa para aeroportos, hotéis, restaurantes e emergências. Direto ao ponto, sem gramática chata.",
    category: "Educação",
    imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1200",
    originalPrice: 297.00,
    currentPrice: 97.00,
    discountPercentage: 67,
    benefits: [
      "Aulas em áudio para ouvir offline",
      "Guia de bolso em PDF",
      "Simulações de conversas reais",
      "Acesso instantâneo"
    ],
    ctaText: "Destravar Meu Inglês",
    checkoutUrl: "https://checkout.exemplo.com/ingles-viagens"
  },
  {
    slug: "presets-lightroom",
    title: "Pack de Presets Cinematic",
    subtitle: "Suas fotos com aspecto profissional em 1 clique",
    description: "Coleção de 50 presets exclusivos para Lightroom focados em tonalidades cinematográficas e profissionais. Funciona na versão Mobile e Desktop.",
    category: "Design",
    imageUrl: "https://images.unsplash.com/photo-1621600411688-4be93cd68504?auto=format&fit=crop&q=80&w=1200",
    originalPrice: 147.00,
    currentPrice: 47.00,
    discountPercentage: 68,
    benefits: [
      "50 Filtros premium",
      "Tutorial de instalação passo a passo",
      "Suporte técnico",
      "Compatível com iOS e Android"
    ],
    ctaText: "Garantir Meus Presets",
    checkoutUrl: "https://checkout.exemplo.com/presets"
  },
  {
    slug: "app-meditacao-premium",
    title: "ZenLife Premium (Assinatura Anual)",
    subtitle: "Durma melhor, reduza o estresse e viva o presente",
    description: "Acesso total e irrestrito ao aplicativo com centenas de meditações guiadas, sons relaxantes e jornadas de desenvolvimento pessoal com especialistas.",
    category: "Saúde e Bem-estar",
    imageUrl: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=1200",
    originalPrice: 240.00,
    currentPrice: 119.90,
    discountPercentage: 50,
    benefits: [
      "Meditações para todas as necessidades",
      "Timer e sons da natureza",
      "Monitoramento de evolução diária",
      "Conteúdo offline"
    ],
    ctaText: "Começar Minha Jornada Zen",
    checkoutUrl: "https://checkout.exemplo.com/zenlife"
  },
  {
    slug: "consultoria-seo",
    title: "Auditoria Completa de SEO",
    subtitle: "Descubra por que seu site não está na primeira página do Google",
    description: "Análise manual e aprofundada feita por especialistas que vai revelar as falhas técnicas, oportunidades de conteúdo e links do seu projeto.",
    category: "Serviços",
    imageUrl: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&q=80&w=1200",
    originalPrice: 1500.00,
    currentPrice: 750.00,
    discountPercentage: 50,
    benefits: [
      "Relatório técnico detalhado",
      "Plano de ação passo a passo",
      "Análise da concorrência",
      "Reunião de alinhamento de 1h"
    ],
    ctaText: "Agendar Minha Auditoria",
    checkoutUrl: "https://checkout.exemplo.com/auditoria-seo"
  }
];

export function getOfferBySlug(slug: string): Offer | undefined {
  return offers.find((offer) => offer.slug === slug);
}
