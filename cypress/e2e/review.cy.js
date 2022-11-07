let movies;
let movieId; // Enola Holmes movie id
let reviews;
describe("Check review content", () => { //最外围的主要测试，
    before(() => {
        cy.request(
            `https://api.themoviedb.org/3/discover/movie?api_key=${Cypress.env("TMDB_KEY")}&language=en-US&include_adult=false&include_video=false&page=1`
        ).its("body")
            .then((response) => {
                movies = response.results;
            });
    });
    beforeEach(() => {
        cy.visit(`/movies/${movies[1].id}`);
        cy.wait(1000);
    })
    describe("From the home page to a movie's details", () => {
        before(() => {
            cy.request(
                `https://api.themoviedb.org/3/movie/${movies[1].id}/reviews?api_key=${Cypress.env("TMDB_KEY")}`
            ).its("body")
                .then((response) => {
                    reviews = response.results;
                });
        });
        it("header of review is correct",()=>{          
            cy.get("button").contains("Reviews").click();
            cy.wait(1000);
            cy.get("th").contains("Author")
            cy.get("th").contains("Excerpt")
            cy.get("th").contains("More")

        })

        it(" test the reviews", () => {
            cy.get("button").contains("Reviews").click();
            cy.wait(1000);
            cy.get("a").contains("Full Review").eq(0).click();//我点了第一个全评论
            cy.wait(1000);
            cy.get("p").eq(0).contains(reviews[0].author);
            cy.get("p").eq(1).contains(reviews[0].content.substring(0, 7));
            //   cy.url().should("include", `/movies/${movies[0].id}`);MuiTable-root
        });
    });






});
