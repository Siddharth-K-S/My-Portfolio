import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Drawer, DrawerContent, DrawerTrigger } from '@/components/ui/drawer';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Resume', path: '/resume' },
    { name: 'Contact Me', path: '/contact' }
  ];

  const handleMobileMenuClose = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav 
      className={`fixed top-0 w-full z-40 transition-all duration-300 backdrop-blur-sm ${
        isScrolled ? 'py-4 bg-background/50' : 'py-6 bg-transparent'
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-4">
        <Link to="/" className="text-2xl font-bold text-gradient-primary">
          Siddharth KS
        </Link>
        
        <div className="flex items-center gap-6">
          {/* Desktop Menu */}
          <div className="hidden md:flex gap-6">
            {navLinks.map(link => (
              <Link 
                key={link.path} 
                to={link.path}
                className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <Drawer open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <DrawerTrigger asChild>
                <button 
                  className="p-2 text-foreground hover:text-primary transition-colors"
                  aria-label="Toggle mobile menu"
                >
                  <Menu size={24} />
                </button>
              </DrawerTrigger>
              <DrawerContent className="bg-background/70 backdrop-blur-sm text-foreground">
                <div className="flex flex-col p-6 space-y-4">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-lg font-semibold text-gradient-primary">Navigation</span>
                    <button 
                      onClick={handleMobileMenuClose}
                      className="p-2 text-foreground hover:text-primary transition-colors"
                      aria-label="Close mobile menu"
                    >
                      <X size={20} />
                    </button>
                  </div>
                  {navLinks.map(link => (
                    <Link 
                      key={link.path} 
                      to={link.path}
                      onClick={handleMobileMenuClose}
                      className={`text-lg py-3 px-4 rounded-lg transition-colors hover:bg-accent hover:text-accent-foreground ${
                        location.pathname === link.path 
                          ? 'bg-primary text-primary-foreground font-medium' 
                          : 'text-foreground'
                      }`}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </DrawerContent>
            </Drawer>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
