import { ChangeEvent, useState } from "react";
import { totalCost } from "../cart/cart.selectors";
import { useCart } from "../cart/useCart";

export function CheckOutPage() {
  const total = useCart(totalCost);

  // oggetto user per dati utente form
  const [user, setUser] = useState({ name: "Pippo", email: "Pippo@gmail.com" });

  // funzione per modificare il value degli input del form
  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const name = e.currentTarget.name;
    const value = e.currentTarget.value;
    setUser((state) => ({ ...state, [name]: value }));
  };

  const isNameValid = user.name.length;
  const isEmailValid = user.email.length;
  const isValid = isEmailValid && isNameValid;
  return (
    <section>
      <h1 className="title">CHECKOUT PAGE</h1>
      <div className="max-w-sm mx-auto">
        <h3 className="text-2xl font-bold font-sans border-b-2 py-2 mb-3">
          Total: €{total}
        </h3>
        <form>
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
            className="bg-slate-500 w-full my-2 p-1 transition-colors hover:bg-slate-600 disabled:opacity-75 disabled:hover:bg-slate-500"
          >
            Confirm Order
          </button>
        </form>
      </div>
    </section>
  );
}
