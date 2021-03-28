import Main from "./components/Main";
import Home from "./components/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.css";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/home" component={() => <Home />} />
        <Route exact path="/" component={() => <Main />} />
        <Redirect to="" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
