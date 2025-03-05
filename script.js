const translations = {
    "hr": {
        "home": "Početna",
        "about": "O nama",
        "services": "Usluge",
        "team": "Tim",
        "contact": "Kontaktiraj nas",
        "welcome": "Dobrodošli u Pro<span style='color: #186D88;'>L</span> Systems",
        "expertise": "Stručnjaci smo za razvoj, proizvodnju i montažu razvodnih i upravljačkih ormara te električnih komponenti.",
        "about-button": "O nama"
    },
    "en": {
        "home": "Home",
        "about": "About Us",
        "services": "Services",
        "team": "Team",
        "contact": "Contact Us",
        "welcome": "Welcome to Pro<span style='color: #186D88;'>L</span> Systems",
        "expertise": "We specialize in the development, production, and installation of distribution and control cabinets as well as electrical components.",
        "about-button": "About Us"
    },
    "de": {
        "home": "Startseite",
        "about": "Über uns",
        "services": "Dienstleistungen",
        "team": "Team",
        "contact": "Kontakt",
        "welcome": "Willkommen bei Pro<span style='color: #186D88;'>L</span> Systems",
        "expertise": "Wir sind Experten für die Entwicklung, Produktion und Montage von Verteilungs- und Steuerungsschränken sowie elektrischen Komponenten.",
        "about-button": "Über uns"
    }
};


function changeLanguage(lang) {
    document.querySelectorAll('.translate').forEach(element => {
        const key = element.getAttribute('data-key');
        element.innerHTML = translations[lang][key]; // Koristi innerHTML za podršku HTML oznakama
    });
}
