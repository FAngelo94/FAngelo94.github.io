import React from "react";
import styled from "styled-components";
import { Container } from "./style";
;

export default function PrivacyPolicy(): JSX.Element {
  return (
    <Container>
      <h1>🔒 Privacy Policy</h1>
      <small className="updated">Ultimo aggiornamento: <strong>15 gennaio 2026</strong></small>

      <h2>1. Titolare del trattamento</h2>
      <p>Il titolare del trattamento dei dati è:</p>
      <p>
        <strong>Angelo Falci</strong>
        <br />
        Sito web: <a href="https://angelofalci.com" target="_blank" rel="noreferrer">https://angelofalci.com</a>
        <br />
        Email di contatto: a.falci@live.it
      </p>

      <hr />

      <h2>2. Tipologia di dati trattati</h2>
      <p>
        Questo sito <strong>non raccoglie direttamente dati personali</strong> tramite moduli di contatto, registrazioni o commenti.
      </p>
      <p>
        Tuttavia, utilizza <strong>Google Analytics</strong>, un servizio di analisi statistica fornito da Google LLC, che raccoglie
        <strong> dati di utilizzo in forma aggregata</strong>, tra cui:
      </p>
      <ul>
        <li>indirizzo IP (parzialmente anonimizzato)</li>
        <li>dati di navigazione (pagine visitate, durata della sessione)</li>
        <li>informazioni su browser, dispositivo e sistema operativo</li>
        <li>area geografica approssimativa</li>
      </ul>
      <p>Questi dati <strong>non consentono l'identificazione diretta dell'utente</strong>.</p>

      <hr />

      <h2>3. Finalità del trattamento</h2>
      <p>I dati raccolti tramite Google Analytics vengono utilizzati esclusivamente per:</p>
      <ul>
        <li>analizzare il traffico sul sito</li>
        <li>migliorare contenuti, performance ed esperienza utente</li>
      </ul>

      <hr />

      <h2>4. Base giuridica del trattamento</h2>
      <p>
        Il trattamento dei dati avviene <strong>solo previo consenso dell'utente</strong>, espresso tramite il banner cookie.
      </p>
      
      <hr />

      <h2>5. Modalità del trattamento</h2>
      <p>
        Il trattamento avviene con strumenti informatici e telematici, nel rispetto delle misure di sicurezza previste
        dalla normativa vigente.
      </p>

      <hr />

      <h2>6. Servizi di terze parti</h2>
      <p>Il sito utilizza:</p>
      <ul>
        <li><strong>Google Analytics</strong> – Google LLC</li>
      </ul>
      <p>
        I dati possono essere trasferiti verso Paesi extra UE (in particolare Stati Uniti), nel rispetto delle garanzie
        previste dal GDPR.
      </p>
      <p>Maggiori informazioni: <a href="https://policies.google.com/privacy" target="_blank" rel="noreferrer">https://policies.google.com/privacy</a></p>

      <hr />

      <h2>7. Conservazione dei dati</h2>
      <p>
        I dati raccolti tramite Google Analytics vengono conservati per il periodo previsto dalle impostazioni del servizio
        e comunque non oltre quanto necessario al raggiungimento delle finalità indicate.
      </p>

      <hr />

      <h2>8. Diritti dell'utente</h2>
      <p>L'utente ha il diritto di:</p>
      <ul>
        <li>accedere ai propri dati</li>
        <li>chiederne la rettifica o cancellazione</li>
        <li>opporsi al trattamento</li>
        <li>revocare il consenso in qualsiasi momento</li>
        <li>proporre reclamo all'Autorità Garante per la protezione dei dati personali</li>
      </ul>
      <p>
        Per esercitare i propri diritti è possibile contattare il titolare ai recapiti indicati sopra.
      </p>

      <hr />

      <h2>9. Modifiche a questa Privacy Policy</h2>
      <p>
        Il titolare si riserva il diritto di modificare la presente informativa in qualunque momento. Le modifiche saranno
        pubblicate su questa pagina.
      </p>
    </Container>
  );
}
