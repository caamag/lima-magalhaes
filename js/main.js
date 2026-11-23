/* ==========================================================
   Lima & Magalhães — Cursos e modal
   Para editar informações de um curso, altere o objeto
   correspondente no array COURSES abaixo.
   ========================================================== */

const WHATSAPP = "5511954060328";

const DEFAULT_PRICE = "R$ 1.500,00";
const DEFAULT_PAYMENT = [
  "À vista no PIX",
  "Parcelamento disponível no cartão de crédito: fale com um consultor para conhecer as condições",
];

const img = (id) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=900&q=75`;

const COURSES = [
  {
    id: "fotografia",
    title: "Curso de fotografia<br>do básico ao avançado",
    image: img("photo-1554048612-b6a482bc67e5"),
    hours: "60 horas",
    format: "Presencial — aulas teóricas e práticas",
    description:
      "Da primeira configuração da câmera até a construção de um portfólio profissional. Um curso completo para quem quer dominar a técnica fotográfica e desenvolver um olhar autoral, com saídas fotográficas e prática em estúdio.",
    content: [
      "Fundamentos da câmera: tipos de equipamento e lentes",
      "Triângulo de exposição: abertura, velocidade e ISO",
      "Composição, enquadramento e linguagem visual",
      "Luz natural: leitura, direção e qualidade da luz",
      "Iluminação de estúdio: flash, contínua e modificadores",
      "Retrato, produto e fotografia de rua",
      "Fluxo de trabalho e tratamento no Lightroom e Photoshop",
      "Construção de portfólio e posicionamento no mercado",
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
    price: "R$ 1.099,00",
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
      'Notebook com acesso à internet <span class="modal__note">Não precisa ser um notebook potente: um modelo simples, de uso do dia a dia, já é suficiente.</span>',
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
    title: "Direção de arte<br>para negócios online",
    image: img("photo-1542744173-8e7e53415bb0"),
    hours: "40 horas",
    format: "Presencial — com projeto final aplicado",
    description:
      "Aprenda a criar identidades visuais e conteúdos consistentes para marcas que vivem no digital. Do conceito à execução, você vai pensar imagem, cor, tipografia e narrativa para redes sociais, e-commerce e campanhas.",
    content: [
      "O papel do diretor de arte na comunicação digital",
      "Conceito criativo, moodboard e referências",
      "Cor, tipografia e hierarquia visual",
      "Identidade visual para redes sociais",
      "Fotografia de produto e still para e-commerce",
      "Planejamento de conteúdo e linha editorial visual",
      "Briefing, apresentação e aprovação com clientes",
      "Projeto final: campanha completa para um negócio real",
    ],
  },
  {
    id: "direcao-criativa",
    title: "Direção criativa<br>para ensaios",
    image: img("photo-1471341971476-ae15ff5dd4ea"),
    hours: "32 horas",
    format: "Presencial — com ensaio prático em estúdio",
    description:
      "Como conceber, planejar e conduzir ensaios fotográficos com identidade. Você vai aprender a transformar uma ideia em imagem, coordenando equipe, cenário, figurino, luz e modelo.",
    content: [
      "Do conceito à imagem: construção de narrativa visual",
      "Pesquisa de referências e moodboard",
      "Pré-produção: equipe, locação, figurino e cronograma",
      "Direção de modelo e expressão corporal",
      "Cenografia e styling",
      "Desenho de luz para ensaios",
      "Condução do set e pós-produção",
      "Ensaio prático guiado em estúdio",
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

/* ---------- Render dos cards ---------- */
const grid = document.getElementById("courses-grid");

grid.innerHTML = COURSES.map(
  (c) => `
  <article class="course-card">
    <div class="course-card__img">
      <img src="${c.image}" alt="" loading="lazy">
    </div>
    <div class="course-card__body">
      <h3 class="course-card__title">${c.title}</h3>
      <button type="button" class="btn" data-course="${c.id}">Saiba mais</button>
    </div>
  </article>`,
).join("");

/* ---------- Modal ---------- */
const modal = document.getElementById("course-modal");
const $ = (id) => document.getElementById(id);
let lastFocus = null;

function plain(html) {
  return html
    .replace(/<br\s*\/?>/gi, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function openCourse(id) {
  const c = COURSES.find((x) => x.id === id);
  if (!c) return;

  const name = plain(c.title);
  $("modal-title").textContent = name;
  $("modal-img").src = c.image;
  $("modal-img").alt = name;
  $("modal-hours").textContent = c.hours;
  $("modal-format").textContent = c.format;
  $("modal-notice").hidden = !c.notice;
  $("modal-notice").textContent = c.notice || "";
  $("modal-desc").innerHTML = [].concat(c.description)
    .map((p) => `<p>${p}</p>`)
    .join("");
  [
    ["audience", c.audience],
    ["outcomes", c.outcomes],
    ["requirements", c.requirements],
  ].forEach(([key, items]) => {
    $(`modal-${key}-wrap`).hidden = !items;
    $(`modal-${key}`).innerHTML = (items || []).map((i) => `<li>${i}</li>`).join("");
  });
  $("modal-content").innerHTML = c.content.map((i) => `<li>${i}</li>`).join("");
  $("modal-price").textContent = c.price || DEFAULT_PRICE;
  $("modal-payment").innerHTML = (c.payment || DEFAULT_PAYMENT)
    .map((p) => `<li>${p}</li>`)
    .join("");
  $("modal-cta").href = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(
    `Olá! Tenho interesse nas próximas turmas do curso "${name}".`,
  )}`;

  lastFocus = document.activeElement;
  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
  modal.querySelector(".modal__dialog").scrollTop = 0;
  modal.querySelector(".modal__close").focus();
}

function closeModal() {
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
  if (lastFocus) lastFocus.focus();
}

document.addEventListener("click", (e) => {
  const courseBtn = e.target.closest("[data-course]");
  if (courseBtn) return openCourse(courseBtn.dataset.course);

  const link = e.target.closest("[data-open-course]");
  if (link) {
    e.preventDefault();
    closeMenu();
    return openCourse(link.dataset.openCourse);
  }

  if (e.target.closest("[data-close-modal]")) closeModal();
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && modal.classList.contains("is-open")) closeModal();
});

/* ---------- Menu mobile ---------- */
const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

function closeMenu() {
  nav.classList.remove("is-open");
  toggle.setAttribute("aria-expanded", "false");
}

toggle.addEventListener("click", () => {
  const open = nav.classList.toggle("is-open");
  toggle.setAttribute("aria-expanded", String(open));
});
nav
  .querySelectorAll("a")
  .forEach((a) => a.addEventListener("click", closeMenu));

/* ---------- Fallback de imagens ---------- */
document.querySelectorAll("img").forEach((im) => {
  im.addEventListener("error", () => {
    im.style.visibility = "hidden";
  });
  // a imagem do modal troca de src: volta a aparecer quando uma nova carrega
  im.addEventListener("load", () => {
    im.style.visibility = "";
  });
});

$("year").textContent = new Date().getFullYear();
