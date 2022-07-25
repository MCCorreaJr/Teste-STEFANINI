const elem = require('./elements').ELEMENTS

class pgCadastro {

    definirTamanhoJanela() {
        cy.viewport(1280, 880);
    }

    acessarPagina() {
        cy.visit('http://prova.stefanini-jgr.com.br/teste/qa/');
    }

    clicarCadastrar() {
        cy.get(elem.botaoCadastrar).click();
    }

    validaTituloPagina(){
        cy.title().should('eq', 'Cadastro de usuários');
    }

    digitarNomeCompleto(){
        cy.get(elem.nome).type('Manoel Correa Junior');
    }

    digitarPrimeiroNome(){
        cy.get(elem.nome).type('Manoel');
    }

    digitarEmailValido(){
        cy.get(elem.email).type('manoel@email.com');
    }

    digitarEmailInvalido(){
        cy.get(elem.email).type('manoel.email.com');
    }

    digitarSenhaValida(){
        cy.get(elem.senha).type('12345678');
    }

    digitarSenhaInvalida(){
        cy.get(elem.senha).type('123456');
    }

    preencherCadastroUsuario(nomeCompleto, email, senha){
        cy.get(elem.nome).type('Manoel Correa Junior');
        cy.get(elem.email).type('manoel@email.com');
        cy.get(elem.senha).type('12345678')  ;
        this.clicarCadastrar ;
    }
    validaCamposObrigatorios(){
        cy.get(elem.nome).should('to.be.empty');
        cy.get(elem.email).should('to.be.empty');
        cy.get(elem.senha).should('to.be.empty') ;
    }

    excluirUsuario(){
        cy.get(elem.botaoExcluir).click();
    }
    tabelaUsuario(){
        cy.get(elem.tabela).should('be.visible');
    }

    tabelaUsuarioinv(){
        cy.get(elem.tabela).should('not.exist');
    }

    validaSenhaMascarada(){
        cy.get(elem.senha).should('have.attr', 'type', 'password');
    }

    validaErroCamposVazios(){
        this.validaErroNome
        this.validaErroEmail
        this.validaErroSenha
    }
    validaErroNome(){
        cy.contains(elem.erroNome).should('be.visible');
    }
    validaErroEmail(){
        cy.contains(elem.erroEmail).should('be.visible');
    }
    validaErroSenha(){
        cy.contains(elem.erroSenha).should('be.visible');
    }

    validaExclusaolinha2(){
        cy.get(elem.segundoUsuario).should('not.exist');
    }



}

export default new pgCadastro();