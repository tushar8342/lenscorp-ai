import Link from "next/link";

const ButtonArrow = () => {
  return (
    <svg
      className="size-5 rtl:rotate-180"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M17 8l4 4m0 0l-4 4m4-4H3"
      />
    </svg>
  );
};

const About = () => {
  return (
    <>
      <div className="flex flex-col items-center py-8">
        <h3 className="text-center  nunito_sans font-semibold text-6xl ">
          About Us
        </h3>
        <div className="bg-gradient-to-r from-darksky to-darkcyan rounded-lg w-[145px] h-[8px] mt-2"></div>
      </div>

      <div
        className=" md:w-[80%] mx-auto px-4 py-12 md:py-16 "
        style={{ backgroundColor: "rgb(218,230,213)" }}
      >
        <div
          className={` bg-sky  dark:bg-customlight  p-8 flex items-center justify-between flex-col-reverse gap-0 lg:gap-10	lg:flex-row  rounded-xl hover:-translate-y-1 hover:scale-110 duration-300 transition ease-in-out delay-150 mt-8`}
        >
          <div className="p-4 w-full text-center lg:text-start">
            <h2 className="text-4xl lg:text-5xl font-medium ">
              Welcome To LENS
            </h2>
            <p className="text-gray-500 font-medium mt-4 md:mt-8 text-sm md:text-base leading-6">
              We put our hearts, souls, and sweat into designing and developing
              custom AI-powered solutions for your business so you don&apos;t
              have to.
            </p>
            <div className="mt-6 md:mt-10">
              <Link
                className="group relative inline-flex items-center overflow-hidden rounded-lg bg-transparent border border-black px-6 py-3  hover:bg-black hover:text-white focus:outline-none "
                href="/about"
              >
                <span className="absolute -end-full transition-all group-hover:end-4">
                  <ButtonArrow />
                </span>

                <span className=" font-medium transition-all group-hover:me-4">
                  Learn More
                </span>
              </Link>
            </div>
          </div>
          <div className="p-4 w-full  flex justify-center">
            <img
              alt="about us"
              src="https://lenscorp.ai/_next/image?url=%2FImages%2FaboutLatest.webp&w=640&q=75"
              className="w-full md:h-[395px] h-[232px]  object-cover  "
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default About;
