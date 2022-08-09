import "./Navbar.css";
import add from "assets/icons/add.svg";
import logo from "assets/logo.svg";

export default function Navbar({ createItem }) {
  return (
    <div className="Home__header Header">
      <div className="row">
        <div className="Header__logo Logo">
          <img
            src={logo}
            width="70px"
            alt="Logo El Geladon"
            className="Logo__icone"
          />
          <span className="Logo__titulo"> TodoList </span>
        </div>
        <div className="Header__opcoes Opcoes">
          <button type="button" className="Opcoes__item Item" onClick={()=> createItem()}></button>
          <img src={add} width="40px" className="Item__icone" alt="Adicionar Item" />
          
        </div>
      </div>
    </div>
  );
}

