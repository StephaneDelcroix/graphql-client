import {GraphQLSchema} from "graphql";
import FilmType from "./types/FilmType";
import QueryType from "./types/QueryType";

export default new GraphQLSchema({
	query: QueryType,
	types: [FilmType],
});
