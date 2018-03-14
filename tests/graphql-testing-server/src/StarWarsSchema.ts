import {GraphQLList, GraphQLObjectType, GraphQLObjectTypeConfig, GraphQLSchema, GraphQLString} from "graphql";
import {GraphQLFieldConfig, GraphQLResolveInfo} from "graphql/type/definition";
import {FilmRepository} from "./repository/FilmRepository";
import FilmType from "./types/FilmType";

const queryType = new GraphQLObjectType({
	fields: () => ({
		film: {
			resolve: (source, args, context, info: GraphQLResolveInfo) => {
				console.log(source);
				console.log(args);
				console.log(context);
				return new FilmRepository().getAllAsync();
			},
			type: new GraphQLList(FilmType),
		} as GraphQLFieldConfig<any, any>,
	}),
	name: "Query",
});

export default new GraphQLSchema({
	query: queryType,
	types: [FilmType],
});
