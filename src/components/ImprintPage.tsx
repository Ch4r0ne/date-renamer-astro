import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

export default function ImprintPage() {
  return (
    <div className="from-primary/5 via-background to-secondary/5 min-h-screen bg-gradient-to-br p-6">
      <div className="mx-auto max-w-3xl">
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
          <a href="/">
            <button
              data-testid="button-back-imprint"
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
              Imprint (Impressum)
            </h1>
            <p className="text-muted-foreground">
              Angaben gemäß § 5 Digitale-Dienste-Gesetz (DDG).
            </p>
          </div>

          <div className="bg-card rounded-[2rem] border-none shadow-lg">
            <div className="space-y-8 p-8 md:p-12">
              <section className="space-y-3">
                <h2 className="font-heading text-foreground text-xl font-bold">Diensteanbieter</h2>
                <p className="text-muted-foreground">
                  Tim Leinich
                  <br />
                  Farbgasse 10
                  <br />
                  73553 Alfdorf
                  <br />
                  Deutschland
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="font-heading text-foreground text-xl font-bold">Kontakt</h2>
                <p className="text-muted-foreground">
                  E-Mail: legal@technetpro.de
                  <br />
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="font-heading text-foreground text-xl font-bold">Projekt</h2>
                <p className="text-muted-foreground">
                  Date Renamer Toolkit Community/Open-Source Projekt.
                  <br />
                  Repository:{' '}
                  <a
                    href="https://github.com/Ch4r0ne/date-renamer"
                    className="text-primary underline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    https://github.com/Ch4r0ne/date-renamer
                  </a>
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="font-heading text-foreground text-xl font-bold">
                  Hinweis zur Streitbeilegung
                </h2>
                <p className="text-muted-foreground">
                  Ich bin nicht verpflichtet und nicht bereit, an
                  Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
                  teilzunehmen.
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
                data-testid="button-back-home-imprint"
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
