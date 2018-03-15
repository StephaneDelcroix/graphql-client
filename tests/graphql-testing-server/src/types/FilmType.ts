import {GraphQLID, GraphQLInt, GraphQLNonNull, GraphQLObjectType, GraphQLString} from "graphql";

export default new GraphQLObjectType({
	fields: () => ({
		episode_id: {
			description: "The episode number of this film",
			type: new GraphQLNonNull(GraphQLInt),
		},
		id: {
			description: "The ID",
			type: new GraphQLNonNull(GraphQLID),
		},
		title: {
			description: "The title of this film",
			type: new GraphQLNonNull(GraphQLString),
		},
	}),
	name: "Film",
});
