export default {

    SAVE_TODO(state, todopayload) {
       //  let trucks = window.localStorage.getItem('trucks');
            let new_todo = {
                title: todopayload.title,
                completed: todopayload.completed,
                id: todopayload.id,
            }
            state.todos.push(new_todo);
        window.localStorage.setItem('todos', JSON.stringify(state.todos));
    },
    REMOVE_TODO(state, todopayload) {
        state.todos.splice(todopayload.todoindex, 1);
        window.localStorage.setItem('todos', JSON.stringify(state.todos));

    },
    COMPLETE_TODO(state, todopayload){
        
        const index = state.todos.findIndex(item => item.id === todopayload.todoindex)    
        state.todos[index].completed = true;
        window.localStorage.setItem('todos', JSON.stringify(state.todos));
    }
}
