// ===== MENU BURGER =====
const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');

if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('open');
    });

    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('open');
        });
    });
}

// ===== PROJETS =====
const projectsData = [
    {
        title: "Best Application (Concept d'application mobile)",
        category: "uiux",
        desc: "Le design présenté ici illustre comment une identité visuelle forte peut renforcer l'engagement au sein d'une communauté en ligne. L'application, baptisée <b>Best Application</b>, propose une expérience immersive et personnalisée pour les amateurs de photographie, en mettant l'accent sur l'inspiration et l'échange.",
        img: "assets/hhhh.jpeg"
    },
    {
        title: "MEGA FIT (Concept d'application mobile)", 
        category: "uiux",
        desc: "Découvrez Mega Fit, l'application de fitness professionnelle conçue pour ceux qui ne font aucun compromis. Avec son identité visuelle puissante, symbolisée par un taureau musclé iconique, Mega Fit vous ouvre les portes de l'élite du fitness.",
        img: "assets/hhk.png"
    },
    {
        title: "Design d'Interface E-commerce Épuré", 
        category: "uiux",
        desc: "Présentation d'une maquette UI/UX complète réalisée pour la boutique de mode en ligne Mode By Wendy . Conçue sur Figma, cette interface adopte un style minimaliste et aéré, structurant intelligemment le catalogue de produits (prêt-à-porter, chaussures de luxe, lingerie) grâce à un système de cartes claires et ordonnées. L'utilisation de tons pastel doux et d'une hiérarchie visuelle bien définie garantit une navigation fluide, démontrant une approche centrée sur l'utilisateur pour créer des expériences web à la fois esthétiques et hautement fonctionnelles.",
        img: "assets/fr.png"
    },
    {
        title: "Landing page de la plateforme d'apprentissage IA MAÏA", 
        category: "uiux",
        desc: "Conception UX/UI de la plateforme d'apprentissage adaptatif MAÏA. Recherche utilisateur, wireframes, design system, prototypage et tests utilisateurs.",
        img: "assets/ld.jpg"
    },
    {
        title: "Claymorphism Dashboard Design", 
        category: "uiux",
        desc: "Découvrez l'impact visuel immédiat du Claymorphism à travers ce tableau de bord unique visible sur Wirefram.jpg. En combinant un relief 3D moelleux, des angles ultra-arrondis et des ombres douces et diffuses, cette interface brise la froideur des écrans classiques pour offrir une expérience visuelle à la fois tactile et irrésistible.",
        img: "assets/wr.png"
    },
    {
        title: "Vitrine de Créations de Marques",
        category: "logo",
        desc: "Cette collection de créations regroupe une série de logos modernes axés sur le branding et l'identité de marque . L'ensemble se caractérise par une approche graphique polyvalente, mêlant un design géométrique épuré, des formes minimalistes et des illustrations thématiques (digital, nature, services).",
        img: "assets/cvf.png"
    },
    {
        title: "branding & Mise en page Mag",
        category: "maquette",
        desc: "Mise en situation du packaging : Permet de visualiser le rendu du design d'étiquette sur différents supports réels (un bocal en verre, un sachet de café en kraft, une boîte en carton, et un gobelet à emporter).",
        img: "assets/2aa.png"
    },
    
    {
        title: "AVELOR (Marque fictife)",
        category: "maquette",
        desc: "Cette présentation d'identité de marque pour AVELOR, incarne un luxe minimaliste et sophistiqué. Le design se concentre sur un emblème géométrique stylisé et angulaire, intégrant subtilement le nom de la marque dans une forme qui évoque à la fois une structure architecturale et une flèche de boussole.",
        img: "assets/dav.png"
    },
    {
        title: "Affiche Cyber Brutalisme",
        category: "maquette",
        desc: "Flyer événementiel explorant les structures typographiques complexes et les textures numériques denses pour un festival underground.",
        img: "assets/pub2.jpg"
    },
    
    {
        title: "Marchez avec Élégance",
        category: "flyer",
        desc: "Une affiche publicitaire épurée pour des chaussures de luxe dans le fichier llk.jpg. Le visuel met en valeur une paire d'escarpins haut de gamme bleu marine et noir dans un décor raffiné, soulignant directement le chic intemporel et l'artisanat d'exception de la marque.",
        img: "assets/llk.jpeg"
    },
    {
        title: "Ordinateur HP Zed Book Haut de Gamme",
        category: "flyer",
        desc: "Ce design publicitaire, présenté par 'My Tech Antarandolo', met en vedette un ordinateur portable HP argenté de type 'Zed Book' sous Windows 11. Le visuel utilise une structure graphique divisée, avec une section bleue répertoriant les spécifications clés du 'Haut Gamme'.",
        img: "assets/bd.jpeg"
    },
    {
        title: "Design de Communication Visuelle",
        category: "flyer",
        desc: "Un visuel promotionnel percutant et moderne réalisé pour l'agence digitale Visualizeo,. Cette création associe un espace de travail lumineux et épuré à une typographie audacieuse et un message motivationnel fort (« Cesse d'exister. Commence à t'imposer. »). L'utilisation d'effets visuels tendance, tels que le panneau translucide (glassmorphism) contrastant avec le badge rouge vif, illustre une maîtrise de la conception d'actifs marketing engageants. C'est un exemple parfait de design conçu pour capter l'attention sur les réseaux sociaux et affirmer une identité de marque ambitieuse.",
        img: "assets/3a.png"
    },
    {
        title: "Design B2B & Acquisition Client",
        category: "flyer",
        desc: "Une affiche publicitaire captivante conçue pour engager des prospects.  En mettant en évidence la maîtrise des outils de référence de l'industrie (la suite Adobe avec Photoshop, Illustrator, InDesign, ainsi que Figma), cette création illustre une capacité à concevoir des campagnes de communication stratégiques et professionnelles. C'est un excellent exemple de design marketing pensé pour inviter directement les clients à la collaboration et valoriser une expertise créative.",
        img: "assets/d1b.png"
    },
    {
        title: "Création de Logos Professionnels",
        category: "flyer",
        desc: "Cette bannière promotionnelle, illustre une expertise ciblée dans la conception de logos originaux et professionnels. Mettant en scène une composition dynamique aux couleurs vibrantes, elle souligne la maîtrise des outils incontournables du design graphique (Adobe Illustrator et Photoshop). Le visuel intègre stratégiquement plusieurs réalisations concrètes (Ivotoerana, CrimsAI, Fée Leo, Visualizeo), démontrant une approche créative affirmée et la capacité à développer des identités de marque percutantes pour des projets variés.",
        img: "assets/couv1.png"
    },
    {
        title: "Interface SaaS Dashboard",
        category: "uiux",
        desc: "Création d'une interface d'administration complexe. Simplification des flux utilisateurs et hiérarchisation optimale des indicateurs clés de performance.",
        img: "assets/bbc.png"
    },
    {
        title: "Design Graphic Original",
        category: "flyer",
        desc: "Cette bannière d'introduction synthétise mon savoir-faire en tant que designer polyvalent. Elle met en scène une gamme complète de compétences, allant de l'élaboration d'identités visuelles impactantes.",
        img: "assets/3b.png"
    }
];

