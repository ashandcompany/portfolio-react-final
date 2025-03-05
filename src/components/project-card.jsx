import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

function Card({ children, className = "" }) {
  return (
    <div
      className={`bg-white shadow-lg rounded-lg overflow-hidden ${className}`}
    >
      {children}
    </div>
  );
}

function Badge({ children, className = "" }) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 ${className}`}
    >
      {children}
    </span>
  );
}

export default function ProjectCard({
  title,
  description,
  technologies,
  imageUrl,
  size = "medium",
  url,
}) {
  const sizeClasses = {
    small: "md:col-span-1",
    medium: "md:col-span-1",
    large: "md:col-span-2",
  };

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
      className={`${sizeClasses[size]} group relative overflow-hidden rounded-lg border-[2px] border-pink-dark dark:border-pink`}
    >
      <div className="aspect-[4/3] w-full overflow-hidden h-full">
        <img
          src={imageUrl}
          alt={title}
          className="h-full w-full object-cover transition-transform group-hover:scale-110"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 transition-opacity group-hover:opacity-100">
        <div className="absolute bottom-0 p-6 text-white w-full">
          <h3 className="mb-2 text-xl font-semibold">{title}</h3>
          <p className="mb-4 text-sm text-gray-200">{description}</p>
          <div className="flex flex-wrap gap-2 mb-6 justify-center">
            {technologies.map((tech) => (
              <Badge key={tech}>{tech}</Badge>
            ))}
          </div>
          {url && (
            <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 w-fit mx-auto bg-pink dark:bg-pink-dark text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center gap-2"
          >
            Voir le projet
            <ExternalLink size={18} />
          </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
