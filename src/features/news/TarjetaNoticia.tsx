

import React from 'react';
import * as styled from "./styled";


interface TarjetaNoticiaProps {
  id: number;
  titulo: string;
  descripcion: string;
  fecha: number | string;
  esPremium: boolean;
  imagen: string;
  descripcionCorta?: string;
  onClick: () => void;
}

const TarjetaNoticia: React.FC<TarjetaNoticiaProps> = ({ id, titulo, descripcion, fecha, esPremium, imagen, descripcionCorta, onClick }) => {
  return (
    <styled.TarjetaNoticia key={id} onClick={onClick}>
      <styled.ImagenTarjetaNoticia src={imagen} />
      <styled.TituloTarjetaNoticia>{titulo}</styled.TituloTarjetaNoticia>
      <styled.FechaTarjetaNoticia>{fecha}</styled.FechaTarjetaNoticia>
      <styled.DescripcionTarjetaNoticia>{descripcionCorta}</styled.DescripcionTarjetaNoticia>
      <styled.BotonLectura>Ver más</styled.BotonLectura>
    </styled.TarjetaNoticia>
  );
};

export default TarjetaNoticia;
