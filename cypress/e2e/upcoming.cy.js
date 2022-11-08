let upcoming;

describe("Check upcoming page ", () => {
    before(() => {
        cy.request(
            `https://api.themoviedb.org/3/movie/upcoming?api_key=${Cypress.env("TMDB_KEY")}&language=en-US&page=1`
        ).its("body")
            .then((response) => {
                upcoming = response.results;
            });
        //先取upcoming的信息
    });
    it("able to go to upcoming page", () => {
        cy.visit("/");
        cy.get("button").contains("Upcoming").click();
        cy.url().should("include", `/upcoming`);

    })

    beforeEach(() => {
        cy.visit(`/movies/upcoming`);
        cy.wait(1000);
    })
    describe("The static data of upcoming page is correct", () => {
        it("header of upcoming page is correct", () => {
            cy.get("h3").contains("Upcoming Movies");
            cy.get(".MuiCardHeader-root").should("have.length", 20);
        })

        it("icons of upcoming page are correct", () => {
            cy.get("svg[data-testid='FavoriteIcon").should("not.exist");
            cy.get("svg[data-testid='PlaylistAddIcon").should("exist");
        })

    });

    describe("The dynamic data of upcoming page is correct", () => {
        it("title of upcoming page is correct", () => {
            cy.get(".MuiCardHeader-content")
            .eq(1)
            .find("p")
            .contains(movies[1].title);
        })

        it("icons of upcoming page are correct", () => {
            cy.get("svg[data-testid='FavoriteIcon").should("not.exist");
            cy.get("svg[data-testid='PlaylistAddIcon").should("exist");
        })

        

        // it(" test the reviews", () => {
        //     cy.get("button").contains("Reviews").click();
        //     cy.wait(1000);
        //     cy.get("a").contains("Full Review").eq(0).click();//我点了第一个全评论
        //     cy.wait(1000);
        //     cy.get("p").eq(0).contains(reviews[0].author);
        //     cy.get("p").eq(1).contains(reviews[0].content.substring(0, 7));
        //     //   cy.url().should("include", `/movies/${movies[0].id}`);MuiTable-root
        // });
    });



});
