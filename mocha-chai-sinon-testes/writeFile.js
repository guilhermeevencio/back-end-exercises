const fs = require('fs');

const writeFile = (file, content) => {
  fs.writeFileSync(`./${file}`, content);
  return 'ok';
};

module.exports = writeFile;