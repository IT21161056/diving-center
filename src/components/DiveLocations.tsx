import React, { useState, useEffect, useRef } from 'react';
import { Map, Anchor } from 'lucide-react';
import ocean_map from '/diving_points.png'

interface Location {
  id: number;
  name: string;
  description: string;
  features: string[];
  depth: string;
  experience: string;
  image: string;
  coordinates: { x: number; y: number };
}

const locations: Location[] = [
  {
    id: 1,
    name: "Coral Bay Reef",
    description: "A vibrant reef system teeming with colorful coral formations and a diverse array of tropical fish.",
    features: ["Soft and hard corals", "Sea turtles", "Reef sharks", "Barracudas"],
    depth: "5-25 meters",
    experience: "Beginner to Intermediate",
    image: "/images/dive-locations/coral-bay-reef.jpg",
    coordinates: { x: 25, y: 40 }
  },
  {
    id: 10,
    name: "Coral Bay Reef",
    description: "A vibrant reef system teeming with colorful coral formations and a diverse array of tropical fish.",
    features: ["Soft and hard corals", "Sea turtles", "Reef sharks", "Barracudas"],
    depth: "5-25 meters",
    experience: "Beginner to Intermediate",
    image: "/images/dive-locations/coral-bay-reef.jpg",
    coordinates: { x: 15, y: 38 }
  },
  {
    id: 11,
    name: "Coral Bay Reef",
    description: "A vibrant reef system teeming with colorful coral formations and a diverse array of tropical fish.",
    features: ["Soft and hard corals", "Sea turtles", "Reef sharks", "Barracudas"],
    depth: "5-25 meters",
    experience: "Beginner to Intermediate",
    image: "/images/dive-locations/coral-bay-reef.jpg",
    coordinates: { x: 30, y: 34 }
  },
  {
    id: 12,
    name: "Coral Bay Reef",
    description: "A vibrant reef system teeming with colorful coral formations and a diverse array of tropical fish.",
    features: ["Soft and hard corals", "Sea turtles", "Reef sharks", "Barracudas"],
    depth: "5-25 meters",
    experience: "Beginner to Intermediate",
    image: "/images/dive-locations/coral-bay-reef.jpg",
    coordinates: { x: 39, y: 30 }
  },
  {
    id: 13,
    name: "Coral Bay Reef",
    description: "A vibrant reef system teeming with colorful coral formations and a diverse array of tropical fish.",
    features: ["Soft and hard corals", "Sea turtles", "Reef sharks", "Barracudas"],
    depth: "5-25 meters",
    experience: "Beginner to Intermediate",
    image: "/images/dive-locations/coral-bay-reef.jpg",
    coordinates: { x: 21, y: 29 }
  },
  {
    id: 14,
    name: "Coral Bay Reef",
    description: "A vibrant reef system teeming with colorful coral formations and a diverse array of tropical fish.",
    features: ["Soft and hard corals", "Sea turtles", "Reef sharks", "Barracudas"],
    depth: "5-25 meters",
    experience: "Beginner to Intermediate",
    image: "/images/dive-locations/coral-bay-reef.jpg",
    coordinates: { x: 26, y: 20 }
  },
  {
    id: 15,
    name: "Coral Bay Reef",
    description: "A vibrant reef system teeming with colorful coral formations and a diverse array of tropical fish.",
    features: ["Soft and hard corals", "Sea turtles", "Reef sharks", "Barracudas"],
    depth: "5-25 meters",
    experience: "Beginner to Intermediate",
    image: "/images/dive-locations/coral-bay-reef.jpg",
    coordinates: { x: 34, y: 24 }
  },
  {
    id: 16,
    name: "Coral Bay Reef",
    description: "A vibrant reef system teeming with colorful coral formations and a diverse array of tropical fish.",
    features: ["Soft and hard corals", "Sea turtles", "Reef sharks", "Barracudas"],
    depth: "5-25 meters",
    experience: "Beginner to Intermediate",
    image: "/images/dive-locations/coral-bay-reef.jpg",
    coordinates: { x: 42, y: 16 }
  },
  {
    id: 17,
    name: "Coral Bay Reef",
    description: "A vibrant reef system teeming with colorful coral formations and a diverse array of tropical fish.",
    features: ["Soft and hard corals", "Sea turtles", "Reef sharks", "Barracudas"],
    depth: "5-25 meters",
    experience: "Beginner to Intermediate",
    image: "/images/dive-locations/coral-bay-reef.jpg",
    coordinates: { x: 36, y: 10 }
  },
  {
    id: 18,
    name: "Coral Bay Reef",
    description: "A vibrant reef system teeming with colorful coral formations and a diverse array of tropical fish.",
    features: ["Soft and hard corals", "Sea turtles", "Reef sharks", "Barracudas"],
    depth: "5-25 meters",
    experience: "Beginner to Intermediate",
    image: "/images/dive-locations/coral-bay-reef.jpg",
    coordinates: { x: 25, y: 4 }
  },
  {
    id: 2,
    name: "Blue Lagoon",
    description: "Crystal clear waters with excellent visibility and underwater caves to explore.",
    features: ["Cave systems", "Manta rays", "Moray eels", "Crystal clear water"],
    depth: "10-30 meters",
    experience: "Intermediate",
    image: "/images/dive-locations/blue-lagoon.jpg",
    coordinates: { x: 55, y: 60 }
  },
  {
    id: 3,
    name: "Shipwreck Point",
    description: "Explore a well-preserved shipwreck that has become an artificial reef home to numerous marine species.",
    features: ["Historic shipwreck", "Octopuses", "Schooling fish", "Coral encrustation"],
    depth: "15-40 meters",
    experience: "Advanced",
    image: "/images/dive-locations/shipwreck-point.jpg",
    coordinates: { x: 75, y: 30 }
  },
  {
    id: 4,
    name: "Manta Channel",
    description: "A cleaning station where manta rays regularly visit to have parasites removed by cleaner fish.",
    features: ["Manta rays", "Cleaning stations", "Strong currents", "Pelagic species"],
    depth: "12-25 meters",
    experience: "Intermediate to Advanced",
    image: "/images/dive-locations/manta-channel.jpg",
    coordinates: { x: 39, y: 70 }
  },
  {
    id: 20,
    name: "Manta Channel",
    description: "A cleaning station where manta rays regularly visit to have parasites removed by cleaner fish.",
    features: ["Manta rays", "Cleaning stations", "Strong currents", "Pelagic species"],
    depth: "12-25 meters",
    experience: "Intermediate to Advanced",
    image: "/images/dive-locations/manta-channel.jpg",
    coordinates: { x: 37, y: 82 }
  },
  {
    id: 21,
    name: "Manta Channel",
    description: "A cleaning station where manta rays regularly visit to have parasites removed by cleaner fish.",
    features: ["Manta rays", "Cleaning stations", "Strong currents", "Pelagic species"],
    depth: "12-25 meters",
    experience: "Intermediate to Advanced",
    image: "/images/dive-locations/manta-channel.jpg",
    coordinates: { x: 30, y: 90 }
  }
  , {
    id: 22,
    name: "Manta Channel",
    description: "A cleaning station where manta rays regularly visit to have parasites removed by cleaner fish.",
    features: ["Manta rays", "Cleaning stations", "Strong currents", "Pelagic species"],
    depth: "12-25 meters",
    experience: "Intermediate to Advanced",
    image: "/images/dive-locations/manta-channel.jpg",
    coordinates: { x: 22, y: 78 }
  },
  {
    id: 23,
    name: "Manta Channel",
    description: "A cleaning station where manta rays regularly visit to have parasites removed by cleaner fish.",
    features: ["Manta rays", "Cleaning stations", "Strong currents", "Pelagic species"],
    depth: "12-25 meters",
    experience: "Intermediate to Advanced",
    image: "/images/dive-locations/manta-channel.jpg",
    coordinates: { x: 31, y: 76 }
  },
  {
    id: 24,
    name: "Manta Channel",
    description: "A cleaning station where manta rays regularly visit to have parasites removed by cleaner fish.",
    features: ["Manta rays", "Cleaning stations", "Strong currents", "Pelagic species"],
    depth: "12-25 meters",
    experience: "Intermediate to Advanced",
    image: "/images/dive-locations/manta-channel.jpg",
    coordinates: { x: 30, y: 68 }
  },
  {
    id: 25,
    name: "Manta Channel",
    description: "A cleaning station where manta rays regularly visit to have parasites removed by cleaner fish.",
    features: ["Manta rays", "Cleaning stations", "Strong currents", "Pelagic species"],
    depth: "12-25 meters",
    experience: "Intermediate to Advanced",
    image: "/images/dive-locations/manta-channel.jpg",
    coordinates: { x: 28, y: 61 }
  },
  {
    id: 26,
    name: "Manta Channel",
    description: "A cleaning station where manta rays regularly visit to have parasites removed by cleaner fish.",
    features: ["Manta rays", "Cleaning stations", "Strong currents", "Pelagic species"],
    depth: "12-25 meters",
    experience: "Intermediate to Advanced",
    image: "/images/dive-locations/manta-channel.jpg",
    coordinates: { x: 20, y: 54 }
  },
  {
    id: 26,
    name: "Manta Channel",
    description: "A cleaning station where manta rays regularly visit to have parasites removed by cleaner fish.",
    features: ["Manta rays", "Cleaning stations", "Strong currents", "Pelagic species"],
    depth: "12-25 meters",
    experience: "Intermediate to Advanced",
    image: "/images/dive-locations/manta-channel.jpg",
    coordinates: { x: 26, y: 49 }
  },
  {
    id: 27,
    name: "Manta Channel",
    description: "A cleaning station where manta rays regularly visit to have parasites removed by cleaner fish.",
    features: ["Manta rays", "Cleaning stations", "Strong currents", "Pelagic species"],
    depth: "12-25 meters",
    experience: "Intermediate to Advanced",
    image: "/images/dive-locations/manta-channel.jpg",
    coordinates: { x: 33, y: 45 }
  },
  {
    id: 27,
    name: "Manta Channel",
    description: "A cleaning station where manta rays regularly visit to have parasites removed by cleaner fish.",
    features: ["Manta rays", "Cleaning stations", "Strong currents", "Pelagic species"],
    depth: "12-25 meters",
    experience: "Intermediate to Advanced",
    image: "/images/dive-locations/manta-channel.jpg",
    coordinates: { x: 40, y: 39 }
  },
  {
    id: 28,
    name: "Manta Channel",
    description: "A cleaning station where manta rays regularly visit to have parasites removed by cleaner fish.",
    features: ["Manta rays", "Cleaning stations", "Strong currents", "Pelagic species"],
    depth: "12-25 meters",
    experience: "Intermediate to Advanced",
    image: "/images/dive-locations/manta-channel.jpg",
    coordinates: { x: 42, y: 47 }
  }
];

