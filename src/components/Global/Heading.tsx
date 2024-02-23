const Heading = ({ title }: { title: string }) => {
  return (
    <h2 className="text-center md:text-start text-4xl font-semibold mb-5">
      {title}
    </h2>
  );
};

export default Heading;
