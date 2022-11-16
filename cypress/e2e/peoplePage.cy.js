import '../support/commands';

let popular1;
let popular2;
let popular3;

describe("Check popular page", () => { //最外围的主要测试，

    before(() => {
        cy.requestPopular(1).its("body").then((response) => {cy.writedown(popular1,response.results)});
        cy.requestPopular(1).its("body").then((response) => {console.log(response.results)});
        //为什么传不进去？
        // cy.requestPopular(2).its("body").then((response) => {cy.writedown(popular2,response.results)});
        // cy.requestPopular(3).its("body").then((response) => {cy.writedown(popular3,response.results)});

    })
    before(() => {
        cy.request(
            `https://api.themoviedb.org/3/person/popular?api_key=${Cypress.env("TMDB_KEY")}&language=en-US&page=1`
        ).its("body")
            .then((response) => {
                popular1 = response.results;
            });
        cy.request(
            `https://api.themoviedb.org/3/person/popular?api_key=${Cypress.env("TMDB_KEY")}&language=en-US&page=2`
        ).its("body")
            .then((response) => {
                popular2 = response.results;
            });
        cy.request(
            `https://api.themoviedb.org/3/person/popular?api_key=${Cypress.env("TMDB_KEY")}&language=en-US&page=3`
        ).its("body")
            .then((response) => {
                popular3 = response.results;
            });
    });

    describe("able to navigate to popular page", () => {
        beforeEach(() => {
            cy.visit(`/`);
        })
        it("from homepage to popular page", () => {
            cy.get("button").contains("Popular").click();
            cy.url().should("include", `/people/popular`);
        })
    });

    describe("basic data in actor list is correct", () => {
        beforeEach(() => {
            cy.jumpToPop();
        })
        it("test the amount of items in popular page", () => {
            cy.get(".MuiPaper-root").should("have.length", popular1.length + 1);//这个总是多出来的一个是谁？

        })
        it("test the name of certain people", () => {
            cy.get(".MuiPaper-root").should("have.length", popular1.length + 1);
            cy.get("h2").eq(0).contains(popular1[0].name);
        })
    });

    describe("pagination part test", () => {
        beforeEach(() => {
            cy.jumpToPop();
        })
        it("select one page to jump ", () => {
            cy.get("button[aria-label='Go to page 3']").eq(0).click();
            cy.get("h2").eq(0).contains(popular3[0].name)
        })
        it("jump to previous pagepage", () => {
            cy.get("button[aria-label='Go to page 2']").eq(0).click();
            cy.get("button[aria-label='Go to previous page']").eq(0).click();
            cy.get("h2").eq(0).contains(popular1[0].name)

            cy.get("button[aria-label='Go to previous page']").eq(0).should('be.disabled')

        })
        it("jump to next pagepage", () => {
            cy.get("button[aria-label='Go to page 2']").eq(0).click();
            cy.get("button[aria-label='Go to next page']").eq(0).click();
            cy.get("h2").eq(0).contains(popular3[0].name)
            cy.get("button[aria-label='Go to page 10']").eq(0).click();
            cy.get("button[aria-label='Go to next page']").eq(0).should('be.disabled')
        })
    });

    describe("jump to actor detail is correct", () => {
        beforeEach(() => {
            cy.jumpToPop();
        })
        it("test navigate to the actor's detail information ", () => {
            cy.get("h2").eq(0).click();
            cy.url().should("include", `/actors/${popular1[0].id}`)
        })
    });
});


