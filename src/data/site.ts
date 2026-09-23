export const site = {
  name: "Koplan Arquitetura",
  shortName: "Koplan",
  role: "Estúdio de Arquitetura e Interiores",
  fullRole: "Projetos Arquitetônicos e Design de Interiores",
  city: "Uberlândia",
  state: "MG",
  cities: "Uberlândia | MG e Goiânia | GO",
  phoneDisplay: "(34) 99717-1314",
  phoneLink: "5534997171314",
  telLink: "tel:+5534997171314",
  email: "contato@koplan.com.br",
  instagram: "https://www.instagram.com/koplanarq/",
  whatsappMessage: "Olá, gostaria de solicitar um orçamento para o meu projeto com a Koplan!",
  seo: {
    title: "Koplan - Koplan Arquitetura",
    description:
      "Projetos arquitetônicos e design de interiores com planejamento estratégico e transparência total. Viabilidade financeira mapeada antes da obra, cronograma com marcos definidos. Do conceito à entrega.",
    url: "https://koplan.com.br/",
    ogImage: "/assets/images/BG-desktop-KOPLAN.webp",
  },
  assets: {
    logo: "/assets/images/logo-KOPLAN.webp",
    logo1: "/assets/images/logo-KOPLAN-1.webp",
    logoWhite: "/assets/images/logo-KOPLAN-branco.webp",
    logoSymbol: "/assets/images/logok-KOPLAN-1.webp",
    favicon: "/assets/images/cropped-logok-KOPLAN-32x32.webp",
    faviconApple: "/assets/images/cropped-logok-KOPLAN-180x180.webp",
    favicon192: "/assets/images/cropped-logok-KOPLAN-192x192.webp",
    heroDesktop: "/assets/images/BG-desktop-KOPLAN.webp",
    heroMobile: "/assets/images/BG-Koplan-Mobile.webp",
    heroBadgeThumbnail: "/assets/images/miniatura-BG-desktop1-KOPLAN.webp",
    formBg: "/assets/images/k-bg-formulario-KOPLAN.webp",
    watermarkBg: "/assets/images/K-fundo-KOPLAN.webp",
    kitchenPraQuem: "/assets/images/cozinha-arquitetura-KOPLAN.webp",
    leisurePraQuem: "/assets/images/area-lazer-arquitetura-KOPLAN.webp",
    livingRoomBenefits: "/assets/images/sala-arquitetura-KOPLAN.webp",
    gardenBenefits: "/assets/images/jardim-KOPLAN.webp",
    kitchenLarge: "/assets/images/cozinha-grande-arquiteta-KOPLAN.webp",
    kitchenMinimalist: "/assets/images/cozinha-minimalista-arquitetura-KOPLAN.webp",
    foundersAmanda: "/assets/images/sobre-nos1-KOPLAN.webp",
    foundersLeonardo: "/assets/images/sobre-leo1-KOPLAN.webp",
    aboutIllustration: "/assets/images/sobre-KOPLAN.webp",
    whatsappAvatar: "/assets/images/7-300x300.jpg",
  },
} as const;

export const whatsappUrl = `https://wa.me/+${site.phoneLink}?text=${encodeURIComponent(site.whatsappMessage)}`;

export interface PraQuemItem {
  readonly bold?: string;
  readonly gray?: string;
  readonly grayEnd?: string;
}

export const praQuemE = {
  sectionTitle: "PRA QUEM É",
  heading: "ARQUITETURA PARA QUEM VALORIZA PROCESSO, TEMPO E RESULTADO.",
  subheading: "A KOPLAN ATENDE QUEM:",
  items: [
    { bold: "Valoriza a execução", gray: "tanto quanto o conceito." },
    { bold: "Precisa de direção", gray: "no processo criativo." },
    { bold: "Quer decisões", gray: "baseadas em dados, não achismo." },
    { gray: "Não aceita", bold: '"Vamos resolver na obra".' },
    { gray: "Já", bold: "passou por experiências frustrantes", grayEnd: "com obras desorganizadas." },
    { bold: "Tem pouco tempo para acompanhar obra,", gray: "mas quer controle total." },
  ] as readonly PraQuemItem[],
  quote: {
    gray1: "Processos inteligentes que formam uma arquitetura bem construída.",
    gray2: "O cliente como coautor do projeto.",
    bold: "Planejar é traduzir a vida em forma e matéria.",
  },
  badge: {
    bold1: "Qualidade",
    gray: "não se improvisa, se constrói com",
    bold2: "método.",
  },
} as const;

