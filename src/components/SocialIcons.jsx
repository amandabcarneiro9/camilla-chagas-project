import '../scss/socialIcons.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function SocialIcons() {
  return (
    <div className="__media-links">
      <a href="https://www.instagram.com/caainteriores/">
        <FontAwesomeIcon icon={['fab', 'instagram']} />
      </a>
      <a href="https://www.facebook.com/caainteriores/">
        <FontAwesomeIcon icon={['fab', 'facebook-f']} />
      </a>
      <a href="https://api.whatsapp.com/send?phone=5521969557653">
        <FontAwesomeIcon icon={['fab', 'whatsapp']} />
      </a>
    </div>
  )
}
