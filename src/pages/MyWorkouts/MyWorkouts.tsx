import React, { Component } from "react";
import { Formik } from "formik";
import { connect } from "react-redux";
import LazyLoad from "react-lazyload";
import ReactPlayer from "react-player";
import { createSelector } from "reselect";
import { withTranslation } from "react-i18next";
import compose from "lodash/flowRight";

import { setWorkoutName } from "../../redux/actions/ownWorkout";

interface IMyWorkoutsProps {
  ownWorkout: IWorkout[];
  selectedWorkout: IWorkout;
  setWorkoutName: (name: string) => void;
  t: (key: string) => any;
}

const selectedWorkoutSelector = createSelector(
  (state: any) => state.ownWorkoutPrograms,
  (workouts) =>
    workouts.ownWorkout.find(
      (el: IWorkout) => el.name === workouts.selectedWorkoutName
    )
);

class MyWorkouts extends Component<IMyWorkoutsProps> {
  private initialValues = { name: this.props.selectedWorkout?.name || "" };

  onSubmit = (values: IWorkout) => {
    this.props.setWorkoutName(values.name);
  };

  render() {
    const { ownWorkout, selectedWorkout, t } = this.props;

    return (
      <>
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
                {!ownWorkout.length ? (
                  <p className="subtitle">{t("MyWorkouts.404")}</p>
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
                      {ownWorkout.map((el) => (
                        <option value={el.name} key={el.name}>
                          {el.name}
                        </option>
                      ))}
                    </select>
                    {errors.name && touched.name && errors.name}
                    <button type="submit" className="primary-button">
                      {t("AddPlaylist.go_button")}
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
            {selectedWorkout?.data.map((dayWorkout, index) => (
              <>
                <h2>
                  {t("MyWorkouts.day")} {dayWorkout.day}
                </h2>
                <div className="workout-block">
                  {dayWorkout.workout.map((workout) => (
                    <div className="player">
                      <LazyLoad>
                        <ReactPlayer
                          // eslint-disable-next-line
                          key={index}
                          url={workout}
                          width="100%"
                          height="100%"
                          controls
                        />
                      </LazyLoad>
                    </div>
                  ))}
                </div>
              </>
            ))}
          </div>
        </div>
      </>
    );
  }
}
const mapStateToProps = (state) => ({
  ownWorkout: state.ownWorkoutPrograms.ownWorkout,
  selectedWorkout: selectedWorkoutSelector(state),
});

const mapDispatchToProps = { setWorkoutName };

export default compose(
  withTranslation(),
  connect(mapStateToProps, mapDispatchToProps)
)(MyWorkouts);
