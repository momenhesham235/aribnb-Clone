import React, { FC } from "react";
import Image from "next/image";
import { ExploreItem } from "@/Utils/types/interface";
type ExploreCardProps = ExploreItem;
const ExploreCard: FC<ExploreCardProps> = ({ img, location, distance }) => {
  return (
    <div className="flex items-center m-2 mt-5 space-x-4 rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105 transition transform duration-200 ease-out">
      <div className="relative h-16 w-16">
        <Image
          src={img}
          width={50}
          height={50}
          alt="img"
          className="rounded-lg"
        />
      </div>
      <div className="flex flex-col">
        <h2 className="text-lg font-semibold">{location}</h2>
        <h3 className="text-gray-500">{distance}</h3>
      </div>
    </div>
  );
};

export default ExploreCard;
