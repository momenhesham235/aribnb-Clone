import React from "react";
import ExploreCard from "@/components/Home/ExploreCard";
import { getExport } from "@/services/api";
import { ExploreData } from "@/Utils/types/interface";

const Explore = async () => {
  const exploreData: ExploreData = await getExport("/b/4G1G");

  return (
    <section>
      <div className="container">
        <h2 className="text-center md:text-start text-4xl font-semibold mb-5">
          Explore Nearby
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {exploreData.map((item) => (
            <ExploreCard key={item.img} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Explore;
