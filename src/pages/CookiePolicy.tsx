import React from "react";
import { Container } from "./style";

export default function CookiePolicy(): JSX.Element {
  return (
    <Container>
      <h1>🍪 Cookie Policy</h1>
      <small className="updated">Ultimo aggiornamento: <strong>15/01/2026</strong></small>

         <h2>1. Cosa sono i cookie</h2>
         <p>
           I cookie sono piccoli file di testo che i siti visitati inviano al dispositivo dell'utente, dove vengono
           memorizzati per essere poi ritrasmessi agli stessi siti alla visita successiva.
         </p>
         
         <hr />
         
         <h2>2. Tipologie di cookie utilizzati</h2>
         <h3>Cookie tecnici</h3>
         <p>
           Questo sito utilizza cookie tecnici necessari al corretto funzionamento del sito. Questi cookie
           <strong> non richiedono il consenso dell'utente</strong>.
         </p>
         
         <hr />
         
         <h3>Cookie di analisi (Google Analytics)</h3>
         <p>
           Il sito utilizza <strong>Google Analytics</strong> per raccogliere informazioni statistiche in forma aggregata sull'uso del sito.
         </p>
         <p>I cookie di Google Analytics consentono di:</p>
         <ul>
           <li>capire come gli utenti utilizzano il sito</li>
           <li>migliorare contenuti e prestazioni</li>
         </ul>
         <p>
           Gli indirizzi IP vengono <strong>anonimizzati</strong> e i dati non vengono utilizzati per identificare l'utente.
         </p>
         <p>
           Questi cookie vengono installati <strong>solo dopo il consenso dell'utente</strong>.
         </p>
         
         <hr />
         
         <h2>3. Gestione del consenso</h2>
         <p>
           Al primo accesso al sito, l'utente può:
         </p>
         <ul>
           <li>accettare i cookie di analisi</li>
           <li>rifiutarli</li>
           <li>modificare le proprie preferenze in qualsiasi momento</li>
         </ul>
      
        <hr />

        <h2>4. Come disabilitare i cookie dal browser</h2>
        <p>
          L'utente può inoltre gestire o disabilitare i cookie direttamente dalle impostazioni del proprio browser.
          La disabilitazione dei cookie di analisi non compromette il corretto funzionamento del sito.
        </p>

        <hr />

        <h2>5. Cookie di terze parti</h2>
        <p>
          I cookie di Google Analytics sono gestiti da Google LLC.
        </p>
        <p>Per maggiori informazioni:</p>
        <p>
          <a href="https://policies.google.com/privacy" target="_blank" rel="noreferrer">https://policies.google.com/privacy</a>
        </p>

        <hr />

        <h2>6. Modifiche alla Cookie Policy</h2>
        <p>
          La presente Cookie Policy può essere soggetta a modifiche nel tempo. Le modifiche saranno pubblicate su questa pagina.
        </p>
         
    </Container>
  );
}
