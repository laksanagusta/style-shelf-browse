import React from 'react';
import { ArrowRight, ShoppingBag, Star, Users, MapPin, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';
import Map from './Map';
import ProductCard from './ProductCard';
import { Product } from '../types/Product';
import productsData from '../data/products.json';

const Home = () => {
  const features = [
    {
      icon: <ShoppingBag className="w-6 h-6" />,
      title: "Kualitas Premium",
      description: "Koleksi fashion yang dipilih dengan teliti dari bahan-bahan terbaik"
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "Desain Minimalis",
      description: "Pakaian yang bersih dan timeless untuk meningkatkan gaya sehari-hari Anda"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Pilihan Berkelanjutan",
      description: "Fashion yang bersumber etis dan ramah lingkungan"
    }
  ];

  // Get featured products (first 4 products)
  const featuredProducts: Product[] = productsData.slice(0, 4);

  const handleProductClick = (product: Product) => {
    // Navigate to catalog page - the product detail will be handled there
    window.location.href = '/catalog';
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/6281761215676', '_blank');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32">
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left py-4">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block xl:inline">Temukan</span>{' '}
                  <span className="block text-black xl:inline">fashion minimalis</span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  Koleksi kurasi pakaian timeless yang dirancang untuk minimalis modern. 
                  Keahlian berkualitas bertemu dengan gaya kontemporer.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <Link
                      to="/catalog"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-black hover:bg-gray-800 md:py-4 md:text-lg md:px-10 transition-colors"
                    >
                      Jelajahi Koleksi
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop"
            alt="Koleksi fashion"
          />
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center mb-10">
            <h2 className="text-base text-black font-semibold tracking-wide uppercase">Produk Unggulan</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Produk terlaris kami
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Temukan koleksi minimalis paling populer yang mendefinisikan gaya kontemporer.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {featuredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onClick={handleProductClick}
              />
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/catalog"
              className="inline-flex items-center px-6 py-3 border border-black text-base font-medium rounded-md text-black bg-white hover:bg-black hover:text-white transition-colors"
            >
              Lihat Semua Produk
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-black font-semibold tracking-wide uppercase">Mengapa Memilih Kami</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Fashion dengan tujuan
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Setiap produk dalam koleksi kami dipilih dengan cermat untuk memberikan Anda keseimbangan sempurna antara gaya, kenyamanan, dan keberlanjutan.
            </p>
          </div>

          <div className="mt-10">
            <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
              {features.map((feature, index) => (
                <div key={index} className="relative">
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-black text-white">
                    {feature.icon}
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.title}</p>
                  <p className="mt-2 ml-16 text-base text-gray-500">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center mb-10">
            <div className="flex items-center justify-center mb-4">
              <MapPin className="w-6 h-6 text-black mr-2" />
              <h2 className="text-base text-black font-semibold tracking-wide uppercase">Lokasi Kami</h2>
            </div>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Kunjungi toko kami
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Temukan kami di lokasi fisik kami di Sidrap. Rasakan koleksi fashion minimalis kami secara langsung.
            </p>
          </div>
          <Map />
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white">
        <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            <span className="block">Siap meningkatkan lemari pakaian Anda?</span>
          </h2>
          <p className="mt-4 text-lg leading-6 text-gray-500">
            Jelajahi koleksi fashion minimalis yang dipilih dengan cermat.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/catalog"
              className="w-full sm:w-auto inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-black hover:bg-gray-800 transition-colors"
            >
              Mulai Berbelanja
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <button
              onClick={handleWhatsAppClick}
              className="w-full sm:w-auto inline-flex items-center justify-center px-5 py-3 border border-green-600 text-base font-medium rounded-md text-green-600 bg-white hover:bg-green-50 transition-colors"
            >
              <MessageCircle className="mr-2 w-5 h-5" />
              Hubungi Kami
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
