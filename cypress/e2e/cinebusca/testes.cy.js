/// <reference types="cypress"/>

describe('Test homepage', () => {

    it('Boxes disabled', () => { 

        cy.visit("http://localhost:3000/");
        cy.get("#genre1").should("have.value", "null");
        cy.get("#genre2").should("have.value", "null");
        cy.get("#genre3").should("have.value", "null");
        cy.get("#language").should("have.value", "null");
        cy.get("#runtime").should("have.value", "0");
        cy.get("#release_year").should("have.value", "1900");
    });
});

describe('Movie recommendation', () => {

    it('All fields selected', () => { 

        cy.visit("http://localhost:3000/");
        cy.get("#genre1").focus().select("action", {force:true});
        cy.get("#genre2").focus().select("drama", {force:true});
        cy.get("#genre3").focus().select("family", {force:true});
        cy.get("#language").focus().select("portuguese", {force:true});
        cy.get("#runtime").invoke("val", 90).trigger("change");
        cy.get("#release_year").invoke("val", 2000).trigger("change");
        cy.get(".submit").focus().click({force:true});
        cy.get("#movie0_infos").should("have.text", "Hoovey");
        cy.get("#movie1_infos").should("have.text", "Two Rabbits");
        cy.get("#movie2_infos").should("have.text", "Soul Surfer");

    });
});

describe('Return button on recommendation', () => {

    it('Click on return after a recommendation', () => { 

        cy.visit("http://localhost:3000/");
        cy.get("#genre1").focus().select("action", {force:true});
        cy.get("#genre2").focus().select("drama", {force:true});
        cy.get("#genre3").focus().select("family", {force:true});
        cy.get("#language").focus().select("portuguese", {force:true});
        cy.get("#runtime").invoke("val", 90).trigger("change");
        cy.get("#release_year").invoke("val", 2000).trigger("change");
        cy.get(".submit").focus().click({force:true});
        cy.get(".return").focus().click({force:true});
        cy.get("#genre1").should("have.value", "null");
        cy.get("#genre2").should("have.value", "null");
        cy.get("#genre3").should("have.value", "null");
        cy.get("#language").should("have.value", "null");
        cy.get("#runtime").should("have.value", "0");
        cy.get("#release_year").should("have.value", "1900");

    });
});

describe('Empty input', () => {

    it('Empty inputs expect error', () => { 

        cy.visit("http://localhost:3000/");
        cy.get(".submit").click();
        cy.get('.title').should("have.text", "MISSING INFORMATION")
    });
});

describe('Any button', () => {

    it('Genre and language selected but year and runtime as any', () => { 

        cy.visit("http://localhost:3000/");
        cy.get("#genre1").focus().select("action", {force:true});
        cy.get("#genre2").focus().select("drama", {force:true});
        cy.get("#genre3").focus().select("family", {force:true});
        cy.get("#language").focus().select("portuguese", {force:true});
        cy.get("#check_year").focus().click({force:true});
        cy.get("#check_runtime").focus().click({force:true});
        cy.get(".submit").focus().click({force:true});
        cy.get('.title').should("have.text", "MISSING INFORMATION")

    });
});

