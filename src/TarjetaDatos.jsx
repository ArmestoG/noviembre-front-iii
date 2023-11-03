import PropTypes from 'prop-types';

function TarjetaDatos({ nombre, cuadro }) {
    return (
      <div className="tarjeta">
        <h3>Bienvenido {nombre}</h3>
        <h3>Aguante {cuadro}</h3>
      </div>
    );
  }
  
  TarjetaDatos.propTypes = {
    nombre: PropTypes.string.isRequired,
    cuadro: PropTypes.string.isRequired,
  };

  export default TarjetaDatos;