import consultoria from '../img/consultoria.jpg'
import decoração from '../img/decoracao.jpg'
import projetos from '../img/projetosIn.jpg'
import obras from '../img/obras.jpg'

import Project from '../components/Project'

export function Consultoria() {
  return (
    <Project
      nameProject={'Consultoria'}
      image={consultoria}
      imageName={'pessoa com as mãos no computador'}
      span={'Aberto e convidativo'}
      paragraph={
        'Os proprietários do local procuraram manter a arquitetura, mas suavizar a formalidade. Isso foi feito com o uso inteligente de móveis elegantes, formas e cores inovadoras, que transformaram drasticamente o espaço.'
      }
    />
  )
}

export function Decoracao() {
  return (
    <Project
      nameProject={'Decoração Express'}
      image={decoração}
      imageName={'parte externa decorada de uma casa'}
      span={'DECORAÇÃO EXPRESS'}
      paragraph={
        'Este local foi todo repensado para criar um espaço atemporal gracioso e interessante com elementos de decoração em camadas. O resultado final superou as expectativas dos clientes e tornou-se um ponto focal do projeto.'
      }
    />
  )
}

export function Projetos() {
  return (
    <Project
      nameProject={'Projeto de interiores'}
      image={projetos}
      imageName={'partes de um projeto'}
      span={'Elegante e moderno(a)'}
      paragraph={
        'Neste espaço, uma mistura criativa de linhas e curvas foi inserida na estrutura e no design existentes, destacando habilmente o antigo e incorporando o novo. O resultado é uma área equilibrada e bonita, em harmonia com o ambiente.'
      }
    />
  )
}

export function Obra() {
  return (
    <Project
      nameProject={'obras'}
      image={obras}
      imageName={'mesa com capacete'}
      span={'Aberto e convidativo'}
      paragraph={
        'Os proprietários do local procuraram manter a arquitetura, mas suavizar a formalidade. Isso foi feito com o uso inteligente de móveis elegantes, formas e cores inovadoras, que transformaram drasticamente o espaço.'
      }
    />
  )
}
