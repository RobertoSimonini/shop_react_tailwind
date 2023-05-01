import { NavLink, Outlet } from "react-router-dom";

const isActive = (obj: { isActive: boolean }) => {
  return obj.isActive ? "btn primary" : "btn";
};

export function CMSPage() {
  return (
    <section>
      <NavLink to="/cms/products" className={isActive}>
        <button className="btn">Products</button>
      </NavLink>
      <NavLink to="/cms/orders" className={isActive}>
        <button className="btn">Orders</button>
      </NavLink>
      <Outlet />
    </section>
  );
}
