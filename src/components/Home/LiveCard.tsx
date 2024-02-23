import { LiveItem } from "@/Utils/types/interface";
import Image from "next/image";
import React, { FC } from "react";

type LiveCardPro = LiveItem;
const LiveCard: FC<LiveCardPro> = ({ img, title }) => {
  return (
    <div className="cursor-pointer hover:scale-105 transform transition duration-300 ease-out">
      <div className="relative h-80 w-80">
        <Image src={img} alt="img" fill className="rounded-xl" />
      </div>
      <h3 className="text-lg mt-2 font-semibold">{title}</h3>
    </div>
  );
};

export default LiveCard;
