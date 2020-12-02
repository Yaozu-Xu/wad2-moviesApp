let movieId = null
let movie;
let reviews;
describe("Movie Details Page", () => {

  before(() => {
    cy.request(
      `https://api.themoviedb.org/3/discover/movie?api_key=${Cypress.env(
        "TMDB_KEY"
      )}&language=en-US&include_adult=false&include_video=false&page=1`
    )
      .its("body")
      .then((response) => {
        return response.results[2].id;
      })
      .then((arbitraryMovieIdignored) => {
        movieId = arbitraryMovieIdignored
        return cy
          .request(
            `https://api.themoviedb.org/3/movie/${movieId}?api_key=${Cypress.env(
              "TMDB_KEY"
            )}`
          )
          .its("body");
      })
      .then((movieDetails) => {
        movie = movieDetails;
        return movieDetails.id;
      })
  });

  beforeEach(() => {
    cy.visit(`/`);
    localStorage.setItem('login', '1')
    cy.get(".card").eq(2).find("img").click();
  });

  it("should display the Home icon with the correct URL value", () => {
    cy.get(".fa-home")
      .parent()
      .should("have.attr", "href")
      .should("include", movie.homepage);
  });
  
  it("should display the poster image correctly", () => {
  cy.get("img")
    .should("have.attr", "src")
    .should("include", movie.poster_path)
  });  
});
