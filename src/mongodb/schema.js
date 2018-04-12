const mongoose = require('mongoose');

const kittySchema = mongoose.Schema({
    name: String
});

module.exports = {
    kittySchema
};
