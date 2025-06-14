import restockingImg from "../assets/restocking.jpg";
import equipmentImg from "../assets/Equipment.png";
import consumablesImg from "../assets/Consumables.png";

export interface Article {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
}

export const articles: Article[] = [
  {
    id: "sterilisation-guide",
    title: "Guide complet de la stérilisation dentaire",
    excerpt: "Les bonnes pratiques pour une stérilisation efficace et sûre.",
    content: `La stérilisation du matériel dentaire est primordiale pour garantir la sécurité des patients. Découvrez les étapes clés :
1. Pré-désinfection immédiate après usage.
2. Nettoyage mécanique ou ultrason.
3. Conditionnement en sachet ou cassette.
4. Passage en autoclave avec contrôle des cycles.
En respectant ces principes, vous limitez drastiquement les risques de contamination croisée.`,
    image: restockingImg,
  },
  {
    id: "choisir-son-fauteuil",
    title: "Comment choisir son fauteuil de soins ?",
    excerpt: "Ergonomie, confort et budget : nos conseils pour bien sélectionner votre unit.",
    content: `Le fauteuil est l'élément central du cabinet. Pour orienter votre choix, analysez :
- L'ergonomie pour le praticien et l'assise patient.
- Les options de mobilité et d'accessoires.
- La facilité de maintenance et la compatibilité avec vos équipements.
Un fauteuil adapté améliore la qualité des soins et la productivité quotidienne.`,
    image: equipmentImg,
  },
  {
    id: "bonnes-pratiques-hygiene",
    title: "Bonnes pratiques d'hygiène au quotidien",
    excerpt: "Des gestes simples pour un environnement toujours sain.",
    content: `Au-delà de la stérilisation, quelques réflexes permettent de maintenir un environnement propre :
- Utiliser des champs et gaines à usage unique.
- Nettoyer les surfaces entre chaque patient.
- Vérifier régulièrement les dates de péremption des produits.
Ces actions renforcent la confiance de votre patientèle tout en respectant les normes en vigueur.`,
    image: consumablesImg,
  },
];
