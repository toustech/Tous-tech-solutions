import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

interface QuoteDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const QuoteDialog = ({ open, onOpenChange }: QuoteDialogProps) => {

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">Demander un devis</DialogTitle>
          <DialogDescription>
            Remplissez ce formulaire pour recevoir un devis personnalisé pour vos besoins en téléphonie IP.
          </DialogDescription>
        </DialogHeader>

        <form action="https://formspree.io/f/mvgwewdo" method="POST" className="space-y-6 mt-4">
          {/* Type de ligne existante */}
          <div className="space-y-3">
            <Label className="text-base font-semibold">
              Votre ligne existante est-elle analogique ? *
            </Label>
            <div className="flex gap-4">
              <div className="flex items-center space-x-2">
                <input type="radio" id="analog" name="lineType" value="Oui (Analogique)" required className="h-4 w-4" />
                <Label htmlFor="analog" className="font-normal cursor-pointer">
                  Oui (Analogique)
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <input type="radio" id="digital" name="lineType" value="Non (Numérique/IP)" required className="h-4 w-4" />
                <Label htmlFor="digital" className="font-normal cursor-pointer">
                  Non (Numérique/IP)
                </Label>
              </div>
            </div>
          </div>

          {/* Nombre de téléphones IP */}
          <div className="space-y-2">
            <Label htmlFor="ipPhoneCount" className="text-base font-semibold">
              Nombre de téléphones IP souhaités *
            </Label>
            <Input
              id="ipPhoneCount"
              name="ipPhoneCount"
              type="number"
              min="0"
              max="1000"
              placeholder="Ex: 10"
              required
            />
          </div>

          {/* Nombre de téléphones analogiques */}
          <div className="space-y-2">
            <Label htmlFor="analogPhoneCount" className="text-base font-semibold">
              Nombre de téléphones analogiques souhaités *
            </Label>
            <Input
              id="analogPhoneCount"
              name="analogPhoneCount"
              type="number"
              min="0"
              max="1000"
              placeholder="Ex: 5"
              required
            />
          </div>

          {/* PABX existant */}
          <div className="space-y-2">
            <Label htmlFor="existingPabx" className="text-base font-semibold">
              PABX existant
            </Label>
            <Input
              id="existingPabx"
              name="existingPabx"
              placeholder="Ex: Yeastar S100, Grandstream UCM6204, Aucun..."
              maxLength={200}
            />
          </div>

          {/* Informations de contact */}
          <div className="pt-4 border-t border-border">
            <h3 className="text-lg font-semibold mb-4">Vos coordonnées</h3>
            
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="contactName" className="text-base font-semibold">
                  Nom complet *
                </Label>
                <Input
                  id="contactName"
                  name="contactName"
                  placeholder="Votre nom"
                  required
                  maxLength={100}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="contactEmail" className="text-base font-semibold">
                  Email *
                </Label>
                <Input
                  id="contactEmail"
                  name="contactEmail"
                  type="email"
                  placeholder="votre.email@exemple.com"
                  required
                  maxLength={255}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="contactPhone" className="text-base font-semibold">
                  Téléphone *
                </Label>
                <Input
                  id="contactPhone"
                  name="contactPhone"
                  type="tel"
                  placeholder="Ex: +221 77 123 45 67"
                  required
                  maxLength={50}
                />
              </div>
            </div>
          </div>

          <div className="flex gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
              className="flex-1"
            >
              Annuler
            </Button>
            <Button type="submit" className="flex-1">
              Envoyer la demande
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default QuoteDialog;
