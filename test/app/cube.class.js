const Main = require('./main');

class Cube extends Main {
    constructor() {
        super();
    }
    get cubeContainerElement() {
        return browser.element('[data-qa-id=cubeContainer]');
    }
    get cubeCheckElement() {
        return browser.element('[data-qa-id=cubeChecksContainer]');
    }
    get clockLinkElement() {
        return browser.element('[data-qa-id=clockLink]');
    }
    get clockContainerElement() {
        return browser.element('[data-qa-id=clockContainer]');
    }
    showSide1() {
        var cubeContainer = this.cubeContainerElement;
        var checkContainer = this.cubeCheckElement;
        var radio1 = checkContainer.element('div:first-child label:first-of-type input');
        radio1.click();
        browser.pause(500);
        var className = cubeContainer.element('div:first-child').getAttribute('class');
        return className.match(/side1/g)[0];
    }
    showSide2() {
        var cubeContainer = this.cubeContainerElement;
        var checkContainer = this.cubeCheckElement;
        var radio = checkContainer.element('div:first-child label:nth-child(2) input');
        radio.click();
        browser.pause(500);
        var className = cubeContainer.element('div:first-child').getAttribute('class');
        return className.match(/side2/g)[0];
    }
    showSide3() {
        var cubeContainer = this.cubeContainerElement;
        var checkContainer = this.cubeCheckElement;
        var radio = checkContainer.element('div:first-child label:nth-child(3) input');
        radio.click();
        browser.pause(500);
        var className = cubeContainer.element('div:first-child').getAttribute('class');
        return className.match(/side3/g)[0];
    }
    showSide4() {
        var cubeContainer = this.cubeContainerElement;
        var checkContainer = this.cubeCheckElement;
        var radio = checkContainer.element('div:first-child label:nth-child(4) input');
        radio.click();
        browser.pause(500);
        var className = cubeContainer.element('div:first-child').getAttribute('class');
        return className.match(/side4/g)[0];
    }
    showSide5() {
        var cubeContainer = this.cubeContainerElement;
        var checkContainer = this.cubeCheckElement;
        var radio = checkContainer.element('div:first-child label:nth-child(5) input');
        radio.click();
        browser.pause(500);
        var className = cubeContainer.element('div:first-child').getAttribute('class');
        return className.match(/side5/g)[0];
    }
    showSide6() {
        var cubeContainer = this.cubeContainerElement;
        var checkContainer = this.cubeCheckElement;
        var radio = checkContainer.element('div:first-child label:nth-child(6) input');
        radio.click();
        browser.pause(500);
        var className = cubeContainer.element('div:first-child').getAttribute('class');
        return className.match(/side6/g)[0];
    }
    clickClockLink() {
        var clockLink = this.clockLinkElement;
        clockLink.click();
        var clockContainer = this.clockContainerElement;
        clockContainer.waitForExist(5000);
        browser.pause(2000);
        return clockContainer !== null;
    }
}

module.exports = Cube;
