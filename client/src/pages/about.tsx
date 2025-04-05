import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ParallaxElement from "@/components/parallax-element";

const About = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <ParallaxElement depth={0.15} className="absolute top-20 left-10 w-64 h-64 rounded-full bg-primary/10 dark:bg-primary/5" />
        <ParallaxElement depth={0.25} className="absolute top-40 right-20 w-96 h-96 rounded-full bg-secondary/10 dark:bg-secondary/5" />
        <ParallaxElement depth={0.2} className="absolute bottom-20 left-1/4 w-72 h-72 rounded-full bg-accent/10 dark:bg-accent/5" />
      </div>

      <div className="container mx-auto px-4 py-12 mt-8">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h1 className="font-[Fredoka_One] text-3xl md:text-5xl mb-6">About ArtFlux</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Creating the future of digital storytelling through community and innovation.
            </p>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20"
          >
            <motion.div variants={item}>
              <h2 className="font-[Fredoka_One] text-2xl md:text-3xl mb-4 text-primary dark:text-secondary">Our Mission</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                ArtFlux is dedicated to empowering digital storytellers and artists by providing a platform that combines the best elements of webtoons, web novels, and artistic collaboration. We believe in creating an ecosystem where creativity thrives and creators can connect directly with their audience.
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                Our goal is to democratize the publishing process, help creators monetize their work fairly, and give readers an immersive experience that brings stories to life.
              </p>
            </motion.div>
            <motion.div variants={item} className="flex items-center justify-center">
              <div className="relative w-64 h-64">
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-2xl"
                  animate={{ rotate: 3 }}
                  transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                />
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-tr from-accent to-blue-700 rounded-2xl"
                  animate={{ rotate: -3 }}
                  transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", delay: 1 }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
                  </svg>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-20"
          >
            <h2 className="font-[Fredoka_One] text-2xl md:text-3xl mb-8 text-center">Our Vision</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="pt-6">
                  <div className="rounded-full w-12 h-12 bg-primary/20 dark:bg-primary/10 flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                      <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/>
                    </svg>
                  </div>
                  <h3 className="font-[Fredoka_One] text-lg mb-2">Innovation</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Pushing the boundaries of digital storytelling with cutting-edge technology and interactive features that immerse readers in new worlds.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="rounded-full w-12 h-12 bg-secondary/20 dark:bg-secondary/10 flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-secondary">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
                      <circle cx="9" cy="7" r="4"/>
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                    </svg>
                  </div>
                  <h3 className="font-[Fredoka_One] text-lg mb-2">Community</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Building a supportive ecosystem where creators and fans connect, collaborate, and inspire each other to create amazing content.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="rounded-full w-12 h-12 bg-accent/20 dark:bg-accent/10 flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent">
                      <circle cx="12" cy="12" r="10"/>
                      <path d="m9 9 6 6"/>
                      <path d="m15 9-6 6"/>
                    </svg>
                  </div>
                  <h3 className="font-[Fredoka_One] text-lg mb-2">Sustainability</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Creating sustainable income paths for creators while ensuring readers get high-quality content at accessible prices.
                  </p>
                </CardContent>
              </Card>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-20"
          >
            <h2 className="font-[Fredoka_One] text-2xl md:text-3xl mb-8 text-center">Meet the Team</h2>
            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
              <div className="text-center md:text-left md:flex items-center gap-6">
                <div className="w-40 h-40 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full overflow-hidden mx-auto md:mx-0 mb-4 md:mb-0 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 20a6 6 0 0 0-12 0"/>
                    <circle cx="12" cy="10" r="4"/>
                    <circle cx="12" cy="12" r="10"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-[Fredoka_One] text-xl mb-2">Bikshipt Khuntia</h3>
                  <p className="text-primary dark:text-secondary font-medium mb-2">Founder & Developer</p>
                  <p className="text-gray-600 dark:text-gray-300 max-w-md">
                    With a passion for storytelling and technology, Bikshipt is dedicated to creating a platform that empowers digital creators and provides readers with immersive storytelling experiences.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-20"
          >
            <h2 className="font-[Fredoka_One] text-2xl md:text-3xl mb-8 text-center">Development Roadmap</h2>
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200 dark:bg-gray-700"></div>
              <div className="space-y-12">
                <Milestone 
                  title="Phase 1: Platform Launch" 
                  date="Q1 2023"
                  status="completed"
                  features={[
                    "Core reading platform",
                    "Author publishing tools",
                    "Basic user profiles",
                    "Content discovery"
                  ]}
                />
                <Milestone 
                  title="Phase 2: Enhanced Creation" 
                  date="Q3 2023"
                  status="in-progress"
                  features={[
                    "Collaborative editing tools",
                    "AI-assisted art generation",
                    "Episode scheduling",
                    "Analytics dashboard"
                  ]}
                />
                <Milestone 
                  title="Phase 3: Monetization" 
                  date="Q1 2024"
                  status="upcoming"
                  features={[
                    "Subscription system",
                    "Digital collectibles (NFTs)",
                    "Tipping infrastructure",
                    "Creator payouts"
                  ]}
                />
                <Milestone 
                  title="Phase 4: Expansion" 
                  date="Q3 2024"
                  status="upcoming"
                  features={[
                    "Mobile apps",
                    "Offline reading",
                    "International markets",
                    "API for developers"
                  ]}
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="font-[Fredoka_One] text-2xl md:text-3xl mb-6">Join Our Community</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Be part of the ArtFlux journey. Whether you're a creator looking to share your stories or a reader seeking new worlds to explore, we'd love to have you join our growing community.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="px-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
                Sign Up Now
              </Button>
              <Button variant="outline" className="px-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                  <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/>
                  <path d="M9 18h6"/>
                  <path d="M10 22h4"/>
                </svg>
                Learn About Creating
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

