import React, { Fragment } from "react";
import StatsTable from "./StatsTable";

function MainContent() {
  return (
    <Fragment>
      <div>
        <h1>Current Statistics</h1>
      </div>
      <StatsTable />
    </Fragment>
  );
}

export default MainContent;
