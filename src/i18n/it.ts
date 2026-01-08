/* eslint-disable no-multi-str */
import { Translations } from "./types";
import { hero, whoIam, home, prices, header, footer, contacts, form, career, projects } from "../data";

// Traduzione italiana completa di tutti i contenuti
export const it: Translations = {
  hero: {
    ...hero,
    hello: "Ciao 👋, sono",
    name: "Angelo Falci",
    title: "Software Engineer",
    contacts: "Contatti",
    mainSkills: "Ecco le mie principali competenze/conoscenze:",
    paragraphs: [
      "Ciao, sono Angelo e vivo nel cuore delle Alpi, a Sondrio (a nord di Milano), in Italia. Sono appassionato di programmazione e sono sempre alla ricerca di nuove sfide per imparare e migliorare le mie competenze. Sono una persona molto attiva e motivata. Le mie qualità principali sono la determinazione e la sincerità. Dall'altra parte i miei difetti sono... aspetta, forse è meglio non dire i difetti in un curriculum.",
      "Sono appassionato di AI e utilizzo/testo diversi strumenti per velocizzare e migliorare il mio lavoro.",
      "Nel mio tempo libero mi piace sperimentare e provare nuove tecnologie sviluppando applicazioni web full stack. Qui sotto puoi vedere maggiori dettagli sulla mia esperienza lavorativa e sui miei progetti!",
      "I miei altri hobby sono: viaggiare, leggere libri, giochi da tavolo, videogiochi e fare sport",
      "Ho la patente B e A"
    ],
  },
  whoIam: {
    ...whoIam,
    paragraphs: [
      "Sono un software engineer appassionato, focalizzato sul problem solving e sulla creazione di soluzioni pragmatiche per reali esigenze dei clienti.",
      "Ho lavorato sia con grandi aziende che con startup in fase iniziale, collaborando in team ma anche consegnando progetti end-to-end in autonomia.",
      "Sono abituato a lavorare direttamente con i clienti, comprendere le reali esigenze di business e trasformarle in software funzionante.",
      "Mi muovo con sicurezza su tutto lo stack e imparo rapidamente nuove tecnologie, sfruttando anche moderni strumenti di AI per lavorare in modo più efficiente.",
      "Do grande valore a una comunicazione chiara e diretta con i miei clienti. Voglio che capiscano perfettamente come intendo risolvere il loro problema e sono sempre onesto se c’è qualcosa che in quel momento non so e ho bisogno di approfondire.",
    ],
  },
  home: {
    ...home,
    title: ["Assumi un", "Software Engineer", "in meno di 24 ore"],
    subtitle: "Sono la persona giusta per te se:",
    paragraphs: [
      "Hai bisogno di uno sviluppatore web per il tuo team.",
      "Devi migliorare il tuo sito/applicazione con nuove funzionalità o sistemare quelle esistenti.",
      "Hai bisogno di qualcuno che sviluppi tutto il software della tua startup da zero.",
      "Vuoi un consulente per la tua idea/progetto prima di iniziare lo sviluppo.",
      "Non sei sicuro di quali tecnologie e sviluppatori ti servano per il tuo progetto.",
      "Vuoi propormi una collaborazione.",
    ],
    footerText: "Non perdere tempo, contattami e costruiamo insieme qualcosa di grande!",
    caption: "Non conto le ore di lavoro, conto gli obiettivi raggiunti",
    ctas: {
      ...home.ctas,
      lookPlans: "Guarda i miei piani",
      speakGoals: "Parliamo dei tuoi obiettivi",
    },
  },
  prices: {
    ...prices,
    title: "I Miei Piani",
    subtitle: "Scegli il piano che meglio si adatta alle tue esigenze.",
    footerText: "Hai richieste particolari? Creiamo un piano su misura!",
    ctaBookPlan: "Prenota",
    ctaMoreDetails: "Dettagli",
    plans: prices.plans.map((p) => {
      if (p.type === "WEEKLY") {
        return {
          ...p,
          description: "Ideale per piccoli task o per avere uno sviluppatore disponibile per un breve periodo di tempo.",
          included: [
            "Lavoro su 1 tuo progetto per 1 settimana",
            "Se non sei soddisfatto, ti rimborso il 100%",
            "Puoi contattarmi per supporto in qualsiasi momento"
          ],
          footer: "Per piccoli sviluppi",
          longtext: [
            {
              type: "subtitle",
              value: "Come funziona?",
            },
            {
              type: "text",
              value: "Funziona come un abbonamento, per 1 settimana sono a tua disposizione per lavorare su uno dei tuoi progetti senza perdere tempo in contratti o burocrazia.\
              \nChiamami e posso iniziare già dal giorno successivo.\
              \nQuesto piano è ideale per piccoli task o per testarmi prima di iniziare una collaborazione più lunga."
            },
            {
              type: "subtitle",
              value: "Vantaggi",
            },
            {
              type: "text",
              value: "- Puoi avere uno sviluppatore disponibile in meno di 24 ore\n- Non perdo tempo a contare le ore, lavoro per risultati aggiornandoti periodicamente\n- Puoi pagarmi solo per il tempo in cui hai bisogno, senza contratti a lungo termine\n- Sai esattamente quanto pagherai fin da subito\n- Se non sei soddisfatto, ti rimborso l'intero costo della settimana"
            }
          ],
        };
      }
      if (p.type === "MONTHLY") {
        return {
          ...p,
          description: "Ideale per progetti medi/grandi in cui hai bisogno di uno sviluppatore full-time per un mese.",
          included: [
            "Lavoro su 1 tuo progetto per 1 mese",
            "Se non sei soddisfatto, ti rimborso il 100%",
            "Puoi contattarmi per supporto in qualsiasi momento"
          ],
          footer: "Il più popolare",
          longtext: [
            {
              type: "subtitle",
              value: "Come funziona?",
            },
            {
              type: "text",
              value: "Funziona come un abbonamento, per 1 mese sono a tua disposizione per lavorare su uno dei tuoi progetti senza perdere tempo in contratti o burocrazia.\nChiamami e posso iniziare già dal giorno successivo.\nQuesto piano è ideale se hai bisogno di uno sviluppatore che lavori con te o con il tuo team per uno o più mesi senza contratti a lungo termine."
            },
            {
              type: "subtitle",
              value: "Vantaggi",
            },
            {
              type: "text",
              value: "- Puoi avere uno sviluppatore disponibile in meno di 24 ore\n- Non perdo tempo a contare le ore, lavoro per risultati aggiornandoti periodicamente\n- Puoi pagarmi solo per il tempo in cui hai bisogno, senza contratti a lungo termine\n- Sai esattamente quanto pagherai fin da subito\n- Se iniziamo e non sei soddisfatto, puoi interrompere il noleggio quando vuoi e ti rimborserò il costo della prima settimana"
            }
          ],
        };
      }
      if (p.type === "HOURLY") {
        return {
          ...p,
          description: "Ideale per piccoli task o per avere uno sviluppatore/consulente disponibile per un breve periodo di tempo.",
          included: [
            "1 o più ore dedicate in riunioni 1:1 se per consulenza",
            "Compilerò regolarmente il tuo timesheet se per sviluppo",
            "Puoi contattarmi per supporto in qualsiasi momento",
          ],
          footer: "Se devi rendicontare le ore",
          longtext: [
            {
              type: "text",
              value: "In generale preferisco non lavorare contando le ore: per esperienza è una perdita di tempo per entrambe le parti e rende più difficile sapere in anticipo quanto spenderai, ma in alcuni casi specifici può essere utile."
            },
            {
              type: "subtitle",
              value: "Quando usare questo piano",
            },
            {
              type: "text",
              value: "- Se hai bisogno di uno sviluppatore per task molto piccoli che possono essere completati in poche ore\n- Se hai bisogno di 1 o più ore di consulenza\n- Se devi conteggiare le ore per processi interni"
            }
          ],
        };
      }
      if (p.type === "CUSTOM") {
        return {
          ...p,
          description: "Se hai esigenze o richieste particolari, contattami e creerò un piano personalizzato per te!",
          included: [
            "Creerò un piano su misura in base alle tue esigenze",
          ],
          footer: "Creiamo il tuo piano",
          longtext: [
            {
              type: "subtitle",
              value: "Come funziona?",
            },
            {
              type: "text",
              value: "Scegli questo piano se non sei sicuro di quanto tempo ti servirà o se hai requisiti specifici.\nContattami, parleremo delle tue esigenze e creerò un piano personalizzato per te.\nIn alcuni casi posso applicare uno sconto o aumentare il prezzo, in base alla situazione."
            },
            {
              type: "subtitle",
              value: "Esempi in cui è utile",
            },
            {
              type: "text",
              value: "- Se sei una startup con poco budget, posso farti uno sconto e ricevere equity nella tua startup\n- Se hai bisogno di uno sviluppatore per un lungo periodo (più di 3 mesi) posso applicare uno sconto\n- Se hai bisogno di qualcuno che mantenga il tuo progetto con poche ore a settimana/mese posso applicare uno sconto\n- Se hai bisogno di sviluppare la tua soluzione in tempi molto brevi posso aumentare il prezzo per dare priorità al tuo progetto"
            }
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
    aboutMe: "Su di me",
    projects: "Progetti",
    contacts: "Contatti",
    experience: "Esperienza",
    toggle: "Attiva/Disattiva",
    generatePdf: "Scarica PDF",
    menuOpen: "Apri menu",
    menuClose: "Chiudi menu",
  },
  footer: {
    ...footer,
    center: "Sito realizzato con React",
    center2: "e amore",
  },
  contacts: {
    ...contacts,
    title: "Contattami 😃",
    subtitle:
      "Se non sei libero negli slot disponibili, utilizza gli altri contatti per raggiungermi e ti risponderò il prima possibile!",
    bookACall: "Prenota una call",
  },
  form: {
    ...form,
    useModule: "Contattami utilizzando il modulo qui sotto",
    leaveMessage: "Lascia il tuo messaggio",
    thanks: "Grazie per il tuo messaggio! Ti risponderò il prima possibile!",
    backToTop: "Torna su",
    send: "Invia",
  },
  career: {
    ...career,
    title: "Carriera e studi",
    schools: career.schools.map((school) => {
      if (school.title === "State Examination for Information Engineering") {
        return {
          ...school,
          title: "Esame di Stato per Ingegneria Informatica",
          where: "Politecnico di Milano, Italia",
          description: "Superato l’esame di Stato per l’abilitazione all’esercizio della professione di ingegnere.",
          when: "2025",
        };
      }
      if (school.title === "Master’s Degree in Computer Science and Engineering") {
        return {
          ...school,
          title: "Master of Computer Science and Engineering",
          where: "Politecnico di Milano, Italia",
          description: "Scarica qui tutti i dettagli sui corsi che ho seguito:",
          when: "2016 - 2018",
          links: school.links?.map((l) => ({ ...l, title: l.title })),
        };
      }
      if (school.title === "Bachelor’s Degree in Computer Science and Engineering") {
        return {
          ...school,
          title: "Laurea Triennale in Ingegneria Informatica",
          where: "Politecnico di Milano, Italia",
          description: "Scarica qui tutti i dettagli sui corsi che ho seguito:",
          when: "2013 - 2016",
          links: school.links?.map((l) => ({ ...l, title: l.title })),
        };
      }
      if (school.title === "High School Diploma in Computer Science") {
        return {
          ...school,
          title: "Diploma perito informatico",
          where: "Istituto tecnico ITIS Enea Mattei (Sondrio, Italia)",
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
            "Lavoro come freelance sviluppando applicazioni web fullstack per grandi aziende o startup. Oltre allo sviluppo aiuto i clienti a migliorare le idee e scegliere le migliori tecnologie e architetture. In alcuni progetti ho anche coordinato team interni.",
          whereAndWhen: "Remoto, 04/2025 - Presente",
        };
      }
      if (job.company === "DeltaTre") {
        return {
          ...job,
          title: "Senior Frontend Developer",
          description:
            "Ho lavorato al progetto Diva, un player video custom con molte funzionalità. Le principali tecnologie utilizzate sono React, Vanilla JS, TypeScript, RxJS, Node, Storybook, Webpack e Babel.",
          whereAndWhen: "Da remoto, 09/2022 - 04/2025",
        };
      }
      if (job.company === "TeamSystem") {
        return {
          ...job,
          title: "Senior FullStack Developer",
          description:
            "Ho lavorato principalmente con React e Redux per mantenere e migliorare l’applicazione Digitalbox. Ho inoltre collaborato occasionalmente con sviluppatori backend per aggiornare o correggere bug nelle API scritte in NodeJS o Java (Spring Boot).",
          whereAndWhen: "Da remoto, 10/2021 - 09/2022",
        };
      }
      if (job.company === "Consultant at Stellantis" && job.whereAndWhen.includes("Turin")) {
        return {
          ...job,
          title: "Autonomous Driving Software Engineer",
          description:
            "Come consulente NetcomGroup ero responsabile della manutenzione e dello sviluppo di diversi strumenti utilizzati per validare software di guida autonoma. Inoltre, insieme al mio team, abbiamo studiato e testato nuove metodologie e software per migliorare la toolchain di Stellantis.",
          whereAndWhen: "Torino - Italia, 02/2020 - 10/2021",
        };
      }
      if (job.company === "Consultant at Stellantis" && job.whereAndWhen.includes("Munich")) {
        return {
          ...job,
          title: "Autonomous Driving Software Engineer",
          description:
            "Come consulente NetcomGroup ho studiato come integrare alcuni strumenti nei sistemi Stellantis per creare una toolchain in grado di validare software di guida autonoma.",
          whereAndWhen: "Monaco di Baviera - Germania, 10/2019 - 02/2020",
        };
      }
      if (job.company === "Accenture") {
        return {
          ...job,
          title: "Frontend Developer",
          description:
            "Ho lavorato come frontend developer per progettare e sviluppare siti web performanti e responsive per clienti di grande importanza, utilizzando diverse tecnologie come React, Redux, ES6, HTML, CSS, Docker e altre.",
          whereAndWhen: "Milano - Italia, 11/2018 - 10/2019",
        };
      }
      if (job.company === "JOL Laboratory, TIM") {
        return {
          ...job,
          title: "IoT Developer",
          description:
            "Per la mia tesi ho lavorato con un team su un progetto europeo che aveva come obiettivo principale la creazione di un’applicazione Android utilizzabile per comunicare e raccogliere dati da diversi dispositivi smart (vedi la sezione progetti per maggiori dettagli).",
          whereAndWhen: "Milano - Italia, 05/2018 - 09/2018",
        };
      }
      return job;
    }),
  },
  projects: {
    ...projects,
    title: "Ultimi progetti principali",
    subtitle: "(clicca sul titolo o sul testo della card per più dettagli)",
    footerText: "Per altri progetti guarda il mio GitHub o Codepen! (link nel footer)",
    projects: projects.projects.map((project) => {
      switch (project.title) {
        case "Smanno":
          return {
            ...project,
            description: "Ho progettato e sviluppato una piattaforma fullstack per gestire flotte di robot e missioni complesse, usata in ambito sanitario e ospedaliero.",
            links: project.links?.map((l) => ({ ...l, label: "Smanno - Sito ufficiale" })),
            longtext: [
              {
                type: "text",
                value: "Smanno è una startup composta da 3 persone (me compreso) che sviluppa robot per laboratori sanitari e dell’ospitalità accompagnati da una piattaforma per il loro utilizzo.\
          \nIl ruolo principale del fondatore di Smanno era lo sviluppo del business e le relazioni con i clienti. L’altra persona, CTO di Smanno, era responsabile dello sviluppo hardware dei robot.\
          \nInfine io ero responsabile dello sviluppo di tutto il software della piattaforma e del suo deployment negli ambienti dei clienti."
              },
              {
                type: "text",
                value: "Ho sviluppato la piattaforma in modo che fosse il più flessibile possibile per gestire diversi tipi di robot e missioni senza modificare la codebase. In breve, per farlo ho astratto tutto in 2 entità: Actor (come robot e altre macchine/luoghi che interagiscono con i robot) e Mission (il task che i robot devono eseguire).\
          \nLa piattaforma è divisa in 2 parti principali: il backend sviluppato in Django e il frontend sviluppato in React, di seguito i dettagli."
              },
              {
                type: "subtitle",
                value: "Backend - Django",
              },
              {
                type: "text",
                value: "Ho sviluppato il backend della piattaforma utilizzando Django e mysql come database. Le principali funzionalità implementate sono:\
          \n- Architettura del database per la gestione di robot, missioni e utenti che utilizzano la piattaforma\
          \n- API necessarie per il frontend con controlli sui permessi utente\
          \n- Processi asincroni per verificare lo stato dei robot connessi alla piattaforma\
          \n- Integrazione con servizi e librerie di terze parti per comunicare con diversi robot\
          \n- Pagina admin per accedere direttamente al database e funzionalità avanzate come export/import dei dati e modifica rapida delle celle di ogni tabella\
          \n- Creazione di comandi personalizzati Django per semplificare installazione e gestione della piattaforma\
          \n- Documentazione Swagger per tutte le REST API implementate\
          \n- Documentazione per installare e gestire la piattaforma\
          \n- File docker compose per avviare e configurare database, backend e frontend con un solo comando da terminale\
          \n- Servizi socket per avere aggiornamenti in tempo reale nel frontend sulla dashboard riguardo lo stato dei robot e delle missioni"
              },
              {
                type: "subtitle",
                value: "Frontend - React",
              },
              {
                type: "text",
                value: "Ho sviluppato il frontend utilizzando React con Bootstrap 5 come libreria UI di partenza, poiché non avevo una grafica realizzata da un designer. Le funzionalità disponibili per gli utenti dipendono dal ruolo e dai permessi assegnati: admin, editor, executor e viewer.\
          \nLe principali funzionalità implementate sono:\
          \n- Design responsive per mobile e desktop, così che il personale ospedaliero possa accedere alla piattaforma da qualsiasi dispositivo\
          \n- Possibilità di creare missioni complesse, suddivise in step, utilizzando actor e missioni atomiche salvate nel database (le missioni atomiche sono le operazioni più semplici eseguibili da un robot, come spostarsi in una posizione o eseguire un certo movimento con il braccio robotico)\
          \n- Possibilità di incapsulare missioni complesse per riutilizzarle in futuro in altre missioni senza ricrearle da zero e, per ogni missione, abilitare/disabilitare singoli step\
          \n- Esecuzione delle missioni create monitorando in realtime, tramite comunicazione socket, lo stato sia delle missioni che degli actor coinvolti, con ritorno di dettagli in caso di errore\
          \n- Possibilità di fermare e riprendere alcune missioni\
          \n- Visualizzazione di statistiche sull’esecuzione delle missioni e sulle performance dei robot"
              },
              {
                type: "subtitle",
                value: "Deployment",
              },
              {
                type: "text",
                value: "L’applicazione deve essere installata sui server dei clienti Smanno (ad esempio un ospedale) ed essere accessibile dai dispositivi collegati alla stessa rete in cui gira l’applicazione.\
          \nPrima di tutto, come accennato sopra, ho creato un file docker compose per avviare database, backend e frontend con un solo comando in tre container differenti, semplificando anche il lavoro degli altri membri del team.\
          \nSuccessivamente, per i clienti, ho creato uno script che esporta le tre immagini Docker generate. Lo script crea anche altri script per automatizzare l’importazione e l’avvio delle tre immagini sul server del cliente con un solo comando, sia in ambiente Linux che Windows.\
          \nTutto viene salvato in una cartella di output che può essere copiata e incollata sul server del cliente ed eseguita.\
          \nIn futuro questo processo potrebbe essere migliorato in base alle esigenze dei clienti."
              }
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
                value: "Ho sviluppato una PWA in React e pubblicata su Firebase per gestire la mia collezione personale di giochi di carte. Ho aggiunto, e in alcuni casi migliorato, diverse funzionalità utili trovate su vari siti, ma mai tutte in un unico posto.\
          \nPer scopi sperimentali e di apprendimento ho iniziato questo progetto utilizzando Lovable, successivamente ho smesso di usarlo ma ho continuato a utilizzare in modo massiccio strumenti di AI per lo sviluppo, scrivendo codice solo quando strettamente necessario per comprendere i reali limiti di questo nuovo tipo di sviluppo.\
          \nSpesso ho creato task su Github con dettagli tecnici e li ho assegnati a Copilot per generare il codice, successivamente ho revisionato e, se necessario, modificato il codice generato per adattarlo alle mie esigenze."
              },
              {
                type: "subtitle",
                value: "Funzionalità implementate",
              },
              {
                type: "text",
                value: "Ecco una lista delle principali funzionalità implementate nell’applicazione:\
          \n- Applicazione con UI responsive per mobile e desktop con supporto sia light che dark mode\
          \n- Autenticazione utente tramite Firebase Auth con email/password\
          \n- Possibilità di applicare filtri complessi per trovare una carta o un set specifico\
          \n- Creazione e gestione della collezione aggiungendo carte singolarmente o importando liste di carte (gestendo anche eventuali merge)\
          \n- Creazione e gestione dei mazzi e, per ciascun mazzo, visualizzazione di statistiche come numero di carte, distribuzione delle rarità, curva dei costi e altro\
          \n- Importazione ed esportazione dei mazzi in diversi formati per varie piattaforme (come simulatori o CardMarket)\
          \n- Stampa delle carte scegliendo layout differenti e numero di carte per pagina\
          \n- Se un utente è abilitato da me, dopo il login collezioni e mazzi vengono salvati su Firestore per avere gli stessi dati su dispositivi diversi",
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
                value: "GUT è una startup che opera nel settore musicale.\
          \nIl mio lavoro non si è limitato a una sola area, ma ho contribuito a tutti gli aspetti della piattaforma, proponendo anche nuove funzionalità e miglioramenti in base a quanto presentato da GUT.\
          \nIl lavoro è stato suddiviso in 3 progetti principali: la PWA in React, il CMS in React e il backend in NodeJS ed Express.\
          \nAbbiamo lavorato con metodologie agile in un team di 6 persone, 3 interne e 3 esterne (me compreso). Per quanto riguarda i progetti, ero responsabile dell’architettura della PWA e del CMS e ho sviluppato la parte principale di entrambe le applicazioni con l’aiuto di un altro sviluppatore freelance.\
          \nHo inoltre contribuito allo sviluppo backend collaborando con uno dei fondatori della startup.\
          \nDi seguito i dettagli di ciascuno dei 3 progetti principali.",
              },
              {
                type: "subtitle",
                value: "Frontend - PWA in React",
              },
              {
                type: "text",
                value: "Ho creato una single page application utilizzando React + Typescript e Vite come build tool. Le principali funzionalità della PWA sono:\
          \n- Design mobile-first con UI responsive utilizzando CSS e Styled Components con Panda\
          \n- Streaming video tramite Mux SDK; gli artisti possono caricare i loro videoclip sempre tramite Mux con visualizzazione della percentuale di upload\
          \n- Sistema di pagamento tramite Stripe per l’acquisto di abbonamenti agli artisti e token gem per gli utenti\
          \n- Tecniche di ottimizzazione delle performance come lazy loading e strategie di caching avanzate per ridurre le chiamate al backend\
          \n- Banner di installazione per installare la PWA su dispositivi mobili",
              },
              {
                type: "subtitle",
                value: "Frontend - CMS in React",
              },
              {
                type: "text",
                value: "Ho creato un sistema di gestione dei contenuti (CMS) utilizzando React + Typescript e Vite come build tool per avere due progetti simili e facilmente manutenibili anche in futuro da altre persone.\
          \nLa piattaforma è suddivisa in macrosezioni per le principali entità: User, Content, Collection (gruppo di contenuti), Audition e Tags.\
          \nOgni macrosezione è divisa in 2 pagine:\
          \n- Una pagina tabellare per visualizzare tutte le entità, suddivise in più pagine con funzionalità di ricerca e filtro\
          \n- Una pagina di dettaglio per visualizzare, modificare o creare nuove entità\
          \nAnche nel CMS ho applicato strategie di caching per ridurre le chiamate al backend, che possono essere molto pesanti",
              },
              {
                type: "subtitle",
                value: "Backend - NodeJS and Express",
              },
              {
                type: "text",
                value: "Uno dei fondatori era il principale responsabile dello sviluppo backend utilizzando NodeJS ed Express con PostgreSQL e Redis per il caching.\
          \nHo collaborato con lui per:\
          \n- Progettare alcuni aspetti della struttura del database\
          \n- Implementare strategie di caching utilizzando Redis\
          \n- Implementare alcune REST API utilizzate dalla PWA e dal CMS\
          \n- Effettuare controlli di sicurezza per assicurarsi che le API fossero protette da attacchi comuni e non esponessero dati sensibili\
          \n- Creare la documentazione Swagger per tutte le API implementate\
          \n- Fare debug e risolvere bug emersi durante lo sviluppo della PWA e del CMS",
              }
            ],
          };
        case "Portfolio Online":
          return {
            ...project,
            description:
              "Ho creato questo portfolio online per mostrare competenze ed esperienze usando React, Typescript e styled-components, pubblicato su Firebase.",
            links: project.links?.map((l) => {
              if (l.label === "Website") return { ...l, label: "Sito" };
              if (l.label === "Github") return { ...l, label: "GitHub" };
              return l;
            }),
            longtext: [
              {
                type: "text",
                value: "Partendo da un template online ho creato e migliorato questo portfolio, aggiungendo nuovi componenti.\
                \nIn una versione precedente avevo pubblicato il portfolio su GitHub Pages, ma per questa versione ho scelto Firebase Hosting per avere più flessibilità e facilità di gestione.",
              },
              { type: "subtitle", value: "Tecnologie e librerie" },
              {
                type: "text",
                value:
                  "- *React* come framework\
                    \n- *Typescript* come linguaggio\
                    \n- *style-components* come libreria per la gestione degli stili\
                    \n- *GitHub* come sistema di versionamento\
                    \n- *Firebase* per il deploy e l’hosting\
                    \n- *jspdf* e *html2canvas* per generare una versione PDF semplificata del portfolio",
              },
            ],
          };
        case "Startup - Kangury":
          return {
            ...project,
            description:
              "Ho sviluppato un’applicazione fullstack utilizzando React per il frontend e Django per il backend.\
              \nIn Kangury è possibile acquistare foto che verranno associate a un album contenente le proprie foto o video.\
              \nVisita il sito per saperne di più!",
            links: project.links?.map((l) => ({ ...l, label: "Kangury - Sito ufficiale" })),
            longtext: [
              {
                type: "text",
                value:
                  "Ho sviluppato l’applicazione che puoi provare dai link forniti. Al suo interno gli utenti possono acquistare diversi prodotti legati al mondo della fotografia e, ovviamente, modificare e stampare le proprie foto in diversi formati.\
            \nDopo aver acquistato una foto, l’utente può associarla a un album in cui può caricare le proprie foto o video.\
            \nSe sei interessato a collaborare a questa startup contattami e posso fornirti anche un codice sconto!",
              },
              {
                type: "subtitle",
                value: "Introduzione",
              },
              {
                type: "text",
                value:
                  "Ho utilizzato le seguenti tecnologie per 3 motivi principali:\
            \n- Le conoscevo già e potevo sviluppare l’applicazione in poco tempo\
            \n- Conoscevo servizi su cui distribuire rapidamente l’applicazione con costi nulli o molto bassi all’inizio\
            \n- Sono tecnologie solide e ben conosciute, utilizzate in molti grandi progetti e con una community ampia che può aiutare in caso di problemi",
              },
              {
                type: "subtitle",
                value: "PWA in React",
              },
              {
                type: "text",
                value:
                  "Funzionalità principali dell’applicazione web che ho utilizzato/sviluppato:\
          \n- Bootstrap 5 con SASS personalizzato per avere un tema facile da mantenere e aggiornare in futuro; ha anche velocizzato la creazione dell’app considerando che non avevo un UI designer\
          \n- Redux per gestire lo store dell’applicazione\
          \n- Firebase per distribuire l’applicazione su 2 branch differenti, produzione e test, così da avere un ambiente di test dove verificare le modifiche prima del deploy in produzione\
          \n- Editor di foto avanzato che permette all’utente di modificare le immagini ritagliandole e ruotandole\
          \n- Google Analytics per tracciare il comportamento degli utenti all’interno dell’applicazione\
          \n- Swiper per diversi carousel all’interno dell’applicazione"
              },
              {
                type: "subtitle",
                value: "Backend in Django",
              },
              {
                type: "text",
                value:
                  "Per il backend ho utilizzato Django con database mysql e ho organizzato le diverse API in una documentazione Swagger.\
          \nHo utilizzato bucket Amazon AWS S3 per salvare le foto e i video caricati dagli utenti.",
              },
            ],
          };
        case "Personal Project - Digitalpix":
          return {
            ...project,
            description:
              "Ho sviluppato, in React, una PWA e un’applicazione store (per iOS e Android) per personalizzare e acquistare foto professionali.",
            longtext: [
              {
                type: "text",
                value:
                  "Ho sviluppato l’applicazione che puoi provare dai link forniti. Al suo interno gli utenti possono acquistare diversi prodotti legati al mondo della fotografia e, ovviamente, modificare e stampare le proprie foto in diversi formati.",
              },
              {
                type: "subtitle",
                value: "Analisi del Problema",
              },
              {
                type: "text",
                value:
                  "Innanzitutto il mio lavoro è stato trovare le tecnologie migliori per sviluppare ciò di cui Digitalpix aveva bisogno: un’applicazione web più accessibile da dispositivi mobili e un’app mobile da pubblicare su Google Play Store e Apple App Store.\
            \nAvendo un budget ridotto e lavorando da solo ho deciso di sviluppare una PWA (Progressive Web Application) utilizzando React e successivamente un’app mobile in React Native che includesse una WebView per visualizzare la PWA.\
            \nIn questo modo posso utilizzare lo stesso codice sia per l’applicazione web che per quella mobile. Inoltre non è necessario pubblicare l’app mobile su Google Store e Apple Store a ogni aggiornamento, riducendo drasticamente i tempi di deploy e la manutenzione per Digitalpix dopo il rilascio.",
              },
              {
                type: "subtitle",
                value: "Web App in React",
              },
              {
                type: "text",
                value:
                  "Funzionalità principali dell’applicazione web utilizzata/sviluppata:\
          \n- Bootstrap 5 con SASS personalizzato per avere un tema facile da mantenere e aggiornare in futuro; ha anche velocizzato la creazione dell’app considerando che non avevo un UI designer\
          \n- Redux per gestire lo store dell’applicazione\
          \n- Firebase per distribuire l’applicazione su 2 branch differenti, produzione e test, così da avere un ambiente di test dove verificare le modifiche prima del deploy in produzione\
          \n- Editor di foto avanzato che permette all’utente di modificare le immagini ritagliandole e ruotandole\
          \n- Google Analytics per tracciare il comportamento degli utenti all’interno dell’applicazione\
          \n- Swiper per diversi carousel all’interno dell’applicazione"
              },
              {
                type: "subtitle",
                value: "App Mobile in React Native",
              },
              {
                type: "text",
                value:
                  "Per pubblicare l’applicazione anche sugli store mobile ho sviluppato un’app in React Native includendo una WebView che mostra l’applicazione web.\
          \nIn questo modo posso utilizzare lo stesso codice sia per l’applicazione web che per quella mobile. Inoltre non è necessario pubblicare l’app mobile su Google Store e Apple Store a ogni aggiornamento, riducendo drasticamente i tempi di deploy.\
          \nLavorando da solo e solo nel tempo libero ho considerato questa la soluzione migliore per ottenere un buon risultato in poco tempo.",
              },
              {
                type: "subtitle",
                value: "Backend",
              },
              {
                type: "text",
                value: "Durante il progetto ho suggerito diverse soluzioni per migliorare l’architettura software di Digitalpix e risolvere alcuni problemi emersi durante lo sviluppo.\
          \nI principali aggiornamenti suggeriti sono stati:\
          \n- Creare una documentazione Swagger per tutte le API utilizzate, così da avere una documentazione chiara su come usarle e quali dati inviare/ricevere\
          \n- Salvare tutte le soluzioni software utilizzate internamente in un profilo Github creato per Digitalpix, così da avere un sistema di versionamento e un backup di tutto il codice sviluppato"
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
                  "Nel mio tempo libero ho lavorato a questa applicazione per imparare cose nuove, mantenere allenate le conoscenze che già avevo e acquisirne di nuove.\
            \nHo sviluppato sia il frontend che il backend.",
              },
              {
                type: "subtitle",
                value: "Frontend",
              },
              {
                type: "text",
                value:
                  "Per il frontend queste sono le principali tecnologie che ho utilizzato:\
                    \n- *React* come frontend\
                    \n- *Redux* per gestire lo store dell’applicazione\
                    \n- *Styled* components per gestire lo stile\
                    \n- *Firebase* per distribuire l’applicazione",
              },
              {
                type: "subtitle",
                value: "Backend",
              },
              {
                type: "text",
                value:
                  "Per il backend queste sono le principali tecnologie che ho utilizzato:\
                    \n- *Flask* micro-framework sviluppato in Python\
                    \n- *mysql* per gestire il database poiché le informazioni all’interno dell’applicazione sono ben strutturate\
                    \n- *phpmyadmin docker image* utilizzata in locale per esplorare il database tramite un’interfaccia grafica\
                    \n- *docker* e *docker-compose* per sviluppare facilmente il backend in locale eseguendo 3 immagini docker: una per Flask, una per mysql e una per phpmyadmin\
                    \n- *Swagger* per creare una documentazione chiara delle API\
                    \n- *pythonanywhere* per distribuire l’applicazione\
                    \n- *marshmallow, SQLAlchemy e connexion* per gestire facilmente le tabelle del database all’interno delle API",
              },
              {
                type: "subtitle",
                value: "Altre Tecnologie/Strumenti",
              },
              {
                type: "text",
                value: "- *Git*:\
                    \n- *Visual Studio Code*",
              },
            ],
          };
        case "Diva - Custom Video Player":
          return {
            ...project,
            description:
              "Player video personalizzato con molte funzionalità sviluppato per essere integrato in diverse piattaforme (web, TV, mobile ecc.).\
        Il progetto è sviluppato come libreria divisa in diversi pacchetti, uno per le diverse destinazioni in cui Diva viene utilizzato (web, mobile, TV, ecc.).",
            links: project.links?.map((l) => ({ ...l, label: "DeltaTre - Diva" })),
            longtext: [
              {
                type: "text",
                value:
                  "Ho lavorato, utilizzando metodologie Agile, come frontend developer sul progetto Diva con l’obiettivo di migliorare le funzionalità esistenti e svilupparne di nuove.",
              },
              {
                type: "subtitle",
                value: "Descrizione del Progetto",
              },
              {
                type: "text",
                value:
                  "Diva era una libreria player venduta da DeltaTre a diversi clienti che la integravano all’interno dei propri servizi di streaming.\
                    \nAl suo interno era suddivisa in diversi pacchetti dedicati a:\
                    \n- Funzionalità comuni utilizzate trasversalmente in più pacchetti\
                    \n- Componenti specifici, o insiemi di componenti, utilizzabili in modo standalone e venduti singolarmente oppure integrati in pacchetti più grandi",
              },
              {
                type: "subtitle",
                value: "Tecnologie Utilizzate",
              },
              {
                type: "text",
                value:
                  "- *React* come framework frontend (con *Typescript* e *SCSS*) \
                    \n- *Typescript* per gestire le diverse strutture utilizzate nel progetto e intercettare errori in fase di compilazione\
                    \n- *RXjs* per semplificare la gestione del codice asincrono e basato su callback causato dallo streaming video\
                    \n- *SCSS* per gestire gli stili dei componenti e mantenere un’architettura più organizzata rispetto al CSS puro\
                    \n- *Storybook.JS* per gestire la documentazione dei componenti condivisi utilizzati nei diversi pacchetti del progetto\
                    \n- *Git* come sistema di versionamento\
                    \n- *VS Code* come IDE\
                    \n- *Yarn* per eseguire e buildare le diverse parti di Diva\
                    \n- *Jest* per la gestione dei test unitari\
                    \n- *JSON* come formato standard per lo scambio di dati tra frontend e backend\
                    \n- *Jira* per la gestione delle task e delle issue di progetto\
                    \n- *Windows* o *MacOS* come sistemi operativi",
              },
              {
                type: "subtitle",
                value: "Workflow",
              },
              {
                type: "text",
                value:
                  "Abbiamo lavorato in sprint di 2 settimane e, tra uno sprint e l’altro, presentavamo il lavoro completato e decidevamo quali user story affrontare nelle iterazioni successive.\
                      Le story potevano essere create dai team che analizzavano i prossimi componenti da implementare, oppure da me e dal mio team quando volevamo:\
                      \n- Eseguire un refactor importante del codice\
                      \n- Aggiornare componenti esistenti\
                      \n\nQuando completavamo una user story, la distribuivamo nell’ambiente *dev* per test interni. Successivamente la distribuivamo nell’ambiente *test* per permettere al team QA di verificare che tutti i requisiti fossero soddisfatti senza errori. Se i requisiti non venivano rispettati o venivano individuati problemi, correggevamo le anomalie e ridistribuivamo prima in *dev* e poi in *test*. Ripetevamo questo processo fino a quando la user story soddisfaceva completamente i requisiti senza bug o errori.\
                      \nNel nostro workflow utilizzavamo tre ambienti differenti: *dev*, *test* e *prod*.\
                      \n- *dev* veniva utilizzato per i test da parte degli sviluppatori e la validazione iniziale dei requisiti\
                      \n- *test* veniva utilizzato come ambiente stabile di pre-produzione per demo ufficiali quando necessario\
                      \n- *prod* era l’ambiente finale in cui l’applicazione veniva distribuita ed utilizzata dai clienti reali",
              },
            ]

          };
        case "TeamSystems - Digital Box":
          return {
            ...project,
            description:
              "Applicazione web progettata per studi professionali che desideravano implementare processi di condivisione delle informazioni, migliorare il rapporto con i propri clienti e coinvolgerli attraverso lo scambio di informazioni anche in tempo reale.",
            links: project.links?.map((l) => ({ ...l, label: "Digital Box" })),
            longtext: [
              {
                type: "text",
                value:
                  "Ho lavorato, utilizzando metodologie Agile, come frontend developer sull’applicazione Digital Box per aggiornare le funzionalità già disponibili e implementarene di nuove. Inoltre, ho corretto bug e refactorizzato componenti legacy per rendere il codice più leggibile e migliorare le performance.",
              },
              {
                type: "subtitle",
                value: "Tecnologie Utilizzate",
              },
              {
                type: "text",
                value:
                  "- *React* come framework frontend (con *Javascript* e *HTML*, ovviamente) \
                    \n- *Redux* per la gestione dello stato dell’applicazione\
                    \n- *CSS* per gestire gli stili dei componenti creati internamente\
                    \n- *Jest* per la gestione dei test unitari\
                    \n- *Cypress* per la gestione dei test di integrazione\
                    \n- *Storybook.JS* per la documentazione dei componenti comuni utilizzati in diverse parti dell’applicazione\
                    \n- *Git* come sistema di versionamento\
                    \n- *Python* per automatizzare alcune attività durante il processo di sviluppo\
                    \n- *Docker* per eseguire il backend in locale\
                    \n- *VS Code* come IDE\
                    \n- *JSON* come formato standard per lo scambio di dati tra frontend e backend\
                    \n- *Swagger* come documentazione per analizzare le API backend\
                    \n- *Jira* per la gestione delle attività e delle issue di progetto\
                    \n- *Windows* o *MacOS* come sistemi operativi",
              },
              {
                type: "subtitle",
                value: "Workflow",
              },
              {
                type: "text",
                value:
                  "Abbiamo lavorato in sprint di 2 settimane e, tra uno sprint e l’altro, presentavamo il lavoro svolto e decidevamo quali user story affrontare nei successivi sprint.\
                    Le storie potevano essere create dai team che analizzavano i prossimi componenti da implementare oppure dal mio team quando volevamo:\
                    \n- Effettuare un refactor significativo del codice\
                    \n- Aggiornare componenti esistenti\
                    \n\nUna volta completata una user story, la distribuivamo nell’ambiente *dev* per i test interni. Successivamente la distribuivamo nell’ambiente *test* per permettere al team di QA di verificare il rispetto dei requisiti senza errori. In caso di problemi, correggevamo le anomalie e ridistribuivamo prima in *dev* e poi in *test*. Questo processo veniva ripetuto fino al completo soddisfacimento dei requisiti senza bug o errori.\
                    \nNel nostro workflow utilizzavamo tre ambienti distinti: *dev*, *test* e *prod*.\
                    \n- *dev* veniva utilizzato per i test tra sviluppatori e la validazione iniziale dei requisiti\
                    \n- *test* fungeva da ambiente pre-produzione stabile per demo ufficiali quando necessario\
                    \n- *prod* era l’ambiente finale in cui l’applicazione veniva distribuita ed utilizzata dai clienti reali",
              },
              {
                type: "subtitle",
                value: "Interazione con il backend",
              },
              {
                type: "text",
                value:
                  "Non facevamo affidamento su un unico server backend, ma su diversi servizi, alcuni sviluppati con Spring Boot (Java) e altri con NodeJS (JavaScript).\
                    \nQuando distribuivamo nuovi componenti o funzionalità nell’applicazione, le API necessarie potevano essere già disponibili oppure no.\
                    \nNel primo caso le utilizzavamo direttamente e, se necessario, suggerivamo eventuali miglioramenti.\
                    \nNel secondo caso, simulavamo le risposte del server nello store Redux, condividendo con il team backend la struttura JSON dei dati mockati affinché potessero implementare le API.",
              },
            ],

          };
        case "Personal Project - Traveltips Web Application":
          return {
            ...project,
            description:
              "Social di viaggio per condividere info su città e luoghi turistici. Ho sviluppato frontend e backend per una startup non più interessata a completare il progetto; backend ora offline, frontend visibile.",
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
                  "Applicazione web che gli utenti potevano utilizzare per condividere informazioni su città e luoghi turistici, come un social network focalizzato sui viaggi.\nHo sviluppato sia il backend che il frontend per una startup, ma il progetto non è stato completato perché non erano più interessati a portarlo avanti. Al momento il backend non è attivo, è visibile solo il frontend.",
              },
              {
                type: "subtitle",
                value: "Tecnologie Frontend",
              },
              {
                type: "text",
                value: "Per il frontend queste sono le principali tecnologie che ho utilizzato:",
              },
              {
                type: "text",
                value:
                  "*React* come frontend,\n*Redux* per gestire lo store dell’applicazione \n*Bootstrap* 5 per gestire la parte grafica dell’applicazione \n*Firebase* per il deploy dell’applicazione\n*Jest* per la gestione dei test",
              },
              {
                type: "text",
                value:
                  "Ho organizzato l’architettura dell’applicazione in 6 cartelle principali:",
              },
              {
                type: "text",
                value:
                  "- *bootstrap* contiene tutto il codice SCSS che definisce le classi utilizzate nell’applicazione\
                \n- *components* contiene tutti i componenti UI renderizzati all’interno dell’applicazione\
                \n- *languages* contiene un file JSON per ogni lingua selezionabile dall’utente nell’applicazione\
                \n- *pages*\
                \n- *store* gestisce le informazioni salvate nell’applicazione, incluse tutte le azioni che gli altri componenti possono usare per interagire con lo store e con i servizi API\
                \n- *utils* contiene una lista di funzionalità utilizzate in diverse parti dell’applicazione, suddivise in più file",
              },
              {
                type: "subtitle",
                value: "Backend",
              },
              {
                type: "text",
                value: "Per il backend queste sono le principali tecnologie che ho utilizzato:",
              },
              {
                type: "text",
                value:
                  "- *Flask* micro-framework sviluppato in *Python*, ho scelto questo linguaggio per diversi motivi: lo sviluppo in Python è più rapido e in futuro sarebbe stato più semplice integrare il backend con algoritmi di raccomandazione scritti in Python per migliorare l’esperienza utente\
                \n- *mysql* per la gestione del database, poiché le informazioni dell’applicazione erano ben strutturate\
                \n- *phpmyadmin* come immagine Docker utilizzata in locale per esplorare il database tramite interfaccia grafica\
                \n- *docker* e *docker-compose* per sviluppare facilmente il backend in locale, eseguendo tre immagini Docker: una per Flask, una per mysql e una per phpmyadmin\
                \n- *Swagger* per creare una documentazione chiara delle API\
                \n- *marshmallow*, *SQLAlchemy* e *connexion* per gestire facilmente le tabelle del database all’interno delle API",
              },
              {
                type: "subtitle",
                value: "Altre tecnologie",
              },
              {
                type: "text",
                value:
                  "- *Git*\
                \n- *Visual Studio Code*",
              },
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
                  "Come consulente, ho lavorato presso Stellantis (precedentemente FCA) su un grande progetto relativo alla guida autonoma.",
              },
              {
                type: "subtitle",
                value: "Cosa ho fatto",
              },
              {
                type: "text",
                value:
                  "Ho lavorato, utilizzando la metodologia AGILE, all’interno di un team di ingegneria che gestiva diversi strumenti utilizzati da altri team per validare gli algoritmi di guida autonoma. Collaboravamo con più team dislocati in diverse parti del mondo.\
                    \nAlcune delle nostre principali attività erano:\
                    \n- Personalizzare il software di simulazione acquistato da Stellantis in base a requisiti specifici (utilizzando C++ per il core e C#/Unity per la GUI)\
                    \n- Implementare immagini Docker con test specifici e distribuirle su un cluster, permettendo ad altri team di eseguire test da remoto\
                    \n- Implementare DAG in Airflow (utilizzando Python) per gestire attività di pipeline come il salvataggio dei KPI in un database\
                    \n- Creare dashboard Grafana per visualizzare i risultati delle simulazioni\
                    \n- Definire insieme ad altri team le nuove funzionalità e i test da implementare nello strumento di simulazione",
              },
              {
                type: "subtitle",
                value: "Metodologia",
              },
              {
                type: "text",
                value:
                  "Lavoravamo seguendo la metodologia AGILE SCRUM con sprint della durata di 2 settimane.\
                    \nNon ci occupavamo solo degli item aggiunti dal nostro APO, ma proponevamo anche attività utili al raggiungimento degli obiettivi di delivery.",
              },
              {
                type: "subtitle",
                value: "Linguaggi di programmazione",
              },
              {
                type: "text",
                value:
                  "- *C++*\
                    \n- *Python*\
                    \n- *C#*\
                    \n- *Bash script*",
              },
              {
                type: "subtitle",
                value: "Sistemi Operativi",
              },
              {
                type: "text",
                value:
                  "- *Ubuntu* (principalmente)\
                    \n- *Windows 10*",
              },
              {
                type: "subtitle",
                value: "Altre Tecnologie",
              },
              {
                type: "text",
                value:
                  "- *Visual Studio Code*\
                    \n- *Unity*\
                    \n- *Github*\
                    \n- *Docker*\
                    \n- *Airflow*\
                    \n- *Jenkins*\
                    \n- *Codebeamer*\
                    \n- *Grafana*\
                    \n- *Formati di mappa NDS e OpenDRIVE*\
                    \n- *Google Sheets online* (documenti, fogli di calcolo, presentazioni)\
                    \n- *ROS*",
              },
            ]

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
                  "Nel mio quarto progetto ho sviluppato una web application utilizzando React con Redux.\
                  \nHo lavorato in modalità agile (Scrum nello specifico) in un team composto principalmente da 2 sviluppatori frontend, 2 analisti funzionali, 1 UI designer, 2 sviluppatori backend e 1 Scrum Master.\
                  \nHo realizzato un'applicazione React per raccogliere e visualizzare diversi dati, provenienti in modo asincrono da varie stazioni distribuite in tutta Italia.",
              },
              {
                type: "subtitle",
                value: "Linguaggi Utilizzati",
              },
              {
                type: "text",
                value:
                  "- *HTML*\
                  \n- *CSS*\
                  \n- *Sass*\
                  \n- *JS6*\
                  \n- *Python*\
                  \n- *Java*",
              },
              {
                type: "subtitle",
                value: "Tecnologie Utilizzate",
              },
              {
                type: "text",
                value:
                  "- *React*\
                  \n- *Redux Saga*\
                  \n- *NodeJS*\
                  \n- *Stencil JS*\
                  \n- *Storybook UI*\
                  \n- *Chrome, Firefox, Safari e IE11* per testare e modificare i componenti a runtime\
                  \n- *Visual Studio Code* come editor\
                  \n- *Git* per il repository online\
                  \n- *Jupyter Notebook* per il codice Python\
                  \n- *MQTT* per collegarsi al server",
              },
              {
                type: "subtitle",
                value: "Librerie Utilizzate",
              },
              {
                type: "text",
                value:
                  "Abbiamo introdotto solo poche librerie per implementare componenti complessi.\
                  \n- *LeafletJS* per realizzare una mappa interattiva, uno dei componenti principali della homepage\
                  \n- *D3.js* per disegnare SVG dinamici e personalizzati\
                  \n- *React Intl* per supportare il multi-lingua nel sito",
              },
              {
                type: "subtitle",
                value: "Cosa Ho Fatto",
              },
              {
                type: "text",
                value:
                  "Di seguito descrivo i principali componenti che ho sviluppato durante il progetto, senza entrare nei dettagli relativi al cliente.",
              },
              {
                type: "subtitle",
                value: "1) Mappa Interattiva",
              },
              {
                type: "text",
                value:
                  "Uno dei primi componenti è stata una mappa centrata sull’Italia. Per realizzarla ho utilizzato Leaflet JS.\
                  \nHo posizionato sulla mappa un'icona, usando le coordinate geografiche, per ogni stazione dell’azienda. Quando l’utente cliccava su un’icona, appariva un popup che mostrava i dati relativi alla stazione, aggiornati in tempo reale.\
                  \nDal popup l’utente poteva anche accedere alla pagina della stazione cliccando sul titolo.\
                  \nSuccessivamente ho aggiunto un'immagine sopra l’Italia e un'altra su Europa e Nord Africa per applicare un filtro di opacità su tutti i paesi tranne l’Italia.\
                  \nHo limitato lo zoom e lo spostamento della mappa per concentrare l’attenzione dell’utente sull’Italia. Alcuni oggetti scomparivano quando l’utente effettuava uno zoom troppo ravvicinato, mostrando solo le stazioni.",
              },
              {
                type: "subtitle",
                value: "2) Server con NodeJS",
              },
              {
                type: "text",
                value:
                  "All’inizio dello sviluppo frontend non avevamo un backend, quindi ho creato un server NodeJS locale per inviare dati fittizi al frontend tramite GET (per ottenere informazioni di base sulle stazioni) e tramite socket per inviare dati asincroni ogni secondo.",
              },
              {
                type: "subtitle",
                value: "3) Grafica SVG",
              },
              {
                type: "text",
                value:
                  "Per ogni stazione erano presenti diverse pagine che mostravano dati provenienti dal server. Alcune pagine includevano grafici che rappresentavano componenti della stazione con i dati. Ho utilizzato D3.js per creare grafici SVG adattabili alle dimensioni della pagina senza perdere qualità.\
                  \nMolte pagine avevano componenti grafici simili. Per evitare codice ripetuto, per ogni tipo di componente ho creato una funzione che disegnava e personalizzava il componente usando una configurazione JSON passata dalla pagina corrente.",
              },
              {
                type: "subtitle",
                value: "4) Supporto Multilingua",
              },
              {
                type: "text",
                value:
                  "Ho utilizzato React Intl per supportare inglese e italiano. Con questa libreria ho creato due file JSON, uno per i termini italiani e uno per quelli inglesi, assegnando lo stesso set di chiavi alla traduzione corretta.\
                  \nHo poi creato una funzione globale utilizzabile in tutto il codice: si passa una chiave e la funzione restituisce la traduzione corretta in base alla lingua salvata nel local storage.\
                  \nQuando l’utente cambiava lingua, salvavo la nuova impostazione nel session storage e la pagina veniva ricaricata per aggiornare la lingua.",
              },
              {
                type: "subtitle",
                value: "5) Redux-Saga",
              },
              {
                type: "text",
                value:
                  "Per salvare i dati provenienti dal server abbiamo utilizzato Redux-Saga.\
                  \nRicevevamo dati asincroni e grazie a Redux evitavamo valori duplicati per la stessa proprietà. Inoltre, lo stato centralizzato dell’applicazione ci permetteva di gestirlo più facilmente e, con uno strumento installato su Chrome, era possibile monitorarne l’evoluzione semplificando il debug.\
                  \nCon Redux abbiamo separato i dati dall’applicazione, così il frontend non doveva gestire la connessione al server, ma solo utilizzare i dati ricevuti.\
                  \nAbbiamo implementato tutta la logica di comunicazione e recupero dati in Redux, rendendo il codice più pulito e manutenibile.",
              },
              {
                type: "subtitle",
                value: "6) Creazione JSON per i dati",
              },
              {
                type: "text",
                value:
                  "Dopo aver deciso il formato migliore per memorizzare i dati nell’applicazione, ho creato JSON con dati casuali utilizzando Python.\
                  \nHo utilizzato Python per due motivi:\
                  \n- I dati non erano completamente casuali, ma rientravano in determinati intervalli\
                  \n- Manipolavo e modificavo questi JSON molte volte, risparmiando tempo grazie a Python\
                  \nQuando abbiamo ottenuto i dati reali dai file CSV, ho utilizzato Python per elaborarli e creare JSON realistici da fornire al backend, così sapevano in quale formato inviare i dati reali.",
              },
              {
                type: "subtitle",
                value: "7) Componenti in puro CSS",
              },
              {
                type: "text",
                value:
                  "Per migliorare le performance, abbiamo evitato l’uso di script quando possibile. Ad esempio, abbiamo utilizzato accordion e toggle realizzati interamente in CSS per i filtri.",
              },
              {
                type: "subtitle",
                value: "8) Connessione MQTT",
              },
              {
                type: "text",
                value:
                  "Quando il backend è stato pronto, abbiamo provato una prima connessione con socket, ma le tecnologie del backend supportavano solo la comunicazione MQTT. Abbiamo quindi realizzato una connessione MQTT sottoscrivendo il client a un topic in cui il server inseriva i dati in coda.",
              },
              {
                type: "subtitle",
                value: "9) Grafici Funzionali SVG",
              },
              {
                type: "text",
                value:
                  "Per disegnare il grafico cartesiano di alcune funzioni complesse date le equazioni, ho utilizzato Python per calcolare un insieme di punti, poi utilizzati in React per tracciare la funzione.\
                  \nNei grafici cartesiani ho implementato due funzionalità:\
                  \n- La possibilità di trascinare e zoomare il grafico\
                  \n- La possibilità di selezionare una specifica sezione del grafico e ingrandirla",
              },
            ]

          };
        case "Accenture - Gazzetta dello Sport":
          return {
            ...project,
            description:
              "Progetto ad alte prestazioni per il sito della Gazzetta: ottimizzazione CSS/JS, componenti riusabili e test Galen.",
            links: project.links?.map((l) => ({ ...l, label: "Gazzetta dello Sport" })),
            longtext: [
              {
                type: "subtitle",
                value: "Linguaggi Utilizzati",
              },
              {
                type: "text",
                value:
                  "- *HTML*\
      \n- *CSS*\
      \n- *Sass*\
      \n- *JavaScript ES6*",
              },
              {
                type: "subtitle",
                value: "Tecnologie Utilizzate",
              },
              {
                type: "text",
                value:
                  "- *Gulp* per l’automazione dei task\
      \n- *Docker* per creare container per eseguire il progetto\
      \n- *Chrome* per testare e modificare i componenti in tempo reale\
      \n- *Visual Studio Code* come editor\
      \n- *Galen* per testare layout e design responsive\
      \n- *Jenkins* per gestire i deploy\
      \n- *Jira* per tracciare task e problemi\
      \n- *GitHub* per il repository online",
              },
              {
                type: "subtitle",
                value: "Architetture Utilizzate",
              },
              {
                type: "text",
                value:
                  "- Utilizzo parziale del framework *Bulma*\
      \n- *SMACSS* e *BEM* per strutturare e nominare le classi CSS in modo coerente",
              },
              {
                type: "subtitle",
                value: "Implementazione",
              },
              {
                type: "text",
                value:
                  "Questo è stato un progetto lungo e complesso, quindi l’ho suddiviso in sezioni più piccole basate sui task che ho gestito.\
      \nI task non sono stati eseguiti in sequenza; spesso ho lavorato su più task in parallelo. Per esempio, ho completato alcune pagine desktop, poi alcune pagine mobile, e poi altre pagine desktop.",
              },
              {
                type: "subtitle",
                value: "1) Pagine Desktop",
              },
              {
                type: "text",
                value:
                  "Inizialmente ho collaborato con un altro sviluppatore per costruire le principali pagine desktop usando HTML e Sass.\
      \nDurante lo sviluppo, abbiamo seguito linee guida chiave:\
      \n- Scrivere codice minimo per mantenere il sito leggero\
      \n- Dividere il sito in componenti riutilizzabili con CSS comune per scalabilità e manutenibilità\
      \n- Usare nomi generici per i componenti, evitando riferimenti specifici alla posizione, come 'top-media'\
      \n- Organizzare il codice seguendo i principi SMACSS e BEM\
      \n- Garantire compatibilità cross-browser e design responsive su Chrome, Firefox, Safari, IE11 e altri",
              },
              {
                type: "subtitle",
                value: "2) Pagine Mobile",
              },
              {
                type: "text",
                value:
                  "Dopo aver completato le pagine desktop, ho sviluppato le pagine mobile usando la stessa architettura. Il CSS è stato separato per migliorare le prestazioni, evitando che gli utenti desktop scaricassero stili non necessari per il mobile.",
              },
              {
                type: "subtitle",
                value: "3) Test con Galen",
              },
              {
                type: "text",
                value:
                  "Una volta completate le prime pagine, il cliente ha introdotto Galen per testare i layout.\
      \nHo avuto la responsabilità di apprendere e applicare Galen. Sebbene fosse semplice per test base, implementare test avanzati era complesso a causa della documentazione limitata e della scarsità di esempi online.\
      \nHo sfruttato le mie capacità di problem solving per creare soluzioni originali per test avanzati usando codice semplice. L’obiettivo era creare un approccio standardizzato, utilizzabile da chiunque, per test veloci delle pagine di progetto attuali e futuri.\
      \nHo utilizzato la sintassi di Galen e JavaScript per script chiave. Una guida dettagliata con problemi e soluzioni sarà condivisa una volta rimossi i dati sensibili.",
              },
              {
                type: "subtitle",
                value: "4) Integrazione con JavaScript",
              },
              {
                type: "text",
                value:
                  "Dopo aver completato la struttura HTML e CSS, altri sviluppatori hanno implementato i componenti JavaScript per rendere il sito completamente funzionante.\
      \nHo collaborato con loro per identificare le soluzioni JavaScript ottimali, aggiungendo attributi come data-target, nuove classi o transizioni in HTML o CSS quando necessario.\
      \nHo anche sviluppato componenti JavaScript complessi, incluso uno scrollbar personalizzato.",
              },
              {
                type: "subtitle",
                value: "5) Ottimizzazioni",
              },
              {
                type: "text",
                value:
                  "Oltre alle best practice per CSS e HTML, abbiamo adottato strategie aggiuntive per migliorare la velocità del sito:\
      \n- Usare un orchestratore per controllare l’ordine di caricamento degli script JavaScript\
      \n- Inserire inline il CSS per i contenuti visibili all’apertura della pagina per ridurre il tempo di caricamento iniziale",
              },
              {
                type: "subtitle",
                value: "6) Compatibilità e Correzione Bug",
              },
              {
                type: "text",
                value:
                  "Per garantire la compatibilità cross-browser e risolvere vari bug, ho ispezionato il codice su tutti i principali browser (Chrome, Firefox, Safari, Edge, IE11) e testato su diversi dispositivi utilizzando macchine virtuali per Windows e emulatori per Android e Safari.",
              },
              {
                type: "subtitle",
                value: "Conclusione",
              },
              {
                type: "text",
                value:
                  "Questo progetto è stata un’esperienza molto preziosa dalla quale ho imparato molto.\
      \nHo acquisito una comprensione approfondita su come scrivere e organizzare HTML, CSS e JavaScript per siti web performanti e manutenibili.",
              },
            ]
          };
        case "Accenture - Static Website for Financial Client":
          return {
            ...project,
            description:
              "Ho lavorato su un progetto già avviato, sviluppando diversi componenti per il sito web di un importante cliente nel settore finanziario. Il sito era strutturato secondo un approccio a “molecole”, e ogni componente è stato progettato per essere completamente responsive, funzionando perfettamente sia su desktop sia su dispositivi mobili.",
            longtext: [
              {
                type: "text",
                value:
                  "Nel mio terzo progetto presso Accenture, ho preso parte a un progetto già avviato e ho contribuito al sito web di un importante cliente nel settore finanziario.\
      \nIl sito era strutturato secondo un approccio a “molecole” e ogni molecola è stata implementata per essere completamente responsive, funzionando senza problemi sia su desktop che su dispositivi mobili.\
      \nQuesto progetto coinvolgeva un team molto ampio, e una delle principali sfide è stata coordinarsi con così tante persone. Spesso, quando affrontavo bug, non erano problemi che potevo risolvere direttamente, quindi dovevo identificare il team appropriato (backend, manutenzione o integrazione), spiegare il problema e seguire l'intero processo fino alla risoluzione completa del bug."
              },
              {
                type: "subtitle",
                value: "Linguaggi Utilizzati"
              },
              {
                type: "text",
                value:
                  "- *HTML*\
      \n- *CSS*\
      \n- *Sass*\
      \n- *JavaScript ES6*"
              },
              {
                type: "subtitle",
                value: "Tecnologie Utilizzate"
              },
              {
                type: "text",
                value:
                  "- *Gulp*\
      \n- *Chrome, Firefox, Safari e IE11* per testare e modificare i componenti in runtime\
      \n- *Visual Studio Code* come IDE\
      \n- *Git* per la gestione dei repository online\
      \n- *Webpack* per il bundling degli script"
              },
              {
                type: "subtitle",
                value: "Librerie Utilizzate"
              },
              {
                type: "text",
                value:
                  "Il progetto non richiedeva prestazioni elevate, quindi abbiamo utilizzato alcune librerie per velocizzare lo sviluppo:\
      \n- *Swiper* per implementare i carousel\
      \n- *Plyr* per un lettore multimediale semplice, accessibile e personalizzabile per YouTube e Vimeo"
              },
              {
                type: "subtitle",
                value: "Contributi Principali"
              },
              {
                type: "text",
                value:
                  "Di seguito sono descritte le principali funzionalità e componenti che ho sviluppato durante il progetto."
              },
              {
                type: "subtitle",
                value: "1) Carousel e Video"
              },
              {
                type: "text",
                value:
                  "Ho sviluppato l'HTML, il CSS e il JavaScript per un carousel utilizzando Swiper. Ho aggiunto un listener per far partire automaticamente il loop delle immagini quando l'utente non interagiva e interromperlo al passaggio del mouse.\
      \nCon Plyr, ho creato un componente personalizzato per inserire video da YouTube o Vimeo, con autoplay opzionale e modalità silenziosa.\
      \nHo integrato Plyr all'interno del carousel, in modo che i video presenti nelle slide partissero automaticamente con audio disattivato quando attivi e si interrompessero al cambio slide.\
      \nSuccessivamente, ho aggiornato il carousel principale per essere utilizzato anche all'interno della pagina, inserito in altre molecole, senza occupare l'intero schermo."
              },
              {
                type: "subtitle",
                value: "2) Ottimizzazione del JavaScript"
              },
              {
                type: "text",
                value:
                  "Sono entrato nel progetto vicino alla consegna finale, quando la maggior parte del lavoro era già completata. Il codice JavaScript era scritto da più sviluppatori senza utilizzare classi o blocchi try-catch, causando errori che interrompevano l'esecuzione poiché Gulp combinava tutti gli script in un unico file.\
      \nPer risolvere questo problema, ho collaborato con un altro sviluppatore per:\
      \n- Organizzare gli script in classi separate e istanziarle in blocchi try-catch distinti, così che un componente difettoso non fermasse gli altri.\
      \n- Sostituire Gulp con Webpack, rendendo gli script più modulari, indipendenti e il codice più robusto."
              },
              {
                type: "subtitle",
                value: "3) Autocomplete"
              },
              {
                type: "text",
                value:
                  "Ho sviluppato una barra di ricerca nell'header, attivabile tramite un pulsante, con funzionalità di completamento automatico. Un listener inviava una richiesta al server ogni volta che l'utente inseriva o cancellava caratteri. Le risposte generate costruivano una lista di suggerimenti.\
      \nLe interazioni dell'utente includevano:\
      \n- Premere Invio per avviare la ricerca e reindirizzare alla pagina dei risultati.\
      \n- Premere il pulsante di chiusura per pulire e nascondere la barra di ricerca.\
      \n- Selezionare un suggerimento con il mouse o navigando nella lista con le frecce e confermare con Invio."
              },
              {
                type: "subtitle",
                value: "4) Pagina di Ricerca"
              },
              {
                type: "text",
                value:
                  "Una volta confermata la query dall'utente, questa veniva salvata nel local storage e l'utente veniva reindirizzato alla pagina dei risultati.\
      \nIn questa pagina, ho implementato una fetch al server tramite API REST (POST con payload JSON) per mostrare i risultati.\
      \nLa grafica della lista dei risultati era complessa, composta da tre sottoliste diverse con strutture grafiche distinte. Ogni campo mostrava parametri diversi in base al JSON ricevuto dal cliente.\
      \nCome per tutto il sito, la pagina era completamente responsive e ottimizzata sia per desktop che per dispositivi mobili.\
      \nHo fatto ampio uso di Flexbox per adattare il layout a tutte le dimensioni di schermo e ho utilizzato mixin solo dove strettamente necessario per minimizzare il codice CSS."
              }
            ]
            ,
          };
        default:
          return project;
      }
    }),
  },
};
