import { LiveData } from "@/Utils/types/interface";
import { getData } from "@/services/api";
import Heading from "../Global/Heading";
import LiveCard from "./LiveCard";

const Live = async () => {
  const liveData: LiveData = await getData("/b/VHHT");

  return (
    <section className="pt-6">
      <div className="container">
        <Heading title="Live Anywhere" />
        <div className="flex overflow-scroll space-x-3 no-scrollbar p-3 -ml-3">
          {liveData.map((item, index) => (
            <LiveCard key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Live;
