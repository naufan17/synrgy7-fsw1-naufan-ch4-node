// const fs = require('fs');

// const cube = require('./app/utils/cube');
// const cuboid = require('./app/utils/cuboid');
// const triangularPrism = require('./app/utils/triangularPrism');
const { writePeople, readPeople, getDetail } =  require('./app/services/people')

// const cubeVolume = cube.cubeVolume(5);
// const cuboidVolume = cuboid.cuboidVolume(3, 4, 5);
// const triangularPrismVolume = triangularPrism.triangularPrismVolume(4, 3, 6);

// const resultText = `Volume of cube: ${cubeVolume}
// Volume of cuboid: ${cuboidVolume}
// Volume of triangular prism: ${triangularPrismVolume}`;

// fs.writeFileSync('result.txt', resultText, 'utf8');

// fs.readFile('result.txt', 'utf8', (err, data) => {
//     console.log('Content of result.txt:');
//     console.log(data);
    
// });

writePeople();
readPeople();
getDetail(4);