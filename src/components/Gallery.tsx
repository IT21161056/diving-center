import React, { useState, useRef, useEffect } from 'react';
import { Image, X, ChevronLeft, ChevronRight } from 'lucide-react';

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: string;
}

const images: GalleryImage[] = [
  {
    id: 1,
    src: "https://images.pexels.com/photos/1645028/pexels-photo-1645028.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Diver exploring coral reef",
    category: "Reefs"
  },
  {
    id: 2,
    src: "https://images.pexels.com/photos/3046637/pexels-photo-3046637.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "School of tropical fish",
    category: "Marine Life"
  },
  {
    id: 3,
    src: "https://images.pexels.com/photos/3262993/pexels-photo-3262993.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Sea turtle swimming",
    category: "Marine Life"
  },
  {
    id: 4,
    src: "https://images.pexels.com/photos/4666754/pexels-photo-4666754.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Diving at a shipwreck",
    category: "Wrecks"
  },
  {
    id: 5,
    src: "https://images.pexels.com/photos/1433052/pexels-photo-1433052.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Underwater caves",
    category: "Caves"
  },
  {
    id: 6,
    src: "https://images.pexels.com/photos/2122422/pexels-photo-2122422.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Diving with manta rays",
    category: "Marine Life"
  },
  {
    id: 7,
    src: "https://images.pexels.com/photos/37542/divers-scuba-reef-underwater-37542.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Colorful coral formations",
    category: "Reefs"
  },
  {
    id: 8,
    src: "https://images.pexels.com/photos/3369526/pexels-photo-3369526.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Night diving with lights",
    category: "Night Dives"
  }
];

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [filter, setFilter] = useState<string>('All');
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const categories = ['All', ...Array.from(new Set(images.map(img => img.category)))];
  
  const filteredImages = filter === 'All' 
    ? images 
    : images.filter(img => img.category === filter);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const openLightbox = (image: GalleryImage) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (!selectedImage) return;
    
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
    let newIndex;
    
    if (direction === 'prev') {
      newIndex = currentIndex > 0 ? currentIndex - 1 : filteredImages.length - 1;
    } else {
      newIndex = currentIndex < filteredImages.length - 1 ? currentIndex + 1 : 0;
    }
    
    setSelectedImage(filteredImages[newIndex]);
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedImage) return;
      
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') navigateImage('prev');
      if (e.key === 'ArrowRight') navigateImage('next');
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage, filteredImages]);

  return (
    <section 
      id="gallery" 
      ref={sectionRef}
      className="section-padding bg-blue-50"
    >
      <div className="container-custom">
        <h2 className="section-title">
          <span className="inline-block mb-2"><Image className="w-8 h-8 inline-block mr-2 text-teal-500" /></span>
          <br />Underwater Gallery
        </h2>
        
        {/* Category filters */}
        <div className="flex justify-center flex-wrap gap-2 mb-8">
          {categories.map(category => (
            <button
              key={category}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                filter === category 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
              onClick={() => setFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>
        
        {/* Gallery grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredImages.map((image, index) => (
            <div 
              key={image.id}
              className={`overflow-hidden rounded-lg cursor-pointer transition-all duration-700 ${
                isVisible 
                  ? 'opacity-100 transform-none' 
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${(index % 8) * 100}ms` }}
              onClick={() => openLightbox(image)}
            >
              <div className="relative group h-60 overflow-hidden">
                <img 
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 w-full">
                    <span className="text-white text-sm">{image.alt}</span>
                    <div className="mt-1">
                      <span className="text-xs px-2 py-1 bg-teal-500/70 text-white rounded-full">
                        {image.category}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Lightbox */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
            <button 
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors duration-300"
              onClick={closeLightbox}
            >
              <X className="w-8 h-8" />
            </button>
            
            <button 
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors duration-300"
              onClick={() => navigateImage('prev')}
            >
              <ChevronLeft className="w-10 h-10" />
            </button>
            
            <div className="relative max-w-4xl max-h-[80vh]">
              <img 
                src={selectedImage.src} 
                alt={selectedImage.alt}
                className="max-w-full max-h-[80vh] object-contain"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
                <h3 className="text-lg font-medium">{selectedImage.alt}</h3>
                <p className="text-sm text-gray-300">{selectedImage.category}</p>
              </div>
            </div>
            
            <button 
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors duration-300"
              onClick={() => navigateImage('next')}
            >
              <ChevronRight className="w-10 h-10" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;