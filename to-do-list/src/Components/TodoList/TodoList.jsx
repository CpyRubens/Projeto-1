import React, { useState, useEffect } from "react";
import "./TodoList.css";
import TodoListItem from "Components/TodoListItem/TodoListItem";
import { ItemService } from "services/itemService";

export default function TodoList({ itemCriado }) {
  const [itens, setItens] = useState([]);

  const getLista = async () => {
    const response = await ItemService.getLista();
    setItens(response);
  };

  const adicionaItemNaLista = (item) => {
    const lista = [...itens, item];
    setItens(lista);
  };

  useEffect(() => {
    if (itemCriado) adicionaItemNaLista(itemCriado);
  }, [itemCriado]);

  useEffect(() => {
    getLista();
  }, []);

  return (
    <div className="TodoList">
      {itens.map((item, index) => (
        <TodoListItem item={item} index={index} key={`TodoListItem-${index}`} />
      ))}
    </div>
  );
}
