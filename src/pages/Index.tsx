
import { ArrowRight, Sparkles, Code, Palette, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Index = () => {
  const features = [
    {
      icon: Code,
      title: "Modern Stack",
      description: "Built with React, TypeScript, and Tailwind CSS for maximum performance and developer experience."
    },
    {
      icon: Palette,
      title: "Beautiful Design",
      description: "Clean, modern interface with carefully crafted components and smooth animations."
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Optimized for speed with Vite bundling and efficient component architecture."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="relative container mx-auto px-4 py-20 lg:py-32">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-8 animate-fade-in">
              <Sparkles className="w-4 h-4" />
              Welcome to your new project
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 animate-fade-in-up">
              Build Something
              <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent block">
                Amazing
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed animate-fade-in-up animation-delay-200">
              Start your next project with this beautiful, modern template built with the latest web technologies.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-400">
              <Button size="lg" className="text-lg px-8 py-6 group">
                Get Started
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Everything you need to get started
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A carefully crafted foundation with modern tools and best practices.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border/50">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 py-20">
        <Card className="bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
          <CardContent className="p-12 text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to start building?
            </h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
              Take this template and make it your own. The possibilities are endless.
            </p>
            <Button size="lg" className="text-lg px-8 py-6">
              Start Your Project
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;
