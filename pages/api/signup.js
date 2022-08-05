// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import axios from "../../features/axios";

export default function handler(req, res) {
  const { username, email, password } = req.body;

  return new Promise(async (resolve, reject) => {
    await axios
      .post("/api/v1/users/", {
        username: username,
        email: email,
        password: password,
      })
      .then((response) => {
        res.send(response.data);
        resolve();
      })
      .catch((error) => {
        res.send(error);
        reject();
      });
  });
}
