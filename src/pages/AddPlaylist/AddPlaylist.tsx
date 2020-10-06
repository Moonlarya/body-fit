import React, { Component } from "react";
import ReactPlayer from "react-player";
import { Field, Formik } from "formik";
import { connect } from "react-redux";
import LazyLoad from "react-lazyload";

import {
  loadDataFromProgramLink,
  loadProgramLinks,
} from "redux/actions/workoutProgram";

interface IFormFields {
  url: string;
}

interface IAddPlaylistProps {
  loadProgramLinks: () => Promise<void>;
  loadDataFromProgramLink: (url: string) => Promise<void>;
  programs: any;
  data: any;
}

class AddPlaylist extends Component<IAddPlaylistProps> {
  private static initialValues: IFormFields = { url: "" };

  componentDidMount() {
    const { loadProgramLinks } = this.props;
    loadProgramLinks();
  }

  onSubmit = async (values: IFormFields) => {
    await this.props.loadDataFromProgramLink(values.url);
  };

  render() {
    const { programs, data } = this.props;
    return (
      <>
        <div className="wrapper">
          <h1>Let's get better!</h1>
          <p className="subtitle text-center">
            Choose workout program and let's start!
          </p>
          <button className="primary-button">Chloe Ting</button>
          <Formik
            initialValues={AddPlaylist.initialValues}
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
                className="link-form add-playlist-select"
              >
                <Field
                  as="select"
                  className="styled-input"
                  name="url"
                  placeholder="Choose training"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.url}
                >
                  <option value="" selected disabled hidden>
                    Choose here
                  </option>
                  {programs &&
                    programs.map((el, index) => (
                      // eslint-disable-next-line
                      <option value={el.link} key={index}>
                        {el.name}
                      </option>
                    ))}
                </Field>
                {errors.url && touched.url && errors.url}
                <button type="submit" className="primary-button">
                  Go!
                </button>
              </form>
            )}
          </Formik>

          {data &&
            data.map((el, index) => {
              return (
                // eslint-disable-next-line
                <div key={index} className="workout-plan">
                  <div className="workout-title">
                    <h2>{el.title}</h2>
                    <span className="subtitle">{el.subtitle}</span>
                  </div>
                  <div className="workout-block">
                    {el.url &&
                      el.url.map((url, index) => (
                        <div className="player">
                          <LazyLoad>
                            <ReactPlayer
                              // eslint-disable-next-line
                              key={index}
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
              );
            })}
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  programs: state.workoutData.programs,
  data: state.workoutData.data,
});

const mapDispatchToProps = { loadProgramLinks, loadDataFromProgramLink };

export default connect(mapStateToProps, mapDispatchToProps)(AddPlaylist);
