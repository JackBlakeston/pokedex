import React from 'react';
import { mount } from 'cypress/react18';

import { Modal } from '..';

const mountModal = (isOpen: boolean) => {
  const spy = cy.spy().as('spy');
  mount(
    <Modal isOpen={isOpen} setIsOpen={spy}>
      <div style={{ width: '300px', height: '200px' }}>TEST</div>
    </Modal>,
  );
};

describe('Modal', () => {
  it('Mounts', () => {
    mountModal(false);
  });

  it('Is hidden if comamanded', () => {
    mountModal(false);
    cy.contains(/TEST/).should('not.exist');
  });

  it('Is visible if comamanded and renders children', () => {
    mountModal(true);
    cy.contains(/TEST/).should('be.visible');
  });

  it('Overlay click fires callback', () => {
    mountModal(true);
    cy.get(`[data-testid="ModalOverlay"]`).click('topLeft');
    cy.get('@spy').should('have.been.called');
  });

  it('Button click fires callback', () => {
    mountModal(true);
    cy.get(`svg`).click();
    cy.get('@spy').should('have.been.called');
  });
});
