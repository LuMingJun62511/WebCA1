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
            .contains(upcoming[1].title);
        })

        // it("images of upcoming page are correct", () => {
        //     cy.get(`.MuiCardMedia-root[style = 'background-image: url("https://image.tmdb.org/t/p/w500//${upcoming[1].poster_path}")']`)
        //     // 
        // })


        it("buttons of upcoming page are correct", () => {
            cy.get(".MuiSvgIcon-root[data-testid = 'PlaylistAddIcon']")
            cy.get(".MuiButtonBase-root[aria-label='add to playlist']").eq(0).click()
        })
        
    });



});
