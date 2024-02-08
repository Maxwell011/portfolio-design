"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export default function InfiniteMovingCardsDemo() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <div className="flex flex-col gap-2">
        <InfiniteMovingCards
          items={testimonials}
          direction="left"
          speed="slow"
        />
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
      </div>
    </div>
  );
}

const testimonials = [
  {
    title: "/Rectangle 23.png",
  },
  {
    title: "/Rectangle 23.png",
  },
  {
    title: "/Rectangle 23.png",
  },
  {
    title: "/Rectangle 23.png",
  },
  {
    title: "/Rectangle 23.png",
  },
];
