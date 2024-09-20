"use client";
import { createContext, ReactNode, useState } from "react";

interface Todo {
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
  createTodo: (label: string) => void;
  toggleTodo: (id: number) => void;
  removeTodo: (id: number) => void;
}

export const TodoContext = createContext<TodoContextProps | undefined>(
  undefined
);

const initialTodoList: Todo[] = [];

export const TodoProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [todoList, setTodoList] = useState(initialTodoList);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [idCounter, setIdCounter] = useState(1);

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

  const removeTodo = (id: number) => {
    setTodoList(todoList.filter((todo) => todo.id !== id));
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
        createTodo,
        toggleTodo,
        removeTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
