const QaBlock = ( { items } ) => {
	return (
		<>
		{
			items &&
			items.map( e => (
				<div className="lyceum-block">
					<div className="lyceum-block__question">{ e.question }</div>
					<div className="lyceum-block__answer">{ e.answer }</div>
				</div>
			) )
		}
		</>
	)
}

export default QaBlock;