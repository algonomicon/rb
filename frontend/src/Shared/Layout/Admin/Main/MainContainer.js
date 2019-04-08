import { createComponent } from 'inferno-fela'

const Main = createComponent(() => ({
  gridArea: 'main',
  background: 'white',
  padding: '1.5rem'
}))

const MainContainer = (props) => (
  <Main>{props.children}</Main>
)

export default MainContainer