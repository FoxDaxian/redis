/*
 * @Author: fox 
 * @Date: 2018-04-09 09:35:17 
 * @Last Modified by: fox
 * @Last Modified time: 2018-04-12 19:33:22
 */

const express = require('express');
// graphql
const graphqlHTTP = require('express-graphql');
const { buildSchema } = require('graphql');
// mongodb
const { kittenInstance } = require('./mongodb');
const { kitten } = require('./mongodb/model');
// cli操作对象
const { cli } = require('./redis');

const app = express();

const schema = buildSchema(`
	type Query {
		name: String
		sex: String
	}
`);

const getName = () => {
    return kitten.find({ _id: '5acf34065ef2ea39f743c965' }).exec();
};
const getSex = () => {
    return cli.getAsync('sex');
};

const rootValue = {
    name: async () => {
        const res = await getName();
        return res[0].name;
    },
    sex: async () => {
        const res = await getSex();
        return res;
    }
};

app.get('/', graphqlHTTP({ schema, rootValue }));

app.listen(3000, () => {
    console.log('启动服务成功');
});
