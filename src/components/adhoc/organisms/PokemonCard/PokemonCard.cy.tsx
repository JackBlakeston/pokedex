import React from 'react';
import { mount } from 'cypress/react18';

import { PokemonCard } from '../../';
import { BULBASAUR } from '../../../../assets/mocks/bulbasaur';

const BULBASAUR_ID = 1;

const mountPokemonCard = () => {
  const spy = cy.spy().as('spy');
  mount(<PokemonCard pokemonId={BULBASAUR_ID} onClick={spy} />);
};

describe('PokemonCard', () => {
  it('Mounts', () => {
    mountPokemonCard();
  });

  it('Displays pokemon name and id', () => {
    mountPokemonCard();
    cy.contains(BULBASAUR.id);
    cy.contains(BULBASAUR.name);
  });

  it('Displays pokemon types correctly', () => {
    mountPokemonCard();
    cy.contains(BULBASAUR.types[0]).should('be.visible');
    cy.contains(BULBASAUR.types[1]).should('be.visible');
  });

  it('Renders correct color', () => {
    mountPokemonCard();
    cy.get(`[data-testid="ColoredBackground"]`)
      .should('be.visible')
      .should('have.property', 'background-color', BULBASAUR.color);
  });

  it('Loads and shows image', () => {
    mountPokemonCard();
    cy.get('img')
      .should('be.visible')
      .should('have.attr', 'src', BULBASAUR.imgUrl)
      .and(($img) => {
        const imgElementArray: HTMLImageElement[] = Array.from($img);
        imgElementArray.forEach((imgElement) => {
          expect(imgElement.naturalWidth).to.be.greaterThan(0);
        });
      });
  });

  it('Fires callback on click', () => {
    mountPokemonCard();
    cy.contains(BULBASAUR.id).click();
    cy.get('@spy').should('have.been.called');
  });
});
