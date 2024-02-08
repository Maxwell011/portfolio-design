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
        <InfiniteMovingCards items={projects} direction="right" speed="slow" />
      </div>
    </div>
  );
}

const testimonials = [
  {
    title: "/Rectangle 23 (6).png",
  },
  {
    title: "/Rectangle 17a.png",
  },
  {
    title: "/Shinpads.png",
  },
  {
    title: "/Tag Image.png",
  },
  {
    title: "/Rectangle 23.png",
  },
];
const projects = [
  {
    title: "/Rectangle 17 (4).png",
  },
  {
    title: "/Rectangle 17 (3).png",
  },
  {
    title: "/Rectangle 17-orange.png",
  },
  {
    title: "/Rectangle 17 (1).png",
  },
  {
    title: "/Rectangle 17 (2).png",
  },
];
