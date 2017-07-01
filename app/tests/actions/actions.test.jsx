import expect from 'expect';
import * as actions from 'actions';

describe('Actions', () => {
    it('should generate search text actions', () => {
        const action = {
            type: "SET_SEARCH_TEXT",
            searchText: "cows"
        }

        const response = actions.setSearchText(action.searchText);

        expect(response).toEqual(action);
    });

    it('should generate add todo action', () => {
        const action = {
            type: "ADD_TODO",
            text: "Milk the cows"
        }

        const response = actions.addTodo(action.text);

        expect(response).toEqual(action);
    });

    it('should generate show completed action', () => {
        const action = {
            type: "TOGGLE_SHOW_COMPLETED"
        }

        const response = actions.toggleShowCompleted();

        expect(response).toEqual(action);
    });

    it('should generate toggle todo action', () => {
        const action = {
            type: "TOGGLE_TODO",
            id: "1"
        }

        const response = actions.toggleTodo(action.id);

        expect(response).toEqual(action);
    });
});
