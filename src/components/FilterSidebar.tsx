import React from 'react';
import { Filter } from 'lucide-react';
import { Filters } from '../types/Product';

interface FilterSidebarProps {
  filters: Filters;
  onFilterChange: (filters: Filters) => void;
  isOpen: boolean;
  onToggle: () => void;
}

const FilterSidebar: React.FC<FilterSidebarProps> = ({ 
  filters, 
  onFilterChange, 
  isOpen, 
  onToggle 
}) => {
  const categories = ['shirts', 'pants', 'jackets', 'dresses', 'sweaters', 'shoes'];
  const colors = ['white', 'black', 'blue', 'red', 'gray', 'green'];
  const priceRanges = [
    { label: 'Under 250k', min: 0, max: 250000 },
    { label: '250k - 400k', min: 250000, max: 400000 },
    { label: '400k - 600k', min: 400000, max: 600000 },
    { label: 'Above 600k', min: 600000, max: Infinity },
  ];

  const handleCategoryChange = (category: string) => {
    const newCategories = filters.categories.includes(category)
      ? filters.categories.filter(c => c !== category)
      : [...filters.categories, category];
    onFilterChange({ ...filters, categories: newCategories });
  };

  const handleColorChange = (color: string) => {
    const newColors = filters.colors.includes(color)
      ? filters.colors.filter(c => c !== color)
      : [...filters.colors, color];
    onFilterChange({ ...filters, colors: newColors });
  };

  const handlePriceRangeChange = (range: { min: number; max: number }) => {
    console.log('Price range clicked:', range);
    console.log('Current filters.priceRange:', filters.priceRange);
    
    // Selalu set range yang dipilih, jangan toggle
    onFilterChange({ 
      ...filters, 
      priceRange: range 
    });
  };

  return (
    <>
      {/* Mobile Filter Button */}
      <button
        onClick={onToggle}
        className="lg:hidden fixed bottom-6 right-6 bg-black text-white p-3 rounded-full shadow-lg z-50"
      >
        <Filter size={20} />
      </button>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={onToggle}
        />
      )}

      {/* Sidebar */}
      <div className={`
        fixed lg:static inset-y-0 left-0 z-50 lg:z-auto
        w-80 lg:w-64 bg-white lg:bg-transparent
        transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0
        transition-transform duration-300 ease-in-out
        overflow-y-auto border-r lg:border-r-0 lg:pr-6
      `}>
        <div className="p-6 lg:p-0">
          <div className="flex items-center justify-between lg:justify-start mb-6">
            <h2 className="text-lg font-semibold text-gray-900">Filter</h2>
            <button
              onClick={onToggle}
              className="lg:hidden text-gray-500"
            >
              ✕
            </button>
          </div>

          {/* Categories */}
          <div className="mb-6">
            <h3 className="font-medium text-gray-900 mb-3">Category</h3>
            <div className="space-y-2">
              {categories.map((category) => (
                <label key={category} className="flex items-center">
                  <input
                    type="checkbox"
                    checked={filters.categories.includes(category)}
                    onChange={() => handleCategoryChange(category)}
                    className="rounded border-gray-300 text-black focus:ring-black"
                  />
                  <span className="ml-2 text-sm text-gray-700 capitalize">{category}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Colors */}
          <div className="mb-6">
            <h3 className="font-medium text-gray-900 mb-3">Color</h3>
            <div className="grid grid-cols-4 gap-2">
              {colors.map((color) => (
                <button
                  key={color}
                  onClick={() => handleColorChange(color)}
                  className={`
                    w-8 h-8 rounded-full border-2 transition-all
                    ${filters.colors.includes(color) 
                      ? 'border-black scale-110' 
                      : 'border-gray-300'
                    }
                  `}
                  style={{ backgroundColor: color === 'white' ? '#ffffff' : color }}
                  title={color}
                />
              ))}
            </div>
          </div>

          {/* Price Range */}
          <div className="mb-6">
            <h3 className="font-medium text-gray-900 mb-3">Price Range</h3>
            <div className="space-y-2">
              {priceRanges.map((range, index) => {
                const isSelected = filters.priceRange?.min === range.min && filters.priceRange?.max === range.max;
                console.log(`Range ${range.label} selected:`, isSelected);
                return (
                  <label key={index} className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="priceRange"
                      value={`${range.min}-${range.max}`}
                      checked={isSelected}
                      onChange={() => handlePriceRangeChange(range)}
                      className="text-black focus:ring-black"
                    />
                    <span className="ml-2 text-sm text-gray-700">{range.label}</span>
                  </label>
                );
              })}
            </div>
          </div>

          {/* Clear Filters */}
          <button
            onClick={() => onFilterChange({ categories: [], colors: [], priceRange: null })}
            className="w-full py-2 px-4 text-sm border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
          >
            Clear All Filters
          </button>
        </div>
      </div>
    </>
  );
};

export default FilterSidebar;
