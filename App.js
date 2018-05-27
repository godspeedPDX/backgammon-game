/* exported App */
/* globals DiceRoller, GameBoard */

'use strict';

const appTemplate = document.getElementById('app-template');

class App {
    constructor() {

    }

    render() {
        const dom = appTemplate.content;

        const diceRollerSection = dom.getElementById('dice-roller');
        const diceRollerComponent = new DiceRoller();
        diceRollerSection.appendChild(diceRollerComponent.render());
        
        const gameBoardSection = dom.getElementById('game-board');
        const gameBoardComponent = new GameBoard();
        gameBoardSection.appendChild(gameBoardComponent.render());

        return dom;
    }
}