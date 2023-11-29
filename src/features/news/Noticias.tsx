import React, { useEffect, useState } from "react";
import * as Styled from "./styled";
import TarjetaNoticia from "./TarjetaNoticia";
import Modal from "./Modal";
import { INoticiasNormalizadas } from "./types";
import informacion from "./Informacion";

// Componente funcional Noticias
const Noticias = () => {
  // Estado local para almacenar las noticias y el estado del modal
  const [noticias, setNoticias] = useState<INoticiasNormalizadas[]>([]);
  const [modal, setModal] = useState<INoticiasNormalizadas | null>(null);

  // Efecto para cargar las noticias al montar el componente
  useEffect(() => {
    informacion().then((res) => setNoticias(res));
  }, []);

  // Manejador de clic en una tarjeta de noticia para abrir el modal
  const onClickTarjeta = (n: INoticiasNormalizadas) => {
    setModal(n);
  };

  // Manejador de clic en el botón de cerrar del modal
  const onClickCloseButton = () => {
    setModal(null);
  };

  // Manejador de clic en el botón de suscribir del modal
  const onClickModalSuscribir = () => {
    // Simular una suscripción y cerrar el modal después de un segundo
    setTimeout(() => {
      alert("¡Suscripto!");
      setModal(null);
    }, 1000);
  };

  // Renderización del componente Noticias
  return (
    <Styled.ContenedorNoticias>
      {/* Título de la sección de noticias */}
      <Styled.TituloNoticias>Noticias de los Simpsons</Styled.TituloNoticias>
      {/* Lista de tarjetas de noticias */}
      <Styled.ListaNoticias>
        {noticias !== null &&
          noticias.map((n) => (
            <TarjetaNoticia key={n.id} {...n} onClick={() => onClickTarjeta(n)} />
          ))}
        {/* Renderizar el modal si modal no es nulo */}
        {modal !== null && (
          <Modal
            modal={modal}
            setModal={setModal}
            onClick={onClickCloseButton}
            onClicKSuscribir={onClickModalSuscribir}
          />
        )}
      </Styled.ListaNoticias>
    </Styled.ContenedorNoticias>
  );
};

export default Noticias;
