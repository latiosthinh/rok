import { useState } from 'react';
import Input from './Input';
import Toggle from './Toggle';
import QaBlock from './QaBlock';
const data = require( './lyceum-eng.json' );
const dataVie = require( './lyceum-vie.json' );

const App = () => {
	const [ state, setState ] = useState( undefined );
	const [ lang, setLang ] = useState( false );

	const _data = lang ? data : dataVie;

	const changeLanguage = () => {
		setLang( lang => !lang );
		document.querySelector( '.lyceum-input' ).value = '';
		setState( undefined );
	}

	const inputHandler = e => {
		const value = e.target.value.toLowerCase();

		if ( '' === value ) {
			setState( undefined );
		}
		else {
			setState(
				_data.filter( res => {
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
			<img src="./heading.png" alt="lyceum rok" />
			<div>
				<h1>Lyceum of Wisdom</h1>
				<Toggle update={ changeLanguage } value={ lang } />
				<Input update={ inputHandler } />
				<QaBlock items={ state } />
			</div>
		</>
	);
}

export default App;
