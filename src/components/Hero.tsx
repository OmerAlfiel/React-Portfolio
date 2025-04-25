import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface HeroProps {
  className?: string;
}

const Hero = ({ className }: HeroProps) => {
  return (
    <section
      id="home"
      className={cn(
        'min-h-[100vh] flex items-center relative overflow-hidden',
        className
      )}
    >
      {/* Updated with architectural imagery */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80')] bg-cover bg-center">
        <div className="absolute inset-0 bg-primary/40 backdrop-blur-[2px]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/95"></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-white mb-6 animate-fade-up text-shadow" style={{ animationDelay: '0.2s' }}>
            Innovative Structural Designs for Modern Architecture
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl animate-fade-up text-shadow-sm" style={{ animationDelay: '0.4s' }}>
            Merging engineering precision with architectural vision to create sustainable, functional, and aesthetically striking structures.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: '0.6s' }}>
            <Button 
              asChild 
              size="lg" 
              className="bg-accent text-accent-foreground hover:bg-accent/90"
            >
              <a href="#projects">View Projects</a>
            </Button>
            <Button 
              asChild 
              variant="outline" 
              size="lg" 
              className="bg-transparent border-white text-white hover:bg-white/10"
            >
              <a href="#contact">Consult with Me</a>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Updated decorative element */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default Hero;