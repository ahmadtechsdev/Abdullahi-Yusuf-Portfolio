import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    if (location.pathname !== "/") {
      window.location.href = `/#${id}`;
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { label: "Home", action: () => window.location.href = "/" },
    { label: "About", action: () => scrollToSection("about") },
    { label: "Skills", action: () => scrollToSection("skills") },
    { label: "Projects", href: "/projects" },
    { label: "Contact", action: () => scrollToSection("contact") },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-lg shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link 
            to="/"
            className="text-2xl font-bold text-primary hover:text-accent transition-colors"
          >
            AS
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link, index) => (
              link.href ? (
                <Link
                  key={index}
                  to={link.href}
                  className="text-sm font-medium text-foreground hover:text-accent transition-colors relative group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ) : (
                <button
                  key={index}
                  onClick={link.action}
                  className="text-sm font-medium text-foreground hover:text-accent transition-colors relative group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
                </button>
              )
            ))}
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-accent hover:bg-accent/90 text-white"
            >
              Let's Talk
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t animate-fade-in">
          <div className="container mx-auto px-4 py-6 space-y-4">
            {navLinks.map((link, index) => (
              link.href ? (
                <Link
                  key={index}
                  to={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-base font-medium text-foreground hover:text-accent transition-colors py-2"
                >
                  {link.label}
                </Link>
              ) : (
                <button
                  key={index}
                  onClick={link.action}
                  className="block w-full text-left text-base font-medium text-foreground hover:text-accent transition-colors py-2"
                >
                  {link.label}
                </button>
              )
            ))}
            <Button
              onClick={() => scrollToSection("contact")}
              className="w-full bg-accent hover:bg-accent/90 text-white"
            >
              Let's Talk
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
