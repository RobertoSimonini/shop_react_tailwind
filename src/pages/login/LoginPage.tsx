import React, { useState } from "react";

export function LoginPage() {
  // ! form datas
  const [formData, setFormData] = useState({ name: "", password: "" });

  // Funzione per gestire il form
  const changeHandler = (e: React.FormEvent<HTMLInputElement>) => {
    const name = e.currentTarget.name;
    const value = e.currentTarget.value;
    setFormData((state) => ({ ...state, [name]: value }));
  };

  // Funzione per effettuare il login e prevenire il default
  const doLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  // # Validazione form
  const isValid = formData.name.length && formData.password.length;

  return (
    <section>
      <h1 className="title">LOGIN PAGE</h1>
      <div className="max-w-sm mx-auto">
        <form onSubmit={doLogin}>
          <label htmlFor="name">Your name</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Write your name"
            className="w-full p-2 rounded my-2 text-black"
            value={formData.name}
            onChange={changeHandler}
          />
          <label htmlFor="password">Your password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Write your email"
            className="w-full p-2 rounded my-2 text-black"
            value={formData.password}
            onChange={changeHandler}
          />
          <button
            disabled={!isValid}
            className="bg-slate-500 w-full my-2 p-1 transition-colors hover:bg-slate-600 disabled:opacity-50 disabled:bg-slate-500"
          >
            Sign in
          </button>
        </form>
      </div>
    </section>
  );
}
