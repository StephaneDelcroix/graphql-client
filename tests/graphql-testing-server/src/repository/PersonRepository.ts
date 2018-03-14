import {Person} from "../models/Person";

export class PersonRepository {

	public async getAllAsync(): Promise<Person[]> {
		return [
			{
				name: "Luke Skywalker",
				personID: "1",
			},
		];
	}

	public async getByIdAsync(id: number): Promise<Person> {
		const all = await this.getAllAsync();
		return all[id - 1];
	}

}
