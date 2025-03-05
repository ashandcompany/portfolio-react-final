import { motion } from "framer-motion";

function GalleryCard({ imageUrl, title, description }) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
      className="group relative overflow-hidden rounded-lg border-[2px] border-pink-dark dark:border-pink"
    >
      <div className="w-full">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="absolute bottom-0 p-6 text-white w-full">
          <h3 className="mb-2 text-lg font-semibold">{title}</h3>
          <p className="text-sm text-gray-200">{description}</p>
        </div>
      </div>
    </motion.div>
  );
}

const galleryItems = [
  {
    title: "Lovejoy - Maquette de site web",
    description: "Maquette de site web pour un groupe de musique",
    imageUrl: "/src/assets/images/Accueil.webp",
  },
  {
    title: "Lovejoy - Maquette de site web",
    description: "Maquette de site web pour un groupe de musique",
    imageUrl: "/src/assets/images/Music.webp",
  },
  ,
  {
    title: "Lovejoy - Maquette de site web",
    description: "Maquette de site web pour un groupe de musique",
    imageUrl: "/src/assets/images/Store.webp",
  },
  {
    title: "Affiche MMI",
    description: "Affiche représentant la formation MMI",
    imageUrl: "/src/assets/images/aff2.webp",
  },
  {
    title: "Model 3D isométrique",
    description: "Modélisation 3D isométrique d'un café la nuit",
    imageUrl: "/src/assets/images/cafe.webp",
  },
  {
    title: "Model 3D isométrique",
    description: "Modélisation 3D isométrique d'une cuisine",
    imageUrl: "/src/assets/images/cuisine.webp",
  },
  
  {
    title: "Je monte ma boîte",
    description: "Petit projet de site web pour aider les gens à monter leur entreprise",
    imageUrl: "/src/assets/images/6.webp",
  },
  {
    title: "Skatepark - Maquette de site web",
    description: "Maquette de site web pour un skatepark fictif",
    imageUrl: "/src/assets/images/skate3.webp",
  },
  {
    title: "Cook'N'Go",
    description: "Une application imaginée lors d'un hackathon qui révolutionne la manière de partager des repas entre étudiants",
    imageUrl: "/src/assets/images/1.webp",
  },
  {
    title: "Cook'N'Go",
    description: "Une application imaginée lors d'un hackathon qui révolutionne la manière de partager des repas entre étudiants",
    imageUrl: "/src/assets/images/2.webp",
  },
  {
    title: "Cook'N'Go",
    description: "Une application imaginée lors d'un hackathon qui révolutionne la manière de partager des repas entre étudiants",
    imageUrl: "/src/assets/images/3.webp",
  },
  {
    title: "Je monte ma boîte",
    description: "Petit projet de site web pour aider les gens à monter leur entreprise",
    imageUrl: "/src/assets/images/4.webp",
  },
  {
    title: "Je monte ma boîte",
    description: "Petit projet de site web pour aider les gens à monter leur entreprise",
    imageUrl: "/src/assets/images/5.webp",
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="mb-8 text-4xl font-bold">Ma galerie</h1>
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {galleryItems.map((item) => (
            <div key={item.title} className="break-inside-avoid">
              <GalleryCard {...item} />
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
