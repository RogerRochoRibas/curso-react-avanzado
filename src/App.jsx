import { colors } from './styles/colors'
import { dimensions } from './styles/dimensions'
import { Text } from "./components/atoms"
import { InteractiveShape} from "./components/molecules"

function App() {

  return (
    <div className="App">
        <Text color={colors.font.title} fontSize={dimensions.xl}>Ejercicio useState y useEffect</Text>
        <InteractiveShape defaultColor="#0000ff" defaultSize={100}>▲</InteractiveShape>
        <InteractiveShape defaultColor="#00ff15" defaultSize={100}>●</InteractiveShape>
        <InteractiveShape defaultColor="#FF3333" defaultSize={100}>■</InteractiveShape>
    </div>
  )
}

export default App
