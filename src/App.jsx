
import styled from 'styled-components'
import { GlobalStyles } from './index'
import { Device } from './styles/breakpoints'

function App() {

  return (
    <div>
      <Container>
        <GlobalStyles />
        <section className="contentSidebar">Sidebar</section>
        <section className="contentMenuHamburger">Menu</section>
        <section className="contentRouters">Routers</section>
        </Container>
    </div>
  )
}

const Container = styled.main `
  display: grid;
  grid-template-columns: 1fr;

  .contentSidebar {
    display: none;
    background-color: #7b057b;
  }
  .contentMenuHamburger {
    position: absolute;
    background-color: #037403;
  }

  .contentRouters {
    background-color: #06188c;
    grid-column: 1;
    width: 100%;
  }

  @media ${Device.tablet} {
    grid-template-columns: 88px 1fr;

    .contentSidebar {
      display: initial;
    }
    .contentMenuHamburger {
      display: none;
    }
    .contentRouters {
      grid-column: 2;
    }
  }
`
export default App