const DiveLocations: React.FC = () => {
  const [activeLocation, setActiveLocation] = useState<Location | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const detailsRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<HTMLDivElement>(null);
  const [layout, setLayout] = useState<'desktop' | 'mobile'>('desktop');

  useEffect(() => {
    // Set first location as active by default
    setActiveLocation(locations[0]);
    
    const handleResize = () => {
      setLayout(window.innerWidth >= 1024 ? 'desktop' : 'mobile');
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    
    // Section visibility observer
    const sectionObserver = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );
    
    if (sectionRef.current) {
      sectionObserver.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        sectionObserver.unobserve(sectionRef.current);
      }
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Function to handle location selection
  const handleLocationSelect = (location: Location) => {
    setActiveLocation(location);
    
    // Animate details
    if (detailsRef.current) {
      detailsRef.current.classList.add('animate-fade-in');
      setTimeout(() => {
        if (detailsRef.current) {
          detailsRef.current.classList.remove('animate-fade-in');
        }
      }, 500);
    }
  };

  return (
    <section 
      id="locations" 
      ref={sectionRef}
      className={`section-padding bg-blue-50 transition-opacity duration-1000 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="container-custom">
        <h2 className="section-title">
          <span className="inline-block mb-2"><Map className="w-8 h-8 inline-block mr-2 text-teal-500" /></span>
          <br />Discover Our Dive Locations
        </h2>
        
        <div className={`grid grid-cols-1 ${layout === 'desktop' ? 'lg:grid-cols-2' : ''} gap-8 items-center`}>
          {/* Interactive Map */}
          <div 
            ref={mapRef}
            className={`relative bg-blue-900 rounded-xl overflow-hidden shadow-lg ${
              layout === 'desktop' ? 'order-1' : 'order-2'
            }`}
            style={{ height: '800px' }}
          >
            {/* Map Background Image */}
            <div className="absolute inset-0">
              <div className="absolute inset-0 opacity-90">
                <img 
                  src={ocean_map}
                  alt="Ocean Map"
                  className=" object-contain w-full h-full"
                />
              </div>
              <div className="absolute inset-0 bg-blue-900/50"></div>
              
              {/* Map Grid Lines */}
              <div className="absolute inset-0 opacity-20">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
                      <path d="M 80 0 L 0 0 0 80" fill="none" stroke="white" strokeWidth="0.5" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
              </div>
              
              {/* Map Decorative Elements */}
              <div className="absolute top-10 right-10 text-white opacity-60">
                <Anchor className="w-12 h-12" />
              </div>
              
              <div className="absolute bottom-5 left-5 text-white opacity-70 text-xs font-mono">
                LAT 26°14'32"N • LONG 127°40'12"E
              </div>
              
              {/* Location Markers */}
              {locations.map((location) => (
                <div key={location.id} className="location-marker" data-id={location.id}>
                  <button
                    className={`absolute rounded-full transition-all duration-300 border-2 ${
                      activeLocation?.id === location.id 
                        ? 'w-6 h-6 bg-teal-500 border-white z-20 shadow-lg shadow-teal-800/50' 
                        : 'w-4 h-4 bg-blue-500 border-blue-200 hover:scale-110 z-10'
                    }`}
                    style={{ 
                      left: `${location.coordinates.x}%`, 
                      top: `${location.coordinates.y}%`,
                      transform: `translate(-50%, -50%)`,
                    }}
                    onClick={() => handleLocationSelect(location)}
                    aria-label={`Select ${location.name}`}
                  >
                    {activeLocation?.id === location.id && (
                      <div className="absolute inset-0 rounded-full animate-ping bg-teal-400 opacity-50"></div>
                    )}
                    <span className="sr-only">{location.name}</span>
                  </button>
                  
                  {activeLocation?.id === location.id && (
                    <div 
                      className="absolute text-white font-semibold text-sm bg-blue-900/80 px-3 py-1 rounded-full whitespace-nowrap"
                      style={{ 
                        left: `${location.coordinates.x}%`, 
                        top: `${location.coordinates.y + 2}%`,
                        transform: 'translate(-50%, 0)',
                      }}
                    >
                      {location.name}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          
          {/* Location Details */}
          {activeLocation && (
            <div 
              ref={detailsRef}
              className={`bg-white rounded-xl shadow-lg p-6 lg:p-8 transition-all duration-500 ${
                layout === 'desktop' ? 'order-2' : 'order-1'
              }`}
            >
              <h3 className="text-2xl font-bold text-blue-900 mb-4">{activeLocation.name}</h3>
              
              <div className="mb-6 overflow-hidden rounded-lg h-48">
                <img 
                  src={activeLocation.image} 
                  alt={activeLocation.name} 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
              </div>
              
              <p className="text-gray-700 mb-4">{activeLocation.description}</p>
              
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <h4 className="font-semibold text-blue-800">Depth</h4>
                  <p>{activeLocation.depth}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-800">Experience Level</h4>
                  <p>{activeLocation.experience}</p>
                </div>
              </div>
              
              <h4 className="font-semibold text-blue-800 mb-2">Highlights</h4>
              <ul className="grid grid-cols-2 gap-x-2 gap-y-1">
                {activeLocation.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-teal-500 mr-2">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        
        {/* Location Navigation */}
        <div className="mt-12 flex justify-center gap-2">
          {locations.map((location) => (
            <button
              key={location.id}
              onClick={() => handleLocationSelect(location)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                activeLocation?.id === location.id 
                  ? 'bg-teal-500 w-12' 
                  : 'bg-gray-300 hover:bg-teal-300'
              }`}
              aria-label={`Navigate to ${location.name}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DiveLocations;