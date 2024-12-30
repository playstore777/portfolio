"use client"
import Image, { StaticImageData } from "next/image";
import { useState } from "react";

interface props {
  title: string;
  imageUrl: StaticImageData;
}

const HeroImage: React.FC<props> = ({ title, imageUrl }) => {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-gray-900">
      {/* Loading Placeholder */}
      <div
        className={`absolute inset-0 flex items-center justify-center bg-gray-800 transition-opacity duration-300 ${
          isLoading ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="h-32 w-32 animate-pulse rounded-full bg-gray-700" />
      </div>

      {/* Project Image */}
      <Image
        src={imageUrl}
        alt={title}
        fill
        className={`object-cover transition-opacity duration-700 ${
          isLoading ? "opacity-0" : "opacity-100"
        }`}
        priority
        onLoadingComplete={() => setIsLoading(false)}
      />
    </div>
  );
};

export default HeroImage;
