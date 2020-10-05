import React, { Component } from "react";
import { connect } from "react-redux";
import ReactPlayer from "react-player";

import addWorkout from "../../redux/actions/ownWorkout";

import DayForm from "./DayForm";

import { ICreatePlayList, IState, ISavingFormFIelds } from "./types";

class CreatePlayList extends Component<ICreatePlayList, IState> {
  private static initialValuesForSavingForm: ISavingFormFIelds = {
    name: "",
  };

  state: IState = {
    dayCount: 0,
    workoutDaysData: [],
  };

  handleAddDay = (workoutDayData: IWorkoutDay) => {
    this.setState((state) => ({
      workoutDaysData: [...state.workoutDaysData, workoutDayData],
      dayCount: state.dayCount + 1,
    }));
  };

  render() {
    const { workoutDaysData, dayCount } = this.state;

    return (
      <>
        <h1>Take it yourself!</h1>
        <p className="subtitle text-center">
          You can create your own workout program
        </p>
        <DayForm dayNumber={dayCount + 1} onSave={this.handleAddDay} />
        <div className="wrapper">
          <div className="workout-plan">
            {workoutDaysData.map((el, index) => (
              <div key={el.day}>
                <h1>Day {el.day}</h1>
                <div className="workout-block">
                  {el.workout.map((url) => (
                    <div className="player">
                      <ReactPlayer
                        // eslint-disable-next-line
                        key={index}
                        url={url}
                        width="100%"
                        height="100%"
                        controls
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </>
    );
  }
}
const mapStateToProps = (state) => ({
  ownWorkout: state.ownWorkoutPrograms.ownWorkout,
});

const mapDispatchToProps = { addWorkout };

export default connect(mapStateToProps, mapDispatchToProps)(CreatePlayList);
