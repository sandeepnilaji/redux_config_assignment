import "./App.css";
import { Route, Switch, Link } from "react-router-dom";
import PreventRouter from "./Components/PreventRouter";
import Todos from "./Components/Todos";
import Login from "./Components/Login";
import TodosList from "./Components/TodosList";
function App() {
  return (
    <div className="App">
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <Link to="/">HOME</Link>
        <Link to="/todo">TODO</Link>
        <Link to="/login">LOGIN</Link>
      </div>

      <Switch>
        <Route exact path="/">
          <div>TODO HOME PAGE</div>
        </Route>
        <PreventRouter exact path="/todo">
          <Todos />
        </PreventRouter>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/todo/list">
          <TodosList />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
