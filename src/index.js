const express = require("express");
const bodyParser = require("body-parser");
const expressGraphQL = require("express-graphql");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(
  "/graphql",
  expressGraphQL({
    schema: "",
    graphiql: true,
    pretty: true
  })
);

app.listen(3000, () => {
  console.log("express connect");
});
