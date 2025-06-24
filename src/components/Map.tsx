
import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const Map = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxToken, setMapboxToken] = useState('');

  useEffect(() => {
    if (!mapContainer.current || !mapboxToken) return;

    // Initialize map
    mapboxgl.accessToken = mapboxToken;
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/light-v11',
      zoom: 12,
      center: [119.8212716502291, -3.841744462338357], // Makassar coordinates
    });

    // Add a marker at the specified location
    new mapboxgl.Marker({
      color: '#000000'
    })
      .setLngLat([119.8212716502291, -3.841744462338357])
      .addTo(map.current);

    // Add navigation controls
    map.current.addControl(
      new mapboxgl.NavigationControl(),
      'top-right'
    );

    // Cleanup
    return () => {
      map.current?.remove();
    };
  }, [mapboxToken]);

  if (!mapboxToken) {
    return (
      <div className="bg-gray-100 rounded-lg p-8 text-center">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Enter Mapbox Token</h3>
        <p className="text-gray-600 mb-4">
          Please enter your Mapbox public token to display the map.
          Get yours at <a href="https://mapbox.com/" target="_blank" rel="noopener noreferrer" className="text-black underline">mapbox.com</a>
        </p>
        <input
          type="text"
          placeholder="pk.your_mapbox_token_here"
          className="w-full max-w-md px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-black focus:border-transparent"
          onChange={(e) => setMapboxToken(e.target.value)}
        />
      </div>
    );
  }

  return (
    <div className="relative w-full h-64 md:h-80 lg:h-96">
      <div ref={mapContainer} className="absolute inset-0 rounded-lg shadow-lg" />
    </div>
  );
};

export default Map;
