import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useState } from "react";
import { Play, Image as ImageIcon } from "lucide-react";

// Import BIM project images
import project2Img1 from "@/assets/projects/bim/project-2/image-1.jpg";
import project2Img2 from "@/assets/projects/bim/project-2/image-2.jpg";
import project2Img3 from "@/assets/projects/bim/project-2/image-3.jpg";
import project2Img4 from "@/assets/projects/bim/project-2/image-4.jpg";
import project2Img5 from "@/assets/projects/bim/project-2/image-5.jpg";
import project2Img6 from "@/assets/projects/bim/project-2/image-6.jpg";
import project2Img7 from "@/assets/projects/bim/project-2/image-7.jpg";

import project3Img1 from "@/assets/projects/bim/project-3/image-1.jpg";
import project3Img2 from "@/assets/projects/bim/project-3/image-2.jpg";
import project3Img3 from "@/assets/projects/bim/project-3/image-3.jpg";
import project3Img4 from "@/assets/projects/bim/project-3/image-4.jpg";
import project3Img5 from "@/assets/projects/bim/project-3/image-5.jpg";
import project3Img6 from "@/assets/projects/bim/project-3/image-6.jpg";
import project3Img7 from "@/assets/projects/bim/project-3/image-7.jpg";
import project3Img8 from "@/assets/projects/bim/project-3/image-8.jpg";
import project3Img9 from "@/assets/projects/bim/project-3/image-9.jpg";

import project4Img1 from "@/assets/projects/bim/project-4/image-1.jpg";
import project4Img2 from "@/assets/projects/bim/project-4/image-2.jpg";
import project4Img3 from "@/assets/projects/bim/project-4/image-3.jpg";
import project4Img4 from "@/assets/projects/bim/project-4/image-4.jpg";
import project4Img5 from "@/assets/projects/bim/project-4/image-5.jpg";
import project4Img6 from "@/assets/projects/bim/project-4/image-6.jpg";
import project4Img7 from "@/assets/projects/bim/project-4/image-7.jpg";
import project4Img8 from "@/assets/projects/bim/project-4/image-8.jpg";
import project4Img9 from "@/assets/projects/bim/project-4/image-9.jpg";
import project4Img10 from "@/assets/projects/bim/project-4/image-10.jpg";
import project4Img11 from "@/assets/projects/bim/project-4/image-11.jpg";

import project5Img1 from "@/assets/projects/bim/project-5/image-1.jpg";
import project5Img2 from "@/assets/projects/bim/project-5/image-2.jpg";
import project5Img3 from "@/assets/projects/bim/project-5/image-3.jpg";
import project5Img4 from "@/assets/projects/bim/project-5/image-4.jpg";
import project5Img5 from "@/assets/projects/bim/project-5/image-5.jpg";
import project5Img6 from "@/assets/projects/bim/project-5/image-6.jpg";
import project5Img7 from "@/assets/projects/bim/project-5/image-7.jpg";
import project5Img8 from "@/assets/projects/bim/project-5/image-8.jpg";

import project6Img1 from "@/assets/projects/bim/project-6/image-1.jpg";
import project6Img2 from "@/assets/projects/bim/project-6/image-2.jpg";
import project6Img3 from "@/assets/projects/bim/project-6/image-3.jpg";
import project6Img4 from "@/assets/projects/bim/project-6/image-4.jpg";
import project6Img5 from "@/assets/projects/bim/project-6/image-5.jpg";
import project6Img6 from "@/assets/projects/bim/project-6/image-6.jpg";
import project6Img7 from "@/assets/projects/bim/project-6/image-7.jpg";

