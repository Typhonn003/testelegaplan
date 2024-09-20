import { useContext } from "react";
import { TodoContext } from "../context/Context";

export const useTodo = () => {
  const context = useContext(TodoContext);

  return context;
};
