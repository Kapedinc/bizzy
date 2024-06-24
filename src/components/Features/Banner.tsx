import React from 'react';

interface Feature {
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    title: "cashback",
    description:
      "earn points for your bill payments and exchange them for cashback.",
  },
  {
    title: "curated rewards",
    description:
      "earn airline miles from alaska airlines for free 1st class travel.",
  },
  {
    title: "exquisite experiences",
    description:
      "participate in fun activities for access to lodging and resorts.",
  },
];

const Banner: React.FC = () => {
  return (
    <section>
      <div className="relative items-center w-full mx-auto 2xl:max-w-7xl 2xl:border-x-2 border-b-2 border-black">
        <div className="relative p-8 lg:p-20 items-center gap-12 h-full bg-gray-1200">
          <div className="text-center max-w-4xl mx-auto">
            <p className="text-4xl lg:text-5xl font-medium text-white">
              Savor the Odds Stacking in Your Favor
            </p>
          </div>
          <div className="relative items-center w-full mx-auto mt-12">
            <video
              className="object-cover w-full lg:rounded-full h-96 border-2 border-black object-top bg-white"
              src="/videos/rewards.mp4"
              autoPlay
              loop
              muted
              playsInline
            ></video> 
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:text-center lg:grid-cols-3 gap-6 lg:gap-12 mt-12">
            {features.map((feature, index) => (
              <div key={index}>
                <h2 className="text-3xl text-white font-medium">{feature.title}</h2>
                <p className="text-lg tracking-wide text-white mt-4">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
