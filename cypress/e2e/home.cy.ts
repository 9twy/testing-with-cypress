describe("Home page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000")
  })

  context("Hero section", () => {
    it("the h1 contains the correct text", () => {
      cy.getByData("hero-heading").contains(
        "Testing Next.js Applications with Cypress"
      )
    })

    it("the features on the homepage are correct", () => {
      cy.get("dt").eq(0).contains("4 Courses")
      cy.get("dt").eq(1).contains("25+ Lessons")
    })
  })

  context("Courses section", () => {
    it("Course: Testing Your First Next.js Application", () => {
      cy.getByData("course-0").find("a").contains("Get started").click()
      cy.location("pathname").should("equal", "/testing-your-first-application")
    })

    it("Course: Testing Foundations", () => {
      cy.getByData("course-1").find("a").contains("Get started").click()
      cy.location("pathname").should("equal", "/testing-foundations")
    })

    it("Course: Cypress Fundamentals", () => {
      cy.getByData("course-2").find("a").contains("Get started").click()
      cy.location("pathname").should("equal", "/cypress-fundamentals")
    })
  })
  context("User jounery", () => {
    it.only("should allow the user to navigate to the Cypress Fundamentals course page then start course check the lessons and answer all the questions at the end of each lesson", () => {
      cy.getByData("course-2").find("a").eq(3).click()
      cy.getByData("next-lesson-button").click()

      for (let i = 0; i < 3; i++) {
        cy.getByData("challenge-answer-0").click()
        cy.getByData("next-lesson-button").click()
      }
    })
  })
})
