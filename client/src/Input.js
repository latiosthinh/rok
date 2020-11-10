const Input = ( { update } ) => {
	return ( 
		<input className="lyceum-input" placeholder="Enter some keywords ..." type="text" onChange={ update } />
	)
}

export default Input;