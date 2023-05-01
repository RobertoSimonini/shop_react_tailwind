import { NavLink } from "react-router-dom";
import { CartPanel } from "./CartPanel";

const isActive = (obj: { isActive: boolean }) => {
  return obj.isActive ? "text-red-600 font-extrabold transition-all" : "";
};
export function Navbar() {
  return (
    <>
      <nav className="bg-slate-600 h-14 fixed z-10 top-0 left-0 right-0 shadow-2xl text-lg">
        <div className="container flex justify-between mx-auto h-full items-center">
          <div className="nav-container flex items-center h-full">
            <NavLink to="shop" className={isActive}>
              <span className="px-2">Shop</span>
            </NavLink>
            <NavLink to="cart" className={isActive}>
              <span className="px-2">Cart</span>
            </NavLink>
          </div>

          <div className="nav-container flex items-center flex-row-reverse h-full">
            <NavLink to="login">
              <button className="btn red">login</button>
            </NavLink>
            <NavLink to="cms">
              <button className="btn red">CMS</button>
            </NavLink>
          </div>
          <CartPanel />
        </div>
      </nav>
    </>
  );
}