import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

const Hero = () => {
  const scrollToProjects = () => {
    window.location.href = "/projects";
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary to-primary/90 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-20 right-20 w-72 h-72 bg-secondary/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="text-white space-y-6 animate-fade-in">
            <div className="inline-block">
              <span className="text-secondary font-semibold text-sm uppercase tracking-wider bg-secondary/10 px-4 py-2 rounded-full">
                BIM Professional
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              I am a BIM Expert & Design Manager
            </h1>
            
            <p className="text-xl text-gray-200 leading-relaxed max-w-xl">
              Delivering innovative, data-driven, and ISO 19650-aligned design solutions.
            </p>
            
            <div className="flex items-center gap-3 text-secondary">
              <div className="h-px w-12 bg-secondary"></div>
              <p className="text-base font-medium">University of Roehampton, London</p>
            </div>
            
            <div className="flex gap-4 pt-4">
              <Button 
                onClick={scrollToProjects}
                size="lg"
                className="bg-secondary hover:bg-secondary/90 text-primary font-semibold group"
              >
                View My Work
                <ArrowDown className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
              </Button>
              
              <Button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                size="lg"
                variant="outline"
                className="border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50"
              >
                Get in Touch
              </Button>
            </div>
          </div>

          {/* Right side - Image */}
          <div className="relative animate-fade-in-delay">
            <div className="relative w-full max-w-lg mx-auto">
              <div className="absolute inset-0 bg-secondary/20 rounded-3xl blur-2xl transform rotate-6"></div>
              <img
                src={profilePhoto}
                alt="Abdullahi Sulemuri - BIM Expert & Design Manager"
                className="relative rounded-3xl shadow-2xl w-full object-cover aspect-[3/4] border-4 border-white/10"
              />
              
              {/* Floating badge */}
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl transform hover:scale-105 transition-transform">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">ISO</div>
                  <div className="text-xl font-bold text-accent">19650</div>
                  <div className="text-xs text-muted-foreground mt-1">Certified</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white rounded-full"></div>
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
