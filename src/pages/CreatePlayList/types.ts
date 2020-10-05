export interface ISavingFormFIelds {
  name: string;
}

export interface ICreatePlayList {
  addWorkout: (workout: IWorkout) => void;
  ownWorkout: IWorkout[];
}

export interface IState {
  isEditing: boolean;
  // urlList: string[];
  dayCount: number;
  workoutDaysData: IWorkoutDay[];
  // inputUrl: string;
}
