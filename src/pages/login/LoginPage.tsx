import React, { useEffect, useState } from "react";
import { useAuth } from "../../components/services/auth/useAuth";
import {
  AuthSelectError,
  AuthSelectIsLogged,
  AuthSelectLogin,
} from "../../components/services/auth/auth.selectors";
import { useNavigate } from "react-router-dom";

export function LoginPage() {
  // ! form datas
  const [formData, setFormData] = useState({
    name: "",
    password: "",
  });

  // funzione di autenticazione login
  const login = useAuth(AuthSelectLogin);

  //Errori presenti
  const error = useAuth(AuthSelectError);

  // utente loggato
  const isLogged = useAuth(AuthSelectIsLogged);

  const navigate = useNavigate();

  // Funzione per gestire il form
  const changeHandler = (e: React.FormEvent<HTMLInputElement>) => {
    const name = e.currentTarget.name;
    const value = e.currentTarget.value;
    setFormData((state) => ({ ...state, [name]: value }));
  };

  // Funzione per effettuare il login e prevenire il default
  const doLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    login(formData.name, formData.password);
  };

  useEffect(() => {
    if (isLogged) {
      navigate("/cms");
    }
  }, [isLogged]);

  // # Validazione form
  const isValid = formData.name.length && formData.password.length;

  return (
    <section>
      <h1 className="title">LOGIN PAGE</h1>
      <div className="max-w-sm mx-auto">
        {error && (
          <h1 className="text-center bg-red-700 font-bold text-black p-1 mb-2 rounded">
            Server error occured
          </h1>
        )}
        <form onSubmit={doLogin}>
          <label htmlFor="mail">Your mail</label>
          <input
            type="text"
            name="name"
            id="mail"
            placeholder="Write your mail"
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
