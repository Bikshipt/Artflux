import { useState } from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ContentItem } from "@/types";

const libraryItems: ContentItem[] = [
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
  },
  {
    id: 5,
    title: "Shadow Hunter",
    genre: "Action",
    coverImage: "https://images.unsplash.com/photo-1547891654-e66ed7ebb968?auto=format&fit=crop&w=800&q=80",
    creator: {
      name: "Chris Nolan",
      avatar: "https://randomuser.me/api/portraits/men/35.jpg"
    },
    stats: {
      likes: 7800,
      views: 118000
    },
    episode: 23
  },
  {
    id: 6,
    title: "Whispers in the Dark",
    genre: "Horror",
    coverImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80",
    creator: {
      name: "Elena Smith",
      avatar: "https://randomuser.me/api/portraits/women/12.jpg"
    },
    stats: {
      likes: 9200,
      views: 140000
    },
    episode: 17
  }
];

const Read = () => {
  const [viewType, setViewType] = useState<"grid" | "list">("grid");

  return (
    <div className="container mx-auto px-4 py-12 mt-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="font-[Fredoka_One] text-3xl md:text-4xl mb-2">Library</h1>
            <p className="text-gray-600 dark:text-gray-300 mb-4 md:mb-0">
              Discover webtoons and web novels from talented creators
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <Button
              variant={viewType === "grid" ? "default" : "outline"}
              size="sm"
              onClick={() => setViewType("grid")}
              className="flex items-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
                <rect width="7" height="7" x="3" y="3" rx="1" />
                <rect width="7" height="7" x="14" y="3" rx="1" />
                <rect width="7" height="7" x="14" y="14" rx="1" />
                <rect width="7" height="7" x="3" y="14" rx="1" />
              </svg>
              Grid
            </Button>
            <Button
              variant={viewType === "list" ? "default" : "outline"}
              size="sm"
              onClick={() => setViewType("list")}
              className="flex items-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
                <line x1="8" x2="21" y1="6" y2="6" />
                <line x1="8" x2="21" y1="12" y2="12" />
                <line x1="8" x2="21" y1="18" y2="18" />
                <line x1="3" x2="3.01" y1="6" y2="6" />
                <line x1="3" x2="3.01" y1="12" y2="12" />
                <line x1="3" x2="3.01" y1="18" y2="18" />
              </svg>
              List
            </Button>
          </div>
        </div>

        <Tabs defaultValue="trending">
          <TabsList className="mb-8">
            <TabsTrigger value="trending">Trending</TabsTrigger>
            <TabsTrigger value="new">New</TabsTrigger>
            <TabsTrigger value="staffPicks">Staff Picks</TabsTrigger>
            <TabsTrigger value="community">Community Favorites</TabsTrigger>
          </TabsList>

          <TabsContent value="trending" className="space-y-8">
            {viewType === "grid" ? (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {libraryItems.map((item) => (
                  <LibraryCard key={item.id} item={item} />
                ))}
              </div>
            ) : (
              <div className="space-y-4">
                {libraryItems.map((item) => (
                  <LibraryListItem key={item.id} item={item} />
                ))}
              </div>
            )}
          </TabsContent>

          <TabsContent value="new">
            <div className="h-40 flex items-center justify-center">
              <p className="text-muted-foreground">Coming soon!</p>
            </div>
          </TabsContent>

          <TabsContent value="staffPicks">
            <div className="h-40 flex items-center justify-center">
              <p className="text-muted-foreground">Coming soon!</p>
            </div>
          </TabsContent>

          <TabsContent value="community">
            <div className="h-40 flex items-center justify-center">
              <p className="text-muted-foreground">Coming soon!</p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

interface LibraryCardProps {
  item: ContentItem;
}

const LibraryCard = ({ item }: LibraryCardProps) => {
  const getGenreColor = (genre: string) => {
    const genreMap: Record<string, string> = {
      "Sci-Fi": "bg-primary/10 dark:bg-primary/20 text-primary dark:text-secondary",
      "Romance": "bg-accent/10 dark:bg-accent/20 text-accent",
      "Fantasy": "bg-secondary/10 dark:bg-secondary/20 text-secondary",
      "Slice of Life": "bg-blue-700/10 dark:bg-blue-700/20 text-blue-700 dark:text-blue-400",
      "Action": "bg-yellow-500/10 dark:bg-yellow-500/20 text-yellow-500",
      "Horror": "bg-red-800/10 dark:bg-red-800/20 text-red-800 dark:text-red-400"
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
      className="group bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
      whileHover={{ y: -5 }}
    >
      <div className="relative aspect-[3/4]">
        <img src={item.coverImage} alt={item.title} className="w-full h-full object-cover" />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
          <h3 className="text-white font-semibold">{item.title}</h3>
          <div className="flex justify-between items-center">
            <Badge variant="outline" className={getGenreColor(item.genre)}>
              {item.genre}
            </Badge>
            <span className="text-white/80 text-sm">Ep. {item.episode}</span>
          </div>
        </div>
      </div>
      <div className="p-3 flex justify-between items-center">
        <div className="flex items-center">
          <img src={item.creator.avatar} alt={item.creator.name} className="w-6 h-6 rounded-full mr-2" />
          <span className="text-sm font-medium">{item.creator.name}</span>
        </div>
        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
          </svg>
          {formatNumber(item.stats.likes)}
        </div>
      </div>
    </motion.div>
  );
};

const LibraryListItem = ({ item }: LibraryCardProps) => {
  const getGenreColor = (genre: string) => {
    const genreMap: Record<string, string> = {
      "Sci-Fi": "bg-primary/10 dark:bg-primary/20 text-primary dark:text-secondary",
      "Romance": "bg-accent/10 dark:bg-accent/20 text-accent",
      "Fantasy": "bg-secondary/10 dark:bg-secondary/20 text-secondary",
      "Slice of Life": "bg-blue-700/10 dark:bg-blue-700/20 text-blue-700 dark:text-blue-400",
      "Action": "bg-yellow-500/10 dark:bg-yellow-500/20 text-yellow-500",
      "Horror": "bg-red-800/10 dark:bg-red-800/20 text-red-800 dark:text-red-400"
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
      className="flex bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
      whileHover={{ x: 5 }}
    >
      <div className="w-24 h-32 flex-shrink-0">
        <img src={item.coverImage} alt={item.title} className="w-full h-full object-cover" />
      </div>
      <div className="flex-grow p-4 flex flex-col justify-between">
        <div>
          <div className="flex justify-between items-start">
            <h3 className="font-semibold text-lg">{item.title}</h3>
            <Badge variant="outline" className={getGenreColor(item.genre)}>
              {item.genre}
            </Badge>
          </div>
          <div className="flex items-center mt-1">
            <img src={item.creator.avatar} alt={item.creator.name} className="w-5 h-5 rounded-full mr-2" />
            <span className="text-sm text-gray-600 dark:text-gray-300">{item.creator.name}</span>
          </div>
        </div>
        <div className="flex justify-between items-center mt-2">
          <span className="text-sm text-gray-500 dark:text-gray-400">Episode {item.episode}</span>
          <div className="flex items-center space-x-3 text-sm text-gray-500 dark:text-gray-400">
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
              </svg>
              {formatNumber(item.stats.likes)}
            </div>
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                <circle cx="12" cy="12" r="3"/>
              </svg>
              {formatNumber(item.stats.views)}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Read;