interface Project {
  title: string;
  category: "design" | "bim" | "structural";
  youtubeUrl?: string;
  images?: string[];
  pdfFileId?: string;
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
  { youtubeUrl: "https://youtu.be/9wSF_ZCHnDA", title: "Proposed Military City & Azza Residential City, Sudan", category: "bim" },
  { 
    title: "Proposed Shopping Mall Development", 
    category: "bim",
    images: [project2Img1, project2Img2, project2Img3, project2Img4, project2Img5, project2Img6, project2Img7]
  },
  { 
    title: "Proposed Serviced Apartments Development", 
    category: "bim",
    images: [project3Img1, project3Img2, project3Img3, project3Img4, project3Img5, project3Img6, project3Img7, project3Img8, project3Img9]
  },
  { 
    title: "Proposed Commercial Development", 
    category: "bim",
    images: [project4Img1, project4Img2, project4Img3, project4Img4, project4Img5, project4Img6, project4Img7, project4Img8, project4Img9, project4Img10, project4Img11]
  },
  { 
    title: "Proposed Residential Development", 
    category: "bim",
    images: [project5Img1, project5Img2, project5Img3, project5Img4, project5Img5, project5Img6, project5Img7, project5Img8]
  },
  { 
    title: "Proposed Commercial Development", 
    category: "bim",
    images: [project6Img1, project6Img2, project6Img3, project6Img4, project6Img5, project6Img6, project6Img7]
  },
  // Structural Engineering Projects
  { title: "Structural Engineering Project 1", category: "structural", pdfFileId: "1TCNkRGTvnfJU5KESQNb-YzzPqhLcQlhG" },
  { title: "Structural Engineering Project 2", category: "structural", pdfFileId: "1rpNpxmfrysYZ5TqjJzigXaClksLfCDXo" },
  { title: "Structural Engineering Project 3", category: "structural", pdfFileId: "1fPFUjQCrYB1V2X96hfSUlg9QB_djibkd" },
  { title: "Structural Engineering Project 4", category: "structural", pdfFileId: "1bnIF9DCkB35XjFC6i1JUKAWSPTb68EMW" },
  { title: "Structural Engineering Project 5", category: "structural", pdfFileId: "1bFUbDyBklxCQngkcM-T2srdoeYjCSFlx" },
  { title: "Structural Engineering Project 6", category: "structural", pdfFileId: "1beco7cvARwTVMb72ilLbNvlMx13aRHzZ" },
  { title: "Structural Engineering Project 7", category: "structural", pdfFileId: "1dMZPZaATBRzmXqzfdoSlSYTHA9CwA0iQ" },
  { title: "Structural Engineering Project 8", category: "structural", pdfFileId: "1MnqDfptNmajRpU0gHbHpN39YUy0sKhTc" },
  { title: "Structural Engineering Project 9", category: "structural", pdfFileId: "1rX5lZPiJxyz0vwQxSAEgR_lP2cqDWrVT" },
  { title: "Structural Engineering Project 10", category: "structural", pdfFileId: "1c6QFphtoFHw_u4hJEc75qWWcx31uI1ut" },
  { title: "Structural Engineering Project 11", category: "structural", pdfFileId: "1ggbDTHDUU0hGU4Qq9yq5GEwKl53L8R5h" },
  { title: "Structural Engineering Project 12", category: "structural", pdfFileId: "1rlWWH71Y5tCy_iCrziGImI4oWkRrGgO5" },
  { title: "Structural Engineering Project 13", category: "structural", pdfFileId: "1rUg26NpDCgaRRS-DFMC03PREIIS4IURK" },
  { title: "Structural Engineering Project 14", category: "structural", pdfFileId: "1TyKW5UGrfu3L78f5SIwt6SvQmzVOn1ka" },
  { title: "Structural Engineering Project 15", category: "structural", pdfFileId: "1GycgUyqyc0m1ZPFyu87rc3Q1QOnj_RfL" },
  { title: "Structural Engineering Project 16", category: "structural", pdfFileId: "1UABr3pdGHYQr2yqoFND6t4lh14W-zLbG" },
  { title: "Structural Engineering Project 17", category: "structural", pdfFileId: "1Gsk5NtAwd7KP-1wlHCDPyOmeklkMthbg" },
  { title: "Structural Engineering Project 18", category: "structural", pdfFileId: "1SMBIVds22PRVsNwBvk61XN18ZJZbfYh-" },
  { title: "Structural Engineering Project 19", category: "structural", pdfFileId: "1FhV8i9L3v5hrRkQVRsD6G93yaJnG5n8f" },
  { title: "Structural Engineering Project 20", category: "structural", pdfFileId: "1Q6LbOlyNYMYEZ07potJLF8JZlKEufsbv" },
  { title: "Structural Engineering Project 21", category: "structural", pdfFileId: "1kRqz6oOSbMC3jQgu3tj68xoqP_-UKt2h" },
  { title: "Structural Engineering Project 22", category: "structural", pdfFileId: "1cY2r2Rc2USHA5GKC74Idkl4tPgGjMwnA" },
  { title: "Structural Engineering Project 23", category: "structural", pdfFileId: "1w8xv7yR0pMtCi6wi1DpbJ_iWbhQnSdAv" },
  { title: "Structural Engineering Project 24", category: "structural", pdfFileId: "1Tja6zLUWccjT1pt1XeojkYu5OmaVclnZ" },
  { title: "Structural Engineering Project 25", category: "structural", pdfFileId: "1tv4ZIiNyX4hLqmP4XAZzcordPbYO_Z2J" },
  { title: "Structural Engineering Project 26", category: "structural", pdfFileId: "1J40Z-3eJ84ZOmViQsl0OE3qBOTShUUwS" },
  { title: "Structural Engineering Project 27", category: "structural", pdfFileId: "1mbkGnEV24hN7oLjaPmx6JpzjQf0G_B6v" },
  { title: "Structural Engineering Project 28", category: "structural", pdfFileId: "1QQYrLya3PPN8HxU7MRDjeXHb0bCDrwgH" },
  { title: "Structural Engineering Project 29", category: "structural", pdfFileId: "1ON-q157jvc4qGm7drdSsCJEq2mw4OHUq" },
  { title: "Structural Engineering Project 30", category: "structural", pdfFileId: "1w11GGU8DqZO3BhGVrWIaCwWy1RCdQM36" },
  { title: "Structural Engineering Project 31", category: "structural", pdfFileId: "1ME8jFgRxivHpQIylzNaO9JYp6cqV8St5" },
  { title: "Structural Engineering Project 32", category: "structural", pdfFileId: "13P7fUMLF65z7RVtUBe_F5PL1uDUCoaa3" },
  { title: "Structural Engineering Project 33", category: "structural", pdfFileId: "1xBZlwb_GtbQyEP_h2VfyBGFsTyzx6cTy" },
  { title: "Structural Engineering Project 34", category: "structural", pdfFileId: "1xv_vJWhefNj1CyXgqGla1-mdDJTGKzwJ" },
  { title: "Structural Engineering Project 35", category: "structural", pdfFileId: "1HnoWDtxnZmn62EMzQrg0qOlhBD2HvxGC" },
  { title: "Structural Engineering Project 36", category: "structural", pdfFileId: "1RHCo8QeBuxy5edCxqZ8Fd8nvzxqV6ugi" },
  { title: "Structural Engineering Project 37", category: "structural", pdfFileId: "1XnuJNAiYNreaGWHIo3ugfE6FRH2m_N27" },
  { title: "Structural Engineering Project 38", category: "structural", pdfFileId: "1e9lwiMZNgckyrrfrH7MXldBeMP42ZRQm" },
  { title: "Structural Engineering Project 39", category: "structural", pdfFileId: "1cEHy1GYd_9gDHJm2qzelpEumQ80naB2_" },
  { title: "Structural Engineering Project 40", category: "structural", pdfFileId: "1H_9as-G2oQsiSqJmO2PClVq5v17dPjZD" },
  { title: "Structural Engineering Project 41", category: "structural", pdfFileId: "1mjnIZlHM1dGNbGmtCsdLpSMNsxBh7mp7" },
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
  const [selectedImages, setSelectedImages] = useState<string[] | null>(null);
  const [selectedPdf, setSelectedPdf] = useState<string | null>(null);

