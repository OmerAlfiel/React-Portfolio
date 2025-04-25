import React, { useEffect, useMemo, useState, useCallback, useRef } from 'react';
import { cn } from '@/lib/utils';
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogHeader, 
  DialogTitle,
  DialogClose
} from "@/components/ui/dialog";
import { 
  ChevronLeft, 
  ChevronRight, 
  ExternalLink,
  ArrowLeft,
  ArrowRight
} from 'lucide-react';

interface ProjectsProps {
  className?: string;
}

const projects = [
  {
    id: 1,
    title: 'Urban Loft Residence',
    category: 'Residential',
    description: 'A minimalist apartment that maximizes natural light and creates a sense of spaciousness in a compact urban setting.',
    location: 'New York City',
    year: '2022',
    image: 'https://images.unsplash.com/photo-1486718448742-163732cd1544?auto=format&fit=crop&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1486718448742-163732cd1544?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1494891848038-7bd202a2afeb?auto=format&fit=crop&q=80'
    ]
  },
  {
    id: 2,
    title: 'Harmony Public Library',
    category: 'Public',
    description: 'A modern public library designed to foster community engagement and provide accessible knowledge resources to all citizens.',
    location: 'Portland',
    year: '2021',
    image: 'https://images.unsplash.com/photo-1496307653780-42ee777d4833?auto=format&fit=crop&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1496307653780-42ee777d4833?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1460574283810-2aab119d8511?auto=format&fit=crop&q=80'
    ]
  },
  {
    id: 3,
    title: 'Skyline Office Tower',
    category: 'Commercial',
    description: 'A sustainable corporate headquarters with innovative energy systems and collaborative workspaces.',
    location: 'Chicago',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?auto=format&fit=crop&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&q=80'
    ]
  },
  {
    id: 4,
    title: 'Coastal Retreat',
    category: 'Residential',
    description: 'A vacation home that blurs the boundary between interior and exterior, embracing dramatic coastal views.',
    location: 'California Coast',
    year: '2022',
    image: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1439886183900-e79ec0057170?auto=format&fit=crop&q=80'
    ]
  },
  {
    id: 5,
    title: 'Urban Renewal Plaza',
    category: 'Urban',
    description: 'A revitalized public space that transforms a former industrial area into a vibrant community gathering place.',
    location: 'Detroit',
    year: '2021',
    image: 'https://images.unsplash.com/photo-1486718448742-163732cd1544?auto=format&fit=crop&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1486718448742-163732cd1544?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a?auto=format&fit=crop&q=80'
    ]
  },
  {
    id: 6,
    title: 'Solitude Museum of Art',
    category: 'Cultural',
    description: 'A museum designed to enhance the experience of viewing art through careful consideration of light, space, and circulation.',
    location: 'Seattle',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1431576901776-e539bd916ba2?auto=format&fit=crop&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1431576901776-e539bd916ba2?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1473177104440-ffee2f376098?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&q=80'
    ]
  }
];

