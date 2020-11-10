import { useState } from 'react';
import Input from './Input';
const data = require( './lyceum-eng.json' );

const App = () => {
	const [ state, setState ] = useState( undefined );
	const _data = data.map( JSON.stringify ); 

	const uniqueSet = new Set( _data ); 
	const uniqueArray = Array.from(uniqueSet).map(JSON.parse);

	const inputHandler = e => {
		const value = e.target.value.toLowerCase();
		const filterResult = uniqueArray.filter( res => {
			return (
				res.question.toLowerCase().includes( value ) ||
				res.answer.toLowerCase().includes( value )
			);
		} )
		console.log( filterResult );
	}

	return (
		<>
			<h1>Ferbb</h1>
			<Input update={ inputHandler } />
		</>
	);
}

export default App;
