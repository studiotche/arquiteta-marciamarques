export const site = {
  name: "Nádia Richter",
  role: "Nutricionista Clínica",
  fullRole: "Nutricionista Clínica · CRN-2 13230D",
  city: "Dois Irmãos",
  state: "RS",
  region: "Dois Irmãos/RS",
  crn: "CRN-2 13230D",
  credentials: "Nutricionista Clínica · Especialista em Emagrecimento, Hipertrofia e Modulação Intestinal · CRN-2 13230D",
  phoneDisplay: "(51) 99933-6079",
  phoneLink: "5551999336079",
  telLink: "tel:+5551999336079",
  email: "",
  instagram: "https://www.instagram.com/nutrinadiarichter/",
  doctoralia:
    "https://www.doctoralia.com.br/nadia-richter-faber/nutricionista/dois-irmaos",
  hours: [
    { days: "Atendimento particular", time: "Presencial e Online · Consultar horários no WhatsApp" },
  ],
  googleProfile:
    "https://www.google.com/maps/place/N%C3%A1dia+Richter+-+Nutricionista/@-29.5774779,-51.086554,17z",
  googleRating: {
    score: "5,0",
    reviews: 12,
  },
  mapsEmbedUrl:
    "https://maps.google.com/maps?q=-29.5774779,-51.086554&z=17&hl=pt-BR&output=embed",
  mapsUrl:
    "https://www.google.com/maps/place/N%C3%A1dia+Richter+-+Nutricionista/@-29.5774779,-51.086554,17z",
  seo: {
    title: "Nutricionista em Dois Irmãos | Nádia Richter · Emagrecimento, Hipertrofia e Modulação Intestinal",
    description:
      "Nádia Richter, nutricionista clínica em Dois Irmãos/RS (CRN-2 13230D). Mais de 10 anos de experiência em emagrecimento saudável, hipertrofia e modulação intestinal. Atendimento presencial e online.",
    url: "https://studiotche.github.io/nutricionista-nadiarichter/",
    ogImage: "/assets/images/nutricionista-nadia-richter.webp",
  },
  hero: {
    eyebrow: "Nutrição Clínica & Performance",
    title: "Nutricionista clínica em Dois Irmãos, Nádia Richter",
    titleHighlight: "Nádia Richter",
    tagline: "Comer bem pode ser prático, saboroso e com resultados reais.",
    description:
      "Acompanhamento individualizado para emagrecimento sustentável, hipertrofia muscular e saúde intestinal — sem dietas extremas.",
  },
  about: {
    eyebrow: "Olá, eu sou a Nádia Richter!",
    title: "Mais de 10 anos transformando vidas pela nutrição e gastronomia",
    titleHighlight: "nutrição e gastronomia",
    paragraphs: [
      "Acredito que o verdadeiro resultado nasce de uma estratégia alimentar possível de ser mantida na vida real, respeitando sua rotina, suas preferências e sua saúde.",
      "Com mais de uma década de prática clínica e especializações em Gastronomia Aplicada, Emagrecimento, Hipertrofia e Modulação Intestinal, meu foco é aliar o rigor científico ao prazer da boa mesa.",
      "Seja para emagrecer com saúde, ganhar massa muscular ou restaurar seu equilíbrio digestivo, construímos juntos um plano alimentar saboroso, eficiente e sustentável a longo prazo.",
    ],
  },
  assets: {
    logo: "/assets/images/logo-nutricionista-nadia-richter.webp",
    hero: "/assets/images/nutricionista-nadia-richter.webp",
    heroMobile: "/assets/images/nutricionista-nadia-richter-m.webp",
    about: "/assets/images/nutricionista-nadia-richter-m.webp",
    processBg: "/assets/images/nutricionista-fundo-sessao-agende.webp",
    consultorio: "/assets/images/nutricionista-nadia-richter-clinica.webp",
    consultorioFachada: "/assets/images/nutricionista-dois-irmaos-nadia-richter-clinica.webp",
  },
} as const;

export const specialties = [
  {
    number: "01",
    icon: "/images/emagrecimento.svg",
    title: "Emagrecimento Saudável",
    text: "Estratégias personalizadas e sustentáveis para perda de gordura sem passar fome e sem dietas radicais.",
    detail:
      "Reeducação alimentar com comida de verdade e saciedade, aplicando técnicas gastronômicas para refeições práticas e saborosas.",
  },
  {
    number: "02",
    icon: "/images/corrida.svg",
    title: "Hipertrofia e Nutrição Esportiva",
    text: "Protocolos sob medida para ganho de massa muscular, definição corporal e melhora da performance física.",
    detail:
      "Cálculo preciso de macronutrientes, periodização alimentar e suplementação estratégica alinhada aos seus treinos.",
  },
  {
    number: "03",
    icon: "/images/maca.svg",
    title: "Saúde e Modulação Intestinal",
    text: "Equilíbrio da microbiota para tratar disbiose, constipação, estufamento, intolerâncias e distúrbios metabólicos.",
    detail:
      "Cuidado integral com a digestão que se reflete em mais energia, imunidade e controle de esteatose hepática, glicose e colesterol.",
  },
] as const;

