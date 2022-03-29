import { Route, Switch, Redirect } from "react-router-dom";
import HomePage from "./components/HomePage";
import LoginPage from "./components/LoginPage";
import UserPage from "./components/UserPage";
import NotFound from "./components/NotFound";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/user" component={UserPage} />
        <Route exact path="/not-found" component={NotFound} />
        <Route exact path="/home" component={HomePage} />
        <Route exact path="/" component={LoginPage} />
        <Redirect to="not-found" />
      </Switch>
    </div>
  );
}

export default App;
