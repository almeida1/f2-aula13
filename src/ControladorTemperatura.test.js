import { render, fireEvent, screen } from "@testing-library/react";
import App from "./App";
import ControladorTemperatura from "./componentes/ControladorTemperatura";

test("req01ct01 - verificar se o titulo foi apresentado na integração", () => {
  //dado que o componente foi inicializado
  render(<App />);
  //quando consulto a ocorrencia do titulo na tela
  const textElement = screen.getByText(/controlador de temperatura/i);
  //retorna titulo encontrado
  expect(textElement).toBeInTheDocument();
});
test("req01ct02- verifica o estado do contador na inicializacao", () => {
  //dado que o componente foi inicializado
  render(<ControladorTemperatura />);
  //quando consulto o valor inicial da temperatura
  const valorContador = Number(screen.getByTestId("temperatura").textContent);
  //entao a temperatura deve ser zero
  expect(valorContador).toBe(0);
});
test("req01ct03 - o valor da temperatura deve incrementar de 1 no click do botao", () => {
  //dado que o componente foi inicializado
  render(<ControladorTemperatura />);
  const btnAumenta = screen.getByRole("button", { name: "Incremento" });
  //quando clico no botao incremento
  fireEvent.click(btnAumenta);
  const temperaturaAtual = Number(
    screen.getByTestId("temperatura").textContent
  );
  //entao o valor da temperatura eh aumentado de um
  expect(temperaturaAtual).toEqual(1);
});
test("req02ct01 - o valor da temperatura deve decrementar de 1 no click do botao", () => {
  //dado que o controlador foi inicializado com zero
  render(<ControladorTemperatura />);
  const btnDecrementa = screen.getByText("Decremento");
  //quando o usuario efetua um click no botao
  fireEvent.click(btnDecrementa);
  const temperaturaAtual = Number(
    screen.getByTestId("temperatura").textContent
  );
  //entao retorna -1
  expect(temperaturaAtual).toEqual(-1);
});
test("req03ct01 - o botao reset deve registrar zero quando pressionado", () => {
  render(<ControladorTemperatura />);
  const btnRestart = screen.getByText("Reset");
  fireEvent.click(btnRestart);
  const temperaturaAtual = Number(
    screen.getByTestId("temperatura").textContent
  );
  expect(temperaturaAtual).toEqual(0);
});
test("req01ct04 - o valor do contador deve incrementar de 1 a cada click do botao", () => {
  render(<ControladorTemperatura />);
  const btnIcrementa = screen.getByText("Incremento");
  fireEvent.click(btnIcrementa);
  fireEvent.click(btnIcrementa);
  const valorTemperatura = Number(
    screen.getByTestId("temperatura").textContent
  );
  expect(valorTemperatura).toEqual(2);
});
