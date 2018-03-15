import {People} from "../models/People";

export class PeopleRepository {

	public async getAllAsync(): Promise<People[]> {
		return [
			{
				id: 1,
				name: "Luke Skywalker",
			},
		];
	}

	public async getByIdAsync(id: number): Promise<People> {
		return (await this.getAllAsync())[id];

	}

}
