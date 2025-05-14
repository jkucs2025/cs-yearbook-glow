
import React, { useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Code } from "lucide-react";

const YearbookHeader: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
        }
      });
    });

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(el => observer.observe(el));

    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <header className="relative min-h-screen flex flex-col items-center justify-center px-4 py-20 overflow-hidden">
      <div className="absolute inset-0 code-pattern opacity-25 z-0"></div>
      
      {/* Main header content */}
      <div className="text-center space-y-8 z-10 max-w-4xl mx-auto">
        <div className="mb-8 animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000">
          <Code className="h-16 w-16 mx-auto text-cs-purple mb-4" />
          <div className="inline-flex items-center justify-center">
            <div className="h-[1px] w-16 bg-gradient-to-r from-transparent to-cs-purple"></div>
            <span className="px-4 text-cs-purple font-mono uppercase tracking-widest text-sm">Class Of</span>
            <div className="h-[1px] w-16 bg-gradient-to-l from-transparent to-cs-purple"></div>
          </div>
        </div>
        
        <h1 
          ref={titleRef}
          className="text-5xl md:text-7xl lg:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cs-purple to-accent animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000 delay-300"
        >
          CS YEARBOOK
          <span className="text-white">_</span>
          <span className="text-cs-purple">2025</span>
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000 delay-500">
          Celebrating the achievements, projects, and memories of our 
          brilliant computer science graduates. The future of tech starts here.
        </p>
        
        <div className="flex flex-wrap items-center justify-center gap-4 mt-10 animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000 delay-700">
          <Button className="bg-cs-purple hover:bg-cs-purple/90 text-primary-foreground px-8 py-6 text-lg glowing-border">
            Explore Students
          </Button>
          <Button variant="outline" className="border-cs-purple text-cs-purple hover:bg-cs-purple/10 px-8 py-6 text-lg">
            View Timeline
          </Button>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-cs-purple flex justify-center pt-2">
          <div className="w-1 h-2 bg-cs-purple rounded-full animate-float"></div>
        </div>
      </div>
    </header>
  );
};

export default YearbookHeader;
