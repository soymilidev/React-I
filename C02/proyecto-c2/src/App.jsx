import reactLogo from './assets/react.svg'
import './App.css'
import Greeting from './components/pure/greeting'
import GreetingFunction from './components/pure/greetingFunction'


function App() {

  return (
    <div className="App">
          <img src={reactLogo} className="logo react" alt="React logo" />
          {/* En .jsx los comentarios se ponen entre llaves, planteamos contenido .js */}
          {/* Componente propio Gretting.jsx */}
          {/* Recordar cerrar nuestro componente para evitar errores. Luego importarlo */}

          {/* <Greeting name="Susana"> </Greeting> */}
          <GreetingFunction name="Juana" ></GreetingFunction>
    </div>
  )
}

export default App