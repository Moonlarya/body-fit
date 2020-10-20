import ApiService from "./ApiService";

class workoutProgramService extends ApiService {
  async getAll(): Promise<IWorkout[]> {
    const response = await this.api({ url: "/workoutProgram" }).then(
      (response) => response.data
    );

    return response;
  }

  async getById(id: number): Promise<IWorkout> {
    const response = await this.api({ url: `/workoutProgram/${id}` }).then(
      (response) => response.data
    );

    return response;
  }

  async delete(id: number): Promise<IWorkout> {
    const response = await this.api
      .delete(id.toString())
      .then((response) => response.data);

    return response;
  }

  async create(data: IWorkout) {
    const response = await this.api({
      url: "/workoutProgram/add",
      method: "post",
      data,
    });

    return response.data;
  }
}

export default new workoutProgramService();
