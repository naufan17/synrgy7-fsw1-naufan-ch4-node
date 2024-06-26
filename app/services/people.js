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

const createPeople = (payload) => {
    fs.readFile('people.json', 'utf8', (err, data) => {
        const parsedData = JSON.parse(data)
        parsedData.push(payload);
        console.log('People data:');
        console.log(parsedData);

        fs.writeFileSync('people.json', JSON.stringify(parsedData), 'utf8');
    })

}

module.exports = { writePeople, readPeople, getDetail, createPeople }