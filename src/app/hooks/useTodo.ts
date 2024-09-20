import { useContext } from "react";
import { TodoContext } from "../context";

export const useTodo = () => {
  const context = useContext(TodoContext);

  if (!context) {
    throw new Error("Use o useTodo dentro do provider");
  }

  return context;
};
