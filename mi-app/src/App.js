import './App.css';
import Testimonio from './componentes/Testimonio.js';

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
      <h1>Un poco de ellos</h1>
      <Testimonio
        nombre='Denji'
        cargo='Cazador de Demonios'
        testimonio='Antes de fusionar su corazón con Pochita, a Denji le faltaba el ojo derecho que era cubierto por un parche y varios otros órganos no esenciales, incluidos un testículo y un riñón.
        '
        imagen='denji' />
      <Testimonio
        nombre='Gyro Zeppeli'
        cargo='Jinete'
        testimonio='Un maestro de la técnica Spin que usa sus habilidades para competir en una carrera de caballos cruzando Estados Unidos. ¡Es todo un personaje extravagante y lleno de estilo!'
        imagen='giro' />
      <Testimonio
        nombre='Kanye West'
        cargo='Rapero'
        testimonio='I like some of the Gaga songs; What the fuck does she know about cameras?'
        imagen='ye' />
      </div>
    </div>
  );
}

export default App;
