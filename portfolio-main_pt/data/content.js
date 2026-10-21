// data/content.js
// All portfolio content lives here. Text fields are { en, pt } objects and are
// resolved in the views with loc(). Add real metrics only when they are verified.

const site = {
    name: 'Lucas Palma',
    linkedin: 'https://linkedin.com/in/lpalma1999',
    github: 'https://github.com/palmaz9',
};

const highlights = [
    { value: '4–5 h → 10 s', label: { en: 'Email auditing process automated with VBA', pt: 'Processo de e-mails de auditoria automatizado com VBA' } },
    { value: '100%', label: { en: 'Accuracy on the automated audit cycles', pt: 'de precisão nos ciclos de auditoria automatizados' } },
    { value: 'M.S. IT', label: { en: 'Pittsburg State University, 2024', pt: 'Pittsburg State University, 2024' } },
    { value: 'Salesforce Admin', label: { en: 'Flow automations, Data Loader and integrations at Jake’s Fireworks, 2024–25', pt: 'Automações com Flow, Data Loader e integrações na Jake’s Fireworks, 2024–25' } },
];

const experience = [
    {
        org: 'Agrio Frutas',
        role: { en: 'Data Analyst & Systems Developer', pt: 'Analista de Dados e Desenvolvedor de Sistemas' },
        period: { en: '06/2026 – Present', pt: '06/2026 – Atual' },
        bullets: {
            en: [
                'Built, end to end, a web system to manage purchasing, inventory, finance and fleet (Next.js, TypeScript, Supabase/PostgreSQL, Vercel)',
                'Integrated the Bling ERP through its REST API v3 (OAuth 2.0), syncing sales, purchases and inventory with duplicate control and reconciliation against ERP reports',
                'Created financial and operational dashboards: revenue, cost, gross profit, targets, average price per product and fleet cost per km',
                'Added automatic reading of receipts and odometer photos with vision AI (Claude API), reducing manual data entry',
                'Structured profile-based access control with row-level security (RLS) and automations for order submission and inventory posting',
            ],
            pt: [
                'Desenvolvi, de ponta a ponta, um sistema web de gestão de compras, estoque, financeiro e frota (Next.js, TypeScript, Supabase/PostgreSQL, Vercel)',
                'Integrei o ERP Bling via API REST v3 (OAuth 2.0), sincronizando vendas, compras e estoque com controle de duplicidades e reconciliação com os relatórios do ERP',
                'Criei dashboards financeiros e operacionais: faturamento, custo, lucro bruto, meta, preço médio por produto e custo por km da frota',
                'Implementei leitura automática de recibos e fotos de hodômetro com IA de visão (API da Claude), reduzindo a digitação manual',
                'Estruturei controle de acesso por perfis com segurança em nível de linha (RLS) e automações de envio de pedidos e lançamento de estoque',
            ],
        },
    },
    {
        org: 'Jake’s Fireworks',
        url: 'https://www.jakesfireworks.com/',
        logo: '/images/jakes-logo-2x.webp',
        role: { en: 'Salesforce Administrator', pt: 'Administrador Salesforce' },
        period: '06/2024 – 08/2025',
        bullets: {
            en: [
                'Administered Salesforce environments with a focus on security, permissioning and data integrity',
                'Built automations with Salesforce Flow Builder to streamline internal processes',
                'Configured custom objects, reports, dashboards and validations on the platform',
                'Took part in integrations between Salesforce and external systems using Apache NiFi and the Sage X3 ERP',
                'Produced technical and functional documentation for processes and platform configuration',
                'Worked in an agile environment (Scrum/Kanban) and gave functional support to internal users',
                'Used Salesforce Data Loader for bulk imports, exports and updates, keeping CRM data accurate and consistent',
            ],
            pt: [
                'Administrei ambientes Salesforce com foco em segurança, permissionamento e integridade de dados',
                'Desenvolvi automações utilizando Salesforce Flow Builder para otimização de processos internos',
                'Configurei objetos customizados, relatórios, dashboards e validações na plataforma Salesforce',
                'Participei de integrações entre Salesforce e sistemas externos utilizando Apache NiFi e ERP Sage X3',
                'Produzi documentação técnica e funcional para processos e configurações da plataforma',
                'Atuei em ambiente ágil utilizando práticas Scrum/Kanban e suporte funcional aos usuários internos',
                'Utilizei o Salesforce Data Loader para realizar importações, exportações e atualizações em massa de registros, garantindo a qualidade e a integridade dos dados no CRM',
            ],
        },
    },
    {
        org: 'Pittsburg State University',
        url: 'https://www.pittstate.edu/index.html',
        logo: '/images/pittstate.webp',
        role: { en: 'Graduate Teaching Assistant', pt: 'Assistente de Professor' },
        period: '10/2023 – 05/2024',
        bullets: {
            en: [
                'Provided Excel technical support and Pivot Table training',
                'Built a data analysis comparing student communication engagement with the university’s internal system',
            ],
            pt: [
                'Forneci suporte técnico em Excel e treinamento em Tabelas Dinâmicas',
                'Desenvolvi uma análise de dados comparando o engajamento de comunicação dos estudantes com o sistema interno da universidade',
            ],
        },
    },
    {
        org: 'Braskem S.A.',
        url: 'https://www.braskem.com.br/usa',
        logo: '/images/braskem.webp',
        role: { en: 'Data Analyst Intern', pt: 'Estagiário – Analista de Dados' },
        period: '11/2020 – 12/2021',
        bullets: {
            en: [
                'Ran weekly data cleaning, querying and optimization tasks',
                'Built Power BI dashboards to visualize the key KPIs of the Legal Efficiency area',
                'Developed VBA algorithms behind an email-sending panel for Braskem’s external audit process, following compliance standards and cutting a 4–5 hour manual task to about 10 seconds',
            ],
            pt: [
                'Executei semanalmente tarefas de limpeza de dados, querying e otimização',
                'Criei dashboards em Power BI para visualizar os KPIs chave da área de Eficiência Jurídica',
                'Desenvolvi algoritmos em VBA para um painel de envio de e-mails do processo de auditoria externa da Braskem, seguindo os padrões de compliance e reduzindo uma tarefa manual de 4 a 5 horas para cerca de 10 segundos',
            ],
        },
    },
    {
        org: 'Raízen Combustíveis S.A.',
        url: 'https://www.raizen.com.br/en',
        logo: '/images/raizen.png',
        role: { en: 'Retail Intern', pt: 'Estagiário de Varejo' },
        period: '08/2019 – 02/2020',
        bullets: {
            en: [
                'Defined strategies, analyzed results and tracked performance indicators',
                'Prepared weekly reports and organized events',
                'Created PowerPoint presentations and spreadsheets',
            ],
            pt: [
                'Defini estratégias, analisei resultados e acompanhei indicadores',
                'Elaborei relatórios semanais e organizei eventos',
                'Criei apresentações em PowerPoint e planilhas',
            ],
        },
    },
    {
        org: 'Primus Consultoria Empresarial',
        role: { en: 'HR / Administrative-Financial Director', pt: 'Diretor de Recursos Humanos/Administrativo Financeiro' },
        period: '07/2018 – 12/2018',
        bullets: {
            en: [
                'Prepared financial projections, cash-flow control and monthly balance sheets, and taught classes to trainees',
                'Ran performance reviews, climate surveys, recruiting and selection, internal marketing and integration events with other junior enterprises',
            ],
            pt: [
                'Elaborei projeções financeiras, controle de entradas e saídas e balanço mensal, e ministrei aulas aos trainees',
                'Realizei avaliações de desempenho, pesquisa de clima, recrutamento e seleção, endomarketing e eventos de integração com outras Empresas Júniores',
            ],
        },
    },
];

