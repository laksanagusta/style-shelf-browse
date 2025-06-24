
import React from 'react';
import { X, ShoppingCart } from 'lucide-react';
import { Product } from '../types/Product';

interface ProductDetailProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product, isOpen, onClose }) => {
  if (!product || !isOpen) return null;

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center p-6 border-b">
          <h2 className="text-2xl font-semibold text-gray-900">{product.name}</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X size={20} />
          </button>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 p-6">
          <div className="aspect-[3/4] overflow-hidden rounded-lg bg-gray-100">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="space-y-6">
            <div>
              <p className="text-3xl font-bold text-gray-900 mb-2">
                {formatPrice(product.price)}
              </p>
              <p className="text-gray-600 capitalize">{product.category}</p>
            </div>
            
            <div>
              <h3 className="font-medium text-gray-900 mb-2">Description</h3>
              <p className="text-gray-600 leading-relaxed">{product.description}</p>
            </div>
            
            <div>
              <h3 className="font-medium text-gray-900 mb-2">Available Sizes</h3>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <span
                    key={size}
                    className="px-3 py-2 border border-gray-300 rounded-md text-sm hover:border-black transition-colors cursor-pointer"
                  >
                    {size}
                  </span>
                ))}
              </div>
            </div>
            
            {/* <div>
              <h3 className="font-medium text-gray-900 mb-2">Color</h3>
              <div className="flex items-center gap-2">
                <div
                  className="w-6 h-6 rounded-full border border-gray-300"
                  style={{ backgroundColor: product.color === 'white' ? '#ffffff' : product.color }}
                />
                <span className="text-sm text-gray-600 capitalize">{product.color}</span>
              </div>
            </div> */}
            
            {/* <button className="w-full bg-black text-white py-3 px-6 rounded-md hover:bg-gray-800 transition-colors flex items-center justify-center gap-2">
              <ShoppingCart size={20} />
              Add to Cart
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
