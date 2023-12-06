import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Section2 from "../components/Section2";
import Section3 from "../components/Section3";
import Section4 from "../components/Section4";
import Section5 from "../components/Section5";
import Section6 from "../components/Section6";

export default function Home() {
  return (
    <div className='min-h-screen'>
      <Navbar />
      <Hero />
      <Section2 className="mt-[30px] md:mt-0"/>
      <Section3 className="mt-[30px] md:mt-0"/>
      <Section4 className="mt-[30px] md:mt-0"/>
      <Section5 className="mt-[30px] md:mt-0"/>
      <Section6 className="mt-[30px] md:mt-0"/>
      <Footer />
    </div>
  );
}
