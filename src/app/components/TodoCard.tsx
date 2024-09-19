import Image from "next/image";
import "../styles/todoCard.scss";

interface Todo {
  id: number;
  label: string;
  completed: boolean;
}

export const TodoCard = ({ todo }: { todo: Todo }) => {
  return (
    <li className="todoCard">
      <label htmlFor={todo.id.toString()}>
        <input id={todo.id.toString()} type="radio" checked={todo.completed} />
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
      <button aria-label={`Botão para excluir a tarefa "${todo.label}"`}>
        <Image src="/trash.svg" alt="Icone de lixeira" width="24" height="24" />
      </button>
    </li>
  );
};
