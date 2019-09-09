const path = require('path');
const execa = require('execa');

process.env.OUTPUT_DIR = path.join(__dirname, '..', 'src/assets/css');

// run npm explore (which resolves wombat-style-guide inside of your node modules) to build the css
async function main() {
    await execa('npm explore wombat-style-guide -- yarn build:css');
}

main();