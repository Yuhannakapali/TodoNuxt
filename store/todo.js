import Cookies from "js-cookie";

export const state = () => ({
  list: [],
});

export const mutations = {
  add(state, task) {
    let length = state.list.length;
    let obj = {
      id: length,
      task: task,
      status: false,
    };
    state.list.push(obj);
    Cookies.remove("taskList");
    Cookies.set("taskList", JSON.stringify(state.task));
    state.list = JSON.parse(Cookies.get("taskList"));
    pg;
  },
  remove(state, { todo }) {
    state.list.splice(state.list.indexOf(todo), 1);
    Cookies.remove("taskList");
    Cookies.set("taskList", JSON.stringify(state.task));
    state.list = JSON.parse(Cookies.get("tasklist"));
  },
  toggle(state, { todo }) {
    state.list.forEach((element) => {
      if (element === todo) {
        element.status = !element.status;
      }
    });
    Cookies.remove("taskList");
    Cookies.set("taskList", JSON.stringify(state.task));
    state.list = JSON.parse(Cookies.get("tasklist"));
  },
  sync(state) {
    if (Cookies.get("todoList")) {
      state.list = JSON.parse(Cookies.get("todoList"));
    } else {
      state.list = [];
    }
  },
};

export const getters = {
  getList(state) {
    return state.list;
  },
};

export const action = {
  addtodos({ commit }) {
    commit("add");
  },
};
