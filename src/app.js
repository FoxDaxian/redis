/*
 * @Author: fox 
 * @Date: 2018-04-09 09:35:17 
 * @Last Modified by: fox
 * @Last Modified time: 2018-04-09 11:33:37
 */

const redis = require('redis');

const client = redis.createClient({ host: 'localhost', port: 6379 });
client.auth(123456, () => {
	console.log('密码正确');
})

