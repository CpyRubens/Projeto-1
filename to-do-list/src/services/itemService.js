import { Api } from "helpers/Api";

const parseResponse = (response) => response.json();

export const ItemService = {
  getLista: () =>
    fetch(Api.itemLista(), { method: "GET" }).then(parseResponse),
  getById: (id) =>
    fetch(Api.itemById(id), { method: "GET" }).then(parseResponse),

  create: (item) => fetch(Api.createItem(), {
    method: "POST", body: JSON.stringify(item), mode: "cors", headers: {
      "Content-Type": "application/json",
    }
  }).then(parseResponse),

  updtateById: (id, item) => fetch(Api.updateItemById(id), {
    method: "PUT", body: JSON.stringify(item), mode: "cors", headers: {
      "Content-Type": "application/json",
    }
  }).then(parseResponse),
  deleteById: (id) =>
    fetch(Api.deleteItemById(id), { method: "DELETE" }).then(parseResponse),
};