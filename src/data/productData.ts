import { ProductPack, Review, Ingredient } from '../types';

export const PRODUCT_IMAGE_PATH = '/assets/aistudio/image_8bf6ac02_eddbe417.jpg';
export const PRODUCT_JAR_MOCKUP = '/assets/aistudio/mockup-white-gel-60g-main__1__6cd05404.png';

export const MOROCCAN_CITIES = [
  'Casablanca',
  'Rabat',
  'Marrakech',
  'Tanger',
  'Fès',
  'Agadir',
  'Meknès',
  'Oujda',
  'Kénitra',
  'Tétouan',
  'Salé',
  'Mohammédia',
  'El Jadida',
  'Nador',
  'Béni Mellal',
  'Safi',
  'Khouribga',
  'Témara',
  'Laâyoune',
  'Dakhla',
  'Autre ville au Maroc'
];

export const PRODUCT_PACKS: ProductPack[] = [
  {
    id: 'pack-1',
    name: '1 Pot — Offre Découverte',
    subtitle: 'Idéal pour tester l’efficacité sur les taches récentes',
    quantity: 1,
    weight: '50g',
    price: 179,
    originalPrice: 220,
    savings: 'Livraison Gratuite',
    duration: '4 à 6 semaines d’utilisation quotidienne',
  },
  {
    id: 'pack-2',
    name: '2 Pots — Cure Traitement Intense',
    subtitle: 'Recommandé pour estomper le Mélasma (Kalf) tenace',
    quantity: 2,
    weight: '2 x 50g (100g)',
    price: 329,
    originalPrice: 440,
    badge: 'LE PLUS VENDU',
    isPopular: true,
    savings: 'Économisez 29 DH + Livraison Gratuite',
    duration: '2 à 3 mois de traitement en profondeur',
  },
  {
    id: 'pack-3',
    name: '3 Pots — Cure Complète Anti-Récidive',
    subtitle: 'Le protocole définitif pour unifier le teint et bloquer les récidives',
    quantity: 3,
    weight: '3 x 50g (150g)',
    price: 429,
    originalPrice: 660,
    badge: 'MEILLEURE VALEUR',
    savings: 'Seulement 143 DH / pot + Livraison Gratuite',
    duration: '4 à 5 mois de protection continue',
  },
];

export const INGREDIENTS_LIST: Ingredient[] = [
  {
    name: 'Acide Kojique Pur',
    inci: 'Kojic Acid',
    concentration: 'Dosage Cible Optimisé',
    role: 'Inhibiteur de Mélanine & Dépigmentant',
    description: 'Extrait naturel issu de la fermentation fongique. Il inhibe directement l’enzyme tyrosinase responsable de la production anarchique de mélanine. C’est l’actif de référence dermatologique pour décomposer les amas pigmentaires profonds du mélasma (kalf).',
    benefits: [
      'Estompe le masque de grossesse et les taches brunes profondes',
      'Neutralise l’hyperpigmentation à la source',
      'Sans effet rebond lors de l’arrêt'
    ]
  },
  {
    name: 'Alpha-Arbutine Ciblée',
    inci: 'Alpha-Arbutin',
    concentration: 'Haute Pureté',
    role: 'Éclaircissant Cellulaire & Teint Parfait',
    description: 'Dérivé stable et sécuritaire de l’hydroquinone sans aucun effet toxique. L’Alpha-Arbutine est jusqu’à 10 fois plus efficace que la bêta-arbutine classique pour uniformiser le teint des peaux mates et mixtes exposées au soleil marocain.',
    benefits: [
      'Cible spécifiquement les zones hyperpigmentées',
      'Unifie le teint sans décolorer la peau saine autour',
      'Action douce tolérée par les peaux réactives'
    ]
  },
  {
    name: 'Vitamine C Bioactive',
    inci: 'Ascorbic Acid Micro-Complex',
    concentration: '0.8%',
    role: 'Antioxydant Puissant & Éclat Immédiat',
    description: 'La concentration précise de 0.8% micro-stabilisée permet une pénétration immédiate sans picotements. Elle neutralise l’oxydation des taches solaires, protège les cellules contre les rayons UV et stimule la clarté naturelle de l’épiderme.',
    benefits: [
      'Atténue les taches de soleil et cicatrices d’acné',
      'Redonne un éclat radieux et lumineux au visage',
      'Protège contre les radicaux libres et la pollution'
    ]
  },
  {
    name: 'Complexe Hydratant Barrière Cutanée',
    inci: 'Shea Butter & Glycerin Matrix',
    role: 'Nutrition & Réparation de la Barrière',
    description: 'Une texture crème onctueuse, non comédogène, qui nourrit l’épiderme pour éviter le dessèchement souvent causé par les soins dépigmentants classiques. Laisse la peau veloutée et souple.',
    benefits: [
      'Hydrate intensément sans fini gras ni brillant',
      'Restaure le film hydrolipidique protecteur',
      'Texture soyeuse adaptée à tous types de peaux'
    ]
  }
];

export const CLINICAL_STATS = [
  {
    value: '-58%',
    label: 'Intensité du Mélasma & Taches',
    detail: 'Évaluation clinique sur les taches de soleil et le masque de grossesse après 4 semaines'
  },
  {
    value: '96%',
    label: 'Teint plus uniforme & lumineux',
    detail: 'Constaté par les utilisatrices dès le premier pot'
  },
  {
    value: '14 Jours',
    label: 'Premiers résultats visibles',
    detail: 'Éclaircissement progressif des zones d’hyperpigmentation'
  },
  {
    value: '100%',
    label: 'Paiement à la livraison garanti',
    detail: 'Vous ne payez qu’à la réception de votre colis après vérification'
  }
];

