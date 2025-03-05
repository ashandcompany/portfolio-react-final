import ProjectCard from "./project-card";
import { motion } from "framer-motion";

const images = import.meta.glob("/src/assets/miniatures/*.{jpg,jpeg,png,gif,webp}", { eager: true });
const imageUrls = Object.values(images).map((module) => module.default);

const projects = [
  {
    title: "Site galerie de Cutea",
    description: "Un des premiers projets réalisé durant mon BUT.",
    technologies: ["HTML", "CSS"],
    imageUrl: imageUrls[1],
    size: "large",
    url: "github.com"
  },
  {
    title: "Dashboard",
    description: "Un projet de dashboard indiquant la consommation en Moselle et Grand Est :)",
    technologies: ["Chart JS", "PHP", "Javascript"],
    imageUrl: imageUrls[2],
    size: "small",
    url: "https://emma-roizot.fr/sae303_hostinger/index.php"
  },
  {
    title: "Earthly",
    description: "Une application de quêtes quotidiennes et hebdomadaires pour protéger la planète",
    technologies: ["CSS", "PHP", "Javascript"],
    imageUrl: imageUrls[3],
    size: "medium",
    url: "https://emma-roizot.fr/earthly/index.html"
  },
  {
    title: "Thème Wordpress \"Oz\"",
    description: "Un petit thème Wordpress sur le Magicien d'Oz, avec des CPT et des pages personnalisés",
    technologies: ["Wordpress", "PHP", "SEO"],
    imageUrl: imageUrls[4],
    size: "medium",
    telechargement_url: "https://emma-roizot.fr/theme-the-wizard-of-oz.zip"
  },
  {
    title: "Portfolio",
    description: "Le portfolio sur lequel vous vous trouvez actuellement :)",
    technologies: ["React", "Vite", "Tailwind CSS"],
    imageUrl: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b",
    size: "small"
  },
  {
    title: "Doctolib",
    description: "A personal portfolio website showcasing my work and skills",
    technologies: ["React", "Tailwind CSS", "Framer Motion"],
    imageUrl: imageUrls[1],
    size: "small"
  },
  {
    title: "Cat'astrophe",
    description: "Un site web accompagnant notre jeu vidéo de notre projet de fin d'année. Si vous avez un casque VR, le jeu est même téléchargeable gratuitement dessus :)",
    technologies: ["Astro JS", "CSS"],
    imageUrl: imageUrls[0],
    size: "large",
    url: "https://ashandcompany.github.io/cat-astrophe-le-site-web/"
  },
];

export default function Projects() {
  return (
    <section className="py-12" id="porfolio">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="mb-8 text-4xl font-bold">Mes projets</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}