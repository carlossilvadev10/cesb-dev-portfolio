import { Award, BookOpen, Briefcase, Cloud, Code2, Coffee, Database, Heart, Lightbulb, Mail, MapPin, Phone, Rocket, Server, Zap } from "lucide-react";
import { FiFacebook, FiGithub, FiLinkedin } from "react-icons/fi";

import projectImg1 from "../assets/images/project-1.png";
import projectImg2 from "../assets/images/project-2.png";
import projectImg3 from "../assets/images/project-3.png";
import projectImg4 from "../assets/images/project-4.png";
import projectImg5 from "../assets/images/project-5.png";
import projectImg6 from "../assets/images/project-6.png";
import projectImg7 from "../assets/images/project-7.png";

export const skillsCategory = [
    {
        title: "Frontend",
        icon: Code2,
        description: "Diseño e implementación de interfaces modernas, interactivas y optimizadas para una experiencia de usuario fluida.",
        skills: [
            {
                name: "React",
                level: 95,
                color: "bg-blue-500",
            },
            {
                name: "Next.js",
                level: 90,
                color: "bg-blue-600",
            },
            {
                name: "TypeScript",
                level: 85,
                color: "bg-gray-700",
            },
            {
                name: "Tailwind CSS",
                level: 90,
                color: "bg-cyan-500",
            },
            {
                name: "Framer Motion",
                level: 85,
                color: "bg-pink-500",
            },
        ],
    },
    {
        title: "Backend",
        icon: Server,
        description: "Desarrollo de lógica, APIs seguras y estructuras escalables que garantizan un rendimiento eficiente del sistema.",
        skills: [
            {
                name: "Node.js",
                level: 95,
                color: "bg-green-500",
            },
            {
                name: "Express",
                level: 90,
                color: "bg-gray-700",
            },
            {
                name: "Java",
                level: 85,
                color: "bg-yellow-500",
            },
            {
                name: "PHP",
                level: 90,
                color: "bg-pink-600",
            },
            {
                name: "REST APIs",
                level: 85,
                color: "bg-orange-500",
            },
        ],
    },
    {
        title: "Base de datos",
        icon: Database,
        description: "Modelado, gestión y optimización de bases de datos relacionales y no relacionales para un manejo sólido de la información.",
        skills: [
            {
                name: "SQL Server",
                level: 95,
                color: "bg-green-600",
            },
            {
                name: "MySQL",
                level: 90,
                color: "bg-blue-700",
            },
            {
                name: "MongoDB",
                level: 85,
                color: "bg-red-500",
            },
            {
                name: "Redis",
                level: 80,
                color: "bg-indigo-600",
            },
            {
                name: "Firebase",
                level: 75,
                color: "bg-yellow-600",
            },
        ],
    },
    {
        title: "DevOps",
        icon: Cloud,
        description: "Automatización de despliegues, integración continua y control de entornos para mejorar la eficiencia del desarrollo.",
        skills: [
            {
                name: "Docker",
                level: 85,
                color: "bg-blue-600",
            },
            {
                name: "AWS",
                level: 80,
                color: "bg-orange-600",
            },
            {
                name: "Vercel",
                level: 90,
                color: "bg-gray-700",
            },
            {
                name: "Git",
                level: 90,
                color: "bg-orange-700",
            },
            {
                name: "CI/CD",
                level: 80,
                color: "bg-purple-600",
            },
        ],
    },
];

export const techStack = [
    "HTML5", "CSS3", "Bootstrap", "JavaScript", "Sass", "C#", "Laravel", "Vite", "Axios", "Postman", "GitHub Actions", "Prettier", "ESLint", "Figma"
];

export const stats = [
    {
        number: "10+",
        label: "Proyectos completados",
    },
    {
        number: "2+",
        label: "Años de experiencia",
    },
    {
        number: "15+",
        label: "Tecnologías",
    },
    {
        number: "95%",
        label: "Clientes satisfechos",
    },
];

