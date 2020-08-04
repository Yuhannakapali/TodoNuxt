import Cookies from "js-cookie";

export const state = () => ({
  temp: 0,
  list: [],
});

export const mutations = {
  increase(state) {
    state.temp += 1;
  },
  add(state, task) {
    let length = state.list.length + 1;
    let obj = {
      id: length,
      task: task,
      status: false,
    };
    state.list.push(obj);
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
  getCookies(state) {
    console.log("syncing the tasklist");
    if (Cookies.get("todoList")) {
      console.log(Cookies.get("todoList"));
      state.list = JSON.parse(Cookies.get("todoList"));
    } else {
      state.list = [];
    }
  },

  sync(state) {
    if (state.list !== Cookies.get("taskList")) {
      state.list = Cookies.get("taskList");
    }
  },
};

export const getters = {
  getList(state) {
    return state.list;
  },
};

export const actions = {
  increment({ commit }) {
    commit("increase");
  },
  addtodos({ commit }, value) {
    commit("add", value);
    commit("sync");
  },

  test({ commit }) {
    commit("getCookies");
  },
};
