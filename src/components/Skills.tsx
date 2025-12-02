import { Building2, Boxes, FileCheck2, Ruler, Search, BookCheck, Users, Workflow } from "lucide-react";
import { Card } from "@/components/ui/card";
import revitIcon from "@/assets/icons/revit.png";
import autocadIcon from "@/assets/icons/autocad.png";
import navisworksIcon from "@/assets/icons/navisworks.png";
import teklaIcon from "@/assets/icons/tekla.png";
import robotIcon from "@/assets/icons/robot.png";

const skills = [
  { imageSrc: revitIcon, title: "Revit" },
  { imageSrc: autocadIcon, title: "AutoCAD" },
  { imageSrc: navisworksIcon, title: "Navisworks" },
  { imageSrc: teklaIcon, title: "Tekla" },
  { imageSrc: robotIcon, title: "Autodesk Robot" },
  { icon: Building2, title: "BIM Modeling, Management & Coordination" },
  { icon: Boxes, title: "BIM AR & VR Implementation" },
  { icon: FileCheck2, title: "Design Management & Digital Delivery" },
  { icon: Ruler, title: "Structural Design & Technical Oversight" },
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
              const Icon = 'icon' in skill ? skill.icon : null;
              const imageSrc = 'imageSrc' in skill ? skill.imageSrc : null;
              
              return (
                <Card
                  key={index}
                  className="group relative p-6 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-border/50 bg-card backdrop-blur-sm hover:border-primary/50 overflow-hidden"
                >
                  {/* Subtle gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary group-hover:shadow-lg group-hover:shadow-primary/20 group-hover:scale-110 transition-all duration-500">
                      {Icon && <Icon className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors duration-500" />}
                      {imageSrc && <img src={imageSrc} alt={skill.title} className="h-6 w-6 object-contain brightness-0 group-hover:brightness-100 transition-all duration-500" />}
                    </div>
                    <h3 className="text-base font-semibold text-foreground leading-tight pt-2 group-hover:text-primary transition-colors duration-300">
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
