import { useState } from 'react'

import SocialIcons from '../components/SocialIcons'
import '../scss/footer.scss'

export default function Footer() {
  const [email, setEmail] = useState('')

  function onFormSubmit(event) {
    event.preventDefault()
    console.log(email)
  }
  return (
    <div className="footer">
      <h2>fique por dentro das novidades! Receba tudo no seu e-mail !</h2>
      <span className="__title">Formulário de Assinatura</span>

      <form action="" onSubmit={onFormSubmit}>
        <input type="email" placeholder="Endereço de email" onChange={(e) => setEmail(e.currentTarget.value)} />
        <input type="submit" value="Enviar" />
      </form>

      <div className="__information">
        <span className="__phone">(21)96955.7653</span>
        <span className="__place">Rio de Janeiro/RJ</span>
        <SocialIcons />
        <span className="__made-by">©2021 por Amanda Carneiro. WebDev</span>
      </div>
    </div>
  )
}
