import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Mail, Linkedin, MapPin, Phone, Send } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    
    // Open email client with pre-filled content
    window.location.href = `mailto:abdullahiyusuf1304@gmail.com?subject=Message from ${name}&body=${encodeURIComponent(`From: ${name}\nEmail: ${email}\n\n${message}`)}`;
    toast.success("Opening email client...");
  };

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="h-1 w-12 bg-primary rounded-full"></div>
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">Get in Touch</span>
              <div className="h-1 w-12 bg-primary rounded-full"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Contact
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Let's discuss your next BIM project or collaboration opportunity
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <Card className="p-8 border border-border/50 bg-card backdrop-blur-sm shadow-2xl hover:shadow-primary/10 transition-all duration-500 h-fit relative overflow-hidden">
              {/* Subtle gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent" />
              
              <form onSubmit={handleSubmit} className="space-y-5 relative">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
                    Name
                  </label>
                  <Input 
                    id="name"
                    name="name"
                    placeholder="Your name" 
                    required
                    className="border-2 focus:border-secondary"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                    Email
                  </label>
                  <Input 
                    id="email"
                    name="email"
                    type="email" 
                    placeholder="your.email@example.com" 
                    required
                    className="border-2 focus:border-secondary"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
                    Message
                  </label>
                  <Textarea 
                    id="message"
                    name="message"
                    placeholder="Tell me about your project..." 
                    required
                    rows={5}
                    className="border-2 focus:border-secondary resize-none"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold group shadow-xl hover:shadow-2xl hover:shadow-primary/30 transition-all duration-300 hover:-translate-y-0.5"
                >
                  <Send className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                  Send Message
                </Button>
              </form>
            </Card>

            {/* Contact Details */}
            <div className="space-y-5">
              <Card className="p-6 border border-border/50 hover:border-primary/50 transition-all duration-500 group bg-card backdrop-blur-sm shadow-xl hover:shadow-2xl hover:-translate-y-1 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary group-hover:shadow-lg group-hover:shadow-primary/20 group-hover:scale-110 transition-all duration-500">
                    <Mail className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors duration-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Email</h3>
                    <a 
                      href="mailto:abdullahiyusuf1304@gmail.com"
                      className="text-muted-foreground hover:text-primary transition-colors duration-300"
                    >
                      abdullahiyusuf1304@gmail.com
                    </a>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border border-border/50 hover:border-primary/50 transition-all duration-500 group bg-card backdrop-blur-sm shadow-xl hover:shadow-2xl hover:-translate-y-1 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary group-hover:shadow-lg group-hover:shadow-primary/20 group-hover:scale-110 transition-all duration-500">
                    <Phone className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors duration-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                    <a 
                      href="tel:+447350167943"
                      className="text-muted-foreground hover:text-primary transition-colors duration-300"
                    >
                      +44 7350 167943
                    </a>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border border-border/50 hover:border-primary/50 transition-all duration-500 group bg-card backdrop-blur-sm shadow-xl hover:shadow-2xl hover:-translate-y-1 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary group-hover:shadow-lg group-hover:shadow-primary/20 group-hover:scale-110 transition-all duration-500">
                    <Linkedin className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors duration-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">LinkedIn</h3>
                    <a 
                      href="https://linkedin.com/in/abdoolyusuf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors duration-300"
                    >
                      linkedin.com/in/abdoolyusuf
                    </a>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border border-border/50 hover:border-primary/50 transition-all duration-500 group bg-card backdrop-blur-sm shadow-xl hover:shadow-2xl hover:-translate-y-1 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary group-hover:shadow-lg group-hover:shadow-primary/20 group-hover:scale-110 transition-all duration-500">
                    <MapPin className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors duration-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Location</h3>
                    <p className="text-muted-foreground">United Kingdom</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Quote Card - full width */}
          <Card className="mt-10 p-8 bg-primary border-0 shadow-2xl hover:shadow-primary/30 transition-all duration-500 hover:scale-[1.02] relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
            <blockquote className="relative text-primary-foreground">
              <p className="text-lg font-medium mb-3 leading-relaxed">
                "Let's collaborate to bring your vision to life with cutting-edge BIM solutions."
              </p>
              <footer className="text-primary-foreground/90 font-semibold">
                — Abdullahi Yusuf
              </footer>
            </blockquote>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
