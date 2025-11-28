import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import profileHero from "@/assets/profile-hero.jpg";

const Hero = () => {
  const scrollToProjects = () => {
    window.location.href = "/projects";
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]"></div>
      <div className="absolute top-20 right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center justify-center">
            {/* Left side - Text content */}
            <div className="space-y-8 animate-fade-in order-1">
              <div className="inline-block">
                <span className="text-primary font-semibold text-sm uppercase tracking-wider bg-primary/10 px-6 py-3 rounded-full">
                  BIM Professional
                </span>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-foreground">
                Structural Engineer, <br />
                <span className="text-primary">Design Manager & BIM Expert</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                Delivering innovative, data-driven, and ISO 19650-aligned design solutions.
              </p>
              
              <div className="flex items-center gap-3 text-primary">
                <div className="h-px w-12 bg-primary"></div>
                <p className="text-base font-medium">University of Roehampton, London</p>
                <div className="h-px w-12 bg-primary"></div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button 
                  onClick={scrollToProjects}
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-white font-semibold group shadow-lg hover:shadow-xl transition-all"
                >
                  View My Work
                  <ArrowDown className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
                </Button>
                
                <Button 
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all"
                >
                  <a href="https://wa.me/447350167943" target="_blank" rel="noopener noreferrer">Get in Touch</a>
                </Button>
              </div>
            </div>

            {/* Right side - Image */}
            <div className="relative animate-fade-in order-2 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-md mx-auto lg:mx-0">
                <div className="absolute inset-0 bg-primary/10 rounded-3xl blur-2xl transform rotate-3"></div>
                <img
                  src={profileHero}
                  alt="Abdullahi Yusuf - BIM Expert & Design Manager"
                  className="relative rounded-3xl shadow-2xl w-full object-cover aspect-[3/4] border-4 border-white/50"
                />
                
                {/* Floating badge */}
                <div className="absolute -bottom-6 -right-6 bg-primary p-6 rounded-2xl shadow-xl transform hover:scale-105 transition-transform">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white">ISO</div>
                    <div className="text-xl font-bold text-white">19650</div>
                    <div className="text-xs text-white/80 mt-1">Certified</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-primary rounded-full"></div>
        </div>
      </div>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }

        .animate-fade-in-delay {
          animation: fade-in 1s ease-out 0.3s both;
        }

        .bg-grid-pattern {
          background-image: 
            linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px);
          background-size: 50px 50px;
        }
      `}</style>
    </section>
  );
};

export default Hero;
