import { useState } from "react";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const CreatePage = () => {
  return (
    <div className="container mx-auto px-4 py-12 mt-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h1 className="font-[Fredoka_One] text-3xl md:text-4xl mb-4">Content Creation Hub</h1>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Use our powerful tools to bring your stories to life. Collaborate with others, leverage AI assistance, and publish your work to a global audience.
          </p>
        </motion.div>

        <Tabs defaultValue="writing">
          <TabsList className="mb-8 w-full justify-start">
            <TabsTrigger value="writing">Co-Writing Area</TabsTrigger>
            <TabsTrigger value="artboards">Artboards</TabsTrigger>
            <TabsTrigger value="video">Video Studio</TabsTrigger>
            <TabsTrigger value="portfolio">Portfolio</TabsTrigger>
          </TabsList>

          <TabsContent value="writing" className="space-y-6">
            <CoWritingArea />
          </TabsContent>

          <TabsContent value="artboards" className="space-y-6">
            <ArtboardsArea />
          </TabsContent>

          <TabsContent value="video" className="space-y-6">
            <VideoStudioArea />
          </TabsContent>

          <TabsContent value="portfolio" className="space-y-6">
            <PortfolioArea />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

const CoWritingArea = () => {
  const [editorValue, setEditorValue] = useState("");

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2">
        <Card>
          <CardHeader>
            <CardTitle>Script Editor</CardTitle>
            <CardDescription>Write or edit your story script in real-time with collaborators</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="border border-gray-200 dark:border-gray-700 rounded-md mb-4">
              <div className="bg-gray-100 dark:bg-gray-800 py-2 px-3 border-b border-gray-200 dark:border-gray-700 flex items-center">
                <span className="text-sm font-medium">Chapter 1: The Beginning</span>
                <div className="ml-auto flex items-center space-x-2">
                  <Button variant="ghost" size="sm">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 2a10 10 0 1 0 10 10H12V2Z"/>
                      <path d="M12 2a10 10 0 0 1 10 10h-10V2Z"/>
                      <path d="M12 12 2 6.5"/>
                      <path d="M12 12 2.1 18.5"/>
                    </svg>
                    <span className="ml-1">Theme</span>
                  </Button>
                  <Button variant="ghost" size="sm">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z"/>
                      <path d="M10 2c1 .5 2 2 2 5"/>
                    </svg>
                    <span className="ml-1">Style</span>
                  </Button>
                </div>
              </div>
              <textarea
                className="w-full p-4 min-h-[300px] bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 outline-none resize-none"
                placeholder="Start writing your story here..."
                value={editorValue}
                onChange={(e) => setEditorValue(e.target.value)}
              ></textarea>
            </div>
            <div className="flex justify-between">
              <Button variant="outline">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
                Invite Collaborators
              </Button>
              <div className="flex space-x-2">
                <Button variant="outline">Save Draft</Button>
                <Button>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                    <path d="m12 19 7-7-7-7"/>
                    <path d="M5 12h14"/>
                  </svg>
                  Publish
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div>
        <Card>
          <CardHeader>
            <CardTitle>AI Assistant</CardTitle>
            <CardDescription>Get help with your story</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="mb-4 space-y-3">
              <Button variant="outline" className="w-full justify-start">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                  <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/>
                </svg>
                Generate plot ideas
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                  <rect width="8" height="8" x="2" y="2" rx="2"/>
                  <path d="M14 2c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2"/>
                  <path d="M20 2c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2"/>
                  <path d="M10 18H5c-1.7 0-3-1.3-3-3v-1"/>
                  <polyline points="7 21 10 18 7 15"/>
                  <rect width="8" height="8" x="14" y="14" rx="2"/>
                </svg>
                Create character profiles
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                  <path d="M12 3v12l8-8-8-8Z"/>
                  <path d="M4 13h8"/>
                  <path d="M9 17H4"/>
                  <path d="M4 21h6"/>
                </svg>
                Improve dialogue
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                  <path d="M15.5 2H8.6c-.4 0-.8.2-1.1.5-.3.3-.5.7-.5 1.1v12.8c0 .4.2.8.5 1.1.3.3.7.5 1.1.5h9.8c.4 0 .8-.2 1.1-.5.3-.3.5-.7.5-1.1V6.5L15.5 2z"/>
                  <path d="M3 7.6v12.8c0 .4.2.8.5 1.1.3.3.7.5 1.1.5h9.8"/>
                  <path d="M15 2v5h5"/>
                </svg>
                Generate scene descriptions
              </Button>
            </div>
            <div className="p-3 bg-gray-100 dark:bg-gray-800 rounded-md">
              <h4 className="font-medium mb-2">Tips for great storytelling</h4>
              <ul className="text-sm space-y-1 text-gray-600 dark:text-gray-300">
                <li>• Focus on character development</li>
                <li>• Create a clear conflict</li>
                <li>• Show, don't tell</li>
                <li>• Be mindful of pacing</li>
                <li>• Use descriptive language</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

const ArtboardsArea = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
        <div>
          <h2 className="text-2xl font-[Fredoka_One]">Artboards</h2>
          <p className="text-gray-600 dark:text-gray-300">Create and organize visual elements for your story</p>
        </div>
        <div className="flex space-x-2 mt-3 md:mt-0">
          <Button>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
              <path d="M5 12h14"/>
              <path d="M12 5v14"/>
            </svg>
            New Artboard
          </Button>
          <Button variant="outline">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
              <circle cx="11" cy="11" r="8"/>
              <path d="m21 21-4.3-4.3"/>
            </svg>
            Browse Templates
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="hover:shadow-md transition-shadow">
          <CardContent className="p-0">
            <div className="relative aspect-video bg-gray-100 dark:bg-gray-800 overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
                  <path d="M5 12h14"/>
                  <path d="M12 5v14"/>
                </svg>
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-semibold mb-1">Create New Artboard</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">Start with a blank canvas</p>
            </div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-md transition-shadow">
          <CardContent className="p-0">
            <div className="relative aspect-video bg-gradient-to-r from-primary/20 to-secondary/20 overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center text-center px-4">
                <span className="font-medium text-gray-600 dark:text-gray-200">Character Design Template</span>
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-semibold mb-1">Character Design</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">Templates for character poses and expressions</p>
            </div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-md transition-shadow">
          <CardContent className="p-0">
            <div className="relative aspect-video bg-gradient-to-r from-accent/20 to-primary/20 overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center text-center px-4">
                <span className="font-medium text-gray-600 dark:text-gray-200">Panel Layout Template</span>
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-semibold mb-1">Panel Layout</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">Pre-designed comic panel templates</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="mt-8">
        <CardHeader>
          <CardTitle>AI Image Generation</CardTitle>
          <CardDescription>Create custom art using text prompts</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-grow">
              <textarea
                className="w-full p-3 min-h-[100px] border border-gray-200 dark:border-gray-700 rounded-md bg-white dark:bg-gray-900 resize-none"
                placeholder="Describe the image you want to generate (e.g., 'A futuristic city with neon lights and flying cars')"
              ></textarea>
              <div className="mt-2 flex justify-end">
                <Button>Generate Image</Button>
              </div>
            </div>
            <div className="md:w-1/3 bg-gray-100 dark:bg-gray-800 rounded-md flex items-center justify-center min-h-[160px]">
              <div className="text-center p-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mx-auto mb-2 text-gray-400">
                  <rect width="18" height="18" x="3" y="3" rx="2" ry="2"/>
                  <circle cx="9" cy="9" r="2"/>
                  <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/>
                </svg>
                <p className="text-sm text-gray-500 dark:text-gray-400">Your generated image will appear here</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

const VideoStudioArea = () => {
  return (
    <div className="text-center py-12">
      <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mx-auto mb-4 text-gray-400">
        <path d="m22 8-6 4 6 4V8Z"/>
        <rect width="14" height="12" x="2" y="6" rx="2" ry="2"/>
      </svg>
      <h2 className="text-2xl font-[Fredoka_One] mb-2">Video Studio Coming Soon</h2>
      <p className="text-gray-600 dark:text-gray-300 max-w-lg mx-auto mb-6">
        We're working hard to bring you advanced video creation and editing tools. Check back soon for updates!
      </p>
      <Button>Get Notified When Ready</Button>
    </div>
  );
};

const PortfolioArea = () => {
  return (
    <div className="space-y-8">
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/4 flex flex-col items-center mb-6 md:mb-0">
            <div className="w-32 h-32 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-full w-full text-gray-400 p-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 20a6 6 0 0 0-12 0"/>
                <circle cx="12" cy="10" r="4"/>
                <circle cx="12" cy="12" r="10"/>
              </svg>
            </div>
            <Button variant="outline" size="sm">
              Change Photo
            </Button>
          </div>
          <div className="md:w-3/4 md:pl-8">
            <h2 className="text-2xl font-semibold mb-4">Creator Profile</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-1">Display Name</label>
                <input 
                  type="text" 
                  className="w-full p-2 border border-gray-200 dark:border-gray-700 rounded-md bg-white dark:bg-gray-900"
                  placeholder="Your creator name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-1">Username</label>
                <input 
                  type="text" 
                  className="w-full p-2 border border-gray-200 dark:border-gray-700 rounded-md bg-white dark:bg-gray-900"
                  placeholder="@username"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-1">Bio</label>
                <textarea 
                  className="w-full p-2 border border-gray-200 dark:border-gray-700 rounded-md bg-white dark:bg-gray-900 resize-none"
                  rows={3}
                  placeholder="Tell readers about yourself and your work"
                ></textarea>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-1">Primary Genre</label>
                <select className="w-full p-2 border border-gray-200 dark:border-gray-700 rounded-md bg-white dark:bg-gray-900">
                  <option>Select a genre</option>
                  <option>Fantasy</option>
                  <option>Sci-Fi</option>
                  <option>Romance</option>
                  <option>Action</option>
                  <option>Horror</option>
                  <option>Comedy</option>
                  <option>Drama</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-1">Languages</label>
                <select className="w-full p-2 border border-gray-200 dark:border-gray-700 rounded-md bg-white dark:bg-gray-900">
                  <option>English</option>
                  <option>Spanish</option>
                  <option>French</option>
                  <option>German</option>
                  <option>Japanese</option>
                  <option>Chinese</option>
                  <option>Korean</option>
                </select>
              </div>
            </div>
            <div className="mt-4 text-right">
              <Button>Save Profile</Button>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-[Fredoka_One]">My Works</h2>
          <Button>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
              <path d="M5 12h14"/>
              <path d="M12 5v14"/>
            </svg>
            Create New Work
          </Button>
        </div>

        <div className="text-center py-12 bg-gray-100 dark:bg-gray-800 rounded-lg border border-dashed border-gray-300 dark:border-gray-700">
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mx-auto mb-4 text-gray-400">
            <path d="M12 3v12l8-8-8-8Z"/>
            <path d="M4 13h8"/>
            <path d="M9 17H4"/>
            <path d="M4 21h6"/>
            <path d="M17 21h-2"/>
            <path d="M21 21h-2"/>
          </svg>
          <h3 className="text-xl font-medium mb-2">No Published Works Yet</h3>
          <p className="text-gray-600 dark:text-gray-300 max-w-md mx-auto mb-6">
            Start creating your first webtoon or web novel to showcase in your portfolio.
          </p>
          <Button>Begin Your First Creation</Button>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Creator Analytics</CardTitle>
          <CardDescription>Track your audience and engagement</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-center py-8">
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Analytics will be available after you publish your first work.
            </p>
            <Button variant="outline">Learn About Analytics</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CreatePage;
