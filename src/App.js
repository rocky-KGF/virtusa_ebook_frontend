import Main from "./components/Main";
import Home from "./components/Home/Home";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux";
import "./App.css";
import Admin from "./components/Admin/Admin";

function App() {
  const isAuth = localStorage.getItem("neo-user");
  const isAdmin = localStorage.getItem("neo-admin");

  console.log(isAuth);

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/"
            render={(props) =>
              isAuth ? isAdmin ? <Admin /> : <Home /> : <Main />
            }
          />
          <Route
            exact
            path="/signin"
            render={(props) =>
              localStorage.getItem("neo-user") ? <Redirect to="/" /> : <Main />
            }
          />
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
