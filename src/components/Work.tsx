import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, Building2, Globe } from "lucide-react";

const projects = [
  {
    icon: Building2,
    title: "Healthcare Facility BIM Coordination",
    description: "Managed multidisciplinary BIM coordination for a large hospital project.",
    tags: ["BIM Coordination", "Healthcare", "ISO 19650"],
    gradient: "from-blue-500/10 to-cyan-500/10"
  },
  {
    icon: Building,
    title: "Residential Tower Digital Delivery",
    description: "Oversaw BIM implementation for high-rise residential development using ISO 19650 workflows.",
    tags: ["Digital Delivery", "Residential", "High-Rise"],
    gradient: "from-teal-500/10 to-emerald-500/10"
  },
  {
    icon: Globe,
    title: "Infrastructure AR/VR Integration",
    description: "Developed AR/VR-enabled BIM visualization tools for stakeholder collaboration.",
    tags: ["AR/VR", "Innovation", "Visualization"],
    gradient: "from-purple-500/10 to-pink-500/10"
  }
];

const Work = () => {
  return (
    <section id="work" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="h-1 w-12 bg-secondary rounded-full"></div>
              <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Portfolio</span>
              <div className="h-1 w-12 bg-secondary rounded-full"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Work Done
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A selection of BIM coordination, design, and digital delivery projects
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => {
              const Icon = project.icon;
              return (
                <Card 
                  key={index}
                  className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-secondary/50 overflow-hidden"
                >
                  <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>
                  
                  <CardHeader>
                    <div className="mb-4">
                      <div className="p-4 rounded-2xl bg-gradient-to-br from-secondary/10 to-accent/10 inline-block group-hover:scale-110 transition-transform">
                        <Icon className="h-8 w-8 text-accent" />
                      </div>
                    </div>
                    <CardTitle className="text-xl font-bold text-foreground group-hover:text-accent transition-colors">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-base">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, i) => (
                        <Badge 
                          key={i}
                          variant="secondary"
                          className="bg-secondary/10 text-accent hover:bg-secondary/20"
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
  );
};

export default Work;
