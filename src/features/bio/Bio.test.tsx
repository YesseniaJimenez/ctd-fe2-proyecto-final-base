import {fireEvent, screen, waitFor } from "@testing-library/react";
import { render } from "../../test-utils";
import user from "@testing-library/user-event";
import { act } from "react-dom/test-utils";
import userEvent from "@testing-library/user-event";
import Bio from "./Bio";

describe("pruebas en componente <Bio/>", () => {
  const renderComponent = () => render(<Bio />);

  test("Debe hacer el renderizado inicial con la bio  y nombre de bart", async () => {
    renderComponent();

    const bioBart="A los diez años, Bart es el hijo mayor y único varón de Homero y Marge, y el hermano de Lisa y Maggie. Los rasgos de carácter más prominentes y populares de Bart son su picardía, rebeldía y falta de respeto a la autoridad."
    
    expect(screen.getByText("Bart Simpson")).toBeInTheDocument();
    expect(screen.getByText("A los diez años, Bart es el hijo mayor y único varón de Homero y Marge, y el hermano de Lisa y Maggie. Los rasgos de carácter más prominentes y populares de Bart son su picardía, rebeldía y falta de respeto a la autoridad.")).toBeInTheDocument();
  
  })
  

});
