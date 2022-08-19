// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import axios from "../../features/axios";

export default function handler(req, res) {
  const { title, language, text } = req.body;

  return new Promise(async (resolve, reject) => {
    await axios
      .post("/snippets/", {
        title: title,
        language: language,
        text: JSON.stringify(text),
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
