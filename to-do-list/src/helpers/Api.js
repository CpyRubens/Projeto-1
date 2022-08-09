const ItemContext = {
    itemEndpoint: () => `${Api.baseUrl}/to-do-list`,
    itemLista: () => `${ItemContext.itemEndpoint()}/all-itens`,
    itemById: (id) => `${ItemContext.itemEndpoint()}/one-item/${id}`,
    createItem: () => `${ItemContext.itemEndpoint()}/create-item`,
    updateItemById: (id) => `${ItemContext.itemEndpoint()}/update-item/${id}`,
    deleteItemById: (id) => `${ItemContext.itemEndpoint()}/delete-item/${id}`,
  };
  
  export const Api = {
    baseUrl: "https://api-todolist-mongo.herokuapp.com",
    ...ItemContext,
  };