import Image from "next/image";
import React from "react";

interface InfoCardProps {
  title: string;
  description: string;
  imageUrl?: string;
}

const InfoCard = ({ title, description, imageUrl }: InfoCardProps) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white border">
      {imageUrl && (
        <div className="relative h-48 w-full">
          <Image className="object-cover" src={imageUrl} alt={title} fill />
        </div>
      )}
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
    </div>
  );
};

export default InfoCard;
