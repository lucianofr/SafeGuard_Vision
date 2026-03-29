import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import PPEDetectionSection from '../components/PPEDetectionSection';
import EngineerViewSection from '../components/EngineerViewSection';
import ManagerROISection from '../components/ManagerROISection';
import HSEImpactSection from '../components/HSEImpactSection';
import DemoLeadForm from '../components/DemoLeadForm';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <PPEDetectionSection />
      <EngineerViewSection />
      <ManagerROISection />
      <HSEImpactSection />
      <DemoLeadForm />
      <Footer />
    </main>
  );
}
