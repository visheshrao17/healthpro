import React, { useState } from 'react';
import AgeSelector from './AgeSelector';
import CycleSlider from './CycleSlider';
import ProcedureHistory from './ProcedureHistory';
import MedicalConditions from './MedicalConditions';
import Result from './Result';
import Breadcrumb from '../Breadcrumb';

const Calculator = () => {
  const [step, setStep] = useState('input'); // 'input' | 'result'
  const [formData, setFormData] = useState({
    age: '',
    cycles: 1,
    icsi: false,
    pgt: false,
    conditions: [],
  });

  const calculateSuccessRate = () => {
    let baseRate = 50;

    // Age factor
    if (formData.age === 'Under 30') baseRate += 15;
    else if (formData.age === 'Between 30 - 34') baseRate += 10;
    else if (formData.age === 'Between 35 - 37') baseRate += 5;
    else if (formData.age === 'Between 38 - 40') baseRate -= 5;
    else if (formData.age === 'Between 41 - 43') baseRate -= 10;
    else if (formData.age === 'Above 43') baseRate -= 15;

    // Procedures
    if (formData.icsi) baseRate += 5;
    if (formData.pgt) baseRate += 5;

    // Medical conditions
    baseRate -= formData.conditions.length * 5;

    // Cycles
    baseRate += (formData.cycles - 1) * 3;

    return Math.min(Math.max(baseRate, 0), 100);
  };

  const handleSubmit = () => {
    setStep('result');
  };

  if (step === 'result') {
    return <Result successRate={calculateSuccessRate()} cycles={formData.cycles} />;
  }

  return (
    <div className="max-w-5xl mx-auto">
      <div className="sticky mx-4 sm:mx-6 lg:mx-8 my-8 md:max-w-4xl md:mx-auto">
        <Breadcrumb
          items={[
            { label: 'Home' },
            { label: 'IVF Success Rate Calculator', href: '/' },
          ]}
        />
      </div>
      <div className="rounded-2xl p-6 md:p-12">
        <AgeSelector
          selectedAge={formData.age}
          onChange={(age) => setFormData({ ...formData, age })}
        />

        <CycleSlider
          value={formData.cycles}
          onChange={(cycles) => setFormData({ ...formData, cycles })}
        />

        <ProcedureHistory
          icsi={formData.icsi}
          pgt={formData.pgt}
          onIcsiChange={(icsi) => setFormData({ ...formData, icsi })}
          onPgtChange={(pgt) => setFormData({ ...formData, pgt })}
        />

        <MedicalConditions
          conditions={formData.conditions}
          onChange={(conditions) => setFormData({ ...formData, conditions })}
        />

        <div className="flex justify-center">
          <button
            onClick={handleSubmit}
            disabled={!formData.age}
            className="bg-red-500 text-white px-12 py-4 text-lg font-medium hover:bg-red-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            Calculate
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
