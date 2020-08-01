export { default as AppHeader } from '../..\\components\\appHeader.vue'
export { default as Joke } from '../..\\components\\joke.vue'
export { default as Logo } from '../..\\components\\Logo.vue'
export { default as SearchBar } from '../..\\components\\searchBar.vue'
export { default as Add } from '../..\\components\\todo\\add.vue'
export { default as Todo } from '../..\\components\\todo\\todo.vue'

export const LazyAppHeader = import('../..\\components\\appHeader.vue' /* webpackChunkName: "components_appHeader'}" */).then(c => c.default || c)
export const LazyJoke = import('../..\\components\\joke.vue' /* webpackChunkName: "components_joke'}" */).then(c => c.default || c)
export const LazyLogo = import('../..\\components\\Logo.vue' /* webpackChunkName: "components_Logo'}" */).then(c => c.default || c)
export const LazySearchBar = import('../..\\components\\searchBar.vue' /* webpackChunkName: "components_searchBar'}" */).then(c => c.default || c)
export const LazyAdd = import('../..\\components\\todo\\add.vue' /* webpackChunkName: "components_todo/add'}" */).then(c => c.default || c)
export const LazyTodo = import('../..\\components\\todo\\todo.vue' /* webpackChunkName: "components_todo/todo'}" */).then(c => c.default || c)
