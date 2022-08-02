// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import dotenv from "dotenv";

import axios from "../../features/axios";

dotenv.config();

export default function handler(req, res) {
  const { username, email, password } = req.body;

  axios
    .post("/users/", { username: username, email: email, password: password })
    .then((response) => {
      return res.send(response.data);
    });
}