  const designProjects = projects.filter(p => p.category === "design");
  const bimProjects = projects.filter(p => p.category === "bim");
  const structuralProjects = projects.filter(p => p.category === "structural");

  const VideoProjectCard = ({ project }: { project: Project }) => (
    <Card 
      className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-border/50 hover:border-primary overflow-hidden cursor-pointer bg-card backdrop-blur-sm"
      onClick={() => {
        setSelectedVideo(project.youtubeUrl!);
        setSelectedTitle(project.title);
      }}
    >
      <div className="relative overflow-hidden aspect-video bg-muted">
        <img
          src={getYouTubeThumbnail(project.youtubeUrl!)}
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

  const ImageProjectCard = ({ project }: { project: Project }) => (
    <Card 
      className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-border/50 hover:border-primary overflow-hidden cursor-pointer bg-card backdrop-blur-sm"
      onClick={() => {
        setSelectedImages(project.images!);
        setSelectedTitle(project.title);
      }}
    >
      <div className="relative overflow-hidden aspect-video bg-muted">
        <img
          src={project.images![0]}
          alt={project.title}
          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-75"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
          <div className="bg-primary text-primary-foreground rounded-full p-5 transform scale-0 group-hover:scale-100 transition-transform duration-500 shadow-2xl">
            <ImageIcon className="w-10 h-10" />
          </div>
        </div>
        <div className="absolute top-4 left-4 bg-primary text-primary-foreground backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-semibold shadow-lg">
          BIM Coordinator
        </div>
        <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-semibold text-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          View Gallery
        </div>
      </div>
      
      <div className="p-6 bg-gradient-to-b from-card to-card/50">
        <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2 leading-tight">
          {project.title}
        </h3>
      </div>
    </Card>
  );

  const PdfProjectCard = ({ project }: { project: Project }) => (
    <Card 
      className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-border/50 hover:border-primary overflow-hidden cursor-pointer bg-card backdrop-blur-sm"
      onClick={() => {
        setSelectedPdf(project.pdfFileId!);
        setSelectedTitle(project.title);
      }}
    >
      <div className="relative overflow-hidden aspect-video bg-muted">
        <img
          src={`https://drive.google.com/thumbnail?id=${project.pdfFileId}`}
          alt={project.title}
          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-75"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
          <div className="bg-primary text-primary-foreground rounded-full p-5 transform scale-0 group-hover:scale-100 transition-transform duration-500 shadow-2xl">
            <ImageIcon className="w-10 h-10" />
          </div>
        </div>
        <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-semibold text-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          View Document
        </div>
      </div>
      
      <div className="p-6 bg-gradient-to-b from-card to-card/50">
        <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2 leading-tight">
          {project.title}
        </h3>
      </div>
    </Card>
  );

  const ProjectCard = ({ project }: { project: Project }) => {
    if (project.images) {
      return <ImageProjectCard project={project} />;
    }
    if (project.pdfFileId) {
      return <PdfProjectCard project={project} />;
    }
    return <VideoProjectCard project={project} />;
  };

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

      {/* Image Gallery Modal */}
      <Dialog open={selectedImages !== null} onOpenChange={() => setSelectedImages(null)}>
        <DialogContent className="max-w-7xl w-full p-8 border-none shadow-2xl">
          <DialogTitle className="text-2xl font-bold mb-6 text-center">{selectedTitle}</DialogTitle>
          {selectedImages && (
            <Carousel className="w-full">
              <CarouselContent>
                {selectedImages.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="flex items-center justify-center bg-muted rounded-lg overflow-hidden">
                      <img
                        src={image}
                        alt={`${selectedTitle} - Image ${index + 1}`}
                        className="w-full h-auto max-h-[70vh] object-contain"
                        onContextMenu={(e) => e.preventDefault()}
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-4" />
              <CarouselNext className="right-4" />
            </Carousel>
          )}
        </DialogContent>
      </Dialog>

      {/* PDF Preview Modal */}
      <Dialog open={selectedPdf !== null} onOpenChange={() => setSelectedPdf(null)}>
        <DialogContent className="max-w-7xl w-full h-[90vh] p-0 overflow-hidden border-none shadow-2xl">
          <DialogTitle className="sr-only">{selectedTitle}</DialogTitle>
          {selectedPdf && (
            <iframe
              src={`https://drive.google.com/file/d/${selectedPdf}/preview`}
              className="w-full h-full"
              title={selectedTitle}
              allow="autoplay"
            />
          )}
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default Projects;