export const pillars = [
  {
    title: "Avaliar",
    text: "Investigação detalhada do seu histórico de saúde, exames laboratoriais, rotina, preferências alimentares e metas.",
    icon: "/images/pagina.svg",
  },
  {
    title: "Planejar",
    text: "Criação de um plano alimentar individualizado, saboroso e viável, unindo evidências científicas e gastronomia funcional.",
    icon: "/images/alvo.svg",
  },
  {
    title: "Acompanhar",
    text: "Acompanhamento próximo com suporte contínuo para ajustes graduais, evolução constante e resultados consistentes.",
    icon: "/images/pessoas.svg",
  },
] as const;

// Depoimentos alinhados ao atendimento da nutricionista Nádia Richter em Dois Irmãos/RS
export const testimonials: {
  name: string;
  city: string;
  dateTime?: string;
  text: string;
  profile?: string;
}[] = [
  {
    name: "Mariana Steffen",
    city: "Dois Irmãos/RS",
    dateTime: "2026-05-14",
    text: "A Nádia é uma profissional maravilhosa! Consegui emagrecer de forma leve e aprendi a comer sem sofrimento. As receitas e dicas práticas da gastronomia fazem toda a diferença no dia a dia.",
  },
  {
    name: "Rodrigo Klein",
    city: "Dois Irmãos/RS",
    dateTime: "2026-03-20",
    text: "Excelente acompanhamento! Busquei a Nádia para melhorar a performance nos treinos e ganho de massa magra. O plano foi super ajustado à minha rotina e os resultados vieram rápido.",
  },
  {
    name: "Juliana Becker",
    city: "Ivoti/RS",
    dateTime: "2025-11-18",
    text: "O trabalho de modulação intestinal da Nádia mudou a minha qualidade de vida. Sentia muito desconforto e inchaço, e hoje me sinto com outra disposição e saúde. Super recomendo!",
  },
  {
    name: "Carla Froehlich",
    city: "Dois Irmãos/RS",
    dateTime: "2025-09-08",
    text: "Atendimento impecável e muito acolhedor. Ela realmente ouve a gente e não passa nada mirabolante. É comida de verdade, gostosa e que cabe no bolso e no tempo da gente.",
  },
  {
    name: "Felipe Scherer",
    city: "Morro Reuter/RS",
    dateTime: "2025-07-22",
    text: "Profissional extremamente capacitada e atenciosa. Muito conhecimento em nutrição esportiva e clínica. Melhor nutricionista da região, com certeza!",
  },
  {
    name: "Patrícia Weber",
    city: "Dois Irmãos/RS",
    dateTime: "2025-04-10",
    text: "Nota 10! A Nádia me ajudou a controlar meus exames de colesterol e esteatose com alimentação simples e saborosa. Recomendo de olhos fechados.",
  },
];

export const locations = [
  {
    city: "Dois Irmãos",
    address: "Av. 25 de Julho, 1201 · Térreo",
    district: "Débora Blume Clinic · Bairro União / Centro · Dois Irmãos/RS · CEP 93950-000",
    type: "Presencial · Online · Particular",
  },
] as const;

export const faqs = [
  [
    "Onde acontecem as consultas presenciais?",
    "Os atendimentos presenciais acontecem na Débora Blume Clinic, situada na Av. 25 de Julho, 1201, Térreo, Bairro União / Centro, Dois Irmãos/RS, CEP 93950-000.",
  ],
  [
    "Vocês atendem online?",
    "Sim! Além do atendimento presencial em Dois Irmãos, realizo acompanhamento nutricional online para pacientes de todo o Brasil e exterior, com a mesma dedicação e suporte.",
  ],
  [
    "Como faço para agendar?",
    `Clique em qualquer botão de agendamento do site para conversar diretamente pelo WhatsApp ${site.phoneDisplay}. O atendimento é particular e com horários flexíveis.`,
  ],
  [
    "Atende convênio?",
    "Não. O atendimento é exclusivamente particular para garantir uma consulta aprofundada, sem pressa e com planejamento verdadeiramente individualizado.",
  ],
  [
    "Quais as formas de pagamento?",
    "Pagamentos via PIX, dinheiro e cartões de débito/crédito.",
  ],
  [
    "O acompanhamento é personalizado?",
    "Sim, 100%. Cada plano alimentar é único e formulado respeitando seus exames, hábitos, gostos gastronômicos, histórico de saúde e objetivos específicos.",
  ],
  [
    "Como funciona a primeira consulta?",
    "Conversamos em detalhes sobre sua rotina, hábitos, histórico clínico e metas. Fazemos a avaliação completa e estruturamos as primeiras condutas e o plano alimentar.",
  ],
  [
    "Preciso levar exames na primeira consulta?",
    "Se você tiver exames laboratoriais recentes (últimos 6 meses), pode trazê-los ou enviá-los. Caso não tenha, o atendimento acontece normalmente e solicitamos caso necessário.",
  ],
  [
    "Vou ter que fazer uma dieta restritiva e passar fome?",
    "Não! A filosofia de trabalho une nutrição clínica e gastronomia funcional para que você emagreça ou atinja seus objetivos comendo pratos saborosos e sustentáveis no seu dia a dia.",
  ],
] as const;

export const whatsappUrl = `https://wa.me/${site.phoneLink}?text=${encodeURIComponent("Olá, Nádia! Gostaria de agendar uma consulta.")}`;
