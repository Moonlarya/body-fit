import { Formik } from "formik";
import React, { Component } from "react";
import ReactPlayer from "react-player";

interface IFormFields {
  url: string;
}

class CreatePlayList extends Component {
  private static initialValues: IFormFields = { url: "" };

  state = {
    url: [],
  };

  onSubmit = async (values: IFormFields) => {
    this.setState({ url: [...this.state.url, values.url] });
  };

  render() {
    const { url } = this.state;

    return (
      <>
        <h1>Take it yourself!</h1>
        <div className="wrapper">
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
              <form onSubmit={handleSubmit} className="link-form">
                <input
                  className="styled-input"
                  type="text"
                  name="url"
                  placeholder="Insert your link here"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.url}
                />
                {errors.url && touched.url && errors.url}
                <button type="submit" className="primary-button">
                  Go!
                </button>
              </form>
            )}
          </Formik>
          <div className="workout-plan">
            <div className="workout-block">
              {url.map((url, index) => (
                <div className="player">
                  <ReactPlayer
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
        </div>
      </>
    );
  }
}

export default CreatePlayList;
