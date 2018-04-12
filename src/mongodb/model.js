const mongoose = require('mongoose');

const { kittySchema } = require('./schema');

const kitten = mongoose.model('kitty', kittySchema);

module.exports = {
    kitten
};
