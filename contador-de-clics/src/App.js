import './App.css';
import Boton from './componentes/boton';
import hondadc2 from './imagenes/dc2.png';
import Contador from './componentes/contador';
import { useState } from 'react';


function App() { 

  const [numClics, setNumClics] = useState(0);

  const manejarClic = () => {setNumClics(numClics + 1);};

  const reiniciarContador = () => {setNumClics(0);}; 

  return (
    <div className="App">
     <div className='logo'>
      <img className='logo-uno' 
        src={hondadc2}
        alt='Logo de dcdos' />
     </div>
     <div className='contenedor-principal'>
        <Contador numClics={numClics} />
        <Boton 
          texto='Clic'
          esBontonDeClic={true}
          manejarClic={manejarClic}/>
        <Boton
          texto='Reiniciar'
          esBotonDeClic={false}
          manejarClic={reiniciarContador}/>
     </div>
    </div>
  );
}

export default App;
