import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FeatureTab } from "@/types";
import { Button } from "@/components/ui/button";

const featureTabs: FeatureTab[] = [
  {
    id: "read",
    title: "Read",
    icon: "book-open",
    content: {
      title: "Dive Into Stories",
      description: "Discover thousands of webtoons and web novels from talented creators. Immerse yourself in stunning visuals and captivating narratives.",
      features: [
        "Vertical scrolling webtoons optimized for mobile",
        "Smart text flow for immersive novel reading",
        "Personalized recommendations based on your taste",
        "Dark mode and accessibility options built-in"
      ],
      buttonText: "Browse Library",
      buttonLink: "/read",
      image: "https://images.unsplash.com/photo-1581287053822-fd7bf4f4bfec?auto=format&fit=crop&w=800&q=80",
      imageAlt: "Person reading on tablet",
      imageTitle: "Featured: The Crystal Prophecy",
      imageSubtitle: "Epic fantasy by Aria Williams"
    }
  },
  {
    id: "create",
    title: "Create",
    icon: "pen-fancy",
    content: {
      title: "Unleash Your Creativity",
      description: "Powerful tools to bring your stories to life. Collaborate with other creators and leverage AI to enhance your workflow.",
      features: [
        "Real-time collaborative writing tools",
        "Digital storyboarding and scene planning",
        "AI-assisted art generation and enhancement",
        "Version history and progress tracking"
      ],
      buttonText: "Start Creating",
      buttonLink: "/create",
      image: "https://images.unsplash.com/photo-1535016120720-40c646be5580?auto=format&fit=crop&w=800&q=80",
      imageAlt: "Digital art creation",
      imageTitle: "Creator Studio",
      imageSubtitle: "Powerful tools for your digital stories"
    }
  },
  {
    id: "explore",
    title: "Explore",
    icon: "compass",
    content: {
      title: "Discover New Worlds",
      description: "Find your next favorite series through our curated collections and community recommendations.",
      features: [
        "Trending topics and popular picks",
        "Genre-based discovery system",
        "Creator spotlight features",
        "Community reviews and ratings"
      ],
      buttonText: "Start Exploring",
      buttonLink: "/explore",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
      imageAlt: "People exploring content",
      imageTitle: "Discover Weekly",
      imageSubtitle: "Fresh content curated just for you"
    }
  },
  {
    id: "monetize",
    title: "Monetize",
    icon: "coins",
    content: {
      title: "Earn From Your Passion",
      description: "Multiple ways to generate income from your creative work, all integrated into one platform.",
      features: [
        "Subscription-based revenue models",
        "Direct tip and support options",
        "NFT creation for digital collectibles",
        "Analytics dashboard for income tracking"
      ],
      buttonText: "Learn More",
      buttonLink: "/monetize",
      image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&w=800&q=80",
      imageAlt: "Earnings dashboard",
      imageTitle: "Creator Economy",
      imageSubtitle: "Turn your passion into income"
    }
  }
];

const FeatureTabs = () => {
  const [activeTab, setActiveTab] = useState("read");
  
  const getActiveFeature = () => {
    return featureTabs.find(tab => tab.id === activeTab) || featureTabs[0];
  };

  return (
    <section className="py-12 bg-gray-50 dark:bg-gray-800/50">
      <div className="container mx-auto px-4">
        <h2 className="font-[Fredoka_One] text-2xl md:text-3xl text-center mb-8">Discover the World of ArtFlux</h2>

        {/* Feature Tabs */}
        <div className="mb-8">
          <div className="flex justify-center flex-wrap">
            {featureTabs.map((tab) => (
              <button
                key={tab.id}
                className={`feature-tab px-6 py-3 rounded-t-lg font-semibold ${
                  activeTab === tab.id
                    ? "text-primary dark:text-secondary bg-white dark:bg-gray-800 border-b-2 border-primary dark:border-secondary"
                    : "text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-secondary border-b-2 border-transparent"
                }`}
                onClick={() => setActiveTab(tab.id)}
              >
                <TabIcon name={tab.icon} /> {tab.title}
              </button>
            ))}
          </div>
        </div>

        {/* Feature Content */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="p-6"
            >
              {/* Content for active tab */}
              <FeatureContent feature={getActiveFeature()} />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

interface FeatureContentProps {
  feature: FeatureTab;
}

const FeatureContent = ({ feature }: FeatureContentProps) => {
  return (
    <div className="flex flex-col md:flex-row items-center">
      <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
        <h3 className="font-[Fredoka_One] text-2xl mb-4 text-primary dark:text-secondary">{feature.content.title}</h3>
        <p className="mb-4 text-gray-600 dark:text-gray-300">{feature.content.description}</p>
        <ul className="space-y-2 mb-6">
          {feature.content.features.map((item, index) => (
            <li key={index} className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-secondary mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <Button className="px-6 py-2 bg-primary dark:bg-secondary text-white rounded-full hover:opacity-90 transition-opacity">
          {feature.content.buttonText}
        </Button>
      </div>
      <div className="md:w-1/2">
        <div className="relative h-80 bg-gray-100 dark:bg-gray-700 rounded-lg overflow-hidden shadow-inner">
          <img src={feature.content.image} alt={feature.content.imageAlt} className="object-cover w-full h-full rounded-lg" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
            <h4 className="text-white font-semibold text-xl">{feature.content.imageTitle}</h4>
            <p className="text-gray-200">{feature.content.imageSubtitle}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

interface TabIconProps {
  name: string;
}

const TabIcon = ({ name }: TabIconProps) => {
  const iconMap: Record<string, JSX.Element> = {
    "book-open": (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline-block mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
      </svg>
    ),
    "pen-fancy": (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline-block mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"/>
      </svg>
    ),
    "compass": (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline-block mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/>
      </svg>
    ),
    "coins": (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline-block mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="9" cy="9" r="5"/>
        <path d="M9 14v5"/>
        <path d="M9 9h5"/>
        <path d="M9 9v5"/>
        <path d="M9 19h5"/>
        <path d="M15 9h4"/>
        <path d="M15 14h4"/>
        <path d="M15 19h4"/>
      </svg>
    )
  };

  return iconMap[name] || null;
};

export default FeatureTabs;
