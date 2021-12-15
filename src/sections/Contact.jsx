import ContactForm from '../components/ContactForm'
import SocialIcons from '../components/SocialIcons'

import '../scss/contact.scss'

export default function Contact() {
  return (
    <section className="contact" data-section-name="contato">
      <div className="__texts">
        <h2>Entre em contato</h2>
        <p>
          Você tem alguma dúvida? Entre em contato conosco. <br />
          Ficamos felizes em compartilhar sonhos.
        </p>
      </div>

      <ContactForm onSubmit={(data) => console.log(data)} className="__contact-form" />

      <div className="__information">
        <span> Rio de Janeiro/ RJ </span>

        <span> camillachagas_@hotmail.com</span>

        <span> (21)96955-7653</span>

        <div className="__social-icons">
          <SocialIcons />
        </div>
      </div>
    </section>
  )
}
