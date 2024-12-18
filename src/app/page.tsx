import Image from "next/image";
import Hero from "./section/Hero";
import Why from "./section/Why";
import { Component } from "lucide-react";
import Testimonials from "./section/Testimonials";
import Applications from "./section/Applications";
import Form from "./section/Form";
import Footer from "./section/Footer";

export default function Home() {
  return (
    <div className='min-h-screen min-w-screen' >
      <Hero />
      <Why />
      <Component />
      <Testimonials />
      <Applications />
      <Form />
      <Footer />
    </div>
  );
}
