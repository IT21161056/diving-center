import React, { useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';
// Import the hero image directly - this is just for testing


const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        // Create parallax effect
        const scrollPosition = window.scrollY;
        const opacity = 1 - Math.min(scrollPosition / 700, 1);
        const translateY = scrollPosition * 0.4;
        
        heroRef.current.style.opacity = opacity.toString();
        heroRef.current.style.transform = `translateY(${translateY}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
// For debugging

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: `url('https://scontent.fcmb8-1.fna.fbcdn.net/v/t1.6435-9/46683476_287382735453088_4408809475809476608_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=TkyUNWKUxMYQ7kNvwFkJjcD&_nc_oc=Adkd7gpdH9c81MuezVg9vvgKedqYARkJVg4mglyxSa3DgUcDvSTOckcO453jCjwDZLCdUvwvm1TITFH0XfsS7dtz&_nc_zt=23&_nc_ht=scontent.fcmb8-1.fna&_nc_gid=vdOPazdSQeoc4rwUru8eYw&oh=00_AfJbTGtAPJUsS77sIb07MwCzOAMTbCfchMQLGe0TD3vR8w&oe=684C2352')`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/60 to-blue-950/90"></div>
      </div>

      {/* Bubbles animation */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white bg-opacity-20 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 50 + 10}px`,
              height: `${Math.random() * 50 + 10}px`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 10 + 5}s`,
            }}
          ></div>
        ))}
      </div>

      {/* Content */}
      <div ref={heroRef} className="container-custom z-10 text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          Explore the Ocean's <br />
          <span className="text-gradient bg-gradient-to-r from-teal-300 to-blue-300">Secrets</span>
        </h1>
        <p className="text-xl md:text-2xl text-teal-100 max-w-2xl mx-auto mb-10">
          Experience the breathtaking underwater world with our expert guides 
          and discover the beauty beneath the waves.
        </p>
        <a href="#booking" className="btn-primary text-lg mx-auto">
          Book a Dive
        </a>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-10 h-10 text-white opacity-70" />
      </div>
    </section>
  );
};

export default Hero;