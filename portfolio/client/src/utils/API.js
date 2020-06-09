import axios from "axios";

export default {
  AddMessage: function (userData) {
    return axios.post("/api/message", userData);
  },
};
