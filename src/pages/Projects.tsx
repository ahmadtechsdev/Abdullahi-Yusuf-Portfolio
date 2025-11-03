import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import healthcareFacility from "@/assets/projects/healthcare-facility.jpg";
import residentialTower from "@/assets/projects/residential-tower.jpg";
import arVrIntegration from "@/assets/projects/ar-vr-integration.jpg";
import mixedUseDevelopment from "@/assets/projects/mixed-use-development.jpg";
import isoImplementation from "@/assets/projects/iso-implementation.jpg";
import workflowOptimization from "@/assets/projects/workflow-optimization.jpg";

const projects = [
  {
    thumbnail: healthcareFacility,
    title: "Healthcare Facility BIM Coordination",
    description: "Managed multidisciplinary BIM coordination for a large hospital project."
  },
  {
    thumbnail: residentialTower,
    title: "Residential Tower Digital Delivery",
    description: "Oversaw BIM implementation for high-rise residential development."
  },
  {
    thumbnail: arVrIntegration,
    title: "Infrastructure AR/VR Integration",
    description: "Developed AR/VR-enabled BIM visualization tools for stakeholder collaboration."
  },
  {
    thumbnail: mixedUseDevelopment,
    title: "Mixed-Use Development Coordination",
    description: "Led BIM coordination for complex mixed-use development."
  },
  {
    thumbnail: isoImplementation,
    title: "ISO 19650 Implementation Project",
    description: "Spearheaded organization-wide ISO 19650 implementation."
  },
  {
    thumbnail: workflowOptimization,
    title: "Digital Workflow Optimization",
    description: "Optimized BIM workflows with automation and improved collaboration."
  }
];

const Projects = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="h-1 w-12 bg-primary rounded-full"></div>
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">Portfolio</span>
              <div className="h-1 w-12 bg-primary rounded-full"></div>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary mb-6">
              Projects & Work
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              A comprehensive showcase of BIM coordination, design management, and digital delivery projects 
              that demonstrate expertise in ISO 19650-compliant workflows and innovative solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <Card 
                  key={index}
                  className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/50 overflow-hidden animate-fade-in cursor-pointer bg-white"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Thumbnail */}
                  <div className="relative overflow-hidden aspect-video">
                    <img
                      src={project.thumbnail}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6 space-y-3">
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                      {project.title}
                    </h3>
                    
                    <p className="text-muted-foreground leading-relaxed line-clamp-2">
                      {project.description}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Start Your Next Project?
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Let's collaborate to bring your vision to life with cutting-edge BIM solutions 
              and ISO 19650-compliant workflows.
            </p>
            <button
              onClick={() => {
                window.location.href = "/#contact";
              }}
              className="inline-flex items-center gap-2 bg-white hover:bg-white/90 text-primary font-semibold px-8 py-4 rounded-lg text-lg transition-all hover:scale-105 shadow-lg"
            >
              Get in Touch
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Projects;
