describe('Main Page', () => {
  it('Loads', () => {
    cy.visit('/');
  });
  it('Displays title and subtitle', () => {
    cy.contains('pokemin');
    cy.contains('the minimalist pokedex');
  });
  it('Displays next button', () => {
    cy.contains('Next');
  });
  it('Displays previous button', () => {
    cy.contains('Previous');
  });
  it('Displays grid', () => {
    getTestElement('Grid');
  });
});

describe('Next button', () => {
  it('Goes to next pokemon page', () => {
    cy.contains('Next').click({ force: true });
    cy.contains('weedle').should('be.visible');
    cy.contains('metapod').should('be.visible');
    cy.contains('rattata').should('be.visible');
    cy.wait(300);
    cy.contains('Next').click({ force: true });
    cy.contains('pikachu').should('be.visible');
    cy.contains('ekans').should('be.visible');
    cy.contains('nidorina').should('be.visible');
  });
});

describe('Previous button', () => {
  it('Goes to next pokemon page', () => {
    cy.contains('Previous').click({ force: true });
    cy.contains('weedle').should('be.visible');
    cy.contains('metapod').should('be.visible');
    cy.contains('rattata').should('be.visible');
    cy.wait(300);
    cy.contains('Previous').click({ force: true });
    cy.contains('charmander').should('be.visible');
    cy.contains('bulbasaur').should('be.visible');
    cy.contains('squirtle').should('be.visible');
  });
});

describe('Cards', () => {
  it('Load all images', () => {
    cy.get('img')
      .should('be.visible')
      .and(($img) => {
        const imgElementArray = Array.from($img);
        imgElementArray.forEach((imgElement) => {
          expect(imgElement.naturalWidth).to.be.greaterThan(0);
        });
      });
  });

  it('Open correct details modal on click', () => {
    cy.contains('bulbasaur').click();
    cy.contains('HP');
    cy.contains('Weight');
    getTestElement('DetailsModal').contains('bulbasaur');
    getTestElement('ModalOverlay').click('topLeft');
    cy.contains('charmander').click();
    cy.contains('HP');
    cy.contains('Weight');
    getTestElement('DetailsModal').contains('charmander');
  });
});

describe('Details Modal', () => {
  it('Closes', () => {
    getTestElement('ModalOverlay').click('topLeft');
    cy.contains('HP').should('not.exist');
    cy.contains('Weight').should('not.exist');
  });
});

describe('Carousel', () => {
  it('Shows current cards', () => {
    cy.contains('charmander').should('be.visible');
    cy.contains('bulbasaur').should('be.visible');
    cy.contains('squirtle').should('be.visible');
    cy.contains('caterpie').should('be.visible');
    return;
  });
  it('Hides previous and next cards', () => {
    cy.contains('sneasler').should('not.be.visible');
    cy.contains('ursaluna').should('not.be.visible');
    cy.contains('metapod').should('not.be.visible');
    cy.contains('rattata').should('not.be.visible');
    return;
  });

  it('Loops around first and last pokemon', () => {
    cy.contains('Previous').click({ force: true });
    cy.contains('ursaluna').should('be.visible');
    cy.contains('sneasler').should('be.visible');
    cy.contains('Next').click({ force: true });
    cy.contains('charmander').should('be.visible');
    cy.contains('bulbasaur').should('be.visible');
  });
});

const getTestElement = (selector: string) => {
  return cy.get(`[data-testid="${selector}"]`);
};

export {};
