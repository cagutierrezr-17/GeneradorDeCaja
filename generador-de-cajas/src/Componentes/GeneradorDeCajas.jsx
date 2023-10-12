import { useState } from "react";
import "../Componentes/GeneradorDeCajas.css"

const GeneradorCajas = () => {

  const [colores, setColores] = useState([]);
  const [ancho, setAncho] = useState("");
  const [alto, setAlto] = useState("");
  const [nombreColor, setNombreColor] = useState("");
  const [error, setError] = useState("");

  const agregarColor = () => {
    if (nombreColor && ancho && alto) {
      const TempData = [...colores];
      TempData.push({ color: nombreColor, width: ancho, height: alto });
      setColores(TempData);

      setNombreColor("");
      setAncho("");
      setAlto("");
      setError("");
    } else {
      setError("Para completar una caja, complete todos los campos")
    }
  }

  const actColor = () => {
    return (colores.map((objeto, index) => {
      return <div
        key={index}
        className="box"
        style={{ background: objeto.color, width: `${objeto.width}px`, height: `${objeto.height}px` }}>
      </div>
    })
    );
  }

  return (
    <div>
      <div>
        <div className="title">
          <h1>Generador de Cajas de Colores</h1>
        </div>
        <div className="conten">
          <label>Color: </label>
          <input
            placeholder=" Ingresar color en ingles"
            type="text"
            value={nombreColor}
            onChange={(e) => { setNombreColor(e.target.value) }} />
          <input
            placeholder=" Pixeles ancho"
            type="number"
            value={ancho}
            onChange={(e) => { setAncho(parseInt(e.target.value)) }} />
          <input
            placeholder=" Pixeles alto"
            type="number"
            value={alto}
            onChange={(e) => { setAlto(parseInt(e.target.value)) }} />
          <button onClick={agregarColor}>Agregar Caja</button>
        </div>
        <p>{error}</p>
        <div className="contenedor-box">
          {actColor()}
        </div>
      </div>

    </div>
  );
}

export default GeneradorCajas;