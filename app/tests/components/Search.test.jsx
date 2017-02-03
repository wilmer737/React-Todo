var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

//var Search = require('Search');
import {Search} from 'Search';

describe('Search', () => {
    it('should exist', () => {
        expect(Search).toExist();
    });

    it('should dispatch set search text action on input change', () => {
        var searchText = 'go back to Medellin';
        var action = {
            type: 'SET_SEARCH_TEXT',
            searchText
        };
        var spy = expect.createSpy();
        var search = TestUtils.renderIntoDocument(<Search dispatch={spy}/>);

        search.refs.searchText.value = searchText;
        TestUtils.Simulate.change(search.refs.searchText);

        expect(spy).toHaveBeenCalledWith(action);
    });

    it('should dispatch toggleShowCompleted when checkbox gets checked', () => {
        var searchText = 'go back to Medellin';
        var action = {
            type: 'TOGGLE_SHOW_COMPLETED'
        };
        var spy = expect.createSpy();
        var search = TestUtils.renderIntoDocument(<Search dispatch={spy}/>);

        search.refs.showCompleted.checked = true;
        TestUtils.Simulate.change(search.refs.showCompleted);
        expect(spy).toHaveBeenCalledWith(action);
    });
});