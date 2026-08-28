import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import AOS from "aos";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { BackToTop } from "../components/BackToTop";

import { servicesData } from "../data/servicesData";
import { 
  ServiceHero, 
  ServiceFeaturesGrid, 
  TechStackSection,
  ProcessStepper, 
  BenefitsList, 
  ServiceFAQ, 
  ServiceCTA 
} from "../components/services";

export const Route = createFileRoute("/services_/$serviceId")({
  component: ServiceDetailPage,
});

function ServiceDetailPage() {
  const { serviceId } = Route.useParams();

  useEffect(() => {
    AOS.init({ duration: 800, easing: "ease-out-cubic", once: true, offset: 60 });
    window.scrollTo(0, 0);
  }, [serviceId]);

  // Find the exact service across all categories
  let targetService = null;
  let targetCategory = null;
  for (const category of servicesData) {
    const found = category.services.find(s => s.id === serviceId);
    if (found) {
      targetService = found;
      targetCategory = category;
      break;
    }
  }

  if (!targetService) {
    return (
      <div className="min-h-screen bg-background text-foreground flex flex-col">
        <Navbar />
        <main className="flex-1 flex flex-col items-center justify-center pt-32 pb-24 text-center">
          <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
          <p className="text-muted-foreground">The service you are looking for does not exist.</p>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30 selection:text-primary">
      <Navbar />
      
      <main className="flex flex-col">
        <ServiceHero service={targetService} />
        <ServiceFeaturesGrid features={targetService.features} />
        <TechStackSection techStack={targetService.techStack} />
        <ProcessStepper steps={targetService.process} />
        {/* Portfolio omitted as requested by the user */}
        {/* Testimonials omitted for now unless we just loop shared Testimonials */}
        <BenefitsList benefits={targetService.benefits} />
        <ServiceFAQ faqs={targetService.faqs} />
        <ServiceCTA serviceName={targetService.name} />
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
}
