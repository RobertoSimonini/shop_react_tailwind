import { PropsWithChildren } from "react";
import { AuthSelectIsLogged } from "../services/auth/auth.selectors";
import { useAuth } from "../services/auth/useAuth";

export function IfLogged(props: PropsWithChildren) {
  const isLogged = useAuth(AuthSelectIsLogged);
  return <>{isLogged ? props.children : null}</>;
}
