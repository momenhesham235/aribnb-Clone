import ExploreCard from "@/components/Home/ExploreCard";
import { getData } from "@/services/api";
import { ExploreData } from "@/Utils/types/interface";
import Heading from "../Global/Heading";

const Explore = async () => {
  const exploreData: ExploreData = await getData("/b/4G1G");

  return (
    <section>
      <div className="container">
        <Heading title="Explore Nearby" />
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
