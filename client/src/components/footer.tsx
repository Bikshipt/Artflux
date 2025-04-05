import Logo from "@/components/ui/logo";
import { Link } from "wouter";

const Footer = () => {
  const footerLinks = {
    company: [
      { name: "About Us", href: "/about" },
      { name: "Careers", href: "#" },
      { name: "Press", href: "#" },
      { name: "Blog", href: "#" }
    ],
    content: [
      { name: "Webtoons", href: "/read" },
      { name: "Web Novels", href: "/read" },
      { name: "Artwork", href: "/explore" },
      { name: "Soundtracks", href: "#" }
    ],
    creators: [
      { name: "Get Started", href: "/create" },
      { name: "Creator Academy", href: "#" },
      { name: "Guidelines", href: "#" },
      { name: "Monetization", href: "/monetize" }
    ],
    support: [
      { name: "Help Center", href: "#" },
      { name: "Contact Us", href: "/contact" },
      { name: "Terms of Service", href: "#" },
      { name: "Privacy Policy", href: "#" }
    ]
  };

  const socialLinks = [
    { name: "Twitter", icon: "twitter" },
    { name: "Instagram", icon: "instagram" },
    { name: "Discord", icon: "discord" },
    { name: "YouTube", icon: "youtube" }
  ];

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="font-[Fredoka_One] text-xl mb-4">ArtFlux</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <Link href={link.href}>
                    <a className="hover:text-secondary transition-colors">{link.name}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-[Fredoka_One] text-xl mb-4">Content</h3>
            <ul className="space-y-2">
              {footerLinks.content.map((link, index) => (
                <li key={index}>
                  <Link href={link.href}>
                    <a className="hover:text-secondary transition-colors">{link.name}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-[Fredoka_One] text-xl mb-4">Creators</h3>
            <ul className="space-y-2">
              {footerLinks.creators.map((link, index) => (
                <li key={index}>
                  <Link href={link.href}>
                    <a className="hover:text-secondary transition-colors">{link.name}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-[Fredoka_One] text-xl mb-4">Support</h3>
            <ul className="space-y-2">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <Link href={link.href}>
                    <a className="hover:text-secondary transition-colors">{link.name}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <Logo />
            <p className="text-gray-400">© {new Date().getFullYear()} ArtFlux. All rights reserved.</p>
          </div>
          <div className="flex space-x-4">
            {socialLinks.map((social, index) => (
              <a 
                key={index}
                href="#" 
                className="text-gray-400 hover:text-white transition-colors"
                aria-label={social.name}
              >
                <SocialIcon name={social.icon} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

interface SocialIconProps {
  name: string;
}

const SocialIcon = ({ name }: SocialIconProps) => {
  const icons: Record<string, JSX.Element> = {
    twitter: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
      </svg>
    ),
    instagram: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
      </svg>
    ),
    discord: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v18l4-4 4 4 4-4V4z"/>
      </svg>
    ),
    youtube: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/>
        <path d="m10 15 5-3-5-3z"/>
      </svg>
    )
  };

  return icons[name] || null;
};

export default Footer;
