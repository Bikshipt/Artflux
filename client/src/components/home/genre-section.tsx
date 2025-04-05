import { motion } from "framer-motion";
import { GenreItem } from "@/types";

const genres: GenreItem[] = [
  {
    id: 1,
    name: "Fantasy",
    gradientFrom: "from-primary",
    gradientTo: "to-secondary"
  },
  {
    id: 2,
    name: "Sci-Fi",
    gradientFrom: "from-secondary",
    gradientTo: "to-blue-700"
  },
  {
    id: 3,
    name: "Romance",
    gradientFrom: "from-accent",
    gradientTo: "to-primary"
  },
  {
    id: 4,
    name: "Slice of Life",
    gradientFrom: "from-blue-700",
    gradientTo: "to-accent"
  },
  {
    id: 5,
    name: "Action",
    gradientFrom: "from-primary-dark",
    gradientTo: "to-blue-700"
  },
  {
    id: 6,
    name: "Comedy",
    gradientFrom: "from-secondary",
    gradientTo: "to-primary"
  },
  {
    id: 7,
    name: "Drama",
    gradientFrom: "from-blue-700",
    gradientTo: "to-primary"
  },
  {
    id: 8,
    name: "Mystery",
    gradientFrom: "from-accent",
    gradientTo: "to-blue-700"
  }
];

const GenreSection = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-16 bg-background-light dark:bg-background-dark">
      <div className="container mx-auto px-4">
        <h2 className="font-[Fredoka_One] text-2xl md:text-3xl text-center mb-12">Explore by Genre</h2>

        <motion.div 
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {genres.map((genre) => (
            <GenreCard key={genre.id} genre={genre} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

interface GenreCardProps {
  genre: GenreItem;
}

const GenreCard = ({ genre }: GenreCardProps) => {
  return (
    <motion.a 
      href="#"
      className={`group relative h-32 bg-gradient-to-br ${genre.gradientFrom} ${genre.gradientTo} rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}
      variants={motion.item}
    >
      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors"></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.span 
          className="font-[Fredoka_One] text-xl text-white group-hover:scale-110 transition-transform"
          whileHover={{ scale: 1.1 }}
        >
          {genre.name}
        </motion.span>
      </div>
    </motion.a>
  );
};

export default GenreSection;
