import Hero from "./section/Hero";
import Why from "./section/Why";
import Testimonials from "./section/Testimonials";
import Applications from "./section/Applications";
import Form from "./section/Form";
import Footer from "./section/Footer";
import Component from "./section/Component";

export default function Home() {
  return (
    <div className='min-h-screen min-w-screen' >
      <Hero />
      <Why />
      <Component />
      <Testimonials />
      <Applications />
      <Form />
    </div>
  );
}
