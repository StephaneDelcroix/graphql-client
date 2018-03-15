import {
	GraphQLFieldConfig, GraphQLID, GraphQLList, GraphQLNonNull, GraphQLObjectType, GraphQLResolveInfo,
	} from "graphql";
import {FilmRepository} from "../repository/FilmRepository";
import {PeopleRepository} from "../repository/PeopleRepository";
import {PlanetRepository} from "../repository/PlanetRepository";
import FilmType from "./FilmType";
import PeopleType from "./PeopleType";
import PlanetType from "./PlanetType";

export default new GraphQLObjectType({
	fields: () => ({
		film: {
			resolve: async (source, args, context, info: GraphQLResolveInfo) => {
				return await new FilmRepository().getAllAsync();
			},
			type: new GraphQLNonNull(new GraphQLList(FilmType)),
		} as GraphQLFieldConfig<any, any>,
		people: {
			args: {
				id: {
					description: "The Id",
					type: new GraphQLNonNull(GraphQLID),
				},
			},
			resolve: async (source, args, context, info: GraphQLResolveInfo) => {
				return await new PeopleRepository().getByIdAsync(parseInt(args.id, 10));
			},
			type: PeopleType,
		} as GraphQLFieldConfig<any, any>,
		planet: {
			args: {
				id: {
					description: "The Id",
					type: new GraphQLNonNull(GraphQLID),
				},
			},
			resolve: async (source, args, context, info: GraphQLResolveInfo) => {
				return await new PlanetRepository().getByIdAsync(parseInt(args.id, 10));
			},
			type: PlanetType,
		} as GraphQLFieldConfig<any, any>,
	}),
	name: "Query",
});
