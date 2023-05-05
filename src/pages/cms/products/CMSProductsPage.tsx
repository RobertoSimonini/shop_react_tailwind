import { useReducer } from "react";
import { pb } from "../../shop/ShopPage";
import { Product } from "../../../model/product";
import { Loader } from "../../../components/Loader";

// # FUNZIONE DI REDUCER
function productsReducer(state: any, action: any) {
  console.log(action);
  switch (action.type) {
    case "pending":
      return { ...state, pending: action.payload };
    case "getProductsSuccess":
      return { pending: false, products: action.payload };
  }
  return state;
}

// # Oggetto di inizializzazione
export const initialState = { pending: false, products: [] };

// ! CMS PRODUCT PAGE
export function CMSProductsPage() {
  const [state, dispatch] = useReducer(productsReducer, initialState);

  // Promise per cambiare lo stato e utilizzare useReducer
  async function getProductsHandler() {
    dispatch({ type: "pending", payload: true });
    const res = await pb.collection("products").getList<Product>();
    dispatch({ type: "getProductsSuccess", payload: res.items });
  }

  return (
    <>
      <h1 className="title">CMS</h1>
      <div>Pagina prodotti</div>
      {state.pending && <Loader />}
      <button className="btn white" onClick={getProductsHandler}>
        Get
      </button>
      <pre>{JSON.stringify(state.products, null, 2)}</pre>
    </>
  );
}
