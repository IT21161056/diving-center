import React from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';


// Default center coordinates for the map (can be changed to your diving center's location)
const center = {
  lat: 26.2432,  // 26°14'32"N from the coordinates in the DiveLocations component
  lng: 127.6703  // 127°40'12"E from the coordinates in the DiveLocations component
};

// Use direct public path
const locationIconPath = './images/gallery/location.png';

const containerStyle = {
  width: '100%',
  height: '100%',
  borderRadius: '0.75rem'  // Matches the rounded-xl style
};

interface GoogleMapComponentProps {
  apiKey: string;
  mapCenter?: { lat: number; lng: number };
  markerPosition?: { lat: number; lng: number };
  zoom?: number;
}

const GoogleMapComponent: React.FC<GoogleMapComponentProps> = ({
  apiKey,
  mapCenter = center,
  markerPosition = center,
  zoom = 14
}) => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: apiKey
  });

  const [map, setMap] = React.useState<google.maps.Map | null>(null);

  const onLoad = React.useCallback(function callback(map: google.maps.Map) {
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback() {
    setMap(null);
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={mapCenter}
      zoom={zoom}
      onLoad={onLoad}
      onUnmount={onUnmount}
      options={{
        mapTypeControl: false,
        streetViewControl: false,
        fullscreenControl: true,
        zoomControl: true,
        styles: [
          {
            featureType: 'water',
            elementType: 'geometry',
            stylers: [
              { color: '#e9e9e9' },
              { lightness: 17 }
            ]
          },
          {
            featureType: 'landscape',
            elementType: 'geometry',
            stylers: [
              { color: '#f5f5f5' },
              { lightness: 20 }
            ]
          },
          {
            featureType: 'poi',
            elementType: 'geometry',
            stylers: [
              { color: '#f5f5f5' },
              { lightness: 21 }
            ]
          }
        ]
      }}
    >
      <Marker position={markerPosition} title="Blue Depths Diving Center" />
    </GoogleMap>
  ) : <div className="flex items-center justify-center h-full bg-blue-100 rounded-xl">Loading Map...</div>;
};

export default GoogleMapComponent; 