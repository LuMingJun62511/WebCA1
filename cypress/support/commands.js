// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('requestPopular', (page) => {
    cy.request(
        `https://api.themoviedb.org/3/person/popular?api_key=${Cypress.env("TMDB_KEY")}&language=en-US&page=${page}`
    )
})

Cypress.Commands.add('writedown', (res,toWrite) => {
    res = toWrite
    return res
})

Cypress.Commands.add('jumpToPop', () => {
    cy.visit("/people/popular");
    
})


// 虽然我放弃了这个东西，但是我还是要借机了解一些知识，不然就白费了，首先是闭包，闭包是什么？

//今日份战略目标
//1，自定义命令，3个
//2，bundle.2个
//3，新建只负责部署的分支，
//提交gitlab并完成readme，