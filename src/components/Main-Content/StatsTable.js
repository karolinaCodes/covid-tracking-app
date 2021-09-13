import { Fragment } from "react";
import styles from "./StatsTable.module.css";
import "./StatsTable.module.css";

function StatsTable() {
  return (
    <Fragment>
      <h7>Today's cases:</h7>
      <table className={styles.table}>
        <tr>
          <td>Number of cases</td>
          <td>2301</td>
        </tr>
        <tr>
          <td>Number of fatalities</td>
          <td>41</td>
        </tr>
        <tr>
          <td>Number of hospitalizations</td>
          <td>61</td>
        </tr>
        <tr>
          <td>Number of criticals</td>
          <td>12</td>
        </tr>
        <tr>
          <td>Number of recoveries</td>
          <td>2707</td>
        </tr>
        <tr>
          <td>Number of vaccinations</td>
          <td>40424</td>
        </tr>
        <tr>
          <td>Amount fully vaccinated</td>
          <td>11039</td>
        </tr>
      </table>
      <br />
      <h7>All cases:</h7>
      <table>
        <tr>
          <td className={styles.table}>Total cases</td>
          <td className={styles.table}>850482</td>
        </tr>
        <tr>
          <td>Total fatalities</td>
          <td>21673</td>
        </tr>
        <tr>
          <td>Total hospitalizations</td>
          <td>850482</td>
        </tr>
        <tr>
          <td>Total criticals</td>
          <td>85082</td>
        </tr>
        <tr>
          <td>Total recoveries</td>
          <td>7958272</td>
        </tr>
        <tr>
          <td>Total vaccinated</td>
          <td>415505</td>
        </tr>
      </table>
    </Fragment>
  );
}

export default StatsTable;
