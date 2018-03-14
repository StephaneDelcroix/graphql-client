import {Person} from "../models/Person";

export class PersonRepository {

	public async getAllAsync(): Promise<Person[]> {
		return [
			{
				name: "Luke Skywalker",
				personId: "1",
			},
		];
	}

	public async getByIdAsync(id: number): Promise<Person> {
		return (await this.getAllAsync())[0];
	}

}