const skills = [
    {
        title: { en: 'Salesforce & CRM', pt: 'Salesforce e CRM' },
        items: ['Salesforce', 'Flow Builder', 'Data Loader', 'Salesforce Maps', 'Campaigns', 'Salesforce Reports', 'Apex', 'SOQL', 'Pivot Tables'],
    },
    {
        title: { en: 'Data Analysis & BI', pt: 'Análise de Dados e BI' },
        items: ['SQL', 'DAX', 'Power BI', 'MS Excel', 'R / RStudio', 'MongoDB'],
    },
    {
        title: { en: 'Programming & Automation', pt: 'Programação e Automação' },
        items: ['Python', 'VBA', 'Google Apps Script', 'JavaScript', 'HTML / CSS', 'Java', 'Dart'],
    },
    {
        title: { en: 'Web Development & Integrations', pt: 'Desenvolvimento Web e Integrações' },
        items: ['TypeScript', 'Next.js / React', 'PostgreSQL / Supabase', 'REST APIs', 'OAuth 2.0', 'ERP integration (Bling, Sage X3)', 'Apache NiFi', 'Claude API', 'Git / Vercel'],
    },
    {
        title: { en: 'Machine Learning', pt: 'Aprendizado de Máquina' },
        items: ['TensorFlow', 'Keras', 'scikit-learn', 'pandas', 'NumPy', 'matplotlib'],
    },
];

