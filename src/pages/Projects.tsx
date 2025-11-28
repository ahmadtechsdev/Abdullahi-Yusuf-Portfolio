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
  { youtubeUrl: "https://youtu.be/9wSF_ZCHnDA", title: "Proposed Military City & Azza Residential City, Sudan", category: "design" },
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
      className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-border/50 hover:border-primary overflow-hidden cursor-pointer bg-card backdrop-blur-sm"
      onClick={() => {
        setSelectedVideo(project.youtubeUrl);
        setSelectedTitle(project.title);
      }}
    >
      <div className="relative overflow-hidden aspect-video bg-muted">
        <img
          src={getYouTubeThumbnail(project.youtubeUrl)}
          alt={project.title}
          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-75"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
          <div className="bg-primary text-primary-foreground rounded-full p-5 transform scale-0 group-hover:scale-100 transition-transform duration-500 shadow-2xl">
            <Play className="w-10 h-10" fill="currentColor" />
          </div>
        </div>
        <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-semibold text-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Watch Video
        </div>
      </div>
      
      <div className="p-6 bg-gradient-to-b from-card to-card/50">
        <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2 leading-tight">
          {project.title}
        </h3>
      </div>
    </Card>
  );

  const EmptyState = () => (
    <div className="text-center py-16">
      <p className="text-muted-foreground text-lg">Preparing projects</p>
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-background via-background to-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center animate-fade-in">
            <div className="inline-flex items-center gap-3 mb-8 bg-primary/10 px-6 py-2.5 rounded-full border border-primary/20">
              <div className="h-2 w-2 bg-primary rounded-full animate-pulse"></div>
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">Portfolio Showcase</span>
              <div className="h-2 w-2 bg-primary rounded-full animate-pulse"></div>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-br from-primary via-primary to-primary/70 bg-clip-text text-transparent mb-8 leading-tight">
              Projects & Work
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              A comprehensive showcase of BIM coordination, design management, and digital delivery projects 
              that demonstrate expertise in ISO 19650-compliant workflows and innovative solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Tabs */}
      <section className="py-24 bg-gradient-to-b from-muted/20 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <Tabs defaultValue="design" className="w-full">
              <div className="flex justify-center mb-16">
                <TabsList className="inline-flex h-14 items-center justify-center rounded-xl bg-muted/50 backdrop-blur-sm p-1.5 text-muted-foreground border border-border/50 shadow-lg">
                  <TabsTrigger 
                    value="design" 
                    className="rounded-lg px-6 py-2.5 text-sm font-semibold transition-all data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-md hover:text-foreground"
                  >
                    Design Project
                  </TabsTrigger>
                  <TabsTrigger 
                    value="bim"
                    className="rounded-lg px-6 py-2.5 text-sm font-semibold transition-all data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-md hover:text-foreground"
                  >
                    BIM
                  </TabsTrigger>
                  <TabsTrigger 
                    value="structural"
                    className="rounded-lg px-6 py-2.5 text-sm font-semibold transition-all data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-md hover:text-foreground"
                  >
                    Structural Engineering
                  </TabsTrigger>
                </TabsList>
              </div>
              
              <TabsContent value="design" className="mt-0">
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in">
                  {designProjects.map((project, index) => (
                    <div key={index} style={{ animationDelay: `${index * 0.1}s` }}>
                      <ProjectCard project={project} />
                    </div>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="bim" className="mt-0">
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in">
                  {bimProjects.map((project, index) => (
                    <div key={index} style={{ animationDelay: `${index * 0.1}s` }}>
                      <ProjectCard project={project} />
                    </div>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="structural" className="mt-0">
                {structuralProjects.length > 0 ? (
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in">
                    {structuralProjects.map((project, index) => (
                      <div key={index} style={{ animationDelay: `${index * 0.1}s` }}>
                        <ProjectCard project={project} />
                      </div>
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
      <section className="py-24 bg-gradient-to-br from-primary via-primary to-primary/90 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxIDAgNiAyLjY5IDYgNnMtMi42OSA2LTYgNi02LTIuNjktNi02IDIuNjktNiA2LTZ6IiBzdHJva2U9IiNmZmYiIHN0cm9rZS1vcGFjaXR5PSIuMSIvPjwvZz48L3N2Zz4=')] opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
              Ready to Start Your Next Project?
            </h2>
            <p className="text-xl text-white/95 mb-10 leading-relaxed animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Let's collaborate to bring your vision to life with cutting-edge BIM solutions 
              and ISO 19650-compliant workflows.
            </p>
            <button
              onClick={() => {
                window.location.href = "/#contact";
              }}
              className="inline-flex items-center gap-2 bg-white hover:bg-white/95 text-primary font-semibold px-10 py-4 rounded-xl text-lg transition-all hover:scale-105 hover:shadow-2xl shadow-xl animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              Get in Touch
            </button>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      <Dialog open={selectedVideo !== null} onOpenChange={() => setSelectedVideo(null)}>
        <DialogContent className="max-w-5xl w-full p-0 overflow-hidden border-none shadow-2xl">
          <DialogTitle className="sr-only">{selectedTitle}</DialogTitle>
          {selectedVideo && (
            <div className="aspect-video w-full bg-black">
              <iframe
                width="100%"
                height="100%"
                src={getYouTubeEmbedUrl(selectedVideo)}
                title={selectedTitle}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
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
