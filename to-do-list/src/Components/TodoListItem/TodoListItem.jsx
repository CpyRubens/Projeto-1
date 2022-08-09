import "./TodoListItem.css";

export default function TodoListItem({item}) {
 
  return (
    <div className="TodoListItem">
      <div>
        <div className="TodoListItem__titulo">{item.titulo}</div>
        <div className="TodoListItem__horario">{item.horario}</div>
        <div className="TodoListItem__descricao">{item.descricao}</div>
        <div className="TodoListItem__check-box">
          <input type="checkbox" className="checkbox" />
        </div>
      </div>
    </div>
  );
}

