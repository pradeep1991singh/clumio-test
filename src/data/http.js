import axios from "axios";

const httpClient = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    "Content-Type": "application/json",
  },
});

const http = {
  async request(config) {
    try {
      const response = await httpClient.request(config);
      return response.data;
    } catch (err) {
      // TODO: handle error gracefully
      console.log("request error. err: ", err.message);
      console.log("httpClient service errored");
      throw err;
    }
  },

  get(config) {
    const getConf = Object.assign({}, config, { method: "get" });
    return this.request(getConf);
  },

  post(config) {
    const postConf = Object.assign({}, config, { method: "post" });
    return this.request(postConf);
  },

  put(config) {
    const putConf = Object.assign({}, config, { method: "put" });
    return this.request(putConf);
  },

  delete(config) {
    const deleteConf = Object.assign({}, config, { method: "delete" });
    return this.request(deleteConf);
  },
};

export default http;
