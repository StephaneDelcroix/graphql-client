import {GraphQLID, GraphQLNonNull, GraphQLObjectType, GraphQLString} from "graphql";

export default new GraphQLObjectType({
	fields: () => ({
		id: {
			description: "The Id",
			type: new GraphQLNonNull(GraphQLID),
		},
		name: {
			description: "The name",
			type: new GraphQLNonNull(GraphQLString),
		},
	}),
	name: "Planet",
});
