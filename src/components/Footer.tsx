const Footer = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Branding */}
            <div>
              <h3 className="text-2xl font-bold mb-2">Abdullahi Sulemuri</h3>
              <p className="text-gray-300">BIM Expert & Design Manager</p>
              <p className="text-sm text-gray-400 mt-2">
                ISO 19650-compliant project management and digital design delivery
              </p>
            </div>

            {/* Navigation */}
            <div>
              <h4 className="font-semibold mb-4 text-secondary">Quick Links</h4>
              <nav className="flex flex-wrap gap-4">
                <button 
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="text-gray-300 hover:text-secondary transition-colors"
                >
                  Home
                </button>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="text-gray-300 hover:text-secondary transition-colors"
                >
                  About
                </button>
                <button 
                  onClick={() => scrollToSection('skills')}
                  className="text-gray-300 hover:text-secondary transition-colors"
                >
                  Skills
                </button>
                <button 
                  onClick={() => scrollToSection('work')}
                  className="text-gray-300 hover:text-secondary transition-colors"
                >
                  Projects
                </button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-300 hover:text-secondary transition-colors"
                >
                  Contact
                </button>
              </nav>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              © 2025 Abdullahi Sulemuri. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
