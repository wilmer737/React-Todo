var expect = require('expect');
import firebase, {firebaseRef} from 'app/firebase/';
var actions = require('actions');

describe('Actions', () => {
    it('should generate search text action', () => {
        var action = {type: 'SET_SEARCH_TEXT', searchText: 'lemony'};
        var res = actions.setSearchText(action.searchText);
        expect(res).toEqual(action);
    });

    it('should generate add todo action', () => {
        var action = {type: 'ADD_TODO', todo: {
            id: 123,
            text: 'anything',
            completed: false,
            createdAt: 23,
        }};
        var res = actions.addTodo(action.todo);
        expect(res).toEqual(action);
    });

    it('should generate toggle show completed action', () => {
        var action = {type: 'TOGGLE_SHOW_COMPLETED'};
        var res = actions.toggleShowCompleted(action.text);
        expect(res).toEqual(action);
    });

    it('should generate add todos action object', () => {
        var todos = [
            {
                id: 111,
                text: 'anything',
                completed: false,
                completedAt: undefined,
                createdAt: 33000
            }
        ];

        var action = {
            type: 'ADD_TODOS',
            todos,
        };

        var res = actions.addTodos(todos);
        expect(res).toEqual(action);
    });

    it('should generate update todo action', () => {
        var action = {type: 'UPDATE_TODO', id: 1, updates: {completed: false}};
        var res = actions.updateTodo(action.id, action.updates);
        expect(res).toEqual(action);
    });

    describe('test with firebase todos', () => {
        var testTodoRef;

        beforeEach((done) => {
            testTodoRef = firebaseRef.child('todos').push();

            testTodoRef.set({
                text: 'something fake',
                completed: false,
                createdAt: 32432,
            }).then(() => done());
        });

        afterEach((done) => {
            testTodoRef.remove().then(() => done())
        });
    });
});
