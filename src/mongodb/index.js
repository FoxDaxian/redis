const { kitten } = require('./model.js');
const { connect } = require('./connect');
connect();

const kittenInstance = new kitten({ name: 'fox' });

module.exports = {
    kittenInstance
};
