
import React from 'react';

const Map = () => {
  // Koordinat Makassar: -3.841744462338357, 119.8212716502291
  const googleMapsEmbedUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3973.5123456789!2d119.8192716502291!3d-3.841744462338357!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM8KwNTAnMzAuMyJTIDExOcKwNDknMTYuNiJF!5e0!3m2!1sid!2sid!4v1234567890123!5m2!1sid!2sid`;

  return (
    <div className="relative w-full h-64 md:h-80 lg:h-96 rounded-lg overflow-hidden shadow-lg">
      <iframe
        src={googleMapsEmbedUrl}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Our Store Location in Makassar"
        className="rounded-lg"
      />
    </div>
  );
};

export default Map;
