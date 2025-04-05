import { ReactNode, useState } from "react";
import { Link, useLocation } from "wouter";
import Logo from "@/components/ui/logo";
import ThemeToggle from "@/components/ui/theme-toggle";
import MobileNav from "@/components/ui/mobile-nav";
import Footer from "@/components/footer";

interface MainLayoutProps {
  children: ReactNode;
  theme: "light" | "dark";
  toggleTheme: () => void;
}

const MainLayout = ({ children, theme, toggleTheme }: MainLayoutProps) => {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Read", path: "/read" },
    { name: "Create", path: "/create" },
    { name: "Explore", path: "/explore" },
    { name: "Monetize", path: "/monetize" },
  ];

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <header className="fixed top-0 w-full z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm shadow-sm dark:shadow-gray-800/10">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/">
              <a className="flex items-center">
                <Logo />
                <span className="font-[Fredoka_One] text-2xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                  ArtFlux
                </span>
              </a>
            </Link>
          </div>

          <nav className="hidden md:flex space-x-8 items-center">
            {navItems.map((item) => (
              <Link key={item.path} href={item.path}>
                <a className={`font-[Nunito] font-semibold ${location === item.path ? 'text-primary dark:text-secondary' : 'hover:text-primary dark:hover:text-secondary'} transition-colors`}>
                  {item.name}
                </a>
              </Link>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
            
            <button className="hidden md:flex items-center space-x-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-primary to-secondary text-white hover:opacity-90 transition-opacity">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user-circle">
                <circle cx="12" cy="12" r="10"/>
                <circle cx="12" cy="10" r="3"/>
                <path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662"/>
              </svg>
              <span>Sign In</span>
            </button>
            
            <button 
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              onClick={toggleMobileMenu}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-600 dark:text-gray-300">
                <line x1="4" x2="20" y1="12" y2="12"/>
                <line x1="4" x2="20" y1="6" y2="6"/>
                <line x1="4" x2="20" y1="18" y2="18"/>
              </svg>
            </button>
          </div>
        </div>

        <MobileNav 
          isOpen={mobileMenuOpen} 
          navItems={navItems} 
          closeMobileMenu={() => setMobileMenuOpen(false)} 
        />
      </header>

      <main className="flex-grow pt-16">
        {children}
      </main>

      <Footer />
    </div>
  );
};

export default MainLayout;
