import getHelloWorld from '../app'

describe('#app',() => {
    it('should return hello world',() => {
        const message = getHelloWorld();

        expect(message).toBe("Hello, world!");
    })
})