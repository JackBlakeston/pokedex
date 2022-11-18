import { mount } from 'cypress/react18';

import { PokemonImage } from '../../';

import { BULBASAUR } from '../../../../assets/mocks/bulbasaur';

import { SIZES } from '../../../../enums';

const TEST_URL = BULBASAUR.imgUrl;
const TEST_COLOR = 'rgb(125, 166, 141)';

const mountPokemonImage = () => {
  mount(<PokemonImage imgUrl={TEST_URL} color={TEST_COLOR} size={SIZES.LARGE} />);
};

describe('Attributes Card', () => {
  it('Mounts', () => {
    mountPokemonImage();
  });

  it('Loads image correctly', () => {
    mountPokemonImage();
    cy.get('img')
      .should('be.visible')
      .should('have.attr', 'src', TEST_URL)
      .and(($img) => {
        expect($img[0].naturalWidth).to.be.greaterThan(0);
      });
  });

  it('Renders correct color', () => {
    mountPokemonImage();
    cy.get('[data-testid="ColoredBackground"]').should('have.css', 'background-color', TEST_COLOR);
  });
});
