describe('Ticket', function(){
    it('buyNow', function(){
        cy.visit('http://localhost:3000/buyNow')
        cy.get('input[id="email"]').type('Komsi2018@gmail.com')
        cy.get('input[id="name"]').type('Komputer dan Sistem Informasi')
        cy.get('input[id="choosenmovie"]').type('The Invisible Man')
        cy.get('input[id="jmltiket"]').type('2')
        // cy.pause()
        
        cy.get('.ant-btn').contains('Finish').should('be.visible').click()
        // cy.post()
        
    })
    it('history', function(){
        cy.visit('http://localhost:3000/history')
        // cy.get('.anticon anticon-delete').should('be.visible').click()
    })
    
})