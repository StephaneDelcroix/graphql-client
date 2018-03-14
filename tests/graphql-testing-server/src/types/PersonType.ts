import {GraphQLInt, GraphQLNonNull, GraphQLObjectType, GraphQLString} from "graphql";

export default new GraphQLObjectType({
	fields: () => ({
		name: {
			description: "The name",
			type: new GraphQLNonNull(GraphQLString),
		},
		personID: {
			description: "The Id",
			type: new GraphQLNonNull(GraphQLString),
		},
	}),
	name: "Person",
});
