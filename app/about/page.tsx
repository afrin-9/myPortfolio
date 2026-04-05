import AboutContent from "../components/about/AboutContent";
import AboutHeader from "../components/about/AboutHeader";
import Frameworks from "../components/about/framework";
import Projects from "../components/about/project";
import ServicesSection from "../components/about/ServiceSection";
import Skills from "../components/about/skill";
import Footer from "../components/Footer";
import Navbar from "../components/NavBar";
import RadialBackground from "../components/RadialBackground";
import StarCanvas from "../components/StarCanvas";
import BackToTop from "../components/toptobottom";

export default function AboutPage() {
  return (
    <main className="min-h-screen  text-white ">
        <RadialBackground />
              <StarCanvas />
              <Navbar />
      <AboutHeader />
      <AboutContent />
       <Skills />
      <Frameworks />
      <Projects />
      <ServicesSection />
       <Footer />
            <BackToTop />
    </main>
  );
}
