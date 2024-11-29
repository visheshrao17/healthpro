import { Check } from 'lucide-react';

const AGE_RANGES = [
  'Under 30',
  'Between 30 - 34',
  'Between 35 - 37',
  'Between 38 - 40',
  'Between 41 - 43',
  'Above 43',
];

function AgeSelector({ selectedAge, onChange }) {
  return (
    <div className="mb-12">
      <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-center">
        Which age range applies to you?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
        {AGE_RANGES.map((age) => (
          <label
            key={age}
            className={`relative flex items-center p-4 rounded-xl cursor-pointer transition-all`}
          >
            <div
              className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                selectedAge === age
                  ? 'border-red-500 bg-red-500'
                  : 'border-gray-300'
              }`}
            >
              {selectedAge === age && <Check className="w-4 h-4 text-white" />}
            </div>
            <div className="flex-1 pl-2">
              <span className={`text-base ${selectedAge === age ? 'text-red-900' : 'text-gray-700'}`}>
                {age}
              </span>
            </div>
            <input
              type="radio"
              name="age"
              value={age}
              checked={selectedAge === age}
              onChange={(e) => onChange(e.target.value)}
              className="sr-only"
            />
          </label>
        ))}
      </div>
    </div>
  );
}

export default AgeSelector;
