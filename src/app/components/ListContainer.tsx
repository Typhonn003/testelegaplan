import "../styles/todoList.scss";
import type { Todo } from "../context";
import { TodoCard } from "../components";
import { ReactNode } from "react";

const MessageContainer = ({ children }: { children: ReactNode }) => {
  return (
    <div className="todoMessage">
      <p>{children}</p>
    </div>
  );
};

export const ListContainer = ({
  list,
  type,
}: {
  list: Todo[];
  type: "completed" | "uncompleted";
}) => {
  const filteredList =
    type === "completed"
      ? list.filter((todo) => !todo.completed)
      : list.filter((todo) => todo.completed);

  return (
    <ul>
      {filteredList.length ? (
        filteredList.map((todo) => <TodoCard key={todo.id} todo={todo} />)
      ) : type === "completed" ? (
        <MessageContainer>Lista vazia, adicione uma tarefa</MessageContainer>
      ) : (
        <MessageContainer>Lista vazia, termine alguma tarefa</MessageContainer>
      )}
    </ul>
  );
};
