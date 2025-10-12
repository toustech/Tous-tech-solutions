import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhatsAppButton = () => {
  const phoneNumber = "221774938150";
  const message = encodeURIComponent("Bonjour, je souhaite obtenir plus d'informations sur vos services VoIP.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <Button
      asChild
      size="lg"
      className="fixed bottom-6 right-6 rounded-full h-14 w-14 p-0 shadow-xl hover:scale-110 transition-transform duration-300 animate-float z-50"
    >
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactez-nous sur WhatsApp"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
    </Button>
  );
};

export default WhatsAppButton;
