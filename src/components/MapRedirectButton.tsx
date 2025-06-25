
import React from 'react';
import { ExternalLink, MapPin } from 'lucide-react';

const MapRedirectButton = () => {
  const handleRedirectToMaps = () => {
    // URL untuk membuka lokasi spesifik di Google Maps
    const mapsUrl = 'https://www.google.com/maps/place/3°50\'30.3"S+119°49\'16.6"E/@-3.841744462338357,119.8192716502291,17z/data=!3m1!4b1!4m4!3m3!8m2!3d-3.841744462338357!4d119.8212716502291';
    window.open(mapsUrl, '_blank');
  };

  return (
    <div className="mt-6 flex justify-center">
      <button
        onClick={handleRedirectToMaps}
        className="inline-flex items-center px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors font-medium"
      >
        <MapPin className="w-5 h-5 mr-2" />
        Buka di Google Maps
        <ExternalLink className="w-4 h-4 ml-2" />
      </button>
    </div>
  );
};

export default MapRedirectButton;
