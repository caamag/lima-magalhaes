export type Lesson = {
  title: string;
  theme?: string;
  topics?: string[];
  practice?: string[];
  practiceDuration?: string;
  delivery?: string;
  badge?: string;
};

export type ExtraSection = {
  title: string;
  intro?: string;
  stats?: { value: string; label: string }[];
  ordered?: boolean;
  items?: string[];
  outro?: string;
};

export type Course = {
  id: string;
  title: string;
  subtitle?: string;
  image: string;
  hours: string;
  duration?: string;
  format?: string;
  methodology?: string;
  notice?: string;
  highlight?: { title: string; text?: string };
  price?: number;
  payment?: string[];
  description: string | string[];
  audience?: string[];
  outcomes?: string[];
  requirements?: string[];
  contentTitle?: string;
  content: (string | Lesson)[];
  sections?: ExtraSection[];
  page?: CoursePageInfo;
};

export type CoursePageInfo = {
  heroTitle: string[];
  heroImage?: string;
  heroOverlay?: boolean;
  heroPosition?: string;
  heroColor?: string;
  headerAccent?: string;
  introTitle: string[];
  intro: string;
};

export const DEFAULT_PRICE = 1499;

export const INSTALLMENTS = 12;
const INSTALLMENT_SURCHARGE = 0.2211;

export const brl = (value: number) =>
  value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

export const installmentValue = (price: number) =>
  Math.round(((price * (1 + INSTALLMENT_SURCHARGE)) / INSTALLMENTS) * 100) / 100;

export const DEFAULT_PAYMENT = ["À vista no PIX", `Em até ${INSTALLMENTS}x no cartão de crédito`];

