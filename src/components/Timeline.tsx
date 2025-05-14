
import React, { useEffect, useRef } from 'react';
import { Calendar } from 'lucide-react';

interface Event {
  id: number;
  month: string;
  title: string;
  description: string;
}

const events: Event[] = [
  {
    id: 1,
    month: "September 2024",
    title: "Welcome Week",
    description: "The academic year kicked off with orientation and a hackathon."
  },
  {
    id: 2,
    month: "October 2024",
    title: "ACM Programming Contest",
    description: "Our team secured 2nd place in the regional competition."
  },
  {
    id: 3,
    month: "December 2024",
    title: "Winter Showcase",
    description: "Students presented their end-of-semester projects to industry partners."
  },
  {
    id: 4,
    month: "February 2025",
    title: "CS Career Fair",
    description: "Over 50 companies attended to recruit our talented students."
  },
  {
    id: 5,
    month: "April 2025",
    title: "Senior Projects Exhibition",
    description: "Final year students showcased their capstone projects."
  },
  {
    id: 6,
    month: "May 2025",
    title: "Graduation Ceremony",
    description: "Celebrating our 2025 CS graduates and their achievements."
  }
];

const Timeline: React.FC = () => {
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
          }
        });
      },
      { threshold: 0.1 }
    );

    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach((item) => observer.observe(item));

    return () => {
      timelineItems.forEach((item) => observer.unobserve(item));
    };
  }, []);

  return (
    <section className="bg-secondary/30 py-20 px-4 relative" id="timeline">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cs-purple to-accent inline-block">
            Year in Review
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A timeline of key moments and achievements from our academic year.
          </p>
        </div>
        
        <div className="relative" ref={timelineRef}>
          {events.map((event, index) => (
            <div 
              key={event.id}
              className={`timeline-item flex mb-10 opacity-0 translate-y-10 transition-all duration-700 delay-${index * 100} relative`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="timeline-dot relative mr-8 mt-1">
                <div className="w-7 h-7 rounded-full bg-cs-dark border-2 border-cs-purple flex items-center justify-center z-10 relative">
                  <Calendar className="h-3 w-3 text-cs-purple" />
                </div>
              </div>
              
              <div className="flex-1">
                <div className="text-cs-purple font-mono text-sm mb-2">{event.month}</div>
                <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                <p className="text-muted-foreground">{event.description}</p>
                
                <div className="h-px w-full bg-gradient-to-r from-cs-purple to-transparent my-4 opacity-50"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
