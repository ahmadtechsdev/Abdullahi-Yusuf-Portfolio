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
    <section id="skills" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="h-1 w-12 bg-primary rounded-full"></div>
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">Expertise</span>
              <div className="h-1 w-12 bg-primary rounded-full"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Skills & Expertise
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive BIM expertise covering all aspects of digital design delivery
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <Card
                  key={index}
                  className="group p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/50 bg-white"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-base font-semibold text-foreground leading-tight pt-2 group-hover:text-primary transition-colors">
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
