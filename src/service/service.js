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
        data: { data },
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
        data: { id },
      })
    },
    update: (data) => {
      return axios({
        baseURL,
        method: "POST",
        url: "todo/update",
        data: { data },
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
    getToday: (year, month, day) => {
      return axios({
        baseURL,
        method: "GET",
        url: "todo/getToday",
        params: { year, month, day },
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
        data: { data },
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
        data: { id },
      })
    },
    update: (data) => {
      return axios({
        baseURL,
        method: "POST",
        url: "note/update",
        data: { data },
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