export const beneficios = {
  sectionTitle: "BENEFÍCIOS",
  heading: "VOCÊ NÃO PRECISA ENTENDER DE OBRA. PRECISA DE QUEM ENTENDA POR VOCÊ.",
  quote: {
    pre: "NA ",
    italic: "KOPLAN",
    post: ", POR TRÁS DE CADA PROJETO EXISTE UM MÉTODO PENSADO PARA UNIR PRECISÃO TÉCNICA E SENSIBILIDADE ESTÉTICA EM CADA DECISÃO.",
  },
  cards: [
    {
      title: "Certeza do resultado antes de investir:",
      items: [
        "Visualização imersiva com 3D hiper-realista, você visualiza tudo antes de gastar 1 real em obra.",
        "Visualização imersiva, revisões ilimitadas + reembolso integral se não aprovar.",
      ],
      iconFill: "#CFD0D1",
      theme: "dark",
      bgImage: "/assets/images/frente-arquitetura-KOPLAN.webp",
      bgImageAlt: "Fachada com certeza do resultado antes de investir Koplan",
    },
    {
      title: "Orçamento sob controle do início ao fim:",
      items: [
        "EVF detalhado dos custos por insumo antes da execução.",
        "Previsibilidade de investimento.",
      ],
      iconFill: "#687479",
      theme: "light",
      image: "/assets/images/sala-arquitetura-KOPLAN.webp",
      imageAlt: "Sala de estar com orçamento sob controle Koplan",
    },
    {
      title: "Comunicação clara em todas as etapas:",
      items: [
        "Cronograma com marcos e responsáveis, atualizado em atas.",
        "Atendimento direto pelos sócios.",
      ],
      iconFill: "#CFD0D1",
      theme: "dark",
      bgImage: "/assets/images/mesanino-arquitetura-KOPLAN.webp",
      bgImageAlt: "Mezanino com comunicação clara em todas as etapas Koplan",
    },
    {
      title: "Projeto que sai do papel com qualidade:",
      items: [
        "Compatibilidade total entre arquitetura e engenharias.",
        'Caderno executivo completo. Nada fica "para resolver na obra".',
      ],
      iconFill: "#687479",
      theme: "light",
      image: "/assets/images/jardim-KOPLAN.webp",
      imageAlt: "Jardim com projeto de qualidade Koplan",
    },
    {
      title: "Suporte contínuo até a entrega final:",
      items: [
        "Acompanhamento remoto incluso em todos os projetos.",
        "Projeto validado com check-ins semanais. Você nunca vai se sentir sozinho ou perdido durante o processo.",
        "Presencial opcional em Uberlândia e Goiânia para quem prefere.",
      ],
      iconFill: "#CFD0D1",
      theme: "dark",
      bgImage: "/assets/images/sala-jantar-arquitetura-KOPLAN.webp",
      bgImageAlt: "Sala de jantar com suporte contínuo até a entrega final Koplan",
    },
  ],
} as const;

