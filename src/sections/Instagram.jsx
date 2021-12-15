import '../scss/instagram.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { photo1, photo2 } from '../components/instagramPosts'

export default function Instagram() {
  return (
    <div className="instagram" data-section-name="instagram">
      <a href="instagram.com/caainteriores/">
        <FontAwesomeIcon className="__icon" icon={['fab', 'instagram-square']} />
      </a>
      <span className="__title">Nosso Instagram</span>
      <div className="__posts">
        <div dangerouslySetInnerHTML={{ __html: photo1 }} className="__post"></div>
        <div dangerouslySetInnerHTML={{ __html: photo2 }} className="__post"></div>
        <div dangerouslySetInnerHTML={{ __html: photo1 }} className="__post"></div>
        <div dangerouslySetInnerHTML={{ __html: photo2 }} className="__post"></div>
        {/* <div dangerouslySetInnerHTML={{ __html: photo1 }} className="__post"></div> */}
      </div>
    </div>
  )
}
