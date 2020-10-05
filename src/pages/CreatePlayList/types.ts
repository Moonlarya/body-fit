export interface ISavingFormFIelds {
  name: string;
}

export interface ICreatePlayList {
  addWorkout: (workout: IWorkout) => void;
  ownWorkout: IWorkout[];
}

export interface IState {
  dayCount: number;
  workoutDaysData: IWorkoutDay[];
}
