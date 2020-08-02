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
  },
  remove(state, { todo }) {
    state.list.splice(state.list.indexOf(todo), 1);
  },
  toggle(state, { todo }) {
    state.list.forEach((element) => {
      if (element === todo) {
        element.status = !element.status;
      }
    });
    Cookies.remove("taskList");
    Cookies.set("taskList", state.list);
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
  addtodos(context) {},
};
