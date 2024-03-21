import './App.css';
import integradc2 from './imagen/dc2.png';
import ListaDeTareas from './componentes/ListaDeTareas';

function App() {
  return (
    <div className='aplicacion-tareas'>
      <div className='logo-contenedor'>
        <img
          src={integradc2} className='integralogo' alt='dc2' />
      </div>
      <div className='tareas-lista-principal'>
        <h1>Mis Tareas</h1>
        <ListaDeTareas />
      </div>
    </div>
  );
}

export default App;
