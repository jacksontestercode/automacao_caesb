/// <reference types = 'Cypress' />

describe('GCOM - Atendimento Comercial e Serviços', function(){
// O beforeEach será executado antes de cada teste (it)
    this.beforeEach(function(){
        cy.visit('https://t2.homolog.caesb.df.gov.br/seguranca/app/login')
    })
    it('Fazer login', function(){
        cy.get('#j_username').type('jacksonmendes')
        cy.get('#j_password').type('Administrador)))')
        cy.get('#btEntrar').click()
    })
})
