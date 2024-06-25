import React from 'react';
import NeoPopTiltedButton from '../shimmerButton/TiltedButton.js';

interface Item {
    image: string;
    title: string;
    description: string;
  }
  

  const items: Item[] = [
    { image: "/icons/Bank.svg", title: "bank-grade security", description: "parliamint uses 256-aes encryption at rest and transit keeping your data secure at all times" },
    { image: "/icons/book.svg", title: "transaction monitoring", description: "view your transactions in real time reach your vendors account with immediate notifications." },
    { image: "/icons/cash.svg", title: "multi-payment methods", description: "regardless of the payment methods accepted by your vendor, you can pay with crypto, ach, credit and debit cards." },
    { image: "/icons/credit score.svg", title: "business credit score", description: "real time access to your business credit score to ensure your payments are up to date (coming soon)." },
    { image: "/icons/mobile.svg", title: "mobile app", description: "access the club through a single pane of glass from the app and google store." },
    { image: "/icons/product.svg", title: "NFT Marketplace", description: "Immerse yourself in the world of non-fungible tokens (NFTs) with our marketplace. Buy, sell, and even create unique digital collectibles." },
    { image: "/icons/refer.svg", title: "daily rewards", description: "access rewards and prizes daily through activities and bonuses by paying your bills on time." },
    { image: "/icons/reward (1).svg", title: "finedu", description: "accesss a robust, curated source of financial education taught by leading financial firms." },
    { image: "/icons/shoping bag.svg", title: "shop parliamint", description: "earn points to exchange for partner gift cards to the most popular retail stores." },
    { image: "/icons/vouchers.png", title: "24/7 support", description: "reach out for priority support or simply submit a ticket for immediate support." },
  ];
  

const PageScroll: React.FC = () => {
  return (
    <section>
      <div className="mx-auto 2xl:max-w-7xl lg:flex 2xl:border-x-2 border-black border-b-2">
        <div className="lg:w-1/2 p-8 lg:px-20 bg-black">
          <div className="lg:sticker lg:sticky py-16 top-20">
            <div>
              <img
                className="size-8 lg:w-20 lg:h-20 shadow-small shadow-black rounded-full"
                src="/images/blob2.svg"
                alt="your alt-text"
              />
              <h2 className="text-3xl mt-12 xl:text-6xl tracking-tight font-medium text-white">
                you deserve <span className="md:block">the best</span>
              </h2>
              <p className="max-w-md mt-4 tracking-wide xl:text-xl text-lg text-white">
                we believe honest, successful executives like you deserve the best.
                <br /><br />
                the best service, the best rewards, the best everything.
              </p>
              <div className="flex-col flex gap-3 mt-10 sm:flex-row">
                <NeoPopTiltedButton 
                 text={'upgrade your life'} 
                 backgroundColor={''} 
                 url={''} 
                 textColor={''} 
                />
              </div>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 bg-gold lg:border-l-2 border-black">
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-0.5 bg-black list-none" role="list">
            {items.map((item) => (
              <li key={item.title} className="bg-white p-8 lg:p-12">
                <div>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-10 w-10 object-contain rounded-full border-1.5 border-black shadow-tiny duration-300 shadow-black bg-blue-700"
                  />
                  <p className="text-xl mt-8 text-black font-medium">{item.title}</p>
                </div>
                <div className="max-w-xl mt-4 text-base tracking-wide text-black">
                  {item.description}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default PageScroll;
