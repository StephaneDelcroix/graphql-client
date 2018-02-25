import {StarWarsSchema} from "./StarWarsSchema";

const express = require("express");
const graphqlHTTP = require("express-graphql");
const app = express();

app.use(process.env.npm_package_config_graphql, graphqlHTTP({
	graphiql: true,
	schema:  new StarWarsSchema(),
}));

app.listen(process.env.npm_package_config_port);
