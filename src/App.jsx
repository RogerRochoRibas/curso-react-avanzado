import { colors } from './styles/colors'
import { dimensions } from './styles/dimensions'
import { Text } from "./components/atoms"
import { ShapeInteractive} from "./components/molecules"

function App() {

  return (
    <div className="App">
        <Text color={colors.font.title} fontSize={dimensions.xl}>Ejercicio useState y useEffect</Text>
        <ShapeInteractive>▲</ShapeInteractive>
    </div>
  )
}

export default App
