import {GraphQLObjectType, GraphQLObjectTypeConfig, GraphQLSchema, GraphQLString} from "graphql";
import FilmType from "./types/FilmType";

const queryType = new GraphQLObjectType({
	fields: () => ({
		film: {
			resolve: (root, { id }) => {
				return {
					episode_id: 1,
					title: "a",
				};
				},
			type: FilmType,
		},
	}),
	name: "Query",
});

export default new GraphQLSchema({
	query: queryType,
	types: [FilmType],
});
