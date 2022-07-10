const expect = chai.expect;

describe('war' function(){
    it('should play the players turns' function(){
        const gameWar = new Player('shogunDude', 'jarlMan');
        expect(gameWar.arr).to.equal('Players take turns');
    });
});