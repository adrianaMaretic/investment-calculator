import { calculateInvestmentResults, formatter } from "../util/investment.js";

export function Results({ inputChanges }) {
  const results = calculateInvestmentResults(inputChanges);

  const displayResults = function () {
    return results.map((result, index) => (
      <tr key={index}>
        <td>{result.year}</td>
        <td>{formatter.format(result.valueEndOfYear)}</td>
        <td>{formatter.format(result.interest)}</td>
        <td>{formatter.format(result.totalInterest)}</td>
        <td>{formatter.format(result.totalInvestment)}</td>
      </tr>
    ));
  };

  return (
    <section>
      {results.length > 0 && (
        <table id="result">
          <thead>
            <tr>
              <th>Year</th>
              <th>Investment Value</th>
              <th>Interest (Year)</th>
              <th>Total Interest</th>
              <th>Invested Capital</th>
            </tr>
          </thead>
          <tbody>{displayResults()}</tbody>
        </table>
      )}
    </section>
  );
}
