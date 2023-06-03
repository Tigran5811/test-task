import axios from "axios";

export const getJoke = async () =>
  axios({
    method: "GET",
    url: `https://api.chucknorris.io/jokes/random`
  });
