
export const shortWait = () => cy.wait(1000);
export const mediumWait = () => cy.wait(2000);
export const longWait = () => cy.wait(3000);

export const navigate = () => {
    cy.visit('https://shop.polymer-project.org/');
  };