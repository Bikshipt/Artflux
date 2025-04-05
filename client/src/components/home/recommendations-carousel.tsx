import { useRef } from "react";
import { motion } from "framer-motion";
import { RecommendationItem } from "@/types";

const recommendationsData: RecommendationItem[] = [
  {
    id: 1,
    title: "The Last Kingdom of Aurellia",
    description: "In a world where magic is fading and dragons are returning to the sky, Princess Elara must navigate court politics while uncovering the ancient secrets of her bloodline.",
    tags: ["Fantasy", "Adventure"],
    genre: "Fantasy",
    coverImage: "https://images.unsplash.com/photo-1614583225154-5fcdda07019e?auto=format&fit=crop&w=800&q=80",
    creator: {
      name: "Sarah J. Watson",
      avatar: "https://randomuser.me/api/portraits/women/32.jpg"
    },
    stats: {
      likes: 15300,
      views: 278000
    },
    updatedAt: "2 days ago"
  },
  {
    id: 2,
    title: "The Silent Witness",
    description: "Detective Morgan must solve a string of murders with only one lead: a witness who cannot speak.",
    tags: ["Thriller"],
    genre: "Thriller",
    coverImage: "https://images.unsplash.com/photo-1551029506-0807df4e2031?auto=format&fit=crop&w=800&q=80",
    creator: {
      name: "R.J. Cooper",
      avatar: "https://randomuser.me/api/portraits/men/41.jpg"
    },
    stats: {
      likes: 9800,
      views: 147000
    },
    updatedAt: "1 week ago"
  },
  {
    id: 3,
    title: "Quantum Paradox",
    description: "When time travel becomes commercialized, one woman discovers the terrifying truth behind the technology.",
    tags: ["Sci-Fi"],
    genre: "Sci-Fi",
    coverImage: "https://images.unsplash.com/photo-1551269901-5c5e14c25df7?auto=format&fit=crop&w=800&q=80",
    creator: {
      name: "Amelia Tang",
      avatar: "https://randomuser.me/api/portraits/women/67.jpg"
    },
    stats: {
      likes: 7400,
      views: 120000
    },
    updatedAt: "3 days ago"
  },
  {
    id: 4,
    title: "Coffee Shop Connections",
    description: "Two strangers meet daily at the same coffee shop, unaware they're competing for the same job.",
    tags: ["Romance"],
    genre: "Romance",
    coverImage: "https://images.unsplash.com/photo-1604881988758-f76ad2f7aac1?auto=format&fit=crop&w=800&q=80",
    creator: {
      name: "David Chen",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    stats: {
      likes: 12600,
      views: 195000
    },
    updatedAt: "5 days ago"
  }
];

const RecommendationsCarousel = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  
  const scroll = (direction: "left" | "right") => {
    if (!carouselRef.current) return;
    
    const scrollAmount = 300;
    const currentScroll = carouselRef.current.scrollLeft;
    
    if (direction === "right") {
      carouselRef.current.scrollTo({
        left: currentScroll + scrollAmount,
        behavior: "smooth"
      });
    } else {
      carouselRef.current.scrollTo({
        left: currentScroll - scrollAmount,
        behavior: "smooth"
      });
    }
  };

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800/50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="font-[Fredoka_One] text-2xl md:text-3xl">Top Picks For You</h2>
          <div className="flex space-x-2">
            <button 
              className="p-2 rounded-full bg-white dark:bg-gray-700 shadow hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
              onClick={() => scroll("left")}
              aria-label="Previous recommendation"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600 dark:text-gray-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
            <button 
              className="p-2 rounded-full bg-white dark:bg-gray-700 shadow hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
              onClick={() => scroll("right")}
              aria-label="Next recommendation"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600 dark:text-gray-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </div>
        </div>

        {/* Carousel container */}
        <div className="relative overflow-hidden">
          <div 
            ref={carouselRef}
            className="flex space-x-4 overflow-x-auto scrollbar-hide py-2"
          >
            {/* Featured large recommendation */}
            <FeaturedRecommendation item={recommendationsData[0]} />
            
            {/* Smaller recommendations */}
            {recommendationsData.slice(1).map((item) => (
              <SmallRecommendation key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

interface RecommendationProps {
  item: RecommendationItem;
}

const FeaturedRecommendation = ({ item }: RecommendationProps) => {
  const getTagColor = (tag: string) => {
    const tagMap: Record<string, string> = {
      "Fantasy": "bg-primary/10 dark:bg-primary/20 text-primary dark:text-secondary",
      "Adventure": "bg-accent/10 dark:bg-accent/20 text-accent",
      "Sci-Fi": "bg-secondary/10 dark:bg-secondary/20 text-secondary",
      "Thriller": "bg-blue-700/10 dark:bg-blue-700/20 text-blue-700 dark:text-blue-400",
      "Romance": "bg-pink-500/10 dark:bg-pink-500/20 text-pink-500"
    };

    return tagMap[tag] || "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300";
  };

  return (
    <motion.div 
      className="flex-shrink-0 w-full md:w-2/3 bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col md:flex-row h-full">
        <div className="md:w-2/5 relative">
          <img src={item.coverImage} alt={item.title} className="w-full h-48 md:h-full object-cover" />
          <div className="absolute top-2 left-2 px-3 py-1 bg-accent text-white rounded-full text-sm font-semibold">
            Featured
          </div>
        </div>
        <div className="md:w-3/5 p-6 flex flex-col">
          <div className="flex items-center mb-2">
            {item.tags.map((tag, index) => (
              <span 
                key={index}
                className={`px-2 py-1 ${getTagColor(tag)} rounded-full text-xs ${index < item.tags.length - 1 ? 'mr-2' : ''}`}
              >
                {tag}
              </span>
            ))}
          </div>
          <h3 className="font-[Fredoka_One] text-xl md:text-2xl mb-3">{item.title}</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3 md:line-clamp-4">
            {item.description}
          </p>
          <div className="flex items-center mt-auto">
            <img src={item.creator.avatar} alt={item.creator.name} className="w-10 h-10 rounded-full mr-3" />
            <div>
              <p className="font-semibold">{item.creator.name}</p>
              <p className="text-gray-500 dark:text-gray-400 text-sm">Updated {item.updatedAt}</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const SmallRecommendation = ({ item }: RecommendationProps) => {
  const getTagColor = (tag: string) => {
    const tagMap: Record<string, string> = {
      "Fantasy": "bg-primary/10 dark:bg-primary/20 text-primary dark:text-secondary",
      "Adventure": "bg-accent/10 dark:bg-accent/20 text-accent",
      "Sci-Fi": "bg-secondary/10 dark:bg-secondary/20 text-secondary",
      "Thriller": "bg-blue-700/10 dark:bg-blue-700/20 text-blue-700 dark:text-blue-400",
      "Romance": "bg-pink-500/10 dark:bg-pink-500/20 text-pink-500"
    };

    return tagMap[tag] || "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300";
  };

  return (
    <motion.div 
      className="flex-shrink-0 w-72 bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <img src={item.coverImage} alt={item.title} className="w-full h-40 object-cover" />
      <div className="p-4">
        <div className="flex items-center mb-2">
          <span className={`px-2 py-1 ${getTagColor(item.tags[0])} rounded-full text-xs`}>{item.tags[0]}</span>
        </div>
        <h3 className="font-[Fredoka_One] text-lg mb-2">{item.title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-3 text-sm line-clamp-2">
          {item.description}
        </p>
        <div className="flex items-center">
          <img src={item.creator.avatar} alt={item.creator.name} className="w-8 h-8 rounded-full mr-2" />
          <div>
            <p className="font-semibold text-sm">{item.creator.name}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default RecommendationsCarousel;
