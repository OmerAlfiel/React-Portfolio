
import React from 'react';
import { cn } from '@/lib/utils';
import { Instagram, Linkedin, Twitter } from 'lucide-react';

interface FooterProps {
  className?: string;
}

const Footer = ({ className }: FooterProps) => {
  const currentYear = new Date().getFullYear();
  
  return (
        <footer className={cn('py-16 bg-primary text-primary-foreground relative', className)}>
      {/* Add decorative pattern */}
      <div className="absolute inset-0 bg-pattern-grid opacity-10"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start gap-10">
          <div className="max-w-xs">
            <h2 className="text-3xl font-serif mb-4">ARCHITECT</h2>
            <p className="text-primary-foreground/80 mb-6">
              Crafting Tomorrow's Spaces, Today. Balancing aesthetics, functionality, and sustainability in every project.
            </p>
            <div className="flex gap-4">
              <a 
                href="#" 
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-serif mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="hover:text-accent transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-accent transition-colors">About</a></li>
              <li><a href="#projects" className="hover:text-accent transition-colors">Projects</a></li>
              <li><a href="#contact" className="hover:text-accent transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-serif mb-4">Contact</h3>
            <address className="not-italic space-y-2 text-primary-foreground/80">
              <p>1234 Design District</p>
              <p>New York, NY 10001</p>
              <p className="mt-2">hello@architectportfolio.com</p>
              <p>+1 (555) 234-5678</p>
            </address>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-primary-foreground/70">
            © {new Date().getFullYear()} Architect Portfolio. All rights reserved.
          </p>
          
          <div className="mt-4 md:mt-0 flex gap-6">
            <a href="#" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
      
    </footer>
  );
};

export default Footer;
