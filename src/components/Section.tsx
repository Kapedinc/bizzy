import React from 'react';
import NeoPopTiltedButton from './shimmerButton/TiltedButton.js';

interface Section {
  id: number;
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  imagePosition: 'left' | 'right';
  blobImg: string;
  listItems?: string[];
  actionText?: string;
  actionLink?: string;
}

const sections: Section[] = [
  {
    id: 1,
    imageSrc: "/images/BillstoPay.svg",
    imageAlt: "Bills to pay",
    title: "pay using Parliamint",
    description:
      "Parliamint is a member-exclusive payments app for the 5% of trustworthy entreprenuers in the world that wants a simple and rewarding payments experience. Use parliamint to pay all your bills to unlock rewards:",
    imagePosition: "left",
    blobImg: "/images/Point.svg",
    listItems: [
      "invoices",
      "credit cards",
      "loans",
      "insurance premiums",
      "any bill with a statement",
      "+ more",
    ],
  },
  {
    id: 2,
    imageSrc: "/images/FlashyRewards.gif",
    imageAlt: "rewards for payments",
    title: "opulent rewards for responsible executives",
    description:
      "every payment made in the mobile app generates points, airline miles, resort vacations, cashback, and giftcards",
    imagePosition: "right",
    blobImg: "/images/Point.svg",
    actionText: "Explore all pages",
    actionLink: "/",
  },
];