export const projects = [
    {
        id: 1,
        title: "EShop CESB - Tienda Online Moderna",
        description: "Una plataforma enfocada en la presentación y venta de productos tecnológicos. Ofrece una navegación fluida, diseño atractivo y una estructura clara que resalta la calidad y el estilo de cada artículo disponible.",
        image: projectImg1,
        alt: "project-1",
        tags: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"],
        liveUrl: "https://eshop-cesb.netlify.app/",
        githubUrl: "https://github.com/carlossilvadev10/eshop-cesb",
        featured: true,
        category: "Frontend",
    },
    {
        id: 2,
        title: "Event Horizont - Centro de Eventos",
        description: "Sitio web diseñado para conectar a los usuarios con eventos y experiencias culturales. Permite explorar actividades, conocer detalles y mantener una interacción intuitiva con el contenido.",
        image: projectImg2,
        alt: "project-2",
        tags: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS", "Next.js"],
        liveUrl: "https://event-horizont.netlify.app/",
        githubUrl: "https://github.com/carlossilvadev10/event-horizont",
        featured: true,
        category: "Frontend",
    },
    {
        id: 3,
        title: "Tripi Travel – Portal de Viajes",
        description: "Un portal enfocado en la búsqueda y reserva de alojamientos y destinos turísticos. Su diseño prioriza la comodidad, rapidez y facilidad para que el usuario planifique sus viajes de manera práctica.",
        image: projectImg3,
        alt: "project-3",
        tags: ["HTML", "CSS", "JavaScript", "React", "TypeScript", "Tailwind CSS", "Next.js"],
        liveUrl: "https://tripi-travel-web.netlify.app/",
        githubUrl: "https://github.com/carlossilvadev10/tripi-travel",
        featured: false,
        category: "Frontend",
    },
    {
        id: 4,
        title: "Shop Cart - Tienda Comercial",
        description: "Página enfocada en la presentación y compra de productos deportivos y artículos para el hogar. Ofrece una experiencia sencilla y directa para los usuarios que buscan realizar compras rápidas.",
        image: projectImg4,
        alt: "project-4",
        tags: ["HTML", "CSS", "JavaScript", "React", "Bootstrap", "Sass"],
        liveUrl: "https://github.com/carlossilvadev10/shop-cart",
        githubUrl: "https://github.com/carlossilvadev10/shop-cart",
        featured: true,
        category: "Frontend",
    },
    {
        id: 5,
        title: "Nike Store - Tienda Online Deportiva",
        description: "Tienda virtual inspirada en la marca Nike, diseñada para mostrar productos deportivos con un enfoque en la estética moderna, navegación rápida y experiencia de usuario optimizada.",
        image: projectImg5,
        alt: "project-5",
        tags: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"],
        liveUrl: "https://nike-store-sport.vercel.app/",
        githubUrl: "https://github.com/carlossilvadev10/nike-store",
        featured: true,
        category: "Frontend",
    },
    {
        id: 6,
        title: "Fit Physique - Plataforma Fitness Motivacional",
        description: "Plataforma orientada al bienestar físico y mental, que presenta rutinas, productos y contenido motivacional para fomentar hábitos saludables y mejorar el estilo de vida de los usuarios.",
        image: projectImg6,
        alt: "project-6",
        tags: ["HTML", "CSS", "JavaScript", "React", "TypeScript", "Tailwind CSS", "Next.js"],
        liveUrl: "https://fit-physique-phi.vercel.app/",
        githubUrl: "https://github.com/carlossilvadev10/fit-physique",
        featured: false,
        category: "Frontend",
    },
    {
        id: 7,
        title: "Mesa de Partes – Sistema Administrativo",
        description: "Aplicación web destinada a la gestión de trámites y documentación institucional, permitiendo registrar, controlar y dar seguimiento a los documentos de manera organizada y eficiente.",
        image: projectImg7,
        alt: "project-7",
        tags: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
        liveUrl: "#",
        githubUrl: "https://github.com/carlossilvadev10/SistemaMesadePartesUNJFSC",
        featured: false,
        category: "Full Stack",
    },
];

