import {fireEvent, screen, waitFor } from "@testing-library/react";
import { render } from "../../test-utils";
import user from "@testing-library/user-event";
import Cita from "../quote/Cita";
import { act } from "react-dom/test-utils";
import userEvent from "@testing-library/user-event";

describe("pruebas en componente <Cita/>", () => {
  const renderComponent = () => render(<Cita />);

  test("Debe renderizarse sin cita al cargar la pagina por primera vez", async () => {
    renderComponent();

    expect(screen.getByText("No se encontro ninguna cita")).toBeInTheDocument();
  });

  test("debe mostrar una cita al azar al dar click en el boton de obtener cita aleatoria", async () => {
    renderComponent();
    const botonObetenerCitaAleatoria = screen.getByText(
      "Obtener cita aleatoria"
    );
    await user.click(botonObetenerCitaAleatoria);
    await waitFor(() => {
      expect(
        screen.queryByText("No se encontro ninguna cita")
      ).not.toBeInTheDocument();
    });
  });

  test("Debe mostar cita y nombre del personaje ingresado", async () => {
    renderComponent();

    const input = screen.getByPlaceholderText("Ingresa el nombre del autor");
    const botonCita = screen.getByText(/obtener/i);

    expect(input).toBeInTheDocument();

    act(() => {
      userEvent.type(input, "Bart");
      userEvent.click(botonCita);
    });

    await waitFor(() => expect(screen.queryByText("Bart Simpson")));
    await waitFor(() => expect(screen.queryByText("Eat my shorts")));
  });

  test("mensaje de error cuando se ingresan números", async () => {

    renderComponent()
    const input = await screen.findByPlaceholderText(
      "Ingresa el nombre del autor"
    );
    const botonCita = screen.getByText(/obtener/i);

    act(() => {
      userEvent.type(input, "111");
      userEvent.click(botonCita);
    });

    await waitFor(()=>{ expect(screen.getByText("Por favor ingrese un nombre válido")).toBeInTheDocument()

  })
    
  });


  test("Debe borrar la cita cuando se hace click en el botón borrar", async()=>{
    renderComponent()

    const input = screen.getByPlaceholderText("Ingresa el nombre del autor");
    const botonCita = screen.getByText(/obtener/i);
    const botonBorrar=screen.getByText("Borrar");

    act(()=>{
      userEvent.type(input,"Lisa");
      userEvent.click(botonCita)
    })

    await waitFor(()=>expect(screen.queryByText("Ingresa el nombre del autor")).not.toBeInTheDocument)

    act(()=>{fireEvent.click(botonBorrar)})

    await waitFor(()=>expect(screen.queryByText("Ingresa el nombre del autor")).toBeInTheDocument)


  })
    screen.debug()


});
