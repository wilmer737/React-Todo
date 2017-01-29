var expect = require('expect');
var reducers = require('reducers');
var df = require('deep-freeze-strict');

describe('Reducers', () => {
    describe('searchTextReducer', () => {
        it('should set searchText', () => {
            var action = {type: 'SET_SEARCH_TEXT', searchText: 'Dog'};
            var res = reducers.searchTextReducer(df(''), df(action));
            expect(res).toEqual(action.searchText);
        })
    });

    // test show completed gets flipped
    describe('showCompletedReducer', () => {
        it('should toggle showCompleted', () => {
            var action = {type: 'TOGGLE_SHOW_COMPLETED'};
            var showCompleted = false;
            var res = reducers.showCompletedReducer(df(showCompleted), df(action));
            expect(res).toEqual(!showCompleted);
        });
    });
});