export const servicos = {
  sectionTitle: "SERVIÇOS",
  heading: "O QUE ENTREGAMOS:",
  hoverPrompt: "Passe o mouse para ver mais.",
  cards: [
    {
      title: "Projetos arquitetônicos:",
      tags: ["APROVAÇÃO EM ÓRGÃOS COMPETENTES", "COMPATIBILIZAÇÃO TÉCNICA", "NORMAS"],
      subtitle: "Residencial, comercial e cultural. Planejar é a base de tudo o que criamos.",
      description:
        "Concepção completa de edificações, do estudo inicial ao executivo. A identidade de cada pessoa ou marca traduzida em forma e matéria, com soluções técnicas integradas. Trabalhamos com a metodologia BIM e parceria com engenheiros especializados.",
      bgImage: "/assets/images/servicos-KOPLAN.webp",
      bgImageAlt: "Restaurante projetado pela Koplan",
    },
    {
      title: "Design de Interiores",
      tags: ["LAYOUT", "ILUMINAÇÃO", "ACABAMENTOS", "MOBILIÁRIO E MARCENARIA", "MATERIAIS"],
      subtitle: "Lugares que nascem de histórias. Criados para serem vividos.",
      description:
        "Criação de ambientes internos funcionais e sofisticados, alinhados à sua identidade. Cada detalhe é pensado para oferecer conforto e estilo atemporal. Flexibilidade: Você pode contratar o projeto completo ou selecionar ambientes específicos para ajustar ao seu orçamento.",
      bgImage: "/assets/images/sala-de-estar-arquitetura-KOPLAN.webp",
      bgImageAlt: "Sala de estar projetada pela Koplan",
    },
    {
      title: "Viabilidade Financeira (E.V.F.):",
      tags: ["PLANILHA DETALHADA POR INSUMO", "DIRECIONAMENTO ESTRATÉGICO", "PARECERES TÉCNICOS"],
      subtitle: "Segurança antes de investir. Todos os custos mapeados.",
      description:
        "Orientação profissional para decisões de projeto, laudos e documentação técnica. Ideal para quem busca segurança antes de investir ou precisa solucionar questões específicas com rigor técnico.",
      bgImage: "/assets/images/sala-cozinha-arquitetura-KOPLAN.webp",
      bgImageAlt: "Cozinha integrada com viabilidade financeira Koplan",
    },
    {
      title: "Acompanhamento Técnico e Conexão com Parceiros:",
      tags: [
        "INTEGRAÇÃO PROJETO-EXECUÇÃO",
        "ORÇAMENTO E ALINHAMENTO",
        "VISITA TÉCNICA",
        "INDICAÇÃO DE PARCEIROS DE CONFIANÇA",
      ],
      subtitle: "Realizamos visitas para tirar dúvidas, verificar o andamento da obra e orientar ajustes.",
      description:
        "Conectamos você a parceiros de confiança para facilitar orçamentos e decisões. Nosso suporte garante que cada etapa cumpra o padrão de qualidade do projeto.",
      bgImage: "/assets/images/jardim2-KOPLAN.webp",
      bgImageAlt: "Casa com acompanhamento técnico Koplan",
    },
  ],
} as const;

