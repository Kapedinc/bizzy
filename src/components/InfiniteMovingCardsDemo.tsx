import React from "react";
import { InfiniteMovingCards } from "@/components/ui/InfiniteMovingCards";
import PepperdineBadge from "@/components/trustBadges/PepperdineBadge";

const GetByteWidget = () => (
  <a
    href="https://www.getbyte.tech/product/paygeon?utm_source=badge-follow&utm_medium=badge&utm_source=badge-paygeon"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img
      src="https://res.cloudinary.com/avatarimg/image/upload/v1710085744/FeaturedOnGetByte.png"
      alt="GetByte - Spark Success Power Your Startup! | paygeon"
      style={{ height: "54px" }}
    />
  </a>
);

const ProductHuntWidget = () => (
  <a
    href="https://www.producthunt.com/posts/bizzy-business-elite-card-xp?embed=true&utm_source=badge-top-post-badge&utm_medium=badge&utm_souce=badge-bizzy&#0045;business&#0045;elite&#0045;card&#0045;xp"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img
      src="https://api.producthunt.com/widgets/embed-image/v1/top-post-badge.svg?post_id=378049&theme=neutral&period=daily"
      alt="Bizzy Business Elite Card - XP - Build business credit, using debit & earn high end rewards | Product Hunt"
      style={{ width: "250px", height: "54px" }}
      width="250"
      height="54"
    />
  </a>
);

const InfiniteMovingCardsDemo = () => {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={[
          <PepperdineBadge key="pepperdine-badge-1" />,
          <GetByteWidget key="getbyte-widget-1" />,
          <ProductHuntWidget key="producthunt-widget-1" />,
          <PepperdineBadge key="pepperdine-badge-2" />,
          <GetByteWidget key="getbyte-widget-2" />,
        ]}
        direction="right"
        speed="slow"
      />
    </div>
  );
};

export default InfiniteMovingCardsDemo;
