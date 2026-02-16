import { weddingConfig } from './config';

export const translations = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      schedule: "Schedule",
      rsvp: "RSVP",
      faq: "FAQ",
      travel: "Travel",
      venue: "Venue",
      saveTheDate: "Save the date"
    },
    home: {
      title: "We're getting married!",
      names: weddingConfig.couple.names,
      date: weddingConfig.date.displayEn,
      location: weddingConfig.venue.name,
      locationDetail: `${weddingConfig.venue.city}, ${weddingConfig.venue.province}`,
      countdownTitle: "Countdown to our big day",
      days: "Days",
      hours: "Hours",
      minutes: "Minutes",
      seconds: "Seconds",
      married: "We're married!",
      quickLinks: "Quick links"
    },
    about: {
      title: "Our story",
      story: `Alex and Justine had their first date at Dieu du Ciel in Montréal on February 22, 2020, two weeks before the world shut down. Excellent timing, in retrospect. Instead of ghosting or panicking, they did the reasonable thing and quarantined together, rotating between apartments, cooking elaborate meals to simulate restaurants, and accidentally turning Alex into a hockey fan. (Go Habs Go.)

The next few years were a blur of road trips, family introductions, holidays, and stays in Florida, Norfolk, Washington, Outerbanks, and Montréal. There were cottages, mushroom foraging, weddings, Thanksgiving traditions, and one oven fire that forced us to migrate the turkey onto a BBQ. Everyone survived.

In March 2023, they moved into an apartment in Little Italy. Four days later, at a party with friends and family, Alex proposed, using a Habs hockey puck, because of course. Since then, there have been more trips, a new nephew, birthdays, holidays, and a continued tradition of celebrating anniversaries by remembering that first perfectly inconvenient date.

They are getting married in the summer of 2026, after a year long delay, planning a small, intimate wedding in Montréal with their favorite people, good wine, and very good food. The rest is still being figured out, but this part feels pretty settled. For the next few years, Alex and Justine hope to travel some more, and to potentially invite a small kitten in their household.`,
      contact: "Contact",
      email: weddingConfig.couple.email
    },
    schedule: {
      title: "Wedding day schedule",
      arrival: "Arrival",
      arrivalTime: weddingConfig.schedule.arrival,
      ceremony: "Ceremony",
      ceremonyTime: weddingConfig.schedule.ceremony,
      cocktail: "Cocktail hour",
      cocktailTime: weddingConfig.schedule.cocktail,
      dinner: "Dinner & speeches",
      dinnerTime: weddingConfig.schedule.dinner,
      dancing: "Dancing",
      dancingTime: weddingConfig.schedule.dancing,
      timingNote: "All times are subject to change except arrival time, which is set."
    },
    rsvp: {
      title: "RSVP",
      subtitle: `Please respond by ${weddingConfig.rsvp.deadline.displayEn}`,
      description: "We can't wait to celebrate with you! Please fill out the form below to let us know if you'll be joining us.",
      formNote: "Loading RSVP form..."
    },
    faq: {
  title: "Frequently asked questions",
  timing: {
    q: "What time should I arrive?",
    a: "Please arrive by 3:00 PM"
  },
  dress: {
    q: "What should I wear?",
    a: "The attire for the evening is formal. Men should wear a suit and tie. Women should wear a dress that falls below the knees. We love creativity and color. Please note that the ceremony will take place outside with the reception and dinner indoors. Early June in Montréal is usually quite mild."
  },
  food: {
    q: "What about food and drinks?",
    a: "Following the ceremony there will be a cocktail hour with heavy hors-d'oeuvres. This will be followed by a multi-course dinner. Drinks are on us all night! We'll have a selection of liquors, beers, and wines. If there's something special you'd like to see behind the bar, let us know your preferences in your RSVP and we'll do our best to have your favorites ready!"
  },
  parking: {
    q: "Is there parking available?",
    a: "Yes, there's parking on-site. Uber and taxis work out here too, though since we're in the suburbs, it's smart to book ahead or carpool when possible. We're also looking into renting a bus and will update everyone closer to the date. In general it's about a 30 minute drive from downtown Montréal."
  },
  lodging: {
    q: "Where should I stay?",
    a: "Montréal has an abundance of great hotels, and short-term vacation rentals are plentiful. We recommend staying in the city of Montréal as it's got a bit more life than Baie-D'Urfé. Downtown Montréal is most convenient, and the Plateau / Mile-End is great for a trendier scene."
  }
},


    travel: {
      title: "Travel information",
      gettingThere: "Getting to Montreal",
      byAir: "By air",
      byAirDesc: "Montreal-Pierre Elliott Trudeau International Airport (YUL) is the main airport, approximately 30 minutes from the venue by car.",
      byCar: "By car",
      byCarDesc: `${weddingConfig.venue.city} is located on the western tip of the Island of Montreal, easily accessible via Highway 20.`,
      byTransit: "By public transit",
      byTransitDesc: "The venue is accessible by STM bus routes. We recommend checking the STM website for current schedules and routes.",
      hotels: "Hotel recommendations",
      hotelsDesc: "Coming soon! We're compiling a list of recommended hotels near the venue.",
      weather: "Weather expectations",
      weatherDesc: "June in Montreal is beautiful! Expect pleasant temperatures around 20-25°C (68-77°F). We recommend bringing a light jacket for the evening."
    },
    venue: {
      title: "The venue",
      name: weddingConfig.venue.fullName,
      address: weddingConfig.venue.address,
      description: `${weddingConfig.venue.fullName} is a charming venue nestled in the picturesque town of ${weddingConfig.venue.city}, overlooking beautiful Lake Saint-Louis. The center offers a warm and elegant setting perfect for celebrating our special day with family and friends.`
    },
    saveTheDate: {
      title: "Save the date",
      description: "Our save-the-date announcement sent to friends and family."
    }
  },
  fr: {
    nav: {
      home: "Accueil",
      about: "À Propos",
      schedule: "Horaire",
      rsvp: "RSVP",
      faq: "FAQ",
      travel: "Voyager",
      venue: "Lieu",
      saveTheDate: "Réservez la Date"
    },
    home: {
      title: "Nous Nous Marions!",
      names: weddingConfig.couple.names,
      date: weddingConfig.date.displayFr,
      location: weddingConfig.venue.nameFr,
      locationDetail: `${weddingConfig.venue.city}, ${weddingConfig.venue.province}`,
      countdownTitle: "Compte à Rebours",
      days: "Jours",
      hours: "Heures",
      minutes: "Minutes",
      seconds: "Secondes",
      married: "Nous Sommes Mariés!",
      quickLinks: "Liens Rapides"
    },
    about: {
      title: "Notre Histoire",
      story: "L'histoire de Justine et Alex a commencé par une rencontre fortuite qui changerait leur vie à jamais. Dès cette première conversation, ils ont su qu'ils avaient trouvé quelque chose de spécial. À travers de grandes et petites aventures, des discussions nocturnes et des moments tranquilles ensemble, leur lien s'est transformé en un amour qui révèle le meilleur d'eux-mêmes. Maintenant, ils sont prêts à célébrer le début de leur éternité avec les personnes qui comptent le plus pour eux.",
      contact: "Contact",
      email: weddingConfig.couple.email
    },
    schedule: {
      title: "Horaire du Mariage",
      arrival: "Arrivée",
      arrivalTime: weddingConfig.schedule.arrivalFr,
      ceremony: "Cérémonie",
      ceremonyTime: weddingConfig.schedule.ceremonyFr,
      cocktail: "Cocktail",
      cocktailTime: weddingConfig.schedule.cocktailFr,
      dinner: "Dîner et Discours",
      dinnerTime: weddingConfig.schedule.dinnerFr,
      dancing: "Danse",
      dancingTime: weddingConfig.schedule.dancingFr,
      timingNote: "Tous les horaires sont sujets à changement sauf l'heure d'arrivée, qui est fixe."
    },
    rsvp: {
      title: "RSVP",
      subtitle: `Veuillez répondre avant le ${weddingConfig.rsvp.deadline.displayFr}`,
      description: "Nous avons hâte de célébrer avec vous! Veuillez remplir le formulaire ci-dessous pour nous faire savoir si vous serez des nôtres.",
      formNote: "Chargement du formulaire RSVP..."
    },
    faq: {
      title: "Questions Fréquentes",
      timing: {
        q: "À quelle heure dois-je arriver?",
        a: "Veuillez arriver pour 15h."
      },
      dress: {
        q: "Que dois-je porter?",
        a: "On vise une tenue formelle de jour. Messieurs, portez un costume avec cravate ou nœud papillon—pas besoin de smoking pendant la journée. Mesdames, on aimerait vous voir dans une robe longue, de la couleur de votre choix. Si vous avez des doutes sur votre tenue, textez simplement Alex ou Justine—on est un petit groupe et ça nous fait plaisir de vous aider! On adore la créativité et les couleurs, alors n'ayez pas peur de vous démarquer."
      },
      food: {
        q: "Qu'en est-il de la nourriture et des boissons?",
        a: "On aura un cocktail avec bouchées suivi d'un repas à plusieurs services. Les consommations sont sur nous toute la soirée—on aura une sélection de spiritueux, bières et vins. Indiquez-nous vos préférences dans votre RSVP et on fera de notre mieux pour avoir vos favoris!"
      },
      parking: {
        q: "Y a-t-il un stationnement disponible?",
        a: "Oui, il y a du stationnement sur place. Uber et les taxis fonctionnent aussi dans le coin, mais comme on est en banlieue, c'est prudent de réserver d'avance ou de faire du covoiturage si possible. On regarde aussi pour louer un autobus et on vous tiendra au courant plus près de la date."
      }
    },
    travel: {
      title: "Informations de Voyage",
      gettingThere: "Se Rendre à Montréal",
      byAir: "Par Avion",
      byAirDesc: "L'aéroport international Pierre-Elliott-Trudeau de Montréal (YUL) est l'aéroport principal, à environ 30 minutes du lieu en voiture.",
      byCar: "En Voiture",
      byCarDesc: `${weddingConfig.venue.city} est située à l'extrémité ouest de l'île de Montréal, facilement accessible par l'autoroute 20.`,
      byTransit: "Par Transport en Commun",
      byTransitDesc: "Le lieu est accessible par les lignes d'autobus de la STM. Nous recommandons de consulter le site web de la STM pour les horaires et itinéraires actuels.",
      hotels: "Recommandations d'Hôtels",
      hotelsDesc: "À venir bientôt! Nous préparons une liste d'hôtels recommandés près du lieu.",
      weather: "Prévisions Météo",
      weatherDesc: "Juin à Montréal est magnifique! Attendez-vous à des températures agréables autour de 20-25°C. Nous recommandons d'apporter une veste légère pour la soirée."
    },
    venue: {
      title: "Le Lieu",
      name: weddingConfig.venue.fullNameFr,
      address: weddingConfig.venue.address,
      description: `Le ${weddingConfig.venue.fullNameFr} est un lieu charmant niché dans la pittoresque ville de ${weddingConfig.venue.city}, surplombant le magnifique lac Saint-Louis. Le centre offre un cadre chaleureux et élégant parfait pour célébrer notre jour spécial avec la famille et les amis.`
    },
    saveTheDate: {
      title: "Réservez la Date",
      description: "Notre annonce 'réservez la date' envoyée aux amis et à la famille."
    }
  }
} as const;

export type Language = 'en' | 'fr';
export type TranslationKey = typeof translations.en;
