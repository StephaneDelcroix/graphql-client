import {GraphQLFieldConfig, GraphQLList, GraphQLObjectType, GraphQLResolveInfo} from "graphql";
import {FilmRepository} from "../repository/FilmRepository";
import FilmType from "./FilmType";

export default new GraphQLObjectType({
	fields: () => ({
		film: {
			resolve: async (source, args, context, info: GraphQLResolveInfo) => {
				return await new FilmRepository().getAllAsync();
			},
			type: new GraphQLList(FilmType),
		} as GraphQLFieldConfig<any, any>,
	}),
	name: "Query",
});
