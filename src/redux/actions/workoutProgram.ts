import axios from "axios";
import cheerio from "cheerio";

import { SET_CHLOYA_TING_DATA, SET_CHLOYA_TING_PROGRAMS } from "../types";

export const setData = (data) => ({
  type: SET_CHLOYA_TING_DATA,
  payload: data,
});

export const setPrograms = (programs) => ({
  type: SET_CHLOYA_TING_PROGRAMS,
  payload: programs,
});

const BASE_URL = "https://www.chloeting.com/";

export const loadProgramLinks = () => {
  return async (dispatch) => {
    const response = await axios.get(`${BASE_URL}program/`);

    try {
      const html = response.data;
      const $ = cheerio.load(html);

      const programSelector = $(".programs-list")
        .find("a")
        .get()
        // eslint-disable-next-line
        .map((link) => `${BASE_URL}program/` + $(link).attr("href"));

      const program = programSelector.map((el) => {
        const nameFormatted = el
          .split(/[/ .]+/)
          .slice(-2, -1)
          .toString()
          .replace(/-/g, " ");

        const name = nameFormatted[0].toUpperCase() + nameFormatted.slice(1);

        return {
          name,
          link: el,
        };
      });

      dispatch(setPrograms(program));
    } catch (err) {
      console.error(err);
    }
  };
};

export const loadDataFromProgramLink = (url: string) => {
  return async (dispatch) => {
    const devtoList = [];

    const response = await axios.get(url);

    try {
      const html = response.data;
      const $ = cheerio.load(html);

      $(".cal-entry").each((i) => {
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
      dispatch(setData(devtoList));
    } catch (err) {
      console.error(err);
    }
  };
};
