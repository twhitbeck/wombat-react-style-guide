const rdt = require( 'react-docgen-typescript' );

const parserOptions = {};

module.exports = {
	components: 'src/components/**/*.tsx',
	propsParser: rdt.withDefaultConfig([parserOptions]).parse
};