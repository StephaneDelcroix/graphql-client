import {GraphQLInt, GraphQLNonNull, GraphQLObjectType, GraphQLString} from "graphql";

export default new GraphQLObjectType({
	fields: () => ({
		episode_id: {
			description: "The Id",
			type: new GraphQLNonNull(GraphQLInt),
		},
		title: {
			description: "The Title",
			type: new GraphQLNonNull(GraphQLString),
		},
	}),
	name: "Film",
});
