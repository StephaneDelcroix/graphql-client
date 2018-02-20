import { schema } from "./StarWarsSchema";

const express = require("express");
const graphqlHTTP = require("express-graphql");

const app = express();

app.use(process.env.npm_package_config_graphql, graphqlHTTP({
  schema: schema,
  graphiql: true,
}));

app.listen(process.env.npm_package_config_port);
