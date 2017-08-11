import expect from 'expect';

import TodoAPI from 'TodoAPI';

describe('TodoAPI', ()=>{
    beforeEach(()=>{
        localStorage.removeItem('todosData');
    });

    it('should exist', ()=>{
        expect(TodoAPI).toExist();
    });

    describe('filterTodos', ()=>{
        const todos = [
            {id: 1, text: 'Some text here', completed: true},
            {id: 2, text: 'Other text here', completed: false},
            {id: 3, text: 'Some text here', completed: true}
        ];

        it('should return all items if showCompleted is true', ()=>{
            const filteredTodos =  TodoAPI.filterTodos(todos, true, '');
            expect(filteredTodos.length).toBe(3);
        });

        it('should only return uncompleted items if showCompleted is false', ()=>{
            const filteredTodos =  TodoAPI.filterTodos(todos, false, '');
            expect(filteredTodos.length).toBe(1);
        });

        it('should sort by completion status', ()=>{
            const filteredTodos = TodoAPI.filterTodos(todos, true, '');
            expect(filteredTodos[0].completed).toBe(false);
        });

        it('should filter todos by search text', ()=>{
            const filteredTodos =  TodoAPI.filterTodos(todos, true, 'some');
            expect(filteredTodos.length).toBe(2);
        });

        it('should return all items if searchText is empty', ()=>{
            const filteredTodos =  TodoAPI.filterTodos(todos, true, '');
            expect(filteredTodos.length).toBe(3);
        });
    });
})
