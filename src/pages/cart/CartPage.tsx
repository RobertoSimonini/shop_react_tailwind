import { NavLink } from "react-router-dom";
import { cartList, decrease, increase, totalCost } from "./cart.selectors";
import { useCart } from "./useCart";

export function CartPage() {
  // lista di elementi nel carrello
  const list = useCart(cartList);
  // Totale costo
  const totalPrice = useCart(totalCost);
  // funzione per diminuire la quantità di un elemento
  const decreseQty = useCart(decrease);
  // funzione per aumentare la quantità di un elemento
  const increaseQty = useCart(increase);
  return (
    <section>
      <h1 className="title">CART PAGE</h1>
      {list.length !== 0 && (
        <>
          {list.map((p) => {
            return (
              <div
                key={p.product.id}
                className="flex items-center my-4 gap-5 border-b border-blue-400"
              >
                <img
                  src={p.product.tmb}
                  alt={p.product.name}
                  className="h-36 w-36 object-cover rounded-lg mb-5"
                />
                <div className="flex justify-between w-full h-full items-center">
                  <h1 className="text-2xl font-bold font-sans">
                    {p.product.name}
                  </h1>
                  <div className="flex items-center">
                    <button
                      onClick={() => decreseQty(p.product.id)}
                      className="btn white decrease"
                    >
                      -
                    </button>
                    <span className="px-3">qty: {p.qty}</span>
                    <button
                      onClick={() => increaseQty(p.product.id)}
                      className="btn white increase"
                    >
                      +
                    </button>
                    <span className="total ps-3">
                      € {p.product.cost * p.qty}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
          <div className="flex justify-between items-center">
            <NavLink to="/checkout">
              <button className="btn primary lg">checkout</button>
            </NavLink>
            <h1 className="text-5xl font-sans font-extrabold text-right">
              Total € {totalPrice}
            </h1>
          </div>
        </>
      )}
    </section>
  );
}
