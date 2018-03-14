import {GraphQLFieldConfig, GraphQLList, GraphQLNonNull, GraphQLObjectType, GraphQLResolveInfo} from "graphql";
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
			resolve: async (source, args, context, info: GraphQLResolveInfo) => {
				return await new PersonRepository().getAllAsync();
			},
			type: new GraphQLNonNull(new GraphQLList(PersonType)),
		} as GraphQLFieldConfig<any, any>,
	}),
	name: "Query",
});
