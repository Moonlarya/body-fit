import React, { Component } from "react";
import axios from "axios";
import cheerio from "cheerio";
import ReactPlayer from "react-player";
import { Formik } from "formik";

import Footer from "components/Footer";

interface IFormFields {
  url: string;
}

class AddPlaylist extends Component {
  private static initialValues: IFormFields = { url: "" };

  state = {
    url: [],
    data: null,
  };

  loadInfo = async () => {
    const { url } = this.state;

    let devtoList = [];

    const response = await axios.get(url.toString());

    if (response.status === 200) {
      const html = response.data;
      const $ = cheerio.load(html);

      $(".cal-entry").each(function (i) {
        const generalTitle = $(this)
          .children(".info")
          .text()
          .replace(/(\r\n|\n|\r)/gm, "");

        devtoList[i] = {
          title: generalTitle
            .trim()
            .split(" ")
            .slice(0, 2)
            .filter(Boolean)
            .join(" "),
          subtitle: generalTitle
            .trim()
            .split(" ")
            .slice(2)
            .filter(Boolean)
            .join(" "),
          url: $(this)
            .children(".videos")
            .find("a")
            .get()
            .map((link) => $(link).attr("href")),
        };
        return devtoList;
      });
    }

    this.setState({ data: devtoList });
  };

  onSubmit = async (values: IFormFields) => {
    this.setState({ url: values.url });
    await this.loadInfo();
  };
  render() {
    const { data } = this.state;

    return (
      <>
        <div className="wrapper">
          <h1>Let's get better!</h1>
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

          {data &&
            data.map((el, index) => {
              return (
                <div key={index} className="workout-plan">
                  <div className="workout-title">
                    <h2>{el.title}</h2>
                    <span className="subtitle">{el.subtitle}</span>
                  </div>
                  <div className="workout-block">
                    {el.url &&
                      el.url.map((url, index) => (
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
              );
            })}
        </div>
        <Footer />
      </>
    );
  }
}

export default AddPlaylist;
