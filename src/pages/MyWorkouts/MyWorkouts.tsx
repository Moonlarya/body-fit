import React, { Component } from "react";
import { Field, Formik } from "formik";
import { connect } from "react-redux";
import LazyLoad from "react-lazyload";
import ReactPlayer from "react-player";
import { createSelector } from "reselect";

import { setWorkoutName } from "../../redux/actions/ownWorkout";

interface IMyWorkoutsProps {
  ownWorkout: IWorkout[];
  selectedWorkout: IWorkout;
  setWorkoutName: (name: string) => void;
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
    const { ownWorkout, selectedWorkout } = this.props;

    return (
      <>
        <div className="wrapper">
          <h1>Let's build yourself!</h1>
          <p className="subtitle text-center">
            Now you can workout with your favourite workouts
          </p>
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
                <Field
                  as="select"
                  className="styled-input"
                  name="name"
                  placeholder="Choose training"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                >
                  <option value="" selected disabled hidden>
                    Choose here
                  </option>
                  {ownWorkout &&
                    ownWorkout.map((el) => (
                      // eslint-disable-next-line
                      <option value={el.name} key={el.name}>
                        {el.name}
                      </option>
                    ))}
                </Field>
                {errors.name && touched.name && errors.name}
                <button type="submit" className="primary-button">
                  Go!
                </button>
              </form>
            )}
          </Formik>
          <div className="workout-title">
            <h1>{selectedWorkout?.name}</h1>
          </div>
          <div className="workout-block">
            {selectedWorkout?.data.map((dayWorkout, index) => (
              <div className="workout-plan">
                <h2>DAY {dayWorkout.day}</h2>
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
            ))}
          </div>
        </div>
      </>
    );
  }
}
const mapStateToProps = (state) => ({
  ownWorkout: state.ownWorkoutPrograms.ownWorkout,
  selectedWorkout: selectedWorkoutSelector,
});

const mapDispatchToProps = { setWorkoutName };

export default connect(mapStateToProps, mapDispatchToProps)(MyWorkouts);
