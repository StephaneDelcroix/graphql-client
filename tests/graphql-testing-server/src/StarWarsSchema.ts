import {GraphQLObjectType, GraphQLObjectTypeConfig, GraphQLSchema, GraphQLString} from "graphql";
import {FilmType} from "./types/FilmType";

export class StarWarsSchema extends GraphQLSchema {

	private static readonly type: GraphQLObjectTypeConfig<any, any> = {
		fields: {
			film: {
				type: GraphQLString,
				resolve() {
					return "world";
				},
			},
		},
		name: "Root",
	};

	public constructor() {
		super({
			query: new GraphQLObjectType(StarWarsSchema.type),
		});
	}

}
