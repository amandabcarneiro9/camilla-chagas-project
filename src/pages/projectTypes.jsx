import Project from '../components/Project'

import residencial from '../img/residencial2.jpg'
import comercial from '../img/comercial.jpg'
import corporativo from '../img/corporativo2.jpg'
import paisagismo from '../img/paisagismo.jpg'

export function Residencial() {
  return (
    <Project
      nameProject={'Residencial'}
      image={residencial}
      imageName={'projeto de sala'}
      span={'Aberto e convidativo'}
    />
  )
}

export function Comercial() {
  return (
    <Project
      nameProject={'Comercial'}
      image={comercial}
      imageName={'projeto de sala comercial'}
      span={'Chique e sofisticado(a)'}
      paragraph={
        'Este local foi todo repensado para criar um espaço atemporal gracioso e interessante com elementos de decoração em camadas. O resultado final superou as expectativas dos clientes e tornou-se um ponto focal do projeto.'
      }
    />
  )
}

export function Corporativo() {
  return (
    <Project
      nameProject={'Corporativo'}
      image={corporativo}
      imageName={'projeto de sala corporativa'}
      span={'Elegante e moderno(a)'}
      paragraph={
        'Neste espaço, uma mistura criativa de linhas e curvas foi inserida na estrutura e no design existentes, destacando habilmente o antigo e incorporando o novo. O resultado é uma área equilibrada e bonita, em harmonia com o ambiente.'
      }
    />
  )
}

export function Paisagismo() {
  return (
    <Project
      nameProject={'Paisagismo'}
      image={paisagismo}
      imageName={'projeto de paisagismo'}
      span={'Aberto e convidativo'}
      paragraph={
        'Os proprietários do local procuraram manter a arquitetura, mas suavizar a formalidade. Isso foi feito com o uso inteligente de móveis elegantes, formas e cores inovadoras, que transformaram drasticamente o espaço.'
      }
    />
  )
}
