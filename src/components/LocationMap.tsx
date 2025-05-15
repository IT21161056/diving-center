import React from 'react';
import { MapPin } from 'lucide-react';
import map_image from '/map.png'
import GoogleMapComponent from './GoogleMap';
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

// Replace with your Google Maps API key
const GOOGLE_MAPS_API_KEY = 'YOUR_GOOGLE_MAPS_API_KEY';

// Replace with your diving center's actual coordinates
const DIVING_CENTER_LOCATION = {
  lat: 6.10315, // Example: 26°14'32"N
  lng: 80.12513 // Example: 127°40'12"E
};

const LocationMap: React.FC = () => {
  return (
    <section id="location" className="section-padding bg-white">
      <div className="container-custom">
        <h2 className="section-title">
          <span className="inline-block mb-2"><MapPin className="w-8 h-8 inline-block mr-2 text-teal-500" /></span>
          <br />Visit Our Diving Center
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
          {/* Contact Information */}
          <div className="lg:col-span-2 bg-blue-50 p-8 rounded-xl shadow-md">
            <h3 className="text-2xl font-bold text-blue-900 mb-6">Blue Depths Diving</h3>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-blue-800">Address</h4>
                <p className="text-gray-700">123 Ocean Drive, Coral Bay</p>
              </div>
              
              <div>
                <h4 className="font-semibold text-blue-800">Contact</h4>
                <p className="text-gray-700">Phone: +1 (555) 123-4567</p>
                <p className="text-gray-700">Email: info@bluedepthsdiving.com</p>
              </div>
              
              <div>
                <h4 className="font-semibold text-blue-800">Opening Hours</h4>
                <p className="text-gray-700">Monday - Saturday: 8:00 AM - 6:00 PM</p>
                <p className="text-gray-700">Sunday: 10:00 AM - 4:00 PM</p>
              </div>
            </div>
            
            <div className="mt-8">
              <a 
                href={`https://www.google.com/maps/dir/?api=1&destination=${DIVING_CENTER_LOCATION.lat},${DIVING_CENTER_LOCATION.lng}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-teal-500 hover:bg-teal-600 text-white font-medium px-6 py-3 rounded-lg transition-colors"
              >
                Get Directions
              </a>
            </div>
          </div>
          
          {/* Google Map */}
          {/* <div className="lg:col-span-3 h-[400px] lg:h-[500px] rounded-xl overflow-hidden shadow-lg"> */}
            {/* <GoogleMapComponent 
              apiKey={GOOGLE_MAPS_API_KEY}
              mapCenter={DIVING_CENTER_LOCATION}
              markerPosition={DIVING_CENTER_LOCATION}
              zoom={15}
            /> */}
            {/* <img src={map_image}/> */}
          {/* </div> */}
          <div className="lg:col-span-3 h-[400px] lg:h-[500px] rounded-xl overflow-hidden shadow-lg">
  <TransformWrapper
    initialScale={1}
    minScale={0.5}
    maxScale={5}
    wheel={{ step: 0.1 }}
  >
    {({ zoomIn, zoomOut, resetTransform }) => (
      <>
        <div className="absolute z-10 flex gap-2 p-2">
          <button onClick={() => zoomIn()} className="p-2 bg-white rounded">
            +
          </button>
          <button onClick={() => zoomOut()} className="p-2 bg-white rounded">
            -
          </button>
          <button onClick={() => resetTransform()} className="p-2 bg-white rounded">
            Reset
          </button>
        </div>
        <TransformComponent>
          <img src={map_image} alt="Map" className="w-full h-full object-cover" />
        </TransformComponent>
      </>
    )}
  </TransformWrapper>
</div>
        </div>
      </div>
    </section>
  );
};

export default LocationMap; 