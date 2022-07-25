import pgCadastro from "../../support/pages/cadastro";

Given(/^que eu esteja no navegador$/, () => {
    pgCadastro.definirTamanhoJanela();
	pgCadastro.acessarPagina();
});

And(/^eu acesso a página de cadastro de usuários da Stefanini$/, () => {
	pgCadastro.validaTituloPagina();
});

Then(/^verifico que os campos estão com valores iniciais vazios$/, () => {
	pgCadastro.validaCamposObrigatorios();
});

When(/^eu digito no campo Senha$/, () => {
	pgCadastro.digitarSenhaValida();
});

Then(/^eu verifico que os valores informados estão mascarados$/, () => {
	pgCadastro.validaSenhaMascarada();
});


And(/^digito nos campos Nome, E-mail e Senha corretamente$/, () => {
	pgCadastro.preencherCadastroUsuario('Manoel Junior', 'manoel@email.com', '12345678');
});

When(/^clico no botão Cadastrar$/, () => {
	pgCadastro.clicarCadastrar();
});

Then(/^eu vejo os valores inseridos na tabela de resultados$/, () => {
	pgCadastro.tabelaUsuario();
});



When(/^clico no botão Cadastrar sem ter preenchido algum dos campos$/, () => {
	pgCadastro.clicarCadastrar();
});

Then(/^o sistema exibe a mensagem de erro para cada um dos campos não preenchidos$/, () => {
	pgCadastro.validaErroCamposVazios();
});


And(/^digito apenas o primeiro nome$/, () => {
	pgCadastro.digitarPrimeiroNome();
});

And(/^digito um e-mail válido$/, () => {
	pgCadastro.digitarEmailValido();
});

And(/^digito uma senha válida$/, () => {
	pgCadastro.digitarSenhaValida();
});

When(/^clico no botão Cadastrar$/, () => {
	pgCadastro.clicarCadastrar();
});

Then(/^o sistema exibe a mensagem de erro 'Por favor, insira um nome completo.'$/, () => {
    pgCadastro.validaErroNome();
});



And(/^digito o nome completo$/, () => {
	pgCadastro.digitarNomeCompleto();
});

And(/^digito um e-mail inválido$/, () => {
	pgCadastro.digitarEmailInvalido();
});

And(/^digito uma senha válida$/, () => {
	pgCadastro.digitarSenhaValida();
});

When(/^clico no botão Cadastrar$/, () => {
	pgCadastro.clicarCadastrar();
});

Then(/^o sistema exibe a mensagem de erro "([^"]*)"$/, () => {
	pgCadastro.validaErroEmail();
});

And(/^digito o nome completo$/, () => {
	pgCadastro.digitarNomeCompleto();
});

And(/^digito um e-mail válido$/, () => {
	pgCadastro.digitarEmailValido();
});

And(/^digito uma senha com menos de 8 caracteres$/, () => {
	pgCadastro.digitarSenhaInvalida();
});

When(/^clico no botão Cadastrar$/, () => {
	pgCadastro.clicarCadastrar();
});


Then(/^o sistema exibe a mensagem de erro sobre senha errada "([^"]*)"$/, (args2) => {
	pgCadastro.validaErroSenha();
});

And(/^já possui a tabela com usuários cadastrados$/, () => {
	pgCadastro.preencherCadastroUsuario('Manoel Correa Jr', 'manoel@email.com', '12345678');
	pgCadastro.clicarCadastrar();
    pgCadastro.preencherCadastroUsuario('Julio Correa', 'julio@email.com', '12345678');
    pgCadastro.clicarCadastrar();
});

When(/^clico no botão "([^"]*)"$/, (args1) => {
	pgCadastro.excluirUsuario();
});

Then(/^o sistema exclui a linha em questão com sucesso$/, () => {
	pgCadastro.validaExclusaolinha2()
});



When(/^não houver usuários cadastrados$/, () => {
	pgCadastro.validaCamposObrigatorios();
});

Then(/^verifico que a tabela de usuários não é exibida$/, () => {
	pgCadastro.tabelaUsuarioinv();
});


When(/^realizo o cadastro de um novo usuário$/, () => {
	pgCadastro.preencherCadastroUsuario();
});

Then(/^verifico que os usuários estão ordenados por id$/, () => {
	cy.get('table').then($elements => {
		const strings = [...$elements].map(el => el.innerText)
		expect(strings).to.deep.equal([...strings].sort())
	  })
});