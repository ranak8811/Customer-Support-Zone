import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";

function App() {
  const [inProgressCount, setInProgressCount] = useState(0);
  const [resolvedCount, setResolvedCount] = useState(0);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="max-w-full mx-auto px-4 lg:px-12 py-12">
        <Banner
          inProgressCount={inProgressCount}
          resolvedCount={resolvedCount}
        />
        {/* Dashboard content will go here */}
      </main>
    </div>
  );
}

export default App;
