import { NavLink } from "react-router-dom";
export function Navbar() {
  return (
    <>
      <nav className="bg-slate-600 h-14 fixed z-10 top-0 left-0 right-0 shadow-2xl text-lg flex justify-between">
        <div className="nav-container px-10 flex items-center h-full">
          <NavLink to="shop">
            <span className="px-2">Shop</span>
          </NavLink>
          <NavLink to="cart">
            <span className="px-2">Cart</span>
          </NavLink>
        </div>

        <div className="nav-container px-10 flex items-center flex-row-reverse h-full">
          <NavLink to="login">
            <button className="btn red">login</button>
          </NavLink>
          <NavLink to="cms">
            <button className="btn red">CMS</button>
          </NavLink>
        </div>
      </nav>
    </>
  );
}