const Sections: React.FC = () => {
  return (
    <section>
      {sections.map((section) => (
        <div
          key={section.id}
          className={`relative items-center w-full divide-y-2 divide-white mx-auto 2xl:max-w-7xl border-b-2 border-white 2xl:border-x-2 ${section.id % 2 === 0 ? "lg:grid-cols-2" : "lg:grid-cols-3"}`}>
          <div
            className={`grid grid-cols-1 md:grid-cols-2 divide-y-2 divide-white md:divide-y-0 md:divide-x-2 ${section.imagePosition === "right" ? "lg:grid-flow-col-dense" : ""}`}>
            {section.imagePosition === "left" && (
              <div className="block w-full aspect-square bg-black h-full">
                <img
                  className="object-cover"
                  src={section.imageSrc}
                  alt={section.imageAlt}
                />
              </div>
            )}
            <div className="relative p-8 lg:px-20 items-center gap-12 h-full lg:inline-flex bg-violet-500">
              <div className="max-w-xl text-left">
                <div>
                  <img
                    className="size-20"
                    src={section.blobImg}
                    alt="your alt-text"
                  />
                  <p className="text-3xl mt-12 lg:text-5xl font-medium text-white">
                    {section.title}
                  </p>
                  <p className="max-w-xl mt-4 xl:text-xl tracking-wide text-white">
                    {section.description}
                  </p>
                  {section.listItems && (
                    <ul
                      className="xl:text-xl tracking-wide mt-6 text-white flex flex-col"
                      role="list">
                      {section.listItems.map((item, index) => (
                        <li key={index} className="flex items-center gap-3">
                          <svg
                            className="size-6"
                            viewBox="0 0 36 36"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M5.22789 16.8936H4.22789V18.8936H5.22789V16.8936ZM31.2279 18.8936C31.7802 18.8936 32.2279 18.4459 32.2279 17.8936C32.2279 17.3413 31.7802 16.8936 31.2279 16.8936V18.8936ZM22.2279 7.89362V6.89362H20.2279V7.89362H22.2279ZM30.6485 18.671C31.1334 18.9355 31.7408 18.7568 32.0053 18.2719C32.2697 17.7871 32.0911 17.1797 31.6062 16.9152L30.6485 18.671ZM20.2278 27.7931V28.7931H22.2278V27.7931H20.2278ZM5.22789 18.8936H31.1273V16.8936H5.22789V18.8936ZM31.1273 18.8936H31.2279V16.8936H31.1273V18.8936ZM20.2279 7.89362C20.2279 9.36603 21.0232 10.7723 21.9994 11.9705C22.9957 13.1932 24.2995 14.3434 25.5662 15.3222C26.8387 16.3055 28.1063 17.1406 29.0529 17.7286C29.5271 18.0232 29.9231 18.2571 30.2017 18.4181C30.341 18.4987 30.4511 18.561 30.5272 18.6037C30.5653 18.625 30.5948 18.6414 30.6152 18.6527C30.6254 18.6583 30.6334 18.6627 30.6389 18.6658C30.6417 18.6673 30.6439 18.6685 30.6455 18.6694C30.6463 18.6698 30.647 18.6702 30.6475 18.6704C30.6477 18.6706 30.648 18.6707 30.6481 18.6708C30.6484 18.6709 30.6485 18.671 31.1274 17.7931C31.6062 16.9152 31.6063 16.9153 31.6064 16.9153C31.6064 16.9153 31.6064 16.9153 31.6064 16.9153C31.6063 16.9152 31.606 16.9151 31.6056 16.9149C31.6048 16.9144 31.6034 16.9137 31.6015 16.9126C31.5975 16.9104 31.5913 16.907 31.5828 16.9023C31.5657 16.8929 31.5397 16.8784 31.5052 16.8591C31.4363 16.8204 31.3337 16.7624 31.2024 16.6865C30.9396 16.5346 30.5621 16.3116 30.1083 16.0297C29.1987 15.4647 27.9914 14.6686 26.7891 13.7396C25.5809 12.806 24.4098 11.7626 23.5499 10.7072C22.67 9.62732 22.2279 8.6712 22.2279 7.89362H20.2279ZM31.1273 17.8936C30.7527 16.9664 30.7524 16.9666 30.7521 16.9667C30.7519 16.9667 30.7516 16.9669 30.7513 16.967C30.7507 16.9673 30.7499 16.9676 30.749 16.9679C30.7472 16.9687 30.7447 16.9697 30.7417 16.9709C30.7357 16.9734 30.7273 16.9768 30.7166 16.9812C30.6953 16.99 30.6648 17.0028 30.6258 17.0193C30.5478 17.0524 30.4356 17.1007 30.2941 17.1639C30.0113 17.2903 29.6105 17.4762 29.1309 17.7176C28.1742 18.1991 26.8918 18.9078 25.603 19.8126C24.3193 20.7138 22.9944 21.8337 21.9824 23.1472C20.9694 24.4621 20.2278 26.0278 20.2278 27.7931H22.2278C22.2278 26.6087 22.7237 25.4621 23.5668 24.3678C24.411 23.272 25.5609 22.2858 26.7521 21.4495C27.9382 20.6169 29.1306 19.9568 30.0301 19.504C30.4786 19.2782 30.8512 19.1055 31.1097 18.9901C31.2389 18.9324 31.3394 18.8891 31.4064 18.8607C31.4399 18.8465 31.465 18.836 31.4812 18.8293C31.4892 18.826 31.495 18.8236 31.4985 18.8222C31.5003 18.8215 31.5014 18.821 31.502 18.8208C31.5023 18.8206 31.5024 18.8206 31.5024 18.8206C31.5024 18.8206 31.5023 18.8206 31.5023 18.8206C31.5021 18.8207 31.5019 18.8208 31.1273 17.8936Z"
                              fill="currentColor"
                            />
                          </svg>
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                  {section.actionText && (
                    <div className="mt-8">
                      <NeoPopTiltedButton 
                       text={'download parliamint'} 
                       backgroundColor={''} 
                       url={''} 
                       textColor={''} 
                       />
                    </div>
                  )}
                </div>
              </div>
            </div>
            {section.imagePosition === "right" && (
              <div className="block w-full aspect-square bg-black h-full">
                <img
                  className="object-cover"
                  src={section.imageSrc}
                  alt={section.imageAlt}
                />
              </div>
            )}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Sections;
