import { useState } from "react";
import Modal from "Components/Modal/Modal";
import { ItemService } from "services/itemService";
import { ActionMode } from "constants/index";

import "./AdicionaEditaItemModal.css";

export default function AdicionaEditaItemModal({
  closeModal,
  onCreateItem,
  mode,
  itemToUpdate,
  onUpdateItem,
}) {
  const form = {
    titulo: itemToUpdate?.titulo ?? "",
    horario: itemToUpdate?.horario ?? "",
    descricao: itemToUpdate?.descricao ?? "",
  };

  const [state, setState] = useState(form);

  const handleChange = (e, name) => {
    setState({ ...state, [name]: e.target.value });
  };

  const handleSend = async () => {
    const { horario, titulo, descricao } = state;

    const item = {
      ...(itemToUpdate && { _id: itemToUpdate?._id }),
      horario,
      titulo,
      descricao,
    };

    const serviceCall = {
      [ActionMode.NORMAL]: () => ItemService.create(item),
      [ActionMode.ATUALIZAR]: () => ItemService.updtateById(itemToUpdate?._id, item),
    }

    const response = await serviceCall[mode]();

    const actionResponse = {
      [ActionMode.NORMAL]: () => onCreateItem(response),
      [ActionMode.ATUALIZAR]: () => onUpdateItem(response),
    }

    actionResponse[mode]();

    const reset = {
      titulo: '',
      horario: '',
      descricao: '',
    }

    setState(reset);


    closeModal();
  }

  return (
    <Modal closeModal={closeModal}>
      <div className="AdicionaItemModal">
        <form autoComplete="off">
          <h2> { ActionMode.ATUALIZAR === mode ? 'Atualizar item da' : 'Adicionar a' } Lista </h2>
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
            onClick={handleSend}
          >
            { ActionMode.ATUALIZAR === mode ? 'Atualizar' : 'Adicionar a' } lista
          </button>
        </form>
      </div>
    </Modal>
  );
}
