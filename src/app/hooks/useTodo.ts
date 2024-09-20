import { useContext } from "react";
import { TodoContext } from "../context/Context";

export const useTodo = () => {
  const context = useContext(TodoContext);

  if (!context) {
    throw new Error("Use o useTodo no provider");
  }

  return context;
};
