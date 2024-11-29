import React from 'react';

const CycleSlider = ({ value, onChange }) => {
  return (
    <div className="mb-12">
      <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-center">
        Number of IVF Cycles?
      </h2>
      <div className="max-w-2xl mx-auto px-8">
        <div className="relative pt-8">
          <input
            type="range"
            min="1"
            max="5"
            value={value}
            onChange={(e) => onChange(Number(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-red-500"
            style={{
              background: `linear-gradient(to right, #EF4444 ${(value - 1) * 25}%, #E5E7EB ${(value - 1) * 25}%)`,
            }}
          />
          <div
            className="absolute -top-2 transform -translate-x-1/2 transition-all duration-200"
            style={{ left: `${((value - 1) * 100) / 4}%` }}
          >
            <span className="bg-red-100 text-red-800 text-sm font-medium px-3 py-1 rounded-full">
              {value}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CycleSlider;
