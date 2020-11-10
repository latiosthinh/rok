const dotenv   = require( 'dotenv' );
dotenv.config();

const fs = require( 'fs' );

const axios = require( 'axios' );
const $     = require( 'cheerio' );
const url   = `${ process.env.FETCH_URL }`;


let student = [{ 
	name: 'Mike',
	age: 23, 
	gender: 'Male',
	department: 'English',
	car: 'Honda' 
},
{ 
	name: 'Latios',
	age: 25, 
	gender: 'Male',
	department: 'English',
	car: 'Honda' 
},

];

const writeData = ( data ) => {
	fs.writeFileSync( 'lyceum-eng.json', JSON.stringify( data ) );
}

const lyceum = [];

const dataHandler = async () => {
	await axios.get( url )
		.then( ( html ) => {
			$( '#footable_4551 tbody tr', html.data ).each( ( i, el ) => {
				if ( el.children[0].children[0] ) {
					let QnA = { 
						question: el.children[0].children[0].data,
						answer  : el.children[1].children[0] ? el.children[1].children[0].data : ''
					}

					lyceum.push( QnA );
				}
			} )
		} )
		.then( () => fs.writeFileSync( 'lyceum-eng.json', JSON.stringify( lyceum ) ) )
		.catch( ( err ) => {
			console.log( err );
		} );
}

module.exports = {
	dataHandler
}