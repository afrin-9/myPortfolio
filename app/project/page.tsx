import EarthCurve from "../components/EarthCurve";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Marquee from "../components/Marquee";
import Navbar from "../components/NavBar";
import RadialBackground from "../components/RadialBackground";
import ServicesSection from "../components/ServiceSection";
import ShowcaseGrid from "../components/project/ShowcaseGrid";
import StarCanvas from "../components/StarCanvas";
import BackToTop from "../components/toptobottom";

export default function Project() {
  return (
    <main className=" text-white min-h-screen">
      <RadialBackground />
      <StarCanvas />
      <Navbar />
      <EarthCurve />
      <ShowcaseGrid />
      <Footer />
      <BackToTop />
    </main>
  );
}