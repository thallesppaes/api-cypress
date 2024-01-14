/// <reference types="cypress" />
import contrato from '../contracts/produtos.contract'

describe('Teste da funcionalidade produtos', () => {
  let token
  before(() => {
    cy.token('fulano@qa.com', 'teste').then(tkn => { token = tkn })
  });

  it.only('Deve validar contrato de produtos', () => {
    cy.request('produtos').then(response => {
      return contrato.validateAsync(response.body)
    })
  });

  it('Listar produtos', () => {

    cy.request({
      method: 'GET',
      url: 'produtos'
    }).then((response) => {
      expect(response.status).to.equal(200)
      expect(response.body).to.have.property('produtos')
      expect(response.duration).to.be.lessThan(2000)
    })
  })
  it('Cadastrar produtos', () => {
    let produto = `Produto EBAC ${Math.floor(Math.random() * 100000000)}`

    cy.request({
      method: 'POST',
      url: 'produtos',
      body: {
        "nome": produto,
        "preco": 470,
        "descricao": "Mouse",
        "quantidade": 381
      },
      headers: { authorization: token }
    }).then((response) => {
      expect(response.status).to.equal(201)
      expect(response.body.message).to.equal('Cadastro realizado com sucesso')

    });

  });

  it('Deve validar mensagem de erro se cadastrar produto repetido', () => {
    cy.cadastrarProduto(token, 'Produto EBAC Novo 1', 2500, 'Produto Novo', 200)
      .then((response) => {
        expect(response.status).to.equal(400)
        expect(response.body.message).to.equal('Já existe produto com esse nome')

      });
  });

  it('Deve editar um produto já cadastrado', () => {
    cy.request('produtos').then(response => {
      let id = response.body.produtos[0]._id
      cy.request({
        method: 'PUT',
        url: `produtos/${id}`,
        headers: { authorization: token },
        body: {
          "nome": "Produto Editado 542145",
          "preco": 470,
          "descricao": "Produto Editado",
          "quantidade": 381,
        }
      }).then(response => {
        expect(response.body.message).to.equal('Registro alterado com sucesso')
      })
    })
  });

  it('Deve cadastrar um produto previamente', () => {
    let produto = `Produto EBAC ${Math.floor(Math.random() * 100000000)}`
    cy.cadastrarProduto(token, produto, 2500, 'Produto Novo', 200).then(response => {
      let id = response.body._id

      cy.request({
        method: 'PUT',
        url: `produtos/${id}`,
        headers: { authorization: token },
        body: {
          "nome": produto,
          "preco": 200,
          "descricao": "Produto Editado",
          "quantidade": 300,
        }
      }).then(response => {
        expect(response.body.message).to.equal('Registro alterado com sucesso')
      })
    })
  });

  it('Deve deletar um produto previamente cadastrado', () => {
    let produto = `Produto EBAC ${Math.floor(Math.random() * 100000000)}`
    cy.cadastrarProduto(token, produto, 2500, 'Produto Novo', 200).then(response => {
      let id = response.body._id
      cy.request({
        method: 'DELETE',
        url: `produtos/${id}`,
        headers: { authorization: token }
      }).then(response => {
        expect(response.body.message).to.equal('Registro excluído com sucesso')
        expect(response.status).to.equal(200)
      })
    })
  });
});