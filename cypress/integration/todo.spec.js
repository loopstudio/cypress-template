const { expect } = require("chai")

describe('API Testing Automation Skeleton', () => {

  beforeEach(() => {

    cy.intercept({
      method: 'POST',
      url: 'https://suite-api.lookingglasscyber.com:8000/v1/users/00u14cs79kvsiUaZx0h8/detail',
    }).as('authenticateEndpoint');

    cy.visit('https://suite.lookingglasscyber.com/user-management');

    cy.wait('@authenticateEndpoint').then(interception => {
      tokenValue = interception.request.headers.authorization;
      cy.log(tokenValue);
    })
  
  })

  it('GET a single post', () => {
    cy.request({
      method: 'GET',
      url: 'https://jsonplaceholder.typicode.com/posts/1'
    }).then(resp => {
      expect(resp.status).to.eq(200);
      expect(resp.body.userId).to.eq(1);
      expect(resp.body.id).to.eq(1);
      expect(resp.body.title).to.eq("sunt aut facere repellat provident occaecati excepturi optio reprehenderit");
      expect(resp.body.body).to.eq("quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto");
    })
  })

  it('GET a single post', () => {
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

  it('CREATE a new post', () => {
    cy.request({
      method: 'POST',
      url: 'https://jsonplaceholder.typicode.com/posts',
      body: {
        title: 'My Post Title',
        body: 'Body of my post',
        userId: 1
      },
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      }
    }).then(resp => {
      expect(resp.status).to.eq(201);
      expect(resp.body).to.have.property('title', 'My Post Title')
      expect(resp.body).to.have.property('body', 'Body of my post')
      expect(resp.body).to.have.property('userId', 1)
      expect(resp.body).to.have.property('id', 101)
    })
  })

  it('UPDATE an existing post', () => {
    cy.request({
      method: 'PUT',
      url: 'https://jsonplaceholder.typicode.com/posts/1',
      body: {
        id: 1,
        title: 'Updated title',
        body: 'Updated post body',
        userId: 1
      },
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      }
    }).then(resp => {
      expect(resp.status).to.eq(200);
      expect(resp.body).to.have.property('title', 'Updated title')
      expect(resp.body).to.have.property('body', 'Updated post body')
      expect(resp.body).to.have.property('userId', 1)
      expect(resp.body).to.have.property('id', 1)
    })
  })

  it('DELETE an existing post', () => {
    cy.request({
      method: 'DELETE',
      url: 'https://jsonplaceholder.typicode.com/posts/1'
    }).then(resp => {
      expect(resp.status).to.eq(200);
    })
  })
})
