const axios = require("axios");
const webCrawlingFuntion = require('./utils/main')

axios
  .get("https://news.ycombinator.com/")
  .then((response) =>webCrawlingFuntion(response.data))
  .catch((error) => console.error(error))
