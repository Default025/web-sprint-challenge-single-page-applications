describe('Quotes App', () => {
    beforeEach(() => {
      cy.visit('http://localhost:1234')
    })
  
    const textInput = () => cy.get('input[name=Name]');
    const toppingInput = () => cy.get('input[name=pepperoni]','input[name=sausage]','input[name=onions]','input[name=pineapple]');
    const orderBtn = () => cy.get('button[id="order-button"]');
  
      it('can type in the inputs', () => {
        textInput()
          .should('have.value', '')
          .type('value test')
          .should('have.value', 'value test')
      })
  
      it('the order button works when inputs are filled out', () => {
        textInput().type('value test');
        orderBtn().should('not.be.disabled');
      })

      it('can recieve multiple topping inputs', () => {
        toppingInput().check({ force: true })
        toppingInput.should('be.checked')
      })
  
    })