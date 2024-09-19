import Image from "next/image";
import "./styles/header.scss";
import "./styles/main.scss";
import { TodoCard } from "./components/TodoCard";

const todoList = [
  {
    id: 1,
    label: "Fazer algo",
    completed: false,
  },
  {
    id: 2,
    label: "Fazer mais algo",
    completed: true,
  },
  {
    id: 3,
    label: "Levar o lixo para fora",
    completed: true,
  },
];

export default function Home() {
  return (
    <>
      <header className="header">
        <Image src="/logo.svg" alt="Logo do site" width="150" height="36" />
        <h1>Bem-vindo de volta, Marcus</h1>
        <span>Segunda, 01 de dezembro de 2025</span>
      </header>
      <main>
        <div className="container">
          <h2>Suas tarefas de hoje</h2>
          <ul>
            {todoList.map((todo) => {
              if (todo.completed) return null;
              return <TodoCard key={todo.id} todo={todo} />;
            })}
          </ul>
          <h2>Tarefas finalizadas</h2>
          <ul>
            {todoList.map((todo) => {
              if (!todo.completed) return null;
              return <TodoCard key={todo.id} todo={todo} />;
            })}
          </ul>
        </div>
      </main>
    </>
  );
}