export const MOROCCAN_REVIEWS: Review[] = [
  {
    id: 'rev-ma-1',
    author: 'Khadija M.',
    city: 'Casablanca (Maârif)',
    age: '39 ans',
    skinConcern: 'Mélasma tenace (Kalf après accouchement)',
    rating: 5,
    date: 'Il y a 2 jours',
    title: 'Le seul soin qui a enfin effacé mon kalf après 3 ans d’essais !',
    content: 'J’avais un masque de grossesse très foncé sur le front et les pommettes depuis la naissance de mon fils. J’ai essayé plusieurs crèmes en pharmacie très chères sans succès. Avec la crème Noor Cosmetics (pack 2 pots), les taches se sont estompées dès la 3ème semaine. Aujourd’hui mon teint est propre et unifié. Livraison très rapide en 24h à Casa !',
    verified: true,
    tag: 'melasma'
  },
  {
    id: 'rev-ma-2',
    author: 'Salma B.',
    city: 'Rabat (Agdal)',
    age: '33 ans',
    skinConcern: 'Taches de soleil & marques de boutons',
    rating: 5,
    date: 'Il y a 5 jours',
    title: 'Texture légère, ne graisse pas la peau et très efficace',
    content: 'Je l’applique chaque soir. Mes taches de soleil sur les joues ont presque totalement disparu. En plus la crème ne pique pas du tout grâce à l’Alpha-Arbutine et la Vitamine C. J’ai payé le livreur à la porte après avoir ouvert le carton, service impeccable.',
    verified: true,
    tag: 'soleil'
  },
  {
    id: 'rev-ma-3',
    author: 'Nezha T.',
    city: 'Marrakech (Guéliz)',
    age: '45 ans',
    skinConcern: 'Hyperpigmentation et teint terne',
    rating: 5,
    date: 'Il y a 1 semaine',
    title: 'Une merveille pour les femmes de Marrakech exposées au soleil fort',
    content: 'Le soleil de Marrakech avait noirci certaines zones de mon visage. Cette crème est une bénédiction : teint éclairci, taches brunes atténuées de moitié en 1 mois. J’ai recommandé le pack de 3 pots pour mes sœurs.',
    verified: true,
    tag: 'teint'
  },
  {
    id: 'rev-ma-4',
    author: 'Imane K.',
    city: 'Tanger',
    age: '28 ans',
    skinConcern: 'Traces d’acné foncées',
    rating: 5,
    date: 'Il y a 2 semaines',
    title: 'Fini le fond de teint pour cacher mes taches',
    content: 'J’avais beaucoup de cicatrices pigmentées post-acné sur les joues et le menton. Après un seul pot de 50g, ma peau est redevenue lisse et uniforme. Très bon rapport qualité/prix à 179 DH avec livraison gratuite.',
    verified: true,
    tag: 'acne'
  }
];

export const MOROCCAN_FAQS = [
  {
    question: 'Comment fonctionne le paiement à la livraison (COD) ?',
    answer: 'C’est 100% sécurisé et sans aucun risque pour vous : vous remplissez le formulaire avec votre nom, téléphone et adresse. Notre équipe vous contacte par téléphone ou WhatsApp pour confirmer la commande. Le livreur se déplace jusqu’à votre domicile ou lieu de travail. Vous vérifiez votre colis puis vous réglez le montant en dirhams (espèces).'
  },
  {
    question: 'La livraison est-elle réellement gratuite dans tout le Maroc ?',
    answer: 'Oui, la livraison est 100% GRATUITE dans toutes les villes du Maroc (Casablanca, Rabat, Marrakech, Fès, Tanger, Agadir, Oujda, Meknès, Kénitra, Tétouan, Laâyoune, etc.). Il n’y a aucun frais caché.'
  },
  {
    question: 'Quel est le délai de livraison ?',
    answer: 'Le délai habituel est de 24h à 48h ouvrées. Pour les grandes villes (Casablanca, Rabat, Marrakech, Tanger), les livraisons s’effectuent souvent sous 24h.'
  },
  {
    question: 'Comment appliquer la crème pour un résultat optimal ?',
    answer: 'Appliquez une noisette de crème le soir sur un visage parfaitement propre et sec, en massant délicatement les zones concernées (front, joues, lèvre supérieure). Important : en journée, appliquez impérativement un écran solaire SPF50+ pour protéger votre peau des rayons UV et éviter la réapparition des taches.'
  },
  {
    question: 'Combien de pots me faut-il pour faire disparaître mon mélasma (kalf) ?',
    answer: 'Pour des taches récentes ou légères, 1 pot (50g) montre d’excellents résultats. Pour un mélasma ancien, profond ou un masque de grossesse datant de plusieurs mois/années, nous recommandons la cure de 2 pots (329 DH) ou 3 pots (429 DH) afin de régénérer complètement les couches pigmentées et consolider le résultat.'
  },
  {
    question: 'La crème convient-elle aux peaux sensibles ?',
    answer: 'Oui, la formulation Noor Cosmetics associe l’Acide Kojique et l’Alpha-Arbutine à un complexe adoucissant sans parabènes agressifs. Elle est conçue pour tous les types de peaux (normales, mixtes, sèches et sensibles).'
  }
];
