"use client";
import "./styles/header.scss";
import "./styles/todoList.scss";
import "./styles/container.scss";
import Image from "next/image";
import { useTodo } from "./hooks";
import { Button, CreateTodoModal, TodoCard } from "./components";

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
        <Button onClick={openCreateModal}>Adicionar nova tarefa</Button>
        <CreateTodoModal />
      </main>
    </div>
  );
}
