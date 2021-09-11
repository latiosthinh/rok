import { useState, useEffect } from 'react';
import Input from './Input';
import QaBlock from './QaBlock';
const data = require( './lyceum-eng.json' );

const App = () => {
	const [ state, setState ] = useState( undefined );
	const [ v, setV ] = useState( '' );

	const inputHandler = e => {
		const value = e.target.value.toLowerCase();

		if ( '' === value ) {
			setState( undefined );
			setV( '' )
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

			setV( value )
		}
	}

	useEffect(() => {
		const handleEsc = event => {
			if ( event.keyCode === 27 ) {
				setV( '' );
				setState( undefined );
			}
		};
		window.addEventListener( 'keydown', handleEsc );

		return () => {
			window.removeEventListener( 'keydown', handleEsc );
		};
	}, []);
	
	return (
		<>
			<img src="./heading.png" alt="lyceum rok" />
			<div>
				<h1>Lyceum of Wisdom</h1>
				<Input value={ v } update={ inputHandler } />
				<QaBlock items={ state } />
			</div>
		</>
	);
}

export default App;
