// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "../../features/axios";

export default function handler(req, res) {
  return new Promise(async (resolve, reject) => {
    await axios
      .get("/snippets", {})
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