const img = (id: string) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=900&q=75`;

export const COURSES: Course[] = [
  {
    id: "fotografia",
    title: "Fundamentos<br>da fotografia",
    image: img("photo-1554048612-b6a482bc67e5"),
    hours: "16 horas (8 aulas de 2 horas)",
    format: "Presencial — com 2 saídas fotográficas e projeto final",
    methodology: "80% prática e 20% teoria",
    description:
      "Da primeira configuração da câmera até o seu primeiro ensaio fotográfico profissional. Em oito encontros com muita prática, você aprende exposição, composição, luz natural e artificial e direção de modelo, com duas saídas fotográficas e um projeto final em estúdio.",
    contentTitle: "Grade curricular",
    content: [
      {
        title: "Fundamentos da fotografia",
        theme: "Conhecendo a câmera e os princípios da exposição",
        topics: [
          "História e linguagem da fotografia",
          "Tipos de câmeras e lentes",
          "Funcionamento básico da câmera fotográfica",
          "Triângulo da exposição: ISO, abertura do diafragma e velocidade do obturador",
          "Foco manual e automático",
          "Modos de operação da câmera",
        ],
        practiceDuration: "1h36",
        practice: [
          "Reconhecimento e configuração dos equipamentos",
          "Exercícios de abertura e profundidade de campo",
          "Exercícios de velocidade e congelamento de movimento",
          "Experimentação de ISO em diferentes condições de luz",
          "Desafio: produzir três fotografias utilizando configurações diferentes",
        ],
      },
      {
        title: "Composição e linguagem fotográfica",
        theme: "Aprendendo a construir imagens",
        topics: [
          "Regra dos terços",
          "Linhas e perspectivas",
          "Enquadramento e planos fotográficos",
          "Simetria, equilíbrio e profundidade",
          "Ponto de vista e ângulos de câmera",
          "Introdução à narrativa visual",
        ],
        practiceDuration: "1h36",
        practice: [
          "Exercícios de composição dentro do ambiente de aula",
          "Fotografias utilizando diferentes planos e perspectivas",
          "Construção de uma pequena narrativa com três imagens",
          "Análise coletiva dos resultados",
        ],
      },
      {
        title: "Iluminação natural",
        theme: "Compreendendo e utilizando a luz disponível",
        topics: [
          "O comportamento da luz na fotografia",
          "Luz direta e luz difusa",
          "Luz dura e luz suave",
          "Direção da luz: frontal, lateral, contraluz e luz superior",
          "Temperatura de cor e balanço de branco",
          "Utilização de rebatedores e difusores",
        ],
        practiceDuration: "1h36",
        practice: [
          "Retratos utilizando diferentes direções de luz",
          "Experimentação com luz de janela",
          "Criação de sombras e contrastes",
          "Exercícios de retrato com luz natural e rebatedores",
        ],
      },
      {
        title: "Primeira saída fotográfica",
        theme: "Fotografia de rua, observação e narrativa visual",
        badge: "Saída fotográfica 01",
        topics: [
          "Observação do ambiente e identificação de oportunidades fotográficas",
          "Fotografia documental e fotografia de rua",
          "Fotografia de arquitetura, paisagem e pessoas",
          "Leitura da luz em ambientes externos",
          "Composição em ambientes reais",
        ],
        practiceDuration: "1h36",
        practice: [
          "Saída fotográfica orientada",
          "Exercícios de fotografia documental",
          "Registro de personagens, texturas, formas e situações cotidianas",
          "Desafio: contar uma história por meio de cinco fotografias",
        ],
      },
      {
        title: "Iluminação artificial",
        theme: "Dominando diferentes fontes de luz",
        topics: [
          "Diferenças entre luz natural e artificial",
          "Iluminação contínua",
          "Flash dedicado e flash de estúdio",
          "Fontes de luz e acessórios: softbox, octabox, sombrinha e snoot",
          "Luz direta, rebatida e difusa",
          "Esquemas básicos de iluminação",
          "Introdução aos conceitos de High Key e Low Key",
        ],
        practiceDuration: "1h36",
        practice: [
          "Montagem e operação de equipamentos de iluminação",
          "Comparação entre luz dura e luz suave",
          "Experimentação com diferentes modificadores",
          "Construção de retratos utilizando uma e duas fontes de luz",
        ],
      },
      {
        title: "Esquemas de iluminação e retrato",
        theme: "Construindo imagens com intenção estética",
        topics: [
          "Iluminação Rembrandt",
          "Iluminação Butterfly",
          "Iluminação Loop",
          "Iluminação Split",
          "Luz principal, preenchimento e recorte",
          "Controle de sombras e contraste",
          "Relação entre iluminação e expressão",
        ],
        practiceDuration: "1h36",
        practice: [
          "Montagem dos principais esquemas de iluminação",
          "Produção de retratos com diferentes propostas visuais",
          "Experimentação de retratos dramáticos e comerciais",
          "Comparação dos resultados de cada esquema",
        ],
      },
      {
        title: "Segunda saída fotográfica",
        theme: "Fotografia de retrato em ambiente externo",
        badge: "Saída fotográfica 02",
        topics: [
          "Planejamento de uma sessão fotográfica",
          "Escolha de locação e identificação de fundos",
          "Utilização da luz natural em retratos",
          "Direção básica de pessoas fotografadas",
          "Relação entre fotógrafo, ambiente e personagem",
          "Construção de identidade visual no retrato",
        ],
        practiceDuration: "1h36",
        practice: [
          "Produção de ensaios fotográficos em duplas",
          "Retratos com luz natural e luz refletida",
          "Experimentação de enquadramentos e poses",
          "Direção de pessoas em situações espontâneas",
          "Desafio: produzir uma sequência de retratos com unidade estética",
        ],
      },
      {
        title: "Direção de modelo e fotografia em estúdio",
        theme: "Da técnica à construção de uma imagem profissional",
        badge: "Projeto fotográfico final",
        topics: [
          "Preparação e organização de um set fotográfico",
          "Posicionamento e comunicação com o modelo",
          "Direção corporal, expressões e poses",
          "Direção de olhar e gestual",
          "Relação entre iluminação, cenário e modelo",
          "Construção de retratos com diferentes propostas estéticas",
          "Fluxo de trabalho durante uma sessão fotográfica",
        ],
        practiceDuration: "1h36",
        practice: [
          "Montagem de um set profissional de fotografia",
          "Definição de esquema de iluminação",
          "Direção de modelo em estúdio",
          "Produção de retratos individuais",
          "Simulação de um ensaio fotográfico profissional",
          "Seleção e análise das imagens produzidas",
        ],
      },
    ],
    sections: [
      {
        title: "Distribuição de tempo por encontro",
        intro:
          "A metodologia mantém a mesma proporção em todas as oito aulas: <strong>2 horas por aula</strong>, sendo <strong>80% prática</strong> (96 minutos) e <strong>20% teoria</strong>.",
        stats: [
          { value: "24 min", label: "Fundamentação e demonstração" },
          { value: "72 min", label: "Exercícios e experimentação" },
          { value: "24 min", label: "Revisão e análise dos resultados" },
        ],
      },
      {
        title: "Resultado esperado ao final do curso",
        intro: "Ao concluir os oito encontros, o aluno deverá ser capaz de:",
        ordered: true,
        items: [
          "Compreender os fundamentos técnicos e operar uma câmera fotográfica",
          "Controlar exposição, foco e profundidade de campo",
          "Aplicar princípios de composição e linguagem visual",
          "Identificar e utilizar diferentes tipos e direções de iluminação",
          "Produzir fotografias em ambientes internos e externos",
          "Montar esquemas básicos de iluminação artificial",
          "Desenvolver retratos com diferentes propostas estéticas",
          "Dirigir modelos e executar uma pequena sessão fotográfica em estúdio",
        ],
      },
      {
        title: "Projeto de encerramento",
        intro:
          "<strong>Meu primeiro ensaio fotográfico profissional.</strong> Cada aluno deverá desenvolver uma pequena produção fotográfica individual, utilizando os conhecimentos adquiridos durante o curso. A entrega será composta por:",
        items: [
          "1 fotografia de retrato com luz natural",
          "1 fotografia com iluminação artificial",
          "3 fotografias de um ensaio dirigido em estúdio",
        ],
      },
    ],
  },
  {
    id: "sites",
    title: "Desenvolvimento<br>de sites com IA",
    image: img("photo-1460925895917-afdab827c52f"),
    hours: "24 horas",
    format: "Presencial",
    notice:
      "Próxima turma em breve! As datas ainda serão definidas: confirme com um consultor.",
    price: 1099,
    page: {
      heroTitle: ["Sites", "com IA"],
      heroImage: "/img/banner-sites.webp",
      heroColor: "#ff1f9a",
      introTitle: ["Da ideia", "ao site no ar"],
      intro:
        "Desenvolver sites hoje é unir <strong>base técnica</strong> e <strong>Inteligência Artificial</strong>. Neste curso, você aprende HTML, CSS e JavaScript do zero e usa a IA como parceira para <strong>planejar, escrever, revisar e publicar</strong> seus projetos em muito menos tempo. Uma formação prática para criativos, empreendedores e iniciantes que querem <strong>colocar seu próprio site no ar</strong> e sair do curso com um portfólio publicado.",
    },
    description: [
      "Crie sites profissionais do zero com HTML, CSS e JavaScript e aprenda a usar a Inteligência Artificial como sua parceira de desenvolvimento. Você entende como a web funciona por dentro e usa a IA para planejar, escrever, revisar e publicar seus projetos em muito menos tempo.",
      "O curso une duas coisas que o mercado pede hoje: base técnica sólida para entender e corrigir o que está sendo construído, e domínio das ferramentas de IA que já fazem parte do dia a dia de quem cria para a web. Sem a base, a IA vira uma caixa-preta; sem a IA, você fica para trás.",
    ],
    audience: [
      "Criativos, designers e fotógrafos que querem montar o próprio portfólio",
      "Empreendedores que querem tirar o site do papel sem depender de terceiros",
      "Iniciantes que querem começar uma carreira em desenvolvimento web",
      "Profissionais que já usam IA no trabalho e querem aplicá-la na criação de sites",
    ],
    outcomes: [
      "Construir sites responsivos, acessíveis e rápidos com HTML, CSS e JavaScript",
      "Usar IA para gerar layouts, textos, imagens e código, sabendo revisar e corrigir o resultado",
      "Escrever bons prompts para tarefas de desenvolvimento e design",
      "Publicar seu site com domínio próprio, otimizado para o Google e para buscas feitas por IA",
      "Apresentar um portfólio publicado, pronto para mostrar a clientes ou recrutadores",
    ],
    requirements: [
      'Notebook com acesso à internet <span class="note">Não precisa ser um notebook potente: um modelo simples, de uso do dia a dia, já é suficiente.</span>',
    ],
    content: [
      "Como a web funciona: domínio, hospedagem e navegadores",
      "HTML semântico e estrutura de páginas",
      "CSS: layout, Flexbox, Grid e responsividade",
      "Tipografia, cores e boas práticas de design web",
      "JavaScript essencial e interatividade",
      "Publicação do site e domínio próprio",
      "Desenvolvimento de sites com IA: prompts, geração e revisão de código",
      "Projeto final: site portfólio publicado",
    ],
  },
  {
    id: "direcao-arte",
    title: "Direção de arte<br>da ideia à construção visual",
    image: img("photo-1542744173-8e7e53415bb0"),
    hours: "16 horas (8 aulas de 2 horas)",
    format: "Presencial — com projeto final aplicado",
    methodology: "80% prática e 20% fundamentação teórica",
    page: {
      heroTitle: ["Direção", "de arte"],
      heroImage: "/img/banner-direcao-arte.webp",
      heroOverlay: false,
      heroPosition: "22% center",
      heroColor: "#ff1a2e",
      headerAccent: "#ffe600",
      introTitle: ["Um curso", "para criativos"],
      intro:
        "Direção de Arte é <strong>transformar ideias em imagens que comunicam, despertam emoções e constroem conexões</strong>. Neste curso, você vai desenvolver seu olhar criativo, ampliar seu repertório visual e aprender a <strong>construir conceitos e soluções estéticas para diferentes projetos</strong>. Uma formação prática para designers, publicitários, social medias e profissionais criativos que desejam elevar o nível de suas entregas e transformar boas ideias em projetos visuais extraordinários.",
    },
    description: [
      "<strong>Objetivo geral:</strong> desenvolver nos alunos a capacidade de conceber, planejar e executar projetos de direção de arte, utilizando conceitos criativos, composição visual, tipografia, cores, fotografia e diferentes linguagens gráficas para solucionar problemas de comunicação.",
    ],
    content: [
      {
        title: "O universo da direção de arte",
        theme: "Aprendendo a pensar visualmente",
        topics: [
          "O que é Direção de Arte e qual o papel do diretor de arte no mercado criativo",
          "Diferenças entre design gráfico, publicidade e direção de arte",
          "O processo criativo dentro das agências",
          "Repertório visual e referências criativas",
          "Análise de campanhas publicitárias nacionais e internacionais",
          "Introdução ao briefing e à interpretação de problemas de comunicação",
        ],
        practice: [
          "Análise de campanhas premiadas",
          "Exercício de leitura e interpretação de briefing",
          "Criação de um painel de referências visuais (moodboard)",
          "Primeiro desafio criativo: transformar uma ideia em uma proposta visual",
        ],
        delivery: "Painel de referências e conceito visual inicial.",
      },
      {
        title: "Processo criativo e construção de conceitos",
        theme: "Antes da imagem, existe uma ideia.",
        topics: [
          "Técnicas de geração de ideias",
          "Brainstorm e associação de conceitos",
          "Pensamento lateral e desconstrução de ideias",
          "Insight, conceito e execução",
          "Metáforas visuais e storytelling",
          "Como transformar um briefing em uma solução criativa",
        ],
        practice: [
          "Dinâmicas de criação individual e coletiva",
          "Exercícios de associação de ideias",
          "Desenvolvimento de conceitos para produtos e marcas fictícias",
          "Criação de três caminhos criativos para um mesmo briefing",
        ],
        delivery: "Três propostas conceituais para um projeto publicitário.",
      },
      {
        title: "Fundamentos da composição visual",
        theme: "Construindo imagens que comunicam.",
        topics: [
          "Princípios de composição visual",
          "Hierarquia e organização da informação",
          "Equilíbrio, contraste e proporção",
          "Cores e psicologia das cores",
          "Formas, linhas, volumes e texturas",
          "Gestalt e percepção visual",
          "Direcionamento do olhar e construção de narrativas visuais",
        ],
        practice: [
          "Exercícios de composição utilizando elementos gráficos",
          "Criação de peças utilizando contraste e hierarquia",
          "Experimentação de diferentes paletas cromáticas",
          "Desenvolvimento de uma composição visual para uma campanha",
        ],
        delivery: "Composição gráfica baseada em um conceito criativo.",
      },
      {
        title: "Tipografia e linguagem gráfica",
        theme: "Quando as letras também são imagens.",
        topics: [
          "História e evolução da tipografia",
          "Anatomia e classificação tipográfica",
          "Famílias tipográficas e suas aplicações",
          "Combinação de fontes",
          "Tipografia como elemento de expressão visual",
          "Relação entre texto, imagem e mensagem",
          "Identidade visual e consistência gráfica",
        ],
        practice: [
          "Experimentação com diferentes famílias tipográficas",
          "Construção de composições tipográficas",
          "Exercícios de identidade visual",
          "Criação de cartazes utilizando tipografia como elemento central",
        ],
        delivery: "Cartaz tipográfico com conceito e direção visual definidos.",
      },
      {
        title: "Direção de imagem e experimentação visual",
        theme: "A imagem como ferramenta de comunicação.",
        topics: [
          "Construção de imagens para publicidade",
          "Fotografia e direção de imagem",
          "Ilustração e técnicas mistas",
          "Manipulação e composição de imagens",
          "Recortes, sobreposições e fotomontagem",
          "Referências estéticas e movimentos artísticos",
          "Experimentação de linguagens visuais",
        ],
        practice: [
          "Criação de imagens a partir de referências",
          "Exercícios de fotomontagem e composição",
          "Experimentação com fotografia, ilustração e elementos gráficos",
          "Desenvolvimento de uma imagem publicitária com conceito definido",
        ],
        delivery: "Key visual (imagem principal) de uma campanha.",
      },
      {
        title: "Identidade visual e construção de campanhas",
        theme: "Criando uma linguagem visual para uma marca.",
        topics: [
          "Fundamentos de identidade visual",
          "Personalidade e posicionamento de marca",
          "Sistemas visuais e consistência estética",
          "Logotipo, símbolos e elementos gráficos",
          "Construção de key visual",
          "Relação entre conceito criativo e identidade de campanha",
          "Aplicações visuais em diferentes formatos",
        ],
        practice: [
          "Desenvolvimento de uma identidade visual para uma marca fictícia",
          "Definição de paleta cromática e tipografia",
          "Construção de elementos gráficos",
          "Criação da peça principal da campanha",
        ],
        delivery: "Identidade visual e peça principal da campanha.",
      },
      {
        title: "Direção de arte multiplataforma",
        theme: "Uma ideia, diferentes formatos.",
        topics: [
          "Direção de arte para campanhas publicitárias",
          "Adaptação de conceitos para diferentes mídias",
          "Mídias digitais e redes sociais",
          "Outdoor, mídia impressa e comunicação urbana",
          "Storytelling visual",
          "Campanhas integradas",
          "O conceito de que tudo pode ser mídia",
        ],
        practice: [
          "Desenvolvimento de desdobramentos de uma campanha",
          "Adaptação de uma identidade visual para diferentes formatos",
          "Criação de peças para redes sociais",
          "Desenvolvimento de uma proposta de mídia exterior",
          "Exercício de integração entre diferentes canais de comunicação",
        ],
        delivery: "Campanha com três aplicações em formatos diferentes.",
      },
      {
        title: "Apresentação e defesa de projetos",
        theme: "Da criação à apresentação profissional.",
        topics: [
          "Organização e apresentação de projetos criativos",
          "Construção de apresentações visuais",
          "Como apresentar e defender um conceito",
          "Argumentação criativa e justificativa estética",
          "Organização de portfólio",
          "Critérios de avaliação de uma peça publicitária",
          "Feedback e desenvolvimento profissional",
        ],
        practice: [
          "Finalização do projeto desenvolvido ao longo do curso",
          "Montagem de apresentação visual",
          "Apresentação individual dos projetos",
          "Avaliação coletiva e feedback do professor",
          "Orientações para desenvolvimento de portfólio",
        ],
        delivery:
          "Projeto final de direção de arte apresentado e defendido pelo aluno.",
      },
    ],
    sections: [
      {
        title: "Projeto final — desafio criativo",
        intro:
          "Ao longo das oito aulas, os alunos desenvolverão um projeto de campanha publicitária, passando por todas as etapas de criação:",
        ordered: true,
        items: [
          "Interpretação do briefing",
          "Pesquisa e construção de repertório",
          "Desenvolvimento do conceito criativo",
          "Definição da linguagem visual",
          "Construção da identidade gráfica",
          "Desenvolvimento do key visual",
          "Adaptação da campanha para diferentes mídias",
          "Apresentação e defesa do projeto",
        ],
        outro:
          "<strong>Resultado esperado:</strong> cada aluno deverá concluir o curso com um projeto autoral de direção de arte, organizado em formato de apresentação de portfólio.",
      },
      {
        title: "Competências desenvolvidas",
        items: [
          "Pensamento criativo e capacidade de interpretação",
          "Construção de conceitos e soluções visuais",
          "Repertório estético e referências artísticas",
          "Composição, tipografia e teoria das cores",
          "Desenvolvimento de identidade visual",
          "Direção e manipulação de imagens",
          "Criação de campanhas publicitárias",
          "Adaptação de projetos para diferentes mídias",
          "Apresentação e defesa de ideias criativas",
        ],
      },
    ],
  },
  {
    id: "empreendedorismo",
    title: "Empreendedorismo<br>criativo",
    subtitle: "Criatividade, tecnologia e negócios na era da inteligência artificial",
    image: img("photo-1556761175-5973dc0f32e7"),
    page: {
      heroTitle: ["Empreendedorismo", "criativo"],
      heroImage: "/img/banner-empreendedorismo.webp",
      heroColor: "#ff1f9a",
      introTitle: ["Negócios criativos", "na era da IA"],
      intro:
        "O futuro do empreendedorismo pertence a quem sabe <strong>transformar criatividade em oportunidades de negócio</strong>. Neste curso, você vai usar <strong>fotografia, direção de arte e inteligência artificial</strong> para desenvolver ideias, construir marcas, criar produtos e comunicar valor, e sai da formação com <strong>um projeto de negócio desenvolvido</strong> do início ao fim. Uma formação prática para quem deseja empreender e inovar na nova economia digital.",
    },
    hours: "30 horas",
    duration: "8 aulas de 3h45 cada",
    methodology: "80% prática e 20% fundamentação teórica",
    description: [
      "O futuro do empreendedorismo pertence a quem sabe transformar criatividade em oportunidades de negócio. Neste curso, você aprenderá a utilizar fotografia, direção de arte e inteligência artificial para desenvolver ideias, construir marcas, criar produtos e comunicar valor. Uma formação prática para quem deseja empreender, inovar e desenvolver negócios preparados para a nova economia digital, na era do machine learning.",
      "<strong>Objetivo geral:</strong> capacitar os alunos a utilizar pensamento criativo, ferramentas visuais e tecnologias de inteligência artificial para identificar oportunidades, desenvolver marcas, estruturar modelos de negócio e criar estratégias de comunicação e comercialização.",
    ],
    highlight: {
      title: "Não basta saber usar IA. É preciso saber o que criar com ela.",
      text: "O empreendedor do futuro precisará combinar pensamento estratégico, repertório visual, criatividade e domínio tecnológico para construir negócios relevantes.",
    },
    audience: [
      "Empreendedores e pequenos empresários",
      "Pessoas que desejam iniciar um negócio próprio",
      "Designers e diretores de arte",
      "Publicitários e profissionais de comunicação",
      "Social medias e profissionais de marketing digital",
      "Fotógrafos, videomakers e produtores de conteúdo",
      "Artistas e profissionais da economia criativa",
      "Criadores independentes e prestadores de serviços",
      "Estudantes interessados em inovação, tecnologia e empreendedorismo",
    ],
    requirements: [
      "Não é necessário possuir experiência anterior em empreendedorismo, fotografia, design ou inteligência artificial",
    ],
    contentTitle: "Cronograma e conteúdo programático",
    content: [
      {
        title: "Mentalidade empreendedora",
        theme: "O novo empreendedorismo e a economia criativa.",
        topics: [
          "A transformação do mercado de trabalho e dos modelos de negócio",
          "O empreendedorismo na economia criativa",
          "Introdução à inteligência artificial e ao machine learning",
          "Automação, inovação e novas oportunidades de mercado",
          "Pensamento criativo aplicado à resolução de problemas",
          "Identificação de necessidades e oportunidades de negócio",
          "O comportamento do novo consumidor",
        ],
        practice: [
          "Análise de negócios inovadores e modelos empreendedores",
          "Dinâmica de identificação de problemas cotidianos",
          "Mapeamento de oportunidades de negócio",
          "Exercícios de geração e seleção de ideias",
          "Desenvolvimento de uma primeira proposta empreendedora",
        ],
        delivery: "ideia inicial de negócio e identificação de uma oportunidade de mercado.",
      },
      {
        title: "Inteligência artificial e negócios",
        theme: "A IA como ferramenta de criação, pesquisa e produtividade.",
        topics: [
          "Diferenças entre inteligência artificial, machine learning e IA generativa",
          "Aplicações da IA no empreendedorismo",
          "Engenharia de prompts e comunicação com modelos de IA",
          "Pesquisa de mercado e análise de concorrência",
          "Construção de personas e identificação de públicos",
          "IA aplicada ao planejamento estratégico",
          "Automação de tarefas e produtividade",
          "Ética, direitos autorais e limitações da inteligência artificial",
        ],
        practice: [
          "Utilização do ChatGPT para estruturar ideias de negócio",
          "Pesquisa de mercado com auxílio de ferramentas de IA",
          "Construção de personas e jornadas de consumo",
          "Desenvolvimento de propostas de valor",
          "Experimentação de ferramentas de IA para planejamento e organização empresarial",
        ],
        delivery:
          "planejamento estratégico inicial do negócio, com público, oportunidade e proposta de valor definidos.",
      },
      {
        title: "Branding e direção de arte",
        theme: "Construindo marcas que geram valor.",
        topics: [
          "Fundamentos de branding e posicionamento de marca",
          "Identidade visual e personalidade de marca",
          "Direção de arte aplicada aos negócios",
          "Psicologia das cores e tipografia",
          "Construção de repertório e referências visuais",
          "Moodboard e definição de linguagem estética",
          "Diferenciação competitiva e percepção de valor",
          "Consistência visual e reconhecimento de marca",
        ],
        practice: [
          "Análise de marcas e posicionamentos de mercado",
          "Criação de personalidade para uma marca",
          "Desenvolvimento de moodboard",
          "Definição de paleta cromática e linguagem tipográfica",
          "Experimentação de ferramentas de IA para referências visuais",
          "Construção de uma identidade visual inicial",
        ],
        delivery: "conceito criativo, posicionamento e identidade visual inicial da marca.",
      },
      {
        title: "Fotografia para negócios",
        theme: "A imagem como ferramenta de posicionamento e vendas.",
        topics: [
          "A importância da imagem na decisão de compra",
          "Fotografia comercial e fotografia de produtos",
          "Fundamentos de composição e enquadramento",
          "Iluminação natural e artificial",
          "Fotografia com smartphones",
          "Construção de imagens para catálogos e redes sociais",
          "Percepção de qualidade e valor através da fotografia",
          "Aplicações da fotografia na comunicação comercial",
        ],
        practice: [
          "Produção de fotografias de produtos utilizando smartphones",
          "Exercícios de iluminação com recursos acessíveis",
          "Experimentação de diferentes enquadramentos",
          "Construção de imagens publicitárias",
          "Produção de fotografias para divulgação de uma marca",
          "Seleção e análise das imagens produzidas",
        ],
        delivery: "ensaio fotográfico comercial com imagens para divulgação da marca.",
      },
      {
        title: "Inteligência artificial e criação visual",
        theme: "Do conceito à execução com ferramentas generativas.",
        topics: [
          "Inteligência artificial generativa aplicada à comunicação visual",
          "Geração e manipulação de imagens",
          "Engenharia de prompts para criação visual",
          "Desenvolvimento de conceitos publicitários com IA",
          "Criação de campanhas e peças gráficas",
          "Integração entre fotografia, design e inteligência artificial",
          "Produção de vídeos e conteúdos assistidos por IA",
          "Curadoria, consistência visual e controle de qualidade",
        ],
        practice: [
          "Experimentação com ferramentas de geração de imagens",
          "Criação de imagens publicitárias",
          "Desenvolvimento de conceitos visuais para campanhas",
          "Combinação de fotografias próprias com recursos de IA",
          "Produção de peças gráficas e conteúdos comerciais",
          "Comparação entre diferentes ferramentas e resultados",
        ],
        delivery:
          "conjunto de peças visuais e materiais publicitários produzidos com apoio de inteligência artificial.",
      },
      {
        title: "Marketing digital e estratégias de comunicação",
        theme: "Transformando criatividade em comunicação e vendas.",
        topics: [
          "Fundamentos de marketing digital para pequenos negócios",
          "Estratégias de posicionamento nas redes sociais",
          "Planejamento estratégico de conteúdo",
          "Storytelling aplicado à comunicação comercial",
          "Produção de vídeos e conteúdos curtos",
          "Funil de vendas e jornada do consumidor",
          "Estratégias de aquisição e relacionamento com clientes",
          "Automação de marketing e atendimento",
          "Inteligência artificial aplicada à produção de conteúdo",
        ],
        practice: [
          "Desenvolvimento de calendário editorial",
          "Criação de campanha para redes sociais",
          "Produção de conteúdos utilizando fotografia e IA",
          "Desenvolvimento de roteiros para vídeos comerciais",
          "Construção de uma estratégia de lançamento",
          "Simulação de comunicação e relacionamento com clientes",
        ],
        delivery: "planejamento de comunicação e campanha digital para o negócio.",
      },
      {
        title: "Modelos de negócio e monetização",
        theme: "Da criatividade à sustentabilidade financeira.",
        topics: [
          "Modelos de negócio na economia criativa",
          "Introdução ao Business Model Canvas",
          "Identificação de público e proposta de valor",
          "Produtos, serviços e fontes de receita",
          "Precificação e percepção de valor",
          "Custos, margem de contribuição e rentabilidade",
          "Canais de distribuição e aquisição de clientes",
          "Escalabilidade e oportunidades de crescimento",
          "Inteligência artificial aplicada à gestão empresarial",
        ],
        practice: [
          "Construção de um Business Model Canvas",
          "Definição de produtos e serviços",
          "Simulação de precificação",
          "Identificação de custos e possíveis margens",
          "Construção de canais de aquisição de clientes",
          "Estruturação de um modelo inicial de operação",
          "Simulação de cenários de crescimento",
        ],
        delivery:
          "modelo de negócio estruturado, com proposta de valor, fontes de receita e planejamento inicial de operação.",
      },
      {
        title: "Pitch criativo e apresentação de projetos",
        theme: "Apresentando seu negócio ao mundo.",
        topics: [
          "Como apresentar uma ideia de negócio",
          "Construção de apresentações comerciais",
          "Storytelling para apresentação de projetos",
          "Argumentação e defesa de propostas",
          "Posicionamento e diferenciação competitiva",
          "Comunicação com clientes, parceiros e investidores",
          "Planejamento dos próximos passos do empreendimento",
          "Construção de um plano de ação inicial",
        ],
        practice: [
          "Finalização do projeto empreendedor",
          "Construção de apresentação visual",
          "Desenvolvimento de pitch de negócio",
          "Preparação de materiais de apresentação",
          "Apresentação individual ou em grupo",
          "Feedback e avaliação coletiva",
          "Definição dos próximos passos do empreendimento",
        ],
        delivery:
          "apresentação de um projeto empreendedor com identidade visual, proposta comercial, estratégia de comunicação e modelo de negócio.",
      },
    ],
    sections: [
      {
        title: "Projeto final — meu primeiro negócio criativo",
        intro:
          "Ao longo das oito aulas, cada aluno desenvolverá um projeto empreendedor, que poderá ser uma marca, um produto, um serviço ou um negócio criativo. O projeto deverá contemplar:",
        ordered: true,
        items: [
          "Identificação de uma oportunidade de negócio",
          "Pesquisa de mercado e definição de público",
          "Construção de conceito e posicionamento",
          "Desenvolvimento de identidade visual",
          "Produção de fotografias e materiais de comunicação",
          "Aplicação de ferramentas de inteligência artificial",
          "Estratégia de marketing e comercialização",
          "Modelo de negócio e apresentação comercial",
        ],
        outro:
          "<strong>Resultado esperado:</strong> o aluno concluirá o curso com uma ideia de negócio estruturada, identidade visual inicial, materiais de comunicação, estratégia comercial e apresentação de seu projeto.",
      },
      {
        title: "Metodologia e distribuição por encontro",
        intro:
          "Cada encontro terá duração de <strong>3 horas e 45 minutos</strong>, com foco em experimentação, desenvolvimento de projetos e aplicação prática dos conhecimentos.",
        stats: [
          { value: "45 min", label: "Fundamentação teórica" },
          { value: "135 min", label: "Exercícios e experimentação" },
          { value: "45 min", label: "Apresentação e feedback" },
        ],
      },
      {
        title: "Carga horária total",
        stats: [
          { value: "6 h", label: "Fundamentação teórica" },
          { value: "18 h", label: "Atividades práticas" },
          { value: "6 h", label: "Apresentação e feedback" },
        ],
        outro:
          "<strong>Total: 30 horas</strong>, com 80% de atividades práticas e 20% de fundamentação teórica.",
      },
    ],
  },
  {
    id: "bootcamp-cores",
    title: "Boot camp<br>cores na direção<br>de fotografia",
    image: img("photo-1541701494587-cb58502866ab"),
    hours: "16 horas (imersão de fim de semana)",
    format: "Presencial — imersão intensiva",
    description:
      "Uma imersão intensiva sobre o uso da cor como ferramenta narrativa na fotografia e no audiovisual. Teoria, referências de cinema e publicidade e muita prática com gelatinas, luz colorida e color grading.",
    content: [
      "Psicologia e teoria das cores",
      "Harmonias cromáticas e paletas",
      "Cor na publicidade e no cinema: análise de referências",
      "Temperatura de cor e balanço de branco",
      "Iluminação com gelatinas e LED RGB",
      "Color grading e consistência de paleta",
      "Prática em estúdio com desafio criativo",
    ],
  },
];

export const findCourse = (id?: string | null) => COURSES.find((c) => c.id === id);

export const courseLink = (c: Course) => (c.page ? `/cursos/${c.id}` : `?curso=${c.id}`);

export const plainTitle = (html: string) =>
  html.replace(/<br\s*\/?>/gi, " ").replace(/\s+/g, " ").trim();
