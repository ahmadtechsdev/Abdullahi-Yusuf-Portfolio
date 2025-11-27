import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { useState } from "react";
import { Play } from "lucide-react";

interface Project {
  youtubeUrl: string;
  title: string;
  category: "design" | "bim" | "structural";
}

const projects: Project[] = [
  // Design Projects
  { youtubeUrl: "https://youtu.be/l--lH3m8FpI", title: "Gwagwalada Toll Gate", category: "design" },
  { youtubeUrl: "https://youtu.be/i362rQaY9eQ", title: "Madala Toll Plaza", category: "design" },
  { youtubeUrl: "https://youtu.be/H_xJy2FfW3U", title: "Bwari Toll Plaza", category: "design" },
  { youtubeUrl: "https://youtu.be/nIE4wR-A0NU", title: "Maraba Toll Plaza", category: "design" },
  { youtubeUrl: "https://youtu.be/nazjOMm4-fA", title: "Abuja Railway Security System", category: "design" },
  { youtubeUrl: "https://www.youtube.com/watch?v=KGuDdSmd9d0", title: "Proposed Military City & Azza Residential City, Sudan", category: "design" },
  // BIM Projects
  { youtubeUrl: "https://www.youtube.com/watch?v=KGuDdSmd9d0", title: "Proposed Military City & Azza Residential City, Sudan", category: "bim" },
];

const getYouTubeVideoId = (url: string): string => {
  const patterns = [
    /(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/,
    /youtube\.com\/embed\/([^&\n?#]+)/,
  ];
  
  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match) return match[1];
  }
  return "";
};

const getYouTubeThumbnail = (url: string): string => {
  const videoId = getYouTubeVideoId(url);
  return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
};

const getYouTubeEmbedUrl = (url: string): string => {
  const videoId = getYouTubeVideoId(url);
  return `https://www.youtube.com/embed/${videoId}?autoplay=1`;
};

const Projects = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [selectedTitle, setSelectedTitle] = useState<string>("");

  const designProjects = projects.filter(p => p.category === "design");
  const bimProjects = projects.filter(p => p.category === "bim");
  const structuralProjects = projects.filter(p => p.category === "structural");

  const ProjectCard = ({ project }: { project: Project }) => (
    <Card 
      className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/50 overflow-hidden cursor-pointer bg-white"
      onClick={() => {
        setSelectedVideo(project.youtubeUrl);
        setSelectedTitle(project.title);
      }}
    >
      <div className="relative overflow-hidden aspect-video">
        <img
          src={getYouTubeThumbnail(project.youtubeUrl)}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="bg-white/90 rounded-full p-4">
            <Play className="w-8 h-8 text-primary" fill="currentColor" />
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2">
          {project.title}
        </h3>
      </div>
    </Card>
  );

  const EmptyState = () => (
    <div className="text-center py-16">
      <p className="text-muted-foreground text-lg">No projects available yet</p>
    </div>
  );

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

      {/* Projects Tabs */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <Tabs defaultValue="design" className="w-full">
              <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-3 mb-12">
                <TabsTrigger value="design">Design Project</TabsTrigger>
                <TabsTrigger value="bim">BIM</TabsTrigger>
                <TabsTrigger value="structural">Structural Engineering</TabsTrigger>
              </TabsList>
              
              <TabsContent value="design" className="mt-0">
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in">
                  {designProjects.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="bim" className="mt-0">
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in">
                  {bimProjects.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="structural" className="mt-0">
                {structuralProjects.length > 0 ? (
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in">
                    {structuralProjects.map((project, index) => (
                      <ProjectCard key={index} project={project} />
                    ))}
                  </div>
                ) : (
                  <EmptyState />
                )}
              </TabsContent>
            </Tabs>
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

      {/* Video Modal */}
      <Dialog open={selectedVideo !== null} onOpenChange={() => setSelectedVideo(null)}>
        <DialogContent className="max-w-4xl w-full p-0">
          <DialogTitle className="sr-only">{selectedTitle}</DialogTitle>
          {selectedVideo && (
            <div className="aspect-video w-full">
              <iframe
                width="100%"
                height="100%"
                src={getYouTubeEmbedUrl(selectedVideo)}
                title={selectedTitle}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-lg"
              />
            </div>
          )}
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default Projects;
