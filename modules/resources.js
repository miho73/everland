const fs = require('fs');

module.exports = {
    text: JSON.parse(fs.readFileSync('./views/texts.json'))
}