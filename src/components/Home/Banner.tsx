import { banner } from "@/Utils/constants/imageSrc";
import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <section className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px] ">
      <Image
        src={banner}
        alt="banner"
        fill
        className="object-cover object-left"
      />
      <div className="absolute top-1/2 w-full text-center">
        <p className="text-yellow-50 font-bold text-sm sm:text-lg">Not sure where to go? Perfect.</p>
        <button type="button" className="text-purple-500 bg-white px-10 py-4 shadow-md rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150">
          I&#39;m flexible
        </button>
      </div>
    </section>
  );
};

export default Banner;
