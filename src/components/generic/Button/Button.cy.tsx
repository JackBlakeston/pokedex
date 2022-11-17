import React from 'react';
import { mount } from 'cypress/react';

import { Button } from '..';

const BTN_COLOR = 'rgb(255, 165, 0)';

const mountButton = () => {
  mount(
    <Button
      text='TEST'
      color={BTN_COLOR}
      onClick={() => {
        return;
      }}
      size='large'
    />,
  );
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
    const spy = cy.spy().as('spy');
    mount(<Button text='TEST' color='orange' onClick={spy} size='large' />);
    cy.contains(/TEST/).click();
    cy.get('@spy').should('have.been.called');
  });
});
