import React, { useRef, useState, useEffect } from 'react';
import { MessageSquareQuote, ChevronLeft, ChevronRight } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  location: string;
  text: string;
  rating: number;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    location: "New York, USA",
    text: "My diving experience with Blue Depths was absolutely incredible. The instructors were knowledgeable and made me feel safe as a beginner. Seeing the vibrant coral reefs and swimming alongside turtles was a dream come true!",
    rating: 5,
    image: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=200"
  },
  {
    id: 2,
    name: "Michael Chen",
    location: "Toronto, Canada",
    text: "As an experienced diver, I've been on many dives worldwide, but Blue Depths stands out for their professionalism and attention to detail. The dive sites they took us to were pristine, and their commitment to ocean conservation is commendable.",
    rating: 5,
    image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=200"
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    location: "London, UK",
    text: "I took the Open Water certification course, and it exceeded all my expectations. My instructor Maya was patient, thorough, and made learning fun. The equipment was top-notch, and the whole experience was seamless from booking to certification.",
    rating: 5,
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200"
  },
  {
    id: 4,
    name: "David Ngata",
    location: "Sydney, Australia",
    text: "The Advanced Explorer package was absolutely worth it! The night dive was unlike anything I've ever experienced, and exploring the shipwreck was fascinating. The guides know all the best spots and are passionate about marine life.",
    rating: 4,
    image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200"
  }
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const testimonialRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
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

  const nextTestimonial = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  const prevTestimonial = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  // Auto-scroll testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 8000);
    
    return () => clearInterval(interval);
  }, [currentIndex, isAnimating]);

  return (
    <section 
      id="testimonials" 
      ref={sectionRef}
      className="section-padding relative overflow-hidden"
      style={{ 
        background: `linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(236,246,255,1) 100%)` 
      }}
    >
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-blue-300 animate-float"
            style={{
              width: `${Math.random() * 300 + 50}px`,
              height: `${Math.random() * 300 + 50}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 20 + 10}s`,
              opacity: 0.1,
              filter: 'blur(50px)',
            }}
          ></div>
        ))}
      </div>
      
      <div className="container-custom relative z-10">
        <h2 className="section-title">
          <span className="inline-block mb-2">
            <MessageSquareQuote className="w-8 h-8 inline-block mr-2 text-teal-500" />
          </span>
          <br />What Our Divers Say
        </h2>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Testimonial Carousel */}
          <div 
            ref={testimonialRef}
            className={`relative bg-white rounded-2xl shadow-lg p-6 md:p-10 transition-all duration-500 ${
              isVisible 
                ? 'opacity-100 transform-none' 
                : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="absolute top-0 left-0 transform -translate-x-4 -translate-y-4">
              <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 20H8V32H20V20ZM40 20H28V32H40V20Z" fill="#0EA5E9" fillOpacity="0.2"/>
              </svg>
            </div>
          
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden flex-shrink-0 border-4 border-white shadow-md">
                <img 
                  src={testimonials[currentIndex].image} 
                  alt={testimonials[currentIndex].name} 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className={`flex-1 transition-opacity duration-500 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} filled={i < testimonials[currentIndex].rating} />
                  ))}
                </div>
                
                <blockquote className="text-gray-700 text-lg md:text-xl italic mb-4">
                  "{testimonials[currentIndex].text}"
                </blockquote>
                
                <div>
                  <p className="font-bold text-blue-900">{testimonials[currentIndex].name}</p>
                  <p className="text-gray-600">{testimonials[currentIndex].location}</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Controls */}
          <div className="flex justify-center mt-8 space-x-4">
            <button 
              className="p-2 rounded-full bg-white shadow hover:bg-gray-100 transition-colors duration-300"
              onClick={prevTestimonial}
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6 text-blue-800" />
            </button>
            
            <div className="flex space-x-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    i === currentIndex ? 'bg-blue-600 w-8' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            
            <button 
              className="p-2 rounded-full bg-white shadow hover:bg-gray-100 transition-colors duration-300"
              onClick={nextTestimonial}
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6 text-blue-800" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

// Star component
const Star: React.FC<{ filled: boolean }> = ({ filled }) => {
  return (
    <svg 
      className={`w-5 h-5 ${filled ? 'text-yellow-400' : 'text-gray-300'}`} 
      fill="currentColor" 
      viewBox="0 0 20 20"
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
};

export default Testimonials;