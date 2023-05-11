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
  const token = store.getState().auth.login.token;
  console.log(token);

  console.log(111);

  if (token) {
    return outlet;
  } else {
    return <Navigate to={{ pathname: authenticationPath }} />;
  }
};
