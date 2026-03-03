import React from 'react';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 lg:px-12 py-8">
        {/* Dashboard content will go here */}
      </main>
    </div>
  );
}

export default App;
