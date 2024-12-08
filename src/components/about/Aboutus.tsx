import React from "react";
import InfoCard from "../common/InfoCard";

const AboutUs = () => {
  return (
    <div className="container mx-auto bg-white">
      <div className="flex flex-col items-center justify-center gap-2 space-y-4 p-8">
        <h2 className="text-3xl font-bold text-gray-800">About the Gallery</h2>
        <p className="text-gray-600 mb-6">
          Step into a world of creativity and expression with our diverse
          collection of art pieces and exclusive exhibitions.
        </p>
      </div>
      <div className="flex flex-row items-center justify-center gap-4">
        <InfoCard
          title="Introduction"
          description="Discover a wide range of art styles and periods in our virtual gallery space, where each piece tells a unique story."
          imageUrl="/assets/introduction.webp"
        />
        <InfoCard
          title="Gallery Highlights"
          description="Explore featured artworks and special exhibitions through our interactive platform designed to captivate and inspire."
          imageUrl="/assets/gallery.webp"
        />
      </div>
    </div>
  );
};

export default AboutUs;
