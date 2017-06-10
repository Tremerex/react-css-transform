var { expect } = require('chai');
var Cube = require('../app/cube.class');
var cube = null;

describe('Cube Scenario', () => {
    before(() => {
        cube = new Cube();
    });
    describe('Cube Module', () => {
        it('Side1', () => {
            let result = cube.showSide1();
            expect(result).to.equals('side1');
        });
        it('Side2', () => {
            let result = cube.showSide2();
            expect(result).to.equals('side2');
        });
        it('Side3', () => {
            let result = cube.showSide3();
            expect(result).to.equals('side3');
        });
        it('Side4', () => {
            let result = cube.showSide4();
            expect(result).to.equals('side4');
        });
        it('Side5', () => {
            let result = cube.showSide5();
            expect(result).to.equals('side5');
        });
        it('Side6', () => {
            let result = cube.showSide6();
            expect(result).to.equals('side6');
        });
        it('click on clock link', () => {
           let result = cube.clickClockLink();
            expect(result).to.equals(true); 
        });
    });
});
