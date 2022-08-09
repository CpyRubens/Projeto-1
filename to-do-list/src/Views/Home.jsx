import TodoList from "Components/TodoList/TodoList";
import "./Home.css";
import Navbar from "Components/Navbar/Navbar";
import { useState } from "react";
import AdicionaItemModal from "Components/AdicionaItemModal/AdicionaItemModal";

export default function Home() {
  const [canShowAdicionaItemModal, setCanShowAdicionaItemModal] =
    useState(false);

  const [itemParaAdicionar, setItemParaAdicionar] = useState();

  return (
    <div className="Home">
      <Navbar createItem={() => setCanShowAdicionaItemModal(true)} />

      <div className="Home__container">
        <TodoList itemCriado={itemParaAdicionar}/>
        {canShowAdicionaItemModal && (
          <AdicionaItemModal
            closeModal={() => setCanShowAdicionaItemModal(false)}
            onCreateItem={(item) => setItemParaAdicionar(item)}
          />
        )}
      </div>
    </div>
  );
}