const Projects = ({ className }: ProjectsProps) => {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [filter, setFilter] = useState('All');
  const [fullscreenMode, setFullscreenMode] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState<Record<string, boolean>>({});
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [showLoading, setShowLoading] = useState(false);
  const [preloadedImages, setPreloadedImages] = useState<string[]>([]);
  const [animatingFilter, setAnimatingFilter] = useState(false);
  const projectsRef = useRef<HTMLDivElement>(null);

  // Filter projects based on category
  const filteredProjects = useMemo(() => 
    filter === 'All' 
      ? projects 
      : projects.filter(project => project.category === filter),
    [filter]
  );

  // Get unique categories for filter buttons
  const categories = useMemo(() => 
    ['All', ...Array.from(new Set(projects.map(p => p.category)))],
    []
  );

  // Apply animation on initial load
  useEffect(() => {
    const cards = document.querySelectorAll('.project-card');
    
    // Add animate class to trigger the animation
    cards.forEach(card => {
      card.classList.add('animate');
    });
  }, []);
  
  // Handle filter change with animation
  const handleFilterChange = (newFilter: string) => {
    if (newFilter === filter || animatingFilter) return;
    
    setAnimatingFilter(true);
    
    // First animate all current cards out
    const currentCards = document.querySelectorAll('.project-card');
    currentCards.forEach(card => {
      card.classList.add('filter-exit');
      card.classList.remove('animate', 'filter-enter');
    });
    
    // After exit animation, change the filter and animate new cards in
    setTimeout(() => {
      setFilter(newFilter);
      setAnimatingFilter(false);
      
      // Slight delay to ensure DOM is updated with new filtered projects
      setTimeout(() => {
        const newCards = document.querySelectorAll('.project-card');
        newCards.forEach(card => {
          card.classList.add('filter-enter');
        });
      }, 50);
    }, 300); // Match this timing with cardExit animation duration
  };

  // More efficient image preloading
  const preloadImage = useCallback((src: string) => {
    return new Promise<void>((resolve) => {
      const img = new Image();
      img.src = src;
      
      if (img.complete) {
        handleImageLoad(src);
        resolve();
      } else {
        img.onload = () => {
          handleImageLoad(src);
          resolve();
        };
        img.onerror = () => {
          resolve();
        };
      }
    });
  }, []);

  // Handle image load events
  const handleImageLoad = (imageUrl: string) => {
    setImagesLoaded(prev => ({
      ...prev,
      [imageUrl]: true
    }));
    
    // Add to preloaded list
    setPreloadedImages(prev => {
      if (prev.includes(imageUrl)) {
        return prev;
      }
      return [...prev, imageUrl];
    });
  };

  const nextImage = useCallback(() => {
    if (!selectedProject) return;
    
    setCurrentImageIndex(prev => 
      (prev + 1) % selectedProject.galleryImages.length
    );
  }, [selectedProject]);
  
  const prevImage = useCallback(() => {
    if (!selectedProject) return;
    
    setCurrentImageIndex(prev => 
      prev === 0 ? selectedProject.galleryImages.length - 1 : prev - 1
    );
  }, [selectedProject]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isDialogOpen || !selectedProject) return;
      
      if (e.key === 'ArrowRight') {
        nextImage();
      } else if (e.key === 'ArrowLeft') {
        prevImage();
      } else if (e.key === 'Escape') {
        handleCloseDialog();
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isDialogOpen, selectedProject, currentImageIndex, nextImage, prevImage]);

  // Preload adjacent images when current image changes
  useEffect(() => {
    if (!selectedProject) return;
    
    const images = selectedProject.galleryImages;
    const nextIdx = (currentImageIndex + 1) % images.length;
    const prevIdx = currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1;
    
    // Preload next and previous images for smoother transitions
    Promise.all([
      preloadImage(images[nextIdx]),
      preloadImage(images[prevIdx])
    ]);
  }, [currentImageIndex, selectedProject, preloadImage]);

  const handleProjectSelect = (project: typeof projects[0]) => {
      // Pre-load all images before opening dialog
      const preloadAllImages = async () => {
          // Start loading all images in parallel
          await Promise.all(
              project.galleryImages.map(async (img) => {
                  if (!preloadedImages.includes(img)) {
                      await preloadImage(img);
                  }
              })
          );
          
          // Once all images are loaded, open dialog
          setSelectedProject(project);
          setCurrentImageIndex(0);
          setIsDialogOpen(true);
      };
  
      // Show loading state while images load
      setShowLoading(true);
      preloadAllImages().finally(() => {
          setShowLoading(false);
      });
  };

  const handleCloseDialog = () => {
    // Remove the delay - close immediately
    setIsDialogOpen(false);
    setSelectedProject(null);
    setFullscreenMode(false);
    setCurrentImageIndex(0);
  };

  return (
    <section id="projects" className={cn('section-padding', className)}>
      <div className="container mx-auto">
        {/* Header */}
        <div className="mb-12 max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-6">Featured Projects</h2>
          <p className="text-lg text-muted-foreground">
            Each project below outlines the challenge, my design approach, and the final outcome. 
            Click a thumbnail to view detailed images, schematic sketches, and process notes.
          </p>
        </div>
        
        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleFilterChange(category)}
              className={cn(
                'px-4 py-2 text-sm rounded-full transition-all duration-300',
                filter === category
                  ? 'bg-primary text-primary-foreground shadow-md'
                  : 'bg-card hover:bg-accent/10 border border-border hover:border-accent'
              )}
              disabled={animatingFilter}
            >
              {category}
            </button>
          ))}
        </div>
        
        {/* Project Cards Grid - With animations */}
        <div 
          ref={projectsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 min-h-[400px]"
        >
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="project-card group bg-card rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-border"
              onClick={() => handleProjectSelect(project)}
            >
              <div className="relative w-full h-[200px] overflow-hidden rounded-t-xl">
                {/* Card Image */}
                <img 
                  src={project.image} 
                  alt={project.title}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                />
              </div>
              
              {/* Card Content */}
              <div className="p-4 space-y-3">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-lg font-serif font-medium">{project.title}</h3>
                    <p className="text-sm text-muted-foreground">{project.location} • {project.year}</p>
                  </div>
                  <span className="inline-block px-3 py-1 text-xs font-medium bg-accent/90 text-background rounded-full">
                    {project.category}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground line-clamp-3">{project.description}</p>
                <button className="text-sm text-primary hover:text-primary/80 flex items-center gap-1">
                  View Project <ExternalLink size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Optimized Project Details Dialog */}
        <Dialog 
          open={isDialogOpen} 
          onOpenChange={(open) => !open && handleCloseDialog()}
          modal={true}
        >
          <DialogContent 
            className="max-w-4xl p-0 overflow-hidden bg-card max-h-[90vh] flex flex-col w-[95vw] animate-dialog-show"
          >
            {showLoading ? (
              <div className="p-6 w-full h-[80vh] flex items-center justify-center">
                <div className="w-8 h-8 border-4 border-primary/30 border-t-primary rounded-full animate-spin"></div>
              </div>
            ) : (!selectedProject || !imagesLoaded[selectedProject?.galleryImages[0]]) ? (
              <div className="p-6 w-full h-[80vh] flex flex-col animate-pulse">
                <div className="w-1/2 h-8 bg-muted/50 rounded-md mb-4"></div>
                <div className="w-full h-[60%] bg-muted/30 rounded-lg"></div>
                <div className="mt-4 w-full h-20 bg-muted/30 rounded-md"></div>
              </div>
            ) : (
              <div className="gallery-container flex flex-col h-full">
                <DialogHeader className="p-6 pb-3 border-b sticky top-0 bg-card z-10">
                  <div className="flex items-start justify-between">
                    <div>
                      <DialogTitle className="text-2xl font-serif mb-2">
                        {selectedProject.title}
                      </DialogTitle>
                      <DialogDescription className="text-base text-foreground/90">
                        {selectedProject.category} • {selectedProject.location} • {selectedProject.year}
                      </DialogDescription>
                    </div>
                    <div className="flex items-center gap-2">
                      <DialogClose className="rounded-full p-2 hover:bg-muted/20 transition-colors">
                        <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          width="24" 
                          height="24" 
                          viewBox="0 0 24 24" 
                          fill="none" 
                          stroke="currentColor" 
                          strokeWidth="2" 
                          strokeLinecap="round" 
                          strokeLinejoin="round"
                          className="lucide lucide-x"
                        >
                          <path d="M18 6 6 18"/>
                          <path d="m6 6 12 12"/>
                        </svg>
                        <span className="sr-only">Close</span>
                      </DialogClose>
                    </div>
                  </div>
                </DialogHeader>

                {/* Scrollable content area */}
                <div className="overflow-y-auto flex-1">
                  <div className="p-6 pt-4 gallery-layout">
                    {/* Main image with fixed-position navigation */}
                    <div className="relative mb-5 gallery-main-image">
                      <AspectRatio ratio={16 / 9} className="overflow-hidden rounded-lg border bg-muted/20">
                        {/* Use a container for the image transition */}
                        <div className="w-full h-full relative">
                          {selectedProject.galleryImages.map((image, idx) => (
                            <img
                              key={image}
                              src={image}
                              alt={`${selectedProject.title} - Image ${idx + 1}`}
                              className={cn(
                                "absolute inset-0 w-full h-full object-cover transition-opacity duration-300",
                                currentImageIndex === idx ? "opacity-100 z-10" : "opacity-0 z-0"
                              )}
                              onLoad={() => handleImageLoad(image)}
                            />
                          ))}
                          
                          {/* Loading indicator - only show when current image isn't loaded */}
                          {!imagesLoaded[selectedProject.galleryImages[currentImageIndex]] && (
                            <div className="absolute inset-0 flex items-center justify-center bg-muted/10 z-20">
                              <div className="w-8 h-8 border-4 border-primary/30 border-t-primary rounded-full animate-spin"></div>
                            </div>
                          )}
                        </div>
                      </AspectRatio>

                      {/* Image counter */}
                      {selectedProject.galleryImages.length > 1 && (
                        <div 
                          className={cn(
                            "absolute top-3 right-3 bg-background/90 backdrop-blur-sm text-foreground",
                            "px-3 py-1.5 rounded-full text-sm font-medium shadow-lg",
                            "transition-opacity duration-300 z-20",
                            imagesLoaded[selectedProject.galleryImages[currentImageIndex]] ? "opacity-100" : "opacity-0"
                          )}
                        >
                          <span className="relative z-10">
                            {currentImageIndex + 1} / {selectedProject.galleryImages.length}
                          </span>
                        </div>
                      )}
                      
                      {/* Large navigation buttons - always visible with proper contrast */}
                      {selectedProject.galleryImages.length > 1 && (
                        <>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              prevImage();
                            }}
                            className="absolute top-1/2 left-3 transform -translate-y-1/2 bg-background/80 hover:bg-background/95 backdrop-blur-sm rounded-full p-2 shadow-md z-10 transition-all duration-200"
                            aria-label="Previous image"
                          >
                            <ArrowLeft size={18} />
                          </button>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              nextImage();
                            }}
                            className="absolute top-1/2 right-3 transform -translate-y-1/2 bg-background/80 hover:bg-background/95 backdrop-blur-sm rounded-full p-2 shadow-md z-10 transition-all duration-200"
                            aria-label="Next image"
                          >
                            <ArrowRight size={18} />
                          </button>
                        </>
                      )}
                    </div>

                    {/* Project description - fixed height, scrollable */}
                    <div className="mb-5 project-description overflow-y-auto max-h-[100px]">
                      <p className="text-sm text-foreground/80 leading-relaxed">
                        {selectedProject.description}
                      </p>
                    </div>

                    {/* Fixed-height thumbnail gallery with gradient indicators */}
                    {selectedProject.galleryImages.length > 1 && (
                      <div className="thumbnail-container h-[80px] relative">
                        <div className="flex h-full gap-2 overflow-x-auto py-1 px-1 scrollbar-thin max-w-full">
                          {selectedProject.galleryImages.map((image, index) => (
                            <button
                              key={index}
                              onClick={() => setCurrentImageIndex(index)}
                              className={cn(
                                "flex-shrink-0 w-[70px] h-full rounded-md overflow-hidden transition-all duration-200",
                                currentImageIndex === index 
                                  ? "ring-2 ring-primary ring-offset-2" 
                                  : "opacity-70 hover:opacity-100"
                              )}
                              aria-label={`View image ${index + 1}`}
                            >
                              <img 
                                src={image} 
                                alt={`Thumbnail ${index + 1}`}
                                className="w-full h-full object-cover"
                                loading="lazy"
                              />
                            </button>
                          ))}
                        </div>
                        
                        {/* Side gradients to indicate scrollability */}
                        {selectedProject.galleryImages.length > 4 && (
                          <>
                            <div className="absolute left-0 top-0 bottom-0 w-8 pointer-events-none bg-gradient-to-r from-card to-transparent z-10"></div>
                            <div className="absolute right-0 top-0 bottom-0 w-8 pointer-events-none bg-gradient-to-l from-card to-transparent z-10"></div>
                          </>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default Projects;