import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Phone className="h-6 w-6 text-primary" />
              <span className="font-bold text-lg">Tous Tech</span>
            </div>
            <p className="text-background/80">
              L'expertise des technologies modernes au service de votre performance
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <div className="space-y-3 text-background/80">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <a href="mailto:contact@tous-tech.com" className="hover:text-primary transition-colors">
                  contact@tous-tech.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <a href="tel:+221XXXXXXXXX" className="hover:text-primary transition-colors">
                  +221 XX XXX XX XX
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>Dakar, Sénégal</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Services</h3>
            <ul className="space-y-2 text-background/80">
              <li>Installation IPBX</li>
              <li>Intégration SIP Trunk</li>
              <li>Maintenance VoIP</li>
              <li>Formation</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 text-center text-background/60">
          <p>&copy; {currentYear} Tous Tech Services & Solutions. Tous droits réservés.</p>
          <p className="mt-2 text-sm">
            Téléphonie IP Sénégal | IPBX Yeastar | Solutions VoIP professionnelles
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
