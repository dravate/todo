import { createStore } from 'vuex';
import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js';


let todos = window.localStorage.getItem('todos');
todos = JSON.parse(todos);
console.log(todos);

const state = { 
    todos: todos ? todos : [],
 } 
const store = createStore({
  state,
  mutations,
  actions,
  getters


});

export default store;
