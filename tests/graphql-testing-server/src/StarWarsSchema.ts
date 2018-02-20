import {GraphQLObjectType, GraphQLSchema, GraphQLString} from "graphql";

export class StarWarsSchema extends GraphQLSchema {

	public constructor() {
		super({
			query: new GraphQLObjectType({
				fields: {
					hello: {
						type: GraphQLString,
						resolve() {
							return "world";
						},
					},
				}, name: "RootQueryType",
			}),
		});
	}

}
