// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import axios from "../../features/axios";

export default function handler(req, res) {
  const { username, email, about, website, painpoints } = req.body;

  return new Promise(async (resolve, reject) => {
    await axios
      .post("", {
        username: username,
        email: email,
        about: about,
        website: website,
        painpoints: painpoints,
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
