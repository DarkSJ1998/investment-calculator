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
			<Results input={userInput} />
		</>
	);
}

export default App;
