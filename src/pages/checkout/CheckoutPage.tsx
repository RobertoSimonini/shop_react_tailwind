import { ChangeEvent, useState } from "react";
import { cartList, totalCost } from "../cart/cart.selectors";
import { useCart } from "../cart/useCart";
import { OrderForm, User } from "../../model/order-form";
import { useNavigate } from "react-router-dom";
export const EMAIL_REGEX =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export function CheckOutPage() {
  // totale
  const total = useCart(totalCost);

  // Lista di ordini
  const order = useCart(cartList);

  // funzione per svuotare il carrello
  const cleanCart = useCart((state) => state.clearCart);

  // Navigate
  const navigate = useNavigate();

  // oggetto user per dati utente form
  const [user, setUser] = useState<User>({ name: "", email: "" });

  // funzione per modificare il value degli input del form
  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const name = e.currentTarget.name;
    const value = e.currentTarget.value;
    setUser((state) => ({ ...state, [name]: value }));
  };

  // funzione per mandare il form con prevent default
  const sendOrder = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const orderInfo: OrderForm = {
      user,
      order,
      status: "pending",
      total,
    };

    cleanCart();
    navigate("/thanks");
  };

  // # Validazione form
  const isNameValid = user.name.length;
  const isEmailValid = user.email.match(EMAIL_REGEX);
  const isValid = isEmailValid && isNameValid;

  return (
    <section>
      <h1 className="title">CHECKOUT</h1>
      <div className="max-w-sm mx-auto">
        <h3 className="text-2xl font-bold font-sans border-b-2 py-2 mb-3">
          Total: €{total}
        </h3>
        <form onSubmit={sendOrder}>
          <label htmlFor="name">Your name</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Write your name"
            className="w-full p-2 rounded my-2 text-black"
            value={user.name}
            onChange={changeHandler}
          />
          <label htmlFor="email">Your email</label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Write your email"
            className="w-full p-2 rounded my-2 text-black"
            value={user.email}
            onChange={changeHandler}
          />
          <button
            disabled={!isValid}
            className="bg-slate-500 w-full my-2 p-1 transition-colors hover:bg-slate-600 disabled:opacity-50 disabled:bg-slate-500"
          >
            Confirm Order
          </button>
        </form>
      </div>
    </section>
  );
}
