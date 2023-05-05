import { PropsWithChildren } from "react";
import { AuthSelectIsLogged } from "../services/auth/auth.selectors";
import { useAuth } from "../services/auth/useAuth";
import { Navigate } from "react-router-dom";

export interface IfLoggedProps {
  else?: React.ReactNode;
}

export function IfLogged(props: PropsWithChildren<IfLoggedProps>) {
  const isLogged = useAuth(AuthSelectIsLogged);
  return <>{isLogged ? props.children : props.else}</>;
}

export function PrivatePage(props: PropsWithChildren) {
  const isLogged = useAuth(AuthSelectIsLogged);
  return <>{isLogged ? props.children : <Navigate to="/login" />}</>;
}
