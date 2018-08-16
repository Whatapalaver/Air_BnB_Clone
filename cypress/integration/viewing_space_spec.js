describe('Tests viewing a space', function() {

  it('and views a list of spaces', function() {
    cy.visit('localhost:3000')
    cy.get('#addSpace').click() //or cy.contains('Add space').click()
    cy.get('#owner').type('Daniel')
    cy.get('#address').type("52 commercial street")
    cy.get('#price').type("5.00")
    cy.get('#title').type("Double bedroom")
    cy.get('#listing_desc').type("Sea view room in a quiet town")
    cy.get('form').submit()
    cy.visit('localhost:3000/all')
    cy.contains('Daniel')
    cy.contains('52 commercial street')
    cy.contains('5.00')
    cy.contains('Double bedroom')
    cy.contains('Sea view room in a quiet town')
  })

})
