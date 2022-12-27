const URL = "http://localhost:3000/todos";

const addTodo = (newTodo) => {
  // post
  return fetch(URL, {
    method: "POST",
    body: JSON.stringify(newTodo),
    headers: { "Content-Type": "application/json" },
  }).then((res) => res.json());
};

const removeTodo = (id) => {
  return fetch(URL + `/${id}`, {
    method: "DELETE",
  }).then((res) => res.json());
};

const getTodos = () => {
  return fetch(URL).then((res) => res.json());
};

const updateTodo = (id, field, value) => {
  return fetch(`${URL}/${id}`, {
    method: "PATCH",
    body: JSON.stringify({ [field]: value }),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => {
    return res.json();
  });
};

export { addTodo, removeTodo, getTodos, updateTodo };
