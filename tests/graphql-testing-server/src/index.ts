import * as express from "express";
import * as graphqlHTTP from "express-graphql";
import {StarWarsSchema} from "./StarWarsSchema";
const app = express();

app.use(process.env.npm_package_config_graphql as string, graphqlHTTP({
	graphiql: true,
	schema:  new StarWarsSchema(),
}));

app.listen(process.env.npm_package_config_port);
