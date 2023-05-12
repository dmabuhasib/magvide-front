const ButtonM = ({ title }) => {
  return (
    <button className="border-2 bg-primary border-solid text-sm sm:text-base lg:text-lg font-medium font-pop rounded-lg border-primary transition duration-300 ease-in-out text-white px-4 py-1 md:px-6 md:py-2 hover:font-medium hover:bg-white hover:text-primary">
      {title}
    </button>
  );
};

export default ButtonM;
