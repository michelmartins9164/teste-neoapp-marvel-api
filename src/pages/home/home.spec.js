import cypress from 'cypress';

describe('The Home Page', () => {
    it('successfully loads', () => {
        cypress.visit('http://localhost:3000/')
    })
})