const galleryContainer = document.getElementById('galleryContainer');
const tabButtons = document.querySelectorAll('.tab-btn');
const detailsModal = document.getElementById('detailsModal');
const closeModal = document.getElementById('closeModal');

function buildGallery(filter) {
    galleryContainer.innerHTML = "";
    const targetData = filter === 'all' ? projectsData : projectsData.filter(p => p.category === filter);
    if (targetData.length === 0) {
        galleryContainer.innerHTML = `<p class="text-zinc-600 text-sm py-4">Aucune création disponible.</p>`;
        return;
    }
    targetData.forEach((project, index) => {
        const item = document.createElement('div');
        item.className = "gallery-item group relative overflow-hidden bg-zinc-900 rounded cursor-pointer aspect-square";
        item.style.animationDelay = `${index * 0.03}s`;
        item.innerHTML = `
            <img src="${project.img}" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 filter grayscale hover:grayscale-0 opacity-80" alt="${project.title}">
            <div class="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span class="text-xs uppercase font-medium tracking-widest text-[#FFE5CC] border border-[#FFE5CC]/40 px-3 py-1.5 rounded-full">Voir détails</span>
            </div>
        `;
        item.addEventListener('click', () => openProjectDetails(project));
        galleryContainer.appendChild(item);
    });
}

function openProjectDetails(project) {
    document.getElementById('modalImage').src = project.img;
    document.getElementById('modalCategory').innerText = project.category;
    document.getElementById('modalTitle').innerText = project.title;
    document.getElementById('modalDesc').innerText = project.desc;
    document.body.classList.add('modal-open');
    detailsModal.classList.remove('hidden');
    setTimeout(() => {
        detailsModal.classList.add('opacity-100');
    }, 10);
}

if (galleryContainer && detailsModal && closeModal) {
    closeModal.addEventListener('click', () => {
        detailsModal.classList.remove('opacity-100');
        setTimeout(() => {
            detailsModal.classList.add('hidden');
            document.body.classList.remove('modal-open');
        }, 300);
    });

    tabButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            tabButtons.forEach(t => t.classList.remove('active'));
            btn.classList.add('active');
            buildGallery(btn.getAttribute('data-category'));
            const targetScroll = document.getElementById('portfolio').offsetTop - 20;
            if(window.scrollY > targetScroll) {
                window.scrollTo({ top: targetScroll, behavior: 'smooth' });
            }
        });
    });

    buildGallery('all');
}
function initProgressBars() {
    const progressBars = document.querySelectorAll('.progress-bar');
    if (!progressBars.length) return;

    const animateBars = () => {
        progressBars.forEach(bar => {
            const target = bar.getAttribute('data-target') || '0%';
            bar.style.width = target;
        });
    };

    if ('IntersectionObserver' in window) {
        const section = document.getElementById('competences') || progressBars[0];
        const observer = new IntersectionObserver(entries => {
            if (entries.some(entry => entry.isIntersecting)) {
                animateBars();
                observer.disconnect();
            }
        }, { threshold: 0.35 });
        observer.observe(section);
        return;
    }

    animateBars();
}

document.addEventListener('DOMContentLoaded', initProgressBars);
