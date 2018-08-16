const pg = require('pg');
const dbTest = require('../config')['test']['dbConnectionString']
const clientTest = new pg.Client(dbTest)

describe('Spaces', function(){


  beforeEach(function(){
    var space = new Space();
    clientTest.connect();
  });

  describe('established connection to the databse', function(){
    it('returns true if connected', function(){
      expect(space.isConnected()).toEqual(true);
    });
  });


  describe('add space', function(){
    // connect here
    var query = 'INSERT INTO listings (title, listing_desc, owner, price, address) VALUES ($1, $2, $3, $4, $5);'
    var params = ["Test title", "this is a house", "Stephanie", 20000, "12 Cheese Land"];
    space.addNewList(query, params); //this will change
    // checkDatabase = clientTest.query('SELECT * FROM listings')
    expect(space.checkDatabase()).toContain("Test title");
    });
  });

  describe('views all spaces', function(){
    it('checks if user can see list of listings', function(){
      space.viewAllSpaces();
      expect(space.viewAllSpaces()).toEqual(space.checkDatabase());
    });
  });

  describe('view single listing', function(){

  });


});


app.get('/view-space', function(req, res) {
    res.render(path.join(__dirname + '/views/viewSpace.ejs'));
    const sql = '(SELECT * FROM listings);'
    const params = [req.body.title, req.body.listing_desc, req.body.owner, req.body.price, req.body.address];
    var space = new Space()
    space.addSpace(sql, params)
});
















































// describe('Space', function(){
//
//   var space
//
//   beforeEach(function(){
//     space = new Space();
//   });
//
//
//   describe()
//
//
//   describe('adding', function(){
//
//     it('should let an owner add a space to the database', function(){
//       space.addSpace(('INSERT INTO listings (title, listing_desc, owner, price, address) VALUES ($1, $2, $3, $4, $5);'),("Makers Academy", "A coding bootcamp", "Daniel", 10, 7777777777));
//       expect(space.viewSpaces()).toContain("14 windmill road SW18 2EU");
//     });
//
//   });
// });
//   // describe('viewing', function(){
//   //
//   //   it('should let a user view all the spaces available for leasing', function(){
//   //     space.addSpace("14 windmill road SW18 2EU", 10, "Daniel", 7777777777);
//   //     expect(space.viewSpaces()).toContain("14 windmill road SW18 2EU");
//   //   });
//   //
//   // });
