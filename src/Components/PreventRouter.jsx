import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";

function PreventRouter({ children, exact, path }) {
  const { token } = useSelector((state) => state.login);

  if (!token) {
    return <Redirect to="/login" />;
  } else {
    return (
      <Route exact path={path}>
        {children}
      </Route>
    );
  }
}

export default PreventRouter;
