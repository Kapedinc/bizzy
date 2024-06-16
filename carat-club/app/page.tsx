import FeelSpecial from "@/components/feelSpecial/FeelSpecial";
import Header from "@/components/header/Header";
import { Hero } from "@/components/hero/Hero";
import ShowCase from "@/components/productShowcase/ShowCase";
import { StickyScrollRevealDemo } from "@/components/section/ScrollSection";
import Section from "@/components/section/Section";
import Image from "next/image";
import "./globals.css";

export default function Home() {
  return (
    <>
    <Header />
    <Hero />
    <ShowCase />
    <Section />
    <FeelSpecial />
    <StickyScrollRevealDemo />
    </>
  );
}
