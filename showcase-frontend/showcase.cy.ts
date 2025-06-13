// This file would typically be located in: showcase-frontend/cypress/e2e/showcase.cy.ts

describe('Showcase Website User Flows', () => {
  const baseUrl = 'http://localhost:3000'; // Or www.yourdomain.com in a deployed env

  beforeEach(() => {
    // Visit the home page before each test
    cy.visit(baseUrl);
  });

  it('should load the home page successfully', () => {
    cy.contains('h1', /Welcome to ShowcasePro/i); // From HomePage.tsx hero
    cy.contains('a', /Explore Our Products/i); // CTA button
  });

  it('should navigate to the Products page and display products', () => {
    cy.get('nav').contains('a', /Products/i).click();
    cy.url().should('include', '/products');
    cy.contains('h1', /Our Products/i);
    // Check for at least one product card (based on sample data)
    cy.get(`div[class*="productCard"]`).should('have.length.greaterThan', 0);
    cy.contains('h3', /InnovateX Laptop/i); // Example product
  });

  it('should navigate to the Company page', () => {
    cy.get('nav').contains('a', /Company/i).click();
    cy.url().should('include', '/company');
    cy.contains('h1', /About Our Company/i);
    cy.contains('h2', /Our Mission/i);
  });

  it('should navigate to the Contact page and display the form', () => {
    cy.get('nav').contains('a', /Contact/i).click();
    cy.url().should('include', '/contact');
    cy.contains('h1', /Get In Touch/i);
    cy.get('form').should('be.visible');
    cy.get('label[for="name"]').should('contain.text', 'Full Name');
    cy.get('button[type="submit"]').should('contain.text', 'Send Message');
  });

  it('should allow typing into the contact form', () => {
    cy.visit(`${baseUrl}/contact`);
    cy.get('input[name="name"]').type('John Doe');
    cy.get('input[name="email"]').type('john.doe@example.com');
    cy.get('textarea[name="message"]').type('This is a test message from Cypress!');

    cy.get('input[name="name"]').should('have.value', 'John Doe');
    cy.get('input[name="email"]').should('have.value', 'john.doe@example.com');
    cy.get('textarea[name="message"]').should('have.value', 'This is a test message from Cypress!');
  });

  // Test for the "Request a Quote" functionality (enhanced contact form)
  it('should submit an inquiry/quote request via the contact form', () => {
    cy.visit(`${baseUrl}/contact`);

    cy.get('input[name="name"]').type('Test User');
    cy.get('input[name="email"]').type('testuser@example.com');
    cy.get('select[name="serviceInterest"]').select('Product Alpha Quote');
    cy.get('textarea[name="message"]').type('I would like a quote for Product Alpha.');

    // Cypress does not easily interact with `alert`s by default.
    // For real tests, you'd spy on window.alert or, preferably, have the form
    // display an on-page success message instead of an alert.
    // cy.on('window:alert', (str) => {
    //   expect(str).to.equal('Thank you, Test User! Your inquiry about "Product Alpha Quote" has been received (simulated).');
    // });

    cy.get('form').submit();

    // After submission (and mocked success), the form should be clear.
    cy.get('input[name="name"]').should('have.value', '');
    // This assertion relies on the form being reset, which our handleSubmit does.
  });

});
