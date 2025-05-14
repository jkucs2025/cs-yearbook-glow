
import React from 'react';
import { Button } from "@/components/ui/button";
import { Code, Calendar, Users, Book } from "lucide-react";

const YearbookFooter: React.FC = () => {
  return (
    <footer className="bg-cs-dark py-16 px-4 relative overflow-hidden">
      <div className="absolute inset-0 code-pattern opacity-10"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center mb-6">
              <Code className="h-8 w-8 text-cs-purple mr-2" />
              <h2 className="text-2xl font-bold text-white">CS Yearbook <span className="text-cs-purple">2025</span></h2>
            </div>
            
            <p className="text-muted-foreground mb-8 max-w-md">
              Celebrating the achievements and memories of our Computer Science class of 2025. 
              This interactive yearbook showcases our talented graduates and memorable moments.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button variant="outline" className="border-cs-purple text-cs-purple hover:bg-cs-purple/10" size="sm">
                <Users className="h-4 w-4 mr-2" /> Student Directory
              </Button>
              <Button variant="outline" className="border-cs-purple text-cs-purple hover:bg-cs-purple/10" size="sm">
                <Calendar className="h-4 w-4 mr-2" /> Events
              </Button>
              <Button variant="outline" className="border-cs-purple text-cs-purple hover:bg-cs-purple/10" size="sm">
                <Book className="h-4 w-4 mr-2" /> Projects
              </Button>
            </div>
          </div>
          
          <div>
            <div className="bg-card p-6 rounded-lg border border-border">
              <h3 className="text-lg font-semibold mb-4 text-white">Stay Connected</h3>
              <p className="text-muted-foreground mb-6">
                Join our alumni network to stay updated with events and opportunities.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-2">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50" 
                />
                <Button className="bg-cs-purple hover:bg-cs-purple/90 text-primary-foreground whitespace-nowrap">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-border/50 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Computer Science Department. All rights reserved.
          </p>
          <div className="flex justify-center space-x-4 mt-4">
            <a href="#" className="text-muted-foreground hover:text-cs-purple transition-colors">Privacy Policy</a>
            <span className="text-border/50">•</span>
            <a href="#" className="text-muted-foreground hover:text-cs-purple transition-colors">Contact</a>
            <span className="text-border/50">•</span>
            <a href="#" className="text-muted-foreground hover:text-cs-purple transition-colors">Credits</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default YearbookFooter;
