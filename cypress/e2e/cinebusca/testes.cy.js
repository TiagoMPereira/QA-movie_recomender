/// <reference types="cypress"/>

//Este arquivo é um exemplo para a turma C317 utilizar como base na criação de testes de UI com Cypress.

describe('Visit Google', () => {

    it('asser is on google', () => { 

        cy.visit("www.google.com");
        cy.get('#APjFqb').type("cypress");
        cy.wait(1000);
        cy.get('#APjFqb').type("{enter}");
        cy.get('.dmenKe > .cIkxbf > .usJj9c > h3 > .l').should("contain.text", "Why Cypress?")
        //TODO os seus comandos de teste
        
    });
    // it('Cenario de Teste: 2', () => { 
        
    //     //TODO os seus comandos de teste
        
    // });
    // it('Cenario de Teste: 3', () => { 
        
    //     //TODO os seus comandos de teste
        
    // });
    // it('Cenario de Teste: 4', () => { 
        
    //     //TODO os seus comandos de teste
        
    // });
    // it('Cenario de Teste: 5', () => { 
        
    //     //TODO os seus comandos de teste
        
    // });
    // it('Cenario de Teste: 6', () => { 
        
    //     //TODO os seus comandos de teste
        
    // });

});