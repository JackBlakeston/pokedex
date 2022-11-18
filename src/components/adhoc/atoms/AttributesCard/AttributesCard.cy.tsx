import { mount } from 'cypress/react18';

import { AttributesCard } from '../../';

const TEST_WEIGHT = 10;
const TEST_HEIGHT = 5;
const TEST_ABILITY = 'TEST';

const mountAttributesCard = () => {
  mount(<AttributesCard weight={TEST_WEIGHT} height={TEST_HEIGHT} ability={TEST_ABILITY} />);
};

describe('Attributes Card', () => {
  it('Mounts', () => {
    mountAttributesCard();
  });

  it('Displays weight', () => {
    mountAttributesCard();
    cy.contains(/weight/i).should('be.visible');
    cy.contains(TEST_WEIGHT).should('be.visible');
  });

  it('Displays height', () => {
    mountAttributesCard();
    cy.get('div')
      .contains(/height/i)
      .should('be.visible');
    cy.contains(TEST_HEIGHT).should('be.visible');
  });

  it('Displays ability', () => {
    mountAttributesCard();
    cy.contains(/ability/i).should('be.visible');
    cy.contains(TEST_ABILITY).should('be.visible');
  });
});
