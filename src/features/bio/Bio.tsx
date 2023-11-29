import { useState } from "react";
import { NombresSimpsons, INFO_SIMPSONS } from "./constants";
import {
  ButtonsContainer,
  BioContainer,
  BioDescription,
  BioImage,
  Button,
  BioName
} from "./styled";

// Componente funcional Bio
const Bio = () => {
  // Estado para almacenar la información del personaje activo
  const [bioActiva, setBioActiva] = useState(
    INFO_SIMPSONS[NombresSimpsons.BART]
  );

  // Función para manejar el clic en los botones y actualizar la bio activa
  const onClick: (nombre: NombresSimpsons) => void = (nombre) =>
    setBioActiva(INFO_SIMPSONS[nombre]);

  /**
   * Función que renderiza los botones con los nombres de los personajes
   * y permite cambiar los estilos del botón del personaje seleccionado.
   * @returns {HTMLElement}
   */
  const crearBotones = () => {
    return Object.keys(INFO_SIMPSONS).map((nombre: string) => (
      <Button
        key={nombre as string}
        onClick={() => onClick(nombre as NombresSimpsons)}
        active={bioActiva.id === nombre}
      >
        {nombre}
      </Button>
    ));
  };

  // Renderización del componente Bio
  return (
    <BioContainer>
      {/* Contenedor de los botones */}
      <ButtonsContainer>{crearBotones()}</ButtonsContainer>
      <div>
        <div>
          {/* Imagen del personaje */}
          <BioImage src={bioActiva.image} alt={bioActiva.nombre} />
        </div>
        <div>
          {/* Nombre del personaje */}
          <BioName>{bioActiva.nombre}</BioName>
          {/* Descripción del personaje */}
          <BioDescription>{bioActiva.descripcion}</BioDescription>
        </div>
      </div>
    </BioContainer>
  );
};

export default Bio;
