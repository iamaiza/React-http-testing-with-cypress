/// <reference types="cypress" />

describe("Rewards", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000/rewards");
    });

    it("should show all rewards list", () => {
        cy.get("ul").should("contain", "500 points for drinking 8 cups of water for 7 straight days").and("contain", "850 points for fasting for 5 days straight")
    })

    it("should show all rewards list with mock", () => {
        cy.intercept("GET", "http://localhost:4000/rewards", {
            fixture: "rewards.json"
        })

        cy.get("ul").should("contain", "500 points for drinking 8 cups of water for 7 straight days").and("contain", "850 points for fasting for 5 days straight")
    })
})