import { Translations } from "./types";
import { hero, whoIam, home, prices, header, footer, contacts, form, career, projects } from "../data";

// Traduzione italiana completa di tutti i contenuti
export const it: Translations = {
  hero: {
    ...hero,
    hello: "Ciao 👋, sono",
    title: "Ingegnere del Software",
    contacts: "Contatti",
    mainSkills: "Ecco le mie principali competenze/conoscenze:",
    paragraphs: [
      "Ciao, sono Angelo e vivo a Sondrio, nel cuore delle Alpi. Sono appassionato di programmazione e cerco sempre nuove sfide per imparare e crescere. Sono determinato e sincero e mi piace andare dritto al punto.",
      "Mi appassionano i temi di AI e provo diversi strumenti per velocizzare e migliorare il mio lavoro.",
      "Nel tempo libero sperimento nuove tecnologie sviluppando applicazioni web fullstack. Qui sotto trovi maggiori dettagli sulle mie esperienze e sui progetti!",
      "I miei hobby: viaggiare, leggere, board game, videogiochi e sport.",
      "Patente B e A",
    ],
  },
  whoIam: {
    ...whoIam,
    paragraphs: [
      "Sono un ingegnere del software appassionato del proprio lavoro, focalizzato sul problem solving e sulla costruzione di soluzioni pragmatiche per esigenze reali.",
      "Ho lavorato sia con grandi aziende sia con startup early-stage, collaborando in team e consegnando progetti end-to-end in autonomia.",
      "Sono abituato a lavorare a stretto contatto con i clienti, capire i bisogni di business e trasformarli in software funzionante.",
      "Mi muovo con disinvoltura su tutto lo stack e imparo velocemente nuove tecnologie, sfruttando anche strumenti di AI per lavorare in modo più efficiente.",
      "Mi piace comunicare in modo diretto e trasparente: spiego come risolverò il problema e sono onesto se devo approfondire prima di rispondere.",
    ],
  },
  home: {
    ...home,
    title: ["Assumi un", "Software Engineer", "in meno di 24 ore"],
    subtitle: "Sono la persona giusta per te se:",
    paragraphs: [
      "Ti serve uno sviluppatore web per il tuo team.",
      "Ti serve qualcuno che sviluppi da zero il software per la tua startup.",
      "Vuoi migliorare il tuo sito/app con nuove feature o fix.",
      "Vuoi una consulenza sul tuo progetto prima di partire.",
      "Non sai quali tecnologie ti servono o di che esperti hai bisogno",
      "Vuoi propormi una collaborazione.",
    ],
    footerText: "Non perdere tempo: contattami e costruiamo qualcosa di grande insieme! Se non sei soddisfatto, ti rimborserò al 100%!",
    ctas: {
      ...home.ctas,
      lookPlans: "Guarda i miei piani",
      speakGoals: "Parliamo dei tuoi obiettivi",
    },
  },
  prices: {
    ...prices,
    title: "Piani",
    subtitle: "Scegli il piano più adatto alle tue esigenze.",
    footerText: "Hai richieste particolari? Creiamo un piano su misura!",
    ctaBookPlan: "Prenota",
    ctaMoreDetails: "Più dettagli",
    plans: prices.plans.map((p) => {
      if (p.type === "WEEKLY") {
        return {
          ...p,
          description: "Ideale per task piccoli o per avere uno sviluppatore disponibile per un breve periodo.",
          included: [
            "Lavoro su 1 dei tuoi progetti per 1 settimana",
            "Se non sei soddisfatto, ti rimborso al 100%",
            "Puoi contattarmi per supporto quando vuoi",
          ],
          footer: "Per piccoli sviluppi",
          longtext: [
            {
              type: "subtitle",
              value: "Come funziona?",
            },
            {
              type: "text",
              value:
                "Funziona come un abbonamento, per 1 settimana sono a tua disposizione per lavorare a uno dei tuoi progetti senza perdere tempo con contratti o burocrazia. Chiamami e posso iniziare dal giorno dopo.\nQuesto piano è ideale per task piccoli o per testarmi prima di una collaborazione più lunga.",
            },
            {
              type: "subtitle",
              value: "Vantaggi",
            },
            {
              type: "text",
              value:
                "- Hai uno sviluppatore disponibile in meno di 24 ore\n- Non perdo tempo a contare le ore: lavoro per risultati e ti aggiorno periodicamente\n- Paghi solo finché ti servo, senza contratti a lungo termine\n- Sai esattamente quanto pagherai in anticipo\n- Se non sei soddisfatto ti rimborso il costo della settimana",
            },
          ],
        };
      }
      if (p.type === "MONTHLY") {
        return {
          ...p,
          description: "Ideale per progetti medi/grandi dove ti serve uno sviluppatore full-time per un mese.",
          included: [
            "Lavoro full-time su 1 progetto per 1 mese",
            "Se non sei soddisfatto, ti rimborso al 100%",
            "Supporto prioritario durante il mese",
          ],
          footer: "Il più scelto",
          longtext: [
            {
              type: "subtitle",
              value: "Come funziona?",
            },
            {
              type: "text",
              value:
                "Funziona come un abbonamento, per 1 mese sono a tua disposizione per lavorare su uno dei tuoi progetti senza perdere tempo con contratti o burocrazia. Chiamami e posso iniziare dal giorno dopo.\nÈ ideale se ti serve uno sviluppatore che lavori con te o con il tuo team per uno o più mesi senza vincoli a lungo termine.",
            },
            {
              type: "subtitle",
              value: "Vantaggi",
            },
            {
              type: "text",
              value:
                "- Hai uno sviluppatore disponibile in meno di 24 ore\n- Non perdo tempo a contare le ore: lavoro per risultati e ti aggiorno periodicamente\n- Paghi solo finché ti servo, senza contratti lunghi\n- Sai esattamente quanto pagherai in anticipo\n- Se non sei soddisfatto puoi interrompere quando vuoi e ti rimborso la prima settimana",
            },
          ],
        };
      }
      if (p.type === "HOURLY") {
        return {
          ...p,
          description: "Ideale per piccoli task o brevi consulenze a ore.",
          included: [
            "1 ora dedicata al tuo progetto",
            "Se non sei soddisfatto, rimborso al 100%",
            "Supporto rapido su necessità puntuali",
          ],
          footer: "Se devi conteggiare a ore",
          longtext: [
            {
              type: "text",
              value:
                "Di solito preferisco non lavorare a ore perché spesso è una perdita di tempo per entrambe le parti ed è più difficile stimare i costi totali ma può essere utile in alcuni casi specifici.",
            },
            {
              type: "subtitle",
              value: "Quando usare questo piano",
            },
            {
              type: "text",
              value:
                "- Se ti serve uno sviluppatore per task molto piccoli che richiedono poche ore\n- Se ti serve una call di consulenza\n- Se devi conteggiare le ore per processi interni",
            },
          ],
        };
      }
      if (p.type === "CUSTOM") {
        return {
          ...p,
          description: "Se hai bisogni specifici, creiamo un piano su misura!",
          included: ["Creo un piano personalizzato sulle tue esigenze"],
          footer: "Creiamo il tuo piano",
          longtext: [
            {
              type: "subtitle",
              value: "Come funziona?",
            },
            {
              type: "text",
              value:
                "Scegli questo piano se non sei sicuro del tempo di cui hai bisogno o se hai requisiti specifici.\nParliamone, analizziamo le tue esigenze e costruisco il piano su misura. In alcuni casi posso applicare sconti (o aumenti) in base alla situazione.",
            },
            {
              type: "subtitle",
              value: "Esempi utili",
            },
            {
              type: "text",
              value:
                "- Startup con budget ridotto: possiamo valutare equity + sconto\n- Collaborazioni lunghe (>3 mesi): possiamo prevedere sconti\n- Manutenzione leggera con poche ore a settimana/mese: sconti dedicati\n- Progetti da sviluppare in tempi stretti: priorità con adeguamento prezzo",
            },
          ],
        };
      }
      if (p.type === "CONSULTANT") {
        return {
          ...p,
          description: "Consulenza o task breve con priorità.",
          included: [
            "1 ora prioritaria sul tuo progetto",
            "Rimborso 100% se non soddisfatto",
            "Focus su decisioni o problemi urgenti",
          ],
          footer: "Per una consulenza singola",
          longtext: [
            {
              type: "text",
              value:
                "Hai 1 ora del mio tempo con priorità rispetto agli altri clienti. Ideale per urgenze o decisioni rapide.",
            },
          ],
        };
      }
      return p;
    }),
  },
  header: {
    ...header,
    home: "Home",
    prices: "Prezzi",
    whoiam: "Chi sono",
    career: "Carriera",
    aboutMe: "Chi sono",
    projects: "Progetti",
    contacts: "Contatti",
    experience: "Esperienza",
    toggle: header.toggle || "Tema",
    generatePdf: "Genera PDF",
    menuOpen: header.menuOpen || "Apri menu",
    menuClose: header.menuClose || "Chiudi menu",
  },
  footer: {
    ...footer,
    center: "Sito realizzato con React",
    center2: "e amore",
  },
  contacts: {
    ...contacts,
    title: "Contattami 😃",
    subtitle: "Se non trovi uno slot libero, usa gli altri contatti e ti risponderò al più presto!",
    bookACall: "Prenota una call",
  },
  form: {
    ...form,
    useModule: "Scrivimi tramite il form qui sotto",
    leaveMessage: "Lascia il tuo messaggio",
    thanks: "Grazie per il messaggio! Ti risponderò il prima possibile!",
    backToTop: "Torna su",
    send: "Invia",
  },
  career: {
    ...career,
    title: "Carriera e studi",
    schools: career.schools.map((school) => {
      if (school.title === "State Exam for Informatic Engineering") {
        return {
          ...school,
          title: "Esame di Stato per Ingegneria Informatica",
          where: "Politecnico di Milano, Italia",
          description: "Abilitazione alla professione di ingegnere.",
          when: "2025",
        };
      }
      if (school.title === "Master of Computer Science and Engineering") {
        return {
          ...school,
          title: "Laurea Magistrale in Ingegneria Informatica",
          where: "Politecnico di Milano, Italia",
          description: "Scarica qui tutti i dettagli sui corsi che ho seguito:",
          when: "2016 - 2018",
          links: school.links?.map((l) => ({ ...l, title: l.title })),
        };
      }
      if (school.title === "Computer Science and Engineering") {
        return {
          ...school,
          title: "Laurea Triennale in Ingegneria Informatica",
          where: "Politecnico di Milano, Italia",
          description: "Scarica qui tutti i dettagli sui corsi che ho seguito:",
          when: "2013 - 2016",
          links: school.links?.map((l) => ({ ...l, title: l.title })),
        };
      }
      if (school.title === "Diploma in Computer Expert") {
        return {
          ...school,
          title: "Diploma perito informatico",
          where: "ITIS Enea Mattei (Sondrio, Italia)",
          when: "2008 - 2013",
        };
      }
      return school;
    }),
    jobs: career.jobs.map((job) => {
      if (job.company === "Freelance") {
        return {
          ...job,
          title: "Software Engineer",
          description:
            "Lavoro come freelance sviluppando applicazioni web fullstack per grandi aziende e startup. Oltre allo sviluppo aiuto i clienti a migliorare le idee e scegliere tecnologie e architetture. In alcuni progetti ho anche coordinato team interni.",
          whereAndWhen: "Remoto, 04/2025 - Presente",
        };
      }
      if (job.company === "DeltaTre") {
        return {
          ...job,
          title: "Senior Frontend Developer",
          description:
            "Lavoro al progetto Diva, un player video custom con molte funzionalità. Tecnologie principali: React, Vanilla JS, Typescript, RXjs, Node, Storybook, Webpack, Babel.",
          whereAndWhen: "Remoto, 09/2022 - 04/2025",
        };
      }
      if (job.company === "TeamSystem") {
        return {
          ...job,
          title: "Senior FullStack Developer",
          description:
            "Ho lavorato con React e Redux per mantenere e migliorare Digitalbox. Ho collaborato anche con i backend developer per aggiornare o correggere API in NodeJS o Java (Springboot).",
          whereAndWhen: "Remoto, 10/2021 - 09/2022",
        };
      }
      if (job.company === "Consultant in Stellantis" && job.whereAndWhen.includes("Turin")) {
        return {
          ...job,
          title: "Autonomous Driving Software Engineer",
          description:
            "Come consulente NetcomGroup ho mantenuto e sviluppato strumenti usati per validare il software di guida autonoma. Con il team abbiamo studiato e testato nuove metodologie e software per migliorare la toolchain Stellantis.",
          whereAndWhen: "Torino - Italia, 02/2020 - 10/2021",
        };
      }
      if (job.company === "Consultant in Stellantis" && job.whereAndWhen.includes("Munich")) {
        return {
          ...job,
          title: "Autonomous Driving Software Engineer",
          description:
            "Come consulente NetcomGroup ho studiato come integrare strumenti nel sistema Stellantis per creare una toolchain di validazione del software di guida autonoma.",
          whereAndWhen: "Monaco - Germania, 10/2019 - 02/2020",
        };
      }
      if (job.company === "Accenture") {
        return {
          ...job,
          title: "Frontend Developer",
          description:
            "Ho sviluppato siti performanti e responsive per clienti enterprise usando React, Redux, ES6, HTML, CSS, Docker e altro.",
          whereAndWhen: "Milano - Italia, 11/2018 - 10/2019",
        };
      }
      if (job.company === "JOL Laboratory, Tim") {
        return {
          ...job,
          title: "IoT Developer",
          description:
            "Per la tesi ho lavorato con un team a un progetto europeo: un'app Android per comunicare e raccogliere dati da diversi dispositivi smart (vedi la sezione progetti).",
          whereAndWhen: "Milano - Italia, 05/2018 - 09/2018",
        };
      }
      return job;
    }),
  },
  projects: {
    ...projects,
    title: "Ultimi progetti principali",
    subtitle: "(clicca sul titolo o sulla card per più dettagli)",
    footerText: "Per altri progetti guarda il mio GitHub o Codepen! (link nel footer)",
    projects: projects.projects.map((project) => {
      switch (project.title) {
        case "Smanno":
          return {
            ...project,
            description:
              "Ho progettato e sviluppato una piattaforma fullstack per gestire flotte di robot e missioni complesse, usata in ambito sanitario e hospitality.",
            links: project.links?.map((l) => ({ ...l, label: "Smanno - Sito ufficiale" })),
            longtext: [
              {
                type: "text",
                value:
                  "Smanno è una startup di 3 persone (incluso me) che sviluppa robot per laboratori sanitari e hospitality e la piattaforma per usarli. Il founder segue il business e i clienti, il CTO cura l'hardware, io sviluppo tutto il software della piattaforma e la distribuzione.",
              },
              {
                type: "text",
                value:
                  "Ho progettato il sistema per essere flessibile e gestire robot e missioni diverse senza riscrivere codice. Ho astratto tutto in due entità: Attori (robot, macchine, luoghi) e Missioni (task da svolgere). La piattaforma ha backend in Django e frontend in React.",
              },
              { type: "subtitle", value: "Backend - Django" },
              {
                type: "text",
                value:
                  "Ho sviluppato il backend in Django con MySQL. Principali feature: modello dati per robot/missioni/utenti, API con permessi, processi async per monitorare lo stato dei robot, integrazione con servizi terzi, admin avanzata con export/import e edit veloce, comandi custom Django, documentazione Swagger, script di installazione e gestione, docker compose per avviare DB, backend e frontend.",
              },
              { type: "subtitle", value: "Frontend - React" },
              {
                type: "text",
                value:
                  "Frontend React con Bootstrap 5. Funzionalità principali (dipendono dal ruolo): UI responsive, creazione di missioni complesse a step usando attori e missioni atomiche, riuso di missioni complesse, esecuzione e monitoraggio missioni con stato ed errori, stop e resume, statistiche su esecuzioni e performance dei robot.",
              },
              { type: "subtitle", value: "Deployment" },
              {
                type: "text",
                value:
                  "La piattaforma va installata nei server dei clienti (es. ospedali) e usata da device nella stessa rete. Ho preparato docker compose per DB, backend e frontend. Ho creato script per esportare le immagini e automatizzare import e run su server Linux/Windows del cliente con un comando. Tutto finisce in una cartella di output pronta da copiare.",
              },
            ],
          };
        case "One TCG Hero":
          return {
            ...project,
            links: project.links?.map((l) => ({ ...l, label: "One TCG Hero - Sito ufficiale" })),
            description:
              "PWA in React per gestire la mia collezione di carte, con funzioni avanzate di filtro, deck building, stampa e sync su Firestore.",
            longtext: [
              {
                type: "text",
                value:
                  "Ho sviluppato una PWA in React per gestire la mia collezione di carte. Ho aggiunto (e migliorato) funzionalità utili viste su vari siti ma non tutte insieme. Ho iniziato il progetto con Lovable per sperimentare, poi ho continuato usando massicciamente strumenti AI, scrivendo codice solo quando necessario per capirne i limiti.",
              },
              { type: "subtitle", value: "Funzionalità implementate" },
              {
                type: "text",
                value:
                  "- UI responsive per mobile e desktop con supporto light/dark\n- Autenticazione con Firebase Auth (email/password)\n- Filtri complessi per trovare carte o set\n- Gestione collezione: aggiunta singola o import lista (con merge)\n- Gestione mazzi con statistiche (conteggio carte, rarità, curva costi, ecc.)\n- Import/export mazzi in formati diversi (simulatori, CardMarket)\n- Stampa carte con layout e quantità configurabili\n- Utenti abilitati da me possono salvare collezione/mazzi su Firestore per sincronizzarli tra dispositivi",
              },
            ],
          };
        case "GUT":
          return {
            ...project,
            description:
              "PWA stile Spotify per video musicali con pagamenti Stripe, CMS dedicato e contributo al backend Node/Express.",
            links: project.links?.map((l) => ({ ...l, label: "GUT - Sito ufficiale" })),
            longtext: [
              {
                type: "text",
                value:
                  "GUT è una startup nel mondo della musica. Ho lavorato su tutti gli aspetti della piattaforma proponendo feature e miglioramenti. Tre progetti principali: PWA in React, CMS in React e backend in NodeJS/Express. Team di 6 persone (3 interne, 3 esterne). Ho curato architettura di PWA e CMS e sviluppato gran parte di entrambe con un altro freelancer. Ho contribuito anche al backend con uno dei founder.",
              },
              { type: "subtitle", value: "Frontend - PWA in React" },
              {
                type: "text",
                value:
                  "SPA React + Typescript con Vite. Key point: mobile first, UI responsive con CSS e Styled Components (Panda); streaming video con Mux (upload progressivo per artisti); pagamenti Stripe per abbonamenti e token; ottimizzazioni performance (lazy load, caching forte); install banner per PWA su mobile.",
              },
              { type: "subtitle", value: "Frontend - CMS in React" },
              {
                type: "text",
                value:
                  "CMS React + Typescript con Vite per avere due progetti simili e manutenibili. Macro-sezioni: User, Content, Collection, Audition, Tags. Ogni sezione ha pagina tabellare (paginazione, ricerca, filtri) e pagina dettaglio per edit/creazione. Anche qui caching per ridurre chiamate pesanti al backend.",
              },
              { type: "subtitle", value: "Backend - NodeJS ed Express" },
              {
                type: "text",
                value:
                  "Uno dei founder seguiva il backend NodeJS/Express con PostgreSQL e Redis. Ho collaborato per: disegnare parti del DB, implementare caching con Redis, creare API REST usate da PWA e CMS, fare check di sicurezza, scrivere documentazione Swagger, debuggare e fixare bug durante lo sviluppo.",
              },
            ],
          };
        case "Startup - Kangury":
          return {
            ...project,
            description:
              "Applicazione fullstack (React + Django) per acquistare, associare e stampare foto/album. Gestione ordini, editor foto e storage su S3.",
            links: project.links?.map((l) => ({ ...l, label: "Kangury - Sito ufficiale" })),
            longtext: [
              {
                type: "text",
                value:
                  "Ho sviluppato l'app che trovi nei link: permette di comprare prodotti legati alla fotografia e modificare/stampare foto in vari formati. Dopo l'acquisto l'utente associa le foto a un album dove può caricare foto o video.",
              },
              { type: "subtitle", value: "Introduzione" },
              {
                type: "text",
                value:
                  "Ho scelto le tecnologie perché: le conosco e sviluppo velocemente; posso deployare in poco tempo e a basso costo; sono solide e con community ampia.",
              },
              { type: "subtitle", value: "PWA in React" },
              {
                type: "text",
                value:
                  "Principali feature: Bootstrap 5 con SASS personalizzato per un tema mantenibile; Redux per lo store; Firebase per deploy su branch prod/test; editor foto (crop/rotate); Google Analytics; Swiper per i caroselli.",
              },
              { type: "subtitle", value: "Backend in Django" },
              {
                type: "text",
                value:
                  "Backend Django con MySQL e API documentate in Swagger. Uso Amazon S3 per salvare foto e video caricati dagli utenti.",
              },
            ],
          };
        case "Personal Project - Digitalpix":
          return {
            ...project,
            description:
              "PWA e app store (iOS/Android) in React/React Native per personalizzare e acquistare foto professionali.",
            longtext: [
              {
                type: "text",
                value:
                  "Ho sviluppato l'app che trovi nei link. Gli utenti possono comprare prodotti fotografici e modificare/stampare le foto.",
              },
              { type: "subtitle", value: "Analisi del problema" },
              {
                type: "text",
                value:
                  "Dovevamo avere: web app accessibile da mobile e app pubblicabile su Play Store/App Store. Budget ridotto e lavoro in solitaria: ho scelto una PWA in React e un'app React Native con WebView della PWA. Così riuso il codice e riduco il tempo di deploy sugli store.",
              },
              { type: "subtitle", value: "Web App in React" },
              {
                type: "text",
                value:
                  "Feature principali: Bootstrap 5 con SASS personalizzato; Redux per lo store; Firebase con ambienti prod/test; editor foto avanzato (crop/rotate); Google Analytics; Swiper per i caroselli.",
              },
              { type: "subtitle", value: "Mobile App in React Native" },
              {
                type: "text",
                value:
                  "App React Native con WebView della PWA per riusare lo stesso codice. Niente deploy continui sugli store a ogni update, riducendo tempi di rilascio. Soluzione migliore in solitaria e nel tempo libero.",
              },
              { type: "subtitle", value: "Backend" },
              {
                type: "text",
                value:
                  "Ho suggerito miglioramenti architetturali: documentazione Swagger per le API, versionamento del codice in GitHub per backup e controllo versioni.",
              },
            ],
          };
        case "Personal Project - Climberworld Web App":
          return {
            ...project,
            description:
              "Web app fullstack (React + Flask) che raccoglie info su rifugi, escursioni e falesie alpine. Backend offline, demo frontend online.",
            links: project.links?.map((l) => ({ ...l, label: "Climberworld" })),
            longtext: [
              {
                type: "text",
                value:
                  "Nel tempo libero sviluppo questa app per imparare e fare pratica. Al momento lavoro da solo su frontend e backend.",
              },
              { type: "subtitle", value: "Frontend" },
              {
                type: "text",
                value:
                  "Tecnologie: React; Redux per lo store; styled-components per lo stile; Firebase per il deploy.",
              },
              { type: "subtitle", value: "Backend" },
              {
                type: "text",
                value:
                  "Tecnologie: Flask (Python), MySQL; phpMyAdmin in Docker per esplorare il DB locale; docker/docker-compose con tre container (Flask, MySQL, phpMyAdmin); Swagger per documentare le API; pythonanywhere per il deploy; marshmallow/SQLAlchemy/connexion per gestire facilmente le tabelle nelle API.",
              },
              { type: "subtitle", value: "Altri strumenti" },
              { type: "text", value: "- Git\n- Visual Studio Code" },
            ],
          };
        case "Diva - Custom Video Player":
          return {
            ...project,
            description:
              "Player video custom con molte feature, venduto come libreria in pacchetti per web, mobile, TV e altre piattaforme.",
            links: project.links?.map((l) => ({ ...l, label: "DeltaTre - Diva" })),
            longtext: [
              {
                type: "text",
                value: "Lavoro con metodologia Agile come frontend developer per migliorare funzionalità esistenti e svilupparne di nuove.",
              },
              { type: "subtitle", value: "Descrizione progetto" },
              {
                type: "text",
                value:
                  "Diva è una libreria player venduta ai clienti DeltaTre per i loro servizi di streaming. È divisa in pacchetti: componenti comuni e componenti specifici vendibili singolarmente o usati in altri pacchetti più grandi.",
              },
              { type: "subtitle", value: "Tecnologie" },
              {
                type: "text",
                value:
                  "- React con Typescript e SCSS\n- Typescript per tipi e controlli a compile-time\n- RXjs per gestire async e callback dello streaming\n- SCSS per gli stili e un'architettura ordinata\n- Storybook per documentare componenti comuni\n- Git, VS Code, Yarn, Jest, JSON, Jira; Windows/MacOS",
              },
              { type: "subtitle", value: "Workflow" },
              {
                type: "text",
                value:
                  "Sprint di 2 settimane, demo a fine sprint, scelta delle user story per il successivo (anche refactor/upgrade). Dev → test interno, poi test ufficiale; si itera finché i requisiti sono soddisfatti. Ambienti: dev, test, prod.",
              },
            ],
          };
        case "Portfolio Online":
          return {
            ...project,
            description:
              "Ho creato questo portfolio online per mostrare competenze ed esperienze usando React, Typescript e styled-components, pubblicato su GitHub Pages.",
            links: project.links?.map((l) => {
              if (l.label === "Website") return { ...l, label: "Sito" };
              if (l.label === "Github") return { ...l, label: "GitHub" };
              return l;
            }),
            longtext: [
              {
                type: "text",
                value: "Partendo da un template online ho creato e migliorato questo portfolio, aggiungendo nuovi componenti.",
              },
              { type: "subtitle", value: "Tecnologie e librerie" },
              {
                type: "text",
                value:
                  "- React\n- Typescript\n- styled-components\n- GitHub per versionamento\n- GitHub Pages come hosting statico\n- gh-pages per il deploy",
              },
            ],
          };
        case "TeamSystems - Digital Box":
          return {
            ...project,
            description:
              "Applicazione web per studi professionali per condividere informazioni e collaborare con i clienti in tempo reale.",
            links: project.links?.map((l) => ({ ...l, label: "Digital Box" })),
            longtext: [
              {
                type: "text",
                value:
                  "Lavoro come frontend developer in Agile su Digital Box per aggiornare funzionalità esistenti, aggiungerne di nuove, fixare bug e refactor di componenti per chiarezza e performance.",
              },
              { type: "subtitle", value: "Tecnologie" },
              {
                type: "text",
                value:
                  "- React (JS/HTML)\n- Redux\n- CSS\n- Jest (unit test)\n- Cypress (integration)\n- Storybook per componenti condivisi\n- Git, Python per automazioni, Docker per il backend locale, VS Code, JSON, Swagger per API, Jira, Windows/MacOS",
              },
              { type: "subtitle", value: "Workflow" },
              {
                type: "text",
                value:
                  "Sprint di 2 settimane con demo e pianificazione successive user story. Dev → test interno → test ufficiale, si itera finché i requisiti sono ok. Ambienti dev/test/prod.",
              },
              { type: "subtitle", value: "Interazione con il backend" },
              {
                type: "text",
                value:
                  "Backend multipli (Springboot, NodeJS). Se l'API esiste la usiamo (eventuali suggerimenti). Se non esiste: mockiamo la risposta in Redux, condividiamo il JSON con il backend e loro implementano l'API.",
              },
            ],
          };
        case "Personal Project - Traveltips Web Application":
          return {
            ...project,
            description:
              "Social di viaggio per condividere info su città e luoghi turistici. Ho sviluppato frontend e backend; backend ora offline, frontend visibile.",
            links: project.links?.map((l) => {
              if (l.label === "Traveltips App") return { ...l, label: "Traveltips App" };
              if (l.label === "Traveltips App Git") return { ...l, label: "Repo frontend" };
              if (l.label === "Traveltips Backend Git") return { ...l, label: "Repo backend" };
              return l;
            }),
            longtext: [
              {
                type: "text",
                value:
                  "App social per condividere info su città e luoghi turistici. Ho sviluppato frontend e backend per una startup, poi il progetto è stato sospeso; backend offline, frontend visibile.",
              },
              { type: "subtitle", value: "Tecnologie frontend" },
              { type: "text", value: "Principali tecnologie usate per il frontend:" },
              {
                type: "text",
                value:
                  "*React* come frontend\n*Redux* per lo store\n*Bootstrap 5* per la grafica\n*Firebase* per il deploy\n*Jest* per i test",
              },
              {
                type: "text",
                value:
                  "Architettura in 6 cartelle principali: bootstrap (scss), components (UI), languages (json per lingue), pages, store (azioni e servizi API), utils (funzionalità condivise).",
              },
              { type: "subtitle", value: "Backend" },
              { type: "text", value: "Tecnologie backend:" },
              {
                type: "text",
                value:
                  "- *Flask* (Python) per sviluppare velocemente e integrare in futuro algoritmi di raccomandazione\n- *mysql* come DB relazionale\n- *phpmyadmin* in Docker per esplorare il DB locale\n- *docker* e *docker-compose* per lo sviluppo locale (container Flask, MySQL, phpMyAdmin)\n- *Swagger* per documentare le API\n- *marshmallow*, *SQLAlchemy* e *connexion* per gestire le tabelle nelle API",
              },
              { type: "subtitle", value: "Altre tecnologie" },
              { type: "text", value: "- *Git*\n- *Visual Studio Code*" },
            ],
            allSkills: project.allSkills,
          };
        case "Stellantis - Validation of ADAS System":
          return {
            ...project,
            description:
              "Consulente in Stellantis in un team ingegneria che gestisce tool per validare algoritmi di guida autonoma con team distribuiti.",
            longtext: [
              {
                type: "text",
                value:
                  "Come consulente Stellantis (ex FCA) lavoro su un grande progetto di guida autonoma.",
              },
              { type: "subtitle", value: "Cosa faccio" },
              {
                type: "text",
                value:
                  "Team Agile che gestisce strumenti usati da altri team per validare l'algoritmo di guida autonoma. Attività: personalizzare il simulatore con requisiti Stellantis (C++ core, C#/Unity per GUI); creare immagini Docker con test e inviarle al cluster; DAG Airflow (Python) per pipeline e KPI; dashboard Grafana per output simulazioni; definire con altri team feature e test del simulatore.",
              },
              { type: "subtitle", value: "Metodologia" },
              {
                type: "text",
                value: "Scrum, sprint di 2 settimane. Oltre agli item dell'APO proponiamo attività utili al delivery.",
              },
              { type: "subtitle", value: "Linguaggi" },
              { type: "text", value: "- C++\n- Python\n- C#\n- Bash" },
              { type: "subtitle", value: "Sistemi operativi" },
              { type: "text", value: "- Ubuntu (principale)\n- Windows 10" },
              { type: "subtitle", value: "Altre tecnologie" },
              {
                type: "text",
                value:
                  "- Visual Studio Code\n- Unity\n- Github\n- Docker\n- Airflow\n- Jenkins\n- Codebeamer\n- Grafana\n- NDS e OpenDRIVE\n- Google Sheets online\n- ROS",
              },
            ],
          };
        case "Accenture - React-Redux Application for a Big Company in the Energy Sector":
          return {
            ...project,
            description:
              "Applicazione web React/Redux per raccogliere e visualizzare dati in tempo reale da stazioni distribuite in Italia (settore energia).",
            longtext: [
              {
                type: "text",
                value:
                  "Ho sviluppato un'app React con Redux per raccogliere e visualizzare dati asincroni da stazioni in tutta Italia. Team Scrum con 2 frontend, 2 funzionali, 1 UI designer, 2 backend, 1 scrum master.",
              },
              { type: "subtitle", value: "Linguaggi" },
              { type: "text", value: "- html\n- CSS\n- Sass\n- JS6\n- Python\n- Java" },
              { type: "subtitle", value: "Tecnologie" },
              {
                type: "text",
                value:
                  "- React\n- Redux Saga\n- NodeJS\n- Stencil JS\n- Storybook UI\n- Chrome/Firefox/Safari/IE11 per test\n- VS Code\n- Git\n- Jupyter notebook\n- MQTT per la connessione al server",
              },
              { type: "subtitle", value: "Librerie" },
              {
                type: "text",
                value:
                  "- LeafletJS per mappa interattiva in homepage\n- D3.js per SVG dinamici\n- React intl per multilingua",
              },
              { type: "subtitle", value: "Cosa ho fatto" },
              { type: "text", value: "Principali componenti sviluppati:" },
              { type: "subtitle", value: "1) Mappa interattiva" },
              {
                type: "text",
                value:
                  "Mappa centrata sull'Italia con Leaflet JS: icone per stazioni con popup dati live e link alla pagina stazione; overlay per evidenziare l'Italia; limiti di zoom/movimento; elementi che spariscono con zoom alto.",
              },
              { type: "subtitle", value: "2) Server NodeJS" },
              {
                type: "text",
                value:
                  "Prima del backend ho creato un server locale NodeJS che inviava dati fittizi via GET e socket per simulare dati asincroni.",
              },
              { type: "subtitle", value: "3) Grafici SVG" },
              {
                type: "text",
                value:
                  "Per varie pagine ho disegnato componenti SVG con D3 per rappresentare apparati e dati. Ho creato funzioni riusabili parametrizzate da JSON per evitare codice duplicato.",
              },
              { type: "subtitle", value: "4) Supporto multilingua" },
              {
                type: "text",
                value:
                  "Con React intl ho creato JSON per italiano/inglese e una funzione globale che restituisce la traduzione in base alla lingua in local storage. Cambio lingua salvato e reload della pagina.",
              },
              { type: "subtitle", value: "5) Redux-Saga" },
              {
                type: "text",
                value:
                  "Redux-Saga per gestire dati asincroni e stato centralizzato, separando logica di comunicazione dal resto dell'app e facilitando il debug con il DevTools.",
              },
              { type: "subtitle", value: "6) Costruzione JSON di test" },
              {
                type: "text",
                value:
                  "Ho generato JSON realistici con Python (range controllati) e li ho riadattati più volte. Quando sono arrivati i CSV reali li ho manipolati in Python per fornire al backend il formato definitivo.",
              },
              { type: "subtitle", value: "7) Componenti solo CSS" },
              { type: "text", value: "Per performance abbiamo usato accordion e toggle solo CSS, evitando JS dove possibile." },
              { type: "subtitle", value: "8) Connessione MQTT" },
              {
                type: "text",
                value: "Quando il backend è stato pronto abbiamo integrato MQTT iscrivendo il client al topic con i dati in coda.",
              },
              { type: "subtitle", value: "9) Grafici di funzioni SVG" },
              {
                type: "text",
                value:
                  "Per grafici cartesiani di funzioni complesse ho calcolato punti con Python e li ho disegnati in React. Ho aggiunto drag/zoom e selezione di un'area per ingrandirla.",
              },
            ],
          };
        case "Accenture - Gazzetta dello Sport":
          return {
            ...project,
            description:
              "Progetto ad alte prestazioni per il sito della Gazzetta: ottimizzazione CSS/JS, componenti riusabili e test Galen.",
            links: project.links?.map((l) => ({ ...l, label: "Gazzetta dello Sport" })),
            longtext: [
              { type: "subtitle", value: "Linguaggi" },
              { type: "text", value: "- html\n- CSS\n- Sass\n- JS6" },
              { type: "subtitle", value: "Tecnologie" },
              {
                type: "text",
                value:
                  "- Gulp\n- Docker per il container di sviluppo\n- Chrome per test runtime\n- VS Code\n- Galen per test grafici\n- Jenkins per i deploy\n- Jira per i task\n- GitHub come repository",
              },
              { type: "subtitle", value: "Architettura" },
              {
                type: "text",
                value: "Uso di parti di Bulma, SMACSS e BEM per organizzazione e naming.",
              },
              { type: "subtitle", value: "Implementazione" },
              {
                type: "text",
                value:
                  "Progetto complesso suddiviso in capitoli. Ho lavorato in parallelo su pagine desktop e mobile.",
              },
              { type: "subtitle", value: "1) Pagine desktop" },
              {
                type: "text",
                value:
                  "Sviluppo con html/sass seguendo linee guida: poco codice per sito leggero; componenti riusabili con CSS comune; naming generico per mantenibilità; ispirazione SMACSS/BEM; compatibilità multi-browser (Firefox, Chrome, Safari, IE11).",
              },
              { type: "subtitle", value: "2) Pagine mobile" },
              {
                type: "text",
                value:
                  "Stessa architettura del desktop ma CSS separato per performance: chi usa desktop non scarica CSS mobile inutile.",
              },
              { type: "subtitle", value: "3) Test con Galen" },
              {
                type: "text",
                value:
                  "Ho studiato e applicato Galen per test grafici. Ho creato script semplici e standard per testare velocemente pagine attuali e future, documentando problemi e soluzioni trovate.",
              },
              { type: "subtitle", value: "4) Integrazione JS" },
              {
                type: "text",
                value:
                  "Collaborazione con sviluppatori JS per aggiungere dati/classi/transizioni dove serviva e sviluppo di componenti complessi (es. scrollbar custom).",
              },
              { type: "subtitle", value: "5) Ottimizzazioni" },
              {
                type: "text",
                value:
                  "- Orchestratore per gestire ordine/caricamento degli script JS\n- CSS inline per il primo paint degli elementi visibili",
              },
              { type: "subtitle", value: "6) Compatibilità e bug fixing" },
              {
                type: "text",
                value:
                  "Debug su vari browser (Firefox, Chrome, Safari, Edge, IE11) e device usando VM ed emulatori per risolvere bug di compatibilità.",
              },
              { type: "subtitle", value: "Conclusione" },
              {
                type: "text",
                value: "Progetto formativo: ho imparato a organizzare CSS/html/JS per performance elevate.",
              },
            ],
          };
        case "Accenture - Static Website for Financial Client":
          return {
            ...project,
            description:
              "Completamento e ottimizzazione di un sito statico per un grande cliente finanziario: componenti responsive (\"molecole\") per desktop e mobile.",
            longtext: [
              {
                type: "text",
                value:
                  "Terzo progetto in Accenture su un sito già avviato. Ho sviluppato componenti (molecole) responsive per desktop e mobile. Team molto grande: la sfida principale era coordinarsi con tanti gruppi (backend, manutenzione, integrazione) per risolvere i bug.",
              },
              { type: "subtitle", value: "Linguaggi" },
              { type: "text", value: "- html\n- CSS\n- Sass\n- JS6" },
              { type: "subtitle", value: "Tecnologie" },
              {
                type: "text",
                value:
                  "- Gulp\n- Chrome/Firefox/Safari/IE11 per test runtime\n- VS Code\n- Git\n- Webpack",
              },
              { type: "subtitle", value: "Librerie" },
              {
                type: "text",
                value:
                  "Prestazioni non critiche, quindi per velocizzare lo sviluppo abbiamo usato: \n- Swiper per i caroselli\n- Plyr per un player media semplice e accessibile (YouTube/Vimeo)",
              },
              { type: "subtitle", value: "Cosa ho fatto" },
              { type: "text", value: "Principali attività sviluppate:" },
              { type: "subtitle", value: "1) Carosello e video" },
              {
                type: "text",
                value:
                  "HTML/CSS/JS per un carosello Swiper con autoplay che si ferma al hover. Con Plyr ho creato un componente video (YouTube/Vimeo) con avvio automatico silenziato e l'ho integrato nel carosello. Ho poi adattato l'hero carousel per uso in-page senza full screen.",
              },
              { type: "subtitle", value: "2) Ottimizzazione JS" },
              {
                type: "text",
                value:
                  "Il JS era scritto da molte persone e copiato da Gulp in un unico file: un errore iniziale bloccava tutto. Abbiamo riorganizzato gli script in classi instanziate in try-catch separati e sostituito Gulp con Webpack per rendere i moduli più indipendenti.",
              },
              { type: "subtitle", value: "3) Autocomplete" },
              {
                type: "text",
                value:
                  "Barra di ricerca nell'header con toggle visibilità. Autocomplete che fa fetch ad ogni digit e mostra risultati. Interazioni: Enter per cercare (nuova pagina), Esc per chiudere/clear, click o frecce+Enter per scegliere un suggerimento.",
              },
              { type: "subtitle", value: "4) Ricerca" },
              {
                type: "text",
                value:
                  "La query scelta viene salvata in local storage e usata nella pagina di ricerca. Chiamata POST REST con JSON, render di tre sottoliste con campi diversi in base al payload. Layout responsive con flex, uso minimo di mixin per ridurre il CSS.",
              },
            ],
          };
        default:
          return project;
      }
    }),
  },
};
