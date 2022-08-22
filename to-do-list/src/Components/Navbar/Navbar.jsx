import "./Navbar.css";
import add from "assets/icons/add.svg";
import logo from "assets/logo.svg";
import { ActionMode } from "constants/index";

import atualizar from "assets/icons/atualizar.svg";

export default function Navbar({ createItem, updateItem, mode }) {
  return (
    <div className="Home__header Header">
      <div className="row">
        <div className="Header__logo Logo">
          <img src={logo} width="70px" alt="TodoList" className="Logo__icone" />
          <span className="Logo__titulo"> TodoList </span>
        </div>
        <div className="Header__opcoes Opcoes">
          <button
            type="button"
            className={`Opcoes__item Item ${
              mode === ActionMode.ATUALIZAR && "Item--ativa"
            }`}
            onClick={() => updateItem()}
          >
            <img
              src={atualizar}
              width="40px"
              className="Item__icone"
              alt="Editar item"
            />
          </button>
          <button
            type="button"
            className="Opcoes__item Item"
            onClick={() => createItem()}
          >
            <img
              src={add}
              width="40px"
              className="Item__icone"
              alt="Adicionar Item"
            />
          </button>
        </div>
      </div>
    </div>
  );
}
