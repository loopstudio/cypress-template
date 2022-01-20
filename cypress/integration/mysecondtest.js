const { expect } = require("chai")

describe('API Testing Automation Skeleton', () => {

    let tokenValue;

    beforeEach(() => {
    cy.intercept({
      method: 'GET',
      url: 'https://suite-api.lookingglasscyber.com:8000/v1/users/00u14cs79kvsiUaZx0h8/detail',
    }).as('authenticateEndpoint');

    cy.visit('https://suite.lookingglasscyber.com/user-management');
    cy.get('#okta-signin-username').type("eferreira@loopstudio.dev")
    cy.get('#okta-signin-password').type("Edugol202088")
    cy.get('#okta-signin-submit').click()
    cy.wait('@authenticateEndpoint').then(interception => {
      tokenValue = interception.request.headers.authorization;
      cy.log(tokenValue);
    })
  })
  
    it('GET a single post', () => {
        cy.log(tokenValue);
        const authorization = tokenValue;
        cy.request({
          method: 'GET',
          url: 'https://suite-api.lookingglasscyber.com:8000/v1/orgs/1/licenses?status=ACTIVE',
          headers: {
            authorization,
          }
        }).then(resp => {
          expect(resp.status).to.eq(200);
          //expect(resp.body.userId).to.eq(1);
          //expect(resp.body.id).to.eq(1);
          //expect(resp.body.title).to.eq("sunt aut facere repellat provident occaecati excepturi optio reprehenderit");
          //expect(resp.body.body).to.eq("quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto");
        })
      })
})