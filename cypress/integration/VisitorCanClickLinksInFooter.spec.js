describe('Visitor can click links in footer', () => {

  beforeEach(function () {
    cy.viewport(1366, 542)
    cy.server()
    cy.route({
      method: 'GET',
      url: 'http://localhost:3002/api/v1/posts',
      response: 'fixture:list_of_entries.json',
      status: 200
    })
    cy.visit('http://localhost:3000/')
  })

  it('and see logo', () => {
    cy.contains('Being Stockholm')
  })

  it('and click and see sidebar menu', () => {
    cy.get('#menu-sidebar').should('not.be.visible')
    cy.get('#footer-menu-icon').click()
    cy.get('#menu-sidebar').should('be.visible')
    cy.get('#footer-menu-icon').click()
    cy.get('#menu-sidebar').should('not.be.visible')
  })

  it('and click logo and be on landing page', () => {
    cy.get('#footer-menu-icon').click()
    cy.get('#menu-sidebar').should('be.visible')
    cy.get('#about').click()
    cy.get('#footer-logo').click()
    cy.get('#map-icon-plus').should('be.visible')
  })

  it('on profile icon and be redirected to log in / sign up', () => {
    cy.get('#profile-icon').click()
    cy.get('#email')
    cy.get('#password')
  })

})
