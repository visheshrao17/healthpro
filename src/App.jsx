import React from 'react';
import Header from './components/Header';
import Breadcrumb from './components/Breadcrumb';
import Calculator from './components/Calculator';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-full mx-auto">
        <Calculator />
      </main>
    </div>
  );
};

export default App;
