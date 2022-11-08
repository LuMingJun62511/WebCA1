//主要就是，第一，常规的，比如字符
//第二是个数，各个
//第三是信息，
//第四是分页，分页要比照跳转是不是到了正确的页面
let popular1;
let popular2;
let popular3;
describe("Check popular page", () => { //最外围的主要测试，
    before(() => {
        cy.request(
            `https://api.themoviedb.org/3/person/popular?api_key=${Cypress.env("TMDB_KEY")}&language=en-US&page=1`
        ).its("body")
            .then((response) => {
                popular1 = response.results;
            });
    });
    before(() => {
        cy.request(
            `https://api.themoviedb.org/3/person/popular?api_key=${Cypress.env("TMDB_KEY")}&language=en-US&page=2`
        ).its("body")
            .then((response) => {
                popular2 = response.results;
            });
    });
    before(() => {
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
            cy.wait(1000);
        })
        it("from homepage to popular page", () => {
            cy.get("button").contains("Popular").click();
            cy.url().should("include", `/people/popular`);
        })
    });

    describe("basic data in actor list is correct", () => {
        beforeEach(() => {
            cy.visit("/people/popular");
            cy.wait(1000);
        })
        it("test the amount of items in popular page", () => {
            cy.get(".MuiPaper-root").should("have.length", popular1.length + 1);//这个总是多出来的一个是谁？

        })
        it("test the name of certain people", () => {
            cy.get(".MuiTypography-h6").eq(1).contains(popular1[0].name);//知道大概是多出来个什么东西了，在最前面
        })
    });

    describe("pagination part test", () => {
        it("select one page to jump ", () => {
            cy.get("button[aria-label='Go to page 3']").eq(0).click();
            cy.get(".MuiTypography-h6").eq(1).contains(popular3[0].name)
        })
        it("jump to previous pagepage", () => {
            cy.get("button[aria-label='Go to page 2']").eq(0).click();
            cy.get("button[aria-label='Go to previous page']").eq(0).click();
            cy.get(".MuiTypography-h6").eq(1).contains(popular1[0].name)

            cy.get("button[aria-label='Go to previous page']").eq(0).should('be.disabled')

        })
        it("jump to next pagepage", () => {
            cy.get("button[aria-label='Go to page 2']").eq(0).click();
            cy.get("button[aria-label='Go to next page']").eq(0).click();
            cy.get(".MuiTypography-h6").eq(1).contains(popular3[0].name)

            cy.get("button[aria-label='Go to page 10']").eq(0).click();
            cy.get("button[aria-label='Go to next page']").eq(0).should('be.disabled')
        })
    });

    // describe("jump to actor detail is correct", () => {
    //     it("test navigate to the actor's detail information ", () => {
    //         cy.get(".MuiCardContent-root").eq(0).click();
    //         cy.url().should("include", `/actors/${actors[0].id}`)
    //     })//测试跳转的成功不成功
    // });
});


