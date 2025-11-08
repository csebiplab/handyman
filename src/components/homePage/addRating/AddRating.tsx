"use client";

import React from "react";
import Image from "next/image";
import { FaFacebook, FaStar } from "react-icons/fa";

interface RatingCardProps {
  icon: React.ReactNode | string;
  platform?: string;
  rating: number;
  reviews: number;
  width?: number;
  height?: number;
}

const RatingCard: React.FC<RatingCardProps> = ({
  icon,
  platform,
  rating,
  reviews,
  width,
  height,
}) => {
  const renderIconSection = () => {
    // Facebook case: icon + platform name in a row
    if (platform === "Facebook" && typeof icon !== "string") {
      return (
        <div className="flex flex-col items-start">
          <div className="flex items-center gap-2">
            <div className="text-4xl">{icon}</div>
            <p className="font-semibold text-gray-800 text-base">{platform}</p>
          </div>
          <div className="flex items-center gap-1 text-yellow-400 text-sm mt-2">
            {Array(5)
              .fill(0)
              .map((_, i) => (
                <FaStar key={i} />
              ))}
          </div>
        </div>
      );
    }

    // Image icons (Google Maps, HomeStars)
    if (typeof icon === "string") {
      return (
        <div className="flex flex-col items-start">
          <Image
            src={icon}
            alt={platform || "rating-icon"}
            width={width}
            height={height}
            className="object-contain"
          />
          <div className="flex items-center gap-1 text-yellow-400 text-sm mt-2">
            {Array(5)
              .fill(0)
              .map((_, i) => (
                <FaStar key={i} />
              ))}
          </div>
        </div>
      );
    }

    return null;
  };

  return (
    <div className="flex justify-between items-center bg-[#F4F4F4] shadow-sm rounded-2xl px-8 py-6 lg:py-2 2xl:py-6 w-full transition-all hover:shadow-md">
      {/* Left: Icon & Stars */}
      {renderIconSection()}

      {/* Right: Rating Numbers */}
      <div className="flex flex-col items-end text-right">
        <p className="font-semibold text-gray-800 text-lg">
          {rating.toFixed(1).replace(".", ",")}
        </p>
        <p className="text-xs text-gray-500">{reviews} Reviews</p>
      </div>
    </div>
  );
};

const AddRating: React.FC = () => {
  const ratings = [
    {
      icon: <FaFacebook className="text-blue-600" />,
      platform: "Facebook",
      rating: 5.0,
      reviews: 885,
    },
    {
      icon: "/assets/handymanHomePage/googleMapIcon.png",
      rating: 4.6,
      reviews: 235,
      width: 154,
      height: 32,
    },
    {
      icon: "/assets/handymanHomePage/homeStarsIcon.png",
      rating: 4.8,
      reviews: 80,
      width: 236,
      height: 32,
    },
  ];

  return (
    <section className="w-full py-8 3xl:py-10 bg-transparent">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 justify-items-center">
        {ratings.map((item, index) => (
          <RatingCard
            key={index}
            icon={item.icon}
            platform={item.platform}
            rating={item.rating}
            reviews={item.reviews}
            width={item.width}
            height={item.height}
          />
        ))}
      </div>
    </section>
  );
};

export default AddRating;
