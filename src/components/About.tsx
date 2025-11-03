import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="h-1 w-12 bg-primary rounded-full"></div>
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">About</span>
              <div className="h-1 w-12 bg-primary rounded-full"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              About Me
            </h2>
          </div>

          <div className="max-w-3xl mx-auto text-center">
            <div className="space-y-6">
              <p className="text-xl text-foreground leading-relaxed">
                I'm a <span className="font-semibold text-primary">BIM Expert and Design Manager</span> specializing 
                in Building Information Modeling (BIM) implementation, modeling, coordination, and digital design delivery.
              </p>
              
              <p className="text-xl text-foreground leading-relaxed">
                With a strong foundation in structural design and extensive experience in BIM management, 
                I help teams deliver innovative, efficient, and data-driven project outcomes — fully aligned 
                with <span className="font-semibold text-primary">ISO 19650 standards</span>.
              </p>

              <div className="pt-8">
                <Button 
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-white font-semibold group shadow-lg hover:shadow-xl transition-all"
                >
                  <Download className="mr-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
                  Download CV
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
