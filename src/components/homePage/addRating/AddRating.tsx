"use client";

import React from "react";
import { FaFacebook, FaStar } from "react-icons/fa";
import { SiGooglemaps } from "react-icons/si";
import { TbHomeStar } from "react-icons/tb";

interface RatingCardProps {
  icon: React.ReactNode;
  platform: string;
  rating: number;
  reviews: number;
}

const RatingCard: React.FC<RatingCardProps> = ({ icon, platform, rating, reviews }) => {
  return (
    <div className="flex justify-between items-center bg-white shadow-sm rounded-2xl px-8 py-5 w-full max-w-[500px] transition-all hover:shadow-md">
      {/* Left Section */}
      <div className="flex items-start gap-3">
        <div className="text-3xl">{icon}</div>
        <div className="flex flex-col">
          <p className="font-semibold text-gray-800">{platform}</p>
          <div className="flex items-center gap-1 text-yellow-400 text-sm mt-1">
            {Array(5)
              .fill(0)
              .map((_, i) => (
                <FaStar key={i} />
              ))}
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex flex-col items-end">
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
      icon: <SiGooglemaps className="text-red-500" />,
      platform: "Google Maps",
      rating: 4.6,
      reviews: 235,
    },
    {
      icon: <TbHomeStar className="text-green-600" />,
      platform: "HomeStars",
      rating: 4.8,
      reviews: 80,
    },
  ];

  return (
    <section className="flex flex-wrap justify-center items-center gap-8 w-full py-10 bg-transparent">
      {ratings.map((item, index) => (
        <RatingCard
          key={index}
          icon={item.icon}
          platform={item.platform}
          rating={item.rating}
          reviews={item.reviews}
        />
      ))}
    </section>
  );
};

export default AddRating;
