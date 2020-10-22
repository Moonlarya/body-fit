import React, { FC } from "react";
import { connect } from "react-redux";
import LazyLoad from "react-lazyload";
import ReactPlayer from "react-player";

import { selectedWorkoutSelector } from "../MyWorkouts/MyWorkouts";

interface IMainPageProps {
  data: any;
  selected: any;
}

const MainPage: FC<IMainPageProps> = ({ data, selected }) => {
  return (
    <div className="wrapper">
      <h1>Hello, dear! ♥</h1>
      <p className="subtitle text-center">
        Here you can choose your main workout program and main meal set to track
        it!
      </p>

      {selected === "workoutData" ? (
        data?.map((el) => (
          <div key={el.title} className="workout-plan">
            <div className="workout-title">
              <h2>{el.title}</h2>
              <span className="subtitle">{el.subtitle}</span>
            </div>
            <div className="workout-block">
              {el.url?.map((url, index) => (
                <div
                  className="player"
                  // eslint-disable-next-line
                  key={index}
                >
                  <LazyLoad
                    // eslint-disable-next-line
                    key={index}
                  >
                    <ReactPlayer
                      url={url}
                      width="100%"
                      height="100%"
                      controls
                    />
                  </LazyLoad>
                </div>
              ))}
            </div>
          </div>
        ))
      ) : (
        <div className="workout-plan">
          {data?.map((dayWorkout) => (
            <div key={+dayWorkout}>
              <h2>Day {dayWorkout.day}</h2>
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
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  data: state.workoutData.isMain
    ? state.workoutData.data
    : (selectedWorkoutSelector(state) || {}).data,
  selected: state.workoutData.isMain ? "workoutData" : "ownWorkoutData",
});

export default connect(mapStateToProps)(MainPage);
