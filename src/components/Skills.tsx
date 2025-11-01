import { Building2, Boxes, FileCheck2, Ruler, Wrench, Pen, Compass, Search, BookCheck, Users, Workflow } from "lucide-react";
import { Card } from "@/components/ui/card";

const skills = [
  { icon: Building2, title: "BIM Modeling, Management & Coordination" },
  { icon: Boxes, title: "BIM AR & VR Implementation" },
  { icon: FileCheck2, title: "Design Management & Digital Delivery" },
  { icon: Ruler, title: "Structural Design & Technical Oversight" },
  { icon: Wrench, title: "Revit" },
  { icon: Pen, title: "AutoCAD" },
  { icon: Compass, title: "Navisworks" },
  { icon: BookCheck, title: "ISO 19650 Implementation" },
  { icon: Search, title: "Clash Detection & Model Validation" },
  { icon: FileCheck2, title: "Information Management & QA/QC" },
  { icon: Users, title: "Team Leadership & Multidisciplinary Collaboration" },
  { icon: Workflow, title: "Digital Workflow Optimization" },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="h-1 w-12 bg-secondary rounded-full"></div>
              <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Expertise</span>
              <div className="h-1 w-12 bg-secondary rounded-full"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Core Skills
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive expertise in BIM technologies and digital design delivery
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <Card
                  key={index}
                  className="group p-6 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border-2 hover:border-secondary/50 bg-card relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  <div className="flex items-start gap-4 relative z-10">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-secondary/10 to-accent/10 group-hover:from-secondary/20 group-hover:to-accent/20 group-hover:scale-110 transition-all duration-300">
                      <Icon className="h-6 w-6 text-accent" />
                    </div>
                    <h3 className="text-base font-semibold text-foreground leading-tight pt-2 group-hover:text-accent transition-colors">
                      {skill.title}
                    </h3>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
