import React from 'react';

const CONDITIONS = [
  'PCOS',
  'Endometriosis',
  'Low Ovarian Reserve',
  'Male Factor Infertility',
];

const MedicalConditions = ({ conditions, onChange }) => {
  const toggleCondition = (condition) => {
    if (conditions.includes(condition)) {
      onChange(conditions.filter((c) => c !== condition));
    } else {
      onChange([...conditions, condition]);
    }
  };

  return (
    <div className="mb-12">
      <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-center">
        Do you have any of these medical conditions?
      </h2>
      <div className="max-w-8xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-2">
        {CONDITIONS.map((condition) => (
          <label
            key={condition}
            className="flex items-center p-4 rounded-xl cursor-pointer transition-all"
          >
            <input
              type="checkbox"
              checked={conditions.includes(condition)}
              onChange={() => toggleCondition(condition)}
              className="appearance-none w-5 h-5 rounded-full border-2 border-gray-300 checked:bg-red-500 checked:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <span
              className={`ml-3 ${
                conditions.includes(condition) ? 'text-red-900' : 'text-gray-700'
              }`}
            >
              {condition}
            </span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default MedicalConditions;
