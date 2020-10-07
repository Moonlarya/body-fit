export interface ISavingFormFIelds {
  name: string;
}

export interface ICreatePlayList {
  addWorkout: (workout: IWorkout) => void;
  ownWorkout: IWorkout[];
  t: (key: string) => any;
}
