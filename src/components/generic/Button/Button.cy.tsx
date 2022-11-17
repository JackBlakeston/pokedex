import React from 'react';
import { mount } from 'cypress/react';

import { Button } from '..';

const BTN_COLOR = 'rgb(255, 165, 0)';

const mountButton = () => {
  mount(
    <Button
      text='testBtn'
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
    cy.contains('testBtn');
  });

  it('Renders the correct color', () => {
    mountButton();
    cy.contains('testBtn').should('have.css', 'background-color', BTN_COLOR);
  });

  it('Fires callback function when clicked', () => {
    const onClickSpy = cy.spy().as('onClickSpy');
    mount(<Button text='testBtn' color='orange' onClick={onClickSpy} size='large' />);
    cy.contains('testBtn').click();
    cy.get('@onClickSpy').should('have.been.called');
  });
});
