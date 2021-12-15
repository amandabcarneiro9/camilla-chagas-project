import { Switch, Route } from 'react-router-dom'
import MainPage from '../sections/MainPage'
import { Residencial, Comercial, Corporativo, Paisagismo } from '../pages/projectTypes'
import { Consultoria, Decoracao, Projetos, Obra } from '../pages/servicesTypes'

export default function Routes() {
  return (
    <>
      <Switch>
        <Route path="/projetos/residencial" component={Residencial} />
        <Route path="/projetos/comercial" component={Comercial} />
        <Route path="/projetos/corporativo" component={Corporativo} />
        <Route path="/projetos/paisagismo" component={Paisagismo} />
        <Route path="/servicos/consultoria" component={Consultoria} />
        <Route path="/servicos/decoracao" component={Decoracao} />
        <Route path="/servicos/projetos" component={Projetos} />
        <Route path="/servicos/obra" component={Obra} />
        <Route path="/" component={MainPage} />
      </Switch>
    </>
  )
}
