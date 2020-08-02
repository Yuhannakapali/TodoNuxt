import Cookies from "js-cookie";
import { datastore } from "googleapis/build/src/apis/datastore";

export const state = () => ({
  list: Cookies.get("todoList") || [],
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
    Cookies.set("todoList", state.list);
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
  },
};

export const getters = {
  getList(state) {
    return state.list;
  },
};

export const action = {
  save() {},
};
