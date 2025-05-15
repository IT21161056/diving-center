import React, { useRef, useState, useEffect } from 'react';
import { Users, Star } from 'lucide-react';

interface Instructor {
  id: number;
  name: string;
  title: string;
  bio: string;
  certification: string;
  experience: string;
  specialties: string[];
  image: string;
}

const instructors: Instructor[] = [
  {
    id: 1,
    name: "Alex Rivera",
    title: "Lead Diving Instructor",
    bio: "With over 15 years of diving experience in waters around the world, Alex brings unparalleled expertise to every dive. Known for patience and attention to safety.",
    certification: "PADI Master Instructor",
    experience: "6000+ dives",
    specialties: ["Deep diving", "Night diving", "Underwater photography"],
    image: "https://images.pexels.com/photos/1396538/pexels-photo-1396538.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: 2,
    name: "Maya Chen",
    title: "Marine Biologist & Instructor",
    bio: "Maya combines her passion for marine life with expert diving instruction. Her dives include fascinating insights into marine ecosystems.",
    certification: "PADI IDC Staff Instructor",
    experience: "4500+ dives",
    specialties: ["Marine identification", "Conservation", "Coral ecology"],
    image: "https://images.pexels.com/photos/1680175/pexels-photo-1680175.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: 3,
    name: "James Wilson",
    title: "Technical Diving Specialist",
    bio: "James specializes in technical and wreck diving. His attention to detail and calm demeanor make him perfect for advanced diving expeditions.",
    certification: "TDI Technical Instructor",
    experience: "5000+ dives",
    specialties: ["Technical diving", "Wreck exploration", "Sidemount diving"],
    image: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: 4,
    name: "Sophia Torres",
    title: "Beginner Specialist",
    bio: "Sophia excels at introducing new divers to the underwater world. Her enthusiasm and encouraging teaching style helps beginners feel confident and safe.",
    certification: "PADI IDC Instructor",
    experience: "3000+ dives",
    specialties: ["Discover Scuba", "Open Water training", "Anxiety management"],
    image: "https://images.pexels.com/photos/2115257/pexels-photo-2115257.jpeg?auto=compress&cs=tinysrgb&w=600"
  }
];

const Instructors: React.FC = () => {
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
      id="instructors" 
      ref={sectionRef}
      className="section-padding bg-gradient-to-b from-blue-50 to-white"
    >
      <div className="container-custom">
        <h2 className="section-title">
          <span className="inline-block mb-2"><Users className="w-8 h-8 inline-block mr-2 text-teal-500" /></span>
          <br />Meet Our Expert Instructors
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {instructors.map((instructor, index) => (
            <div 
              key={instructor.id}
              className={`text-center transition-all duration-700 transform ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-20'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="mb-6 mx-auto relative">
                <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-lg mx-auto hover:scale-105 transition-transform duration-300">
                  <img 
                    src={instructor.image} 
                    alt={instructor.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Decorative circle */}
                <div className="absolute top-2 -left-3 w-12 h-12 rounded-full bg-teal-500 bg-opacity-20 z-0"></div>
                <div className="absolute bottom-2 -right-3 w-20 h-20 rounded-full bg-blue-500 bg-opacity-10 z-0"></div>
              </div>
              
              <h3 className="text-xl font-bold text-blue-900">{instructor.name}</h3>
              <p className="text-teal-600 font-medium mb-2">{instructor.title}</p>
              
              <div className="mb-3 flex items-center justify-center">
                <div className="px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-medium">
                  {instructor.certification}
                </div>
              </div>
              
              <p className="text-gray-700 text-sm mb-4">{instructor.bio}</p>
              
              <div className="text-sm text-gray-600 mb-2">
                <strong>Experience:</strong> {instructor.experience}
              </div>
              
              <div className="flex flex-wrap justify-center gap-2">
                {instructor.specialties.map((specialty, i) => (
                  <span 
                    key={i} 
                    className="px-2 py-1 bg-gray-100 rounded-full text-xs text-gray-700"
                  >
                    {specialty}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Instructors;