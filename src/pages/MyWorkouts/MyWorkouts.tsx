import React, { Component } from "react";
import { Formik } from "formik";
import { connect } from "react-redux";
import LazyLoad from "react-lazyload";
import ReactPlayer from "react-player";
import { createSelector } from "reselect";
import { withTranslation } from "react-i18next";
import compose from "lodash/flowRight";
import { Link } from "react-router-dom";

import {
  setWorkoutName,
  loadWorkouts,
  setMainOwnWorkout,
} from "../../redux/actions/ownWorkout";
import { setMainWorkout } from "../../redux/actions/workoutProgram";

interface IMyWorkoutsProps {
  createdWorkoutsList: IWorkout[];
  selectedWorkout: IWorkout;
  setWorkoutName: (name: string) => void;
  setMainOwnWorkout: (data) => void;
  setMainWorkout: (data) => void;
  loadWorkouts: () => void;
  t: (key: string) => any;
}

export const selectedWorkoutSelector = createSelector(
  (state: any) => state.ownWorkoutPrograms,
  (workouts) =>
    workouts.createdWorkoutsList.find(
      (el: IWorkout) => el.name === workouts.selectedWorkoutName
    )
);

class MyWorkouts extends Component<IMyWorkoutsProps> {
  private initialValues = { name: this.props.selectedWorkout?.name || "" };

  onSubmit = (values: IWorkout) => {
    this.props.setWorkoutName(values.name);
  };

  setAsMain = () => {
    const { setMainWorkout, setMainOwnWorkout } = this.props;
    setMainWorkout(false);
    setMainOwnWorkout(true);
  };

  componentDidMount() {
    const { loadWorkouts } = this.props;
    loadWorkouts();
  }

  render() {
    const { createdWorkoutsList, selectedWorkout, t } = this.props;

    return (
      <div className="wrapper">
        <h1>{t("MyWorkouts.title")}</h1>
        <p className="subtitle text-center">{t("MyWorkouts.subtitle")}</p>
        <Formik initialValues={this.initialValues} onSubmit={this.onSubmit}>
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
          }) => (
            <form
              onSubmit={handleSubmit}
              className="link-form add-playlist-select"
            >
              {!createdWorkoutsList.length ? (
                <div className="flex-column">
                  <p className="subtitle">{t("MyWorkouts.404")}</p>
                  <Link to="/new-playlist">
                    <button className="primary-button">
                      {t("MyWorkouts.create_button")}
                    </button>
                  </Link>
                </div>
              ) : (
                <>
                  <select
                    className="styled-input"
                    name="name"
                    placeholder="Choose training"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                  >
                    <option value="" selected disabled hidden>
                      {t("MyWorkouts.choose")}
                    </option>
                    {createdWorkoutsList.map((el) => (
                      <option value={el.name} key={el.name}>
                        {el.name}
                      </option>
                    ))}
                  </select>
                  {errors.name && touched.name && errors.name}
                  <button type="submit" className="primary-button">
                    {t("AddPlaylist.go_button")}
                  </button>
                  <button className="primary-button" onClick={this.setAsMain}>
                    {t("MyWorkouts.set_as_main_button")}
                  </button>
                </>
              )}
            </form>
          )}
        </Formik>

        <div className="workout-title">
          <h1>{selectedWorkout?.name}</h1>
        </div>
        <div className="workout-plan">
          {selectedWorkout?.data.map((dayWorkout) => (
            <div key={+dayWorkout}>
              <h2>
                {t("MyWorkouts.day")} {dayWorkout.day}
              </h2>
              <div className="workout-block">
                {dayWorkout.workout.map((workout, index) => (
                  <div className="player" key={index}>
                    <LazyLoad>
                      <ReactPlayer
                        url={workout}
                        width="100%"
                        height="100%"
                        controls
                      />
                    </LazyLoad>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  createdWorkoutsList: state.ownWorkoutPrograms.createdWorkoutsList,
  selectedWorkout: selectedWorkoutSelector(state),
});

const mapDispatchToProps = {
  setWorkoutName,
  loadWorkouts,
  setMainOwnWorkout,
  setMainWorkout,
};

export default compose(
  withTranslation(),
  connect(mapStateToProps, mapDispatchToProps)
)(MyWorkouts);
