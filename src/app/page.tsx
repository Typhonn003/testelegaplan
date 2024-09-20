"use client";
import Image from "next/image";
import "./styles/header.scss";
import "./styles/todoList.scss";
import "./styles/button.scss";
import "./styles/container.scss";
import { TodoCard } from "./components/TodoCard";
import { CreateTodoModal } from "./components/CreateTodoModal";
import { useTodo } from "./hooks/useTodo";

export default function Home() {
  const { todoList, openCreateModal } = useTodo();

  return (
    <div className="container">
      <header className="header">
        <Image src="/logo.svg" alt="Logo do site" width="150" height="36" />
        <h1>Bem-vindo de volta, Marcus</h1>
        <span>Segunda, 01 de dezembro de 2025</span>
      </header>
      <main>
        <div className="todoList">
          <h2>Suas tarefas de hoje</h2>
          <ul>
            {todoList
              .filter((todo) => !todo.completed)
              .map((todo) => (
                <TodoCard key={todo.id} todo={todo} />
              ))}
          </ul>
          <h2>Tarefas finalizadas</h2>
          <ul>
            {todoList
              .filter((todo) => todo.completed)
              .map((todo) => (
                <TodoCard key={todo.id} todo={todo} />
              ))}
          </ul>
        </div>
        <button className="btn" onClick={openCreateModal}>
          Adicionar nova tarefa
        </button>
        <CreateTodoModal />
      </main>
    </div>
  );
}
