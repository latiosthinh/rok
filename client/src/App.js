import { useState } from 'react';
import Input from './Input';
import QaBlock from './QaBlock';
const data = require( './lyceum-eng.json' );

const App = () => {
	const [ state, setState ] = useState( undefined );

	const inputHandler = e => {
		const value = e.target.value.toLowerCase();

		if ( '' === value ) {
			setState( undefined );
		}
		else {
			setState(
				data.filter( res => {
					return (
						res.question.toLowerCase().includes( value ) ||
						res.answer.toLowerCase().includes( value )
					);
				} )
			)
		}
	}

	return (
		<>
			<h1>Lyceum of Wisdom</h1>
			<Input update={ inputHandler } />
			<QaBlock items={ state } />
		</>
	);
}

export default App;
