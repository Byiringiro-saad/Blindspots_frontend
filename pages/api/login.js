// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import axios from "../../features/axios";

export default function handler(req, res) {
  const { username, password } = req.body;

  return new Promise((resolve, reject) => {
    axios
      .post("/token/login", { username: username, password: password })
      .then((response) => {
        res.json(response.data);
        resolve();
      })
      .catch((error) => {
        res.send(error);
        reject();
      });
  });
}
