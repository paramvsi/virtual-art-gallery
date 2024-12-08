import React from "react";
import ArtworkCard from "../common/ArtworkCard";
import ViewMoreButton from "./ViewMoreButton";

const FeaturedArtworks = () => {
  return (
    <div className="bg-white py-8 mx-auto my-5">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
          Featured Artworks
        </h2>
        <p className="text-center text-gray-600 mb-6">
          Preview some of our captivating artworks and current exhibitions.
        </p>
        <div className="flex justify-center gap-8 mb-6">
          <ArtworkCard
            title="Contemporary Art"
            artist="John Doe"
            artworkName="The Masterpiece"
            image="/assets/artworks/contempary.webp"
          />
          <ArtworkCard
            title="Abstract Art"
            artist="Jane Smith"
            artworkName="Flowing Colors"
            image="/assets/artworks/flowingColors.webp"
          />
          <ArtworkCard
            title="Classic Art"
            artist="Michael Johnson"
            artworkName="Vintage Revival"
            image="/assets/artworks/vintage.webp"
          />
        </div>
        <ViewMoreButton />
      </div>
    </div>
  );
};

export default FeaturedArtworks;
