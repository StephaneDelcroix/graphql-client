import {
	GraphQLFieldConfig, GraphQLList, GraphQLNonNull, GraphQLObjectType, GraphQLResolveInfo,
	GraphQLString,
} from "graphql";
import {Person} from "../models/Person";
import {FilmRepository} from "../repository/FilmRepository";
import {PersonRepository} from "../repository/PersonRepository";
import FilmType from "./FilmType";
import PersonType from "./PersonType";

export default new GraphQLObjectType({
	fields: () => ({
		film: {
			resolve: async (source, args, context, info: GraphQLResolveInfo) => {
				return await new FilmRepository().getAllAsync();
			},
			type: new GraphQLNonNull(new GraphQLList(FilmType)),
		} as GraphQLFieldConfig<any, any>,
		person: {
			args: {
				personID: {
					description: "The Id",
					type: new GraphQLNonNull(GraphQLString),
				},
			},
			resolve: async (source, args, context, info: GraphQLResolveInfo) => {
				return await new PersonRepository().getByIdAsync(parseInt(args.personID, 10));
			},
			type: PersonType,
		} as GraphQLFieldConfig<any, any>,
	}),
	name: "Query",
});
