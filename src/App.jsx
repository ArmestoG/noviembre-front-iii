import { useState } from 'react'
import './App.css'

function App() {

  const [nombre, setNombre] = useState("");
  const [cuadro, setCuadro] = useState("");

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
      alert("Por favor chequea que la información sea correcta");
      } else {
      alert(`Bienvenido ${nombre}, aguante ${cuadro}`);
      }
      };


  return (
    <>
      <div className="App">
      <h2>¿De qué cuadro sos?</h2>
      <form onSubmit={onSubmitForm}>
        <input
          type="text"
          placeholder="Como te llamas?"
          value={nombre}
          onChange={onChangeNombre}
        />
        <input
          type="text"
          placeholder="De que cuadro sos?"
          value={cuadro}
          onChange={onChangeCuadro}
        />
        <button type="submit">Enviar</button>
      </form>
      </div>
    </>
  )
  
}

export default App
