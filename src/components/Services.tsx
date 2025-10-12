import { Card, CardContent } from "@/components/ui/card";
import { Server, Network, Wrench, GraduationCap } from "lucide-react";
import serviceIpbx from "@/assets/service-ipbx.jpg";
import serviceSip from "@/assets/service-sip.jpg";
import serviceMaintenance from "@/assets/service-maintenance.jpg";
import serviceFormation from "@/assets/service-formation.jpg";

const services = [
  {
    icon: Server,
    title: "Installation IPBX",
    description: "Installation et configuration de systèmes IPBX Yeastar et Grandstream pour optimiser vos communications d'entreprise.",
    image: serviceIpbx,
  },
  {
    icon: Network,
    title: "Intégration SIP Trunk",
    description: "Intégration de lignes SIP pour connecter votre IPBX au réseau téléphonique et réduire vos coûts de communication.",
    image: serviceSip,
  },
  {
    icon: Wrench,
    title: "Maintenance VoIP",
    description: "Support technique et maintenance préventive de vos équipements VoIP pour garantir une disponibilité maximale.",
    image: serviceMaintenance,
  },
  {
    icon: GraduationCap,
    title: "Formation",
    description: "Formation complète de vos équipes à l'utilisation et à la gestion de vos systèmes de téléphonie IP.",
    image: serviceFormation,
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-foreground mb-4">Nos Services</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Des solutions complètes de téléphonie IP et réseaux adaptées à vos besoins professionnels
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground">{service.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
