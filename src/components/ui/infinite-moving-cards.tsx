"use client";

import React, { useEffect, useState } from "react";
import { cn } from "../../../lib/utils";
import { PEOPLE_URL } from "../../../data";
import Image from "next/image";

export const InfiniteMovingCards = ({
  items,
  direction = "right",
  speed = "fast",
  className,
}: {
  items: {
    backgroundImage: string;
    title: string;
    subtitle: string;
    peopleJoined: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: false;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
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
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };
  return (
    <div ref={containerRef} className={cn("scroller h-full", className)}>
      <ul
        ref={scrollerRef}
        className={cn(
          " flex min-h-full shrink-0 gap-4 py-4 flex-nowrap h-full w-full min-w-[1100px] ${item.backgroundImage} bg-cover bg-no-repeat lg:rounded-r-5xl 2xl:rounded-5xl ",
          start && "animate-scroll "
        )}
      >
        {items.map((item, idx) => (
          <div
            key={idx}
            className={`h-full w-full min-w-[1100px] ${item.backgroundImage} bg-cover bg-no-repeat lg:rounded-r-5xl 2xl:rounded-5xl `}
          >
            <div className="flex h-full flex-col items-start justify-between p-6 lg:px-20 lg:py-10">
              <div className="flexCenter gap-4">
                <div className="rounded-full bg-green-50 p-4">
                  <Image
                    src="/folded-map.svg"
                    alt="map"
                    width={28}
                    height={28}
                  ></Image>
                </div>
                <div className="flex flex-col gap-1">
                  <h4 className="bold-18 text-white">{item.title}</h4>
                  <p className="regular-14 text-white">{item.subtitle}</p>
                </div>
              </div>
              <div className="flexCenter gap-6">
                <span className="flex -space-x-4 overflow-hidden">
                  {PEOPLE_URL.map((url, index) => (
                    <Image
                      src={url}
                      key={url}
                      alt="person"
                      width={52}
                      height={52}
                      className="inline-block h-10 w-10 rounded-full"
                    />
                  ))}
                </span>
                <p className="bold-16 md:bold-20 text-white">
                  {item.peopleJoined}
                </p>
              </div>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
};
