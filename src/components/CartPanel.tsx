import { useNavigate } from "react-router-dom";
import { useCartPanel } from "./services";
import { useCart } from "../pages/cart/useCart";
import { cartList, totalCost } from "../pages/cart/cart.selectors";

export function CartPanel() {
  // funzione per cambiare pagina
  const navigate = useNavigate();
  // funzione per chidere il pannello
  const closeCartPanel = useCartPanel((state) => state.closeOverlay);
  // funzione per recuperare tutti gli items nel carrello
  const list = useCart(cartList);
  // funzione per calcolare il totale degli items nel carrello
  const total = useCart(totalCost);

  const gotoCart = () => {
    navigate("cart");
    closeCartPanel();
  };

  return (
    <div className="fixed bg-slate-800 right-4 top-24 p-3 rounded-xl shadow-2xl w-96">
      <ul className="flex flex-col gap-4">
        {list.map((p) => {
          return (
            <li
              key={p.product.id}
              className="flex justify-between items-center border-b border-slate-600 pb-3"
            >
              <div>{p.product.name}</div>
              <div className="flex gap-3">
                <div>
                  ({p.qty} x € {p.product.cost})
                </div>
                <div>€ {p.qty * p.product.cost}</div>
              </div>
            </li>
          );
        })}
      </ul>

      <div className="flex justify-end text-xl font-bold my-3">
        Total: € {total}
      </div>

      <div className="flex justify-center">
        <button className="btn primary" onClick={gotoCart}>
          Go to Cart
        </button>
      </div>
    </div>
  );
}
