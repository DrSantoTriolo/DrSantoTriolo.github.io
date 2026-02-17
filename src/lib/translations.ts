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
      story: `Alex and Justine met in Montreal late in February 2020. Just as their relationship was beginning, the world was ending. Two weeks after they met, the global pandemic would close down the city, forcing them to navigate a new world together.  But, as Miles Cameron wrote, “all the best romances bloom in the midst of a good siege.” Those early days were spent either in the kitchen, sharing their love of cooking, or in front of the T.V. watching the Hab’s historic 2021 run for Stanley Cup, which they sadly lost due to some uncharacteristic errors early in Game 3, when the Habs allowed two goals in the first 3:30 of the game after Josh Anderson failed to clear the puck along the boards. The rest is history. 

If the first few years were spent grounded, the next few were spent on the road, traveling back and forth between Virginia, Florida, Maryland, and the Outer Banks. There were cottages and mushroom foraging, weddings and oyster roasts, holiday traditions kept and made, one oven fire (no one’s fault), several grill fires (which Alex says were no more his fault than oxygen is a fire’s fault), and many many hockey games.  In March 2023, they moved into a little apartment in Little Italy. The same week, Alex proposed (with the ring on a Habs hockey puck). 

Throughout this entire time, they have been blessed to mark the passing of each day in the richness of love and joy with family and friends. Justine calls it 'the fun times', Alex calls it 'the only memories he's ever wanted to make.'

We invite you to join us, family and friends old and new, to celebrate our first six years together—and all the years to come.`,
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
  byAirDesc: "Montreal-Pierre Elliott Trudeau International Airport (YUL) is the city's main airport. It is approximately 30 minutes to the venue by car. The airport is also approximately 30 minutes to the city center.",
  byCar: "By car",
  byCarDesc: `${weddingConfig.venue.city} is located on the western tip of the Island of Montreal, easily accessible via Highway 20. The drive is about 30 minutes from the city center. There is on-site parking.`,
  byTransit: "By public transit",
  byTransitDesc: "The venue is accessible by the number 405 bus. By bus, the venue is about an hour from the city center. We recommend checking the STM website for current schedules and routes: https://www.stm.info/en/info/networks/bus/local/line-405-west.",
  hotels: "Hotel recommendations",
  hotelsDesc: "There are a number of hotels within a 15 minute drive of the venue. The most luxurious of these is the Château Vaudreuil. The closest hotel is the Courtyard Marriott West Island, which is roughly a 10 minute drive. For more on lodging, see the FAQ section.",
  weather: "Weather expectations",
  weatherDesc: "June in Montreal is beautiful! Expect pleasant temperatures around 20-25°C (68-77°F). We recommend bringing a light jacket for the evening. Please note, the ceremony will be outdoors on grass. The dinner and reception will be indoors."
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
  story: `Alex et Justine se sont rencontrés à Montréal à la fin février 2020. Au moment même où leur histoire commençait, le monde semblait s’arrêter. Deux semaines après leur rencontre, la pandémie mondiale a fermé la ville, les forçant à apprendre à naviguer ensemble dans un tout nouveau monde. Mais, comme l’a écrit Miles Cameron : « Les plus belles histoires d’amour fleurissent au cœur d’un bon siège. » Ces premiers jours se sont passés soit dans la cuisine, à partager leur amour de la cuisine, soit devant la télé à regarder le parcours historique du Canadien lors des séries de 2021 vers la Coupe Stanley — qu’ils ont malheureusement perdue à cause de quelques erreurs inhabituelles au début du match 3, quand le CH a accordé deux buts dans les trois premières minutes trente après que Josh Anderson n’ait pas réussi à sortir la rondelle le long de la bande. La suite appartient à l’histoire.

Si les premières années se sont vécues plutôt à la maison, les suivantes se sont passées sur la route, à faire des allers-retours entre la Virginie, la Floride, le Maryland et les Outer Banks. Il y a eu des séjours au chalet et de la cueillette de champignons, des mariages et des festins d’huîtres, des traditions du temps des Fêtes préservées et d’autres créées, un feu de four (la faute de personne), quelques feux de barbecue (qu’Alex soutient n’étaient pas plus de sa faute que l’oxygène n’est responsable du feu), et énormément de parties de hockey. En mars 2023, ils ont emménagé dans un petit appartement dans la Petite Italie. Cette même semaine, Alex a fait sa demande en mariage (avec la bague déposée sur une rondelle du Canadien).

Pendant tout ce temps, ils ont eu la chance de souligner chaque jour dans la richesse de l’amour et de la joie, entourés de leur famille et de leurs amis. Justine appelle ça « les beaux moments » ; Alex appelle ça « les seuls souvenirs qu’il ait jamais voulu créer ».

Nous vous invitons, famille et amis d’hier et d’aujourd’hui, à venir célébrer nos six premières années ensemble — et toutes celles à venir.`,
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
  },
  lodging: {
    q: "Où devrais-je loger ?",
    a: "Montréal offre un grand choix d’hôtels, et les locations à court terme sont faciles à trouver. Nous recommandons de loger à Montréal plutôt qu’à Baie-D’Urfé. Le centre-ville est le plus pratique, et le Plateau / Mile-End est idéal pour une ambiance plus animée."
  }
},
    travel: {
  title: "Informations de Voyage",
  gettingThere: "Se rendre à Montréal",
  byAir: "Par avion",
  byAirDesc: "L'aéroport international Montréal–Pierre-Elliott-Trudeau (YUL) est l'aéroport principal de la ville. Il faut environ 30 minutes en voiture pour se rendre au lieu. L'aéroport se trouve aussi à environ 30 minutes du centre-ville.",
  byCar: "En voiture",
  byCarDesc: `${weddingConfig.venue.city} est située à l'extrémité ouest de l'île de Montréal, facilement accessible via l'autoroute 20. Le trajet depuis le centre-ville dure environ 30 minutes. Il y a du stationnement sur place.`,
  byTransit: "En transport en commun",
  byTransitDesc: "Le lieu est accessible en autobus (ligne 405). En autobus, il faut environ une heure depuis le centre-ville. Nous recommandons de consulter le site de la STM pour les horaires et itinéraires à jour : https://www.stm.info/en/info/networks/bus/local/line-405-west.",
  hotels: "Recommandations d'hôtels",
  hotelsDesc: "Il y a plusieurs hôtels à moins de 15 minutes en voiture du lieu. Le plus luxueux est le Château Vaudreuil. L'hôtel le plus près est le Courtyard Marriott West Island, à environ 10 minutes en voiture. Pour plus d'information sur l'hébergement, voir la section FAQ.",
  weather: "Prévisions météo",
  weatherDesc: "Juin à Montréal est magnifique! Attendez-vous à des températures agréables autour de 20–25°C (68–77°F). Nous recommandons d'apporter une veste légère pour la soirée. À noter : la cérémonie aura lieu à l'extérieur sur du gazon. Le souper et la réception seront à l'intérieur."
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
