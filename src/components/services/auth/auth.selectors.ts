import { AuthState } from "./useAuth";

// Selettore per recuperare il token
export const AuthSelectToken = (state: AuthState) => state.token;

//Selettore per recuperare l'errore
export const AuthSelectError = (state: AuthState) => state.error;

// Selettore per recuperrare se l'utente è loggato oppure no
export const AuthSelectIsLogged = (state: AuthState) => state.isLogged;

//Funzione di autenticazione login
export const AuthSelectLogin = (state: AuthState) => state.login;
