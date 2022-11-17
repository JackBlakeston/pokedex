import { mount } from 'cypress/react';

import { Button } from '..';

import { SIZES } from 'enums';

const BTN_COLOR = 'rgb(255, 165, 0)';

const mountButton = () => {
  const spy = cy.spy().as('spy');
  mount(<Button text='TEST' color='orange' onClick={spy} size={SIZES.MEDIUM} />);
};

describe('Button', () => {
  it('mounts', () => {
    mountButton();
  });

  it('Renders text correctly', () => {
    mountButton();
    cy.contains(/TEST/);
  });

  it('Renders the correct color', () => {
    mountButton();
    cy.contains(/TEST/).should('have.css', 'background-color', BTN_COLOR);
  });

  it('Fires callback function when clicked', () => {
    mountButton();
    cy.contains(/TEST/).click();
    cy.get('@spy').should('have.been.called');
  });
});
