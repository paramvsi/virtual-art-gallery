import Image from "next/image";

const Hero = () => {
  return (
    <section className="flex items-center justify-center min-h-screen bg-gray-200 px-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="text-center md:text-left md:w-1/2">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            Explore the World of Art in 3D
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Immerse yourself in our interactive 3D art gallery from the comfort
            of your home.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Start Your Tour
          </button>
        </div>
        <div className="md:w-1/2 flex justify-center md:justify-end mt-8 md:mt-0">
          <div className=" bg-gray-400 rounded-lg shadow-xl">
            <Image
              src="/assets/main.webp"
              alt="Hero Image"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