export const comoFunciona = {
  sectionTitle: "COMO FUNCIONA",
  heading: "ETAPAS DETALHADAS DO PROCESSO KOPLAN:",
  sideImage: "/assets/images/cozinha-arquiteta-KOPLAN.webp",
  sideImageAlt: "Cozinha ampla em projeto Koplan",
  sideCard: {
    images: [
      {
        src: "/assets/images/APARTAMENTO_View14-copiar.webp",
        alt: "Apartamento com processo criativo Koplan",
      },
      {
        src: "/assets/images/sala-estar-KOPLAN.webp",
        alt: "Sala de estar com gestão inteligente Koplan",
      },
    ],
    text: "Processo criativo com gestão inteligente, com cada etapa planejada para evitar surpresa.",
  },
  ctaBullets: [
    "RETORNO EM ATÉ 1 DIA ÚTIL.",
    "ATENDIMENTO NACIONAL COM PROCESSO DIGITAL.",
    "PRESENCIAL EM UBERLÂNDIA E GOIÂNIA.",
  ],
  steps: [
    {
      number: "01",
      title: "Diagnóstico técnico:",
      tagline: "Medições, documentação e condicionantes legais.",
      description:
        "Coletamos todas as informações do terreno ou imóvel: medições detalhadas, estudo de insolação, registro fotográfico e análise de restrições legais. Base sólida para evitar imprevistos.",
      extra:
        "Para projetos remotos: Fornecemos plantas-guia e tutoriais didáticos. Se preferir, indicamos profissionais locais para realizar a medição.",
    },
    {
      number: "02",
      title: "Briefing Validado:",
      tagline: "Você escolhe como prefere conversar. Aprovação garantida antes de qualquer traço.",
      description:
        "Aqui, você manda. Escolha o formato ideal para você: questionário online completo, reunião presencial em um café ou na sua casa/empresa, ou reunião online. O importante é entender profundamente suas necessidades, rotina e expectativas para definirmos juntos o programa de necessidades.",
      extra:
        "Entregas: Ata de validação de briefing + cronograma detalhado + manual do cliente (para acompanhar cada etapa do processo).",
    },
    {
      number: "03",
      title: "Estudos iniciais + Anteprojeto 3D:",
      tagline: "Você visualiza tudo antes de executar. Revisões ilimitadas.",
      description:
        "Criamos estudos de layout com opções de distribuição e volumetria. Depois, evoluímos para anteprojeto 3D com renders realistas e moodboard de materiais. Você vê exatamente como ficará. E pode pedir revisões até aprovar completamente.",
      extra:
        "Garantia: Se ao final desta etapa você não estiver satisfeito, devolvemos 100% do valor investido.",
    },
    {
      number: "04",
      title: "Viabilidade Financeira (EVF):",
      tagline: "Todos os custos mapeados. Ajustamos o projeto se necessário.",
      description:
        "Levantamento completo de custos da obra antes do projeto executivo: estrutura, acabamentos, marcenaria, mobiliário, instalações. Após aprovar o 3D Visual, você já recebe uma estimativa real de investimento. Se quiser ajustar para um projeto mais básico ou mais elaborado, ainda há tempo de revisar sem retrabalho. Planilha detalhada por insumo para você saber exatamente onde cada real será investido. Se o projeto ultrapassar o orçamento planejado, ajustamos antes da execução. Sem surpresas. Decisões baseadas em dados.",
      extra: "",
    },
    {
      number: "05",
      title: "Executivo + Obra:",
      tagline: "Cadernos técnicos completos. Acompanhamento até a entrega.",
      description:
        "Projeto executivo completo: plantas, complementares, iluminação, marcenaria, especificações técnicas. Acompanhamento presencial (Uberlândia/Goiânia) ou suporte remoto contínuo (todo Brasil). Garantimos um projeto completo, detalhado e didático para que a execução seja fiel ao planejado.",
      extra:
        "Não nos responsabilizamos por erros de execução dos profissionais contratados, mas estamos disponíveis para esclarecer dúvidas e orientar durante toda a obra.",
    },
  ],
} as const;

export interface ServicoComplementarItem {
  readonly icon: string;
  readonly text: string;
  readonly note?: string;
}

export const servicosComplementares = {
  sectionTitle: "SERVIÇOS COMPLEMENTARES",
  heading: "VOCÊ PODE CONTRATAR SEPARADAMENTE :",
  items: [
    {
      icon: "/assets/images/icone-visitas-tecnicas-obra-KOPLAN.webp",
      text: "Visitas técnicas em obra.",
    },
    {
      icon: "/assets/images/icone-consultorias-pontuais-KOPLAN.webp",
      text: "Consultorias pontuais.",
    },
    {
      icon: "/assets/images/icone-acompanhamento-obra-KOPLAN.webp",
      text: "Acompanhamento de obra.",
      note: "*Apenas em Uberlândia-MG.",
    },
    {
      icon: "/assets/images/icone-imagens-realistas-KOPLAN.webp",
      text: "Imagens realísticas 360º.",
    },
    {
      icon: "/assets/images/icone-videos-KOPLAN.webp",
      text: "Vídeos renderizados.",
    },
  ] as readonly ServicoComplementarItem[],
  partnerBox: {
    title: "EM PARCERIA COM ENGENHEIROS ESPECIALIZADOS:",
    text: "Projetos estruturais (concreto armado e estrutura metálica), elétrico, hidrossanitário, climatização, combate a incêndio, planilha financeira final pós-executivo.",
  },
} as const;

