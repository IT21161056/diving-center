import React, { useState, useRef, useEffect } from 'react';
import { CalendarDays, Users, Compass, Mail, Phone, Check } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  date: string;
  people: number;
  package: string;
  message: string;
}

const initialFormData: FormData = {
  name: '',
  email: '',
  phone: '',
  date: '',
  people: 1,
  package: '',
  message: '',
};

const Booking: React.FC = () => {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData(initialFormData);
      
      // Reset form after showing success message
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section 
      id="booking" 
      ref={sectionRef}
      className="section-padding bg-blue-900 text-white"
    >
      <div className="container-custom">
        <h2 className="section-title text-white">
          <span className="inline-block mb-2">
            <CalendarDays className="w-8 h-8 inline-block mr-2 text-teal-400" />
          </span>
          <br />Book Your Dive Adventure
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Form */}
          <div 
            className={`bg-white rounded-xl shadow-xl p-6 md:p-8 text-gray-800 transition-all duration-700 ${
              isVisible 
                ? 'opacity-100 transform-none' 
                : 'opacity-0 -translate-x-10'
            }`}
          >
            {isSubmitted ? (
              <div className="text-center py-10">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Check className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-green-600 mb-2">Booking Request Sent!</h3>
                <p className="text-gray-600">
                  Thank you for booking with Blue Depths Diving. We'll contact you within 24 hours to confirm your reservation.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-1">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      placeholder="Full Name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-1">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      placeholder="Email"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-gray-700 font-medium mb-1">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      placeholder="Phone Number"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="date" className="block text-gray-700 font-medium mb-1">Preferred Date</label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      required
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="people" className="block text-gray-700 font-medium mb-1">Number of People</label>
                    <input
                      type="number"
                      id="people"
                      name="people"
                      value={formData.people}
                      onChange={handleChange}
                      min="1"
                      max="10"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="package" className="block text-gray-700 font-medium mb-1">Dive Package</label>
                    <select
                      id="package"
                      name="package"
                      value={formData.package}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    >
                      <option value="">Select a Package</option>
                      <option value="discovery">Discovery Dive</option>
                      <option value="openwater">Open Water Certification</option>
                      <option value="advanced">Advanced Explorer</option>
                      <option value="private">Private Expedition</option>
                    </select>
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-1">Additional Information</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="Tell us about your experience level or any special requests"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className={`btn-primary w-full ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Submitting...' : 'Book Now'}
                </button>
              </form>
            )}
          </div>
          
          {/* Contact Info */}
          <div 
            className={`text-white transition-all duration-700 ${
              isVisible 
                ? 'opacity-100 transform-none' 
                : 'opacity-0 translate-x-10'
            }`}
          >
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-800 rounded-full p-3 flex-shrink-0">
                  <Compass className="w-6 h-6 text-teal-300" />
                </div>
                <div>
                  <h4 className="font-semibold text-xl text-teal-300">Our Location</h4>
                  <p className="text-blue-100 mt-1">123 Ocean Drive, Coral Bay</p>
                  <p className="text-blue-100">Tropical Islands, 98765</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-blue-800 rounded-full p-3 flex-shrink-0">
                  <Mail className="w-6 h-6 text-teal-300" />
                </div>
                <div>
                  <h4 className="font-semibold text-xl text-teal-300">Email Us</h4>
                  <p className="text-blue-100 mt-1">info@bluedepthsdiving.com</p>
                  <p className="text-blue-100">bookings@bluedepthsdiving.com</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-blue-800 rounded-full p-3 flex-shrink-0">
                  <Phone className="w-6 h-6 text-teal-300" />
                </div>
                <div>
                  <h4 className="font-semibold text-xl text-teal-300">Call Us</h4>
                  <p className="text-blue-100 mt-1">+1 (555) 123-4567</p>
                  <p className="text-blue-100">+1 (555) 987-6543</p>
                </div>
              </div>
            </div>
            
            <div className="mt-12">
              <h4 className="font-semibold text-xl text-teal-300 mb-4">Business Hours</h4>
              <ul className="space-y-2 text-blue-100">
                <li className="flex justify-between">
                  <span>Monday - Friday:</span>
                  <span>8:00 AM - 6:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Saturday:</span>
                  <span>7:00 AM - 7:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Sunday:</span>
                  <span>8:00 AM - 5:00 PM</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;