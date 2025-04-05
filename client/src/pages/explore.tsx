import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { ContentItem } from "@/types";

const exploreItems: ContentItem[] = [
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
  },
  {
    id: 7,
    title: "Ocean's Melody",
    genre: "Fantasy",
    coverImage: "https://images.unsplash.com/photo-1551524559-8af4e6624178?auto=format&fit=crop&w=800&q=80",
    creator: {
      name: "Liam Johnson",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    stats: {
      likes: 6500,
      views: 98000
    },
    episode: 28
  },
  {
    id: 8,
    title: "The Last Stand",
    genre: "Action",
    coverImage: "https://images.unsplash.com/photo-1569701813229-33284b643e3c?auto=format&fit=crop&w=800&q=80",
    creator: {
      name: "Sarah Connor",
      avatar: "https://randomuser.me/api/portraits/women/63.jpg"
    },
    stats: {
      likes: 8900,
      views: 134000
    },
    episode: 42
  }
];

const featuredCreators = [
  {
    id: 1,
    name: "Mia Chen",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    followers: 12400,
    works: 8
  },
  {
    id: 2,
    name: "Alex Ray",
    avatar: "https://randomuser.me/api/portraits/men/22.jpg",
    followers: 9800,
    works: 5
  },
  {
    id: 3,
    name: "Emma Frost",
    avatar: "https://randomuser.me/api/portraits/women/28.jpg",
    followers: 15300,
    works: 12
  }
];

