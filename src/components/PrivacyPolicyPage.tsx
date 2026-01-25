import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

export default function PrivacyPolicyPage() {
  return (
    <div className="from-primary/5 via-background to-secondary/5 min-h-screen bg-gradient-to-br p-6">
      <div className="mx-auto max-w-3xl">
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
          <a href="/">
            <button
              data-testid="button-back-privacy"
              className="hover:bg-secondary/20 mb-4 rounded-full p-2 transition-colors"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="space-y-8"
        >
          <div>
            <h1 className="font-heading text-foreground mb-4 text-4xl font-bold md:text-5xl">
              Privacy Policy (Datenschutzerklärung)
            </h1>
            <p className="text-muted-foreground">
              Der Schutz deiner Daten ist mir wichtig. Nachfolgend informiere ich dich darüber,
              welche personenbezogenen Daten beim Besuch dieser Website verarbeitet werden und zu
              welchen Zwecken.
            </p>
          </div>

          <div className="bg-card rounded-[2rem] border-none shadow-lg">
            <div className="space-y-8 p-8 md:p-12">
              <section className="space-y-3">
                <h2 className="font-heading text-foreground text-xl font-bold">
                  1. Verantwortlicher (Art. 13 DSGVO)
                </h2>
                <p className="text-muted-foreground">
                  Tim Leinich
                  <br />
                  Farbgasse 10
                  <br />
                  73553 Alfdorf
                  <br />
                  Deutschland
                  <br />
                  E-Mail: legal@technetpro.de
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="font-heading text-foreground text-xl font-bold">
                  2. Hosting über GitHub Pages &amp; Server-Logfiles
                </h2>
                <p className="text-muted-foreground">
                  Diese Website wird über GitHub Pages bereitgestellt (GitHub). Beim Aufruf der
                  Seiten werden technisch bedingt Server-Logfiles verarbeitet (z. B. IP-Adresse,
                  Datum und Uhrzeit des Zugriffs, aufgerufene Ressource, User-Agent, Referrer-URL).
                  Weitere Informationen findest du in der{' '}
                  <a
                    href="https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement"
                    className="text-primary underline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub Privacy Statement
                  </a>
                  .
                </p>
                <p className="text-muted-foreground">
                  Zweck: Betrieb, Auslieferung, Stabilität, Fehleranalyse sowie Schutz vor
                  Missbrauch/Angriffen.
                  <br />
                  Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse am sicheren
                  Betrieb).
                  <br />
                  Empfänger: GitHub, Inc. als Hosting-Anbieter.
                  <br />
                  Hinweis Drittland: GitHub verarbeitet Daten auch in den USA; GitHub gibt an, nach
                  dem EU-U.S. Data Privacy Framework (DPF) zertifiziert zu sein.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="font-heading text-foreground text-xl font-bold">3. Kontaktaufnahme</h2>
                <p className="text-muted-foreground">
                  Wenn du mich per E-Mail kontaktierst, verarbeite ich deine Angaben
                  (E-Mail-Adresse, Inhalt der Nachricht) ausschließlich zur Bearbeitung der Anfrage.
                  Die Bereitstellung der Daten ist nicht gesetzlich oder vertraglich erforderlich,
                  ohne diese Angaben kann die Anfrage jedoch nicht bearbeitet werden.
                </p>
                <p className="text-muted-foreground">
                  Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche Kommunikation) oder
                  Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an effizienter Kommunikation).
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="font-heading text-foreground text-xl font-bold">
                  4. Drittanbieter-Links (GitHub)
                </h2>
                <p className="text-muted-foreground">
                  Diese Website verlinkt auf GitHub (z. B. Repository, Releases). Beim Anklicken
                  eines Links gelten die Datenschutzbestimmungen von GitHub.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="font-heading text-foreground text-xl font-bold">
                  5. Lokale Speicherung
                </h2>
                <p className="text-muted-foreground">
                  Soweit diese Website Funktionen nutzt, die Daten lokal im Browser speichern (z. B.
                  UI-Einstellungen), verbleiben diese Daten auf deinem Endgerät und werden nicht
                  automatisch an mich übermittelt.
                </p>
                <p className="text-muted-foreground">
                  Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an
                  nutzerfreundlicher Bereitstellung) oder Art. 6 Abs. 1 lit. b DSGVO (wenn für eine
                  von dir gewünschte Funktion erforderlich).
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="font-heading text-foreground text-xl font-bold">
                  6. Cookies / Endgerätezugriffe
                </h2>
                <p className="text-muted-foreground">
                  Diese Website setzt nach aktuellem Stand keine Analyse- oder Marketing-Cookies
                  ein. Für nicht technisch erforderliche Cookies/Technologien wäre eine Einwilligung
                  nach § 25 TDDDG erforderlich.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="font-heading text-foreground text-xl font-bold">
                  7. Rechte der betroffenen Personen
                </h2>
                <p className="text-muted-foreground">
                  Du hast das Recht auf Auskunft (Art. 15 DSGVO), Berichtigung (Art. 16), Löschung
                  (Art. 17), Einschränkung (Art. 18), Datenübertragbarkeit (Art. 20) sowie
                  Widerspruch (Art. 21). Zudem hast du ein Beschwerderecht bei einer
                  Aufsichtsbehörde (Art. 77 DSGVO).
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="font-heading text-foreground text-xl font-bold">8. Speicherdauer</h2>
                <p className="text-muted-foreground">
                  Server-Logfiles werden nur so lange gespeichert, wie es für Betrieb, Sicherheit
                  und Fehleranalyse erforderlich ist. Anfragen per E-Mail speichere ich solange,
                  wie es zur Bearbeitung erforderlich ist oder gesetzliche Aufbewahrungspflichten
                  bestehen.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="font-heading text-foreground text-xl font-bold">9. Datensicherheit</h2>
                <p className="text-muted-foreground">
                  Die Übertragung erfolgt verschlüsselt (HTTPS/TLS). Zusätzlich setze ich
                  angemessene technische und organisatorische Maßnahmen zur Absicherung der Website
                  ein.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="font-heading text-foreground text-xl font-bold">
                  10. Keine automatisierte Entscheidungsfindung
                </h2>
                <p className="text-muted-foreground">
                  Eine automatisierte Entscheidungsfindung einschließlich Profiling findet nicht
                  statt.
                </p>
              </section>

              <div className="border-border/40 text-muted-foreground border-t pt-4 text-sm">
                Stand: 20.01.2025
              </div>
            </div>
          </div>

          <div className="text-center">
            <a href="/">
              <button
                data-testid="button-back-home-privacy"
                className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 py-2 font-bold"
              >
                Back to Home
              </button>
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
