import { calculateInvestmentResults, formatter } from '../util/investment.js';

export default function Results({ input }) {
	const resultsData = calculateInvestmentResults(input);

	/**
	 * The Initial Investment would be the the difference between the
	 * value at the end of the first year, and the sum of the annual
	 * investment and interest during that year.
	 */
	const initialInvestment =
		resultsData[0].valueEndOfYear -
		(resultsData[0].annualInvestment + resultsData[0].interest);

	return (
		<table id='result'>
			<thead>
				<tr>
					<th>Year</th>
					<th>Investment Value</th>
					<th>Interest (Year)</th>
					<th>Total Interest</th>
					<th>Invested Capital</th>
				</tr>
			</thead>
			<tbody>
				{resultsData.map((result) => {
					/**
					 * The Total Interest for a particular year `n` would be the
					 * difference between the value at the end of the year `n`,
					 * and the annual investments done for the previous years
					 * (years n-1, n-2, etc). Also, we would have to deduct the
					 * initial investment amount so as to get only the interest
					 * amount.
					 */
					const totalInterest =
						result.valueEndOfYear -
						result.year * result.annualInvestment -
						initialInvestment;

					/**
					 * The Total Investment amount for a particular year
					 * would be the difference between the value at the end
					 * of the year and the total interest amount earned till
					 * date.
					 */
					const totalInvested = result.valueEndOfYear - totalInterest;

					return (
						<tr key={result.year}>
							<td>{result.year}</td>
							<td>{formatter.format(result.valueEndOfYear)}</td>
							<td>{formatter.format(result.interest)}</td>
							<td>{formatter.format(totalInterest)}</td>
							<td>{formatter.format(totalInvested)}</td>
						</tr>
					);
				})}
			</tbody>
		</table>
	);
}
