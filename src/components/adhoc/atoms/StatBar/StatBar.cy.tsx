import { mount } from 'cypress/react18';

import { StatBar } from '../../';

import { BULBASAUR } from '../../../../assets/mocks/bulbasaur';

const TEST_COLOR = 'rgb(108, 165, 132)';

const mountStatBar = () => {
  mount(<StatBar {...BULBASAUR.stats[0]} color={BULBASAUR.color} />);
};

describe('StatBar Card', () => {
  it('Mounts', () => {
    mountStatBar();
  });

  it('Displays stat name and value', () => {
    mountStatBar();
    cy.contains(BULBASAUR.stats[0].name).should('be.visible');
    cy.contains(BULBASAUR.stats[0].value).should('be.visible');
  });

  it('Shows bar with correct color', () => {
    mountStatBar();
    cy.get('[data-testid="PercentageBar"]')
      .should('be.visible')
      .should('have.css', 'background-color', TEST_COLOR);
  });
});
