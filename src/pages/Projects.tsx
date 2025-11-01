import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, Building2, Globe, Users, FileCheck, Workflow } from "lucide-react";

const projects = [
  {
    icon: Building2,
    title: "Healthcare Facility BIM Coordination",
    description: "Managed multidisciplinary BIM coordination for a large hospital project, ensuring seamless integration across architectural, structural, and MEP disciplines.",
    details: [
      "Coordinated 15+ disciplines across the project lifecycle",
      "Reduced clashes by 85% through systematic coordination",
      "Implemented ISO 19650 information management protocols",
      "Delivered project 2 months ahead of schedule"
    ],
    tags: ["BIM Coordination", "Healthcare", "ISO 19650", "Navisworks"],
    gradient: "from-blue-500/10 to-cyan-500/10",
    accent: "from-blue-500 to-cyan-500"
  },
  {
    icon: Building,
    title: "Residential Tower Digital Delivery",
    description: "Oversaw BIM implementation for high-rise residential development using ISO 19650 workflows and advanced digital delivery methodologies.",
    details: [
      "30-story residential tower with 250+ units",
      "Established Common Data Environment (CDE)",
      "Integrated AR/VR for stakeholder reviews",
      "Achieved Level 2 BIM compliance"
    ],
    tags: ["Digital Delivery", "Residential", "High-Rise", "Revit"],
    gradient: "from-teal-500/10 to-emerald-500/10",
    accent: "from-teal-500 to-emerald-500"
  },
  {
    icon: Globe,
    title: "Infrastructure AR/VR Integration",
    description: "Developed AR/VR-enabled BIM visualization tools for stakeholder collaboration, transforming how clients interact with design data.",
    details: [
      "Created immersive VR walkthroughs for design reviews",
      "Implemented AR for on-site verification",
      "Enhanced stakeholder engagement by 90%",
      "Reduced design changes by 40%"
    ],
    tags: ["AR/VR", "Innovation", "Visualization", "Digital Twin"],
    gradient: "from-purple-500/10 to-pink-500/10",
    accent: "from-purple-500 to-pink-500"
  },
  {
    icon: Users,
    title: "Mixed-Use Development Coordination",
    description: "Led BIM coordination for a complex mixed-use development combining retail, office, and residential spaces with integrated MEP systems.",
    details: [
      "Coordinated across 8 major contractors",
      "Managed 12,000+ BIM objects",
      "Weekly coordination meetings and clash reports",
      "Zero major conflicts during construction"
    ],
    tags: ["Mixed-Use", "Coordination", "Team Leadership", "AutoCAD"],
    gradient: "from-orange-500/10 to-red-500/10",
    accent: "from-orange-500 to-red-500"
  },
  {
    icon: FileCheck,
    title: "ISO 19650 Implementation Project",
    description: "Spearheaded organization-wide ISO 19650 implementation, establishing standardized information management processes.",
    details: [
      "Developed BIM Execution Plans (BEP)",
      "Trained 50+ staff members",
      "Created company-wide BIM standards",
      "Achieved ISO 19650 certification"
    ],
    tags: ["ISO 19650", "Standards", "Information Management", "QA/QC"],
    gradient: "from-green-500/10 to-teal-500/10",
    accent: "from-green-500 to-teal-500"
  },
  {
    icon: Workflow,
    title: "Digital Workflow Optimization",
    description: "Optimized BIM workflows across the organization, implementing automation and improving collaboration efficiency.",
    details: [
      "Reduced modeling time by 35%",
      "Automated clash detection processes",
      "Integrated Dynamo for parametric workflows",
      "Enhanced team productivity by 50%"
    ],
    tags: ["Workflow", "Automation", "Efficiency", "Dynamo"],
    gradient: "from-indigo-500/10 to-blue-500/10",
    accent: "from-indigo-500 to-blue-500"
  }
];

const Projects = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="h-1 w-12 bg-secondary rounded-full"></div>
              <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Portfolio</span>
              <div className="h-1 w-12 bg-secondary rounded-full"></div>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary mb-6">
              Projects & Work
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed">
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
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => {
                const Icon = project.icon;
                return (
                  <Card 
                    key={index}
                    className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 hover:border-secondary/50 overflow-hidden animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className={`h-2 bg-gradient-to-r ${project.gradient} group-hover:h-3 transition-all duration-300`}></div>
                    
                    <CardHeader className="space-y-4">
                      <div className="relative">
                        <div className={`absolute inset-0 bg-gradient-to-r ${project.accent} opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500`}></div>
                        <div className={`relative p-4 rounded-2xl bg-gradient-to-br ${project.gradient} inline-block group-hover:scale-110 transition-transform duration-300`}>
                          <Icon className="h-8 w-8 text-accent" />
                        </div>
                      </div>
                      
                      <CardTitle className="text-xl font-bold text-foreground group-hover:text-accent transition-colors line-clamp-2">
                        {project.title}
                      </CardTitle>
                      
                      <CardDescription className="text-base leading-relaxed">
                        {project.description}
                      </CardDescription>
                    </CardHeader>
                    
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        {project.details.map((detail, i) => (
                          <div key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-1.5 flex-shrink-0"></div>
                            <span>{detail}</span>
                          </div>
                        ))}
                      </div>
                      
                      <div className="flex flex-wrap gap-2 pt-2">
                        {project.tags.map((tag, i) => (
                          <Badge 
                            key={i}
                            variant="secondary"
                            className="bg-secondary/10 text-accent hover:bg-secondary/20 transition-colors"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-primary to-primary/90">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Start Your Next Project?
            </h2>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              Let's collaborate to bring your vision to life with cutting-edge BIM solutions 
              and ISO 19650-compliant workflows.
            </p>
            <button
              onClick={() => {
                window.location.href = "/#contact";
              }}
              className="inline-flex items-center gap-2 bg-secondary hover:bg-secondary/90 text-primary font-semibold px-8 py-4 rounded-lg text-lg transition-all hover:scale-105"
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