const education = [
    {
        school: 'Pittsburg State University',
        url: 'https://www.pittstate.edu/index.html',
        logo: '/images/pittstate.webp',
        degree: { en: 'Master of Science in Technology — Emphasis in Information Technology', pt: 'Mestrado em Ciência e Tecnologia — Ênfase em Tecnologia da Informação' },
        date: '05/2024',
        place: 'Pittsburg, Kansas, USA',
    },
    {
        school: 'Salvador University (UNIFACS)',
        url: 'https://www.unifacs.br/',
        logo: '/images/unifacs.webp',
        degree: { en: 'Bachelor of Business Administration', pt: 'Bacharelado em Administração' },
        date: '12/2021',
        place: 'Salvador, Bahia, Brasil',
    },
];

const languages = [
    { name: { en: 'English', pt: 'Inglês' }, level: { en: 'Fluent', pt: 'Fluente' }, flag: '/images/unitedStates.png', alt: { en: 'USA flag', pt: 'Bandeira dos EUA' } },
    { name: { en: 'Portuguese', pt: 'Português' }, level: { en: 'Native', pt: 'Nativo' }, flag: '/images/brazil.webp', alt: { en: 'Brazil flag', pt: 'Bandeira do Brasil' } },
];

const projects = [
    {
        id: 'salesforce-maps',
        title: { en: 'Salesforce Maps Implementation', pt: 'Implementação do Salesforce Maps' },
        image: '/images/sfMaps.webp',
        alt: { en: 'Salesforce Maps project illustration', pt: 'Imagem do projeto Salesforce Maps' },
        problem: {
            en: 'Sales reps needed a practical, efficient way to get closer to their customers and use the database intelligently.',
            pt: 'Os representantes de vendas precisavam de uma forma prática e eficiente de se aproximar dos clientes e usar a base de dados com inteligência.',
        },
        approach: {
            en: 'As Salesforce Administrator, I implemented Salesforce Maps, which uses geolocation to plot optimized routes. Connecting data to commercial strategy deepened my understanding of the platform and of what reps really need from their data.',
            pt: 'Como Salesforce Administrator, implementei o Salesforce Maps, que usa geolocalização para traçar rotas otimizadas. Conectar dados e estratégia comercial ampliou meu entendimento da plataforma e do que o vendedor realmente precisa da base de dados.',
        },
        result: {
            en: 'Reps spend less time calculating travel and more time building customer relationships.',
            pt: 'O vendedor passa menos tempo calculando deslocamentos e mais tempo aprofundando o relacionamento com o cliente.',
        },
        stack: ['Salesforce', 'Salesforce Maps', 'Geolocation'],
    },
    {
        id: 'audit-automation',
        title: { en: 'Audit Email Automation', pt: 'Automação de E-mails de Auditoria' },
        image: '/images/vba_emails.webp',
        alt: { en: 'Excel control panel with buttons for each audit cycle', pt: 'Painel de controle no Excel com botões para cada ciclo de auditoria' },
        problem: {
            en: 'Braskem sent auditing emails to external law firms, each with its own email structure and template. Several people did it by hand, taking 4 to 5 hours.',
            pt: 'A Braskem enviava e-mails de auditoria a escritórios de advocacia externos, cada um com estrutura e modelo próprios. Várias pessoas faziam o envio manualmente, levando de 4 a 5 horas.',
        },
        approach: {
            en: 'Built a VBA control panel with 6 buttons, one per cycle of the auditing process, that generates and sends every email from the right template.',
            pt: 'Construí um painel em VBA com 6 botões, um para cada ciclo do processo de auditoria, que gera e envia cada e-mail a partir do modelo correto.',
        },
        result: {
            en: 'All emails go out in about 10 seconds, with 95% efficiency and 100% accuracy.',
            pt: 'Todos os e-mails são enviados em cerca de 10 segundos, com 95% de eficiência e 100% de precisão.',
        },
        stack: ['VBA', 'Excel'],
    },
    {
        id: 'legal-dashboards',
        title: { en: 'Legal Operations Dashboards', pt: 'Dashboards de Operações Jurídicas' },
        image: '/images/powerbiDashboards.webp',
        alt: { en: 'Power BI dashboard with legal operations KPIs', pt: 'Dashboard em Power BI com KPIs de operações jurídicas' },
        problem: {
            en: 'The Legal Efficiency department at Braskem S.A. needed a clear, current view of its operations.',
            pt: 'O departamento de Eficiência Jurídica da Braskem S.A. precisava de uma visão clara e atualizada de suas operações.',
        },
        approach: {
            en: 'Developed Power BI dashboards that track legal-operations KPIs, connected to a SharePoint data source. Combined quantitative and qualitative data so the indicators covered the whole department.',
            pt: 'Desenvolvi dashboards em Power BI que acompanham KPIs de operações jurídicas, conectados a uma base de dados no SharePoint. Combinei dados quantitativos e qualitativos para que os indicadores abrangessem todo o departamento.',
        },
        result: {
            en: 'The department can monitor current and past scenarios in near real time, which improved its decision-making.',
            pt: 'O departamento passou a monitorar cenários atuais e passados em tempo quase real, o que melhorou a tomada de decisões.',
        },
        stack: ['Power BI', 'SharePoint', 'KPIs'],
    },
    {
        id: 'hospital-app',
        title: { en: 'Hospital Management App', pt: 'Aplicação de Gestão Hospitalar' },
        image: '/images/node.js_logo.webp',
        alt: { en: 'Node.js logo', pt: 'Logo do Node.js' },
        problem: {
            en: 'A hospital needed a web application to manage its database with different levels of access.',
            pt: 'Um hospital precisava de uma aplicação web para gerenciar seu banco de dados com diferentes níveis de acesso.',
        },
        approach: {
            en: 'Built a Node.js web application with a linked MongoDB database, user authentication, CRUD functionality and three access profiles. Used GitHub for version control and collaboration.',
            pt: 'Construí uma aplicação web em Node.js com banco MongoDB integrado, autenticação de usuários, funcionalidades CRUD e três perfis de acesso. Usei o GitHub para controle de versão e colaboração.',
        },
        result: {
            en: 'A working role-based application covering the full create, read, update and delete cycle, with data export to Excel or CSV.',
            pt: 'Uma aplicação funcional com controle de acesso por perfil, cobrindo todo o ciclo de criar, ler, atualizar e excluir, com exportação de dados para Excel ou CSV.',
        },
        stack: ['Node.js', 'MongoDB', 'JavaScript', 'CSV / Excel export', 'Git / GitHub'],
    },
    {
        id: 'ml-projects',
        title: { en: 'Housing Prediction & CNN Image Classification', pt: 'Previsão de Preços de Imóveis e Classificação de Imagens com CNN' },
        image: '/images/cnn.webp',
        alt: { en: 'Neural network project illustration', pt: 'Ilustração do projeto de redes neurais' },
        problem: {
            en: 'Two projects for my AI class: predict California housing prices and classify CIFAR-10 images.',
            pt: 'Dois projetos da disciplina de IA: prever preços de imóveis na Califórnia e classificar imagens do CIFAR-10.',
        },
        approach: {
            en: 'Housing: scikit-learn preprocessing and a neural network tuned with the Adam optimizer and evaluated by Mean Squared Error. Images: a CNN with convolutional layers, batch normalization and dropout, improved with data augmentation and learning-rate scheduling.',
            pt: 'Imóveis: pré-processamento com scikit-learn e uma rede neural otimizada com Adam e avaliada pelo Erro Quadrático Médio. Imagens: uma CNN com camadas convolucionais, normalização em lote e dropout, aprimorada com data augmentation e agendamento da taxa de aprendizado.',
        },
        result: {
            en: 'Two end-to-end deep learning projects, with the code available on GitHub.',
            pt: 'Dois projetos completos de deep learning, com o código disponível no GitHub.',
        },
        stack: ['Python', 'TensorFlow', 'Keras', 'scikit-learn'],
        link: { href: 'https://github.com/palmaz9/AI_class', label: { en: 'View on GitHub', pt: 'Ver no GitHub' } },
    },
    {
        id: 'chess-engine',
        title: { en: 'How to Build a Chess Engine', pt: 'Como Construir um Motor de Xadrez' },
        image: '/images/chessEngineProject.webp',
        alt: { en: 'Chess engine project illustration', pt: 'Ilustração do projeto de motor de xadrez' },
        problem: {
            en: 'I became a chess enthusiast during my IT Master’s program and wanted a simple guide to building a chess engine.',
            pt: 'Tornei-me entusiasta de xadrez durante o mestrado em TI e quis criar um guia simples para construir um motor de xadrez.',
        },
        approach: {
            en: 'Wrote a paper covering board representation, move generation and position evaluation, with Minimax and alpha-beta pruning to choose the best moves.',
            pt: 'Escrevi um artigo sobre representação do tabuleiro, geração de movimentos e avaliação de posições, usando Minimax com poda alfa-beta para escolher os melhores lances.',
        },
        result: {
            en: 'A step-by-step paper that shows how AI search applies to chess.',
            pt: 'Um artigo passo a passo que mostra como a busca em IA se aplica ao xadrez.',
        },
        stack: ['Minimax', 'Alpha-beta pruning', 'AI'],
        link: { href: '/downloads/chess_engine_paper.pdf', label: { en: 'Download the paper (PDF)', pt: 'Baixar o artigo (PDF)' }, download: 'how_to_build_a_chess_engine.pdf' },
    },
];

const publications = [
    {
        title: { en: 'How to Build a Chess Engine', pt: 'Como Construir um Motor de Xadrez' },
        description: {
            en: 'A guide to the basic components of a chess engine: board representation, move generation, evaluation, and Minimax with alpha-beta pruning.',
            pt: 'Um guia dos componentes básicos de um motor de xadrez: representação do tabuleiro, geração de movimentos, avaliação e Minimax com poda alfa-beta.',
        },
        href: '/downloads/chess_engine_paper.pdf',
        download: 'how_to_build_a_chess_engine.pdf',
    },
];

// Entries: { name, issuer, year?, url? }. The section stays hidden while this is empty.
const certifications = [
    { name: { en: 'Salesforce Associate Certified', pt: 'Salesforce Associate Certified' }, issuer: 'Salesforce' },
    { name: { en: 'CITI Program Certified', pt: 'CITI Program Certified' }, issuer: 'CITI Program' },
];

module.exports = { site, highlights, experience, skills, education, languages, projects, publications, certifications };
