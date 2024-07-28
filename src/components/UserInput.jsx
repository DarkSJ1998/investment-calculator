export default function UserInput({ userInput, onChange }) {
	return (
		<section id='user-input'>
			<div className='input-group'>
				<p>
					<label htmlFor='initialInvestment'>
						Initial Investment
					</label>
					<input
						type='number'
						name='initialInvestment'
						id='initialInvestment'
						required
						value={userInput.initialInvestment}
						onChange={(event) =>
							onChange('initialInvestment', event.target.value)
						}
					/>
				</p>

				<p>
					<label htmlFor='annualInvestment'>Annual Investment</label>
					<input
						type='number'
						name='annualInvestment'
						id='annualInvestment'
						required
						value={userInput.annualInvestment}
						onChange={(event) =>
							onChange('annualInvestment', event.target.value)
						}
					/>
				</p>
			</div>

			<div className='input-group'>
				<p>
					<label htmlFor='expectedReturn'>Expected Return</label>
					<input
						type='number'
						name='expectedReturn'
						id='expectedReturn'
						required
						value={userInput.expectedReturn}
						onChange={(event) =>
							onChange('expectedReturn', event.target.value)
						}
					/>
				</p>

				<p>
					<label htmlFor='duration'>Duration</label>
					<input
						type='number'
						name='duration'
						id='duration'
						required
						value={userInput.duration}
						onChange={(event) =>
							onChange('duration', event.target.value)
						}
					/>
				</p>
			</div>
		</section>
	);
}
