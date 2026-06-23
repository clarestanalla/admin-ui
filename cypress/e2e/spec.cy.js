describe("User Register", () => {
  it("should register new account", () => {

    // Buka halaman login
    cy.visit("http://localhost:5173/");
    cy.wait(2000);

    // Pastikan di halaman login
    cy.url().should("include", "/login");
    cy.wait(1000);

    // Klik Create an account
    cy.contains("Create an account").click();
    cy.wait(2000);

    // Pastikan berpindah ke register
    cy.url().should("include", "/register");
    cy.wait(1000);

    // Isi nama
    cy.get('input[placeholder="name"]')
      .should("be.visible")
      .type("nalla", { delay: 150 })
      .should("have.value", "nalla");
    cy.wait(1000);

    // Isi email
    cy.get('input[placeholder="hello@example.com"]')
      .should("be.visible")
      .type("clarestasatwika@gmail.com", { delay: 150 })
      .should("have.value", "clarestasatwika@gmail.com");
    cy.wait(1000);

    // Isi password
    cy.get('input[type="password"]')
      .should("be.visible")
      .type("12345", { delay: 150 })
      .should("have.value", "12345");
    cy.wait(1000);

    // Klik Sign Up
    cy.contains("Sign Up").click();

    // Tunggu hasil
    cy.wait(3000);

  });
});