import { Link } from "wouter";

interface MobileNavProps {
  isOpen: boolean;
  navItems: { name: string; path: string }[];
  closeMobileMenu: () => void;
}

const MobileNav = ({ isOpen, navItems, closeMobileMenu }: MobileNavProps) => {
  if (!isOpen) return null;
  
  return (
    <div className="md:hidden bg-white dark:bg-gray-900 shadow-md">
      <div className="container mx-auto px-4 py-3 flex flex-col space-y-3">
        {navItems.map((item, index) => (
          <Link 
            key={item.path} 
            href={item.path}
            onClick={closeMobileMenu}
          >
            <a className={`py-2 font-semibold ${index === 0 ? 'text-primary dark:text-secondary' : ''} ${index < navItems.length - 1 ? 'border-b border-gray-100 dark:border-gray-800' : ''}`}>
              {item.name}
            </a>
          </Link>
        ))}
        <button 
          className="w-full mt-4 py-2 rounded-full bg-gradient-to-r from-primary to-secondary text-white"
          onClick={closeMobileMenu}
        >
          Sign In
        </button>
      </div>
    </div>
  );
};

export default MobileNav;
