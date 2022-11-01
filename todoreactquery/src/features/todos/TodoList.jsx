import React, { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "react-query";
import {
  getTodos,
  addTodos,
  updateTodos,
  deleteTodos,
} from "../../api/todoApis";

const TodoList = () => {
  const [newTodos, setNewTodos] = useState("");

  const queryClient = useQueryClient();

  const {
    isLoading,
    isError,
    error,
    data: todos,
  } = useQuery("todos", getTodos, {
    select: (data) => data.sort((a, b) => b.id - a.id),
  });

  // add mutation
  const addTodoMutation = useMutation(addTodos, {
    onSuccess: () => {
      // invalidates the cache(todos) and refetch. so when we add new todo
      //  then react-query invalidate cache and refetches the latest data

      queryClient.invalidateQueries("todos");
    },
  });

  const updateTodoMutation = useMutation(updateTodos, {
    onSuccess: () => {
      // invalidates the cache(todos) and refetch. so when we add new todo
      //  then react-query invalidate cache and refetches the latest data

      queryClient.invalidateQueries("todos");
    },
  });

  const deleteTodoMutation = useMutation(deleteTodos, {
    onSuccess: () => {
      // invalidates the cache(todos) and refetch. so when we add new todo
      //  then react-query invalidate cache and refetches the latest data

      queryClient.invalidateQueries("todos");
    },
  });

  const handleSubmit = (e) => {
    // so when you are validating saving data you dont want refresh the page thats why
    e.preventDefault();

    addTodoMutation.mutate({ userId: 1, title: newTodos, completed: false });
    setNewTodos("");
  };

  const newItemSection = (
    <form onSubmit={handleSubmit}>
      <label htmlFor="component-helper">Enter a new Todo: </label>
      <input
        type="text"
        value={newTodos}
        onChange={(e) => setNewTodos(e.target.value)}
        placeholder="Enter new todo"
      />

      <button>Send</button>
    </form>
  );

  let content;
  if (isLoading) {
    content = <div>loading...</div>;
  } else if (isError) {
    content = <div> {error.message}</div>;
  } else {
    // content = JSON.stringify(todos);
    content = todos.map((todo) => {
      return (
        <article key={todo.id}>
          <div className="todo">
            <input
              type="checkbox"
              checked={todo.completed}
              id={todo.id}
              onChange={() =>
                updateTodoMutation.mutate({
                  ...todo,
                  completed: !todo.completed,
                })
              }
            />
            <lable htmlFor={todo.id}>{todo.title}</lable>
          </div>
          <button onClick={() => deleteTodoMutation.mutate({ id: todo.id })}>
            delete
          </button>
        </article>
      );
    });
  }
  return (
    <>
      <h1>Todo List </h1>
      {newItemSection}
      <div>{content}</div>
    </>
  );
};

export default TodoList;
