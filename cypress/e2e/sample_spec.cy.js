describe("Test if my site is working", () => {
  beforeEach(() => {
    cy.visit("https://saeraa.github.io/escape-hacker-group/02-esc/");
  });
  it("find h1 that contains the text Hacker and click on the first meny item", () => {
    cy.get("h1").should("contain.text", "Hacker");

    cy.get("li").first().click();
  });
});
