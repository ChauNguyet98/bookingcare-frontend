import { Navigate } from "react-router-dom";
import { store } from "../../store/store";

export type ProtectedRouteProps = {
  authenticationPath: string;
  outlet: JSX.Element;
};

export const ProtectedRoute = ({
  authenticationPath,
  outlet,
}: ProtectedRouteProps) => {
  const token = store.getState().login.token;

  if (token) {
    return outlet;
  } else {
    return <Navigate to={{ pathname: authenticationPath }} />;
  }
};
