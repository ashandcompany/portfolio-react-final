import { motion } from "framer-motion";

function Card({ children, className = "" }) {
  return (
    <div
      className={`p-6 bg-white dark:bg-darkPink shadow-lg rounded-lg overflow-hidden border-[2px] border-pink-dark dark:border-pink ${className}`}
    >
      {children}
    </div>
  );
}

function CardContent({ children, className = "" }) {
  return <div className={`p-6 md:p-8 ${className}`}>{children}</div>;
}

function Badge({ children, className = "" }) {
  return (
    <span
      className={`inline-flex items-center rounded-full border border-pink px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 ${className}`}
    >
      {children}
    </span>
  );
}

export default function About() {
  const certifications = [
    {
      title: "Certification Opquast",
      issuer: "Opquast",
      date: "2025",
      description:
        "Maîtrise des bonnes pratiques du web, assurance qualité et accessibilité.",
      skills: ["Accessibilité", "SEO", "Performance web", "UX", "Sécurité web"],
      level: "Expert",
    },
    {
      title: "BUT Métiers du Multimédia et de l'Internet (MMI)",
      issuer: "IUT de Rouen",
      date: "2023",
      description:
        "Formation polyvalente en développement web, design, communication et gestion de projet numérique.",
      skills: [
        "Développement web",
        "UX/UI Design",
        "Gestion de projet",
        "Marketing digital",
      ],
      level: "Bac+3",
    },
  ];

  return (
    <section id="about" className="py-12 dark:text-white mb-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="overflow-hidden">
          <CardContent>
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <h1 className="mb-4 text-3xl font-bold text-darkPink dark:text-pink-light">À propos de moi</h1>
                <p className="mb-4 text-muted-foreground w-[80%] mx-auto">
                  Salut ! Je m'appelle Emma Roizot et je suis actuellement en
                  alternance en tant que pilote digital (développeuse web) dans
                  la même entreprise où j’ai effectué mon stage. Passionnée par
                  les jeux vidéo, la programmation et le dessin, j’aime allier
                  créativité et technologie pour donner vie à des projets
                  innovants. Mon objectif ? Transformer ma passion en une
                  carrière enrichissante !
                </p>
                <div className="mt-6">
                  <h2 className="mb-6 text-xl font-semibold text-darkPink dark:text-pink-light">Compétences</h2>
                  <div className="grid grid-cols-2 xl:w-[50%] mx-auto gap-2 text-left text-darkPink dark:text-pink-light">
                    <li>React</li>
                    <li>TypeScript</li>
                    <li>Node.js</li>
                    <li>Tailwind CSS</li>
                    <li>GitHub</li>
                    <li>PHP</li>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1602615576820-ea14cf3e476a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Espace de travail"
                  className="rounded-lg object-cover h-full w-full border-[2px] border-pink-dark dark:border-pink"
                />
              </div>
            </div>

            <div className="mt-12">
              <h2 className="mb-6 text-2xl font-bold text-darkPink dark:text-pink-light">Certifications & Diplômes</h2>
              <div className="grid gap-6 sm:grid-cols-2">
                {certifications.map((cert) => (
                  <motion.div
                    key={cert.title}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="rounded-lg border p-6 transition-colors hover:bg-pink/10 dark:hover:bg-darkPink-light"
                  >
                    <div className="mb-4">
                      <h3 className="text-xl font-semibold text-darkPink dark:text-pink-light">{cert.title}</h3>
                      <p className="text-sm text-muted-foreground dark:text-muted-foreground">
                        {cert.issuer}
                      </p>
                    </div>
                    <p className="mb-4 text-sm text-muted-foreground dark:text-muted-foreground">
                      {cert.description}
                    </p>
                    <div className="mb-4">
                      <div className="flex gap-2">
                        <Badge className="bg-pink dark:bg-pink-dark text-white">
                          {cert.level}
                        </Badge>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm font-medium text-darkPink dark:text-pink-light">Compétences clés :</p>
                      <div className="flex flex-wrap gap-2">
                        {cert.skills.map((skill) => (
                          <Badge key={skill} className="bg-pink dark:bg-pink-dark text-white">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  );
}