const Explore = () => {
  const [popularityRange, setPopularityRange] = useState([0, 100]);
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);

  const handleGenreToggle = (genre: string) => {
    if (selectedGenres.includes(genre)) {
      setSelectedGenres(selectedGenres.filter(g => g !== genre));
    } else {
      setSelectedGenres([...selectedGenres, genre]);
    }
  };

  const genres = ["Fantasy", "Sci-Fi", "Romance", "Slice of Life", "Action", "Horror", "Comedy", "Drama"];

  return (
    <div className="container mx-auto px-4 py-12 mt-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h1 className="font-[Fredoka_One] text-3xl md:text-4xl mb-4">Discovery Hub</h1>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl">
            Explore the latest webtoons, web novels, and discover new creators. Find your next obsession!
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters sidebar */}
          <div className="lg:w-1/4">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-6">
              <h2 className="font-semibold text-lg mb-4">Filters</h2>
              
              <div className="mb-6">
                <h3 className="text-sm font-medium mb-2">Search</h3>
                <Input 
                  placeholder="Search titles or creators..." 
                  className="w-full"
                />
              </div>

              <div className="mb-6">
                <h3 className="text-sm font-medium mb-2">Genres</h3>
                <div className="flex flex-wrap gap-2">
                  {genres.map(genre => (
                    <Button
                      key={genre}
                      variant={selectedGenres.includes(genre) ? "default" : "outline"}
                      size="sm"
                      onClick={() => handleGenreToggle(genre)}
                      className="text-xs"
                    >
                      {genre}
                    </Button>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-sm font-medium mb-2">Popularity</h3>
                <Slider
                  defaultValue={[0, 100]}
                  max={100}
                  step={1}
                  value={popularityRange}
                  onValueChange={(value) => setPopularityRange(value as [number, number])}
                  className="mb-2"
                />
                <div className="flex justify-between text-xs text-gray-500">
                  <span>New</span>
                  <span>Popular</span>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-sm font-medium mb-2">Status</h3>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <input type="checkbox" id="ongoing" className="mr-2"/>
                    <label htmlFor="ongoing">Ongoing</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="completed" className="mr-2"/>
                    <label htmlFor="completed">Completed</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="hiatus" className="mr-2"/>
                    <label htmlFor="hiatus">On Hiatus</label>
                  </div>
                </div>
              </div>

              <Button className="w-full">Apply Filters</Button>
            </div>

            {/* Featured Creators */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <h2 className="font-semibold text-lg mb-4">Featured Creators</h2>
              <div className="space-y-4">
                {featuredCreators.map(creator => (
                  <div key={creator.id} className="flex items-center">
                    <img 
                      src={creator.avatar} 
                      alt={creator.name} 
                      className="w-10 h-10 rounded-full mr-3"
                    />
                    <div className="flex-grow">
                      <h3 className="font-medium">{creator.name}</h3>
                      <p className="text-xs text-gray-500 dark:text-gray-400">{creator.followers.toLocaleString()} followers • {creator.works} works</p>
                    </div>
                    <Button variant="ghost" size="sm" className="text-primary dark:text-secondary">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
                        <circle cx="9" cy="7" r="4"/>
                        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                      </svg>
                    </Button>
                  </div>
                ))}
              </div>
              <Button variant="outline" className="w-full mt-4">View All Creators</Button>
            </div>
          </div>

          {/* Main content */}
          <div className="lg:w-3/4">
            <Tabs defaultValue="all">
              <div className="flex justify-between items-center mb-6">
                <TabsList>
                  <TabsTrigger value="all">All</TabsTrigger>
                  <TabsTrigger value="webtoons">Webtoons</TabsTrigger>
                  <TabsTrigger value="novels">Web Novels</TabsTrigger>
                  <TabsTrigger value="art">Artwork</TabsTrigger>
                </TabsList>
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
                      <path d="M12 2v4"/>
                      <path d="M12 18v4"/>
                      <path d="m4.93 4.93 2.83 2.83"/>
                      <path d="m16.24 16.24 2.83 2.83"/>
                      <path d="M2 12h4"/>
                      <path d="M18 12h4"/>
                      <path d="m4.93 19.07 2.83-2.83"/>
                      <path d="m16.24 7.76 2.83-2.83"/>
                    </svg>
                    Sort By
                  </Button>
                </div>
              </div>

              <TabsContent value="all" className="mt-0">
                <motion.div 
                  className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {exploreItems.map(item => (
                    <ExploreCard key={item.id} item={item} />
                  ))}
                </motion.div>
                <div className="mt-8 text-center">
                  <Button variant="outline">Load More</Button>
                </div>
              </TabsContent>

              <TabsContent value="webtoons" className="mt-0">
                <div className="h-64 flex items-center justify-center text-gray-500 dark:text-gray-400">
                  Webtoons category content will appear here
                </div>
              </TabsContent>

              <TabsContent value="novels" className="mt-0">
                <div className="h-64 flex items-center justify-center text-gray-500 dark:text-gray-400">
                  Web Novels category content will appear here
                </div>
              </TabsContent>

              <TabsContent value="art" className="mt-0">
                <div className="h-64 flex items-center justify-center text-gray-500 dark:text-gray-400">
                  Artwork category content will appear here
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

interface ExploreCardProps {
  item: ContentItem;
}

const ExploreCard = ({ item }: ExploreCardProps) => {
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
      className="group relative bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
      whileHover={{ scale: 1.02 }}
    >
      <div className="relative aspect-[3/4] overflow-hidden">
        <img src={item.coverImage} alt={item.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
          <div className="flex justify-between items-center mb-2">
            <div className="flex items-center">
              <img src={item.creator.avatar} alt={item.creator.name} className="w-8 h-8 rounded-full mr-2" />
              <span className="text-white text-sm">{item.creator.name}</span>
            </div>
          </div>
          <div className="flex items-center text-white text-sm justify-between">
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
              </svg>
              {formatNumber(item.stats.likes)}
            </span>
            <div className="flex space-x-2">
              <button className="p-1 bg-white/20 rounded-full hover:bg-white/30 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m19 21-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/>
                </svg>
              </button>
              <button className="p-1 bg-white/20 rounded-full hover:bg-white/30 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 6 9 17l-5-5"/>
                </svg>
              </button>
              <button className="p-1 bg-white/20 rounded-full hover:bg-white/30 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect width="4" height="11" x="2" y="13"/>
                  <circle cx="4" cy="7" r="2"/>
                </svg>
              </button>
            </div>
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

export default Explore;
