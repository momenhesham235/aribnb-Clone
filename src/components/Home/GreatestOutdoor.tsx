import Image from "next/image";

const GreatestOutdoor = () => {
  return (
    <section className="pt-6">
      <div className="container relative">
        <div className="relative h-[200px] sm:h-[2500px] lg:h-[300px] xl:h-[350px] 2xl:h-[400px] object-cover ">
          <Image
            src="https://images.unsplash.com/photo-1609688669309-fc15db557633?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt="banner"
            fill
            className="rounded-md"
          />
        </div>
        <div className="absolute top-10 left-32">
          <h4 className=" text-4xl mb-3 w-64">Greatest Outdoor</h4>
          <p className=" font-bold text-3xl sm:text-5xl">
            Get the best of both worlds
          </p>
          <button className="text-sm  mt-5 block text-white  bg-gray-900 px-10 py-4 shadow-md rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150">
            Get Inspired
          </button>
        </div>
      </div>
    </section>
  );
};

export default GreatestOutdoor;