export interface PortfolioProject {
  readonly id: string;
  readonly name: string;
  readonly locationDetails: string;
  readonly description: string;
  readonly imagesDesktop: readonly string[];
  readonly imagesMobile: readonly string[];
}

export const portfolioProjects: readonly PortfolioProject[] = [
  {
    id: "ap-tamandua",
    name: "AP Tamanduá",
    locationDetails: "AP Tamanduá fica em Uberlândia e tem 346m².",
    description: "Interiores completos, marcenaria sob medida, iluminação técnica.",
    imagesDesktop: [
      "/assets/images/portfolio-KOPLAN-sem-sombra.webp",
      "/assets/images/portfolio11-KOPLAN-sem-sombra.webp",
      "/assets/images/portfolio111-KOPLAN-sem-sombra.webp",
      "/assets/images/portfolio1111-KOPLAN-sem-sombra.webp",
      "/assets/images/portfolio11111-KOPLAN-sem-sombra.webp",
      "/assets/images/portfolio1-KOPLAN.webp",
    ],
    imagesMobile: [
      "/assets/images/portfolio11-mobile-KOPLAN-sem-sombra.webp",
      "/assets/images/portfolio1111-mobile-KOPLAN-sem-sombra.webp",
      "/assets/images/portfolio111-mobile-KOPLAN-sem-sombra.webp",
      "/assets/images/portfolio1-mobile-KOPLAN.webp",
      "/assets/images/portfolio-mobile-KOPLAN.webp",
      "/assets/images/portfolio11111-mobile-KOPLAN-sem-sombra.webp",
    ],
  },
  {
    id: "ap-brise",
    name: "Apartamento Brise",
    locationDetails: "Apartamento Brise de 55,7m².",
    description: "Compatibilização total para reforma sem interrupção do negócio.",
    imagesDesktop: [
      "/assets/images/portfolio-brisa-KOPLAN-sem-sombra.webp",
      "/assets/images/portfolio-brisa1-KOPLAN-sem-sombra.webp",
      "/assets/images/portfolio-brisa2-KOPLAN-sem-sombra.webp",
      "/assets/images/portfolio-brisa3-KOPLAN-sem-sombra.webp",
      "/assets/images/portfolio-brisa4-KOPLAN-sem-sombra.webp",
      "/assets/images/portfolio-brisa5-KOPLAN-sem-sombra.webp",
    ],
    imagesMobile: [
      "/assets/images/portfolio-brisa-mobile-KOPLAN-sem-sombra.webp",
      "/assets/images/portfolio-brisa5-mobile-KOPLAN-sem-sombra.webp",
      "/assets/images/portfolio-brisa4-mobile-KOPLAN-sem-sombra.webp",
      "/assets/images/portfolio-brisa3-mobile-KOPLAN-sem-sombra.webp",
      "/assets/images/portfolio-brisa2-mobile-KOPLAN-sem-sombra.webp",
      "/assets/images/portfolio-brisa1-mobile-KOPLAN-sem-sombra.webp",
    ],
  },
  {
    id: "casa-marau",
    name: "Casa Maraú",
    locationDetails: "Casa Maraú em Uberlândia de 534m².",
    description: "Layout integrado à rotina, iluminação e marcenaria personalizadas.",
    imagesDesktop: [
      "/assets/images/portfolio-casa-marau.webp",
      "/assets/images/portfolio-casa-marau1.webp",
      "/assets/images/portfolio-casa-marau2.webp",
      "/assets/images/portfolio-casa-marau4.webp",
      "/assets/images/portfolio-casa-marau5.webp",
      "/assets/images/portfolio-casa-marau6.webp",
    ],
    imagesMobile: [
      "/assets/images/portfolio-casa-marau2-mobile.webp",
      "/assets/images/portfolio-casa-marau1-mobile.webp",
      "/assets/images/portfolio-casa-marau4-mobile.webp",
      "/assets/images/portfolio-casa-marau5-mobile.webp",
      "/assets/images/portfolio-casa-marau-mobile.webp",
      "/assets/images/portfolio-casa-marau6-mobile.webp",
    ],
  },
  {
    id: "fiore-di-latte",
    name: "Fiore di Latte",
    locationDetails: "Gelateria/drinkeria Fiore di Latte fica em SP e tem 350m².",
    description: "Espaço comercial com atmosfera e funcionalidade pensadas para atrair, receber e reter clientes",
    imagesDesktop: [
      "/assets/images/Fioredilatte.webp",
      "/assets/images/Fioredilatte1.webp",
      "/assets/images/Fioredilatte2.webp",
      "/assets/images/Fioredilatte3.webp",
      "/assets/images/Fioredilatte4.webp",
      "/assets/images/Fioredilatte5.webp",
    ],
    imagesMobile: [
      "/assets/images/Fioredilatte1-mobile.webp",
      "/assets/images/Fioredilatte2-mobile.webp",
      "/assets/images/Fioredilatte3-mobile.webp",
      "/assets/images/Fioredilatte4-mobile.webp",
      "/assets/images/Fioredilatte5-mobile.webp",
      "/assets/images/Fioredilatte-mobile.webp",
    ],
  },
  {
    id: "living-ypes",
    name: "Living Ypês",
    locationDetails: "Living Ypês em São Paulo de 191m².",
    description: "Layout integrado à rotina, iluminação e marcenaria personalizadas.",
    imagesDesktop: [
      "/assets/images/living-ipes.webp",
      "/assets/images/living-ipes1.webp",
      "/assets/images/living-ipes2.webp",
      "/assets/images/living-ipes3.webp",
      "/assets/images/living-ipes4.webp",
      "/assets/images/living-ipes5.webp",
    ],
    imagesMobile: [
      "/assets/images/living-ipes1-mobile.webp",
      "/assets/images/living-ipes2-mobile.webp",
      "/assets/images/living-ipes3-mobile.webp",
      "/assets/images/living-ipes4-mobile.webp",
      "/assets/images/living-ipes5-mobile.webp",
      "/assets/images/living-ipes-mobile.webp",
    ],
  },
] as const;

