import Main from "./components/Main";
import Home from "./components/Home/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.css";
import { PersistGate } from "redux-persist/integration/react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { Provider } from "react-redux";
import {store, persistor} from "./redux";
import "./App.css";
import Admin from "./components/Admin/Admin";

function App() {

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/"
            render={(props) =>
              localStorage.getItem("neo-user") ? localStorage.getItem("neo-admin") ? <Admin /> : <Home /> : <Main />
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
      </PersistGate>
    </Provider>
  );
}

export default App;
