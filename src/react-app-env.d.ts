/// <reference types="react-scripts" />

declare interface IWorkoutDay {
  day: number;
  workout: string[];
}

declare interface IWorkout {
  name: string;
  data: IWorkoutDay[];
}

declare interface IState {
  dayCount: number;
  workoutDaysData: IWorkoutDay[];
}
