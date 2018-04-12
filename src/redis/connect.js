const redis = require('redis');
const bluebird = require('bluebird');

bluebird.promisifyAll(redis.RedisClient.prototype);
bluebird.promisifyAll(redis.Multi.prototype);

exports.connect = () => {
    const cli = redis.createClient({ host: 'localhost', port: 6379 });
    cli.auth(123456, () => {
        console.log('redis连接成功');
    });
    cli.on('error', err => {
        console.log(`出现错误: ${err}`);
    });
    return cli;
};
