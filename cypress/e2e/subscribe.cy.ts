describe("NewsLetter Subscribe Form", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/")
  })
  it("allow users to subscribe to the email list", () => {
    cy.get("#email-address").type("saeed@gmail.xom")
    cy.get(".mt-4 > .mt-3 > .w-full").click()
  })
  it("dose not allow to submit empty or invalid email", () => {
    cy.get("#email-address").type("saeedgmailxom")
    cy.get(".mt-4 > .mt-3 > .w-full").click()
  })
  it("dose not allow to submit empty or invalid email", () => {
    cy.get("#email-address").type("john@example.com")
    cy.get(".mt-4 > .mt-3 > .w-full").click()
  })
})
