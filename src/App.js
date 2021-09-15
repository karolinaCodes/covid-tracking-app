import "./App.css";
import { Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Provinces from "./pages/Provinces";
import PreviousCases from "./pages/PreviousCases";
import VaccineStats from "./pages/VaccineStats";
import FatalitiesPage from "./pages/FatalitiesPage";

function App() {
  return (
    <div>
      <Route path="/" exact>
        <HomePage />
      </Route>
      <Route path="/searchbyprovince">
        <Provinces />
      </Route>
      <Route path="/previouscases">
        <PreviousCases />
      </Route>
      <Route path="/vaccinestats">
        <VaccineStats />
      </Route>
      <Route path="/fatalities">
        <FatalitiesPage />
      </Route>
    </div>
  );
}

export default App;
