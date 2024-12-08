import Image from "next/image";
import React from "react";

interface ArtworkCardProps {
  title: string;
  artist: string;
  artworkName: string;
  image: string;
}

const ArtworkCard = ({
  title,
  artist,
  artworkName,
  image,
}: ArtworkCardProps) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-gray-100">
      <div className="bg-gray-200 w-60 h-64 ">
        <Image src={image} alt="Artwork" width={300} height={340} />
      </div>
      <div className="px-6 py-4">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <div className="text-gray-600">{artworkName}</div>
        <div className="text-gray-800 font-bold">{artist}</div>
      </div>
    </div>
  );
};

export default ArtworkCard;
