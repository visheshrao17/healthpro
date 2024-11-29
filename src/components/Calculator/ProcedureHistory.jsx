import React from 'react';

const ProcedureHistory = ({ icsi, pgt, onIcsiChange, onPgtChange }) => {
  return (
    <div className="mb-12">
      <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-center">
        Have you undergone these procedures before?
      </h2>
      <div className="max-w-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex p-6 rounded-xl">
          <p className="text-lg font-medium mb-4 mr-4">ICSI Procedure:</p>
          <div className="space-x-6">
            <label className="inline-flex items-center">
              <input
                type="radio"
                checked={icsi}
                onChange={() => onIcsiChange(true)}
                className="w-5 h-5 text-red-500 border-gray-300 focus:ring-red-500 accent-red-500"
              />
              <span className="ml-2 text-gray-700">Yes</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                checked={!icsi}
                onChange={() => onIcsiChange(false)}
                className="w-5 h-5 text-red-500 border-gray-300 focus:ring-red-500 accent-red-500"
              />
              <span className="ml-2 text-gray-700">No</span>
            </label>
          </div>
        </div>
        <div className="flex p-6 rounded-xl">
          <p className="text-lg font-medium mb-4 mr-4">PGT Testing:</p>
          <div className="space-x-6">
            <label className="inline-flex items-center">
              <input
                type="radio"
                checked={pgt}
                onChange={() => onPgtChange(true)}
                className="w-5 h-5 text-red-500 border-gray-300 focus:ring-red-500 accent-red-500"
              />
              <span className="ml-2 text-gray-700">Yes</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                checked={!pgt}
                onChange={() => onPgtChange(false)}
                className="w-5 h-5 text-red-500 border-gray-300 focus:ring-red-500 accent-red-500"
              />
              <span className="ml-2 text-gray-700">No</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProcedureHistory;
