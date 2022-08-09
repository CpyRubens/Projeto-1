import { useState } from "react";
import Modal from "Components/Modal/Modal";
import { ItemService } from "services/itemService";

import "./AdicionaItemModal.css";

export default function AdicionaItemModal({ closeModal, onCreateItem }) {
  const form = {
    titulo: "",
    horario: "",
    descricao: "",
  };

  const [state, setState] = useState(form);

  const handleChange = (e, name) => {
    setState({ ...state, [name]: e.target.value });
  };

  const createItem = async () => {
    const { horario, titulo, descricao } = state;

    const item = {
      horario,
      titulo,
      descricao,
    };

    const response = await ItemService.create(item);
    onCreateItem(response);

    closeModal();
  };

  return (
    <Modal closeModal={closeModal}>
      <div className="AdicionaItemModal">
        <form autoComplete="off">
          <h2> Adicionar a fazer </h2>
          <div>
            <label className="AdicionaItemModal__text" htmlFor="titulo">
              {" "}
              Titulo:{" "}
            </label>
            <input
              id="titulo"
              placeholder="Tomar banho..."
              type="text"
              value={state.titulo}
              onChange={(e) => handleChange(e, "titulo")}
              required
            />
          </div>
          <div>
            <label className="AdicionaItemModal__text" htmlFor="horario">
              {" "}
              Horário:{" "}
            </label>
            <input
              id="horario"
              placeholder="8h15..."
              type="text"
              value={state.horario}
              onChange={(e) => handleChange(e, "horario")}
              required
            />
          </div>
          <div>
            <label className="AdicionaItemModal__text" htmlFor="descricao">
              {" "}
              Descrição:{" "}
            </label>
            <input
              id="descricao"
              placeholder="Usar o shampoo especial anti caspa..."
              type="text"
              value={state.descricao}
              onChange={(e) => handleChange(e, "descricao")}
              required
            />
          </div>

          <button
            className="AdicionaItemModal__enviar"
            type="button"
            onClick={createItem}
          >
            Enviar
          </button>
        </form>
      </div>
    </Modal>
  );
}

