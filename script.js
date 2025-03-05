const translations = {
    "hr": {
        "home": "Početna",
        "about": "O nama",
        "services": "Usluge",
        "team": "Tim",
        "contact": "Kontaktiraj nas",
        "welcome": "Dobrodošli u Pro<span style='color: #186D88;'>L</span> Systems",
        "expertise": "Stručnjaci smo za razvoj, proizvodnju i montažu razvodnih i upravljačkih ormara te električnih komponenti.",
        "about-button": "O nama",
        "aboutus":"<strong>O nama</strong>",
        "aboutus1":"  Bavimo se proizvodnjom, montažom i razvojem elektro komponenti svih vrsta. Bavimo se također ozicavanjem i montažom elektro ormara, ormara za automatizaciju te puštanjem istih u pogon. S obzirom na naša visegodišnja radna iskustva i s ciljem poboljšanja kvalitete našeg rada te kvalitete naših završnih proizvoda, osnovali smo proL systems gmbh.",
        "aboutus2":" <strong>QUALITY CONNECTION</strong> - kao što naš slogan govori, nudimo sigurna rješenja i garantiramo kvalitetu svih naših proizvoda, kako one za ozicavanje tako i one za montažu i puštanje u rad.   "
    },
    "en": {
        "home": "Home",
        "about": "About Us",
        "services": "Services",
        "team": "Team",
        "contact": "Contact Us",
        "welcome": "Welcome to Pro<span style='color: #186D88;'>L</span> Systems",
        "expertise": "We specialize in the development, production, and installation of distribution and control cabinets as well as electrical components.",
        "about-button": "About Us",
        "aboutus":"<strong>About us</strong>",
        "aboutus1":"We specialize in the production, assembly, and development of all types of electrical components. Additionally, we handle the maintenance and assembly of electrical cabinets, automation cabinets, and their commissioning. Given our many years of work experience and with the aim of improving the quality of our work and the quality of our final products, we founded proL systems gmbh.",
        "aboutus2":"<strong>QUALITY CONNECTION</strong> - wie unser Slogan besagt, bieten wir sichere Lösungen und garantieren die Qualität aller unserer Produkte, sowohl für die Verkabelung als auch für die Montage und Inbetriebnahme."

    },
    "de": {
        "home": "Startseite",
        "about": "Über uns",
        "services": "Dienstleistungen",
        "team": "Team",
        "contact": "Kontakt",
        "welcome": "Willkommen bei Pro<span style='color: #186D88;'>L</span> Systems",
        "expertise": "Wir sind Experten für die Entwicklung, Produktion und Montage von Verteilungs- und Steuerungsschränken sowie elektrischen Komponenten.",
        "about-button": "Über uns",
        "aboutus":"<strong>Über uns</strong>",
        "aboutus1":"Wir beschäftigen uns mit der Herstellung, Montage und Entwicklung von Elektrokomponenten aller Art. Darüber hinaus kümmern wir uns um die Wartung und Montage von Elektroschränken, Automatisierungsschränken sowie deren Inbetriebnahme. Aufgrund unserer langjährigen Arbeitserfahrung und mit dem Ziel, die Qualität unserer Arbeit und die Qualität unserer Endprodukte zu verbessern, gründeten wir die proL systems gmbh.",
        "aboutus2":"<strong>QUALITY CONNECTION</strong> - as our slogan says, we offer reliable solutions and guarantee the quality of all our products, both for cabling and for assembly and commissioning."

    }
};


function changeLanguage(lang) {
    document.querySelectorAll('.translate').forEach(element => {
        const key = element.getAttribute('data-key');
        element.innerHTML = translations[lang][key]; // Koristi innerHTML za podršku HTML oznakama
    });
}
