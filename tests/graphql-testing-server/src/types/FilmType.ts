import {GraphQLObjectType, GraphQLObjectTypeConfig, GraphQLString} from "graphql";
import {Film} from "../models/Film";

export class FilmType extends GraphQLObjectType {

	private static readonly type: GraphQLObjectTypeConfig<Film, any> = {
		description: "A single film.",
		fields: {
			title: {
				description: "The title of this film.",
				type: GraphQLString,
			},
		},
		name: "Film",
	};

	public constructor() {
		super(FilmType.type);
	}

}
