const Input = ( { value, update } ) => {
	return ( 
		<input className="lyceum-input"
				placeholder="Enter some keywords ... ( press ''esc'' to clear )"
				type="text"
				value={ value }
				onChange={ update } />
	)
}

export default Input;