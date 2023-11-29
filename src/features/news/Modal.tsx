import { INoticiasNormalizadas } from './types'
import { BotonSuscribir, CloseButton, ContenedorModal, CotenedorTexto, DescripcionModal, ImagenModal, TarjetaModal, TituloModal } from './styled'
import { SuscribeImage, CloseButton as Close } from "../../assets";

// Interfaz para las propiedades del componente Modal
interface modalProps {
    modal: INoticiasNormalizadas,
    setModal: (news: INoticiasNormalizadas|null)=> void    
    onClick:()=>void
    onClicKSuscribir:()=>void
}

// Componente funcional Modal
const Modal = ({setModal, modal, onClick, onClicKSuscribir}: modalProps) => {
  return (
    <>
    {
        modal.esPremium ? (
            // Contenedor del modal para noticias premium
            <ContenedorModal>
              <TarjetaModal>
                {/* Botón de cierre del modal */}
                <CloseButton onClick={() => setModal(null)}>
                  <img src={Close} alt="close-button" />
                </CloseButton>
                {/* Imagen para las suscripciones premium */}
                <ImagenModal src={SuscribeImage} alt="mr-burns-excellent" />
                {/* Contenedor de texto para las suscripciones premium */}
                <CotenedorTexto>
                  {/* Título del modal */}
                  <TituloModal>Suscríbete a nuestro Newsletter</TituloModal>
                  {/* Descripción del modal */}
                  <DescripcionModal>
                    Suscríbete a nuestro newsletter y recibe noticias de
                    nuestros personajes favoritos.
                  </DescripcionModal>
                  {/* Botón de suscripción */}
                  <BotonSuscribir
                    onClick={() =>
                      // Simular una suscripción y cerrar el modal después de un segundo
                      setTimeout(() => {
                        alert("¡Suscripto!");
                        setModal(null);
                      }, 1000)
                    }
                  >
                    Suscríbete
                  </BotonSuscribir>
                </CotenedorTexto>
              </TarjetaModal>
            </ContenedorModal>
          )
          :
          (
              // Contenedor del modal para noticias no premium
              <ContenedorModal>
                <TarjetaModal>
                  {/* Botón de cierre del modal */}
                  <CloseButton onClick={() => setModal(null)}>
                    <img src={Close} alt="close-button" />
                  </CloseButton>
                  {/* Imagen de la noticia */}
                  <ImagenModal src={modal.imagen} alt="news-image" />
                  {/* Contenedor de texto para la noticia */}
                  <CotenedorTexto>
                    {/* Título de la noticia */}
                    <TituloModal>{modal.titulo}</TituloModal>
                    {/* Descripción de la noticia */}
                    <DescripcionModal>{modal.descripcion}</DescripcionModal>
                  </CotenedorTexto>
                </TarjetaModal>
              </ContenedorModal>
            )
    }
    </>
  );
}

export default Modal;
