import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { toast } from "sonner";
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

const quoteSchema = z.object({
  lineType: z.enum(["analog", "digital"], {
    required_error: "Veuillez sélectionner le type de ligne",
  }),
  ipPhoneCount: z.coerce
    .number()
    .min(0, "Le nombre doit être positif")
    .max(1000, "Le nombre est trop élevé"),
  analogPhoneCount: z.coerce
    .number()
    .min(0, "Le nombre doit être positif")
    .max(1000, "Le nombre est trop élevé"),
  existingPabx: z.string().trim().max(200, "Maximum 200 caractères"),
  contactName: z
    .string()
    .trim()
    .min(1, "Le nom est requis")
    .max(100, "Maximum 100 caractères"),
  contactEmail: z
    .string()
    .trim()
    .email("Email invalide")
    .max(255, "Maximum 255 caractères"),
  contactPhone: z
    .string()
    .trim()
    .min(1, "Le téléphone est requis")
    .max(50, "Maximum 50 caractères"),
});

type QuoteFormData = z.infer<typeof quoteSchema>;

interface QuoteDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const QuoteDialog = ({ open, onOpenChange }: QuoteDialogProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
    watch,
  } = useForm<QuoteFormData>({
    resolver: zodResolver(quoteSchema),
    defaultValues: {
      ipPhoneCount: 0,
      analogPhoneCount: 0,
      existingPabx: "",
    },
  });

  const lineType = watch("lineType");

  const onSubmit = async (data: QuoteFormData) => {
    setIsSubmitting(true);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      console.log("Demande de devis:", data);
      
      toast.success("Demande de devis envoyée avec succès !", {
        description: "Nous vous contacterons dans les plus brefs délais.",
      });
      
      reset();
      onOpenChange(false);
    } catch (error) {
      toast.error("Erreur lors de l'envoi de la demande", {
        description: "Veuillez réessayer ou nous contacter directement.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">Demander un devis</DialogTitle>
          <DialogDescription>
            Remplissez ce formulaire pour recevoir un devis personnalisé pour vos besoins en téléphonie IP.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 mt-4">
          {/* Type de ligne existante */}
          <div className="space-y-3">
            <Label className="text-base font-semibold">
              Votre ligne existante est-elle analogique ? *
            </Label>
            <RadioGroup
              value={lineType}
              onValueChange={(value) => setValue("lineType", value as "analog" | "digital")}
              className="flex gap-4"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="analog" id="analog" />
                <Label htmlFor="analog" className="font-normal cursor-pointer">
                  Oui (Analogique)
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="digital" id="digital" />
                <Label htmlFor="digital" className="font-normal cursor-pointer">
                  Non (Numérique/IP)
                </Label>
              </div>
            </RadioGroup>
            {errors.lineType && (
              <p className="text-sm text-destructive">{errors.lineType.message}</p>
            )}
          </div>

          {/* Nombre de téléphones IP */}
          <div className="space-y-2">
            <Label htmlFor="ipPhoneCount" className="text-base font-semibold">
              Nombre de téléphones IP souhaités *
            </Label>
            <Input
              id="ipPhoneCount"
              type="number"
              min="0"
              {...register("ipPhoneCount")}
              placeholder="Ex: 10"
              className={errors.ipPhoneCount ? "border-destructive" : ""}
            />
            {errors.ipPhoneCount && (
              <p className="text-sm text-destructive">{errors.ipPhoneCount.message}</p>
            )}
          </div>

          {/* Nombre de téléphones analogiques */}
          <div className="space-y-2">
            <Label htmlFor="analogPhoneCount" className="text-base font-semibold">
              Nombre de téléphones analogiques souhaités *
            </Label>
            <Input
              id="analogPhoneCount"
              type="number"
              min="0"
              {...register("analogPhoneCount")}
              placeholder="Ex: 5"
              className={errors.analogPhoneCount ? "border-destructive" : ""}
            />
            {errors.analogPhoneCount && (
              <p className="text-sm text-destructive">{errors.analogPhoneCount.message}</p>
            )}
          </div>

          {/* PABX existant */}
          <div className="space-y-2">
            <Label htmlFor="existingPabx" className="text-base font-semibold">
              PABX existant
            </Label>
            <Input
              id="existingPabx"
              {...register("existingPabx")}
              placeholder="Ex: Yeastar S100, Grandstream UCM6204, Aucun..."
              className={errors.existingPabx ? "border-destructive" : ""}
            />
            {errors.existingPabx && (
              <p className="text-sm text-destructive">{errors.existingPabx.message}</p>
            )}
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
                  {...register("contactName")}
                  placeholder="Votre nom"
                  className={errors.contactName ? "border-destructive" : ""}
                />
                {errors.contactName && (
                  <p className="text-sm text-destructive">{errors.contactName.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="contactEmail" className="text-base font-semibold">
                  Email *
                </Label>
                <Input
                  id="contactEmail"
                  type="email"
                  {...register("contactEmail")}
                  placeholder="votre.email@exemple.com"
                  className={errors.contactEmail ? "border-destructive" : ""}
                />
                {errors.contactEmail && (
                  <p className="text-sm text-destructive">{errors.contactEmail.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="contactPhone" className="text-base font-semibold">
                  Téléphone *
                </Label>
                <Input
                  id="contactPhone"
                  type="tel"
                  {...register("contactPhone")}
                  placeholder="Ex: +221 77 123 45 67"
                  className={errors.contactPhone ? "border-destructive" : ""}
                />
                {errors.contactPhone && (
                  <p className="text-sm text-destructive">{errors.contactPhone.message}</p>
                )}
              </div>
            </div>
          </div>

          <div className="flex gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
              disabled={isSubmitting}
              className="flex-1"
            >
              Annuler
            </Button>
            <Button type="submit" disabled={isSubmitting} className="flex-1">
              {isSubmitting ? "Envoi en cours..." : "Envoyer la demande"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default QuoteDialog;
