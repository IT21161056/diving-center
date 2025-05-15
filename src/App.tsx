import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import DiveLocations from './components/DiveLocations';
import DivePackages from './components/DivePackages';
import Instructors from './components/Instructors';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Booking from './components/Booking';
import LocationMap from './components/LocationMap';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans text-gray-900 bg-white">
      <Navbar />
      <main>
        <Hero />
        <DiveLocations />
        <DivePackages />
        <Instructors />
        <Gallery />
        <Testimonials />
        <Booking />
        <LocationMap />
      </main>
      <Footer />
    </div>
  );
}

export default App;