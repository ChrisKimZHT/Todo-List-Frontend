import axios from "axios";

const baseURL = "http://127.0.0.1:4523/m1/2003149-0-default"

export const service = {
  todo: {
    create: (todoData) => {
      return axios({
        baseURL,
        method: "POST",
        url: "todo/create",
        params: { data: todoData },
      })
    },
    delete: (id) => {
      return axios({
        baseURL,
        method: "DELETE",
        url: "todo/delete",
        params: { id },
      })
    },
    list: () => {
      return axios({
        baseURL,
        method: "GET",
        url: "todo/list",
      })
    },
    get: (id) => {
      return axios({
        baseURL,
        method: "GET",
        url: "todo/get",
        params: { id },
      })
    },
    toggleFinish: (id) => {
      return axios({
        baseURL,
        method: "GET",
        url: "todo/toggleFinish",
        params: { id },
      })
    },
  }

}