// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import axios from "../../features/axios";

export default function handler(req, res) {
  const { names, email, message } = req.body;

  return new Promise(async (resolve, reject) => {
    await axios
      .post("/api/v1/token/contact", {
        names: names,
        email: email,
        message: message,
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
