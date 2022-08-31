import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID oyr14NJUtqgGk-2jaLR7jLbI8bgD08q1QpfQG6f2QxQ",
  },
});
