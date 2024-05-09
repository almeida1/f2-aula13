import { useState } from "react";
import "./styles.css";
function ControladorTemperatura() {
  const valorInicial = 0;
  const [temperatura, setTemperatura] = useState(valorInicial);
  function aumentaTemperatura() {
    setTemperatura((prev) => prev + 1);
  }
  function diminuiTemperatura() {
    setTemperatura((prev) => prev - 1);
  }
  function restart() {
    setTemperatura(valorInicial);
  }
  return (
    <div>
      <h3 className="titulo"> Controlador de Temperatura </h3>
      {/* define um rotulo para identificar a variavel que deve ser validada */}
      <p data-testid="temperatura"> {temperatura}</p>
      <div>
        <button id="btnAumenta" className="button" onClick={aumentaTemperatura}>
          Incremento
        </button>
        <button id="btnDiminui" className="button" onClick={diminuiTemperatura}>
          Decremento
        </button>
        <button id="btnRestart" className="button" onClick={restart}>
          Reset
        </button>
      </div>
    </div>
  );
}
export default ControladorTemperatura;
