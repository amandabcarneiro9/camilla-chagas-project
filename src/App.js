import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'

import { BrowserRouter } from 'react-router-dom'

import Header from './sections/header'
import Footer from './sections/Footer'
import Routes from './sections/Routes'

import './scss/app.scss'

library.add(fab, far, fas)

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Header />
        <Routes />
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
