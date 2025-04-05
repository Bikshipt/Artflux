import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Monetize = () => {
  return (
    <div className="container mx-auto px-4 py-12 mt-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h1 className="font-[Fredoka_One] text-3xl md:text-4xl mb-4">Monetize Your Creations</h1>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Multiple ways to earn from your creative work, all integrated into one platform.
            Turn your passion into sustainable income.
          </p>
        </motion.div>

        <Tabs defaultValue="dashboard">
          <TabsList className="w-full justify-center mb-8">
            <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
            <TabsTrigger value="subscriptions">Subscriptions</TabsTrigger>
            <TabsTrigger value="nfts">NFT Collectibles</TabsTrigger>
            <TabsTrigger value="tipping">Tipping</TabsTrigger>
          </TabsList>

          <TabsContent value="dashboard">
            <MonetizationDashboard />
          </TabsContent>

          <TabsContent value="subscriptions">
            <SubscriptionPlanSetup />
          </TabsContent>

          <TabsContent value="nfts">
            <NFTCollectibles />
          </TabsContent>

          <TabsContent value="tipping">
            <TippingSystem />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

const MonetizationDashboard = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Total Earnings</CardTitle>
            <CardDescription>All time revenue</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">$0.00</div>
            <p className="text-xs text-muted-foreground mt-1">Start creating to earn</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Subscribers</CardTitle>
            <CardDescription>Monthly supporters</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">0</div>
            <p className="text-xs text-muted-foreground mt-1">Create subscription tiers</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">NFTs Sold</CardTitle>
            <CardDescription>Digital collectibles</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">0</div>
            <p className="text-xs text-muted-foreground mt-1">Create your first NFT</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Earnings Overview</CardTitle>
          <CardDescription>Track your revenue streams</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[300px] flex items-center justify-center">
            <div className="text-center max-w-md">
              <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mx-auto mb-4 text-gray-400">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
              </svg>
              <h3 className="text-lg font-semibold mb-2">No Earnings Data Yet</h3>
              <p className="text-gray-500 dark:text-gray-400 mb-6">
                Once you start earning, you'll see detailed analytics and charts here to help you track your revenue streams.
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                <Button variant="outline" size="sm">Learn More</Button>
                <Button size="sm">Get Started</Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Payment Methods</CardTitle>
            <CardDescription>Connect your accounts to receive payments</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-4 border rounded-lg">
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-3 text-primary">
                    <rect width="20" height="14" x="2" y="5" rx="2"/>
                    <line x1="2" x2="22" y1="10" y2="10"/>
                  </svg>
                  <div>
                    <h3 className="font-medium">Stripe</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Connect for card payments</p>
                  </div>
                </div>
                <Button>Connect</Button>
              </div>

              <div className="flex justify-between items-center p-4 border rounded-lg">
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-3 text-primary">
                    <path d="M22 12a10 10 0 1 1-20 0 10 10 0 0 1 20 0Z"/>
                    <path d="m8 12 4 4"/>
                    <path d="m16 8-8 8"/>
                    <path d="m16 12-4 4"/>
                  </svg>
                  <div>
                    <h3 className="font-medium">Crypto Wallet</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">For NFT sales and crypto tips</p>
                  </div>
                </div>
                <Button>Connect</Button>
              </div>

              <div className="flex justify-between items-center p-4 border rounded-lg">
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-3 text-primary">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  </svg>
                  <div>
                    <h3 className="font-medium">PayPal</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">For direct payments</p>
                  </div>
                </div>
                <Button>Connect</Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Marketplace Preview</CardTitle>
            <CardDescription>See how your content appears to buyers</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[250px] flex items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-lg border border-dashed border-gray-300 dark:border-gray-700">
              <div className="text-center px-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mx-auto mb-3 text-gray-400">
                  <path d="M11.767 19.089c4.924.868 6.14-6.025 1.216-6.894m-1.216 6.894L5.86 18.047m5.908 1.042-.347 1.97m1.563-8.864c4.924.869 6.14-6.025 1.215-6.893m-1.215 6.893-3.94-.694m5.155-6.2L8.29 4.26m5.908 1.042.348-1.97M7.48 20.364l3.126-17.727"/>
                </svg>
                <h3 className="text-lg font-medium mb-2">No Products Yet</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Create premium content or digital items to see how they'll appear in the marketplace.
                </p>
              </div>
            </div>
            <div className="mt-4 flex justify-end">
              <Button>Create Product</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

const SubscriptionPlanSetup = () => {
  return (
    <div className="space-y-8">
      <div className="text-center max-w-2xl mx-auto mb-8">
        <h2 className="text-2xl font-[Fredoka_One] mb-4">Subscription Tiers</h2>
        <p className="text-gray-600 dark:text-gray-300">
          Create subscription plans to offer exclusive content and benefits to your supporters.
          Set up recurring revenue streams for sustainable income.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="border-2 border-gray-200 dark:border-gray-700 hover:border-primary dark:hover:border-primary transition-colors">
          <CardHeader className="text-center pb-2">
            <CardTitle>Basic Tier</CardTitle>
            <CardDescription>For casual supporters</CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <div className="text-4xl font-bold mb-6">$5<span className="text-lg font-normal text-gray-500 dark:text-gray-400">/mo</span></div>
            <ul className="space-y-2 text-sm mb-6 text-left">
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-secondary mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>Early access to new content</span>
              </li>
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-secondary mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>Supporter badge on profile</span>
              </li>
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-secondary mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>Ad-free reading experience</span>
              </li>
            </ul>
            <Button className="w-full">Edit Tier</Button>
          </CardContent>
        </Card>

        <Card className="border-2 border-primary dark:border-primary relative">
          <Badge className="absolute top-0 right-0 transform translate-x-1/3 -translate-y-1/3 bg-accent">Popular</Badge>
          <CardHeader className="text-center pb-2">
            <CardTitle>Premium Tier</CardTitle>
            <CardDescription>For dedicated fans</CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <div className="text-4xl font-bold mb-6">$12<span className="text-lg font-normal text-gray-500 dark:text-gray-400">/mo</span></div>
            <ul className="space-y-2 text-sm mb-6 text-left">
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-secondary mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>All Basic tier benefits</span>
              </li>
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-secondary mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>Exclusive bonus episodes</span>
              </li>
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-secondary mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>Behind-the-scenes content</span>
              </li>
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-secondary mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>Monthly live Q&A sessions</span>
              </li>
            </ul>
            <Button className="w-full">Edit Tier</Button>
          </CardContent>
        </Card>

        <Card className="border-2 border-gray-200 dark:border-gray-700 hover:border-primary dark:hover:border-primary transition-colors">
          <CardHeader className="text-center pb-2">
            <CardTitle>Ultimate Tier</CardTitle>
            <CardDescription>For your biggest supporters</CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <div className="text-4xl font-bold mb-6">$25<span className="text-lg font-normal text-gray-500 dark:text-gray-400">/mo</span></div>
            <ul className="space-y-2 text-sm mb-6 text-left">
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-secondary mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>All Premium tier benefits</span>
              </li>
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-secondary mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>Character naming rights</span>
              </li>
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-secondary mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>Creative input opportunities</span>
              </li>
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-secondary mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>Free digital collectibles</span>
              </li>
            </ul>
            <Button className="w-full">Edit Tier</Button>
          </CardContent>
        </Card>
      </div>

      <div className="text-center mt-8">
        <Button variant="outline" className="mr-3">Preview Subscription Page</Button>
        <Button>Create New Tier</Button>
      </div>

      <Card className="mt-8">
        <CardHeader>
          <CardTitle>Subscriber Management</CardTitle>
          <CardDescription>Manage your subscribers and their access</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-48 flex items-center justify-center">
            <div className="text-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mx-auto mb-4 text-gray-400">
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
                <circle cx="9" cy="7" r="4"/>
                <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
              </svg>
              <h3 className="text-lg font-medium mb-2">No Subscribers Yet</h3>
              <p className="text-gray-500 dark:text-gray-400 max-w-md mx-auto">
                Promote your subscription tiers to your audience to gain subscribers.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

const NFTCollectibles = () => {
  return (
    <div className="space-y-8">
      <div className="text-center max-w-2xl mx-auto mb-8">
        <h2 className="text-2xl font-[Fredoka_One] mb-4">Digital Collectibles</h2>
        <p className="text-gray-600 dark:text-gray-300">
          Create and sell limited edition digital collectibles based on your work.
          Offer fans unique ownership of special moments and artwork.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="hover:shadow-md transition-shadow">
          <CardContent className="p-0">
            <div className="relative aspect-square bg-gradient-to-r from-primary/20 to-secondary/20 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
                <path d="M5 12h14"/>
                <path d="M12 5v14"/>
              </svg>
            </div>
            <div className="p-4">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-semibold">Create New NFT</h3>
                <Badge variant="outline" className="bg-gray-100 dark:bg-gray-800">New</Badge>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Turn your artwork into digital collectibles</p>
              <Button className="w-full">Get Started</Button>
            </div>
          </CardContent>
        </Card>

        <div className="col-span-1 md:col-span-2 bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-4">NFT Creation Guide</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex flex-col">
                <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 mb-3 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <rect width="18" height="18" x="3" y="3" rx="2" ry="2"/>
                    <circle cx="9" cy="9" r="2"/>
                    <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/>
                  </svg>
                </div>
                <h4 className="font-medium mb-1">1. Select Artwork</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">Choose your best piece or create something special</p>
              </div>
              <div className="flex flex-col">
                <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 mb-3 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <path d="M22 12a10 10 0 1 1-20 0 10 10 0 0 1 20 0Z"/>
                    <path d="m8 12 4 4"/>
                    <path d="m16 8-8 8"/>
                    <path d="m16 12-4 4"/>
                  </svg>
                </div>
                <h4 className="font-medium mb-1">2. Mint the NFT</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">We'll guide you through the blockchain process</p>
              </div>
              <div className="flex flex-col">
                <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 mb-3 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <rect width="20" height="14" x="2" y="5" rx="2"/>
                    <line x1="2" x2="22" y1="10" y2="10"/>
                  </svg>
                </div>
                <h4 className="font-medium mb-1">3. Set Up Sale</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">Determine pricing and availability</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>NFT Marketplace</CardTitle>
          <CardDescription>Your collectibles for sale</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-64 flex items-center justify-center">
            <div className="text-center max-w-md">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mx-auto mb-4 text-gray-400">
                <path d="M2 9V5c0-1.1.9-2 2-2h4"/>
                <path d="M22 9V5c0-1.1-.9-2-2-2h-4"/>
                <path d="M9 2h6"/>
                <path d="M3 10a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V10Z"/>
                <path d="M14 15h-4"/>
              </svg>
              <h3 className="text-lg font-medium mb-2">Your NFT Collection is Empty</h3>
              <p className="text-gray-500 dark:text-gray-400 mb-4">
                Create your first NFT collectible to get started. Your fans will be able to purchase and own a piece of your creative universe.
              </p>
              <div className="flex justify-center">
                <Button>Create First Collectible</Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

const TippingSystem = () => {
  return (
    <div className="space-y-8">
      <div className="text-center max-w-2xl mx-auto mb-8">
        <h2 className="text-2xl font-[Fredoka_One] mb-4">Tipping & Support</h2>
        <p className="text-gray-600 dark:text-gray-300">
          Enable your fans to show appreciation with direct tips and support.
          Easy to set up, simple for fans to use.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Tip Button Setup</CardTitle>
            <CardDescription>Configure how fans can support you</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-medium mb-2">Suggested Amounts</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="py-2 px-3">$1</Badge>
                  <Badge variant="outline" className="py-2 px-3">$3</Badge>
                  <Badge variant="outline" className="py-2 px-3">$5</Badge>
                  <Badge variant="outline" className="py-2 px-3">$10</Badge>
                  <Badge variant="outline" className="py-2 px-3 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
                      <path d="M5 12h14"/>
                      <path d="M12 5v14"/>
                    </svg>
                    Add
                  </Badge>
                </div>
              </div>

              <div>
                <h4 className="text-sm font-medium mb-2">Thank You Message</h4>
                <textarea 
                  className="w-full p-3 min-h-[100px] border border-gray-200 dark:border-gray-700 rounded-md resize-none"
                  placeholder="Write a personal message that appears when someone tips you..."
                ></textarea>
              </div>

              <div>
                <h4 className="text-sm font-medium mb-2">Customize Tip Button</h4>
                <div className="flex items-center space-x-4">
                  <div>
                    <Button size="sm">Support Me</Button>
                  </div>
                  <div>
                    <input 
                      type="text" 
                      className="w-full p-2 border border-gray-200 dark:border-gray-700 rounded-md bg-white dark:bg-gray-900"
                      placeholder="Custom button text"
                    />
                  </div>
                </div>
              </div>

              <div className="flex justify-end">
                <Button>Save Settings</Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Tip History</CardTitle>
            <CardDescription>Recent support from your fans</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-64 flex items-center justify-center">
              <div className="text-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mx-auto mb-4 text-gray-400">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                </svg>
                <h3 className="text-lg font-medium mb-2">No Tips Yet</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Your tip history will appear here once fans start supporting you.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Tip Page Preview</CardTitle>
          <CardDescription>See how your support page will look to fans</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="max-w-lg mx-auto bg-gray-50 dark:bg-gray-900 rounded-lg p-6">
            <div className="flex flex-col sm:flex-row items-center mb-6">
              <div className="sm:mr-6 mb-4 sm:mb-0">
                <div className="w-20 h-20 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-full w-full text-gray-400 p-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 20a6 6 0 0 0-12 0"/>
                    <circle cx="12" cy="10" r="4"/>
                    <circle cx="12" cy="12" r="10"/>
                  </svg>
                </div>
              </div>
              <div className="text-center sm:text-left">
                <h3 className="text-xl font-semibold mb-1">Your Name</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">Creator on ArtFlux</p>
                <p className="text-sm">Support my work if you enjoy my stories and art!</p>
              </div>
            </div>

            <div className="text-center mb-6">
              <h4 className="text-sm font-medium mb-3">Choose an amount</h4>
              <div className="flex justify-center flex-wrap gap-2 mb-4">
                <Button variant="outline" size="sm">$1</Button>
                <Button variant="outline" size="sm">$3</Button>
                <Button variant="outline" size="sm">$5</Button>
                <Button variant="outline" size="sm">$10</Button>
                <Button variant="outline" size="sm">Custom</Button>
              </div>
              <Button className="w-full sm:w-auto px-8">Support Me</Button>
            </div>

            <div className="text-center text-xs text-gray-500 dark:text-gray-400">
              Payments secured by ArtFlux
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Monetize;
