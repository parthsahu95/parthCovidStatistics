const express = require("express");
// var ParseHub = require("parsehub");
// var api = new ParseHub(process.env.API_KEY);
require("dotenv").config({ path: "./.env" });
var request = require("request");

const app = express();
const port = process.env.PORT;

app.get("/", (req, res) => {
  request(
    {
      uri: `https://parsehub.com/api/v2/projects/${process.env.PROJECT_TOKEN}/last_ready_run/data`,
      method: "GET",
      gzip: true,
      qs: {
        api_key: process.env.API_KEY,
        format: "json",
      },
    },
    function (err, resp, body) {
      let jsonData = JSON.parse(body);
      res.send(jsonData);

      // console.log(body);
    }
  );
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
