import { mount } from 'cypress/react18';

import { TypeBadge } from '../../';

import { POKEMON_TYPES } from '../../../../enums';

const TEST_COLOR = 'rgb(247, 208, 44)';

const mountTypeBadge = () => {
  mount(<TypeBadge type={POKEMON_TYPES.ELECTRIC} />);
};

describe('Type badge', () => {
  it('Mounts', () => {
    mountTypeBadge();
  });

  it('Displays type name', () => {
    mountTypeBadge();
    cy.contains(POKEMON_TYPES.ELECTRIC);
  });

  it('Has correct color', () => {
    mountTypeBadge();
    cy.get('[data-testid="TypeBadge"]').should('have.css', 'background-color', TEST_COLOR);
  });
});
