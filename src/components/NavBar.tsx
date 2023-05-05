import { NavLink, useNavigate } from "react-router-dom";
import { CartPanel } from "./CartPanel";
import { useCartPanel } from "./services";
import { empty, totalItems } from "../pages/cart/cart.selectors";
import { useCart } from "../pages/cart/useCart";
import { useAuth } from "./services/auth/useAuth";
import { IfLogged } from "./shared";

const isActive = (obj: { isActive: boolean }) => {
  return obj.isActive ? "text-red-600 font-extrabold transition-all" : "";
};

export function Navbar() {
  // Funzione per rendere il carrello visibile
  const CardOpen = useCartPanel((state) => state.open);

  // funzione per togglare lo status del carrello
  const toggleCartStatus = useCartPanel((state) => state.toggle);

  //funzione per recuperare il totale di elementi nel carrello
  const total = useCart(totalItems);

  // funzione per recuperare la lista del carrello quando vuota
  const isEmpty = useCart(empty);

  // navigate
  const navigate = useNavigate();

  //logout
  const logout = useAuth((state) => state.logout);

  //funzione per sloggare l'utente
  const logoutHandler = () => {
    logout();
    navigate("/login");
  };
  return (
    <>
      <nav className="bg-slate-600 h-14 fixed z-10 top-0 left-0 right-0 shadow-2xl text-lg">
        <div className="container flex justify-between mx-auto h-full items-center">
          <div className="nav-container flex items-center h-full">
            <NavLink to="shop" className={isActive}>
              <span className="px-2">Shop</span>
            </NavLink>
            <button
              onClick={toggleCartStatus}
              className="btn bg-red-700 hover:bg-red-900 px-2 disabled:opacity-50 disabled:hover:bg-red-700"
              disabled={isEmpty}
            >
              Cart {total}
            </button>
          </div>

          <div className="nav-container flex items-center flex-row h-full">
            <NavLink to="cms">
              <button className="btn red">CMS</button>
            </NavLink>

            <IfLogged
              else={
                <NavLink to="login">
                  <button className="btn red">login</button>
                </NavLink>
              }
            >
              <button className="btn red" onClick={logoutHandler}>
                logout
              </button>
            </IfLogged>
          </div>
          {CardOpen && <CartPanel />}
        </div>
      </nav>
    </>
  );
}
