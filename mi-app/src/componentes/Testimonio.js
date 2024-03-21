import '../stylesheets/Testimonio.css'

function Testimonio(props){
 return(
  <div className='contenedor-testimonio'>
    <img 
      className='imagen-testimonio'
      src={require(`../imagenes/testi-${props.imagen}.png`)} alt='Foto de Denji' />
      <div className='contenedor-texto-testimonio'>
        <p className='nombre-testimonio'><strong>{props.nombre}</strong>
        </p>
        <p className='cargo-testimonio'>{props.cargo}</p>
        <p className='texto-testimonio'>"{props.testimonio}"</p>
      </div>
  </div>
 );       
}

export default Testimonio;