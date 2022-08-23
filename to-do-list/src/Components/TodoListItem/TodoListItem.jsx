import "./TodoListItem.css";
import del from "assets/icons/del.svg";
import atualizar from "assets/icons/atualizar.svg"
import { ItemService } from "services/itemService";
import { ActionMode } from "constants";

export default function TodoListItem({ item, onDeleteItem,mode, clickItem, }) {

  const handleDelete = async(item) =>{
    await ItemService.deleteById(item._id);
    onDeleteItem(item);
  }


  const attButon = (canRender) =>{
    if (canRender) return (<button onClick={()=> clickItem(item._id)}>
      <img width={"30px"} src={atualizar} alt="" />
    </button>)
  }

  return (
    
    <div className="TodoListItem" >
      <div>
        <div className="TodoListItem__titulo">{item.titulo}</div>
        <div className="TodoListItem__horario">{item.horario}</div>
        <div className="TodoListItem__descricao">{item.descricao}</div>
        <div className="TodoListItem__acoes">
          <div>
            <input type="checkbox" className="checkbox" />
          </div>
          <div>
          {attButon(mode !== ActionMode.NORMAL)}
            <button disabled={mode !== ActionMode.NORMAL} onClick={()=> handleDelete(item)}>
              <img  src={del} alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
