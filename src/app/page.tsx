import CTASection from "@/components/sections/CTASection";
import HeroSection from "@/components/sections/HeroSection";
import MarkSection from "@/components/sections/MarkSection";
import ScaleSection from "@/components/sections/ScaleSection";

export default function Home() {
  return (
    <main className="flex flex-col bg-background">
      <HeroSection />
      <CTASection
        title="Kenalin, Gojek. Si pembawa perubahan"
        buttonTitle="Gabung"
        className="bg-background items-center justify-center "
        textColor="text-white text-center text-xl lg:text-4xl"
      />
      <MarkSection />
      <CTASection
        title="Skala Kami"
        buttonTitle="Gabung"
        className="bg-white min-h-screen pt-48 lg:p-0"
        textColor="text-black text-4xl"
      />
      <ScaleSection />
    </main>
  );
}
