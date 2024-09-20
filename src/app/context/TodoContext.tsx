"use client";
import { createContext, ReactNode, useState } from "react";

export interface Todo {
  id: number;
  label: string;
  completed: boolean;
}

interface TodoContextProps {
  todoList: Todo[];
  isCreateModalOpen: boolean;
  isDeleteModalOpen: boolean;
  setTodoList: (todoList: Todo[]) => void;
  openCreateModal: () => void;
  closeCreateModal: () => void;
  openDeleteModal: () => void;
  closeDeleteModal: () => void;
  setSelectedTodoId: (id: number) => void;
  createTodo: (label: string) => void;
  toggleTodo: (id: number) => void;
  removeTodo: () => void;
}

export const TodoContext = createContext<TodoContextProps | undefined>(
  undefined
);

const initialTodoList: Todo[] = [
  {
    id: 1,
    label: "Lavar as mãos",
    completed: false,
  },
  {
    id: 2,
    label: "Fazer um bolo",
    completed: false,
  },
  {
    id: 3,
    label: "Levar o lixo pra fora",
    completed: true,
  },
];

export const TodoProvider = ({ children }: { children: ReactNode }) => {
  const [todoList, setTodoList] = useState(initialTodoList);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [idCounter, setIdCounter] = useState(4);
  const [selectedTodoId, setSelectedTodoId] = useState(0);

  const createTodo = (label: string) => {
    const newTodo = {
      id: idCounter,
      label,
      completed: false,
    };
    setTodoList([...todoList, newTodo]);
    setIdCounter(idCounter + 1);
    closeCreateModal();
  };

  const toggleTodo = (id: number) => {
    setTodoList((prevList) =>
      prevList.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const removeTodo = () => {
    setTodoList(todoList.filter((todo) => todo.id !== selectedTodoId));
    setSelectedTodoId(0);
    closeDeleteModal();
  };

  const openCreateModal = () => setIsCreateModalOpen(true);
  const closeCreateModal = () => setIsCreateModalOpen(false);

  const openDeleteModal = () => setIsDeleteModalOpen(true);
  const closeDeleteModal = () => setIsDeleteModalOpen(false);

  return (
    <TodoContext.Provider
      value={{
        todoList,
        isCreateModalOpen,
        isDeleteModalOpen,
        setTodoList,
        openCreateModal,
        closeCreateModal,
        openDeleteModal,
        closeDeleteModal,
        setSelectedTodoId,
        createTodo,
        toggleTodo,
        removeTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
