const fs = require('fs');

const people = require('../models/people')

const writePeople = () => {
    fs.writeFileSync('people.json', JSON.stringify(people), 'utf8');
}

const readPeople = () => {
    fs.readFile('people.json', 'utf8', (err, data) => {
        const parsedData = JSON.parse(data)
        console.log('People data:');
        console.log(parsedData);
    })
}

const getDetail = (id) => {
    fs.readFile('people.json', 'utf8', (err, data) => {
        const parsedData = JSON.parse(data)
        console.log('People data by Id:');
        console.log(parsedData.find(person => person.id === id));
    })
}

module.exports = { writePeople, readPeople, getDetail }