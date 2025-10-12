import { Target, Eye } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-foreground mb-4">À Propos de Nous</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Tous Tech Services & Solutions est votre partenaire de confiance pour toutes vos solutions de téléphonie IP et réseau d'entreprise au Sénégal
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card className="border-2 hover:border-primary transition-colors duration-300 animate-fade-in">
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Notre Mission</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Fournir des solutions de communication modernes et fiables qui permettent aux entreprises sénégalaises d'optimiser leurs performances et de réduire leurs coûts opérationnels grâce aux technologies VoIP de pointe.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 hover:border-primary transition-colors duration-300 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Eye className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Notre Vision</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Devenir le leader de référence en solutions de téléphonie IP et infrastructure réseau au Sénégal, reconnu pour notre expertise technique, notre service client exceptionnel et notre engagement envers l'innovation.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16 max-w-4xl mx-auto text-center animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <div className="bg-accent p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-foreground mb-4">Pourquoi choisir Tous Tech ?</h3>
            <div className="grid md:grid-cols-3 gap-6 mt-6">
              <div>
                <div className="text-4xl font-bold text-primary mb-2">10+</div>
                <p className="text-muted-foreground">Années d'expérience</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">200+</div>
                <p className="text-muted-foreground">Clients satisfaits</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                <p className="text-muted-foreground">Support disponible</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
