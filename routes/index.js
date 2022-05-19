var express = require('express');

var router = express.Router();

async function createDataset() {
  // Creates a client
  const bigquery = new BigQuery();

  // here is the nuxt-hazura is the projectID, github_source_data is the dataset and demo is the table name.
  const sqlQuery = `SELECT * FROM nuxt-hazura.github_source_data.demo LIMIT 10`;

const options = {
  query: sqlQuery,
  // Location must match that of the dataset(s) referenced in the query.
  location: 'US',
};

// Run the query
 const [rows] = await bigquery.query(options);

return rows;

}
/* GET home page. */
router.get('/', async function(req, res, next) {
  const data=await createDataset();
  res.render('index', { title: 'Express',data: data });
});

const {BigQuery} = require('@google-cloud/bigquery');



module.exports = router;
