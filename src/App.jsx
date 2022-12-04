import { colors } from './styles/colors'
import { dimensions } from './styles/dimensions'
import { Text } from "./components/atoms"
import { ShapesPanel } from './components/organisms/ShapesPanel'

function App() {

  return (
    <div className="App">
        <Text color={colors.font.title} fontSize={dimensions.xl}>Ejercicio useState y useEffect</Text>
        <ShapesPanel></ShapesPanel>
    </div>
  )
}

export default App
