import React, { Component } from "react";
import ReactPlayer from "react-player";
import { Formik } from "formik";
import { connect } from "react-redux";
import LazyLoad from "react-lazyload";
import { withTranslation } from "react-i18next";
import compose from "lodash/flowRight";

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
  t: (key: string) => any;
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
    const { programs, data, t } = this.props;

    return (
      <>
        <div className="wrapper">
          <h1>{t("AddPlaylist.welcome_title")}</h1>
          <p className="subtitle text-center">
            {t("AddPlaylist.welcome_subtitle")}
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
                <select
                  className="styled-input"
                  name="url"
                  placeholder="Choose training"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.url}
                >
                  <option value="" selected disabled hidden>
                    {t("AddPlaylist.select_direction")}
                  </option>
                  {programs.map((el) => (
                    <option value={el.link} key={el.name}>
                      {el.name}
                    </option>
                  ))}
                </select>
                {errors.url && touched.url && errors.url}
                <button type="submit" className="primary-button">
                  {t("AddPlaylist.go_button")}
                </button>
              </form>
            )}
          </Formik>

          {data?.map((el) => (
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
          ))}
        </div>
        )
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  programs: state.workoutData.programs,
  data: state.workoutData.data,
});

const mapDispatchToProps = { loadProgramLinks, loadDataFromProgramLink };

export default compose(
  withTranslation(),
  connect(mapStateToProps, mapDispatchToProps)
)(AddPlaylist);
