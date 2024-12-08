import Image from "next/image";

const Hero = () => {
  return (
    <section className="flex items-center justify-center min-h-screen bg-custom-gradient px-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="text-center md:text-left md:w-1/2">
          <h1 className="text-5xl text-[100px] font-bold text-[#FEFEFE] mb-1">
            Explore the World of Art in 3D
          </h1>
          <p className="text-xl text-[#FEFEFE] mb-6">
            Immerse yourself in our interactive 3D art gallery from the comfort
            of your home.
          </p>
          <button className="bg-gradient-to-br hover:bg-gradient-to-br text-[#FEFEFE] text-xl  font-bold py-4 px-6 rounded-full">
            Start Your Tour
          </button>
        </div>
        <div className="md:w-1/2 flex justify-center md:justify-end mt-8 md:mt-0">
          <div className=" bg-gradient-to-br rounded-lg shadow-xl">
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
