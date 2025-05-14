
import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Book, Computer, Link, Share } from "lucide-react";
import { Button } from "@/components/ui/button";

interface StudentProfile {
  id: number;
  name: string;
  specialty: string;
  image: string;
  quote: string;
  links: { github?: string; portfolio?: string; }
}

const students: StudentProfile[] = [
  {
    id: 1,
    name: "Alex Morgan",
    specialty: "Full Stack Developer",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    quote: "Turning coffee into code since 2021.",
    links: { github: "#", portfolio: "#" }
  },
  {
    id: 2,
    name: "Jamie Chen",
    specialty: "AI Researcher",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
    quote: "Passionate about machine learning and neural networks.",
    links: { github: "#", portfolio: "#" }
  },
  {
    id: 3,
    name: "Samira Patel",
    specialty: "Data Scientist",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    quote: "Finding patterns in chaos, one dataset at a time.",
    links: { github: "#" }
  },
  {
    id: 4,
    name: "Taylor Wright",
    specialty: "Cybersecurity Expert",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    quote: "Security is not just a feature, it's a mindset.",
    links: { portfolio: "#" }
  },
  {
    id: 5,
    name: "Jordan Lee",
    specialty: "Game Developer",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    quote: "Creating virtual worlds and interactive experiences.",
    links: { github: "#", portfolio: "#" }
  },
  {
    id: 6,
    name: "Casey Rivers",
    specialty: "DevOps Engineer",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    quote: "Automating everything that can be automated.",
    links: { github: "#" }
  },
];

const StudentGallery: React.FC = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section className="py-20 px-4 relative overflow-hidden" id="students">
      <div className="absolute inset-0 noise-bg"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cs-purple to-accent inline-block">
            Meet Our CS Class of 2025
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The brilliant minds who are shaping the future of technology with innovation and creativity.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {students.map((student) => (
            <Card 
              key={student.id}
              className="student-card bg-card border border-border overflow-hidden"
              onMouseEnter={() => setHoveredId(student.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={student.image} 
                  alt={student.name} 
                  className="object-cover w-full h-full transform transition-transform duration-700 ease-out"
                  style={{
                    transform: hoveredId === student.id ? 'scale(1.05)' : 'scale(1)'
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/95 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-4 w-full">
                  <h3 className="text-xl font-bold text-white mb-1">{student.name}</h3>
                  <p className="text-sm text-cs-light">{student.specialty}</p>
                </div>
              </div>
              
              <CardContent className="p-4">
                <div className="flex items-start mb-4">
                  <Book className="h-5 w-5 text-cs-purple mt-1 mr-2" />
                  <p className="text-muted-foreground italic">"{student.quote}"</p>
                </div>
                
                <div className="flex justify-between items-center mt-4">
                  <div className="flex items-center space-x-1">
                    <Computer className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">CS 2025</span>
                  </div>
                  
                  <div className="flex space-x-2">
                    {student.links.github && (
                      <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                        <Link className="h-4 w-4 text-cs-purple" />
                        <span className="sr-only">GitHub</span>
                      </Button>
                    )}
                    {student.links.portfolio && (
                      <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                        <Share className="h-4 w-4 text-cs-purple" />
                        <span className="sr-only">Portfolio</span>
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Button variant="outline" className="border-cs-purple text-cs-purple hover:bg-cs-purple/10">
            View All Students
          </Button>
        </div>
      </div>
    </section>
  );
};

export default StudentGallery;
