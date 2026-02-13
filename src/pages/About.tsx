import { LanguageProvider } from "@/lenguajeContext/LanguageContext";
import Header from "@/components/Header";
import AboutSection from "@/components/sections/AboutSection";
import MissionVisionSection from "@/components/sections/MissionVisionSection";
import WhyChooseUsSection from "@/components/sections/WhyChooseUsSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
const About = () => {
    return (
        <LanguageProvider>
            <div className="min-h-screen bg-background">
                <Header />
                <main>
                    <AboutSection />
                    <MissionVisionSection />
                    <WhyChooseUsSection />
                </main>
                <Footer />
                <WhatsAppButton />
            </div>
        </LanguageProvider>
    );
};
export default About;