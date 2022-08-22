import TodoList from "Components/TodoList/TodoList";
import "./Home.css";
import Navbar from "Components/Navbar/Navbar";
import { useState } from "react";
import AdicionaEditaItemModal from "Components/AdicionaEditaItemModal/AdicionaEditaItemModal";
import { ActionMode } from "constants/index";

export default function Home() {
  const [modoAtual, setModoAtual] = useState(ActionMode.NORMAL);

  const [canShowAdicionaEditaItemModal, setCanShowAdicionaEditaItemModal] =
    useState(false);

  const [itemParaAdicionar, setItemParaAdicionar] = useState();

  const [itemParaEditar, setItemParaEditar] = useState();

  const [itemEditado, setItemEditado] = useState();

  const handleActions = (action) => {
    const novaAcao = modoAtual === action ? ActionMode.NORMAL : action;
    setModoAtual(novaAcao);
  };

  const handleUpdateItem = (itemToUpdate) => {
    setItemParaEditar(itemToUpdate);
    setCanShowAdicionaEditaItemModal(true);
  };

  const handleCloseModal = () => {
    setCanShowAdicionaEditaItemModal(false);
    setItemParaAdicionar();
    setItemParaEditar();
    setModoAtual(ActionMode.NORMAL);

  };

  return (
    <div className="Home">
      <Navbar
        mode={modoAtual}
        createItem={() => setCanShowAdicionaEditaItemModal(true)}
        updateItem={() => handleActions(ActionMode.ATUALIZAR)}
      />

      <div className="Home__container">
        <TodoList
          updateItem={handleUpdateItem}
          itemEditado={itemEditado}
          itemCriado={itemParaAdicionar}
          mode={modoAtual}
        />
        {canShowAdicionaEditaItemModal && (
          <AdicionaEditaItemModal
            mode={modoAtual}
            itemToUpdate={itemParaEditar}
            onUpdateItem={(item)=>setItemEditado(item)}
            closeModal={handleCloseModal}
            onCreateItem={(item) => setItemParaAdicionar(item)}
          />
        )}
      </div>
    </div>
  );
}
