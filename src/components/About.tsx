
import React from 'react';
import { cn } from '@/lib/utils';

interface AboutProps {
  className?: string;
}

const About = ({ className }: AboutProps) => {
  return (
    <section
      id="about"
      className={cn('section-padding bg-pattern-dots', className)}
    >    
      {/* Stats with enhanced styling */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-10">
        <div className="bg-card p-6 rounded-lg shadow-sm border border-accent/10 hover:border-accent/30 transition-colors">
          <h3 className="font-serif text-4xl font-semibold mb-2 text-primary">35+</h3>
          <p className="text-muted-foreground">Completed Projects</p>
        </div>
        <div className="bg-card p-6 rounded-lg shadow-sm border border-accent/10 hover:border-accent/30 transition-colors">
          <h3 className="font-serif text-4xl font-semibold mb-2 text-primary">12</h3>
          <p className="text-muted-foreground">Design Awards</p>
        </div>
        <div className="bg-card p-6 rounded-lg shadow-sm border border-accent/10 hover:border-accent/30 transition-colors">
          <h3 className="font-serif text-4xl font-semibold mb-2 text-primary">8</h3>
          <p className="text-muted-foreground">Countries</p>
        </div>
      </div>
    </section>
  );
};

export default About;
