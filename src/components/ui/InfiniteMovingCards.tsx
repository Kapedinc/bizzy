import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/utils/cn";

type InfiniteMovingCardsProps = {
  items: JSX.Element[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
};

export const InfiniteMovingCards: React.FC<InfiniteMovingCardsProps> = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLUListElement>(null);
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    setupAnimation();
  }, []);

  const setupAnimation = () => {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      setAnimationDirection();
      setAnimationSpeed();
      setStartAnimation(true);
    }
  };

  const setAnimationDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };

  const setAnimationSpeed = () => {
    if (containerRef.current) {
      let animationDuration = "20s"; // Default fast speed

      if (speed === "normal") {
        animationDuration = "40s";
      } else if (speed === "slow") {
        animationDuration = "80s";
      }

      containerRef.current.style.setProperty(
        "--animation-duration",
        animationDuration
      );
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full gap-4 py-4 w-max flex-nowrap",
          startAnimation && "animate-scroll",
          pauseOnHover && "hover:animate-paused"
        )}
      >
        {items.map((item, idx) => (
          <li
            key={idx}
            className="w-[350px] max-w-full relative rounded-2xl border border-b-0 flex-shrink-0 border-slate-700 px-8 py-6 md:w-[450px]"
            style={{
              background:
                "linear-gradient(180deg, var(--slate-800), var(--slate-900))",
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};
