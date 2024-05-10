import React from "react";

function OurVision() {
  const GradientHeading = ({ title, size }) => {
    return (
      <div className="flex flex-col items-center py-8">
        <h3 className={`text-center  nunito_sans font-semibold ${size}`}>
          {title.toUpperCase()}
        </h3>
        <div className="bg-gradient-to-r from-darksky to-darkcyan rounded-lg w-[145px] h-[8px] mt-2"></div>
      </div>
    );
  };
  return (
    <div className={` bg-gray-100 dark:bg-transparent`}>
      <GradientHeading title="OUR VISION" size="text-2xl" />
      <h2 className="text-center md:text-6xl text-4xl py-12">
        AI for Social Good
      </h2>

      <p className="my-4 text-xl font-medium leading-8 text-gray-500 text-center w-2/3 mx-auto">
        Explainable AI (XAI) is an emerging subject of machine learning research
        that refers to strategies that try to provide transparency to typically
        opaque AI models and their predictions.
      </p>

      <div className="container mx-auto lg:w-[60%] px-4 py-8">
        <div className="relative wrap overflow-hidden">
          <div className=" border-2 absolute border-opacity-20 border-darkblue h-full  left-1/2 border-dashed"></div>
          <div className="mb-8 flex justify-between w-full right-timeline">
            <div className="order-1 w-5/12"></div>
            <div className="z-20 flex items-center order-1  w-14 h-14 rounded-full border-4 border-[#717171] bg-white">
              <h2 className="mx-auto font-semibold text-lg text-darkblue">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  role="img"
                  className="NewVision_iconCol__90VMl iconify iconify--ic"
                  width="38"
                  height="32"
                  viewBox="0 0 24 24"
                >
                  <path fill="currentColor"></path>
                  <path fill="currentColor"></path>
                </svg>
              </h2>
            </div>
            <div className="order-1  rounded-lg w-5/12 px-6 py-4">
              <h3 className="mb-3 font-medium  text-xl md:text-4xl">
                {" "}
                Diversity & Fairness
              </h3>
              <p className="text-gray-400 leading-tight mt-8">
                {" "}
                When training our AI models, we consider ethical and social
                implications of algorithm - based decision making.Our solutions
                use high - quality and fairly - represented data sets to
                eliminate human cognitive biases.
              </p>
            </div>
          </div>
          <div className="mb-8 flex justify-between flex-row-reverse  w-full left-timeline">
            <div className="order-1 w-5/12"></div>
            <div className="z-20 flex items-center order-1  w-14 h-14 rounded-full border-4 border-[#717171] bg-white">
              <h2 className="mx-auto font-semibold text-lg text-darkblue">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  role="img"
                  className="NewVision_iconCol__90VMl iconify iconify--carbon"
                  width="40"
                  height="32"
                  viewBox="0 0 32 32"
                >
                  <path fill="currentColor"></path>
                  <path fill="currentColor"></path>
                  <path fill="currentColor"></path>
                </svg>
              </h2>
            </div>
            <div className="order-1  rounded-lg w-5/12 px-6 py-4">
              <h3 className="mb-3 font-medium  text-xl md:text-4xl">
                {" "}
                Regulatory Compliance
              </h3>
              <p className="text-gray-400 leading-tight mt-8">
                {" "}
                Working with clients globally, LENS acknowledges applicable data
                privacy regulations, such as the GDPR, HIPAA and others, in all
                our solutions handling sensitive data.We also ensure our
                algorithms allow for the required level of decision - making
                transparency and explainability.
              </p>
            </div>
          </div>
          <div className="mb-8 flex justify-between  w-full right-timeline">
            <div className="order-1 w-5/12"></div>
            <div className="z-20 flex items-center order-1  w-14 h-14 rounded-full border-4 border-[#717171] bg-white">
              <h2 className="mx-auto font-semibold text-lg text-darkblue">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  role="img"
                  className="NewVision_iconCol__90VMl iconify iconify--emojione-monotone"
                  width="40"
                  height="32"
                  viewBox="0 0 64 64"
                >
                  {" "}
                  <path fill="currentColor"></path>
                </svg>
              </h2>
            </div>
            <div className="order-1  rounded-lg w-5/12 px-6 py-4">
              <h3 className="mb-3 font-medium  text-xl md:text-4xl">
                {" "}
                Code of Ethics
              </h3>
              <p className="text-gray-400 leading-tight mt-8">
                {" "}
                LENS believes in a just, non - violent world of equality and
                fairness.We prize democratic values, civil liberties and open
                and informed debate.When used to further these values, algorithm
                - based decision - making models can continue to make the world
                a safer, better place for everyone.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurVision;
