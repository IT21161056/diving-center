import React, { useRef, useState, useEffect } from 'react';
import { GraduationCap, Clock, Layers, DollarSign } from 'lucide-react';

interface Package {
  id: number;
  title: string;
  description: string;
  duration: string;
  price: number;
  level: string;
  features: string[];
  image: string;
  popular?: boolean;
}

const packages: Package[] = [
  {
    id: 1,
    title: "Discovery Dive",
    description: "Perfect for first-time divers. Experience the underwater world with a professional instructor in a controlled environment.",
    duration: "Half Day (3-4 hours)",
    price: 99,
    level: "No experience required",
    features: [
      "Pool training session",
      "Single reef dive (max 12m)",
      "All equipment provided",
      "Professional instructor",
      "Underwater photos",
    ],
    image: "https://images.pexels.com/photos/1645028/pexels-photo-1645028.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: 2,
    title: "Open Water Certification",
    description: "Become a certified diver with our comprehensive PADI Open Water course. Learn essential skills and enjoy four open water dives.",
    duration: "3-4 Days",
    price: 399,
    level: "Beginner",
    features: [
      "Complete PADI certification",
      "Theory sessions & pool training",
      "4 open water dives",
      "All equipment provided",
      "Digital learning materials",
      "Internationally recognized certification"
    ],
    image: "https://images.pexels.com/photos/3046637/pexels-photo-3046637.jpeg?auto=compress&cs=tinysrgb&w=600",
    popular: true
  },
  {
    id: 3,
    title: "Advanced Explorer",
    description: "For certified divers looking to explore more challenging dive sites including deep dives and underwater navigation.",
    duration: "2 Days (4 dives)",
    price: 249,
    level: "Intermediate (Open Water certification required)",
    features: [
      "Deep dive (up to 30m)",
      "Wreck exploration",
      "Night dive experience",
      "Drift dive in currents",
      "Equipment rental included",
      "Small groups (max 4 divers)"
    ],
    image: "https://images.pexels.com/photos/4666754/pexels-photo-4666754.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: 4,
    title: "Private Expedition",
    description: "Custom private diving experience with a dedicated instructor. Choose your sites and create a personalized adventure.",
    duration: "Full Day (2-3 dives)",
    price: 599,
    level: "All levels available",
    features: [
      "Private instructor",
      "Customized dive plan",
      "Luxury boat transportation",
      "Premium equipment",
      "Gourmet lunch included",
      "Professional photo/video package"
    ],
    image: "https://images.pexels.com/photos/37542/divers-scuba-reef-underwater-37542.jpeg?auto=compress&cs=tinysrgb&w=600"
  }
];

const DivePackages: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

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

  return (
    <section 
      id="packages" 
      ref={sectionRef}
      className="section-padding bg-white"
    >
      <div className="container-custom">
        <h2 className="section-title">
          <span className="inline-block mb-2"><Layers className="w-8 h-8 inline-block mr-2 text-teal-500" /></span>
          <br />Dive Packages
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {packages.map((pkg, index) => (
            <div 
              key={pkg.id}
              className={`card group transition-all duration-700 transform ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-20'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="relative overflow-hidden h-48">
                <img 
                  src={pkg.image} 
                  alt={pkg.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {pkg.popular && (
                  <div className="absolute top-0 right-0 bg-teal-500 text-white py-1 px-3 text-sm font-medium">
                    Popular
                  </div>
                )}
              </div>
              
              <div className="p-5">
                <h3 className="text-xl font-bold text-blue-900 mb-2">{pkg.title}</h3>
                
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center text-gray-600">
                    <Clock className="w-4 h-4 mr-1" />
                    <span className="text-sm">{pkg.duration}</span>
                  </div>
                  <div className="text-xl font-bold text-blue-600">
                    ${pkg.price}
                  </div>
                </div>
                
                <div className="flex items-center mb-4 text-gray-600">
                  <GraduationCap className="w-4 h-4 mr-1 flex-shrink-0" />
                  <span className="text-sm">{pkg.level}</span>
                </div>
                
                <p className="text-gray-700 mb-4 text-sm">{pkg.description}</p>
                
                <h4 className="text-blue-800 font-medium mb-2 text-sm">What's included:</h4>
                <ul className="text-sm text-gray-700 mb-5">
                  {pkg.features.slice(0, 3).map((feature, i) => (
                    <li key={i} className="flex items-start mb-1">
                      <span className="text-teal-500 mr-2">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                  {pkg.features.length > 3 && (
                    <li className="text-blue-600 text-sm mt-1">+ {pkg.features.length - 3} more</li>
                  )}
                </ul>
                
                <a
                  href="#booking"
                  className="btn-primary w-full text-sm py-2"
                >
                  Book Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DivePackages;