export const weddingConfig = {
  couple: {
    names: "Justine & Alex",
    email: "justine.and.alex.wedding@gmail.com"
  },
  date: {
    day: 6,
    month: 6,
    year: 2026,
    displayEn: "June 6, 2026",
    displayFr: "6 juin 2026"
  },
  rsvp: {
    deadline: {
      day: 6,
      month: 4,
      year: 2026,
      displayEn: "April 6, 2026",
      displayFr: "6 avril 2026"
    }
  },
  venue: {
    name: "Fritz Community Center",
    nameFr: "Centre Communautaire Fritz",
    fullName: "Fritz Community Centre",
    fullNameFr: "Centre Communautaire Fritz",
    address: "45 Rue Lakeshore Rd, Baie-D'Urfé, QC H9X 1P7",
    city: "Baie-D'Urfé",
    province: "QC"
  },
  schedule: {
    ceremony: "4:00 PM",
    ceremonyFr: "16h00",
    cocktail: "5:00 PM",
    cocktailFr: "17h00",
    dinner: "6:30 PM",
    dinnerFr: "18h30",
    dancing: "8:30 PM",
    dancingFr: "20h30",
    end: "11:00 PM",
    endFr: "23h00"
  }
} as const;
