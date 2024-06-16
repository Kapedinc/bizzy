"use client";
import React from "react";
import { StickyScroll } from "../ui/StickyScrollReveal";
import Image from "next/image";
import CryptoCoins from "../spline/Crypto";
import Cash from "../spline/Cash";

const content = [
  {
    title: "Collaborative Editing",
    description:
      "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
    content: (
        <CryptoCoins />

    ),
  },
  {
    title: "256-AES Encryption",
    description:
      "keeping your data secure is what we are good at, Jack Nickleson, our ciso is responsible for quickly developing counterattacks against banking malware like TrickBot and Emotet, preventing over $500M in financial losses for over 450 enterprises, banks, and individuals.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="https://vashong.github.io/widgets/images/mockups/66142a5760be64e753ea2851_Aero-blog_secure-shield.png"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Version control",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
      <Cash />
    ),
  },
  {
    title: "Running out of content",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Running out of content
      </div>
    ),
  },
];
export function StickyScrollRevealDemo() {
  return (
    <div className="p-10">
      <StickyScroll content={content} />
    </div>
  );
}
