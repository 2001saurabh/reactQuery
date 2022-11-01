// import axios from "axios";

// const todosApi = axios.create({
//   baseURL: "http://localhost:3500",
// });

// export const getTodos = async () => {
//   const res = await todosApi.get("/todos");
//   return res.data;
// };

// export const addTodos = async (todo) => {
//   return await todosApi.post("/todos", todo);
// };

// export const updateTodos = async (todo) => {
//   // try {
//     return await todosApi.patch(`/todos/${todo.id}`, todo);
//   // } catch (err) {
//   //   console.log(err);
//   // }
// };

// export const deleteTodos = async ({ id }) => {
//   return await todosApi.delete(`/todos/${id}`, id);
// };

// export default todosApi;

import axios from "axios";

const todosApi = axios.create({
  baseURL: "http://localhost:3500",
});

export const getTodos = async () => {
  const response = await todosApi.get("/todos");
  return response.data;
};

export const addTodos = async (todo) => {
  return await todosApi.post("/todos", todo);
};

export const updateTodos = async (todo) => {
  return await todosApi.put(`/todos/${todo.id}`, todo);
};

export const deleteTodos = async ({ id }) => {
  return await todosApi.delete(`/todos/${id}`, id);
};

export default todosApi;
