import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { HiOutlineArrowRight } from 'react-icons/hi2'
import PageTransition from '../components/PageTransition'
import ServiceCard from '../components/ServiceCard'
import SectionHeader from '../components/SectionHeader'
import { services, workProcess } from '../data/services'

export default function Services() {
  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container-custom">
          <SectionHeader
            label="Servizi"
            title="Come posso aiutarti"
            description="Dal sito web per la tua attività locale alle soluzioni enterprise per grandi aziende. Ogni progetto è un percorso che affrontiamo insieme."
          />
        </div>
      </section>

      {/* Services Grid */}
      <section className="pb-20">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Work Process */}
      <section className="py-20 md:py-32 bg-light-100 dark:bg-dark-800">
        <div className="container-custom">
          <SectionHeader
            label="Processo"
            title="Come lavoro"
            description="Un approccio semplice e trasparente, pensato per darti il massimo controllo sul progetto."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {workProcess.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                {/* Connector line */}
                {index < workProcess.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-gradient-to-r from-accent/50 to-transparent z-0" />
                )}

                <div className="relative z-10">
                  {/* Step number */}
                  <div className="w-16 h-16 rounded-2xl bg-accent text-dark-900 flex items-center justify-center mb-6 shadow-lg shadow-accent/25">
                    <span className="text-2xl font-display font-bold">{step.step}</span>
                  </div>

                  <h3 className="text-xl font-display font-semibold text-dark-900 dark:text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-dark-600 dark:text-light-300">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 md:py-32">
        <div className="container-custom">
          <SectionHeader
            label="FAQ"
            title="Domande frequenti"
            description="Le risposte alle domande che mi vengono fatte più spesso."
          />

          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {[
                {
                  q: 'Quanto costa un sito web?',
                  a: 'Il costo dipende dalla complessità del progetto. Dopo un primo confronto sulle tue esigenze, ti fornirò un preventivo dettagliato senza impegno.'
                },
                {
                  q: 'Quanto tempo ci vuole?',
                  a: 'Una landing page può essere pronta in 1-2 settimane. Un sito completo richiede generalmente 3-4 settimane. Tempi precisi li definiamo insieme in base al progetto.'
                },
                {
                  q: 'Posso modificare il sito da solo dopo?',
                  a: 'Certo! Ti fornirò tutte le istruzioni necessarie per aggiornare i contenuti in autonomia. Per modifiche più complesse, sono sempre disponibile.'
                },
                {
                  q: 'Il sito sarà visibile su Google?',
                  a: 'Tutti i miei siti sono ottimizzati per i motori di ricerca (SEO base). Per strategie SEO avanzate, possiamo valutare insieme un pacchetto dedicato.'
                },
                {
                  q: 'Cosa succede dopo la consegna?',
                  a: 'Resto disponibile per supporto e piccole modifiche. Per esigenze continuative, offro pacchetti di manutenzione mensile.'
                },
                {
                  q: 'Lavori anche con aziende che usano SAP?',
                  a: 'Sì! Oltre al web design, sviluppo soluzioni ABAP custom per aziende che utilizzano SAP. Report, integrazioni, ottimizzazioni.'
                }
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="card p-6"
                >
                  <h3 className="text-lg font-display font-semibold text-dark-900 dark:text-white mb-2">
                    {faq.q}
                  </h3>
                  <p className="text-dark-600 dark:text-light-300">
                    {faq.a}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-dark-900 dark:bg-dark-800 relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary-400/10 rounded-full blur-3xl" />
        </div>

        <div className="container-custom text-center">
          <motion.img
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            src="/images/avatar-presenting.png"
            alt="Omar presenting"
            className="w-32 h-auto mx-auto mb-8"
          />

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-4"
          >
            Pronto per iniziare?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-light-300 max-w-xl mx-auto mb-8"
          >
            Raccontami il tuo progetto. Ti risponderò entro 24 ore con una proposta personalizzata.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Link to="/contact" className="btn-primary text-lg px-8 py-4">
              Richiedi un preventivo
              <HiOutlineArrowRight className="w-5 h-5" />
            </Link>
            <a 
              href={`https://wa.me/393890193669?text=${encodeURIComponent('Ciao Omar! Vorrei un preventivo per un sito web.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary text-lg px-8 py-4 border-white/30 text-white hover:bg-white hover:text-dark-900"
            >
              Scrivimi su WhatsApp
            </a>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  )
}
