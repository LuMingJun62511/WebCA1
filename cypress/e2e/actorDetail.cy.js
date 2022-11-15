let popular;
let movies;
let actorDetails;
let externalID;
let actorCredits;
describe("Check actor details page", () => {
    before(() => {
        cy.request(
            `https://api.themoviedb.org/3/person/popular?api_key=${Cypress.env("TMDB_KEY")}&language=en-US&page=1`
        ).its("body")
            .then((response) => {
                popular = response.results;
            });
    });
    before(() => {
        cy.request(
            `https://api.themoviedb.org/3/discover/movie?api_key=${Cypress.env("TMDB_KEY")}&language=en-US&include_adult=false&include_video=false&page=1`
        ).its("body")
            .then((response) => {
                movies = response.results;
            });
    });
    before(() => {
        cy.request(
            `https://api.themoviedb.org/3/person/${popular[5].id}?api_key=${Cypress.env("TMDB_KEY")}&language=en-US`
        ).its("body")
            .then((response) => {
                actorDetails = response;
            });
    });
    before(() => {
        cy.request(
            `https://api.themoviedb.org/3/person/${popular[5].id}/external_ids?api_key=${Cypress.env("TMDB_KEY")}&language=en-US`
        ).its("body")
            .then((response) => {
                externalID = response;
            });
    });
    before(() => {
        cy.request(
            `https://api.themoviedb.org/3/person/${popular[5].id}/movie_credits?api_key=${Cypress.env("TMDB_KEY")}&language=en-US`
        ).its("body")
            .then((response) => {
                actorCredits = response.cast;
            });
    });

    describe("able to navigate to actor detail page", () => {
        beforeEach(() => {
            cy.visit(`/people/popular`);
            cy.wait(1000);
        })
        it("navigate to correct actor detail page", () => {
            cy.get(".MuiTypography-h6").eq(6).click();
            cy.url().should("include", `/actors/${popular[5].id}`);
        })
    });

    describe("basic data in actor detail page is correct", () => {
        beforeEach(() => {
            cy.visit(`/actors/${popular[5].id}`);
            cy.wait(1000);
        })
        it("test the basic info of actor", () => {
            cy.get(".MuiTypography-body1").contains(actorDetails.birthday);
            cy.get(".MuiTypography-body1").contains(actorDetails.known_for_department);
            cy.get(".MuiTypography-body1").contains(actorDetails.place_of_birth);
        })
        it("test the movies actor take part in ", () => {
            cy.get("h5").contains(actorCredits[0].title);
        })
    });

    describe("buttons to external link are correct", () => {
        beforeEach(() => {
            cy.visit(`/actors/${popular[5].id}`);
            cy.wait(1000);
        })
        it("buttons exist and with correct icons ", () => {
            cy.wait(1000);
            if (externalID.facebook_id) {
                cy.get("svg[data-testid='FacebookIcon']");
            }
            if (externalID.twitter_id) {
                cy.get("svg[data-testid='TwitterIcon']");
            }
            if (externalID.instagram_id) {
                cy.get("svg[data-testid='InstagramIcon']");
            }
        })
    });

    describe("jump to movie detail is correct", () => {
        beforeEach(() => {
            cy.visit(`/actors/${popular[5].id}`);
            cy.wait(1000);
        })
        it("test navigate to the actor's detail information ", () => {
            cy.get("h5").contains(actorCredits[0].title).eq(0).click();
            cy.wait(1000);
            cy.url().should("include", `/movies/${actorCredits[0].id}`)
            console.log(actorCredits[0].title)
            console.log(actorCredits[0].id)
        })
    });
});


