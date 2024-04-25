const cube = require('./app/utils/cube');
const cuboid = require('./app/utils/cuboid');
const triangularPrism = require('./app/utils/triangularPrism');

console.log('Volume of cube:', cube.cubeVolume(5));

console.log('Volume of cuboid:', cuboid.cuboidVolume(3, 4, 5));

console.log('Volume of triangular prism:', triangularPrism.triangularPrismVolume(4, 3, 6));