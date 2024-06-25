import React from 'react';

interface PaymentMethods {
  title: string;
  description: string;
  imgSrc: string;
  imgAlt: string;
  bgColor: string;
}

const sections: PaymentMethods[] = [
  {
    title: "crypto currency",
    description:
      "pay using a diverse range of cryptocurrencies in one unified platform, even if your vendor doesn't accept crypto.",
    imgSrc: "/images/crypto.svg",
    imgAlt: "Thumbnail for Multi-currency support",
    bgColor: "bg-gray-1200", // You can also dynamically set background colors if needed
  },
  {
    title: "corporate credit card",
    description:
      "access a corporate credit line from parliamint using the finest corporate card designed to pay your bills, even your credit card bills.",
    imgSrc: "/images/parliamint card.svg",
    imgAlt: "Thumbnail for Decentralized exchanges",
    bgColor: "bg-lila-500",
  },
];

const PaymentMethods: React.FC = () => {
  return (
    <section>
      <div className="items-center w-full mx-auto 2xl:max-w-7xl p-8 lg:p-20 2xl:px-0 border-b-2 border-black 2xl:border-x-2 bg-gray-1000">
       <div className="relative p-8 lg:px20 2xl:px-0 items-center text-center justify-center max-w-3xl mx-auto">
         <h2 className="text-3xl lg:text-5xl tracking-tight font-medium">
           upgrade the way you pay
          </h2>
          <p className="max-w-md mt-4 xl:text-xl text-lg mx-auto">
            parliamint comes with 2 methods of payment that can be accepted with any vendor.
          </p>
        </div>
      </div>
      <div className="relative items-center w-full mx-auto 2xl:max-w-7xl divide-y-2 border-b-2 divide-black 2xl:border-x-2 border-black">
        <div className="grid grid-cols-1 md:grid-cols-2 divide-y divide-black md:divide-y-0 md:divide-x-2">
          {sections.map((section) => (
            <div key={section.title} className="grid grid-cols-1 divide-y-2 divide-black">
              <div className="relative p-8 lg:px-20 py-12 items-center gap-12 h-full lg:inline-flex bg-white">
                <div className="max-w-xl text-center mx-auto">
                  <p className="text-3xl lg:text-5xl 2xl:text-4xl tracking-tight font-medium text-black">
                    {section.title}
                  </p>
                  <p className="mt-4 text-lg tracking-wide text-black font-normal mx-auto">
                    {section.description}
                  </p>
                </div>
              </div>
              <div className={`w-full flex justify-center items-center ${section.bgColor}`}>
                <img className="object-contain" src={section.imgSrc} alt={section.imgAlt} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PaymentMethods;
