export default function UserInput() {
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
					/>
				</p>

				<p>
					<label htmlFor='annualInvestment'>Annual Investment</label>
					<input
						type='number'
						name='annualInvestment'
						id='annualInvestment'
						required
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
					/>
				</p>

				<p>
					<label htmlFor='duration'>Duration</label>
					<input
						type='number'
						name='duration'
						id='duration'
						required
					/>
				</p>
			</div>
		</section>
	);
}
