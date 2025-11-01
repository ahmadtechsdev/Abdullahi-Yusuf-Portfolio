import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

const About = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-primary">
            About Me
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text content */}
            <div className="space-y-6">
              <p className="text-lg text-foreground leading-relaxed">
                I'm a <span className="font-semibold text-accent">BIM Expert and Design Manager</span> specializing 
                in Building Information Modeling (BIM) implementation, modeling, coordination, and digital design delivery.
              </p>
              
              <p className="text-lg text-foreground leading-relaxed">
                With a strong foundation in structural design and extensive experience in BIM management, 
                I help teams deliver innovative, efficient, and data-driven project outcomes — fully aligned 
                with <span className="font-semibold text-accent">ISO 19650 standards</span>.
              </p>

              <div className="pt-4">
                <Button 
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-white font-semibold group"
                >
                  <Download className="mr-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
                  Download CV
                </Button>
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="relative w-80 h-80 mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-secondary to-accent rounded-full blur-2xl opacity-20"></div>
                <img
                  src={profilePhoto}
                  alt="Abdullahi Sulemuri"
                  className="relative w-full h-full object-cover rounded-full border-8 border-background shadow-2xl"
                />
                
                {/* Decorative ring */}
                <div className="absolute inset-0 rounded-full border-4 border-secondary/30 scale-110"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
