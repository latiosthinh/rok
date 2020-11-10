const dotenv = require( 'dotenv' );
dotenv.config();

const http = require( 'http' );
const hostname = `${ process.env.HOST_NAME }`;
const port = process.env.PORT;

const { dataHandler } = require( './dataHandler' );
const { dataHandlerVie } = require( './dataHandlerVie' );

const server = http.createServer( ( req, res ) => {
	res.statusCode = 200;
	res.setHeader( 'Content-Type', 'text/plain' );
	res.end( 'Thomas I am' );
	// getData();

	// dataHandler();
	// dataHandlerVie();
} );

server.listen( port, hostname, () => {
	console.log( `Server running at http://${hostname}:${port}/` );
} );