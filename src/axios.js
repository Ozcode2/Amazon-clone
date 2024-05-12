import axios from "axios";

const instance = axios.create({
  // THE API [cloud function] URL
  baseURL: "https://us-central1-clone-c5e62.cloudfunctions.net/api",

  //https://us-central1-clone-c5e62.cloudfunctions.net/api
  // "http://127.0.0.1:5001/clone-c5e62/us-central1/api",
});

export default instance;
