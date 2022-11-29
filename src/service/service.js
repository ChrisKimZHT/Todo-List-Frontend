import axios from "axios";

// 在config.js中填写
const baseURL = window.Config.apiURL;

export const service = {
  todo: {
    create: (data) => {
      return axios({
        baseURL,
        method: "POST",
        url: "todo/create",
        params: { data },
      })
    },
    nextID: () => {
      return axios({
        baseURL,
        method: "GET",
        url: "todo/nextID",
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
    update: (data) => {
      return axios({
        baseURL,
        method: "POST",
        url: "todo/update",
        params: { data },
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
  },
  note: {
    create: (data) => {
      return axios({
        baseURL,
        method: "POST",
        url: "note/create",
        params: { data },
      })
    },
    nextID: () => {
      return axios({
        baseURL,
        method: "GET",
        url: "note/nextID",
      })
    },
    delete: (id) => {
      return axios({
        baseURL,
        method: "DELETE",
        url: "note/delete",
        params: { id },
      })
    },
    update: (data) => {
      return axios({
        baseURL,
        method: "POST",
        url: "note/update",
        params: { data },
      })
    },
    list: () => {
      return axios({
        baseURL,
        method: "GET",
        url: "note/list",
      })
    },
    get: (id) => {
      return axios({
        baseURL,
        method: "GET",
        url: "note/get",
        params: { id },
      })
    },
    toggleStar: (id) => {
      return axios({
        baseURL,
        method: "GET",
        url: "note/toggleStar",
        params: { id },
      })
    },
  },
}