import React, { useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import { Download, Mail, MapPin, Phone } from 'lucide-react';
import emailjs from '@emailjs/browser';

interface ContactProps {
  className?: string;
}

const Contact = ({ className }: ContactProps) => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formRef.current) return;
    
    setIsSubmitting(true);

    //https://www.emailjs.com/
    
    try {
      const serviceId = 'your_service_id';
      const templateId = 'your_template_id';
      const publicKey = 'your_public_key';
      
      const result = await emailjs.sendForm(
        serviceId,
        templateId,
        formRef.current,
        publicKey
      );
      
      console.log('Email sent successfully:', result.text);
      
      toast({
        title: "Message sent",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      
      // Reset the form
      formRef.current.reset();
      
    } catch (error) {
      console.error('Failed to send email:', error);
      toast({
        title: "Message failed",
        description: "Sorry, there was a problem sending your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className={cn('section-padding bg-secondary relative overflow-hidden', className)}
    >
      {/* Add decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-accent/5 rounded-bl-full"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-primary/5 rounded-tr-full"></div>
    
      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-6">Get In Touch</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Interested in discussing a project or exploring potential collaborations? 
              Feel free to reach out using the form or contact details below.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="rounded-full bg-primary/10 p-3">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-1">Location</h3>
                  <p className="text-muted-foreground">1234 Design District, New York, NY 10001</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="rounded-full bg-primary/10 p-3">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-1">Email</h3>
                  <p className="text-muted-foreground">hello@architectportfolio.com</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="rounded-full bg-primary/10 p-3">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-1">Phone</h3>
                  <p className="text-muted-foreground">+1 (555) 234-5678</p>
                </div>
              </div>
                            {/* Add Resume Download Button */}
                            <div className="flex items-start gap-4">
                <div className="rounded-full bg-primary/10 p-3">
                  <Download className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-1">Resume</h3>
                  <Button 
                    variant="link" 
                    className="text-muted-foreground hover:text-primary p-0"
                    onClick={() => window.open('/resume.pdf', '_blank')}
                  >
                    Download CV/Resume
                  </Button>
                </div>
              </div>
            </div>
          </div>
    
          <div className="bg-background p-8 rounded-xl shadow-lg border border-accent/10">
            <h3 className="text-xl font-serif font-semibold mb-8 relative after:content-[''] after:absolute after:bottom-[-10px] after:left-0 after:w-12 after:h-1 after:bg-accent">
              Send a Message
            </h3>
            
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2 text-foreground/80">
                    Name
                  </label>
                  <Input 
                    id="name" 
                    name="user_name" 
                    placeholder="Your name" 
                    className="border-input/50 focus:border-accent focus:ring-accent/30" 
                    required 
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2 text-foreground/80">
                    Email
                  </label>
                  <Input 
                    id="email" 
                    name="user_email" 
                    type="email" 
                    placeholder="Your email" 
                    className="border-input/50 focus:border-accent focus:ring-accent/30" 
                    required 
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2 text-foreground/80">
                  Subject
                </label>
                <Input 
                  id="subject" 
                  name="subject" 
                  placeholder="Project discussion" 
                  className="border-input/50 focus:border-accent focus:ring-accent/30" 
                  required 
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2 text-foreground/80">
                  Message
                </label>
                <Textarea 
                  id="message" 
                  name="message"
                  placeholder="I'd like to discuss a project with you..." 
                  rows={5} 
                  className="border-input/50 focus:border-accent focus:ring-accent/30" 
                  required 
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-gradient-to-r from-primary to-accent text-white hover:from-primary/90 hover:to-accent/90 transition-all" 
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;