import { useState } from 'react';

export default function UserInput() {
	const [userInput, setUserInput] = useState({
		initialInvestment: 10000,
		annualInvestment: 1200,
		expectedReturn: 6,
		duration: 10,
	});

	function handleUserInput(inputIdentifier, newValue) {
		setUserInput((prevUserInput) => ({
			...prevUserInput,
			[inputIdentifier]: newValue,
		}));
	}

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
							handleUserInput(
								'initialInvestment',
								event.target.value
							)
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
							handleUserInput(
								'annualInvestment',
								event.target.value
							)
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
							handleUserInput(
								'expectedReturn',
								event.target.value
							)
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
							handleUserInput('duration', event.target.value)
						}
					/>
				</p>
			</div>
		</section>
	);
}
