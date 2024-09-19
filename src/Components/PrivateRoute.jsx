import { Route, Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";

function PrivateRoute({ element, ...rest }) {
  const { authState } = useContext(AuthContext);

  return (
    <Route
      {...rest}
      element={authState.isAuth ? element : <Navigate to="/Login" />}
    />
  );
}

export default PrivateRoute;
