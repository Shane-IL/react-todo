module.exports = {
    getTodos: function() {
        const stringTodos = localStorage.getItem('todosData');
        let todos = [];

        try {
            todos = JSON.parse(stringTodos);
        } catch (e) {
            console.error(e);
        }

        return Array.isArray(todos) ? todos : [];
    },

    setTodos: function(todosData) {
        if(Array.isArray(todosData)){
            localStorage.setItem('todosData', JSON.stringify(todosData));
            return todosData;
        }
    }
}