export const testimonials = [
  {
    name: "Marcelo",
    role: "Proprietário de cafeteria, Porto Alegre/RS",
    quote:
      '"Desde o primeiro contato que tivemos com vocês, já senti que ia dar tudo certo. Vocês são profissionais super atenciosos, generosos, que realmente ouviram nossa história, ouviram o que a gente precisava, nossas ideias, entenderam a essência da marca e traduziram isso em um resultado perfeito. Todo mundo da empresa adorou, ficou maluco. Sem dúvidas queremos contratar vocês de novo quando a gente puder."',
  },
  {
    name: "João Pedro",
    role: "Cliente residencial, Catalão/GO",
    quote:
      '"Pessoal, não sei o que seria da gente sem vocês. Cometi o erro de contratar uma empreitada muito ruim, mas vocês nos ajudaram tanto, que não tem dinheiro no mundo que pague o valor de vocês. Eu e a Raissa só temos a agradecer."',
  },
  {
    name: "Rafael",
    role: "Cliente residencial, Uberlândia/MG",
    quote:
      '"Eu já sabia que a Amanda é uma pessoa doida e perfeccionista, então contratei. É um apartamento temporário, então as mudanças foram simples, mas, mesmo no simples, vocês me surpreenderam; ficou aconchegante e muito bonito. Até fiquei mais tempo do que tinha calculado que ficaria, porque fiquei muito confortável de morar. Vou comprar um apartamento novo mais pra frente e quero contratar vocês de novo."',
  },
] as const;

