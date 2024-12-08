import React from "react";
import InfoCard from "../common/InfoCard";

const HowItWorks = () => {
  return (
    <div className="bg-white py-8">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
          How It Works
        </h2>
        <p className="text-center text-gray-600 mb-6">
          Embark on a seamless journey through our virtual gallery with these
          simple steps.
        </p>
        <div className="flex flex-col md:flex-row justify-around items-start space-y-4 md:space-y-0">
          <InfoCard
            title="Step 1"
            description="Select your preferred art category or exhibition from the main menu."
          />
          <InfoCard
            title="Step 2"
            description="Navigate through the gallery using intuitive controls to admire artworks up close."
          />
          <InfoCard
            title="Step 3"
            description="Interact with featured pieces for detailed insights and an immersive experience."
          />
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
