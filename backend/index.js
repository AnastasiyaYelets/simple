const express = require('express');
const scrapeIt = require("scrape-it");
const scrappingSchema = require('./scrapping-schema')
const bodyParser = require("body-parser");
const app     = express(bodyParser.json());
const cors = require('cors');
app.use(cors({credentials: true, origin: true}));

function scrapeSomething(keyword) {
  const promises = scrappingSchema.map(shop =>
    scrapeIt(`${shop.url}&${shop.queryKey}=${keyword}`, shop.options)
    .then(({items}) => items.map(item => Object.assign({}, item, {name: shop.name})))
  )

  // flatten array of arrays
  return Promise.all(promises).then(result => [].concat.apply([], result))
}

app.get('/search', function (req, res) {
  const { query } = req.query;

  scrapeSomething(query)
  .then(results => res.send({results: results}))
});

app.listen('8081', () => {
  console.log('Example app listening on port 8081');
})
