import "../styles/todoCard.scss";
import Image from "next/image";
import { useTodo } from "../hooks";

interface Todo {
  id: number;
  label: string;
  completed: boolean;
}

export const TodoCard = ({ todo }: { todo: Todo }) => {
  const { openDeleteModal, toggleTodo, setSelectedTodoId } = useTodo();

  const handleTodo = () => {
    openDeleteModal();
    setSelectedTodoId(todo.id);
  };

  return (
    <>
      <li className="todoCard">
        <label htmlFor={todo.id.toString()} onClick={() => toggleTodo(todo.id)}>
          <input
            id={todo.id.toString()}
            type="radio"
            name={todo.label}
            checked={todo.completed}
            readOnly
          />
          <div>
            {todo.completed && (
              <Image
                src="/checked.svg"
                alt="Icone de check"
                width="24"
                height="24"
              />
            )}
          </div>
          <span>{todo.label}</span>
        </label>
        <button
          aria-label={`Botão para excluir a tarefa "${todo.label}"`}
          onClick={handleTodo}
        >
          <Image
            src="/trash.svg"
            alt="Icone de lixeira"
            width="24"
            height="24"
          />
        </button>
      </li>
    </>
  );
};
