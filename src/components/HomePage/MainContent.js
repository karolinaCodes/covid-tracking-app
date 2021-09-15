import React, { Fragment } from "react";
import StatsTable from "./StatsTable";
import medicalResearcherImg from "../../assets/undraw_medical_research_qg4d.svg";
import styles from "./MainContent.module.css";

function MainContent() {
  return (
    <div className={styles.mainContent}>
      <div>
        <h1 className={styles.heading}>Current Statistics</h1>
        <StatsTable />
      </div>
      <img src={medicalResearcherImg} className={styles.doctorImg} />
    </div>
  );
}

export default MainContent;
