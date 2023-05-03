import { NavLink } from "react-router-dom";

export function ThanksPage() {
  return (
    <section className="text-center">
      <h1 className="title">THANK YOU FOR YOUU ORDER</h1>
      <NavLink to="shop">
        <button className="btn white lg">Back to shop</button>
      </NavLink>
    </section>
  );
}
