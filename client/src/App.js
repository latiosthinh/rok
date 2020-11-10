const loadData = async () => {
    try {
        const res = await fetch('https://hp-api.herokuapp.com/api/characters');
        hpCharacters = await res.json();
        displayCharacters(hpCharacters);
    } catch (err) {
        console.error(err);
    }
};

const App = () => {
	return (
		<>
			<h1>Ferbb</h1>
		</>
	);
}

export default App;
