import React, { Component } from "react";
import { connect } from "react-redux";
import ReactPlayer from "react-player";
import { Field, Formik } from "formik";
import { withTranslation } from "react-i18next";
import compose from "lodash/flowRight";

import { addWorkout } from "../../redux/actions/ownWorkout";

import DayForm from "./DayForm";

import { ICreatePlayList, ISavingFormFIelds } from "./types";

class CreatePlayList extends Component<ICreatePlayList, IState> {
  private static initialValues: ISavingFormFIelds = {
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

  onSubmit = async (values: ISavingFormFIelds) => {
    const { addWorkout } = this.props;
    const { workoutDaysData } = this.state;
    addWorkout({ name: values.name, data: workoutDaysData });
  };

  render() {
    const { workoutDaysData, dayCount } = this.state;
    const { t } = this.props;

    return (
      <>
        <h1>{t("CreatePlayList.title")}</h1>
        <p className="subtitle text-center">{t("CreatePlayList.subtitle")}</p>
        <DayForm dayNumber={dayCount + 1} onSave={this.handleAddDay} />
        <div className="wrapper">
          <div className="workout-plan">
            {workoutDaysData.map((el) => (
              <div key={el.day}>
                <h1>
                  {t("CreatePlayList.day")} {el.day}
                </h1>
                <div className="workout-block">
                  {el.workout.map((url, index) => (
                    <div className="player" key={index}>
                      <ReactPlayer
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
          <Formik
            initialValues={CreatePlayList.initialValues}
            onSubmit={this.onSubmit}
          >
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
                className="link-form add-playlist-select fixed-center-down"
              >
                <Field
                  className="styled-input"
                  name="name"
                  placeholder="Name your workout set"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                />
                {errors.name && touched.name && errors.name}
                <button type="submit" className="primary-button">
                  {t("CreatePlayList.save_button")}
                </button>
              </form>
            )}
          </Formik>
        </div>
      </>
    );
  }
}
const mapStateToProps = (state) => ({
  ownWorkout: state.ownWorkoutPrograms.ownWorkout,
});

const mapDispatchToProps = { addWorkout };

export default compose(
  withTranslation(),
  connect(mapStateToProps, mapDispatchToProps)
)(CreatePlayList);
