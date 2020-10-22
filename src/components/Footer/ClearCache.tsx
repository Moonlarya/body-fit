import React, { Component } from "react";
import { connect } from "react-redux";

import {
  setWorkouts,
  setWorkoutName,
  setMainOwnWorkout,
} from "../../redux/actions/ownWorkout";
import {
  setData,
  setPrograms,
  setMainWorkout,
  loadDataFromProgramLink,
} from "../../redux/actions/workoutProgram";

interface IClearCacheProps {
  setWorkouts: (data: IWorkout[]) => void;
  setWorkoutName: (name: string) => void;
  setMainOwnWorkout: (data: Boolean) => void;
  setData: (data: IWorkout[]) => void;
  setPrograms: (data: IWorkout[]) => void;
  setMainWorkout: (data: Boolean) => void;
  loadDataFromProgramLink: (url: string) => void;
}

class ClearCache extends Component<IClearCacheProps> {
  clearCache = () => {
    const {
      setWorkouts,
      setWorkoutName,
      setMainOwnWorkout,
      setData,
      setPrograms,
      setMainWorkout,
      loadDataFromProgramLink,
    } = this.props;

    setWorkouts([]);
    setWorkoutName("");
    setMainOwnWorkout(false);
    setData([]);
    setPrograms([]);
    setMainWorkout(false);
    loadDataFromProgramLink("");
  };

  render() {
    return (
      <button className="primary-button clear-button" onClick={this.clearCache}>
        CC
      </button>
    );
  }
}

const mapDispatchToProps = {
  setWorkouts,
  setWorkoutName,
  setMainOwnWorkout,
  setData,
  setPrograms,
  setMainWorkout,
  loadDataFromProgramLink,
};

export default connect(null, mapDispatchToProps)(ClearCache);
