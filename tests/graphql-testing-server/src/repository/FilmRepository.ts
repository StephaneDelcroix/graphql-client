import {Film} from "../models/Film";

export class FilmRepository {

	public async getAllAsync(): Promise<Film[]> {
		return [
			{
				episode_id: 4,
				id: 1,
				title: "A New Hope",
			},
		];
	}

	public async getByIdAsync(id: number): Promise<Film> {
		return (await this.getAllAsync())[id];
	}

}
