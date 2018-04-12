const mongoose = require('mongoose');
const mongooseConf = require('../config/mongoose');
const { ip, port } = mongooseConf;

exports.connect = () => {
    mongoose.connect(`mongodb://${ip}:${port}/myMongodb`);

    const db = mongoose.connection;
    db.on('error', () => {
        console.log('连接mongoose出错，请重试');
    });
    db.on('open', () => {
        console.log('连接mongoose成功');
    });
};
