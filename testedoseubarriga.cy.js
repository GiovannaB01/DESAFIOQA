describe('Automação de testes - Seu Barriga', () => {
   it('verificar abertura visível do login', () =>{
    cy.visit('https://seubarriga.wcaquino.me/login')
       
   
    cy.contains('Email');
    cy.contains('Senha');
    cy.contains('Login');
    cy.contains('Novo usuário');
    cy.contains('Seu Barriga');
    cy.contains('Entrar');
   })

   it('verificar vísual do novo usuário', () =>{
    cy.visit('https://seubarriga.wcaquino.me/cadastro')

    cy.contains('Nome');
    cy.contains('Email');
    cy.contains('Senha');
    cy.contains('Cadastrar');

  })
 
  it('verificar cadastro', () =>{
    cy.visit('https://seubarriga.wcaquino.me/cadastro')  
    cy.get('#nome').should('exist');
    cy.get('#email').should('exist');
    cy.get('#senha').should('exist');

    cy.get('#nome').type('testecom');
    cy.get('#email').type('teste123@com');
    cy.get('#senha').type('senha1234');
    cy.contains('Cadastrar').click();

//Login
 cy.contains('Login').should('be.visible'); 
    cy.contains('Login').click();
   
    cy.get('#email').should('exist');
    cy.get('#senha').should('exist');

     cy.get('#email').type('teste123@com');
     cy.get('#senha').type('senha1234');
     cy.contains('Entrar').click();
 
//Home
 cy.contains('Home').should('be.visible');
     cy.contains('Conta');
     cy.contains('Saldo');
     cy.get('span > a').click()
     cy.contains('Conta para movimentacoes');
     cy.contains('Conta com movimentacao');
     cy.contains('Conta para saldo');
     cy.contains('Conta para extrato');

     cy.get('.caret').click();
     cy.get('.dropdown-menu > :nth-child(1) > a').click();

//adicionar contas
 cy.visit('https://seubarriga.wcaquino.me/addConta')
     cy.contains('Nome');
     cy.contains('Salvar');

     cy.get('#nome').should('exist');
     cy.get('#nome').type('Festas de aniversário');
     cy.contains('Salvar').click();

//listar contas 
 cy.visit('https://seubarriga.wcaquino.me/contas')
 cy.contains('Contas').should('be.visible');
     cy.contains('Conta');
     cy.contains('Ações');

     cy.get('tbody > :nth-child(1) > :nth-child(2)').click()
    
//criar movimentações
 cy.visit('https://seubarriga.wcaquino.me/movimentacao')
 cy.contains('Criar Movimentação').should('be.visible');
     cy.contains('Criar Movimentação').click()
     cy.contains('Tipo da Movimentação');
     cy.contains('Data da Movimentação');
     cy.contains('Data do Pagamento');
     cy.contains('Descrição');
     cy.contains('Interessado');
     cy.contains('Valor');
     cy.contains('Conta');
     cy.contains('Situação');
     cy.contains('Pago');
     cy.contains('Pendente');
    
     cy.get('#tipo').select('Despesa');
     cy.get('#data_transacao').type('27/09/2000');
     cy.get('#data_pagamento').type('25/12/2010');
     cy.get('#descricao').type('Festas de aniversário');
     cy.get('#interessado').type('teste_user');
     cy.get('#valor').type('1200.00')
     cy.get('#conta').select('Festas de aniversário')
     cy.contains('Pago').click();
     cy.contains('Pendente').click();
     cy.get('.btn').click();

//Resumo mensal
 cy.visit('https://seubarriga.wcaquino.me/extrato')
 cy.contains('Resumo Mensal').should('be.visible');
     cy.contains('Descrição');
     cy.contains('Dt Pagamento');
     cy.contains('Conta');
     cy.contains('Valor');
     cy.contains('Situação');
     cy.contains('Ações');
    
     cy.get('#mes').select('Dezembro');
     cy.get('#ano').select('2010');
     cy.get('.btn').click();


//Sair
 cy.contains('Sair').should('be.visible');
     cy.contains('Sair').click();
  
   })
    
  })