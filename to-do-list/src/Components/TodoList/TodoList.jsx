import React, { useState, useEffect, useCallback } from "react";
import "./TodoList.css";
import TodoListItem from "Components/TodoListItem/TodoListItem";
import { ItemService } from "services/itemService";
import { ActionMode } from "constants";

export default function TodoList({ itemCriado, mode, updateItem,itemEditado }) {
  const [itens, setItens] = useState([]);

  const [itemRemovido, setItemRemovido] = useState();

  const getLista = async () => {
    const response = await ItemService.getLista();
    setItens(response);
  };

  const getItemById = async (itemId) => {
    const response = await ItemService.getById(itemId);
    const mapper = {
      [ActionMode.ATUALIZAR]: () => updateItem(response),
    };
    mapper[mode]();

  };

  const adicionaItemNaLista = useCallback(
    (item) => {
      const lista = [...itens, item];
      setItens(lista);
    },
    [itens]
    );
    
    useEffect(() => {
      getLista();
    }, [itemRemovido, itemCriado, itemEditado]);

  useEffect(() => {
    if (
      itemCriado &&
      !itens.map(({ id }) => id).includes(itemCriado.id)
    ) {
      adicionaItemNaLista(itemCriado);
    }
  }, [adicionaItemNaLista, itemCriado, itens]);
  

  return (
    <div className="TodoList">
      {itens.map((item, index) => (
        <TodoListItem
          onDeleteItem={(item) => setItemRemovido(item)}
          itemRemovido={itemRemovido}
          mode={mode}
          item={item}
          index={index}
          key={`TodoListItem-${index}`}
          clickItem={(itemId) => getItemById(itemId)}
        />
      ))}
    </div>
  );
}
