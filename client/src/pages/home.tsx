import HeroSection from "@/components/home/hero-section";
import FeatureTabs from "@/components/home/feature-tabs";
import TrendingSection from "@/components/home/trending-section";
import RecommendationsCarousel from "@/components/home/recommendations-carousel";
import GenreSection from "@/components/home/genre-section";
import CreatorCallout from "@/components/home/creator-callout";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <FeatureTabs />
      <TrendingSection />
      <RecommendationsCarousel />
      <GenreSection />
      <CreatorCallout />
    </div>
  );
};

export default Home;
