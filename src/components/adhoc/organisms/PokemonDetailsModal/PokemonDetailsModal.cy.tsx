import React from 'react';
import { mount } from 'cypress/react18';

import { PokemonDetailsModal } from '../../';
import { BULBASAUR } from '../../../../assets/mocks/bulbasaur';
import { POKEMON_STATS } from '../../../../enums';

const TEST_COLOR = 'rgb(108, 165, 132)';

const mountPokemonDetailsModal = () => {
  const spy = cy.spy().as('spy');
  mount(<PokemonDetailsModal pokemon={BULBASAUR} isOpen={true} setIsOpen={spy} />);
};

describe('PokemonDetailsModal', () => {
  it('Mounts', () => {
    mountPokemonDetailsModal();
  });

  it('Displays pokemon name and id', () => {
    mountPokemonDetailsModal();
    cy.contains(BULBASAUR.id);
    cy.contains(BULBASAUR.name);
  });

  it('Displays pokemon types correctly', () => {
    mountPokemonDetailsModal();
    cy.contains(BULBASAUR.types[0]).should('be.visible');
    cy.contains(BULBASAUR.types[1]).should('be.visible');
  });

  it('Renders correct color', () => {
    mountPokemonDetailsModal();
    cy.get('[data-testid="ColoredBackground"]').should('have.css', 'background-color', TEST_COLOR);
  });

  it('Loads and shows image', () => {
    mountPokemonDetailsModal();
    cy.get('img')
      .should('be.visible')
      .should('have.attr', 'src', BULBASAUR.imgUrl)
      .and(($img) => {
        expect($img[0].naturalWidth).to.be.greaterThan(0);
      });
  });

  it('Displays correct pokemon attributes and values', () => {
    mountPokemonDetailsModal();
    cy.contains(/height/i).should('be.visible');
    cy.contains(BULBASAUR.height).should('be.visible');
    cy.contains(/weight/i).should('be.visible');
    cy.contains(BULBASAUR.weight).should('be.visible');
    cy.contains(/ability/i).should('be.visible');
    cy.contains(BULBASAUR.abilities[0]).should('be.visible');
  });

  it('Displays correct stats and values', () => {
    mountPokemonDetailsModal();
    Object.values(POKEMON_STATS).forEach((statName) => {
      cy.contains(statName).should('be.visible');
    });
    BULBASAUR.stats.forEach((stat) => {
      cy.contains(stat.value).should('be.visible');
    });
  });
});
