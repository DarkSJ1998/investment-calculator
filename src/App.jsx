import { useState } from 'react';

import Header from './components/Header';
import Results from './components/Results';
import UserInput from './components/UserInput';

function App() {
	const [userInput, setUserInput] = useState({
		initialInvestment: 15000,
		annualInvestment: 1200,
		expectedReturn: 6,
		duration: 10,
	});

	// We will render the results table only when the input is valid
	const isInputValid = userInput.duration >= 1;

	function handleUserInput(inputIdentifier, newValue) {
		setUserInput((prevUserInput) => ({
			...prevUserInput,
			[inputIdentifier]: +newValue,
		}));
	}

	return (
		<>
			<Header />
			<UserInput onChange={handleUserInput} userInput={userInput} />
			{!isInputValid && (
				<p className='center'>
					Please enter a duration greater than zero.
				</p>
			)}
			{isInputValid && <Results input={userInput} />}
		</>
	);
}

export default App;