export const journeySteps = [
    {
        year: 2023,
        title: "Desarrollo del sistema web institucional",
        company: "Universidad Nacional José Faustino Sánchez Carrión",
        description: "Diseñé y desarrollé la aplicación web 'Mesa de Partes', un sistema administrativo full stack construido con PHP y MySQL para gestionar trámites institucionales. Este proyecto marcó mi consolidación en el desarrollo backend y en la integración de bases de datos, sentando las bases de mi enfoque full stack.",
        icon: Code2,
        color: "bg-purple-500",
    },
    {
        year: 2024,
        title: "Diseño de experiencia gigital para un centro de eventos",
        company: "Proyecto personal profesional",
        description: "Desarrollé una landing page dinámica y optimizada con React, Next.js y Tailwind CSS, enfocada en conectar usuarios con eventos culturales y experiencias locales. Implementé diseño responsivo, optimización SEO y arquitectura modular de componentes.",
        icon: Rocket,
        color: "bg-orange-500",
    },
    {
        year: 2024,
        title: "Creación de tienda deportiva online con React",
        company: "Proyecto personal profesional - Nike",
        description: "Construí una tienda online moderna e intuitiva inspirada en Nike, desarrollada con React y Tailwind CSS. Priorizó el rendimiento, la experiencia de usuario y el diseño visual, demostrando dominio en la creación de interfaces profesionales y escalables.",
        icon: Award,
        color: "bg-blue-500",
    },
    {
        year: 2025,
        title: "Desarrollo de plataforma fitness motivacional",
        company: "Proyecto personal profesional",
        description: "Creé una plataforma fitness moderna y motivadora utilizando React, TypeScript, Tailwind CSS y Next.js. Este proyecto representó un salto profesional al integrar diseño atractivo, rendimiento optimizado y enfoque en la experiencia del usuario, consolidando mi perfil como desarrollador frontend avanzado.",
        icon: Zap,
        color: "bg-red-500",
    },
    {
        year: 2025,
        title: "Primer paso profesional en el desarrollo web",
        company: "Instituto Peruano para el Desarrollo de la Educación, Ciencia, Tecnología e Informática",
        description: "Participé en el diseño, desarrollo e implementación de un módulo web institucional moderno, aplicando React, TypeScript y Tailwind CSS. Esta experiencia fortaleció mis habilidades en desarrollo frontend, gestión ágil y trabajo colaborativo, contribuyendo al fortalecimiento digital del Instituto.",
        icon: Briefcase,
        color: "bg-green-500",
    },
];

export const passions = [
    {
        icon: Heart,
        title: "Experiencia de Usuario",
        description: "Me apasiona diseñar interfaces intuitivas y centradas en las personas, buscando que cada interacción sea fluida, accesible y agradable.",
    },
    {
        icon: Coffee,
        title: "Resolución de Problemas",
        description: "Disfruto encontrar soluciones creativas y eficientes ante desafíos técnicos, aplicando lógica, análisis y pensamiento crítico.",
    },
    {
        icon: BookOpen,
        title: "Aprendizaje Continuo",
        description: "Me mantengo en constante actualización, explorando nuevas tecnologías y metodologías para crecer profesional y personalmente.",
    },
    {
        icon: Lightbulb,
        title: "Innovación Tecnológica",
        description: "Me motiva crear proyectos con impacto, combinando código, diseño y estrategia para transformar ideas en productos digitales reales.",
    },
];

export const socialLinks = [
    {
        name: "Github",
        icon: FiGithub,
        url: "https://github.com/carlossilvadev10",
        color: "hover:text-gray-400",
        bgColor: "hover:bg-gray-800",
    },
    {
        name: "Linkedin",
        icon: FiLinkedin,
        url: "https://www.linkedin.com/in/carlos-eduardo-silva-bustamante-b6084528b",
        color: "hover:text-blue-400",
        bgColor: "hover:bg-gray-500/10",
    },
    {
        name: "Facebook",
        icon: FiFacebook,
        url: "https://www.facebook.com/profile.php?id=100008882110840&mibextid=ZbWKwL",
        color: "hover:text-sky-400",
        bgColor: "hover:bg-sky-500/10",
    },
    {
        name: "Gmail",
        icon: Mail,
        url: "mailto:carlos.esilva1007@gmail.com",
        color: "hover:text-green-400",
        bgColor: "hover:bg-green-500/10",
    },
];

export const contactInfo = [
    {
        icon: MapPin,
        label: "Lugar",
        value: "Lima, Perú",
    },
    {
        icon: Mail,
        label: "Correo",
        value: "carlos.esilva1007@gmail.com",
    },
    {
        icon: Phone,
        label: "Celular",
        value: "+51 924 141 969",
    },
]