// store/todos.js
const initialData = [
    { id: 1, name: 'Do something awesome!', status: { done: false } },
    { id: 2, name: 'Buy Toilet Paper', status: { done: false } },
    { id: 3, name: 'Learn Vue', status: { done: false } },
]
export const state = () => ({
    todos: [],
})

export const mutations = {
    addTodo(state, todo) {
        state.todos.push(todo)
        if (process.client) localStorage.setItem('todos', JSON.stringify(state.todos))
    },
    toggleTodoStatus(state, id) {
        const todo = state.todos.find((t) => t.id === id)
        if (todo) {
            todo.status.done = !todo.status.done;
            if (process.client) localStorage.setItem('todos', JSON.stringify(state.todos))
        }
    },
    removeTodo(state, id) {
        state.todos = state.todos.filter((todo) => todo.id !== id)
        if (process.client) localStorage.setItem('todos', JSON.stringify(state.todos));
    },
    removeAllDoneTodo(state, id) {
        state.todos = state.todos.filter((todo) => !todo.status.done);
        if (process.client) localStorage.setItem('todos', JSON.stringify(state.todos));
    },
    initializeStore(state) {
        if (process.client) {
            const storedTodos = JSON.parse(localStorage.getItem('todos'))
            if (storedTodos.length) {
                console.log('test', storedTodos)
                state.todos = storedTodos
            } else {
                state.todos = [...initialData];
            }
        }

    },
}

export const actions = {
    addTodo({ commit }, todo) {
        commit('addTodo', todo)
    },
    toggleTodoStatus({ commit }, id) {
        commit('toggleTodoStatus', id)
    },
    removeTodo({ commit }, id) {
        commit('removeTodo', id)
    },
    removeAllDoneTodo({ commit }, id) {
        commit('removeAllDoneTodo', id)
    },
}

