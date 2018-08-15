const pg = require('pg')
const dbDev = require('../config')['development']['dbConnectionString']
const dbTest = require('../config')['test']['dbConnectionString']
const clientDev = new pg.Client(dbDev)
const clientTest = new pg.Client(dbTest)

var1 = "('Makers Academy', 'Apartment block', 'Daniel', 5.00, '50-52 Commercial Street')"
var2 = "('Another place', 'Top floor flat cupboard', 'Angela', 5.00, 'Emmerdale Farm')"

clientTest.connect()
clientTest.query("INSERT INTO listings (title, listing_desc, owner, price, address) VALUES ('Makers Academy', 'Apartment block', 'Daniel', 5.00, '50-52 Commercial Street');", (err, res) => {
  console.log(err, res)
  clientTest.end()
})

clientDev.connect()
clientDev.query("INSERT INTO listings (title, listing_desc, owner, price, address) VALUES ('Makers Academy', 'Apartment block', 'Daniel', 5.00, '50-52 Commercial Street');", (err, res) => {
  console.log(err, res)
  clientDev.end()
})
