const path = require( 'path' );
const rdt = require( 'react-docgen-typescript' );

const parserOptions = {};

module.exports = {
	components: 'src/components/**/*.tsx',
	propsParser: rdt.withDefaultConfig([parserOptions]).parse,
	require: [
		path.join( __dirname, 'src/assets/css/main.scss' )
	]
};