export interface ContentItem {
  id: number;
  title: string;
  genre: string;
  coverImage: string;
  creator: {
    name: string;
    avatar: string;
  };
  stats: {
    likes: number;
    views: number;
  };
  episode?: number;
}

export interface RecommendationItem extends ContentItem {
  description: string;
  tags: string[];
  updatedAt: string;
}

export interface GenreItem {
  id: number;
  name: string;
  gradientFrom: string;
  gradientTo: string;
}

export interface FeatureTab {
  id: string;
  title: string;
  icon: string;
  content: {
    title: string;
    description: string;
    features: string[];
    buttonText: string;
    buttonLink: string;
    image: string;
    imageAlt: string;
    imageTitle: string;
    imageSubtitle: string;
  };
}
