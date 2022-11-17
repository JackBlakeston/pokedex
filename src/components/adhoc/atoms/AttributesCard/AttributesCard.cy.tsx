import { AttributesCard } from '../../';

const TEST_WEIGHT = 10;
const TEST_HEIGHT = 5;
const TEST_ABILITY = 'TEST';

const mountAttributesCard = () => {
  <AttributesCard weight={TEST_WEIGHT} height={TEST_HEIGHT} ability={TEST_ABILITY} />;
};

describe('Attributes Card', () => {
  it('Mounts', () => {
    mountAttributesCard();
  });

  it('Displays weight', () => {
    mountAttributesCard();
    cy.contains(/WEIGHT/).should('be.visible');
    cy.contains(TEST_WEIGHT).should('be.visible');
  });

  it('Displays height', () => {
    mountAttributesCard();
    cy.contains(/HEIGHT/).should('be.visible');
    cy.contains(TEST_HEIGHT).should('be.visible');
  });

  it('Displays ability', () => {
    mountAttributesCard();
    cy.contains(/ABILITY/).should('be.visible');
    cy.contains(TEST_ABILITY).should('be.visible');
  });
});
