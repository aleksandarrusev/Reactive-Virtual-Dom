import { pushToArray, popToArray, removeFromArray} from "./core/helpers/";

export const store = {
    data: {
        title: 'Welcome to the ReactiveVDom Demo App',
        todos: ['Make something great', 'Check the Demo App', 'Remove an item from the list'],
    },
    
    actions: {
        addTodo: (e) => {
            const value = document.querySelector('.input').value;
            store.data.todos = popToArray(store.data.todos, value);
        },
        removeTodo: (e, index) => {
            store.data.todos = removeFromArray(store.data.todos, index)
        }
    }
}
