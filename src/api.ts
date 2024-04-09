import axios from "axios";

export const fetchTodos = async (token: string, search: string) => {
  const response = await axios.get(
    "http://localhost:3000/todos" + (search !== "" ? `/?q=${search}` : ""),
    {
      headers: {
        authorization: `Bearer ${token}`,
      },
    }
  );

  console.log(`TODOS: ${response.data}`);
  console.log(`type: ${typeof response.data}`);

  return response.data;
};
