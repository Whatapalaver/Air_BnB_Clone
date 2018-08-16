function sendtodatabase(){
  var testdb = clientTest;

  testdb.query("INSERT INTO listings(id, title, listing_desc, owner, price, Address) values(default, 'title1', 'listing desc', 'Steph', 45, 'address 1 hello')");
};

sendtodatabase();
