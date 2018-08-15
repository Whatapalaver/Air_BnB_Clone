const pg = require('pg')
const dbDev = require('../config')['development']['dbConnectionString']
const clientDev = new pg.Client(dbDev)

function Space() {

  this.title = '';
  this.listing_desc = '';
  this.address = '';
  this.owner = '';
  this.price = 0.00;

}

Space.prototype.addSpace = function(){
  clientDev.connect()
  clientDev.query("INSERT INTO listings (title, listing_desc, address, owner, price) VALUES ("`${this.title}`", "`${this.listing_desc}`", "`${this.address}`", "`${this.owner}`", "`${this.price}`");", (err, res) => {
    console.log(err, res)
    clientDev.end()
  })
}

Space.prototype.viewSpaces = function(){
  clientDev.connect()
  clientDev.query('SELECT * FROM listings;', (err, res) => {
    console.log(err, res)
    clientDev.end()
  })
}
