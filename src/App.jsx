import { useState } from 'react'
import './App.css'
import TarjetaDatos from './TarjetaDatos';

function App() {

  const [nombre, setNombre] = useState("");
  const [cuadro, setCuadro] = useState("");
  const [mostrarTarjeta, setMostrarTarjeta] = useState(false);

  const onChangeNombre = (e) => setNombre(e.target.value);
  const onChangeCuadro = (e) => setCuadro(e.target.value);



  const validarNombre = (nombre) => {
    const sinEspacios = nombre.trim();
    if (sinEspacios.length > 2) {
      return true;
    } else {
      return false
      ;
    }
  };

  const validarCuadro = (cuadro) => {
    if (cuadro.length > 5) {
      return true;
    } else {
      return false;
    }
  };


  const onSubmitForm = (e) => {
    e.preventDefault();
    const nombreValido = validarNombre(nombre);
    const cuadroValido = validarCuadro(cuadro);
    if (!nombreValido || !cuadroValido) {
      setMostrarTarjeta(false);
      alert("Por favor chequea que la información sea correcta");
      } else {
        setMostrarTarjeta(true);
      }
      };


  return (
    <>
      <div className="App">
        <img src= "public\DHLogo.png" className = "logo"></img>
        <h1>Primer parcial Front End III - Noviembre 23 - DH</h1>
      <h2>¿De qué cuadro sos?</h2>
      <form onSubmit={onSubmitForm}>
        <div><input
          type="text"
          placeholder="Como te llamas?"
          value={nombre}
          onChange={onChangeNombre}
        /></div>
       <div><input
          type="text"
          placeholder="De que cuadro sos?"
          value={cuadro}
          onChange={onChangeCuadro}
        /></div>
        <div><button type="submit">Enviar</button></div>
      </form>
       {mostrarTarjeta && <TarjetaDatos nombre={nombre} cuadro={cuadro} className="Card"/>}
      </div>
    </>
  )
}

export default App
