import {reducer} from './reducer';
import {restartGame, makeGuess, generateAuralUpdate} from './actions';

describe ('reducer', () => {
    // set up some dummy data
    const correctAns1 = 1;

    const testGuess1 = 100;
    const testGuess2 = 50;
    const testGuess3 = 20;
    const testGuess4 = 5;
});

it('Should set the initial s tate when nothing is passed in', () => {
    const state = reducer(undefined, {type: '__UNKNOWN'});
    expect(state.guesses).toEqual([]);
    expect(state.feedback).toEqual('Make your guess!');
    expect(state.auralStatus).toEqual('');
    expect(state.correctAnswer).toEqual(Math.round(Math.random() * 100) + 1);
});

it('Should return the current state on an unknown action', () => {
    let currentState = {};
    const state = reducer(currentState, {type: '__UNKNOWN'});
    expect(state).toBe(currentState);
});


describe('restartGame', () => {
    it('Should restart game', () => {
        let state = {
            guesses: [4, 25, 30, 75],
            feedback: "You're Hot!",
            auralStatus: '',
            correctAnswer: 100
        };
        const correctAnswer = 10;
        state = reducer(state,restartGame(correctAnswer));
        expect(state.guesses).toEqual([]);
        expect(state.feedback).toEqual('Make your guess!');
        expect(state.auralStatus).toEqual('');
        expect(state.correctAnswer).toEqual(Math.round(Math.random() * 100) + 1);
    });
});

describe('makeGuess', () => {
    it('Make a guess', () => {
        let state;
        state = reducer(state, makeGuess(testGuess1));
        expect(state.guesses).toEqual(testGuess1);
        expect(state.feedback).toEqual("You're Ice Cold...");

        state = reducer(state, makeGuess(testGuess2));
        expect(state.guesses).toEqual(testGuess1, testGuess2);
        expect(state.feedback).toEqual("You're Cold...");

        state = reducer(state, makeGuess(testGuess3));
        expect(state.guesses).toEqual(testGuess1, testGuess2, testGuess3);
        expect(state.feedback).toEqual("You're Warm.");

        state = reducer(state, makeGuess(testGuess4));
        expect(state.guesses).toEqual(testGuess1, testGuess2, testGuess3, testGuess4);
        expect(state.feedback).toEqual("You're Hot!");
    });
});


