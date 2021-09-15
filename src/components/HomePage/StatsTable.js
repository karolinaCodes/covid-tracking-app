import { Fragment, useEffect, useState } from "react";
import styles from "./StatsTable.module.css";
import "./StatsTable.module.css";

function StatsTable() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState("");
  useEffect(async () => {
    setIsLoading(true);
    const response = await fetch("https://api.covid19tracker.ca/summary");
    const reponseData = await response.json();
    const transformedData = reponseData.data[0];
    setData(transformedData);
    setIsLoading(false);
  }, []);
  console.log(data);
  return (
    <Fragment>
      {isLoading ? (
        <h1>LOADING....</h1>
      ) : (
        <div>
          <p>Today's cases:</p>
          <table className={styles.table}>
            <tr>
              <td>Number of cases</td>
              <td>{data["change_cases"]}</td>
            </tr>
            <tr>
              <td>Number of fatalities</td>
              <td>{data["change_fatalities"]}</td>
            </tr>
            <tr>
              <td>Number of hospitalizations</td>
              <td>{data["change_hospitalizations"]}</td>
            </tr>
            <tr>
              <td>Number of criticals</td>
              <td>{data["change_criticals"]}</td>
            </tr>
            <tr>
              <td>Number of recoveries</td>
              <td>{data["change_recoveries"]}</td>
            </tr>
            <tr>
              <td>Number of vaccinations</td>
              <td>{data["change_vaccinations"]}</td>
            </tr>
            <tr>
              <td>Amount fully vaccinated</td>
              <td>{data["change_vaccinated"]}</td>
            </tr>
          </table>
          <br />
          <p>All cases:</p>
          <table>
            <tr>
              <td className={styles.table}>Total cases</td>
              <td className={styles.table}>{data["total_cases"]}</td>
            </tr>
            <tr>
              <td>Total fatalities</td>
              <td>{data["total_fatalities"]}</td>
            </tr>
            <tr>
              <td>Total hospitalizations</td>
              <td>{data["total_hospitalizations"]}</td>
            </tr>
            <tr>
              <td>Total criticals</td>
              <td>{data["total_criticals"]}</td>
            </tr>
            <tr>
              <td>Total recoveries</td>
              <td>{data["total_recoveries"]}</td>
            </tr>
            <tr>
              <td>Total vaccinated</td>
              <td>{data["total_vaccinated"]}</td>
            </tr>
          </table>
        </div>
      )}
    </Fragment>
  );
}

export default StatsTable;
