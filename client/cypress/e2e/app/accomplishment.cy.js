/// <reference types="cypress" />

describe("Accomplishments", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000/accomplishments")
    })

    it("should show error if content is inappropriate or includes giraffe", () => {
        cy.get("[placeholder='Title']").type("This is my accomplishment")
        cy.get("[data-cy='accomplishment-input']").type("My pet giraffe")
        cy.get("[data-cy='accomplishment-checkbox']").check()
        cy.contains("Submit Accomplishment").click()
        cy.contains("Your content is not appropriate").should("be.visible")
    })

    it("should show error if content is inappropriate or includes giraffe with mock", () => {

        cy.intercept("POST", "http://localhost:4000/accomplishment", (req) => {
            req.reply(res => {
                res.send({
                    msg: "Your content is not appropriate"
                })
            })
        })

        cy.get("[placeholder='Title']").type("This is my accomplishment")
        cy.get("[data-cy='accomplishment-input']").type("My pet giraffe")
        cy.get("[data-cy='accomplishment-checkbox']").check()
        cy.contains("Submit Accomplishment").click()
        cy.contains("Your content is not appropriate").should("be.visible")
    })
})