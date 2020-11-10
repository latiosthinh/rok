const Toggle = ( { update, value } ) => {
	return (
		<div className="toggle">
			<button key="eng-btn" id="eng-btn">ENG</button>

			<input id="lyceum-lang" type="checkbox" onChange={ update } checked={ ! value } />
			<label htmlFor="lyceum-lang"></label>

			<button key="vie-btn" id="vie-btn">VIE</button>
		</div>
	)
}

export default Toggle;