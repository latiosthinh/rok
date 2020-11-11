const Toggle = ( { update, value } ) => {
	return (
		<label className="toggle">
			<span key="eng-btn" id="eng-btn">ENG</span>

			<input id="lyceum-lang" type="checkbox" onChange={ update } checked={ ! value } />
			<span className="checkbox-bg"></span>
			<span key="vie-btn" id="vie-btn">VIE</span>
		</label>
	)
}

export default Toggle;