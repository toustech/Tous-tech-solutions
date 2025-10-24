import { useState } from "react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-voip.jpg";
import QuoteDialog from "@/components/QuoteDialog";

const Hero = () => {
  const [quoteDialogOpen, setQuoteDialogOpen] = useState(false);
  
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="accueil" className="relative min-h-screen flex items-center pt-16">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(37, 99, 235, 0.95), rgba(29, 78, 216, 0.95)), url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      
      <div className="container mx-auto px-4 z-10 relative">
        <div className="max-w-3xl animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            L'expertise des technologies modernes au service de votre performance
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8">
            Spécialiste en téléphonie sur IP (VoIP), installation d'IPBX et solutions réseau d'entreprise au Sénégal
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              onClick={() => setQuoteDialogOpen(true)}
              className="bg-white text-primary hover:bg-white/90 shadow-lg text-lg px-8 py-6"
            >
              Demander un devis gratuit
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={scrollToContact}
              className="border-2 border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-6"
            >
              Nous contacter
            </Button>
          </div>
        </div>
      </div>
      <QuoteDialog open={quoteDialogOpen} onOpenChange={setQuoteDialogOpen} />
    </section>
  );
};

export default Hero;
