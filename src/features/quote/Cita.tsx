import { useState } from "react";
import { shallowEqual } from "react-redux";
import {
  Boton,
  Input,
  AutorCita,
  ContenedorCita,
  TextoCita
} from "./styled";
import {
  useAppSelector,
  useAppDispatch
} from "../../app/hooks";
import {
  obtenerCitaDelEstado,
  limpiar,
  obtenerEstadoDelPedido,
  obtenerCitaDeLaAPI,
} from "./citaSlice";
import { obtenerMensaje } from "./utils";
import * as Styled from "./styled";

// Componente funcional Cita
function Cita() {
  // Estado local para el valor del input
  const [valorInput, setValorInput] = useState("");

  // Selección de datos del estado global usando react-redux hooks
  const { cita = "", personaje = "" } =
    useAppSelector(obtenerCitaDelEstado, shallowEqual) || {};
  const estadoPedido = useAppSelector(obtenerEstadoDelPedido);

  // Obtener el despachador de acciones de Redux
  const dispatch = useAppDispatch();

  // Manejadores de eventos para los botones
  const onClickObtenerCita = () => dispatch(obtenerCitaDeLaAPI(valorInput));
  const onClickBorrar = () => {
    dispatch(limpiar());
    setValorInput("");
  };

  // Renderización del componente Cita
  return (
    <Styled.ContenedorCita>
      {/* Mostrar el texto de la cita */}
      <Styled.TextoCita>{obtenerMensaje(cita, estadoPedido)}</Styled.TextoCita>
      {/* Mostrar el autor de la cita */}
      <Styled.AutorCita>{personaje}</Styled.AutorCita>
      {/* Input para ingresar el nombre del autor */}
      <Styled.Input
        aria-label="Author Cita"
        value={valorInput}
        onChange={(e) => setValorInput(e.target.value)}
        placeholder="Ingresa el nombre del autor"
      />
      {/* Botón para obtener la cita */}
      <Styled.Boton
        aria-label={valorInput ? "Obtener Cita" : "Obtener cita aleatoria"}
        onClick={onClickObtenerCita}
      >
        {valorInput ? "Obtener Cita" : "Obtener cita aleatoria"}
      </Styled.Boton>
      {/* Botón para borrar la cita */}
      <Boton aria-label="Borrar" onClick={onClickBorrar} secondary={true}>
        Borrar
      </Boton>
    </Styled.ContenedorCita>
  );
}

export default Cita;
