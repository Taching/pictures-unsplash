import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    Authorization:
      "Client-ID d05d859c2baf5d7e372ee0f0fbfa1b06439f58069ba6d6f2066dbb813b580bc4"
  }
});