interface MilestoneProps {
  title: string;
  date: string;
  status: "completed" | "in-progress" | "upcoming";
  features: string[];
}

const Milestone = ({ title, date, status, features }: MilestoneProps) => {
  const getStatusColor = () => {
    switch (status) {
      case "completed":
        return "bg-green-500";
      case "in-progress":
        return "bg-primary";
      case "upcoming":
        return "bg-gray-400 dark:bg-gray-600";
      default:
        return "bg-gray-400 dark:bg-gray-600";
    }
  };

  const getStatusLabel = () => {
    switch (status) {
      case "completed":
        return "Completed";
      case "in-progress":
        return "In Progress";
      case "upcoming":
        return "Upcoming";
      default:
        return "Planned";
    }
  };

  return (
    <div className="relative z-10">
      <div className={`absolute left-1/2 transform -translate-x-1/2 -translate-y-4 w-5 h-5 rounded-full ${getStatusColor()}`}></div>
      <div className="md:grid md:grid-cols-7 items-center">
        <div className="md:col-span-3 text-right mb-4 md:mb-0 md:pr-10">
          <h3 className="font-[Fredoka_One] text-xl mb-1">{title}</h3>
          <div className="flex items-center justify-end">
            <p className="text-gray-500 dark:text-gray-400 mr-2">{date}</p>
            <span className={`text-xs px-2 py-1 rounded-full ${
              status === "completed" ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200" : 
              status === "in-progress" ? "bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary" : 
              "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200"
            }`}>
              {getStatusLabel()}
            </span>
          </div>
        </div>
        <div className="md:col-span-4 md:pl-10 pt-4 md:pt-0">
          <Card>
            <CardContent className="p-4">
              <ul className="space-y-2">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 mr-2 mt-0.5 ${
                      status === "completed" ? "text-green-500" : 
                      status === "in-progress" ? "text-primary dark:text-secondary" : 
                      "text-gray-400 dark:text-gray-500"
                    }`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      {status === "completed" ? (
                        <polyline points="20 6 9 17 4 12" />
                      ) : status === "in-progress" ? (
                        <circle cx="12" cy="12" r="10" />
                      ) : (
                        <circle cx="12" cy="12" r="10" />
                      )}
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default About;
