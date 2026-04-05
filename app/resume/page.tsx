import Footer from "../components/Footer";
import Navbar from "../components/NavBar";
import RadialBackground from "../components/RadialBackground";
import ResumeSection from "../components/Resume";
import StarCanvas from "../components/StarCanvas";
import BackToTop from "../components/toptobottom";

export default function Resume() {
  return (
    <main className="min-h-screen text-white">
        <RadialBackground />
        <StarCanvas />
        <Navbar />
    <ResumeSection />
       <Footer />
       <BackToTop />
    </main>
  );
}
