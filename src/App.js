import "./App.css";
import { Route } from "react-router-dom";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div>
      <Route path="/homepage">
        <HomePage />
      </Route>
    </div>
  );
}

export default App;
