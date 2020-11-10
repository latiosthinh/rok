const Toggle = ( { update, value } ) => {
	return (
		<div className="toggle">
			<button key="eng-btn" onClick={ update }>ENG</button>

			<input id="lyceum-lang" type="checkbox" onChange={ update } checked={ ! value } />
			<label htmlFor="lyceum-lang"></label>

			<button key="vie-btn" onClick={ update }>VIE</button>
		</div>
	)
}

export default Toggle;