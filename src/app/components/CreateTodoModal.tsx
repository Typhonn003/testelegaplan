import "../styles/createModal.scss";
import "../styles/wrapper.scss";
import { useState } from "react";
import { useTodo } from "../hooks";
import { Button } from "../components";

export const CreateTodoModal = () => {
  const [title, setTitle] = useState("");
  const { isCreateModalOpen, createTodo, closeCreateModal } = useTodo();

  if (!isCreateModalOpen) return null;
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createTodo(title);
    setTitle("");
  };

  return (
    <div className="wrapper">
      <div className="createModal">
        <h2>Nova Tarefa</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Título:
            <input
              type="text"
              placeholder="Digite"
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </label>
          <div>
            <Button type="submit">Adicionar</Button>
            <Button type="button" onClick={closeCreateModal} color="grey">
              Cancelar
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};