export const garantia = {
  sectionTitle: "GARANTIA",
  heading: "GARANTIA DE REEMBOLSO INTEGRAL",
  paragraphs: [
    [
      { text: "Se ao final do anteprojeto 3D você não estiver satisfeito com o resultado, devolvemos 100% do valor investido até essa etapa.", bold: true },
      { text: " Sem burocracia. Sem perguntas complexas.", bold: false },
    ],
    [
      { text: "Nossa única condição:", bold: true },
      { text: " que você participe do processo de forma colaborativa.", bold: false },
    ],
    [
      { text: "Por que oferecemos isso? Porque ", bold: false },
      { text: "confiamos no nosso processo.", bold: true },
      { text: " E porque você merece investir com segurança.", bold: false },
    ],
  ],
  sobre: {
    p1: "A Koplan é um estúdio de arquitetura e interiores, fundado por arquitetos que acreditam que planejamento estratégico não é opcional.",
    p2: "Atendimento: Nacional via processo digital integrado.",
    p3: "Cada projeto recebe atenção direta dos sócios fundadores, sem intermediários. Trabalhamos com a metodologia BIM (compatibilização total entre disciplinas) e parceria com engenheiros especializados.",
    p4: "O resultado não é apenas um projeto bonito, mas uma obra bem-sucedida do início ao fim.",
    p5: "Valorizamos muito cada um de nossos clientes. Por isso a conversa aqui é clara, os números são transparentes e as promessas são cumpridas.",
    p6: "A Koplan é a junção rara entre rigor técnico, sensibilidade estética e método de gestão. Nos moldamos ao cliente, sem abrir mão da técnica.",
  },
  founders: [
    {
      name: "Amanda",
      title: "Arquiteta",
      photo: "/assets/images/sobre-nos1-KOPLAN.webp",
    },
    {
      name: "Leonardo",
      title: "Arquiteto",
      photo: "/assets/images/sobre-leo1-KOPLAN.webp",
    },
  ],
} as const;

export const faqs: readonly [string, string][] = [
  [
    "Atendem fora de MG/GO?",
    "Sim. Atuamos em todo o território nacional por meio de um processo digital integrado. Fornecemos plantas guia e orientações técnicas didáticas para medições remotas, com reuniões e entregas 100% online. Atendimentos presenciais estão disponíveis em Uberlândia e Goiânia.",
  ],
  [
    "Como funciona o processo remoto?",
    "Todo o processo (briefing, estudos, aprovações, acompanhamento) acontece online via reuniões, plataformas digitais e entregas documentadas. O suporte remoto está incluso em todos os projetos, garantindo a mesma qualidade de atendimento e entrega, onde quer que você esteja.",
  ],
  [
    "Qual o prazo médio?",
    "Após o briefing validado, o prazo é definido no cronograma. Em média, projetos residenciais levam de 4 a 6 meses, variando conforme escopo e nível de detalhamento.",
  ],
  [
    "Quanto custa um projeto?",
    "As propostas são personalizadas após diagnóstico inicial. Trabalhamos por pacote completo ou por ambientes (em projetos de interiores), permitindo ajuste ao seu orçamento.",
  ],
  [
    "E se eu não gostar do projeto em 3D?",
    "Você pede quantas revisões precisar durante a fase de anteprojeto. Se ainda assim não aprovar, devolvemos o investimento integral desta etapa.",
  ],
  [
    "Vocês executam a obra?",
    "Não somos construtora, não executamos ou coordenamos a obra. Em Uberlândia-MG temos um parceiro que faz isso por nós em nossas obras.",
  ],
  [
    "O que é o EVF e por que preciso dele?",
    "Estudo de Viabilidade Financeira: planilha detalhada com todos os custos da obra (materiais, mão de obra, mobiliário e acabamentos) antes de começar. Evita surpresas e permite ajustes no projeto para caber no orçamento.",
  ],
  [
    "Posso contratar apenas alguns ambientes?",
    "Sim. Em projetos de interiores, você pode escolher quais ambientes deseja desenvolver, ajustando o escopo ao seu orçamento e prioridades.",
  ],
] as const;
