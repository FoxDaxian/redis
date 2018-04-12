/*
 * @Author: fox 
 * @Date: 2018-04-09 09:35:17 
 * @Last Modified by: fox
 * @Last Modified time: 2018-04-12 11:51:54
 */

const redis = require('redis');
const express = require('express');
const bluebird = require('bluebird');
const app = express();
console.log('启动服务中...');

bluebird.promisifyAll(redis.RedisClient.prototype);
bluebird.promisifyAll(redis.Multi.prototype);

const cli = redis.createClient({ host: 'localhost', port: 6379 });
cli.auth(123456, () => {
    console.log('密码正确');
});
cli.on('error', err => {
    console.log(`出现错误: ${err}`);
});

app.get('/', async (req, res) => {
    const redRes = await cli.hgetallAsync('hash');
    res.json({
        name: redRes
    });
});

app.listen(3000, () => {
    console.log('启动服务成功');
});
