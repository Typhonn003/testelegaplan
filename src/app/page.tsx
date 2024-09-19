"use client";
import Image from "next/image";
import "./styles/header.scss";
import "./styles/main.scss";
import { TodoCard } from "./components/TodoCard";
import { useState } from "react";

const initialTodoList = [
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
  const [todoList, setTodoList] = useState(initialTodoList);

  const handleTodoCompleted = (id: number) => {
    setTodoList((prevList) =>
      prevList.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

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
            {todoList
              .filter((todo) => !todo.completed)
              .map((todo) => (
                <TodoCard
                  key={todo.id}
                  todo={todo}
                  toggleCompleted={handleTodoCompleted}
                />
              ))}
          </ul>
          <h2>Tarefas finalizadas</h2>
          <ul>
            {todoList
              .filter((todo) => todo.completed)
              .map((todo) => (
                <TodoCard
                  key={todo.id}
                  todo={todo}
                  toggleCompleted={handleTodoCompleted}
                />
              ))}
          </ul>
        </div>
      </main>
    </>
  );
}
