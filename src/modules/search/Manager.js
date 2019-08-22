import { pipeP } from "../../utils";
const proxy = "https://cors-anywhere.herokuapp.com/";

export const getSearch = (query) =>
  pipeP(
    () =>
      fetch(
        `${proxy}https://www.metaweather.com/api/location/search/?query=${query}`,
        {
          method: "GET"
        }
      ),
    x => x.json()
  )();
