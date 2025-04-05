import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const faqs = [
  {
    question: "How do I start publishing my work on ArtFlux?",
    answer: "To start publishing on ArtFlux, create an account, go to your dashboard, and click on 'Create New Work'. You can upload your content, set up chapters or episodes, add cover art, and publish when ready. Our platform supports various formats including webtoons, web novels, and graphic art."
  },
  {
    question: "What monetization options are available for creators?",
    answer: "ArtFlux offers multiple monetization paths: subscription tiers for exclusive content, tipping system for direct support, and NFT collectibles for special artwork. You can set these up in your creator dashboard under the 'Monetize' section."
  },
  {
    question: "How does the collaboration feature work?",
    answer: "Our collaboration tools allow multiple creators to work on a project simultaneously. You can invite collaborators with specific permissions (writer, artist, editor) from your project page. Each collaborator can work on their assigned sections, and changes are synced in real-time."
  },
  {
    question: "What file formats are supported for uploads?",
    answer: "ArtFlux supports JPG, PNG, and SVG for images, with a maximum file size of 10MB per image. For text, you can work directly in our editor or import TXT, DOCX, or HTML files. Video content supports MP4 files up to 100MB."
  },
  {
    question: "How are payouts processed?",
    answer: "Creator earnings are calculated monthly and paid out by the 15th of each month. You need to reach a minimum threshold of $50 to receive a payout. We support multiple payment methods including direct deposit, PayPal, and select cryptocurrency options."
  }
];

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log({ name, email, subject, message });
  };

  return (
    <div className="container mx-auto px-4 py-12 mt-8">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="font-[Fredoka_One] text-3xl md:text-4xl mb-4">Contact & Support</h1>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Have questions or need assistance? We're here to help you navigate the world of digital storytelling.
          </p>
        </motion.div>

        <Tabs defaultValue="contact" className="mb-12">
          <TabsList className="w-full justify-center mb-6">
            <TabsTrigger value="contact">Contact Us</TabsTrigger>
            <TabsTrigger value="faq">FAQs</TabsTrigger>
            <TabsTrigger value="community">Community</TabsTrigger>
          </TabsList>

          <TabsContent value="contact">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Send Us a Message</CardTitle>
                    <CardDescription>We'll get back to you as soon as possible</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label htmlFor="name" className="text-sm font-medium">
                            Name
                          </label>
                          <Input
                            id="name"
                            placeholder="Your name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="email" className="text-sm font-medium">
                            Email
                          </label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="your.email@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="subject" className="text-sm font-medium">
                          Subject
                        </label>
                        <Input
                          id="subject"
                          placeholder="What is your message about?"
                          value={subject}
                          onChange={(e) => setSubject(e.target.value)}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-medium">
                          Message
                        </label>
                        <Textarea
                          id="message"
                          placeholder="Let us know how we can help..."
                          rows={6}
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          required
                        />
                      </div>
                      <div className="text-right">
                        <Button type="submit">Send Message</Button>
                      </div>
                    </form>
                  </CardContent>
                </Card>
              </div>

              <div>
                <Card>
                  <CardHeader>
                    <CardTitle>Contact Information</CardTitle>
                    <CardDescription>Reach out through multiple channels</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-3 text-primary dark:text-secondary">
                        <rect width="20" height="16" x="2" y="4" rx="2"/>
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                      </svg>
                      <div>
                        <h3 className="font-medium mb-1">Email</h3>
                        <p className="text-sm">support@artflux.io</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                          Response time: 1-2 business days
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-3 text-primary dark:text-secondary">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                      </svg>
                      <div>
                        <h3 className="font-medium mb-1">Support Hours</h3>
                        <p className="text-sm">Monday - Friday</p>
                        <p className="text-sm">9:00 AM - 6:00 PM EST</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-3 text-primary dark:text-secondary">
                        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/>
                        <polyline points="14 2 14 8 20 8"/>
                        <line x1="16" x2="8" y1="13" y2="13"/>
                        <line x1="16" x2="8" y1="17" y2="17"/>
                        <line x1="10" x2="8" y1="9" y2="9"/>
                      </svg>
                      <div>
                        <h3 className="font-medium mb-1">Help Center</h3>
                        <p className="text-sm">Visit our comprehensive knowledge base</p>
                        <Button variant="link" className="px-0 h-auto text-xs text-primary dark:text-secondary">
                          Browse Articles
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="mt-6">
                  <CardHeader>
                    <CardTitle>Follow Us</CardTitle>
                    <CardDescription>Stay updated on social media</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex space-x-4">
                      <Button variant="outline" size="icon" className="rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
                        </svg>
                        <span className="sr-only">Twitter</span>
                      </Button>
                      <Button variant="outline" size="icon" className="rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                        </svg>
                        <span className="sr-only">Instagram</span>
                      </Button>
                      <Button variant="outline" size="icon" className="rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                        </svg>
                        <span className="sr-only">Facebook</span>
                      </Button>
                      <Button variant="outline" size="icon" className="rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/>
                          <path d="m10 15 5-3-5-3z"/>
                        </svg>
                        <span className="sr-only">YouTube</span>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="faq">
            <Card>
              <CardHeader>
                <CardTitle>Frequently Asked Questions</CardTitle>
                <CardDescription>Find quick answers to common questions</CardDescription>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  {faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger>{faq.question}</AccordionTrigger>
                      <AccordionContent>
                        <p className="text-gray-600 dark:text-gray-300">{faq.answer}</p>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
                <div className="mt-6 text-center">
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Didn't find what you're looking for? Contact our support team.
                  </p>
                  <Button
                    onClick={() => document.querySelector('[data-value="contact"]')?.dispatchEvent(new Event('click'))}
                  >
                    Contact Support
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="community">
            <Card>
              <CardHeader>
                <CardTitle>Community Forum</CardTitle>
                <CardDescription>Connect with other creators and readers</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-64 flex flex-col items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mb-4 text-gray-400">
                    <path d="M17 12a5 5 0 0 0-5-5c-2.76 0-5 2.24-5 5s2.24 5 5 5a4.99 4.99 0 0 0 4.93-5.5"/>
                    <path d="M14.5 19 17 21l2.5-2"/>
                    <path d="M14.5 5 17 3l2.5 2"/>
                    <path d="M10 7v2a3 3 0 0 0 3 3h2"/>
                  </svg>
                  <h3 className="text-lg font-medium mb-2">Community Forum Coming Soon</h3>
                  <p className="text-center text-gray-500 dark:text-gray-400 mb-4 max-w-md">
                    We're building a vibrant community space for creators and readers to connect, share ideas, and collaborate. Stay tuned!
                  </p>
                  <Button>Get Notified When Launched</Button>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Creator Groups</CardTitle>
                  <CardDescription>Join specialized creator communities</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                      <h3 className="font-medium mb-1">Webtoon Artists</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                        Connect with other webtoon artists to share techniques, feedback, and collaborations.
                      </p>
                      <Button variant="outline" size="sm">Join via Discord</Button>
                    </div>
                    <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                      <h3 className="font-medium mb-1">Web Novel Authors</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                        A community for writers to discuss storytelling, character development, and publishing.
                      </p>
                      <Button variant="outline" size="sm">Join via Discord</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Reader Clubs</CardTitle>
                  <CardDescription>Discuss your favorite stories</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                      <h3 className="font-medium mb-1">Fantasy Fanatics</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                        For lovers of magic, mystical creatures, and epic quests.
                      </p>
                      <Button variant="outline" size="sm">Join via Discord</Button>
                    </div>
                    <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                      <h3 className="font-medium mb-1">Sci-Fi Explorers</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                        Discuss futuristic technologies, space adventures, and dystopian worlds.
                      </p>
                      <Button variant="outline" size="sm">Join via Discord</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Contact;
