import React from 'react';

function HeroPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      {/* Hero Section */}
      <div className="text-center space-y-4">
        {/* Gradient Text */}
        <h1
          className="text-6xl font-bold bg-gradient-text bg-clip-text text-transparent"
        >
          Welcome to Our Platformm
        </h1>

        {/* Subtitle */}
        <p className="text-xl text-gray-600">
          Connect, Share, and Grow Together
        </p>
      </div>
    </div>
  );
}

export default HeroPage;
