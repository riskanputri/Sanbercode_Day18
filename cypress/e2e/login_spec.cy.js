describe("Login Page Test Suite", () => {
  it("Validate login with valid username and valid password", () => {
    cy.visit("https://the-internet.herokuapp.com/login");
    cy.wait(10);
    cy.get("input[name='username']").type("tomsmith");
    cy.wait(2);
    cy.get("input[name='password']").type("SuperSecretPassword!");
    cy.get("i.fa.fa-2x.fa-sign-in").click();
    // Verify Message Succses Login
    cy.get("#flash").should("contain", "You logged into a secure area!");
    cy.get(".button.secondary.radius");
  });

  it("Validate login with valid username and invalid password", () => {
    cy.visit("https://the-internet.herokuapp.com/login");
    cy.wait(10);
    cy.get("input[name='username']").type("tomjery");
    cy.wait(2);
    cy.get("input[name='password']").type("rahasia");
    cy.wait(2);
    cy.get("i.fa.fa-2x.fa-sign-in").click();
    cy.wait(5);
    // Verify Message Failed Login
    cy.get("#flash").should("contain", "Your username is invalid!");
  });
});
