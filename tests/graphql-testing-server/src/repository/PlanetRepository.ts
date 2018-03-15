import {Planet} from "../models/Planet";

export class PlanetRepository {

	public async getAllAsync(): Promise<Planet[]> {
		return [
			{
				id: 3,
				name: "Yavin IV",
			},
		];
	}

	public async getByIdAsync(id: number): Promise<Planet> {
		return (await this.getAllAsync())[id];
	}

}
