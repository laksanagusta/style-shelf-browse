
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, MapPin, Phone, Clock } from 'lucide-react';

const Store = () => {
  const storeImages = [
    '/images/toko1.jpg',
    '/images/toko2.jpg', 
    '/images/toko3.jpg',
    '/images/toko4.jpg',
    '/images/toko5.jpg',
    '/images/toko6.jpg',
    '/images/toko7.jpg',
  ];

  const storeInfo = {
    name: 'UMMI BOUTIQUE',
    address: 'Jl. Contoh No. 123, Sidrap, Sulawesi Selatan',
    phone: '081761215676',
    hours: 'Senin - Minggu: 09:00 - 21:00'
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <Link 
                to="/" 
                className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                <span className="hidden sm:inline">Kembali</span>
              </Link>
              <h1 className="text-xl font-bold text-gray-900">Foto Toko</h1>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Store Info Section */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">{storeInfo.name}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-start space-x-3">
              <MapPin className="w-5 h-5 text-gray-400 mt-1" />
              <div>
                <p className="font-medium text-gray-900">Alamat</p>
                <p className="text-gray-600">{storeInfo.address}</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Phone className="w-5 h-5 text-gray-400 mt-1" />
              <div>
                <p className="font-medium text-gray-900">Telepon</p>
                <p className="text-gray-600">{storeInfo.phone}</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Clock className="w-5 h-5 text-gray-400 mt-1" />
              <div>
                <p className="font-medium text-gray-900">Jam Buka</p>
                <p className="text-gray-600">{storeInfo.hours}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Photo Gallery */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">Galeri Foto Toko</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {storeImages.map((image, index) => (
              <div key={index} className="aspect-square overflow-hidden rounded-lg bg-gray-100">
                <img
                  src={image}
                  alt={`Foto toko ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 cursor-pointer"
                  onError={(e) => {
                    e.currentTarget.src = 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=400&fit=crop';
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Store;
