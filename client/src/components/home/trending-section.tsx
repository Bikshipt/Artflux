import { motion } from "framer-motion";
import { ContentItem } from "@/types";

const trendingItems: ContentItem[] = [
  {
    id: 1,
    title: "Neon City Dreams",
    genre: "Sci-Fi",
    coverImage: "https://images.unsplash.com/photo-1568983037559-78d6e1c75c2c?auto=format&fit=crop&w=800&q=80",
    creator: {
      name: "Mia Chen",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    stats: {
      likes: 4200,
      views: 56000
    },
    episode: 45
  },
  {
    id: 2,
    title: "Heartstrings",
    genre: "Romance",
    coverImage: "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=800&q=80",
    creator: {
      name: "Alex Ray",
      avatar: "https://randomuser.me/api/portraits/men/22.jpg"
    },
    stats: {
      likes: 8700,
      views: 103000
    },
    episode: 78
  },
  {
    id: 3,
    title: "Mystic Chronicles",
    genre: "Fantasy",
    coverImage: "https://images.unsplash.com/photo-1519638399535-1b036603ac77?auto=format&fit=crop&w=800&q=80",
    creator: {
      name: "Emma Frost",
      avatar: "https://randomuser.me/api/portraits/women/28.jpg"
    },
    stats: {
      likes: 12100,
      views: 189000
    },
    episode: 32
  },
  {
    id: 4,
    title: "Daily Dose",
    genre: "Slice of Life",
    coverImage: "https://images.unsplash.com/photo-1541661538396-53ba2d051eed?auto=format&fit=crop&w=800&q=80",
    creator: {
      name: "Jay Park",
      avatar: "https://randomuser.me/api/portraits/men/76.jpg"
    },
    stats: {
      likes: 5600,
      views: 72000
    },
    episode: 112
  }
];

const TrendingSection = () => {
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
        <div className="flex justify-between items-center mb-8">
          <h2 className="font-[Fredoka_One] text-2xl md:text-3xl">Trending & Popular</h2>
          <a href="#" className="text-primary dark:text-secondary hover:underline">View All</a>
        </div>

        <motion.div 
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {trendingItems.map((item) => (
            <TrendingCard key={item.id} item={item} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

interface TrendingCardProps {
  item: ContentItem;
}

const TrendingCard = ({ item }: TrendingCardProps) => {
  const getGenreColor = (genre: string) => {
    const genreMap: Record<string, string> = {
      "Sci-Fi": "bg-primary/10 dark:bg-primary/20 text-primary dark:text-secondary",
      "Romance": "bg-accent/10 dark:bg-accent/20 text-accent",
      "Fantasy": "bg-secondary/10 dark:bg-secondary/20 text-secondary",
      "Slice of Life": "bg-blue-700/10 dark:bg-blue-700/20 text-blue-700 dark:text-blue-400",
    };

    return genreMap[genre] || "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300";
  };

  const formatNumber = (num: number) => {
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'k';
    }
    return num.toString();
  };

  return (
    <motion.div 
      className="group relative bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
      variants={motion.item}
    >
      <div className="relative aspect-[3/4] overflow-hidden">
        <img src={item.coverImage} alt={item.title} className="w-full h-full object-cover" />
        {/* Overlay with info (appears on hover) */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
          <div className="mb-2 flex items-center">
            <img src={item.creator.avatar} alt={item.creator.name} className="w-8 h-8 rounded-full mr-2" />
            <span className="text-white text-sm">{item.creator.name}</span>
          </div>
          <div className="flex items-center text-white text-sm">
            <span className="mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
              </svg>
              {formatNumber(item.stats.likes)}
            </span>
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                <circle cx="12" cy="12" r="3"/>
              </svg>
              {formatNumber(item.stats.views)}
            </span>
          </div>
        </div>
      </div>
      <div className="p-3">
        <h3 className="font-semibold mb-1 line-clamp-1">{item.title}</h3>
        <div className="flex items-center justify-between">
          <span className={`text-xs px-2 py-1 ${getGenreColor(item.genre)} rounded-full`}>{item.genre}</span>
          <span className="text-xs text-gray-500 dark:text-gray-400">Ep. {item.episode}</span>
        </div>
      </div>
    </motion.div>
  );
};

export default TrendingSection;
