#language: pt

Funcionalidade: Teste Stefanini

Como usuario, desejo acessar a página de cadastro de usuários da Stefanini
Para que possa cadastrar novos usuários
    
Contexto:
    Dado que eu esteja no navegador
    E eu acesso a página de cadastro de usuários da Stefanini


@e2e
Cenário: Verificar se os campos Nome, E-mail e Senha estão com valor inicial vazio
    Entao verifico que os campos estão com valores iniciais vazios
    
@e2e
Cenário: Verificar se os valores do campo Senha estão mascarados, ocultando os valores
    Quando eu digito no campo Senha
    Entao eu verifico que os valores informados estão mascarados
    
@e2e
Cenário: Validar se o botão Cadastrar tendo preenchido os campos Nome, E-mail e Senha com dados válidos, realiza o envio dos dados inseridos para a tabela de resultados
    E digito nos campos Nome, E-mail e Senha corretamente
    Quando clico no botão Cadastrar
    Entao eu vejo os valores inseridos na tabela de resultados
    
@e2e
Cenário: Verificar se ao acionar o botão Cadastrar sem ter preenchido algum dos campos Nome, E-mail e Senha, o sistema apresenta mensagem de erro
    Quando clico no botão Cadastrar sem ter preenchido algum dos campos
    Entao o sistema exibe a mensagem de erro para cada um dos campos não preenchidos
    
@e2e
Cenário: Verificar se ao acionar o botão Cadastrar tendo preenchido somente o primeiro nome no campo Nome, o sistema apresenta mensagem de erro
    E digito apenas o primeiro nome
    E digito um e-mail válido
    E digito uma senha válida
    Quando clico no botão Cadastrar
    Entao o sistema exibe a mensagem de erro 'Por favor, insira um nome completo.'

@e2e
Cenário: Verificar se ao acionar o botão Cadastrar tendo preenchido o campo E-mail com um e-mail inválido, o sistema apresenta mensagem de erro
    E digito o nome completo
    E digito um e-mail inválido
    E digito uma senha válida
    Quando clico no botão Cadastrar
    Entao o sistema exibe a mensagem de erro "Por favor, insira um e-mail válido."
    
@e2e
Cenário: Verificar se ao acionar o botão Cadastrar tendo preenchido o campo Senha com menos de 8 caracteres, o sistema apresenta mensagem de erro
    E digito o nome completo
    E digito um e-mail válido
    E digito uma senha com menos de 8 caracteres
    Quando clico no botão Cadastrar
    Entao o sistema exibe a mensagem de erro sobre senha errada "A senha deve conter ao menos 8 caracteres."

@e2e
Cenário: Verificar se ao acionar o botão Excluir de um elemento da tabela de usuários, o sistema exclui a linha em questão
    Quando já possui a tabela com usuários cadastrados
    Quando clico no botão "Excluir"
    Entao o sistema exclui a linha em questão com sucesso

@e2e
Cenário: Validar se a tabela de usuários NÃO é exibida enquanto não houver usuários cadastrados
    Quando não houver usuários cadastrados
    Entao verifico que a tabela de usuários não é exibida
    
@e2e
Cenário: Validar ordem de cadastro por id na tabela de usuários
    Quando realizo o cadastro de um novo usuário
    Entao verifico que os usuários estão ordenados por id